parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"s0EH":[function(require,module,exports) {
var e=document.querySelector(".header-menu"),i=e.querySelector(".divider-line"),r=e.querySelector(".prime-search"),s=document.querySelector(".main-hero-search");function o(){window.scrollY>=s.offsetHeight?(e.style.borderBottom="2px solid black",r.classList.add("isShow"),i.style.visibility="visible"):(i.style.visibility="hidden",r.classList.remove("isShow"))}window.addEventListener("scroll",o);
},{}],"c0fM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=["https://cors.io/?",{url:"https://cors-anywhere.herokuapp.com/",headers:{"X-Requested-With":"XMLHttpRequest"}}];function r(r,t){var s=(t=t||e).map(function(e){var t=e.url||e,s=e.headers;return fetch(t+r,s?{headers:s}:null)});return Promise.race(s)}var t=r;exports.default=t;
},{}],"4QVf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getFields=r;var e=t(require("proxied-fetch"));function t(e){return e&&e.__esModule?e:{default:e}}function r(){return(0,e.default)("https://api.behance.net/v2/fields?\n    client_id=GrKmy2bSjvIkRhYxKWxcsqy1Msfe3Lmb").then(function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")}).then(function(e){return e})}
},{"proxied-fetch":"c0fM"}],"7F2l":[function(require,module,exports) {
"use strict";function e(e){return Math.floor(Math.random()*e+1)}function t(e,t,l,n){e.style.display="block",t.style.display="none",l.innerHTML="",n.style.display="none"}Object.defineProperty(exports,"__esModule",{value:!0}),exports.rnd=e,exports.displayLoad_clearGallery=t;
},{}],"Qrq5":[function(require,module,exports) {
"use strict";var e,t=require("../data/fetch-fields"),a=require("../utilities"),n=document.querySelector(".header-menu"),r=n.querySelector(".tags"),s=document.querySelector(".main-hero-search"),o=s.querySelector(".tags");function c(){sessionStorage.getItem("tags")?i():(0,t.getFields)().then(function(t){for(var n=t.fields,r=t.popular,s=[],o=[],c=0;c<7;c++)e=(0,a.rnd)(r.length-1),s.forEach(function(t){t.includes(n[e].name)&&e++}),s.push(n[e].name),c>1&&(e=(0,a.rnd)(r.length-1),o&&o.forEach(function(t){t==r[e].name&&e++}),o.push(r[e].name));var i={headerTags:s,heroTags:o};sessionStorage.setItem("tags",JSON.stringify(i))}).then(function(){return i()})}function i(){var e=JSON.parse(sessionStorage.getItem("tags"));e&&e.headerTags.forEach(function(e){var t=document.createElement("li");t.classList.add("tags__tag"),t.innerHTML="".concat(e),r.appendChild(t)}),e&&e.heroTags.forEach(function(e){var t=document.createElement("li");t.classList.add("tags__tag"),t.innerHTML="".concat(e),o.appendChild(t)})}c();
},{"../data/fetch-fields":"4QVf","../utilities":"7F2l"}],"H5z6":[function(require,module,exports) {
"use strict";require("./header/header"),require("./set-tags");
},{"./header/header":"s0EH","./set-tags":"Qrq5"}],"PMjN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getProjects=r;var e=t(require("proxied-fetch"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t){var r=t.queryString,n=void 0===r?"random":r,o=t.sort,c=void 0===o?"featured_date":o,i=t.time,a=void 0===i?"all":i,s=t.page,u=void 0===s?1:s;return(0,e.default)("https://api.behance.net/v2/projects?\n    q=".concat(n,"&\n    sort=").concat(c,"&\n    time=").concat(a,"&\n    page=").concat(u,"&\n    client_id=GrKmy2bSjvIkRhYxKWxcsqy1Msfe3Lmb")).then(function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")}).then(function(e){return e.projects})}
},{"proxied-fetch":"c0fM"}],"UuYG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getProject=r;var e=t(require("proxied-fetch"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t){return(0,e.default)("https://www.behance.net/v2/projects/".concat(t,"?api_key=GrKmy2bSjvIkRhYxKWxcsqy1Msfe3Lmb")).then(function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")}).then(function(e){return e.project})}
},{"proxied-fetch":"c0fM"}],"T98J":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;var a=document.querySelector(".gallery"),s=["wide","tall","big"];function e(e){e.forEach(function(e){var t=e.id,n=e.name,o=e.covers[808],d=e.stats,i=(d=void 0===d?0:d).appreciations,c=e.stats,r=(c=void 0===c?0:c).views,l=new Image;l.src=o,l.onload=function(){l.classList.add("shot__img"),l.alt="oopsy";var e=document.createElement("div");e.setAttribute("data-id",t);var o=Math.floor(3*Math.random());e.classList.add("shot","shot--".concat(s[o])),e.innerHTML='\n      <div class="shot__overlay">\n        <div class="shot__overlay__name">'.concat(n,'</div>\n        <div class="shot__overlay__stats">\n          <span class="badge badge-danger"><i class="far fa-heart"></i> ').concat(i,'</span>\n          <span class="badge badge-warning"><i class="far fa-eye"></i> ').concat(r,"</span>\n        </div>\n      </div>\n    "),e.appendChild(l),a.appendChild(e)}})}
},{}],"pyWl":[function(require,module,exports) {
"use strict";function a(a,e){return s(a)||r(a,e)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function r(a,n){var r=[],s=!0,e=!1,i=void 0;try{for(var t,c=a[Symbol.iterator]();!(s=(t=c.next()).done)&&(r.push(t.value),!n||r.length!==n);s=!0);}catch(d){e=!0,i=d}finally{try{s||null==c.return||c.return()}finally{if(e)throw i}}return r}function s(a){if(Array.isArray(a))return a}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=i;var e=document.querySelector(".img-card");function i(n){var r=n.name,s=n.fields,i=n.covers.original,t=a(n.owners,1)[0],c=t.images[50],d=t.display_name,l=n.stats,o=l.views,_=l.appreciations;e.innerHTML='\n    <div class="img-card__header">\n      <div class="img-card__header__profile">\n        <img src="'.concat(c,'" alt="profile">\n        <span>').concat(d,'</span>\n      </div>\n      <span class="img-card__header__img-name">').concat(r,'</span>\n      <div class="img-card__header__stats">\n        <span class="badge badge-danger"><i class="far fa-heart"></i> ').concat(_,'</span>\n        <span class="badge badge-warning"><i class="far fa-eye"></i> ').concat(o,'</span>\n      </div>\n    </div>\n    <div class="img-card__container-img">\n      <img class="img-card__container-img__img" src="').concat(i,'" alt="did not find sry T_T">\n    </div>\n    <div class="img-card__footer">\n      <span class="header-menu__tags-title">Tags |</span>\n      <ul class="tags">\n        ').concat(s.map(function(a){return'<li class="tags__tag tags__tag--dark">'+a+"</li>"}),'\n      </ul>\n      <span>Esc </span>\n      <i class="far fa-window-close"></i>\n    </div>\n  ')}
},{}],"iiGk":[function(require,module,exports) {
"use strict";var e=require("../data/fetch-projects"),t=require("../data/fetch-project"),n=a(require("./populateGallery")),r=a(require("./populateShot")),i=require("../utilities");function a(e){return e&&e.__esModule?e:{default:e}}var o=document.querySelector(".header-menu"),c=o.querySelector(".prime-search"),l=o.querySelector(".current-search"),u=document.querySelector(".prime-search--main-hero"),s=document.querySelectorAll(".tags"),d=document.querySelector(".loading"),y=document.querySelector(".gallery"),g=document.querySelector(".page-overlay"),m=document.querySelector(".gBtn--change-bg"),p=document.querySelector(".gBtn--more-content"),f=!1,h={queryString:"",sort:"",time:"",page:""};function v(t){t.preventDefault();var r=this.querySelector("input[type=search]").value;l.innerHTML=r,""!=r&&((0,i.displayLoad_clearGallery)(d,p,y,g),h={queryString:r,page:1},(0,e.getProjects)(h).then(function(e){(0,n.default)(e)}).then(function(){d.style.display="none",p.style.display="block"})),this.reset()}function q(t){t.preventDefault(),h.queryString&&(h.page++,(0,e.getProjects)(h).then(function(e){(0,n.default)(e)}))}function S(t){var r=this;if(t.preventDefault(),(0,i.displayLoad_clearGallery)(d,p,y,g),t.target.matches("li")){this.style.pointerEvents="none";var a=t.target.innerText;l.innerHTML=a,h={queryString:a,page:1},(0,e.getProjects)(h).then(function(e){(0,n.default)(e)}).then(function(){d.style.display="none",p.style.display="block",r.style.pointerEvents="auto"})}}function L(){var e=y.querySelectorAll(".shot"),t=e[(0,i.rnd)(e.length)-1].querySelector("img").src;document.querySelector(".background").style.backgroundImage="url(".concat(t,")")}function _(){this.classList.toggle("img-card__container-img__img--origin")}function E(e){if(e.stopPropagation(),e.target.parentElement.matches(".shot")){var n=e.target.parentElement.dataset.id;(0,t.getProject)(n).then(function(e){return(0,r.default)(e)}).then(function(){g.style.display="grid",f=document.querySelector(".img-card__container-img__img");var e=g.querySelector(".tags");f.addEventListener("click",_),e.addEventListener("click",S)})}}function k(e){(e.target.matches(".page-overlay")||e.target.matches(".fa-window-close"))&&(g.style.display="none")}function b(e){27==e.keyCode&&f&&(g.style.display="none",f.classList.remove("img-card__container-img__img--origin"))}window.onload=function(){(0,i.displayLoad_clearGallery)(d,p,y,g),h.queryString="random",(0,e.getProjects)(h).then(function(e){(0,n.default)(e)}).then(function(){d.style.display="none",p.style.display="block"})},c.addEventListener("submit",v),u.addEventListener("submit",v),p.addEventListener("click",q),m.addEventListener("click",L),s.forEach(function(e){return e.addEventListener("click",S)}),y.addEventListener("click",E),g.addEventListener("click",k),window.addEventListener("keydown",b);
},{"../data/fetch-projects":"PMjN","../data/fetch-project":"UuYG","./populateGallery":"T98J","./populateShot":"pyWl","../utilities":"7F2l"}],"aR/y":[function(require,module,exports) {
"use strict";require("./components/components"),require("./interactivity/interactivity");
},{"./components/components":"H5z6","./interactivity/interactivity":"iiGk"}]},{},["aR/y"], null)
//# sourceMappingURL=main.e2ec18f9.map