(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1878:function(module,exports){module.exports=function(hljs){var RULES=[],VALUE=[],STRING_MODE=function(c){return{className:"string",begin:"~?"+c+".*?"+c}},IDENT_MODE=function(name,begin,relevance){return{className:name,begin:begin,relevance:relevance}},PARENS_MODE={begin:"\\(",end:"\\)",contains:VALUE,relevance:0};VALUE.push(hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,STRING_MODE("'"),STRING_MODE('"'),hljs.CSS_NUMBER_MODE,{begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",excludeEnd:!0}},IDENT_MODE("number","#[0-9A-Fa-f]+\\b"),PARENS_MODE,IDENT_MODE("variable","@@?[\\w-]+",10),IDENT_MODE("variable","@{[\\w-]+}"),IDENT_MODE("built_in","~?`[^`]*?`"),{className:"attribute",begin:"[\\w-]+\\s*:",end:":",returnBegin:!0,excludeEnd:!0},{className:"meta",begin:"!important"});var VALUE_WITH_RULESETS=VALUE.concat({begin:"{",end:"}",contains:RULES}),MIXIN_GUARD_MODE={beginKeywords:"when",endsWithParent:!0,contains:[{beginKeywords:"and not"}].concat(VALUE)},RULE_MODE={begin:"([\\w-]+|@{[\\w-]+})\\s*:",returnBegin:!0,end:"[;}]",relevance:0,contains:[{className:"attribute",begin:"([\\w-]+|@{[\\w-]+})",end:":",excludeEnd:!0,starts:{endsWithParent:!0,illegal:"[<=$]",relevance:0,contains:VALUE}}]},AT_RULE_MODE={className:"keyword",begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",starts:{end:"[;{}]",returnEnd:!0,contains:VALUE,relevance:0}},VAR_RULE_MODE={className:"variable",variants:[{begin:"@[\\w-]+\\s*:",relevance:15},{begin:"@[\\w-]+"}],starts:{end:"[;}]",returnEnd:!0,contains:VALUE_WITH_RULESETS}},SELECTOR_MODE={variants:[{begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:"([\\w-]+|@{[\\w-]+})",end:"{"}],returnBegin:!0,returnEnd:!0,illegal:"[<='$\"]",relevance:0,contains:[hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,MIXIN_GUARD_MODE,IDENT_MODE("keyword","all\\b"),IDENT_MODE("variable","@{[\\w-]+}"),IDENT_MODE("selector-tag","([\\w-]+|@{[\\w-]+})%?",0),IDENT_MODE("selector-id","#([\\w-]+|@{[\\w-]+})"),IDENT_MODE("selector-class","\\.([\\w-]+|@{[\\w-]+})",0),IDENT_MODE("selector-tag","&",0),{className:"selector-attr",begin:"\\[",end:"\\]"},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"\\(",end:"\\)",contains:VALUE_WITH_RULESETS},{begin:"!important"}]};return RULES.push(hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,AT_RULE_MODE,VAR_RULE_MODE,RULE_MODE,SELECTOR_MODE),{case_insensitive:!0,illegal:"[=>'/<($\"]",contains:RULES}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_less.e016338a5312f7769c22.bundle.js.map