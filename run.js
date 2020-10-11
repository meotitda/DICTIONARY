const  fs = require('fs') 
const path = require('path')
const parser  = require('d-html-parser').default
const showdown = require('showdown')

const dd = fs.readdirSync(path.join(__dirname, './' ,'DIC/'))

if (!fs.existsSync(path.join(__dirname, './', `output`))) {
  fs.mkdirSync(path.join(__dirname, './', `output`))
}

dd.map((alp) => {
  const d = fs.readdirSync(path.join(__dirname, './' , `DIC/${alp}`))

  if (!fs.existsSync(path.join(__dirname, './', `output/${alp}`))) {
    fs.mkdirSync(path.join(__dirname, './', `output/${alp}`))
  }

  d.map((file) => {
    const output = makeOutput(alp, file)
    fs.writeFile(
      path.join(__dirname, './' , `output/${alp}/${file}`),
      output,
      function (err) {
        if (err) throw err
        console.log('File is created successfully.')
      },
    )
  })
})

// const a = makeOutput('C', 'Coroutine.md')

// console.log(a)

function makeOutput(alp, file) {
  const f = fs
    .readFileSync(path.join(__dirname, './', `DIC/${alp}/${file}`))
    .toString()

  const ast = parser(f)

  const title = getAChildTarget(ast, 'd-title')
  const label = getAChildTarget(ast, 'd-label')
  const origin = getAChildTarget(ast, 'd-origin')
  const mean = getAChildTarget(ast, 'd-mean')
  const pronunciation = getAChildTarget(ast, 'd-pronunciation')
  const relation = getAChildTarget(ast, 'd-relation')

  const titleText = getAChildTarget(title, 'TEXT').text
  const originText = getAChildTarget(origin, 'TEXT').text
  const pronunciationText = getAChildTarget(pronunciation, 'TEXT').text
  let meanText = getAChildTarget(mean, 'span')

  if (meanText && meanText.children && meanText.children.length > 0) {
    meanText = getAChildTarget(meanText, 'TEXT').text
  } else {
    meanText = getAChildTarget(mean, 'TEXT').text
  }

  function getAChildTarget(ast, target) {
    if (!ast || !ast.children) {
      return
    }
    return ast.children.filter((value) => {
      if (value.name) return value.name == target
      if (value.type) return value.type == target
    })[0]
  }

  function getChildrenTarget(ast, target) {
    if (!ast) {
      return
    }
    if (ast.name == target) return ast
    if (ast.type == target) return ast
  }

  function nomalize(text) {
    // prettier-ignore
    const regex = new RegExp('[^\n #]', 'g')
    return text.trim().match(regex).join('')
  }

  function nomalizeKey(text) {
    // prettier-ignore
    if (!text.includes(':')) {
    return text
    }
    const regex = new RegExp('.*: ', 'g')
    if (!text.trim().match(regex)) {
      return ''
    }
    return text.trim().replace(regex, '')
  }

  function regexLabel(text) {
    const regex = new RegExp(/([A-Z])\w+/, 'g')
    return text.match(regex)[0]
  }

  function loopGet(target, start, end, regex) {
    if (!target) return []

    const rootChildren = target.children
    return rootChildren.map((child) => {
      const d = getChildrenTarget(child, 'd-inner')
      if (!d) return
      const rd = getAChildTarget(d, 'TEXT').text

      if (regex) {
        return regexLabel(rd)
      }

      return nomalize(rd.slice(start, end)) + ' '
    })
  }

  const converter = new showdown.Converter({
    simpleLineBreaks: true,
    omitExtraWLInCodeBlocks: true,
    ghCodeBlocks: true,
  })
  converter.setFlavor('github')

  const html = converter.makeHtml(f)

  const contentRegex = new RegExp('<d-content>.*</d-content>', 'gs')

  const uglyContent = html.match(contentRegex)[0]
  const content = uglyContent.slice(15, -15)

  const result = `---
title: ${nomalize(titleText)}
label: [${loopGet(label, undefined, undefined, true).filter((t) => t)}]
origin: ${nomalizeKey(originText)}
pronunciation: ${nomalizeKey(pronunciationText)}
mean: ${nomalizeKey(meanText)}
relation: [${loopGet(relation, 5).filter((t) => t)}]
slug: /${nomalize(titleText)[0]}/${nomalize(titleText)}
---

<content>

${content}

</content>
`
  return result
}
