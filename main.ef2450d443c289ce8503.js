(()=>{"use strict";var e={106:(e,n,t)=>{t.d(n,{A:()=>l});var r=t(601),i=t.n(r),a=t(314),o=t.n(a)()(i());o.push([e.id,'body {\n  padding-left: 150px;\n  padding-right: 150px;\n  background-color: palegoldenrod;\n}\nul li {\n  list-style-type: "- ";\n}\n\n#logo {\n  min-width: 5%;\n  max-width: 6%;\n  height: max-content;\n}\n\n#content {\n}\n.title {\n  height: 20vh;\n\n  padding-top: 1%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnav {\n  display: flex;\n  justify-content: center;\n}\n\n.menu {\n  background-color: antiquewhite;\n}\n',""]);const l=o},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(o[s]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);r&&o[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),n.push(c))}},n}},601:e=>{e.exports=function(e){return e[1]}},777:(e,n,t)=>{var r=t(72),i=t.n(r),a=t(825),o=t.n(a),l=t(659),s=t.n(l),d=t(56),c=t.n(d),u=t(540),p=t.n(u),h=t(113),f=t.n(h),m=t(106),g={};g.styleTagTransform=f(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),i()(m.A,g),m.A&&m.A.locals&&m.A.locals},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},o=[],l=0;l<e.length;l++){var s=e[l],d=r.base?s[0]+r.base:s[0],c=a[d]||0,u="".concat(d," ").concat(c);a[d]=c+1;var p=t(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var f=i(h,r);r.byIndex=l,n.splice(l,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var l=t(a[o]);n[l].references--}for(var s=r(e,i),d=0;d<a.length;d++){var c=t(a[d]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},471:(e,n,t)=>{t.d(n,{w:()=>i});var r=t(968);function i(){let e=document.getElementById("content"),n=document.createElement("div"),t=document.createElement("div");n.setAttribute("id","header");let i=document.createElement("img");i.setAttribute("id","logo"),i.src=r,t.appendChild(i),t.className="title";let a=document.createElement("h1");a.textContent="Valhalla's Feast",t.appendChild(a),n.appendChild(t),e.appendChild(n)}t(777)},289:(e,n,t)=>{t.d(n,{P:()=>i});var r=t(471);function i(){let e=document.getElementById("content");e.innerHTML="",(0,r.w)(),document.getElementById("content");let n=document.createElement("div");n.className="body",n.innerHTML="<p>Welcome to Valhalla's Feast, where the spirit of the Viking era comes alive through our culinary delights! Nestled in the heart of [insert location], our restaurant offers a unique and immersive dining experience inspired by the legendary Norse warriors. Step into a world where long tables are adorned with hearty feasts, mead flows freely, and the ambiance resonates with the echoes of ancient sagas.</p>\n<p>At Valhalla's Feast, we pride ourselves on crafting authentic Viking cuisine, meticulously prepared to transport you back in time. From savory smoked meats to freshly baked breads and robust stews, each dish pays homage to the rich culinary traditions of the Norse people. Our chefs source the finest ingredients, drawing inspiration from historical recipes and modern culinary techniques to create a menu that honors the spirit of adventure and exploration.</p>\n<p>Whether you're a seasoned warrior or a curious traveler, join us on a gastronomic journey through the Viking age. Raise your horn, share tales of valor, and indulge in a feast fit for Odin himself. At Valhalla's Feast, every meal is an epic saga waiting to unfold. </p>\n<p>Skål!</p>\n",e.appendChild(n)}t(968),t(777)},89:(e,n,t)=>{t.d(n,{C:()=>i});var r=t(471);function i(){let e=document.getElementById("content");e.innerHTML="",(0,r.w)();let n=document.createElement("div");n.innerHTML="<p>Located in the Heart of Viking land. Only true Vikings are allowed to learn our ture location.</p>",e.appendChild(n)}t(968),t(777)},245:(e,n,t)=>{t.d(n,{M:()=>i});var r=t(471);function i(){let e=document.getElementById("content");e.innerHTML="",(0,r.w)();let n=document.createElement("div");n.className="menu",e.appendChild(n);let t=document.createElement("h2");t.innerHTML="Valhalla's Feast: A Journey Through Norse Cuisine",n.appendChild(t);let i=document.createElement("div");i.innerHTML="\n  <h3>Appetizers:</h3>\n<ol>\n<li>Viking Platter:</li>\n<ul>\n   <li style=\"list-style-type:\"-\"\">A selection of smoked fish, including herring and salmon, served with pickled vegetables, flatbread, and herb-infused butter.</li>\n</ul>\n<li>Thor's Flame-Roasted Vegetables:</li>\n<ul>\n   <li> Seasonal vegetables roasted over an open flame and seasoned with Viking spices, served with a drizzle of honey and a sprinkle of toasted nuts.</li>\n</ul>\n</ol>\n<h3>Main Courses:</h3>\n<ol>\n<li>Ragnar's Roast Lamb:</li>\n<ul>\n   <li>Tender lamb leg slow-roasted with herbs and garlic, served with roasted root vegetables and a juniper berry sauce.</li>\n</ul>\n<li>Berserker's Beef Stew:</li>\n<ul>\n   <li>Hearty beef stew cooked with root vegetables, barley, and ale, served in a bread bowl for an authentic Viking experience.</li>\n</ul>\n<li>Valkyrie's Bounty Seafood Skewers:</li>\n<ul>\n   <li>Skewers of marinated shrimp, scallops, and whitefish grilled to perfection and served with a side of Viking rice pilaf.</li>\n</ul>\n</ol>\n<h3>Sides:</h3>\n<ol>\n<li>Viking Lager Bread:</li>\n<ul>\n   <li>Freshly baked bread made with Viking Lager beer, served warm with whipped herb butter.</li>\n</ul>\n<li>Foraged Greens Salad:</li>\n<ul>\n   <li>Mixed greens tossed with foraged berries, toasted seeds, and a Viking herb vinaigrette.</li>\n</ul>\n</ol>\n<h3>Desserts:</h3>\n<ol>\n<li>Mead-infused Honey Cake:</li>\n<ul>\n   <li>Moist honey cake infused with mead, topped with whipped cream and a drizzle of honey.</li>\n</ul>\n<li>Valhalla's Apple Skald:</li>\n<ul>\n   <li>Baked apples stuffed with nuts, dried fruits, and spices, served warm with a dollop of vanilla skyr.</li>\n</ul>\n</ol>\n<h3>Beverages:</h3>\n<ol>\n<li>Odin's Mead:</li>\n<ul>\n   <li>A traditional honey wine brewed according to ancient Viking recipes.</li>\n</ul>\n<li>Valkyrie's Ale:</li>\n<ul>\n   <li>A robust ale brewed with Nordic grains and hops, served in tankards for an authentic touch.</li>\n</ul>\n<li>Thor's Thunder Punch:</li>\n<ul>\n   <li>A fruity punch spiked with Viking spirits and served in carved wooden goblets.</li>\n   </ul>\n</ol>\n",n.appendChild(i)}t(968),t(777)},968:(e,n,t)=>{e.exports=t.p+"e7dbf06d6f1ee058e92e.png"}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(289),n=t(245),r=t(89);t(968),t(777),(0,e.P)();let i=document.getElementById("home"),a=document.getElementById("menu"),o=document.getElementById("location");document.getElementById("content"),i.addEventListener("click",(function(n){n.preventDefault(),(0,e.P)()})),a.addEventListener("click",(function(e){e.preventDefault(),(0,n.M)()})),o.addEventListener("click",(function(e){e.preventDefault(),(0,r.C)()}))})()})();