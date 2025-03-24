class Page80Event {
    constructor() {
        this.initLayout();
        this.initContent();
        this.initAppends();
    }

    initLayout() {
        this.body = document.body;
        this.wrapper = document.querySelector('.wrapper');
        this.mainContent = document.querySelector('.main-content');
        this.mainContentInside = document.querySelector('.main-content__inside');
        // this.mainContent.id = 'v80MainContent';
        // this.mainContentInside = document.createElement('div');
        // this.mainContentInside.id = 'v80MainContentInside';

        this.footer = document.createElement('div');
        this.footer.className = 'footer';
        // this.footer.innerHTML = `
        //     <?xml version="1.0" encoding="UTF-8"?><svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 400"><defs><style>.cls-1{clip-path:url(#clippath);}.cls-2{fill:none;}.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12,.cls-13{stroke-width:0px;}.cls-3{fill:url(#linear-gradient);}.cls-4{fill:url(#linear-gradient-10);}.cls-14{clip-path:url(#clippath-1);}.cls-15{clip-path:url(#clippath-4);}.cls-16{clip-path:url(#clippath-3);}.cls-17{clip-path:url(#clippath-2);}.cls-18{clip-path:url(#clippath-7);}.cls-19{clip-path:url(#clippath-8);}.cls-20{clip-path:url(#clippath-6);}.cls-21{clip-path:url(#clippath-5);}.cls-22{clip-path:url(#clippath-9);}.cls-5{fill:url(#linear-gradient-4);}.cls-6{fill:url(#linear-gradient-2);}.cls-7{fill:url(#linear-gradient-3);}.cls-8{fill:url(#linear-gradient-8);}.cls-9{fill:url(#linear-gradient-9);}.cls-10{fill:url(#linear-gradient-7);}.cls-11{fill:url(#linear-gradient-5);}.cls-12{fill:url(#linear-gradient-6);}.cls-13{fill:#ed0c2a;}</style><clipPath id="clippath"><rect class="cls-2" y="323.97" width="1920" height="38.6"/></clipPath><linearGradient id="linear-gradient" x1="540.76" y1="-1311.6" x2="544.83" y2="-1311.6" gradientTransform="translate(257354.59 621527.69) rotate(-180) scale(473.61 -473.61)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff3427"/><stop offset=".33" stop-color="#ff6400"/><stop offset=".71" stop-color="#ff8c00"/><stop offset=".97" stop-color="#ffa400"/><stop offset="1" stop-color="#ffa400"/></linearGradient><clipPath id="clippath-1"><rect class="cls-2" width="1920" height="16.3"/></clipPath><linearGradient id="linear-gradient-2" x1="540" y1="-1312.12" x2="544.07" y2="-1312.12" gradientTransform="translate(257472.29 621439.49) rotate(-180) scale(473.61 -473.61)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ed0c2a"/><stop offset=".33" stop-color="#ff6400"/><stop offset=".47" stop-color="#ff8300"/><stop offset=".62" stop-color="#ffa100"/><stop offset=".7" stop-color="#ff840a"/><stop offset=".89" stop-color="#ff4a1e"/><stop offset=".97" stop-color="#ff3427"/><stop offset="1" stop-color="#ff3427"/></linearGradient><clipPath id="clippath-2"><rect class="cls-2" y="16.3" width="1920" height="38.6"/></clipPath><linearGradient id="linear-gradient-3" x1="540" y1="-1312.08" x2="544.07" y2="-1312.08" gradientTransform="translate(257472.29 621449.32) rotate(-180) scale(473.61 -473.61)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ed0c2a"/><stop offset=".97" stop-color="#ff3427"/><stop offset="1" stop-color="#ff3427"/></linearGradient><clipPath id="clippath-3"><rect class="cls-2" y="54.9" width="1920" height="38.6"/></clipPath><linearGradient id="linear-gradient-4" x1="540" y1="-1312.02" x2="544.07" y2="-1312.02" gradientTransform="translate(257472.29 621459.16) rotate(-180) scale(473.61 -473.61)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ed0c2a"/><stop offset=".25" stop-color="#ff6500"/><stop offset=".53" stop-color="#ff5010"/><stop offset=".97" stop-color="#ff3427"/><stop offset="1" stop-color="#ff3427"/></linearGradient><clipPath id="clippath-4"><rect class="cls-2" y="285.37" width="1920" height="38.6"/></clipPath><linearGradient id="linear-gradient-5" y1="-1311.66" y2="-1311.66" gradientTransform="translate(257472.29 621517.86) rotate(-180) scale(473.61 -473.61)" xlink:href="#linear-gradient-4"/><clipPath id="clippath-5"><rect class="cls-2" y="362.57" width="1920" height="37.43"/></clipPath><linearGradient id="linear-gradient-6" x1="540.35" y1="-1320.32" x2="544.42" y2="-1320.32" gradientTransform="translate(-255228.59 -624932.95) scale(473.61 -473.61)" xlink:href="#linear-gradient-4"/><clipPath id="clippath-6"><rect class="cls-2" y="93.5" width="1920" height="38.6"/></clipPath><linearGradient id="linear-gradient-7" x1="540" y1="-1311.96" x2="544.07" y2="-1311.96" gradientTransform="translate(257472.29 621468.99) rotate(-180) scale(473.61 -473.61)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff6500"/><stop offset=".25" stop-color="#ff6500"/><stop offset=".36" stop-color="#ff5010"/><stop offset=".52" stop-color="#ff3427"/><stop offset="1" stop-color="#ff3427"/></linearGradient><clipPath id="clippath-7"><rect class="cls-2" y="208.17" width="1920" height="38.6"/></clipPath><linearGradient id="linear-gradient-8" x1="540.76" y1="-1311.78" x2="544.83" y2="-1311.78" gradientTransform="translate(257354.59 621498.19) rotate(-180) scale(473.61 -473.61)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ed0c2a"/><stop offset=".33" stop-color="#ff6400"/><stop offset=".47" stop-color="#ff8300"/><stop offset=".62" stop-color="#ffa100"/><stop offset=".97" stop-color="#ffa400"/><stop offset="1" stop-color="#ffa400"/></linearGradient><clipPath id="clippath-8"><rect class="cls-2" y="232.97" width="1920" height="13.8"/></clipPath><linearGradient id="linear-gradient-9" x1="540.76" y1="-1311.76" x2="544.83" y2="-1311.76" gradientTransform="translate(257354.59 621501.35) rotate(-180) scale(473.61 -473.61)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ed0c2a"/><stop offset=".49" stop-color="#ff6400"/><stop offset="1" stop-color="#ff6400"/></linearGradient><clipPath id="clippath-9"><rect class="cls-2" y="118.31" width="1920" height="13.8"/></clipPath><linearGradient id="linear-gradient-10" x1="540.32" y1="-1319.91" x2="544.39" y2="-1319.91" gradientTransform="translate(-255233.6 -624998.33) scale(473.61 -473.61)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff3427"/><stop offset=".01" stop-color="#ff3626"/><stop offset=".49" stop-color="#ffa400"/><stop offset="1" stop-color="#ffa400"/></linearGradient></defs><g id="Layer_3"><rect class="cls-13" y="132.11" width="1920" height="76.06"/><rect class="cls-13" y="362.57" width="1920" height="37.43"/><g class="cls-1"><rect class="cls-3" y="323.97" width="1920" height="38.6"/></g><g class="cls-14"><rect class="cls-6" x="0" width="1920" height="16.3"/></g><g class="cls-17"><rect class="cls-7" x="0" y="16.3" width="1920" height="38.6"/></g><g class="cls-16"><rect class="cls-5" x="0" y="54.9" width="1920" height="38.6"/></g><g class="cls-15"><rect class="cls-11" x="0" y="285.37" width="1920" height="38.6"/></g><g class="cls-21"><rect class="cls-12" x="0" y="362.57" width="1920" height="37.43"/></g><g class="cls-20"><rect class="cls-10" x="0" y="93.5" width="1920" height="38.6"/></g><g class="cls-18"><rect class="cls-8" y="208.17" width="1920" height="38.6"/></g><rect class="cls-13" y="246.77" width="1920" height="38.6"/><g class="cls-19"><rect class="cls-9" y="232.97" width="1920" height="13.8"/></g><g class="cls-22"><rect class="cls-4" y="118.31" width="1920" height="13.8"/></g></g></svg>
        // `;

        this.mainContentSubheader = document.createElement('div');
        this.mainContentSubheader.className = 'main-content__subheader';
        this.mainContentSubheader.innerHTML = `
            <h2>2025 - Год защитника Отечества</h2>
        `;

        //Appends
        // this.wrapper.appendChild(this.mainContent);
        this.mainContentInside.appendChild(this.mainContentSubheader);
        // this.body.appendChild(this.footer);
    }

    initContent() {
        this.footerTop = document.createElement('div');
        this.footerTop.className = 'footer__top';
        this.footerTop.innerHTML = `
            <picture class="footer__top_main">
                <img src="/assets/images/80victory/Page80/png/v80Soldier.png" />
            </picture>
            <picture class="footer__top_bottom">
                <img src="/assets/images/80victory/Page80/png/v80LentaMulti.png" />
            </picture>
            <picture class="footer__top_slogan" id="v80Slogan">
                <img src="/assets/images/80victory/Page80/png/v80Slogan.png" />
            </picture>
        `;

        this.mainContentTop = document.createElement('div');
        this.mainContentMiddle = document.createElement('div');
        this.mainContentBottom = document.createElement('div');
        this.mainContentTop.id = 'v80mainContentTop';
        this.mainContentMiddle.id = 'v80mainContentMiddle';
        this.mainContentBottom.id = 'v80mainContentBottom';

        // Mother
        this.imageMain = document.createElement('picture');
        this.imageMain.id = 'v80ImageMother';
        this.imageMain.innerHTML = `
            <img src="/assets/images/80victory/Page80/png/v80Mother_2.png" />
        `;

        // Logo
        this.imageLogo = document.createElement('picture');
        this.imageLogo.id = 'v80ImageLogo';
        this.imageLogo.innerHTML = `
            <img src="/assets/images/80victory/Page80/png/v80Logo.png" />
        `;

        // Lenta Victory
        this.imageLentaVictory = document.createElement('picture');
        this.imageLentaVictory.id = 'v80ImageLentaVictory';
        this.imageLentaVictory.innerHTML = `
            <img src="/assets/images/80victory/Page80/png/v80LentaVictory.png" />
        `;

        // Brandbook
        this.brandBook = document.createElement('div');
        this.brandBook.id = 'v80BrandBook';
        this.imageBrandBook = document.createElement('picture');
        this.imageBrandBook.id = 'v80BrandBookImage';
        this.imageBrandBook.innerHTML = `
            <a href="https://may9.ru/Brandbook_Pobeda80.pdf" target="_blank">
                <img src="/assets/images/80victory/Page80/jpg/v80Brandbook.jpg" />
            </a>
        `;
        this.brandBookText = document.createElement('div');
        this.brandBookText.id = 'v80BrandBookText';
        this.brandBookText.innerHTML = `
            <p>Стоит отметить, что «Год защитника Отечества» приходит на смену «Году семьи» (2024 год), подчеркивая неразрывную связь между семейными ценностями и героическим служением Родине. «Год семьи» был посвящен вопросам демографии и поддержке материнства, дабы заложить основу для будущего страны. А «Год защитника Отечества» подчеркнет заслуги тех, кто защищал и защищает родину.</p>

            <p>Поскольку 2025 – это юбилейный год 80-летия Великой Победы, в рамках празднования разработан <a href="https://may9.ru/Brandbook_Pobeda80.pdf" target="_blank"><strong>специальный&nbsp;брендбук.</strong></a></p>

            <p>В его основе монумент «Родина-мать зовет!». Эмблема также содержит георгиевскую ленту, слово «Победа!» и число «80».</p>
        `;

        // Top text
        this.v80TextTop = document.createElement('div');
        this.v80TextTop.id = 'v80TextTop';
        this.v80TextTop.innerHTML = `
            <img class="main-content__column-image" src="assets/images/80victory/Page80/jpg/v80Putin.jpg" alt="" />
            <p><em><strong>«В следующем году мы будем отмечать 80-летие Великой Победы. В связи с этим предлагаю объявить 2025-й год - «Годом защитника Отечества»! В честь наших героев и участников специальной военной операции сегодня и в память о подвигах всех наших предков, сражавшихся в разные исторические периоды за Родину во славу наших отцов, дедов, прадедов, сокрушивших нацизм».</strong></em></p>
            <p style="text-align: right">
                <em>В.В. Путин на заседании Госсовета, </em><em>20.12.2024</em><br />
                <a href="http://www.kremlin.ru/events/president/news/75918" target="_blank"><strong>Источник</strong></a>
            </p>
        `;

        // Middle text
        this.v80TextMiddle = document.createElement('div');
        this.v80TextMiddle.id = 'v80TextMiddle';
        this.v80TextMiddle.innerHTML = `
            <p>21 июля 2023 года Владимир Путин подписал Указ «О&nbsp;подготовке и&nbsp;проведении празднования 80-й годовщины Победы в&nbsp;Великой Отечественной войне 1941–1945&nbsp;годов». Затем был сформирован оргкомитет "Победа".</p>

            <p>2025-й год в России объявлен «Годом защитника Отечества». Предложение было принято по инициативе Президента РФ Владимира Владимировича Путина на заседании Госсовета, посвящённом вопросам поддержки семей в Российской Федерации в Кремле.
            </p>

            <p>Официальные хештеги празднования:<br>
            <a href="https://vk.com/feed?q=%23%D0%93%D0%9E%D0%94_%D0%97%D0%90%D0%A9%D0%98%D0%A2%D0%9D%D0%98%D0%9A%D0%90_%D0%9E%D0%A2%D0%95%D0%A7%D0%95%D0%A1%D0%A2%D0%92%D0%90_2025&amp;section=search"><strong>#ГОД_ЗАЩИТНИКА_ОТЕЧЕСТВА_2025</strong><br>
            <a href="https://vk.com/feed?q=%23%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D0%B080&amp;section=search"><strong>#Победа80</strong>
            </a></p>

            <p>Подробная информация размещена <a href="https://may9.ru/" target="_blank"><strong>на&nbsp;официальном сайте.</strong></a></p>

        `;

        // Bottom text
        this.v80TextBottom = document.createElement('div');
        this.v80TextBottom.id = 'v80TextBottom';
        this.v80TextBottom.innerHTML = `
            <h3>План основных мероприятий по проведению Года Защитника Отечества</h3>

            <p>Все основные культурно-массовые мероприятия, поддерживаемые государством в этом году будут носить патриотический характер. На федеральном и региональном уровне будут организованы проекты, посвящённые сохранению исторической памяти и увековечению подвига советского народа в Великой Отечественной войне. Кроме того, в России пройдут два фестиваля: «Салют Победы» и «Вместе мы – Россия», а также акции «Георгиевская ленточка», «Бессмертный полк» и «Диктант Победы».</p>

            <p>Предстоящий год станет данью уважения к ратному подвигу всех, кто сражался за Родину в разные периоды истории, а также нынешним героям – участникам спецоперации. Год защитника Отечества 2025 – это не просто календарная дата, а символ национального единства и патриотизма. Это выражение глубокой признательности тем, кто защищал и продолжает защищать суверенитет и безопасность нашей страны.</p>

            <p><a href="https://smibs.ru/assets/images/news/2025/Year_Defender_Fatherland/event-plan-for-the-year-of-the-defender-of-the-fatherland.pdf" target="_blank"><strong>Программа мероприятий,</strong></a> планируемых муниципальным бюджетным учреждением культуры городского округа Самара «Самарская муниципальная информационно-библиотечная система» в рамках Года Защитника Отечества.</p>

            <p>Литературно-музыкальная композиция <strong>«Великий май! Великая Победа!»,</strong> филиал Библиотека №11.</p>

            <p>Музыкально-поэтическая композиция <strong>«Поклонимся великим тем годам»,</strong> филиал Библиотека №1.</p>

            <p>Спектакль <strong>«Сказка о Военной тайне, о Мальчише-Кибальчише и его твёрдом слове»</strong> по произведению Аркадия Гайдара в рамках проекта Театра теней «Сказка сказывается».</p>

            <p>Музыкально-литературная композиция <strong>«Строки, рожденные в боях»,</strong> Центральная городская библиотека им. Н. К. Крупской.</p>

            <p>Участие в Международном конкурсе <strong>«Лучшие практики библиотек по сохранению исторической памяти о героях Великой Отечественной войны»,</strong> посвященном 80-летию Победы в Великой Отечественной войне 1941–1945.</p>

            <p>Литературный фестиваль <strong>«Прочитай мне о войне»</strong> 25-26 апреля, ЦГБ, филиал Библиотека №8.</p>
        `;
    }

    initAppends() {
        // Appends
        if (document.body.clientWidth > 570 || screen.width > 570) {
            this.wrapper.appendChild(this.mainContent);
            this.mainContentInside.appendChild(this.mainContentTop);
            this.mainContentTop.appendChild(this.imageMain);
            this.mainContentTop.appendChild(this.imageLentaVictory);
            this.mainContentTop.appendChild(this.v80TextTop);
            // this.mainContentInside.appendChild(this.imageLogo);

            this.mainContentInside.appendChild(this.mainContentMiddle);
            this.mainContentMiddle.appendChild(this.v80TextMiddle);
            this.mainContentMiddle.appendChild(this.brandBook);
            this.brandBook.appendChild(this.imageBrandBook);
            this.brandBook.appendChild(this.brandBookText);

            this.mainContentInside.appendChild(this.mainContentBottom);
            this.mainContentBottom.appendChild(this.v80TextBottom);

            this.mainContent.appendChild(this.footerTop);

        } else if (document.body.clientWidth > 1024 || screen.width > 1024) {
            this.brandBook.removeChild(this.v80Slogan);

        } else if (document.body.clientWidth < 570 || screen.width < 570) {
            this.wrapper.appendChild(this.mainContent);
            this.mainContentInside.appendChild(this.mainContentTop);
            this.mainContentTop.appendChild(this.imageLentaVictory);
            this.mainContentTop.appendChild(this.v80TextTop);

            this.mainContentInside.appendChild(this.mainContentMiddle);
            this.mainContentMiddle.appendChild(this.v80TextMiddle);
            this.mainContentMiddle.appendChild(this.brandBook);
            this.brandBook.appendChild(this.imageBrandBook);
            this.brandBook.appendChild(this.brandBookText);

            this.mainContentInside.appendChild(this.mainContentBottom);
            this.mainContentBottom.appendChild(this.v80TextBottom);

            this.wrapper.appendChild(this.footerTop);
            // this.wrapper.appendChild(this.footerTopBottom);
        }
    }
}

export { Page80Event }