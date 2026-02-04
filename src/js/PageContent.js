class PageContent {
    constructor() {
        this.initPageContent();
    }

    initPageContent() {
        this.mainContentInside = document.querySelector(
            ".main-content__inside",
        );
        this.mainContentInside.innerHTML = `
        <h1 class="main-content__title">Основной заголовок</h1>
        <p>35 самарских библиотек организуют масштабный книжный праздник в честь Дня книгодарения.</p>
        <p dir="ltr"><span>С <strong>10 по 15 февраля</strong> библиотеки СМИБС присоединятся к общероссийской акции «Дарите книги с любовью» и устроят крупный городской праздник, посвящённый культуре, литературе, знаниям и благотворительности. Событие объединит жителей всех районов Самары, представителей власти, крупных предприятий и бизнеса, общественников.</span></p>
        <p dir="ltr">К участию в акции мы приглашаем всех желающих, в зависимости от возможностей. Кто-то может подарить библиотекам книги, которые примут в фонды или передадут в социальные учреждения, кто-то — оказать любую другую благотворительную помощь. Уже известно, что в Самаре неделю книгодарения поддержат ПАО «ОДК-Кузнецов», «Сбер», «Электрощит Самара», «Логика молока», Самарская областная писательская организация Союза писателей России, «Медиаагентство «Самара 450», представители законодательной и исполнительной властей, писатели.</p>
        <p dir="ltr">Акцию в России проводят с 2016 года. Её приурочили к Международному дню книгодарения, который отмечают 14 февраля. Она направлена на развитие культуры дарения и обмена книгами, повышение интереса к чтению и просвещению, поддержку социальных учреждений. </p>

        <div id="anchorDay_0" class="section__anchor">
            <h3>1. Центр приёма книжных дарений</h3>
            <p>Площадки по приему книг в дар для библиотек Самары:</p>
            <table style="width: 100%;" border="0" rules="rows" cellspacing="5" cellpadding="5">
                <tbody>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>10, 11 февраля&nbsp;</strong><br />с 11:00 до 19:00</p>
                        </td>
                        <td><strong>Библиотека № 31 </strong>(Труда, 10)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center;"><strong>12 февраля</strong><br />с 11:00 до 19:00</td>
                        <td><strong>Библиотека № 17</strong> (Стара-Загора, 106)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center;"><strong>12, 13, 15 февраля</strong><br />с 11:00 до 19:00</td>
                        <td>
                            <p><strong>Библиотека № 5 </strong>(Аэродромная, 9)<br /><strong>Библиотека № 6</strong> (Гродненская,
                                1)<br /><strong>Библиотека № 8</strong> (Николая Панова, 30)<br /><strong>Библиотека № 12</strong>
                                (XXII партсъезда, 56)<br /><strong>Библиотека № 16</strong> (Краснодонская,
                                13)<br /><strong>Библиотека № 19</strong> (Демократическая, 33)<br /><strong>Библиотека №
                                    23</strong> (Севастопольская, 53)<br /><strong>Библиотека № 30</strong> (посёлок Мехзавод,
                                квартал 15, дом 3)<br /><strong>Библиотека № 31</strong>&nbsp;(Труда, 10)</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center;"><strong>&nbsp;12, 15 февраля</strong><br />с 11:00 до 19:00</td>
                        <td><strong>Библиотека № 7</strong>&nbsp;(Владимирская, 34)<br /><strong>Библиотека № 22</strong> (Транзитная,
                            71)<br /><strong>Библиотека № 26</strong> (Симферопольская, 2)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">&nbsp;<strong>&nbsp;13 февраля</strong><br /><span>с 11:00 до 19:00</span></td>
                        <td>&nbsp;<strong>Библиотека № 24</strong>&nbsp;(Спутника, 10)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="anchorDay_1" class="section__anchor">
            <h3>2. Акция «Книга-секрет»</h3>
            <p><span>Читатели могут выбрать книгу себе в подарок, основываясь только на ее описании:</span>&nbsp;</p>
            <table style="width: 100%;" border="0" rules="rows" cellspacing="5" cellpadding="5">
                <tbody>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12, 13, 15 февраля&nbsp;</strong><br />с 11:00 до 19:00</p>
                        </td>
                        <td>
                            <p><strong>Библиотека № 8</strong> (Николая Панова, 30)</p>
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="anchorDay_2" class="section__anchor">
            <h3>3. Акция с бесплатной выдачей книг «Литприют»</h3>
            <p>Выставка, где можно познакомиться с книгами в красивой упаковке и описанием, ищущими нового хозяина, и сразу забрать
                понравившуюся с собой:</p>
            <table style="width: 100%;" border="0" rules="rows" cellspacing="5" cellpadding="5">
                <tbody>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12, 13, 15 февраля&nbsp;</strong><br />с 11:00 до 19:00</p>
                        </td>
                        <td>
                            <p><strong>Библиотека № 2</strong> (Ново-Садовая, 287)<br /><strong>Библиотека № 15</strong>
                                (Республиканская, 59)<br /><strong>Библиотека № 19</strong> (Демократическая,
                                33)<br /><strong>Библиотека № 31</strong> (Труда, 10)</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12 февраля&nbsp;</strong><br />с 11:00 до 19:00</p>
                        </td>
                        <td><strong>Библиотека № 29</strong> (посёлок Красная Глинка, квартал 2, дом 2)<br /><strong>Библиотека №
                                34</strong> (Молодёжный переулок, 21)<br /><br /></td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12 февраля&nbsp;</strong><br />с 13:00 до 16:00</p>
                        </td>
                        <td><strong>Библиотека № 17</strong> (Стара-Загора, 106)</td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>13 февраля&nbsp;</strong><br />с 11:00 до 19:00</p>
                        </td>
                        <td><strong>Библиотека № 23</strong> (Севастопольская, 53)</td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>15 февраля&nbsp;</strong><br />с 11:00 до 19:00</p>
                        </td>
                        <td><strong>Центральная городская библиотека <br />имени Н.К. Крупской</strong> (Маяковского, 19)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="anchorDay_3" class="section__anchor">
            <h3>4. Сетевая фотоакция «Мой портрет с любимой книгой»</h3>
            <p><span>Читателям предлагается сфотографироваться с любимой книгой, выложить в соцсети с хештегом
                    #ДаритекнигиСамара2026:</span>&nbsp;</p>
            <table style="width: 100%;" border="0" rules="rows" cellspacing="5" cellpadding="5">
                <tbody>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12, 13, 15 февраля&nbsp;</strong><br />с 11:00 до 19:00</p>
                        </td>
                        <td>
                            <p><strong>Библиотека № 2</strong> (Ново-Садовая, 287)<br /><strong>Библиотека № 15</strong>
                                (Республиканская, 59)<br /><strong>Библиотека № 16</strong> (Краснодонская,
                                13)<br /><strong>Библиотека № 19</strong>&nbsp;(Демократическая, 33)</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12 февраля&nbsp;</strong><br />с 11:00 до 19:00</p>
                        </td>
                        <td>
                            <p><strong>Библиотека № 1</strong> (проспект Карла-Маркса, 165)<br /><strong>Библиотека № 9</strong>
                                (Ленинградская, 73А)<br /><strong>Библиотека № 34</strong> (Молодёжный переулок, 21)</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>13 февраля&nbsp;</strong><br />с 11:00 до 19:00</p>
                        </td>
                        <td><strong>Библиотека № 10</strong> (Фестивальная, 4)</td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>15 февраля&nbsp;</strong><br />с 11:00 до 19:00</p>
                        </td>
                        <td><strong>Библиотека № 18</strong> (Фадеева, 67)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="anchorDay_4" class="section__anchor">
            <h3>5. Литературный своп</h3>
            <p><span>Пространство для обмена книгами и другими предметами культуры: открытками, постерами, виниловыми пластинками,
                    настольными играми:</span>&nbsp;</p>
            <table style="width: 100%;" border="0" rules="rows" cellspacing="5" cellpadding="5">
                <tbody>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12, 13, 15 февраля&nbsp;</strong><br />с 11:00 до 19:00</p>
                        </td>
                        <td>
                            <p><strong>Библиотека № 2</strong> (Ново-Садовая, 287)<strong><br /></strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>13 февраля&nbsp;</strong><br />с 12:00 до 18:00</p>
                        </td>
                        <td><strong>Библиотека № 5</strong> (Аэродромная, 9)</td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>14 февраля&nbsp;</strong><br />с 11:00 до 19:00</p>
                        </td>
                        <td><strong>Центральная городская библиотека имени Н.К. Крупской</strong>&nbsp;(Маяковского, 19)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="anchorDay_5" class="section__anchor">
            <h3>6. Мастер-классы:</h3>
            <table style="width: 100%;" border="0" rules="rows" cellspacing="5" cellpadding="5">
                <tbody>
                    <tr>
                        <td style="text-align: center;">
                            <p style="text-align: center;"><strong>12 февраля&nbsp;</strong><br />18:00<br /><strong>Центральная
                                    городская библиотека<br /></strong><strong>имени Н. К. Крупской</strong>&nbsp;</p>
                            <p style="text-align: center;">(Маяковского, 19)</p>
                        </td>
                        <td>

                        <h3>Творческая лаборатория «Книжный фроттаж»</h3>
                            <p>Участники освоят художественную технику фроттажа — перевод фактуры на бумагу. <br />Они научатся:</p>
                            <ul>
                                <li>Работать с объемными текстурами: «считывать» рельеф и переносить его на лист;</li>
                                <li>Доводить работу до практического результата: превращать арт-объект в стильную авторскую открытку
                                    или закладку для книг &nbsp;</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12 февраля&nbsp;</strong><br />10:30&nbsp;<br /><strong>Библиотека №
                                    28</strong> <br />(посёлок Управленческий,<br />Сергея Лазо, 46)</p>
                            <p style="text-align: center;">11:00<br /><strong>Библиотека № 4</strong> <br />(Флотская, 17)</p>
                            <p style="text-align: center;">12:00<br /><strong>Библиотека № 23<br /></strong> (Севастопольская,
                                53)<br /><strong>Библиотека № 16</strong> <br />(Краснодонская, 13)<br /><strong>Библиотека №
                                    31</strong> <br />(Труда, 10)</p>
                            <p style="text-align: center;">14:00<br /><strong>Библиотека № 5</strong>&nbsp;<br />(Аэродромная, 9)</p>
                            <p style="text-align: center;">17:00<br /><strong>Библиотека № 2</strong>&nbsp;<br />(Ново-Садовая, 287)</p>
                            <p style="text-align: center;"><span>&nbsp;</span><strong>15
                                    февраля&nbsp;</strong><br /><span>15:00<br /></span><strong>Библиотека № 28</strong>&nbsp;<br />(посёлок
                                Управленческий, <br />Сергея Лазо, 46)</p>
                        </td>
                        <td>

                        <h3>Мастер-класс «Книжная закладка для любимой книги»</h3>
                            <p><span> Участники освоят технику декорирования и украшения книжных закладок, используя различные
                                    материалы </span>&nbsp;</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12
                                    февраля&nbsp;</strong><br /><span>15:00<br /></span><strong>Библиотека №
                                    19</strong>&nbsp;<br />(Демократическая, 33)</p>
                            <p style="text-align: center;"><br />&nbsp;<strong>15 февраля&nbsp;<br /></strong>12:00<br /><strong>Библиотека №
                                    2</strong>&nbsp;<br />(Ново-Садовая, 287)</p>
                        </td>
                        <td>

                        <h3>Мастер-класс по реставрации книг</h3>
                            <p>Участники смогут научиться восстанавливать повреждённые страницы, переплёты и другие элементы книг,
                                давая им новую жизнь</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;">&nbsp;<strong>15 февраля&nbsp;<br /></strong>12:00</p>
                            <p style="text-align: center;"><span><strong>Библиотека № 25 <br /></strong>(проспект Карла Маркса,
                                    452)</span></p>
                        </td>
                        <td>

                        <h3>Творческая мастерская «Я нужна вам для порядка»</h3>
                            <p>Изготовление книжных закладок. Беседа о том, как нужно беречь книги&nbsp;</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;">&nbsp;<strong>15 февраля&nbsp;<br /></strong>15:30</p>
                            <p style="text-align: center;"><strong>Центральная городская библиотека <br />имени Н. К.
                                    Крупской</strong><span>&nbsp;</span><br /><span>(Маяковского, 19)</span></p>
                        </td>
                        <td>

                        <h3>Творческая мастерская «Антикварные секреты: искусство состаривания бумаги и творческое вдохновение в
                                скрапбукинге»</h3>
                            <p>Участники мероприятия научатся искусственным техникам старения бумаги с помощью чая. Каждый создаст
                                оригинальные страницы скрапбукинга, применяя акварель и декоративные элементы. Пока бумага сохнет,
                                гости отправятся на познавательную экскурсию по библиотеке, раскрывающая тайны истории искусства и
                                инженерии эпохи Возрождения</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="anchorDay_6" class="section__anchor">
            <h3>7. Творческие встречи, лекции:</h3>
            <table style="width: 100%;" border="0" rules="rows" cellspacing="5" cellpadding="5">
                <tbody>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>10 февраля&nbsp;</strong><br />15:00</p>
                            <p style="text-align: center;"><strong>Библиотека № 31</strong><br /><span>(Труда, 10)</span></p>
                        </td>
                        <td>
                            <p><strong>Творческая встреча с поэтессой Ириной Юдовой и иллюстратором Ириной
                                    Фёдоровой&nbsp;</strong><span><strong>«От Воробьёвых гор до Жигулей»</strong>&nbsp;</span><span>&nbsp;</span>&nbsp;
                            </p>
                            <p>В рамках вечера состоится знакомство с самарским автором Ириной Юдовой (Ирина Яшма): гости услышат
                                новые стихи и узнают о творческих планах поэтессы. Также участники мероприятия встретятся с
                                московским художником-иллюстратором Ириной Фёдоровой, которая расскажет о своём творчестве и
                                представит свои работы.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12 февраля&nbsp;</strong><br />13:00</p>
                            <p style="text-align: center;"><strong>Библиотека № 29</strong><br />(посёлок Красная Глинка,
                                <br />квартал 2, дом 2)</p>
                        </td>
                        <td>
                            <p><span><strong>Творческая встреча с поэтессой Викторией Каннуниковой</strong>&nbsp;</span><span>&nbsp;</span>&nbsp;
                            </p>
                            <p>Виктория Каннуникова&nbsp;—&nbsp;автор поэтических сборников «Два билета до Питера» (2023) и «Маршруты небесных
                                дорожек» (2025).</p>
                            <p>В программе: знакомство с творчеством автора, музыкальные интерпретации стихов Виктории Канунниковой.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>13 февраля&nbsp;</strong><br />18:00</p>
                            <p style="text-align: center;"><strong>Библиотека № 23<br /></strong><span>(Севастопольская, 53)</span>
                            </p>
                        </td>
                        <td>
                            <p><span><strong>Творческая встреча с самарским писателем Андреем Олехом</strong>&nbsp;</span><span>&nbsp;</span>&nbsp;
                            </p>
                            <p>Автор расскажет о своем творчестве, о новых проектах, ответит на вопросы гостей мероприятия</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="anchorDay_7" class="section__anchor">
            <h3>8. Квесты, квизы, игры, викторины:</h3>
            <table style="width: 100%;" border="0" rules="rows" cellspacing="5" cellpadding="5">
                <tbody>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12 февраля&nbsp;</strong><br />10:30</p>
                            <p style="text-align: center;"><strong>Библиотека № 4</strong>&nbsp;<br />(Флотская, 17)</p>
                        </td>
                        <td>
                            <p><span><strong>Квиз «Литературные герои: дружба и щедрость»</strong>&nbsp;</span><span>&nbsp;</span>&nbsp;</p>
                            <p>Интеллектуальные задания, на знания литературных произведений, связанных с темами дружбы и щедрости
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12 февраля&nbsp;</strong><br />11:00</p>
                            <p style="text-align: center;"><strong>Библиотека № 31</strong><br /><span>(Труда, 10)</span></p>
                        </td>
                        <td>
                            <p><span><strong>Литературная игра «Остров Дружбы и Доброты»</strong>&nbsp;</span></p>
                            <p>Литературная игра на знание литературных сюжетов о дружбе и щедрости по книгам:&nbsp;Николай Носов
                                «Приключения Незнайки и его друзей»,&nbsp;Александр Милн «Винни Пух и все-все-все», Эдуард Успенский
                                «Дядя Федор, пес и кот», «Крокодил Гена и его друзья»</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12 февраля&nbsp;</strong><br />11:00-19:00</p>
                            <p style="text-align: center;"><strong>Библиотека № 2</strong><span>&nbsp;<br />(Ново-Садовая, 287)</span>
                            </p>
                        </td>
                        <td>
                            <p><span><strong>Квиз «Идем дорогой дружбы»</strong>&nbsp;</span><span>&nbsp;</span>&nbsp;</p>
                            <p>Предлагается ответить на вопросы, связанные с литературными произведениями, где дружба является
                                основной темой. Вопросы могут касаться персонажей, сюжетов, цитат и других аспектов книг, помогающих
                                раскрыть тему дружбы</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12 февраля&nbsp;</strong><br /><span>11:00-19:00</span></p>
                            <p style="text-align: center;"><strong>Библиотека № 15</strong>&nbsp;<br />(Республиканская, 59)</p>
                        </td>
                        <td>
                            <p><span><strong>Викторина «Тайны книжных полок»</strong>&nbsp;</span><span>&nbsp;</span>&nbsp;</p>
                            <p>Викторина, посвященная книгам и проверке знаний участников: о книгах, литературных сюжетах,
                                писателях, библиотеках</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12 февраля&nbsp;</strong><br />12:30</p>
                            <p style="text-align: center;"><strong>Центральная городская библиотека <br />имени Н. К.
                                    Крупской</strong><span>&nbsp;</span><br /><span>(Маяковского, 19)</span></p>
                        </td>
                        <td>
                            <p><span><strong>Литературный квест «Тайны сердечных союзов»</strong>&nbsp;</span><span>&nbsp;</span>&nbsp;</p>
                            <p>Юные читатели узнают секреты верности и самоотверженности, исследуя темы искренней дружбы и
                                героической щедрости через интерактивные игры и творческие задания. Вместе с любимыми персонажами
                                русских и зарубежных авторов («Капитанская дочка» Пушкина, «Три мушкетёра» Дюма, «Хоббит» Толкина)
                                дети погрузятся в удивительный мир литературы</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="anchorDay_8" class="section__anchor">
            <h3>9. Специальные акции, марафоны:</h3>
            <table style="width: 100%;" border="0" rules="rows" cellspacing="5" cellpadding="5">
                <tbody>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12 февраля&nbsp;</strong><br />12:00</p>
                            <p style="text-align: center;"><strong>Библиотека № 21</strong> <br />(Георгия Димитрова, 7)</p>
                        </td>
                        <td>
                            <p><strong>Библиомарафон «Отдам книгу в хорошие руки!»</strong></p>
                            <p>Разговор о значении дня книгодарения, обмен мнениями о любимых книгах, литературная викторина</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12 февраля&nbsp;</strong><br />12:00</p>
                            <p style="text-align: center;"><strong>Библиотека № 33</strong> <br />(Ново-Молодёжный переулок, 21)</p>
                        </td>
                        <td>
                            <p><span><strong>Акция «Моя любимая книга»</strong>&nbsp;</span><span>&nbsp;</span>&nbsp;</p>
                            <p>Краткий экскурс в историю появления книги и рассказ о Дне дарения книг, сопровождаемые мастер-классом
                                по созданию мини-книжки своими руками.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>13 февраля&nbsp;</strong><br />11:00</p>
                            <p style="text-align: center;"><strong>Библиотека № 12</strong> <br />(XXII партсъезда, 56)</p>
                        </td>
                        <td>
                            <p><span><strong>Акция «Дари радость чтения»</strong>&nbsp;</span><span>&nbsp;</span>&nbsp;</p>
                            <p>В программе:</p>
                            <ul>
                                <li>Обзор книжной выставки «Подарки от читателей и партнеров библиотеки»</li>
                                <li>Книгообмен «Читатель-читателю»</li>
                                <li>Мастер-класс для юных читателей «Карандашики» по созданию книжных закладок</li>
                            </ul>
                            Работа специально оформленной площадки по приему книг в дар
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>13 февраля&nbsp;</strong><br /><span>12:00</span></p>
                            <p style="text-align: center;"><strong>Библиотека № 33</strong>&nbsp;<br />(Ново-Молодёжный переулок, 19)</p>
                        </td>
                        <td>
                            <p><strong>Акция «Прочитал сам – подари другому»</strong>&nbsp;</p>
                            <p>Знакомство с традициями книгодарения, чтение отрывков из любимых книг. Работа специально оформленной
                                площадки по приему книг в дар</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>13 февраля&nbsp;</strong><br />12:00-19:00</p>
                            <p style="text-align: center;"><strong>Библиотека № 10</strong><span>&nbsp;</span><br /><span>(Фестивальная,
                                    4</span><span>)</span></p>
                        </td>
                        <td>
                            <p><span><strong>Акция «Подари книгу – подари радость»</strong>&nbsp;</span><span>&nbsp;</span>&nbsp;</p>
                            <p>Громкие чтения произведений А. Барто, К. И. Чуковского. Работа специально оформленной площадки по
                                приему книг в дар.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>13 февраля&nbsp;</strong><br />13:00</p>
                            <p style="text-align: center;"><strong>Библиотека №
                                    11</strong><span>&nbsp;</span><br /><span>(<span>Аэродромная, 58</span></span><span>)</span></p>
                        </td>
                        <td>
                            <p><strong>Литературная программа «Книга – лучший подарок»</strong></p>
                            <p>Рассказ о традициях книгодарения, интересных фактах о знаменитых библиотеках мира, литературная
                                викторина и знакомство с книжной выставкой «Книга в подарок»</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>13 февраля&nbsp;</strong><br />15:00</p>
                            <p style="text-align: center;"><strong>Библиотека № 24</strong><span>&nbsp;</span><br /><span>(Спутника,
                                    10</span><span>)</span></p>
                        </td>
                        <td>
                            <p><span><strong>Акция «Книга – лучший подарок»</strong>&nbsp;</span><span>&nbsp;</span>&nbsp;</p>
                            <p>Викторина по произведениям классической литературы «Угадай героя книги». Работа специально
                                оформленной площадки по приему книг в дар</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>13 февраля&nbsp;</strong><br />17:30</p>
                            <p style="text-align: center;"><strong>Библиотека № 30</strong><span>&nbsp;</span><br /><span>(посёлок
                                    Мехзавод,<br /> квартал 15, дом 3</span><span>)</span></p>
                        </td>
                        <td>
                            <p><span><strong>Акция «Дарите книги!»</strong>&nbsp;</span><span>&nbsp;</span>&nbsp;</p>
                            <p>Все, кто дарит библиотеке книги, получат возможность принять участие в розыгрыше книг и памятных
                                призов. Работа специально оформленной площадки по приему книг в дар.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>15 февраля&nbsp;</strong><br />11:00-19:00</p>
                            <p style="text-align: center;"><strong>Библиотека № 14</strong><span>&nbsp;</span><br /><span>(Футболистов,
                                    3</span><span>)</span></p>
                        </td>
                        <td>
                            <p><strong>Тематический день «Книговорот»</strong></p>
                            <p>В течение всего дня в библиотеке пройдёт открытая акция по приёму книг от читателей, информационная
                                беседа о текущей работе библиотеки, анонсы предстоящих мероприятий и обзор самых популярных среди
                                читателей книг, а также литературная викторина — весёлая и познавательная игра с вопросами по
                                произведениям русской классики и современных авторов.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>15 февраля&nbsp;</strong><br /><span>11:00-19:00</span></p>
                            <p style="text-align: center;"><strong>Библиотека № 8</strong><span>&nbsp;</span><br /><span>(Николая Панова,
                                    30</span><span>)</span></p>
                        </td>
                        <td>
                            <p><strong>Интерактивная выставка «Эстафета добрых слов»</strong></p>
                            <p>Читатель выбирает одну из книг, предложенных на специальной полке. На специальном листке-закладке он
                                пишет своё доброе пожелание или небольшое послание для будущего читателя и вкладывает его в книгу.
                                Следующий человек, взявший эту книгу, найдёт внутри сюрприз — послание от незнакомца. Прочитав его,
                                он, в свою очередь, добавляет своё пожелание и возвращает книгу на полку или передаёт её дальше.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>15 февраля&nbsp;</strong><br />14:00</p>
                            <p style="text-align: center;"><strong>Библиотека № 6</strong><span>&nbsp;</span><br /><span>(Гродненская,
                                    1</span><span>)</span></p>
                        </td>
                        <td>
                            <p><strong>Акция «Радуем читателей новинками!</strong></p>
                            <p>Читателей ждет знакомство с подборкой новейших книжных поступлений. Библиотекарь проведет
                                рекомендательный обзор лучших книг, представленных на выставке, и поможет сориентироваться в
                                литературных тенденциях. По окончании презентации – мастер класс по реставрации книг «Неотложка для
                                обложки»</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>15 февраля&nbsp;</strong><br /><span>14:00</span></p>
                            <p style="text-align: center;"><strong>Библиотека № 28</strong><br /><span>(посёлок Управленческий,
                                    <br />Сергея Лазо, 46)</span></p>
                        </td>
                        <td>
                            <p><strong>Поэтический марафон «Стихи и поздравления в день книгодарения»</strong></p>
                            <p>&nbsp;В программе:</p>
                            <ul>
                                <li>Информация о традиции книгодарения в культурах разных стран, об интересных случаях в литературе
                                    и жизни, связанных с писателями (Евгений Водолазкин, Владимир Вишневский, Любовь Стрижак и др),
                                </li>
                                <li>подарками и книгами (Исландия в канун Рождества Йолабокафлод , Армения День дарения книг 19
                                    февраля, Ирландия Блумсдэй 16 июня, Международный день дарения книг и акция «Дарите книги с
                                    любовью» 14 февраля).</li>
                                <li>Блиц-турнир «Нетленная рукопись» - по стилю текста угадать автора отрывка</li>
                                <li>Марафон пожеланий «Любимой книге посвящаю». Стихи, эссе, поздравления.</li>
                            </ul>
                            <p>Участников ждут призы.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="anchorDay_9" class="section__anchor">
            <h3>10. Мероприятия:</h3>
            <table style="width: 100%;" border="0" rules="rows" cellspacing="5" cellpadding="5">
                <tbody>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>10 февраля&nbsp;</strong><br />16:00</p>
                            <p style="text-align: center;"><strong>Библиотека № 31</strong><br /><span>(Труда, 10)</span></p>
                        </td>
                        <td>
                            <p><span><strong>Экскурсия по книжному фонду библиотеки</strong>&nbsp;</span><span>&nbsp;</span>&nbsp;</p>
                            <p>Обзор книжных новинок отечественной и зарубежной литературы&nbsp;</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12 февраля&nbsp;</strong><br />12:00</p>
                            <p style="text-align: center;"><strong>Библиотека № 22</strong><br /><span>(Транзитная, 71)</span></p>
                        </td>
                        <td>
                            <p><strong>Познавательный час «Пусть каждая книга найдет хозяина!»</strong>&nbsp;</p>
                            <p>Рассказ о традициях книгодарения, интересных фактах о знаменитых библиотеках мира и обмен любимыми
                                книгами между участниками</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12 февраля&nbsp;</strong><br />14:00</p>
                            <p style="text-align: center;"><strong>Библиотека № 7</strong><span>&nbsp;<br />(Владимирская, 34)</span></p>
                        </td>
                        <td>
                            <p><span><strong>Тематическая беседа «Дар души бескорыстный — книга!»</strong>&nbsp;</span><span>&nbsp;</span>&nbsp;
                            </p>
                            <p>Знакомство с историей Дня книгодарения, обсуждение влияния книг на жизнь человека, обзор новинок и
                                разговор о форматах чтения (бумажные и электронные книги)</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>12 февраля&nbsp;</strong><br /><span>14:00</span></p>
                            <p style="text-align: center;"><strong>Библиотека № 15</strong>&nbsp;<br />(Республиканская, 59)</p>
                        </td>
                        <td>
                            <p><span><strong>Беседа «С народом был свой человек» к 195-летию со дня рождения русского писателя Н.С.
                                        Лескова</strong>&nbsp;</span><span>&nbsp;</span>&nbsp;</p>
                            <p>В ходе беседы участники познакомятся с биографией Николая Семёновича Лескова, узнают о его творческом
                                становлении. Особое внимание будет уделено тому, как Н.С. Лесков в своих произведениях раскрывал
                                характер и душу русского народа.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="text-align: center;"><strong>14 февраля&nbsp;</strong><br />14:00</p>
                            <p style="text-align: center;"><strong>Центральная городская библиотека<br />имени Н. К.
                                    Крупской</strong><span>&nbsp;</span><br /><span>(Республиканская, 59)</span></p>
                        </td>
                        <td>
                            <p><span><strong>Презентация 12, 13 номеров альманаха «Черные дыры букв» в рамках творческой лаборатории
                                        «Территория диалога» Самарского университета</strong>&nbsp;</span><span>&nbsp;</span>&nbsp;</p>
                            <p>Встречу откроет выступление редактора журнала Елены Богатыревой, которая расскажет о концепции
                                издания и представит новые имена в литературе и искусстве. Авторы альманаха прочтут свои
                                произведения, познакомив аудиторию с многообразием современного художественного творчества</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        `;
    }
}

export { PageContent };
