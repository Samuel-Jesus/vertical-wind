import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("vertical-wind.verticalize",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      const doc = editor.document;
      const text = doc.getText();

      const updated = verticalizeClasses(text, doc, editor);

      const fullRange = new vscode.Range(
        doc.positionAt(0),
        doc.positionAt(text.length),
      );

      await editor.edit((edit: vscode.TextEditorEdit) => edit.replace(fullRange, updated));
    },
  );

  context.subscriptions.push(disposable);
}

function verticalizeClasses(
  code: string,
  doc: vscode.TextDocument,
  editor: vscode.TextEditor,
): string {
  const regex = /class(Name)?="([^"]*)"/g;

  const config = vscode.workspace.getConfiguration("verticalWind");
  const customIndent = config.get<number>("indentSize") || 0;

  let indentUnit: string;

  if (customIndent > 0) {
    indentUnit = " ".repeat(customIndent);
  } else {
    const options = editor.options;
    const tabSize = Number(options.tabSize) || 2;
    indentUnit = options.insertSpaces ? " ".repeat(tabSize) : "\t";
  }

  return code.replace(regex, (match, name, classes, offset) => {
    const list = classes.split(/\s+/).filter(Boolean);
    const grouped = group(list);

    const position = doc.positionAt(offset);
    const line = doc.lineAt(position.line).text;

    const baseIndentMatch = line.match(/^\s*/);
    const baseIndent = baseIndentMatch ? baseIndentMatch[0] : "";

    const innerIndent = baseIndent + indentUnit;

    const result =
      "class" +
      (name ?? "") +
      '="\n' +
      grouped
        .map((g) => innerIndent + g.join(" "))
        .join("\n") +
      "\n" +
      baseIndent +
      '"';

    return result;
  });
}

function group(list: string[]) {
  const buckets: Record<string, string[]> = {
    layout: [],
    size: [],
    spacing: [],
    color: [],
    border: [],
    state: [],
    misc: [],
  };

  for (const c of list) {
    if (/^(flex|grid|block)/.test(c)) buckets.layout.push(c);
    else if (/^(w-|h-)/.test(c)) buckets.size.push(c);
    else if (/^(p-|m-)/.test(c)) buckets.spacing.push(c);
    else if (/^(bg-|text-)/.test(c)) buckets.color.push(c);
    else if (/^(rounded|shadow|border)/.test(c)) buckets.border.push(c);
    else if (/^(hover:|focus:|active:)/.test(c)) buckets.state.push(c);
    else buckets.misc.push(c);
  }

  return Object.values(buckets).filter((a) => a.length);
}

export function deactivate() { }
