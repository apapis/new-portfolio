"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[170],{170:(t,e,o)=>{function n(){var t=document.querySelectorAll(".nav__link"),e=document.querySelectorAll(".section"),o=document.querySelector(".navigation__scrollspy"),n=document.querySelector(".nav"),i=function(){var i=window.innerWidth,l=window.scrollY,c=n.clientHeight;e.forEach((function(e){var n=e.offsetTop-c;l>=n&&l<n+e.offsetHeight&&t.forEach((function(t){t.dataset.target===e.id?(i>768?(o.style.left="".concat(t.offsetLeft,"px"),o.style.width="".concat(t.offsetWidth,"px"),o.style.top="0",o.style.height="auto"):(o.style.top="".concat(t.offsetTop,"px"),o.style.height="".concat(t.offsetHeight,"px"),o.style.width="".concat(t.offsetWidth,"px"),o.style.left="auto"),t.style.color="#fff"):"introduction"==e.id?(t.removeAttribute("style"),o.style.width="0px"):t.removeAttribute("style")}))}))};i(),window.addEventListener("scroll",i),window.addEventListener("load",i),window.addEventListener("resize",i)}o.r(e),o.d(e,{initScrollspy:()=>n})}}]);