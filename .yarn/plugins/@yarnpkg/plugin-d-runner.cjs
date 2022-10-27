/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-d-runner",
factory: function (require) {
var plugin=(()=>{var F=Object.create;var w=Object.defineProperty;var I=Object.getOwnPropertyDescriptor;var N=Object.getOwnPropertyNames;var W=Object.getPrototypeOf,M=Object.prototype.hasOwnProperty;var p=(o=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(o,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):o)(function(o){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+o+'" is not supported')});var Q=(o,e)=>{for(var r in e)w(o,r,{get:e[r],enumerable:!0})},T=(o,e,r,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of N(e))!M.call(o,n)&&n!==r&&w(o,n,{get:()=>e[n],enumerable:!(t=I(e,n))||t.enumerable});return o};var O=(o,e,r)=>(r=o!=null?F(W(o)):{},T(e||!o||!o.__esModule?w(r,"default",{value:o,enumerable:!0}):r,o)),$=o=>T(w({},"__esModule",{value:!0}),o);var J={};Q(J,{default:()=>H});var A=p("@yarnpkg/core"),P=p("@yarnpkg/cli");var L=O(p("fs")),V=O(p("path"));var g=class{value;end;child;constructor(e=""){this.value=e,this.end=!1,this.child={}}},D=class{root;cursor;constructor(){this.root=new g,this.cursor=this.root}insert(e){let r=this.root;for(let t=0;t<e.length;t++){let n=e[t];r.child[n]===void 0&&(r.child[n]=new g(n)),r=r.child[n]}r.end=!0}search(e){let r="",t=this.root;for(let n=0;n<e.length;n++){let i=e[n];if(r+=i,t.child[i])t=t.child[i];else return null}return t.end?r:null}iterateSearch(e){return this.cursor.child[e]?(this.cursor=this.cursor.child[e],!0):(this.cursor=this.root,!1)}},b=D;var C=O(p("fs")),Y=(o,e)=>{let r=new Set,t=n=>{if(r.add(n),C.default.lstatSync(n).isFile())return e(n);C.default.readdirSync(n).map(l=>{r.has(l)||t(`${n}/${l}`)})};t(o)},K=Y;var m=class extends Error{constructor(e,r){super(e,r)}};var s={Sharp:"#",Space:" ",LineBreak:`
`,Mark:"!",OpenAngleBrackets:"<",ClosedAngleBrackets:">",A:"a",OpenSqureBracket:"[",CloseSqureBracket:"]",Eqaul:"=",Slash:"/",DoubleQuote:'"',Dash:"-"};var q={Common:"Common",Frontend:"Frontend",Backend:"Backend",Database:"Database",Devops:"Devops"},c={Keyword:"Keyword",Value:"Value"},h=class{_type;_content;constructor(e){this._content=e}get content(){return this._content}},y=class extends h{_attributes;constructor(e,r){super(e),this._attributes=r,this._type=2}get url(){return this._attributes.href}},k=class extends h{constructor(e){super(e),this._type=0}},S=class extends h{constructor(e){super(e),this._type=3}},B=class extends h{constructor(e){if(!Object.values(q).includes(e))throw new m(`${e}\uB294 \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uB77C\uBCA8\uC785\uB2C8\uB2E4.`);super(e),this._type=1}get type(){return this._type}},_=class{tokens={word:null,labels:[],tags:[],body:null};labelTrie;tagKeywordTrie;constructor(){this.labelTrie=new b,this.tagKeywordTrie=new b,Object.values(q).map(e=>this.labelTrie.insert(e)),this.tagKeywordTrie.insert("href")}parse(e){for(let r=0;r<e.length-2;r++)switch(!0){case e[r]+e[r+1]+e[r+2]===s.Dash.repeat(3):{for(r+=3;e[r++]==="-";);if(e[r-1]!==`
`)continue;if(e[r]!==`
`)throw new Error("Invalid Syntax: You need to put a new line after body line");r++;let t="";for(;r<e.length;)t+=e[r++];return this.tokens.body=new S(t),this.tokens}case(e[r]===s.Sharp&&e[r+1]===s.Space):{if(this.tokens.word)throw new Error("Duplciated Word");let t="";for(r+=2;e[r]!==s.LineBreak;)t+=e[r++];this.tokens.word=new k(t);break}case(e[r]===s.Mark&&e[r+1]===s.OpenSqureBracket):{let t="";for(r+=2;this.labelTrie.iterateSearch(e[r]);)t+=e[r++];let n=new B(t);this.tokens.labels.push(n);break}case(e[r]===s.OpenAngleBrackets&&e[r+1]===s.A&&e[r+2]===s.Space):{let t={},n="";r+=3;let i="",l="",a=c.Keyword;for(;e[r]!==s.ClosedAngleBrackets&&r<e.length;){let u=e[r++];if(u===s.Space){if(!i)continue;Object.assign(t,{[i]:l||!0}),i="",l="",a=c.Keyword}else if(u===s.Eqaul){if(!i)throw new Error("\uD0A4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");a=c.Value}else if(a===c.Keyword)i+=u;else{if(u===s.DoubleQuote)continue;l+=u}}if(Object.assign(t,{[i]:l||!!l}),e[++r]!==s.Sharp)throw new Error("\uD0A4\uC6CC\uB4DC\uB294 hash\uC5EC\uC57C \uD569\uB2C8\uB2E4.");for(r++;e[r]!==s.OpenAngleBrackets;)n+=e[r++];if(!(e[r+1]===s.Slash&&e[r+2]===s.A&&e[r+3]===s.ClosedAngleBrackets))throw new Error("\uC798\uBABB \uB2EB\uD78C \uD0DC\uADF8");r+=3,this.tokens.tags.push(new y(n,t))}}return this.tokens}searchWord(e){let r="";for(let t=0;t<e.length;t++)if(e[t]===s.Sharp&&e[t+1]===s.Space){for(t+=2;e[t]!==s.LineBreak;)r+=e[t++];return this.tokens.word=new k(r),this.tokens.word}return null}searchLabels(e){for(let r=0;r<e.length;r++)if(e[r]===s.Mark&&e[r+1]===s.OpenSqureBracket){let n="";for(r+=2;this.labelTrie.iterateSearch(e[r]);)n+=e[r++];let i=new B(n);this.tokens.labels.push(i)}return this.tokens.labels}searchTags(e){for(let r=0;r<e.length;r++)if(e[r]===s.OpenAngleBrackets&&e[r+1]===s.A&&e[r+2]===s.Space){let n={},i="";r+=3;let l="",a="",f=c.Keyword;for(;e[r]!==s.ClosedAngleBrackets&&r<e.length;){let d=e[r++];if(d===s.Space){if(!l)continue;Object.assign(n,{[l]:a||!0}),l="",a="",f=c.Keyword}else if(d===s.Eqaul){if(!l)throw new Error("\uD0A4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");f=c.Value}else if(f===c.Keyword)l+=d;else{if(d===s.DoubleQuote)continue;a+=d}}if(Object.assign(n,{[l]:a||!!a}),e[++r]!==s.Sharp)throw new Error("\uD0A4\uC6CC\uB4DC\uB294 hash\uC5EC\uC57C \uD569\uB2C8\uB2E4.");for(r++;e[r]!==s.OpenAngleBrackets;)i+=e[r++];if(!(e[r+1]===s.Slash&&e[r+2]===s.A&&e[r+3]===s.ClosedAngleBrackets))throw new Error("\uC798\uBABB \uB2EB\uD78C \uD0DC\uADF8");r+=3,this.tokens.tags.push(new y(i,n))}return this.tokens.tags}searchBody(e){for(let r=0;r<e.length-2;r++)if(e[r]+e[r+1]+e[r+2]===s.Dash.repeat(3)){for(r+=3;e[r++]==="-";);if(e[r-1]!==`
`)continue;if(e[r]!==`
`)throw new Error("Invalid Syntax: You need to put a new line after body line");r++;let t="";for(;r<e.length;)t+=e[r++];return new S(t)}return null}},E=_;var z=o=>{let e=V.default.resolve(o,"DIC");return K(e,t=>{let n=new E,i=L.default.readFileSync(t,{encoding:"utf-8"});return{file:n.parse(i)}})},j=z;var v=class extends P.BaseCommand{async execute(){let e=await A.Configuration.find(this.context.cwd,this.context.plugins),{project:r}=await A.Project.find(e,this.context.cwd),t=r.topLevelWorkspace.cwd;j(t),console.log("No Problem :)")}};v.paths=[["d","runner"]];var G={commands:[v]},H=G;return $(J);})();
return plugin;
}
};