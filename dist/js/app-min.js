(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();class r{constructor(){this.initLayout(),this.initContent(),this.initAppends()}initLayout(){this.body=document.body,this.wrapper=document.querySelector(".wrapper"),this.mainContent=document.querySelector(".main-content"),this.mainContent.id="v80MainContent",this.mainContentInside=document.createElement("div"),this.mainContentInside.id="v80MainContentInside",this.footer=document.createElement("div"),this.footer.className="footer",this.mainContentSubheader=document.createElement("div"),this.mainContentSubheader.className="main-content__subheader",this.mainContentSubheader.innerHTML=`
            <h2>2025 - Год защитника Отечества</h2>
        `,this.body.appendChild(this.footer)}initContent(){this.footerTop=document.createElement("picture"),this.footerTop.className="footer__top",this.footerTop.innerHTML=`
            <img src="/assets/images/80victory/Page80/png/v80Soldier.png" />
        `,this.footerTopBottom=document.createElement("picture"),this.footerTopBottom.className="footer__top_bottom",this.footerTopBottom.innerHTML=`
            <img src="/assets/images/80victory/Page80/png/v80LentaMulti.png" />
        `,this.mainContentTop=document.createElement("div"),this.mainContentTop.id="v80mainContentTop",this.imageMain=document.createElement("picture"),this.imageMain.id="v80ImageMother",this.imageMain.innerHTML=`
            <img src="/assets/images/80victory/Page80/png/v80Mother_2.png" />
        `,this.imageLogo=document.createElement("picture"),this.imageLogo.id="v80ImageLogo",this.imageLogo.innerHTML=`
            <img src="/assets/images/80victory/Page80/png/v80Logo.png" />
        `,this.imageLentaVictory=document.createElement("picture"),this.imageLentaVictory.id="v80ImageLentaVictory",this.imageLentaVictory.innerHTML=`
            <img src="/assets/images/80victory/Page80/png/v80LentaVictory.png" />
        `,this.v80Slogan=document.createElement("picture"),this.v80Slogan.id="v80Slogan",this.v80Slogan.innerHTML=`
            <img src="/assets/images/80victory/Page80/png/v80Slogan.png" />
        `,this.brandBook=document.createElement("div"),this.brandBook.id="v80BrandBook",this.imageBrandBook=document.createElement("picture"),this.imageBrandBook.id="v80BrandBookImage",this.imageBrandBook.innerHTML=`
            <a href="https://may9.ru/Brandbook_Pobeda80.pdf" target="_blank">
                <img src="/assets/images/80victory/Page80/jpg/v80Brandbook.jpg" />
            </a>
        `,this.brandBookText=document.createElement("div"),this.brandBookText.id="v80BrandBookText",this.brandBookText.innerHTML=`
            <p>Стоит отметить, что «Год защитника Отечества» приходит на смену «Году семьи» (2024 год), подчеркивая неразрывную связь между семейными ценностями и героическим служением Родине. «Год семьи» был посвящен вопросам демографии и поддержке материнства, дабы заложить основу для будущего страны. А «Год защитника Отечества» подчеркнет заслуги тех, кто защищал и защищает родину.</p>
            
            <p>Поскольку 2025 – это юбилейный год 80-летия Великой Победы, в рамках празднования разработан <a href="https://may9.ru/Brandbook_Pobeda80.pdf" target="_blank"><strong>специальный&nbsp;брендбук.</strong></a></p>
            
            <p>В его основе монумент «Родина-мать зовет!». Эмблема также содержит георгиевскую ленту, слово «Победа!» и число «80».</p>
        `,this.v80TextTop=document.createElement("div"),this.v80TextTop.id="v80TextTop",this.v80TextTop.innerHTML=`
            <img class="main-content__column-image" src="assets/images/80victory/Page80/jpg/v80Putin.jpg" alt="" />
            <p><em><strong>«В следующем году мы будем отмечать 80-летие Великой Победы. В связи с этим предлагаю объявить 2025-й год - «Годом защитника Отечества»! В честь наших героев и участников специальной военной операции сегодня и в память о подвигах всех наших предков, сражавшихся в разные исторические периоды за Родину во славу наших отцов, дедов, прадедов, сокрушивших нацизм».</strong></em></p>
            <p style="text-align: right">
                <em>В.В. Путин на заседании Госсовета, </em><em>20.12.2024</em><br />
                <a href="http://www.kremlin.ru/events/president/news/75918" target="_blank"><strong>Источник</strong></a>
            </p>
        `,this.v80TextMiddle=document.createElement("div"),this.v80TextMiddle.id="v80TextMiddle",this.v80TextMiddle.innerHTML=`
            <p>2025-й год в России объявлен «Годом защитника Отечества». Предложение было принято по инициативе Президента РФ Владимира Владимировича Путина на заседании Госсовета, посвящённом вопросам поддержки семей в Российской Федерации в Кремле.
            </p>
            
            <p>Официальные хештеги празднования:<br>
            <a href="https://vk.com/feed?q=%23%D0%93%D0%9E%D0%94_%D0%97%D0%90%D0%A9%D0%98%D0%A2%D0%9D%D0%98%D0%9A%D0%90_%D0%9E%D0%A2%D0%95%D0%A7%D0%95%D0%A1%D0%A2%D0%92%D0%90_2025&amp;section=search"><strong>#ГОД_ЗАЩИТНИКА_ОТЕЧЕСТВА_2025</strong><br>
            <a href="https://vk.com/feed?q=%23%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D0%B080&amp;section=search"><strong>#Победа80</strong>
            </a></p>
            
            <p>Подробная информация размещена <a href="https://may9.ru/" target="_blank"><strong>на&nbsp;официальном сайте.</strong></a></p>
            
        `,this.v80TextBottom=document.createElement("div"),this.v80TextBottom.id="v80TextBottom",this.v80TextBottom.innerHTML=`
            <p>21 июля 2023 года Владимир Путин подписал Указ «О&nbsp;подготовке и&nbsp;проведении празднования 80-й годовщины Победы в&nbsp;Великой Отечественной войне 1941–1945&nbsp;годов». Затем был сформирован оргкомитет "Победа".</p>
            
            <h3>План основных мероприятий по проведению Года Защитника Отечества</h3>
        
            <p>Все основные культурно-массовые мероприятия, поддерживаемые государством в этом году будут носить патриотический характер. На федеральном и региональном уровне будут организованы проекты, посвящённые сохранению исторической памяти и увековечению подвига советского народа в Великой Отечественной войне. Кроме того, в России пройдут два фестиваля: «Салют Победы» и «Вместе мы – Россия», а также акции «Георгиевская ленточка», «Бессмертный полк» и «Диктант Победы».</p>
            
            <p>Предстоящий год станет данью уважения к ратному подвигу всех, кто сражался за Родину в разные периоды истории, а также нынешним героям – участникам спецоперации. Год защитника Отечества 2025 – это не просто календарная дата, а символ национального единства и патриотизма. Это выражение глубокой признательности тем, кто защищал и продолжает защищать суверенитет и безопасность нашей страны.</p>
        `}initAppends(){document.body.clientWidth>570||screen.width>570?(this.wrapper.appendChild(this.mainContent),this.mainContent.appendChild(this.imageMain),this.mainContent.appendChild(this.imageLentaVictory),this.mainContent.appendChild(this.v80TextTop),this.mainContent.appendChild(this.v80TextMiddle),this.mainContent.appendChild(this.v80TextBottom),this.mainContent.appendChild(this.brandBook),this.brandBook.appendChild(this.imageBrandBook),this.brandBook.appendChild(this.brandBookText),this.brandBook.appendChild(this.v80Slogan),this.mainContent.appendChild(this.footerTop),this.mainContent.appendChild(this.footerTopBottom)):document.body.clientWidth>1024||screen.width>1024?this.brandBook.removeChild(this.v80Slogan):(document.body.clientWidth<570||screen.width<570)&&(this.wrapper.removeChild(this.mainContent),this.wrapper.appendChild(this.mainContentTop),this.wrapper.appendChild(this.mainContentInside),this.mainContentTop.appendChild(this.imageMain),this.mainContentTop.appendChild(this.imageLentaVictory),this.mainContentInside.appendChild(this.v80TextTop),this.mainContentInside.appendChild(this.v80TextMiddle),this.mainContentInside.appendChild(this.brandBook),this.brandBook.appendChild(this.imageBrandBook),this.brandBook.appendChild(this.brandBookText),this.mainContentInside.appendChild(this.v80TextBottom),this.v80TextBottom.appendChild(this.v80Slogan),this.wrapper.appendChild(this.footerTop),this.wrapper.appendChild(this.footerTopBottom))}}class d{constructor(){new r}initLayout(){this.body=document.body,this.wrapper=document.querySelector(".wrapper"),this.sidebar=document.createElement("div"),this.sidebar.className="sidebar",this.sidebarStatic=document.createElement("div"),this.sidebarStatic.className="sidebar-static",this.header=document.createElement("div"),this.header.className="header header--desktop",this.header.innerHTML=`
            <div class="header__nav">
                <div class="header__top"></div>
                <div class="header__bottom"></div>
            </div>
            <a href="javascript:void(0);" class="header__blind" id="blindButton">
<!--                <i class="fa fa-eye"></i>-->
<!--                <p>Контрастная версия</p>-->
            </a>
        `,this.mainContent=document.createElement("div"),this.mainContent.className="main-content",this.mainContentInside=document.createElement("div"),this.mainContentInside.className="main-content__inside",this.wrapper.appendChild(this.sidebar),this.wrapper.appendChild(this.sidebarStatic),this.wrapper.appendChild(this.header),this.wrapper.appendChild(this.mainContent),this.mainContent.appendChild(this.mainContentInside)}}document.addEventListener("DOMContentLoaded",()=>{window.plugins=new d});
