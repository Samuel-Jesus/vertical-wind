# Changelog

Todas as mudanças notáveis da extensão **vertical-wind** serão documentadas neste arquivo.

O formato se inspira em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e este projeto segue [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- Nada ainda.

## [0.2.3] - 2026-02-05

### Added
- Comando `Tailwind: Verticalize Classes` (`vertical-wind.verticalize`) para reorganizar classes Tailwind em blocos verticais por categoria.
- Configuração `verticalWind.groupSpacing` para adicionar (ou não) linha em branco entre grupos de classes.
- Configuração `verticalWind.indentSize` para permitir sobrescrever o tamanho da indentação (0 usa a configuração do editor).
- Atalho de teclado `Ctrl+Alt+V` / `Cmd+Alt+V` para ativar o comando a partir do editor.

### Changed
- Organização das classes Tailwind em grupos (layout, size, spacing, color, border, state, misc) com indentação compatível com as configurações do editor.