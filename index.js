import{a as y,S as L,i as d}from"./assets/vendor-D73Uttp0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const v="https://pixabay.com/api/",E="46219346-243694830f7cca451bf7f7da0",u=15;async function f(s,t=1){const a=new URLSearchParams({q:s,per_page:u,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t}),n=`${v}?key=${E}&${a}}`,e=await y.get(n);if(e.data.hits.length===0){const r="Не знайшлося відповідного контенту, спробуйте знову";throw new Error(r)}return e.data}document.querySelector(".gallery");function m(s){const t=s.hits.map(({webformatURL:a,largeImageURL:n,tags:e,likes:r,views:i,comments:g,downloads:h})=>`
            <li class="gallery-item">
                <a href="${n}" class="gallery-link">
                    <img src="${a}" alt="${e}" class="gallery-image" />
                </a>
                <div class="info">
                    <p class="info-item"><span>Likes</span> ${r}</p>
                    <p class="info-item"><span>Views</span> ${i}</p>
                    <p class="info-item"><span>Comments</span> ${g}</p>
                    <p class="info-item"><span>Downloads</span> ${h}</p>
                </div>
            </li>
        `).join("");o.list.insertAdjacentHTML("beforeend",t)}const o={form:document.querySelector(".form"),loader:document.querySelector(".loader"),list:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more-btn")};o.form.addEventListener("submit",b);o.loadMoreBtn.addEventListener("click",w);let M=new L(".gallery a"),c=1,l=null,p=0;async function w(s){s.preventDefault(),c+=1;try{const t=await f(l,c);if(m(t),P(),c>Math.min(p,33)){o.loadMoreBtn.classList.add("is-hidden"),d.error({position:"topRight",message:"Вибачте, але ви досягли кінця результатів пошуку."});return}}catch(t){console.log(t)}}async function b(s){s.preventDefault();const t=s.currentTarget;if(o.list.innerHTML="",l=s.target.elements["search-area"].value.trim(),l===""){d.error({position:"topRight",message:"Введіть будь-ласка значення для пошуку"});return}o.loader.classList.add("active");try{const a=await f(l);p=Math.ceil(a.totalHits/u),m(a),o.loader.classList.remove("active"),M.refresh(),o.loadMoreBtn.classList.remove("is-hidden")}catch(a){o.loader.classList.remove("active"),o.loadMoreBtn.classList.add("is-hidden"),o.list.innerHTML="",d.error({position:"topRight",message:a.message})}finally{t.reset()}}function P(){const t=o.list.lastElementChild.getBoundingClientRect().height;console.log(t),window.scrollBy({top:t*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
