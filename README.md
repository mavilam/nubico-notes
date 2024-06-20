# Nubico Notes

This project is a Node.js script that converts the exported HTML notes file from a Nubico device into a formatted markdown document. 

## Features

- Parses HTML input
- Extracts content based on predefined patterns
- Formats extracted content into a readable text format

## Prerequisites

- Node.js (v12.0.0 or later)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mavilam/nubico-notes.git
   cd html-to-text-converter
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Place your HTML file in the project directory and change the variable `input.html` in the index.js file.

2. Run the script with the following command:
   ```sh
   node index.js
   ```

3. The output will be a formatted text file in the project directory with the name `output.md`.

## Input HTML Structure

The input HTML should be structured as follows:
```html
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1"/>
</head>
<body>
<div style="...">
  <p style="font-weight:bold;margin:0px 0px 8px;">Type: HIGHLIGHT</p>
  <p style="margin:0px 0px 8px;">Page: 14</p>
  <p style="margin:0px 0px 8px;">Chapter: Jantipa o Del morir</p>
  <p style="margin:0px 0px 8px;">Text: He aquí la fuente última de la perversión en Auschwitz...</p>
  <p style="font-style:italic;margin:0px 0px 8px;text-align:right;">Date: Tue Feb 21 09:01:51 2023</p>
</div>
...
</body>
</html>
```

## Output Text Structure

The output text will be structured as follows:
```
## Jantipa o Del morir

### Página 14

> He aquí la fuente última de la perversión en Auschwitz: si querías sobrevivir, además de víctima, debías ser verdugo. Cada cuadrilla tenía su propio Kapo, con su propio látigo; y cada barracón, su jefe de barracón; y cada crematorio, su Sonderkommando, su cuadrilla especial, encargada de seleccionar, incinerar y dispersar con una pala, por la laguna, las cenizas de los gaseados

### Página 15

> Quizás creerías que, ante una opresión tan cruel, tan descarada, los oprimidos se unirían en un bloque común. Pasó justo al revés. Primero en los guetos y luego en los campos, los nazis pusieron en pie una ficción de independencia judía. Eran judíos quienes administraban autónomamente nuestra propia indignidad, nuestra propia injusticia, creyendo que al menos ellos se salvarían; en puridad, ya se habían condenado a sí mismos

...
```

## License

This project is licensed under the ISC License. 
