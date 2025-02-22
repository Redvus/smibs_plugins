(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();class d{constructor(){this.initLayout()}initLayout(){this.body=document.body,this.wrapper=document.querySelector(".wrapper"),this.sidebar=document.createElement("div"),this.sidebar.className="sidebar",this.sidebarStatic=document.createElement("div"),this.sidebarStatic.className="sidebar-static",this.header=document.createElement("div"),this.header.className="header header--desktop",this.header.innerHTML=`
            <div class="header__nav">
                <div class="header__top"></div>
                <div class="header__bottom"></div>
            </div>
            <a href="javascript:void(0);" class="header__blind" id="blindButton">
<!--                <i class="fa fa-eye"></i>-->
<!--                <p>Контрастная версия</p>-->
            </a>
        `,this.mainContent=document.createElement("div"),this.mainContent.className="main-content",this.mainContentInside=document.createElement("div"),this.mainContentInside.className="main-content__inside",this.wrapper.appendChild(this.sidebar),this.wrapper.appendChild(this.sidebarStatic),this.wrapper.appendChild(this.header),this.wrapper.appendChild(this.mainContent),this.mainContent.appendChild(this.mainContentInside)}}document.addEventListener("DOMContentLoaded",()=>{window.plugins=new d});
