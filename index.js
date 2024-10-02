import{a as p,S as u,i as l}from"./assets/vendor-D73Uttp0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",m="46219346-243694830f7cca451bf7f7da0";async function d(s){try{return(await p.get(`${f}?key=${m}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true
`)).data}catch{throw new Error(`Error fetching images: ${response.status} ${response.statusText}`)}}document.querySelector(".gallery");function g(s){if(s.length===0){o.list.innerHTML="";return}o.list.innerHTML=s.hits.map(({webformatURL:r,largeImageURL:i,tags:n,likes:e,views:t,comments:a,downloads:c})=>`
            <li class="gallery-item">
                <a href="${i}" class="gallery-link">
                    <img src="${r}" alt="${n}" class="gallery-image" />
                </a>
                <div class="info">
                    <p class="info-item"><span>Likes</span> ${e}</p>
                    <p class="info-item"><span>Views</span> ${t}</p>
                    <p class="info-item"><span>Comments</span> ${a}</p>
                    <p class="info-item"><span>Downloads</span> ${c}</p>
                </div>
            </li>
        `).join(""),console.log()}const o={form:document.querySelector(".form"),loader:document.querySelector(".loader"),list:document.querySelector(".gallery")};o.form.addEventListener("submit",h);let y=new u(".gallery a");async function h(s){s.preventDefault(),o.list.innerHTML="";const r=s.target.elements["search-area"].value.trim();if(r===""){l.error({position:"topRight",message:"Please try again! All fields is empty"});return}s.target.elements["search-area"].value="",o.loader.classList.add("active"),await d(r).then(i=>{if(o.loader.classList.remove("active"),i.hits.length===0){o.list.innerHTML="",l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(i),y.refresh()}).catch(i=>{o.loader.classList.remove("active"),o.list.innerHTML="",l.error({position:"topRight",message:i})})}
//# sourceMappingURL=index.js.map
