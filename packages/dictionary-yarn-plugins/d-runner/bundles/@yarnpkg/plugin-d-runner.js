/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-d-runner",
factory: function (require) {
var plugin=(()=>{var W=Object.create;var g=Object.defineProperty;var I=Object.getOwnPropertyDescriptor;var M=Object.getOwnPropertyNames;var Q=Object.getPrototypeOf,$=Object.prototype.hasOwnProperty;var u=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+n+'" is not supported')});var z=(n,e)=>{for(var t in e)g(n,t,{get:e[t],enumerable:!0})},L=(n,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of M(e))!$.call(n,s)&&s!==t&&g(n,s,{get:()=>e[s],enumerable:!(r=I(e,s))||r.enumerable});return n};var A=(n,e,t)=>(t=n!=null?W(Q(n)):{},L(e||!n||!n.__esModule?g(t,"default",{value:n,enumerable:!0}):t,n)),Y=n=>L(g({},"__esModule",{value:!0}),n);var X={};z(X,{default:()=>U});var O=u("@yarnpkg/core"),v=u("@yarnpkg/fslib"),F=u("@yarnpkg/cli");var q=A(u("fs")),V=A(u("path"));var w=class{value;end;child;constructor(e=""){this.value=e,this.end=!1,this.child={}}},D=class{root;cursor;constructor(){this.root=new w,this.cursor=this.root}insert(e){let t=this.root;for(let r=0;r<e.length;r++){let s=e[r];t.child[s]===void 0&&(t.child[s]=new w(s)),t=t.child[s]}t.end=!0}search(e){let t="",r=this.root;for(let s=0;s<e.length;s++){let i=e[s];if(t+=i,r.child[i])r=r.child[i];else return null}return r.end?t:null}iterateSearch(e){return this.cursor.child[e]?(this.cursor=this.cursor.child[e],!0):(this.cursor=this.root,!1)}},b=D;var C=A(u("fs")),J=(n,e)=>{let t=new Set,r=s=>{if(t.add(s),C.default.lstatSync(s).isFile()){e(s);return}C.default.readdirSync(s).map(l=>{t.has(l)||r(`${s}/${l}`)})};r(n)},K=J;var m=class extends Error{constructor(e,t){super(e,t)}};var o={Sharp:"#",Space:" ",LineBreak:`
`,Mark:"!",OpenAngleBrackets:"<",ClosedAngleBrackets:">",A:"a",OpenSqureBracket:"[",CloseSqureBracket:"]",Eqaul:"=",Slash:"/",DoubleQuote:'"',Dash:"-"};var P={Common:"Common",Frontend:"Frontend",Backend:"Backend",Database:"Database",Devops:"Devops"},c={Keyword:"Keyword",Value:"Value"},p=class{_type;_content;constructor(e){this._content=e}get content(){return this._content}},k=class extends p{_attributes;constructor(e,t){super(e),this._attributes=t,this._type=2}get url(){return this._attributes.href}},y=class extends p{constructor(e){super(e),this._type=0}},S=class extends p{constructor(e){super(e),this._type=3}},B=class extends p{constructor(e){if(!Object.values(P).includes(e))throw new m(`${e}\uB294 \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uB77C\uBCA8\uC785\uB2C8\uB2E4.`);super(e),this._type=1}get type(){return this._type}},_=class{tokens={title:null,labels:[],tags:[],body:null};labelTrie;tagKeywordTrie;constructor(){this.labelTrie=new b,this.tagKeywordTrie=new b,Object.values(P).map(e=>this.labelTrie.insert(e)),this.tagKeywordTrie.insert("href")}nomalizeToken(){return{title:this.tokens.title.content,slug:this.tokens.title.content[0],labels:this.tokens.labels.map(e=>e.content),tags:this.tokens.tags.map(e=>({title:e.content,link:e.url})),body:this.tokens.body.content}}parse(e){for(let t=0;t<e.length-2;t++)switch(!0){case e[t]+e[t+1]+e[t+2]===o.Dash.repeat(3):{for(t+=3;e[t++]==="-";);if(e[t-1]!==`
`)continue;if(e[t]!==`
`)throw new Error("Invalid Syntax: You need to put a new line after body line");t++;let r="";for(;t<e.length;)r+=e[t++];return this.tokens.body=new S(r),this.tokens}case(e[t]===o.Sharp&&e[t+1]===o.Space):{if(this.tokens.title)throw new Error("Duplciated Word");let r="";for(t+=2;e[t]!==o.LineBreak;)r+=e[t++];this.tokens.title=new y(r);break}case(e[t]===o.Mark&&e[t+1]===o.OpenSqureBracket):{let r="";for(t+=2;this.labelTrie.iterateSearch(e[t]);)r+=e[t++];let s=new B(r);this.tokens.labels.push(s);break}case(e[t]===o.OpenAngleBrackets&&e[t+1]===o.A&&e[t+2]===o.Space):{let r={},s="";t+=3;let i="",l="",a=c.Keyword;for(;e[t]!==o.ClosedAngleBrackets&&t<e.length;){let h=e[t++];if(h===o.Space){if(!i)continue;Object.assign(r,{[i]:l||!0}),i="",l="",a=c.Keyword}else if(h===o.Eqaul){if(!i)throw new Error("\uD0A4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");a=c.Value}else if(a===c.Keyword)i+=h;else{if(h===o.DoubleQuote)continue;l+=h}}if(Object.assign(r,{[i]:l||!!l}),e[++t]!==o.Sharp)throw new Error("\uD0A4\uC6CC\uB4DC\uB294 hash\uC5EC\uC57C \uD569\uB2C8\uB2E4.");for(t++;e[t]!==o.OpenAngleBrackets;)s+=e[t++];if(!(e[t+1]===o.Slash&&e[t+2]===o.A&&e[t+3]===o.ClosedAngleBrackets))throw new Error("\uC798\uBABB \uB2EB\uD78C \uD0DC\uADF8");t+=3,this.tokens.tags.push(new k(s,r))}}return this.tokens}searchTitle(e){let t="";for(let r=0;r<e.length;r++)if(e[r]===o.Sharp&&e[r+1]===o.Space){for(r+=2;e[r]!==o.LineBreak;)t+=e[r++];return this.tokens.title=new y(t),this.tokens.title}return null}searchLabels(e){for(let t=0;t<e.length;t++)if(e[t]===o.Mark&&e[t+1]===o.OpenSqureBracket){let s="";for(t+=2;this.labelTrie.iterateSearch(e[t]);)s+=e[t++];let i=new B(s);this.tokens.labels.push(i)}return this.tokens.labels}searchTags(e){for(let t=0;t<e.length;t++)if(e[t]===o.OpenAngleBrackets&&e[t+1]===o.A&&e[t+2]===o.Space){let s={},i="";t+=3;let l="",a="",f=c.Keyword;for(;e[t]!==o.ClosedAngleBrackets&&t<e.length;){let d=e[t++];if(d===o.Space){if(!l)continue;Object.assign(s,{[l]:a||!0}),l="",a="",f=c.Keyword}else if(d===o.Eqaul){if(!l)throw new Error("\uD0A4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");f=c.Value}else if(f===c.Keyword)l+=d;else{if(d===o.DoubleQuote)continue;a+=d}}if(Object.assign(s,{[l]:a||!!a}),e[++t]!==o.Sharp)throw new Error("\uD0A4\uC6CC\uB4DC\uB294 hash\uC5EC\uC57C \uD569\uB2C8\uB2E4.");for(t++;e[t]!==o.OpenAngleBrackets;)i+=e[t++];if(!(e[t+1]===o.Slash&&e[t+2]===o.A&&e[t+3]===o.ClosedAngleBrackets))throw new Error("\uC798\uBABB \uB2EB\uD78C \uD0DC\uADF8");t+=3,this.tokens.tags.push(new k(i,s))}return this.tokens.tags}searchBody(e){for(let t=0;t<e.length-2;t++)if(e[t]+e[t+1]+e[t+2]===o.Dash.repeat(3)){for(t+=3;e[t++]==="-";);if(e[t-1]!==`
`)continue;if(e[t]!==`
`)throw new Error("Invalid Syntax: You need to put a new line after body line");t++;let r="";for(;t<e.length;)r+=e[t++];return new S(r)}return null}},E=_;var G=n=>{let e=V.default.resolve(n,"DIC"),t=[];return K(e,s=>{let i=new E,l=q.default.readFileSync(s,{encoding:"utf-8"});i.parse(l);let a=i.nomalizeToken();t.push({[a.title]:{...a,path:s}})}),t},j=G;var N=u("clipanion"),T=class extends F.BaseCommand{constructor(){super(...arguments);this.output=N.Option.String("-o,--output",{description:"\uD30C\uC2F1 \uACB0\uACFC\uBB3C\uC744 \uCD9C\uB825\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 --output ./result.json \uCC98\uB7FC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."})}async execute(){let t=await O.Configuration.find(this.context.cwd,this.context.plugins),{project:r}=await O.Project.find(t,this.context.cwd),s=r.topLevelWorkspace.cwd,i=j(s);if(this.output){let l=new v.NodeFS,a=v.npath.toPortablePath(this.output);l.writeFileSync(a,JSON.stringify(i),{encoding:"utf-8"})}console.log("No Problem :)")}};T.paths=[["d","runner"]];var H={commands:[T]},U=H;return Y(X);})();
return plugin;
}
};
