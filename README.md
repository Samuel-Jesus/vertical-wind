# Vertical Wind

**Version:** 0.0.1

Vertical Wind é uma extensão para Visual Studio Code que reorganiza atributos de classes do Tailwind CSS em uma estrutura vertical e agrupada por categorias, com o objetivo de melhorar a legibilidade e a manutenção do código sem alterar o CSS gerado.

A extensão analisa atributos `class` e `className`, separa as utilities, agrupa por categorias semânticas (layout, tamanho, espaçamento, cores, bordas, estados etc.) e reescreve o atributo em múltiplas linhas.  
O comportamento visual do Tailwind permanece idêntico, pois apenas a formatação do código-fonte é modificada.

A execução é manual, via comando ou atalho de teclado, oferecendo controle total sobre quando a formatação será aplicada.

## Como funciona

## Features

- Reorganização vertical automática de classes Tailwind.
- Agrupamento por categorias semânticas.
- Não altera o CSS final.
- Execução manual via Command Palette.
- Suporte a `class` e `className`.
- Funciona em HTML, JSX, TSX e arquivos compatíveis.
- Atalho de teclado configurável.

## Requirements

- Visual Studio Code 1.108 ou superior.
- Projeto que utilize Tailwind CSS (não é obrigatório para funcionar, mas é o foco).
- Node.js apenas para desenvolvimento da extensão (não necessário para uso).

## Extension Settings

Esta extensão pode expor configurações futuras.  
Atualmente não há configurações obrigatórias.

Exemplo de configuração futura planejada:

```json
{
  "verticalWind.groupSpacing": true,
  "verticalWind.blankLineBetweenGroups": true
}
```
