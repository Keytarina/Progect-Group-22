(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();(function(t){typeof t.matches!="function"&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(c){for(var n=this,r=(n.document||n.ownerDocument).querySelectorAll(c),e=0;r[e]&&r[e]!==n;)++e;return Boolean(r[e])}),typeof t.closest!="function"&&(t.closest=function(c){for(var n=this;n&&n.nodeType===1;){if(n.matches(c))return n;n=n.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".js-open-modal"),c=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");t.forEach(function(r){r.addEventListener("click",function(e){e.preventDefault();var o=this.getAttribute("data-modal"),l=document.querySelector('.modal[data-modal="'+o+'"]');l.classList.add("active"),c.classList.add("active")})}),n.forEach(function(r){r.addEventListener("click",function(e){var o=this.closest(".modal");o.classList.remove("active"),c.classList.remove("active")})}),document.body.addEventListener("keyup",function(r){var e=r.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),c.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});var a=document.getElementById("table-phone"),i={mask:"+{38}(000)000-00-00"};IMask(a,i);var a=document.getElementById("room-phone"),i={mask:"+{38}(000)000-00-00"};IMask(a,i);let s=500;document.getElementById("nights2").addEventListener("change",t=>{document.getElementById("price2").innerHTML=t.target.value*s});let d=1e3;document.getElementById("nights2l").addEventListener("change",t=>{document.getElementById("price2l").innerHTML=t.target.value*d});let u=1500;document.getElementById("nights3").addEventListener("change",t=>{document.getElementById("price3").innerHTML=t.target.value*u});
