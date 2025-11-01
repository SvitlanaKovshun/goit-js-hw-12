import{a as E,S as q,i}from"./assets/vendor-Bt_EzQve.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const P="https://pixabay.com/api/",R="52923405-4f454c0beaa3d564f6127cb92",M=15;async function p(o,t=1){try{return(await E.get(P,{params:{key:R,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:M}})).data}catch(s){throw console.error("Error fetching images:",s),s}}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),g=document.querySelector(".js-load-more"),$=new q(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const t=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:c,comments:w,downloads:S})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img src="${s}" alt="${e}" loading="lazy" />
        </a>
        <div class="stats">
          <div class="stats-params">
            <span class="stats-item">Likes</span>
            <span class="stats-number">${r}</span>
          </div>
          <div class="stats-params">
            <span class="stats-item">Views</span>
            <span class="stats-number">${c}</span>
          </div>
          <div class="stats-params">
            <span class="stats-item">Comments</span>
            <span class="stats-number">${w}</span>
          </div>
          <div class="stats-params">
            <span class="stats-item">Downloads</span>
            <span class="stats-number">${S}</span>
          </div>
        </div>
      </li>`).join("");f.insertAdjacentHTML("beforeend",t),$.refresh()}function B(){f.innerHTML=""}function v(){h.classList.remove("hidden")}function u(){h.classList.add("hidden")}function L(){g.classList.remove("load-more-hidden")}function l(){g.classList.add("load-more-hidden")}const A=document.querySelector(".form"),I=document.querySelector(".input"),O=document.querySelector(".js-load-more"),b=15;let d="",n=1,m=0;A.addEventListener("submit",_);O.addEventListener("click",j);async function _(o){o.preventDefault();const t=I.value.trim();if(t){t!==d&&(d=t,n=1,B(),l()),v();try{const s=await p(d,n);u();const{hits:a,totalHits:e}=s;if(m=e??0,!a||a.length===0){i.warning({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}),l();return}y(a),n*b<m?L():(l(),n===1&&i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(s){u(),i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(s)}finally{o.target.reset()}}}async function j(){n+=1,v();try{const o=await p(d,n);u();const{hits:t}=o;if(!t||t.length===0){l(),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}y(t);const s=document.querySelector(".gallery-item");if(s){const{height:a}=s.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}n*b>=m?(l(),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):L()}catch(o){u(),i.error({title:"Error",message:"Something went wrong while loading more images.",position:"topRight"}),console.error(o)}}
//# sourceMappingURL=index.js.map
