import{a as u,S as f,i as l}from"./assets/vendor-D73Uttp0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",d="46219346-243694830f7cca451bf7f7da0",m=15;async function g(r,o=1){const s=new URLSearchParams({q:r,per_page:m,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o}),a=`${p}?key=${d}&${s}}`,e=await u.get(a);if(e.data.hits.length===0){const t="Не знайшлося відповідного контенту, спробуйте знову";throw new Error(t)}return e.data}document.querySelector(".gallery");function y(r){if(r.length===0){n.list.innerHTML="";return}n.list.innerHTML=r.hits.map(({webformatURL:o,largeImageURL:s,tags:a,likes:e,views:t,comments:i,downloads:c})=>`
            <li class="gallery-item">
                <a href="${s}" class="gallery-link">
                    <img src="${o}" alt="${a}" class="gallery-image" />
                </a>
                <div class="info">
                    <p class="info-item"><span>Likes</span> ${e}</p>
                    <p class="info-item"><span>Views</span> ${t}</p>
                    <p class="info-item"><span>Comments</span> ${i}</p>
                    <p class="info-item"><span>Downloads</span> ${c}</p>
                </div>
            </li>
        `).join(""),console.log()}const n={form:document.querySelector(".form"),loader:document.querySelector(".loader"),list:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more-btn")};n.form.addEventListener("submit",P);n.loadMoreBtn.addEventListener("click",h);function h(r){r.preventDefault(),v+=1}let L=new f(".gallery a"),v=null;async function P(r){r.preventDefault(),n.list.innerHTML="";const o=r.target.elements["search-area"].value.trim();if(o===""){l.error({position:"topRight",message:"Введіть будь-ласка значення для пошуку"});return}r.target.elements["search-area"].value="",n.loader.classList.add("active");try{const s=await g(o);y(s),L.refresh()}catch(s){n.loader.classList.remove("active"),n.list.innerHTML="",console.dir(s),l.error({position:"topRight",message:s.message})}}
//# sourceMappingURL=index.js.map
