(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();class r{constructor(){this.initLayout(),this.initContent(),this.initAppends()}initLayout(){this.body=document.body,this.wrapper=document.querySelector(".wrapper"),this.mainContent=document.querySelector(".main-content"),this.mainContentInside=document.querySelector(".main-content__inside"),this.footer=document.createElement("div"),this.footer.className="footer",this.mainContentSubheader=document.createElement("div"),this.mainContentSubheader.className="main-content__subheader",this.mainContentSubheader.innerHTML=`
            <h2>2025 -Год защитника Отечеств</h2>
        `,this.mainContentInside.appendChild(this.mainContentSubheader)}initContent(){this.footerTop=document.createElement("div"),this.footerTop.className="footer__top",this.footerTop.innerHTML=`
            <picture class="footer__top_main">
                <img src="/assets/images/80victory/Page80/png/v80Soldier.png" />
            </picture>
            <picture class="footer__top_bottom">
                <img src="/assets/images/80victory/Page80/png/v80LentaMulti.png" />
            </picture>
            <picture class="footer__top_slogan" id="v80Slogan">
                <img src="/assets/images/80victory/Page80/png/v80Slogan.png" />
            </picture>
        `,this.mainContentTop=document.createElement("div"),this.mainContentMiddle=document.createElement("div"),this.mainContentBottom=document.createElement("div"),this.mainContentTop.id="v80mainContentTop",this.mainContentMiddle.id="v80mainContentMiddle",this.mainContentBottom.id="v80mainContentBottom",this.imageMain=document.createElement("picture"),this.imageMain.id="v80ImageMother",this.imageMain.innerHTML=`
            <img src="/assets/images/80victory/Page80/png/v80Mother_2.png" />
        `,this.imageLogo=document.createElement("picture"),this.imageLogo.id="v80ImageLogo",this.imageLogo.innerHTML=`
            <img src="/assets/images/80victory/Page80/png/v80Logo.png" />
        `,this.imageLentaVictory=document.createElement("picture"),this.imageLentaVictory.id="v80ImageLentaVictory",this.imageLentaVictory.innerHTML=`
            <img src="/assets/images/80victory/Page80/png/v80LentaVictory.png" />
        `,this.brandBook=document.createElement("div"),this.brandBook.id="v80BrandBook",this.imageBrandBook=document.createElement("picture"),this.imageBrandBook.id="v80BrandBookImage",this.imageBrandBook.innerHTML=`
            <a href="https://may9.ru/Brandbook_Pobeda80.pdf" target="_blank">
                <img src="/assets/images/80victory/Page80/jpg/v80Brandbook.jpg" />
            </a>
        `,this.brandBookText=document.createElement("div"),this.brandBookText.id="v80BrandBookText",this.brandBookText.innerHTML=`
            <p>Стоит отметить, что Год защитника Отечества приходит на смену Году семьи (2024 год), подчеркивая неразрывную связь между семейными ценностями и героическим служением Родине. Год семьи был посвящен вопросам демографии и поддержке материнства, дабы заложить основу для будущего страны. А Год защитника Отечества подчеркнет заслуги тех, кто защищал и защищает родину.</p>

            <p>Поскольку 2025&nbsp;– это юбилейный год 80-летия Великой Победы, в&nbsp;рамках празднования разработан <a href="https://may9.ru/Brandbook_Pobeda80.pdf" target="_blank"><strong>специальный&nbsp;брендбук.</strong></a></p>

            <p>В его основе монумент «Родина-мать зовет!». Эмблема также содержит георгиевскую ленту, слово «Победа!» и число «80».</p>
        `,this.v80TextTop=document.createElement("div"),this.v80TextTop.id="v80TextTop",this.v80TextTop.innerHTML=`
            <img class="main-content__column-image" src="assets/images/80victory/Page80/jpg/v80Putin.jpg" alt="" />
            <p><em><strong>В следующем году мы будем отмечать 80-летие Великой Победы. В связи с этим предлагаю объявить 2025 год Годом защитника Отечества. В честь наших героев и участников специальной военной операции и в память о подвигах всех наших предков, сражавшихся в разные исторические периоды за Родину. Во славу наших отцов, дедов, прадедов, сокрушивших нацизм.</strong></em></p>
            <p style="text-align: right">
                <em>В.В. Путин на заседании Госсовета, </em><em>20.12.2024</em><br />
                <a href="http://www.kremlin.ru/events/president/news/75918" target="_blank"><strong>Источник</strong></a>
            </p>
        `,this.v80TextMiddle=document.createElement("div"),this.v80TextMiddle.id="v80TextMiddle",this.v80TextMiddle.innerHTML=`
            <p>21 июля 2023 года Владимир Путин подписал Указ «О&nbsp;подготовке и&nbsp;проведении празднования 80-й годовщины Победы в&nbsp;Великой Отечественной войне 1941–1945&nbsp;годов». Затем был сформирован оргкомитет «Победа».</p>

            <p>2025-й год в России объявлен Годом защитника Отечества. Предложение было принято по инициативе Президента РФ Владимира Владимировича Путина на заседании Госсовета, посвящённом вопросам поддержки семей в Российской Федерации в Кремле.
            </p>

            <p>Официальные хештеги празднования:<br>
            <a href="https://vk.com/feed?q=%23%D0%93%D0%9E%D0%94_%D0%97%D0%90%D0%A9%D0%98%D0%A2%D0%9D%D0%98%D0%9A%D0%90_%D0%9E%D0%A2%D0%95%D0%A7%D0%95%D0%A1%D0%A2%D0%92%D0%90_2025&amp;section=search"><strong>#ГОД_ЗАЩИТНИКА_ОТЕЧЕСТВА_2025</strong><br>
            <a href="https://vk.com/feed?q=%23%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D0%B080&amp;section=search"><strong>#Победа80</strong>
            </a></p>

            <p>Подробная информация размещена <a href="https://may9.ru/" target="_blank"><strong>на&nbsp;официальном сайте.</strong></a></p>
        `,this.v80TextBottom=document.createElement("div"),this.v80TextBottom.id="v80TextBottom",this.v80TextBottom.innerHTML=`
            <h3>План основных мероприятий по проведению Года Защитника Отечества</h3>

            <p>Все основные культурно-массовые мероприятия, поддерживаемые государством в этом году будут носить патриотический характер. На федеральном и региональном уровне будут организованы проекты, посвящённые сохранению исторической памяти и увековечению подвига советского народа в Великой Отечественной войне. Кроме того, в России пройдут два фестиваля: «Салют Победы» и «Вместе мы – Россия», а также акции «Георгиевская ленточка», «Бессмертный полк» и «Диктант Победы».</p>

            <pГод защитника Отечеств 2025&nbsp;– это не просто календарная дата, а символ национального единства и патриотизма. Это выражение глубокой признательности тем, кто защищал и продолжает защищать суверенитет и безопасность нашей страны.</p>

            <p><a href="https://smibs.ru/assets/images/news/2025/Year_Defender_Fatherland/event-plan-for-the-year-of-the-defender-of-the-fatherland.pdf" target="_blank"><strong>Программа мероприятий,</strong></a> планируемых муниципальным бюджетным учреждением культуры городского округа Самара «Самарская муниципальная информационно-библиотечная система» в рамках Года Защитника Отечества.</p>

            <p>Литературно-музыкальная композиция <strong>«Великий май! Великая Победа!»,</strong> филиал Библиотека №11.</p>

            <p>Музыкально-поэтическая композиция <strong>«Поклонимся великим тем годам»,</strong> филиал Библиотека №1.</p>

            <p>Спектакль <strong>«Сказка о Военной тайне, о Мальчише-Кибальчише и его твёрдом слове»</strong> по произведению Аркадия Гайдара в рамках проекта Театра теней «Сказка сказывается».</p>

            <p>Музыкально-литературная композиция <strong>«Строки, рожденные в боях»,</strong> Центральная городская библиотека им. Н. К. Крупской.</p>

            <p>Участие в Международном конкурсе <strong>«Лучшие практики библиотек по сохранению исторической памяти о героях Великой Отечественной войны»,</strong> посвященном 80-летию Победы в Великой Отечественной войне 1941–1945.</p>

            <p>Литературный фестиваль <strong>«Прочитай мне о войне»</strong> Центральная городская библиотека им. Н. К. Крупской, филиал Библиотека №8.</p>
        `}initAppends(){document.body.clientWidth>570||screen.width>570?(this.wrapper.appendChild(this.mainContent),this.mainContentInside.appendChild(this.mainContentTop),this.mainContentTop.appendChild(this.imageMain),this.mainContentTop.appendChild(this.imageLentaVictory),this.mainContentTop.appendChild(this.v80TextTop),this.mainContentInside.appendChild(this.mainContentMiddle),this.mainContentMiddle.appendChild(this.v80TextMiddle),this.mainContentMiddle.appendChild(this.brandBook),this.brandBook.appendChild(this.imageBrandBook),this.brandBook.appendChild(this.brandBookText),this.mainContentInside.appendChild(this.mainContentBottom),this.mainContentBottom.appendChild(this.v80TextBottom),this.mainContent.appendChild(this.footerTop)):document.body.clientWidth>1024||screen.width>1024?this.brandBook.removeChild(this.v80Slogan):(document.body.clientWidth<570||screen.width<570)&&(this.wrapper.appendChild(this.mainContent),this.mainContentInside.appendChild(this.mainContentTop),this.mainContentTop.appendChild(this.imageLentaVictory),this.mainContentTop.appendChild(this.v80TextTop),this.mainContentInside.appendChild(this.mainContentMiddle),this.mainContentMiddle.appendChild(this.v80TextMiddle),this.mainContentMiddle.appendChild(this.brandBook),this.brandBook.appendChild(this.imageBrandBook),this.brandBook.appendChild(this.brandBookText),this.mainContentInside.appendChild(this.mainContentBottom),this.mainContentBottom.appendChild(this.v80TextBottom),this.wrapper.appendChild(this.footerTop))}}class d{constructor(){new r}initLayout(){this.body=document.body,this.wrapper=document.querySelector(".wrapper"),this.sidebar=document.createElement("div"),this.sidebar.className="sidebar",this.sidebarStatic=document.createElement("div"),this.sidebarStatic.className="sidebar-static",this.header=document.createElement("div"),this.header.className="header header--desktop",this.header.innerHTML=`
            <div class="header__nav">
                <div class="header__top"></div>
                <div class="header__bottom"></div>
            </div>
            <a href="javascript:void(0);" class="header__blind" id="blindButton">
<!--                <i class="fa fa-eye"></i>-->
<!--                <p>Контрастная версия</p>-->
            </a>
        `,this.mainContent=document.createElement("div"),this.mainContent.className="main-content",this.mainContentInside=document.createElement("div"),this.mainContentInside.className="main-content__inside",this.wrapper.appendChild(this.sidebar),this.wrapper.appendChild(this.sidebarStatic),this.wrapper.appendChild(this.header),this.wrapper.appendChild(this.mainContent),this.mainContent.appendChild(this.mainContentInside)}}document.addEventListener("DOMContentLoaded",()=>{window.plugins=new d});
