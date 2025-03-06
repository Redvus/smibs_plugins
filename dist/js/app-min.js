(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function m(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(a){if(a.ep)return;a.ep=!0;const n=m(a);fetch(a.href,n)}})();class S{constructor(){this.initLayout(),this.initAnimation()}initLayout(){this.bodyBlock=document.body,this.womanDay25=document.createElement("div"),this.container=document.createElement("div"),this.womanDay25.id="womanDay25",this.womanDay25.className="anniversary anniversary--womanDay25",this.container.classList="anniversary__container",this.womanDay25.innerHTML=`
			<picture id="womanDay25Back">
				<img src="assets/images/womanDay25/womanDay25Back.svg" alt="">
			</picture>
			<picture id="womanDay25BackBottom">
				<img src="assets/images/womanDay25/womanDay25Back_2.png" alt="">
			</picture>
		`,this.container.innerHTML=`
            <div id="womanDay25Slogan">
                <picture id="womanDay25Slogan_1">
                    <img src="assets/images/womanDay25/womanDay25Slogan_1.png" id="womanDay25Slogan_1" alt="">
                </picture>
                <picture id="womanDay25Slogan_2">
                    <img src="assets/images/womanDay25/womanDay25Slogan_2.png" id="womanDay25Slogan_2" alt="">
                </picture>
                <picture id="womanDay25Slogan_3">
                    <img src="assets/images/womanDay25/womanDay25Slogan_3.png" id="womanDay25Slogan_3" alt="">
                </picture>
                <picture id="womanDay25Slogan_4">
                    <img src="assets/images/womanDay25/womanDay25Slogan_4.png" id="womanDay25Slogan_4" alt="">
                </picture>
            </div>
            <div id="womanDay25Woman1">
                <picture id="womanDay25Woman1_1">
                    <img src="assets/images/womanDay25/womanDay25Woman1_1.png" id="womanDay25Woman1_1" alt="">
                </picture>
                <picture id="womanDay25Woman1_2">
                    <img src="assets/images/womanDay25/womanDay25Woman1_2.png" id="womanDay25Woman1_2" alt="">
                </picture>
                <picture id="womanDay25Woman1_3">
                    <img src="assets/images/womanDay25/womanDay25Woman1_3.png" id="womanDay25Woman1_3" alt="">
                </picture>
                <picture id="womanDay25Woman1_4">
                    <img src="assets/images/womanDay25/womanDay25Woman1_4.png" id="womanDay25Woman1_4" alt="">
                </picture>
                <picture id="womanDay25Woman1_5">
                    <img src="assets/images/womanDay25/womanDay25Woman1_5.png" id="womanDay25Woman1_5" alt="">
                </picture>
            </div>
            <div id="womanDay25Woman2">
                <picture id="womanDay25Woman2_1">
                    <img src="assets/images/womanDay25/womanDay25Woman2_1.png" id="womanDay25Woman2_1" alt="">
                </picture>
                <picture id="womanDay25Woman2_2">
                    <img src="assets/images/womanDay25/womanDay25Woman2_2.png" id="womanDay25Woman2_2" alt="">
                </picture>
                <picture id="womanDay25Woman2_3">
                    <img src="assets/images/womanDay25/womanDay25Woman3_5.png" id="womanDay25Woman2_3" alt="">
                </picture>
            </div>
            <div id="womanDay25Woman3">
                <picture id="womanDay25Woman3_1">
                    <img src="assets/images/womanDay25/womanDay25Woman3_1.png" id="womanDay25Woman3_1" alt="">
                </picture>
                <picture id="womanDay25Woman3_2">
                    <img src="assets/images/womanDay25/womanDay25Woman3_2.png" id="womanDay25Woman3_2" alt="">
                </picture>
                <picture id="womanDay25Woman3_3">
                    <img src="assets/images/womanDay25/womanDay25Woman3_3.png" id="womanDay25Woman3_3" alt="">
                </picture>
                <picture id="womanDay25Woman3_4">
                    <img src="assets/images/womanDay25/womanDay25Woman3_4.png" id="womanDay25Woman3_4" alt="">
                </picture>
                <picture id="womanDay25Woman3_5">
                    <img src="assets/images/womanDay25/womanDay25Woman2_3.png" id="womanDay25Woman3_5" alt="">
                </picture>
            </div>
            <div id="womanDay25Woman4">
                <picture id="womanDay25Woman4_1">
                    <img src="assets/images/womanDay25/womanDay25Woman4_1.png" id="womanDay25Woman4_1" alt="">
                </picture>
                <picture id="womanDay25Woman4_2">
                    <img src="assets/images/womanDay25/womanDay25Woman4_2.png" id="womanDay25Woman4_2" alt="">
                </picture>
                <picture id="womanDay25Woman4_3">
                    <img src="assets/images/womanDay25/womanDay25Woman4_3.png" id="womanDay25Woman4_3" alt="">
                </picture>
                <picture id="womanDay25Woman4_4">
                    <img src="assets/images/womanDay25/womanDay25Woman4_4.png" id="womanDay25Woman4_4" alt="">
                </picture>
                <picture id="womanDay25Woman4_5">
                    <img src="assets/images/womanDay25/womanDay25Woman4_5.png" id="womanDay25Woman4_5" alt="">
                </picture>
            </div>
        `,this.bodyBlock.appendChild(this.womanDay25),this.womanDay25.appendChild(this.container)}initAnimation(){const e=document.getElementById("womanDay25"),m=document.getElementById("womanDay25Back"),t=document.getElementById("womanDay25BackBottom"),a=document.getElementById("womanDay25Slogan_1"),n=document.getElementById("womanDay25Slogan_2"),o=document.getElementById("womanDay25Slogan_3"),s=document.getElementById("womanDay25Slogan_4"),d=document.getElementById("womanDay25Woman1_1"),y=document.getElementById("womanDay25Woman1_2"),r=document.getElementById("womanDay25Woman1_3"),c=document.getElementById("womanDay25Woman1_4"),w=document.getElementById("womanDay25Woman1_5"),D=document.getElementById("womanDay25Woman2_1"),l=document.getElementById("womanDay25Woman2_2"),g=document.getElementById("womanDay25Woman2_3"),u=document.getElementById("womanDay25Woman3_1"),p=document.getElementById("womanDay25Woman3_2"),_=document.getElementById("womanDay25Woman3_3"),W=document.getElementById("womanDay25Woman3_4"),h=document.getElementById("womanDay25Woman3_5"),B=document.getElementById("womanDay25Woman4_1"),v=document.getElementById("womanDay25Woman4_2"),E=document.getElementById("womanDay25Woman4_3"),I=document.getElementById("womanDay25Woman4_4"),f=document.getElementById("womanDay25Woman4_5");new gsap.timeline({delay:.5,onComplete:this.initHide(9)}).to(e,{duration:.3,delay:"1",autoAlpha:1,zIndex:9999}).from([m,t],{duration:1,delay:"0.1",autoAlpha:0}).from([d,y,r,c,w,D,l,g,u,p,_,W,h,B,v,E,I,f],{duration:.3,delay:"-0.5",autoAlpha:0,y:"-15%",stagger:.1}).from([a,n,o,s],{duration:1,delay:"-1",autoAlpha:0,y:"-30%",stagger:.3})}initHide(e){new gsap.timeline({delay:e,onComplete:()=>{setTimeout(()=>{this.bodyBlock.removeChild(this.womanDay25)},1e3)}}).to(this.womanDay25,{autoAlpha:0,duration:.6,delay:"-0.8",display:"none",zIndex:"-1",ease:"power1"})}initDev(){this.womanDay25.style.opacity=1,this.womanDay25.style.visibility="visible",this.womanDay25.style.zIndex=9999}}class b{constructor(){this.initLayout(),new S}initLayout(){this.body=document.body,this.wrapper=document.querySelector(".wrapper"),this.sidebar=document.createElement("div"),this.sidebar.className="sidebar",this.sidebarStatic=document.createElement("div"),this.sidebarStatic.className="sidebar-static",this.header=document.createElement("div"),this.header.className="header header--desktop",this.header.innerHTML=`
            <div class="header__nav">
                <div class="header__top"></div>
                <div class="header__bottom"></div>
            </div>
            <a href="javascript:void(0);" class="header__blind" id="blindButton">
<!--                <i class="fa fa-eye"></i>-->
<!--                <p>Контрастная версия</p>-->
            </a>
        `,this.mainContent=document.createElement("div"),this.mainContent.className="main-content",this.mainContentInside=document.createElement("div"),this.mainContentInside.className="main-content__inside",this.wrapper.appendChild(this.sidebar),this.wrapper.appendChild(this.sidebarStatic),this.wrapper.appendChild(this.header),this.wrapper.appendChild(this.mainContent),this.mainContent.appendChild(this.mainContentInside)}}document.addEventListener("DOMContentLoaded",()=>{window.plugins=new b});
