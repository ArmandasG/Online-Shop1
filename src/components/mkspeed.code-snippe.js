{
    // Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and
    // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope
    // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is
    // used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
    // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders.
    // Placeholders with the same ids are connected.
    // Example:
    // "Print to console": {
    // 	"scope": "javascript,typescript",
    // 	"prefix": "log",
    // 	"body": [
    // 		"console.log('$1');",
    // 		"$2"
    // 	],
    // 	"description": "Log output to console"
    // }
    "log label": {
      "scope": "javascript,typescript, typescriptreact, javascriptreact ",
      "prefix": "llog",
      "body": ["console.log('${CLIPBOARD} ===', ${CLIPBOARD});"],
      "description": "Log kintamasis and value"
    },
    "use strict": {
      "scope": "javascript, typescript, typescriptreact, javascriptreact ",
      "prefix": "ustr",
      "body": [
        "'use strict';",
        "console.log('${TM_FILENAME_BASE}.js was loaded');"
      ],
      "description": "document createElement full line"
    },
    "MK1": {
      "scope": "javascript,typescript, typescriptreact, javascriptreact",
      "prefix": "dgid",
      "body": ["document.getElementById('$1');"],
      "description": "document.getElementById('$1')"
    },
    "MK2": {
      "scope": "javascript,typescript, typescriptreact, javascriptreact",
      "prefix": "dqs",
      "body": ["document.querySelector('$1');"],
      "description": "sitas pagamina querySelector"
    },
    "MK3": {
      "scope": "javascript,typescript, typescriptreact, javascriptreact",
      "prefix": "dqsa",
      "body": ["document.querySelectorAll('$1');"],
      "description": "bla bla bla"
    },
    "Print to console": {
      "scope": "javascript,typescript, typescriptreact, javascriptreact",
      "prefix": "lg",
      "body": ["console.log('$1')"],
      "description": "Log output to console"
    },
  
    "MK44": {
      "scope": "javascript,typescript, typescriptreact, javascriptreact",
      "prefix": "anf",
      "body": ["() => {$1}"],
      "description": "(req, res) => {}"
    },
  
    "import module css": {
      "scope": "javascript,typescript, typescriptreact, javascriptreact ",
      "prefix": "imcss",
      "body": ["import css from './${TM_FILENAME_BASE}.module.css';"],
      "description": "React component"
    },
    "module css classname": {
      "scope": "javascript,typescript, typescriptreact, javascriptreact ",
      "prefix": "mcn",
      "body": ["className={css.$1}"],
      "description": "React component"
    },
    "react prop types": {
      "scope": "javascript, typescript, typescriptreact, javascriptreact ",
      "prefix": "prt",
      "body": [
        "${TM_FILENAME_BASE}.propTypes = { ",
        "${CLIPBOARD}: PropTypes.string",
        "};"
      ],
      "description": "react prop types easy instal"
    }
  }
  