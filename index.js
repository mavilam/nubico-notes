const fs = require('fs')
const { JSDOM } = require('jsdom')

const html = fs.readFileSync('input.html', 'utf8')
const dom = new JSDOM(html)
const document = dom.window.document

const highlights = document.querySelectorAll('div')

const groupedHighlights = {}

highlights.forEach(highlight => {
  const chapterElement = highlight.querySelector('p:nth-child(3)')
  const chapterText = chapterElement.textContent.trim().slice(9)
  
  const pageNumberElement = highlight.querySelector('p:nth-child(2)')
  const pageNumber = pageNumberElement.textContent.trim().slice(6)

  const textElement = highlight.querySelector('p:nth-child(4)')
  const text = textElement.textContent.trim().slice(6)

  if (!groupedHighlights[chapterText]) {
    groupedHighlights[chapterText] = {}
  }

  if (!groupedHighlights[chapterText][pageNumber]) {
    groupedHighlights[chapterText][pageNumber] = []
  }

  groupedHighlights[chapterText][pageNumber].push(text)
})

const outputFilename = 'output.md'
let output = ''

for (const chapterText in groupedHighlights) {
  if (groupedHighlights.hasOwnProperty(chapterText)) {
    output += `## Capítulo: ${chapterText}\n\n`

    for (const pageNumber in groupedHighlights[chapterText]) {
      if (groupedHighlights[chapterText].hasOwnProperty(pageNumber)) {
        output += `### Página ${pageNumber}\n\n`

        for (const text of groupedHighlights[chapterText][pageNumber]) {
          output += `> ${text}\n\n`
        }
      }
    }
  }
}

fs.writeFileSync(outputFilename, output)
