!function(){var e,n,t,_,l,o,r={},u=[],i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function s(e,n){for(var t in n)e[t]=n[t];return e}function c(e){var n=e.parentNode;n&&n.removeChild(e)}function p(e,n,t){var _,l=arguments,o={};for(_ in n)"key"!==_&&"ref"!==_&&(o[_]=n[_]);if(arguments.length>3)for(t=[t],_=3;_<arguments.length;_++)t.push(l[_]);if(null!=t&&(o.children=t),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===o[_]&&(o[_]=e.defaultProps[_]);return f(e,o,n&&n.key,n&&n.ref,null)}function f(n,t,_,l,o){var r={type:n,props:t,key:_,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(r.__v=r),e.vnode&&e.vnode(r),r}function a(e){return e.children}function d(e,n){this.props=e,this.context=n}function h(e,n){if(null==n)return e.__?h(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?h(e):null}function v(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return v(e)}}function y(o){(!o.__d&&(o.__d=!0)&&n.push(o)&&!t++||l!==e.debounceRendering)&&((l=e.debounceRendering)||_)(m)}function m(){for(var e;t=n.length;)e=n.sort((function(e,n){return e.__v.__b-n.__v.__b})),n=[],e.some((function(e){var n,t,_,l,o,r,u;e.__d&&(r=(o=(n=e).__v).__e,(u=n.__P)&&(t=[],(_=s({},o)).__v=_,l=x(u,o,_,n.__n,void 0!==u.ownerSVGElement,null,t,null==r?h(o):r),P(t,o),l!=r&&v(o)))}))}function k(e,n,t,_,l,o,i,s,p){var f,a,d,v,y,m,k,b=t&&t.__k||u,w=b.length;if(s==r&&(s=null!=o?o[0]:w?h(t,0):null),f=0,n.__k=g(n.__k,(function(t){if(null!=t){if(t.__=n,t.__b=n.__b+1,null===(d=b[f])||d&&t.key==d.key&&t.type===d.type)b[f]=void 0;else for(a=0;a<w;a++){if((d=b[a])&&t.key==d.key&&t.type===d.type){b[a]=void 0;break}d=null}if(v=x(e,t,d=d||r,_,l,o,i,s,p),(a=t.ref)&&d.ref!=a&&(k||(k=[]),d.ref&&k.push(d.ref,null,t),k.push(a,t.__c||v,t)),null!=v){var u;if(null==m&&(m=v),void 0!==t.__d)u=t.__d,t.__d=void 0;else if(o==d||v!=s||null==v.parentNode){e:if(null==s||s.parentNode!==e)e.appendChild(v),u=null;else{for(y=s,a=0;(y=y.nextSibling)&&a<w;a+=2)if(y==v)break e;e.insertBefore(v,s),u=s}"option"==n.type&&(e.value="")}s=void 0!==u?u:v.nextSibling,"function"==typeof n.type&&(n.__d=s)}else s&&d.__e==s&&s.parentNode!=e&&(s=h(d))}return f++,t})),n.__e=m,null!=o&&"function"!=typeof n.type)for(f=o.length;f--;)null!=o[f]&&c(o[f]);for(f=w;f--;)null!=b[f]&&D(b[f],b[f]);if(k)for(f=0;f<k.length;f++)N(k[f],k[++f],k[++f])}function g(e,n,t){if(null==t&&(t=[]),null==e||"boolean"==typeof e)n&&t.push(n(null));else if(Array.isArray(e))for(var _=0;_<e.length;_++)g(e[_],n,t);else t.push(n?n("string"==typeof e||"number"==typeof e?f(null,e,null,null,e):null!=e.__e||null!=e.__c?f(e.type,e.props,e.key,null,e.__v):e):e);return t}function b(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]="number"==typeof t&&!1===i.test(n)?t+"px":null==t?"":t}function w(e,n,t,_,l){var o,r,u,i,s;if(l?"className"===n&&(n="class"):"class"===n&&(n="className"),"style"===n)if(o=e.style,"string"==typeof t)o.cssText=t;else{if("string"==typeof _&&(o.cssText="",_=null),_)for(i in _)t&&i in t||b(o,i,"");if(t)for(s in t)_&&t[s]===_[s]||b(o,s,t[s])}else"o"===n[0]&&"n"===n[1]?(r=n!==(n=n.replace(/Capture$/,"")),u=n.toLowerCase(),n=(u in e?u:n).slice(2),t?(_||e.addEventListener(n,S,r),(e.l||(e.l={}))[n]=t):e.removeEventListener(n,S,r)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&!l&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/^xlink:?/,""))?null==t||!1===t?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):null==t||!1===t&&!/^ar/.test(n)?e.removeAttribute(n):e.setAttribute(n,t))}function S(n){this.l[n.type](e.event?e.event(n):n)}function x(n,t,_,l,o,r,u,i,c){var p,f,h,v,y,m,g,b,w,S,x=t.type;if(void 0!==t.constructor)return null;(p=e.__b)&&p(t);try{e:if("function"==typeof x){if(b=t.props,w=(p=x.contextType)&&l[p.__c],S=p?w?w.props.value:p.__:l,_.__c?g=(f=t.__c=_.__c).__=f.__E:("prototype"in x&&x.prototype.render?t.__c=f=new x(b,S):(t.__c=f=new d(b,S),f.constructor=x,f.render=E),w&&w.sub(f),f.props=b,f.state||(f.state={}),f.context=S,f.__n=l,h=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=x.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=s({},f.__s)),s(f.__s,x.getDerivedStateFromProps(b,f.__s))),v=f.props,y=f.state,h)null==x.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==x.getDerivedStateFromProps&&b!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(b,S),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(b,f.__s,S)||t.__v===_.__v&&!f.__){for(f.props=b,f.state=f.__s,t.__v!==_.__v&&(f.__d=!1),f.__v=t,t.__e=_.__e,t.__k=_.__k,f.__h.length&&u.push(f),p=0;p<t.__k.length;p++)t.__k[p]&&(t.__k[p].__=t);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(b,f.__s,S),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(v,y,m)}))}f.context=S,f.props=b,f.state=f.__s,(p=e.__r)&&p(t),f.__d=!1,f.__v=t,f.__P=n,p=f.render(f.props,f.state,f.context),t.__k=null!=p&&p.type==a&&null==p.key?p.props.children:Array.isArray(p)?p:[p],null!=f.getChildContext&&(l=s(s({},l),f.getChildContext())),h||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(v,y)),k(n,t,_,l,o,r,u,i,c),f.base=t.__e,f.__h.length&&u.push(f),g&&(f.__E=f.__=null),f.__e=!1}else null==r&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=C(_.__e,t,_,l,o,r,u,c);(p=e.diffed)&&p(t)}catch(n){t.__v=null,e.__e(n,t,_)}return t.__e}function P(n,t){e.__c&&e.__c(t,n),n.some((function(t){try{n=t.__h,t.__h=[],n.some((function(e){e.call(t)}))}catch(n){e.__e(n,t.__v)}}))}function C(e,n,t,_,l,o,i,s){var c,p,f,a,d,h=t.props,v=n.props;if(l="svg"===n.type||l,null!=o)for(c=0;c<o.length;c++)if(null!=(p=o[c])&&((null===n.type?3===p.nodeType:p.localName===n.type)||e==p)){e=p,o[c]=null;break}if(null==e){if(null===n.type)return document.createTextNode(v);e=l?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,v.is&&{is:v.is}),o=null,s=!1}if(null===n.type)h!==v&&e.data!=v&&(e.data=v);else{if(null!=o&&(o=u.slice.call(e.childNodes)),f=(h=t.props||r).dangerouslySetInnerHTML,a=v.dangerouslySetInnerHTML,!s){if(h===r)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(a||f)&&(a&&f&&a.__html==f.__html||(e.innerHTML=a&&a.__html||""))}(function(e,n,t,_,l){var o;for(o in t)"children"===o||"key"===o||o in n||w(e,o,null,t[o],_);for(o in n)l&&"function"!=typeof n[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===n[o]||w(e,o,n[o],t[o],_)})(e,v,h,l,s),a?n.__k=[]:(n.__k=n.props.children,k(e,n,t,_,"foreignObject"!==n.type&&l,o,i,r,s)),s||("value"in v&&void 0!==(c=v.value)&&c!==e.value&&w(e,"value",c,h.value,!1),"checked"in v&&void 0!==(c=v.checked)&&c!==e.checked&&w(e,"checked",c,h.checked,!1))}return e}function N(n,t,_){try{"function"==typeof n?n(t):n.current=t}catch(n){e.__e(n,_)}}function D(n,t,_){var l,o,r;if(e.unmount&&e.unmount(n),(l=n.ref)&&(l.current&&l.current!==n.__e||N(l,null,t)),_||"function"==typeof n.type||(_=null!=(o=n.__e)),n.__e=n.__d=void 0,null!=(l=n.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(n){e.__e(n,t)}l.base=l.__P=null}if(l=n.__k)for(r=0;r<l.length;r++)l[r]&&D(l[r],t,_);null!=o&&c(o)}function E(e,n,t){return this.constructor(e,t)}e={__e:function(e,n){for(var t,_;n=n.__;)if((t=n.__c)&&!t.__)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError&&(_=!0,t.setState(t.constructor.getDerivedStateFromError(e))),null!=t.componentDidCatch&&(_=!0,t.componentDidCatch(e)),_)return y(t.__E=t)}catch(n){e=n}throw e}},d.prototype.setState=function(e,n){var t;t=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof e&&(e=e(t,this.props)),e&&s(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),y(this))},d.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),y(this))},d.prototype.render=a,n=[],t=0,_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=r,function(n,t,_){var l,i,s;e.__&&e.__(n,t),i=(l=_===o)?null:_&&_.__k||t.__k,n=p(a,null,[n]),s=[],x(t,(l?t:_||t).__k=n,i||r,r,void 0!==t.ownerSVGElement,_&&!l?[_]:i?null:u.slice.call(t.childNodes),s,_||r,l),P(s,n)}(p((function(){return p(a,null,p("div",null,"hello"))}),{}),document.querySelector(".root"))}();