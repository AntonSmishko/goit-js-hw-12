import{a as p,S as u,i as l}from"./assets/vendor-D73Uttp0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",m="46219346-243694830f7cca451bf7f7da0",d=15;async function g(o){const t=new URLSearchParams({q:o,per_page:d,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1});try{return(await p.get(`${f}?key=${m}&${t}}`)).data}catch{throw new Error(`Error fetching images: ${response.status} ${response.statusText}`)}}document.querySelector(".gallery");function h(o){if(o.length===0){a.list.innerHTML="";return}a.list.innerHTML=o.hits.map(({webformatURL:t,largeImageURL:s,tags:n,likes:e,views:r,comments:i,downloads:c})=>`
            <li class="gallery-item">
                <a href="${s}" class="gallery-link">
                    <img src="${t}" alt="${n}" class="gallery-image" />
                </a>
                <div class="info">
                    <p class="info-item"><span>Likes</span> ${e}</p>
                    <p class="info-item"><span>Views</span> ${r}</p>
                    <p class="info-item"><span>Comments</span> ${i}</p>
                    <p class="info-item"><span>Downloads</span> ${c}</p>
                </div>
            </li>
        `).join(""),console.log()}const a={form:document.querySelector(".form"),loader:document.querySelector(".loader"),list:document.querySelector(".gallery")};a.form.addEventListener("submit",L);let y=new u(".gallery a");async function L(o){o.preventDefault(),a.list.innerHTML="";const t=o.target.elements["search-area"].value.trim();if(t===""){l.error({position:"topRight",message:"Please try again! All fields is empty"});return}o.target.elements["search-area"].value="",a.loader.classList.add("active"),await g(t).then(s=>{if(a.loader.classList.remove("active"),s.hits.length===0){a.list.innerHTML="",l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(s),y.refresh()}).catch(s=>{a.loader.classList.remove("active"),a.list.innerHTML="",l.error({position:"topRight",message:s})})}
//# sourceMappingURL=index.js.map
