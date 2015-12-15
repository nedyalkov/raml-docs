rules = {
    "start": [
        {
            token: "comment",
            regex: "#.*$"
        }, {
            token: "list.markup",
            regex: /^(?:-{3}|\.{3})\s*(?=#|$)/
        }, {
            token: "list.markup",
            regex: /^\s*[\-?](?:$|\s)/
        }, {
            token: "constant",
            regex: "!![\\w//]+"
        }, {
            token: "constant.language",
            regex: "[&\\*][a-zA-Z0-9-_]+"
        }, {
            token: ["meta.tag", "keyword"],
            regex: /^(\s*\w.*?)(\:(?:\s+|$))/
        }, {
            token: ["meta.tag", "keyword"],
            regex: /(\w+?)(\s*\:(?:\s+|$))/
        }, {
            token: "keyword.operator",
            regex: "<<\\w*:\\w*"
        }, {
            token: "keyword.operator",
            regex: "-\\s*(?=[{])"
        }, {
            token: "string", // single line
            regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
        }, {
            token: "string", // multi line string start
            regex: '[|>][-+\\d\\s]*$',
            next: "qqstring"
        }, {
            token: "string", // single quoted string
            regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
        }, {
            token: "constant.numeric", // float
            regex: /(\b|[+\-\.])[\d_]+(?:(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)/
        }, {
            token: "constant.numeric", // other number
            regex: /[+\-]?\.inf\b|NaN\b|0x[\dA-Fa-f_]+|0b[10_]+/
        }, {
            token: "constant.language.boolean",
            regex: "(?:true|false|TRUE|FALSE|True|False|yes|no)\\b"
        }, {
            token: "paren.lparen",
            regex: "[[({]"
        } , {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(name)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(parameters)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(allowMultiple)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(allowedTargets)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(fields)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(type)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(values)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(displayName)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(description)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(annotations)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(location)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(default)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(sendDefaultByClient)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(example)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(repeat)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(enum)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(required)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(validWhen)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(requiredWhen)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(pattern)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(minLength)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(maxLength)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(minimum)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(maximum)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(dateFormat)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(fileTypes)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(queryParameters)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(headers)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(mime)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(schema)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(formParameters)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(code)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(body)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(requestTokenUri)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(authorizationUri)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(tokenCredentialsUri)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(accessTokenUri)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(authorizationGrants)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(scopes)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(describedBy)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(settings)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(responses)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(is)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(securedBy)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(methods)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(uriParameters)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(get|put|post|delete|options|head|patch)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(protocols)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "entity.name.tag.yaml",
            regex: "^[ \\t]*(\\/([^:]+))(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(\\/([^:]+))(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(baseUriParameters)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(key)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(value)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(title)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(version)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(baseUri)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(mediaType)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(schemas)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(traits)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(annotationTypes)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(parameterTypes)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(securitySchemes)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(resourceTypes)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(documentation)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "constant.character.method.yaml",
            regex: "^[ \\t]*(content)(:)((?:(\\![\\w\\!]+)\\s+?)?|\\Z|)"
        }, {
            token: "paren.rparen",
            regex: "[\\])}]"
        }
    ],
    "qqstring": [
        {
            token: "string",
            regex: '(?=(?:(?:\\\\.)|(?:[^:]))*?:)',
            next: "start"
        }, {
            token: "string",
            regex: '.+'
        }
    ]
}

var convertTokens = {
    "comment": "comment",
    "list.markup": "list.markup",
    "constant": "constant",
    "constant.language": "constant.language",
    "meta.tag,keyword": ["meta.tag", "keyword"],
    "keyword.operator": "keyword.operator",
    "string": "string",
    "constant.numeric": "constant.numeric",
    "constant.language.boolean": "constant.language.boolean",
    "paren.lparen": "paren.lparen",
    "paren.rparen": "paren.rparen",
    "constant.character.method.yaml": "comment",
    "entity.name.tag.yaml": "list.markup"
};

rules.start.forEach(function(x){
    x.token = convertTokens[x.token];
});