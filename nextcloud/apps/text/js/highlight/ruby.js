(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[151],{590:function(e,n,a){"use strict";function i(...e){return e.map(e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n}).join("")}e.exports=function(e){const n="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",a={keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__",built_in:"proc lambda",literal:"true false nil"},s={className:"doctag",begin:"@[A-Za-z]+"},r={begin:"#<",end:">"},c=[e.COMMENT("#","$",{contains:[s]}),e.COMMENT("^=begin","^=end",{contains:[s],relevance:10}),e.COMMENT("^__END__","\\n$")],b={className:"subst",begin:/#\{/,end:/\}/,keywords:a},t={className:"string",contains:[e.BACKSLASH_ESCAPE,b],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:/<<[-~]?'?(\w+)\n(?:[^\n]*\n)*?\s*\1\b/,returnBegin:!0,contains:[{begin:/<<[-~]?'?/},e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[e.BACKSLASH_ESCAPE,b]})]}]},d={className:"number",relevance:0,variants:[{begin:"\\b(".concat("[1-9](_?[0-9])*|0",")(\\.(").concat("[0-9](_?[0-9])*","))?([eE][+-]?(").concat("[0-9](_?[0-9])*",")|r)?i?\\b")},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},o={className:"params",begin:"\\(",end:"\\)",endsParent:!0,keywords:a},g=[t,{className:"class",beginKeywords:"class module",end:"$|;",illegal:/=/,contains:[e.inherit(e.TITLE_MODE,{begin:"[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"}),{begin:"<\\s*",contains:[{begin:"("+e.IDENT_RE+"::)?"+e.IDENT_RE,relevance:0}]}].concat(c)},{className:"function",begin:i(/def\s+/,(l=n+"\\s*(\\(|;|$)",i("(?=",l,")"))),relevance:0,keywords:"def",end:"$|;",contains:[e.inherit(e.TITLE_MODE,{begin:n}),o].concat(c)},{begin:e.IDENT_RE+"::"},{className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[t,{begin:n}],relevance:0},d,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|/,end:/\|/,relevance:0,keywords:a},{begin:"("+e.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[e.BACKSLASH_ESCAPE,b],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(r,c),relevance:0}].concat(r,c);var l;b.contains=g,o.contains=g;const _=[{begin:/^\s*=>/,starts:{end:"$",contains:g}},{className:"meta",begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",starts:{end:"$",contains:g}}];return c.unshift(r),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:a,illegal:/\/\*/,contains:[e.SHEBANG({binary:"ruby"})].concat(_).concat(c).concat(g)}}}}]);
//# sourceMappingURL=ruby.js.map?v=67f08ad2008587ec548f