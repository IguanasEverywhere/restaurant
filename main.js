(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(81),i=n.n(a),r=n(645),o=n.n(r),d=n(667),c=n.n(d),l=new URL(n(585),n.b),s=new URL(n(0),n.b),m=o()(i()),p=c()(l),u=c()(s);m.push([e.id,"body {\n    background-color: black;\n    margin: 0;\n}\n\n@font-face {\n    font-family: 'Pac';\n    src: url("+p+");\n  }\n\n@font-face {\n    font-family: 'Caveat';\n    src: url("+u+");\n  }\n\nh1 {\n    color: white;\n    font-family: Pac;\n    font-size: 3rem;\n}\n\n.testimonials {\n    color: white;\n    font-family: Caveat;\n    font-size: 2rem;\n    display: flex;\n    justify-content: space-around;\n}\n\n.testimonial1, .testimonial2, .testimonial3 {\n    width: 300px;\n    border: 1px solid white;\n    border-radius: 10px;\n}\n\n.mainPageBody {\n    text-align: center;\n}\n\n.navBar {\n    color: white;\n    background-color:#a4c441;\n    font-family: Caveat;\n    text-align: center;\n}\n\n.navLinks {\n    padding: 6px;\n    font-size: 1.75rem ;\n}\n\n#homeLink:hover, #menuLink:hover, #contactLink:hover {\n    color: yellow;\n}\n\na {\n    padding-left: 100px;\n    padding-right: 100px;\n}\n\n.menuItems {\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Caveat;\n    font-size: 2rem;\n}\n\n.menuItem {\n    border: 2px solid white;\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 600px;\n    margin: 20px;\n}\n\n.menuImages {\n    padding-left: 20px;\n    border-radius: 10px;\n}\n\n.contactBody {\n    display: flex;\n    justify-content: center;\n}\n\n.contactInfo {\n    border: 2px solid white;\n    font-family: Caveat;\n    font-size: 2rem;\n    color: white;\n    border-radius: 10px;\n    width: 400px;\n    padding:10px;\n}\n\n.contactInfoItem {\n    padding: 0;\n}\n",""]);const h=m},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);a&&o[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},o=[],d=0;d<e.length;d++){var c=e[d],l=a.base?c[0]+a.base:c[0],s=r[l]||0,m="".concat(l," ").concat(s);r[l]=s+1;var p=n(m),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var h=i(u,a);a.byIndex=d,t.splice(d,0,{identifier:m,updater:h,references:1})}o.push(m)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=a(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var d=n(r[o]);t[d].references--}for(var c=a(e,i),l=0;l<r.length;l++){var s=n(r[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}r=c}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,i&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},0:(e,t,n)=>{e.exports=n.p+"026e363f4bf3756cbfd1.ttf"},585:(e,t,n)=>{e.exports=n.p+"c0d735fc04154e03a691.ttf"}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),a=n(795),i=n.n(a),r=n(569),o=n.n(r),d=n(565),c=n.n(d),l=n(216),s=n.n(l),m=n(589),p=n.n(m),u=n(426),h={};function f(){let e=document.getElementById("content"),t=document.createElement("div");t.classList.add("mainPageBody"),e.appendChild(t);let n=document.createElement("div");n.classList.add("restaurantTitle"),t.appendChild(n);let a=document.createElement("h1");a.textContent="Iguanas Diner",n.appendChild(a),document.createElement("div").classList.add("logo");let i=document.createElement("img");i.src="../src/images/iguanaEating.png",i.alt="iguana eating",i.width="400",i.height="300",t.append(i);let r=document.createElement("div");r.classList.add("testimonials"),t.append(r);let o=document.createElement("div");o.classList.add("testimonial1"),r.appendChild(o);let d=document.createElement("p");d.textContent="The best grub you can lash your tongue out at this side of the Mississippi!",o.appendChild(d);let c=document.createElement("div");c.classList.add("testimonial2"),r.appendChild(c);let l=document.createElement("p");l.textContent="Who needs flies? Try their fries!",c.appendChild(l);let s=document.createElement("div");s.classList.add("testimonial3"),r.appendChild(s);let m=document.createElement("p");m.textContent="You'll go bug-eyed for their herbivorous offerings!",s.appendChild(m)}h.styleTagTransform=p(),h.setAttributes=c(),h.insert=o().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=s(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals,function(){let e=document.getElementById("content"),t=document.createElement("div");t.classList.add("navBar"),e.appendChild(t);let n=document.createElement("div");n.classList.add("navLinks"),t.appendChild(n);let a=document.createElement("a");a.setAttribute("id","homeLink"),a.textContent="Home";let i=document.createElement("a");i.setAttribute("id","menuLink"),i.textContent="Menu";let r=document.createElement("a");r.setAttribute("id","contactLink"),r.textContent="Contact",n.appendChild(a),n.appendChild(i),n.appendChild(r)}(),f();const g=document.getElementById("content");homeLink.addEventListener("click",(()=>{let e=document.getElementsByClassName("mainPageBody")[0];g.removeChild(e),f()})),menuLink.addEventListener("click",(()=>{let e=document.getElementsByClassName("mainPageBody")[0];g.removeChild(e),function(){let e=document.getElementById("content"),t=document.createElement("div");t.classList.add("mainPageBody"),e.appendChild(t);let n=document.createElement("h1");n.textContent="Menu",t.appendChild(n);let a=document.createElement("div");a.classList.add("menuItems"),t.appendChild(a);let i=document.createElement("div");i.classList.add("menuItem");let r=document.createElement("div");r.textContent="Birch Leave Salad................$10.99",i.appendChild(r),a.appendChild(i);let o=document.createElement("img");o.classList.add("menuImages"),o.src="../src/images/birchleaves.jpeg",o.alt="birch leaves",o.width="150",o.height="150",i.appendChild(o);let d=document.createElement("div");d.classList.add("menuItem");let c=document.createElement("div");c.textContent="Dandelion Platter................$12.99",d.appendChild(c),a.appendChild(d);let l=document.createElement("img");l.classList.add("menuImages"),l.src="../src/images/DandelionFlower.jpeg",l.alt="dandelions",l.width="150",l.height="150",d.appendChild(l);let s=document.createElement("div");s.classList.add("menuItem");let m=document.createElement("div");m.textContent="Lavender Surprise................$14.99",s.appendChild(m),a.appendChild(s);let p=document.createElement("img");p.classList.add("menuImages"),p.src="../src/images/lavender.jpeg",p.alt="lavender",p.width="150",p.height="150",s.appendChild(p);let u=document.createElement("div");u.classList.add("menuItem");let h=document.createElement("div");h.textContent="Berry Dessert................$6.99",u.appendChild(h),a.appendChild(u);let f=document.createElement("img");f.classList.add("menuImages"),f.src="../src/images/berries.jpeg",f.alt="berries",f.width="150",f.height="150",u.appendChild(f)}()})),contactLink.addEventListener("click",(()=>{let e=document.getElementsByClassName("mainPageBody")[0];g.removeChild(e),function(){let e=document.getElementById("content"),t=document.createElement("div");t.classList.add("mainPageBody"),e.appendChild(t);let n=document.createElement("h1");n.textContent="Contact Us",t.appendChild(n);let a=document.createElement("div");a.classList.add("contactBody"),t.appendChild(a);let i=document.createElement("div");i.classList.add("contactInfo"),a.appendChild(i);let r=document.createElement("p");r.classList.add("contactInfoItem"),r.textContent="Phone: (555) 555-5555",i.appendChild(r);let o=document.createElement("a");o.classList.add("contactInfoItem"),o.textContent="CaptainIguana@iguanasdiner.com",o.setAttribute("href","http://www.google.com"),i.appendChild(o)}()}))})()})();