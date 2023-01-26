ymaps.ready(init);


function init(){
    var myMap = new ymaps.Map("map", {
    center: [55.831054, 37.629914],
    zoom: 15
    }, {
        // Ограничим область карты.
        restrictMapArea: [[55.843203, 37.608155], [55.821900, 37.654070]]
    });

    myMap.controls.remove('zoomControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('trafficControl');


    var myButton = new ymaps.control.Button({
        data: {
            content: '<b">Очистить карту</b>'
        },
        options: {
            selectOnClick: false,
            maxWidth: 150
    }});


    myButton.events.add('press', function () {
          myMap.geoObjects.removeAll();
        });

    myMap.controls.add(myButton, {
      float: "left"
    });


let dict = new Map()

s = `55.828597, 37.633898 - Павильон №1 Центральный
    55.828658, 37.631372 - Павильон №2 Роботостанция
    55.833215, 37.639273 - Павильон №3
    55.828571, 37.630271 - Павильон №4 Киргизия
    55.828795, 37.629741 - Павильон №5 Музей городского хозяйства Москвы
    55.829248, 37.629515 - Павильон №6 Абхазия
    55.827618, 37.626831 - Павильон №7 СоюзМультПарк
    55.828901, 37.627329 - Павильон №8 Музей Шоколада
    55.829058, 37.628353 - Павильон №9 Театр Сказок
    55.829610, 37.629885 - Павильон №10 Молдова
    55.830189, 37.629172 - Павильон №11 Казахстан
    55.830464, 37.628103 - Павильон №12 Выстовочный центр профсоюзов
    55.830965, 37.628057 - Павильон №13 Музей востока
    55.831258, 37.627594 - Павильон №14 Азербайджан
    55.831623, 37.626751 - Павильон №15 Олимпийский музей России
    55.830588, 37.622842 - Павильон №16
    55.83139002596469, 37.62394802243661 - Павильон №17
    55.832001, 37.625600 - Павильон №18 Республика Беларусь
    55.82978948099202, 37.63413911690507 - Павильон №19 Атом
    55.832930, 37.621981 - Павильон №20 Центральный дом автоспорта
    55.832339, 37.620527 - Павильон №21 Терракотовая армия
    55.832246, 37.616524 - Павильон №22 Скалолазный центр BigWall
    55.832679310391214, 37.618330181518665 - Павильон №23 Москвариум
    55.833646, 37.619598 - Павильон №25 Музей нефти
    55.834311, 37.621792 - Павильон №26 Музей транспорта москвы
    55.834543, 37.612878 - Павильон №27 Физкультура и спорт
    55.836402, 37.616403 - Павильон №28 Пчеловодство
    55.835757, 37.618333 - Павильон №29 Цветоводство
    55.835067, 37.618713 - Павильон №30 Биотехнологии
    55.834917, 37.619811 - Павильон №31
    55.835363, 37.622372 - Павильон №33
    55.835205, 37.621512 - Павильон №34 Космонавтика и авиация
    55.838386, 37.614374 - Павильон №35 Главтабак
    55.839526, 37.616807 - Павильон №36 Музей кино
    55.839898, 37.619466 - Павильон №37 Птицеводство
    55.839619, 37.621633 - Павильон №38 БизнесТехноград
    50.37771167514502, 30.47954489822687 - Павильон №39
    55.838105, 37.620409 - Павильон №40 Школа пекарей
    55.838100, 37.622533 - Павильон №41 Центр национальных конных традиций
    55.838254, 37.623297 - Павильон №42 Центр национальных конных традиций
    55.838000, 37.624311 - Павильон №43 Центр национальных конных традиций
    55.840654, 37.625377 - Павильон №44 Кролиководство
    55.83093040264688, 37.62987681159166 - Павильон №45 Выставка достижений народного хозяйства
    55.838284, 37.628112 - Павильон №46 Экономика и организация АПК
    55.837388, 37.624123 - Павильон №47 Дом ремёсел
    55.837182, 37.622574 - Павильон №48 Главпиво
    55.837754, 37.620654 - Павильон №49
    55.83306645203748, 37.62195794983833 - Павильон №50 Молочная промышленность
    55.837159, 37.619332 - Павильон №51 Мясная промышленность
    55.836851891413986, 37.62075514807103 - Павильон №53-54 Музей гаража особого назначения
    55.835205, 37.623317 - Павильон №55 Электрификация
    55.83411663014175, 37.62599510758938 - Павильон №57
    55.832771, 37.627083 - Павильон №58 Центр словянской письменности слово
    55.833257026062455, 37.628186121712 - Павильон №59 Зерно
    55.833977, 37.628159 - Павильон №60 Потребительская кооперация
    55.834503, 37.628535 - Павильон №61 Центросоюз
    55.835234, 37.627515 - Павильон №62 Международный центр балета
    55.8350491103692, 37.632305567484664 - Павильон №63 Техноград
    55.832684, 37.629473 - Павильон №64 Выстовочный комплекс РЖД
    55.831706, 37.632138 - Павильон №66 Узбекистан
    55.831079, 37.632509 - Павильон №67 Карелия
    55.830888, 37.633546 - Павильон №68 Армения
    55.82940496009966, 37.61976473309128 - Павильон №70 Москва
    55.82989956733449, 37.63440582907952 - Павильон №71 Атомная энергия
    55.830555, 37.638251 - Павильон №75 Экспоцентр
    55.829709966409354, 37.62783125792065 - Туалет №1
    55.82665160082256, 37.63524522317869 - Туалет №2
    55.829304028716145, 37.647840525634265 - Туалет №3
    55.822861838178376, 37.64085258897652 - Туалет №4
    55.829204842196624, 37.61791970866271 - Туалет №5
    55.82799989321791, 37.61412175844542 - Туалет №6
    55.82919997434833, 37.61792578071099 - Туалет №7
    55.83470822326624, 37.63040693738097 - Туалет №8
    55.83694074473459, 37.61620836855515 - Туалет №9
    55.83579078908474, 37.626509109573256 - Дворец бракосочетания
    55.83608934499214, 37.62600783925882 - Магазин №1
    55.835728234217534, 37.6251217554401 - Гастрономъ №1
    55.83595116558352, 37.623511194199565 - Конь
    55.836451231670615, 37.62518757482775 - Кафе Карамельная мануфактура
    55.837379048094064, 37.624128102276394 - Магазин №2
    55.83729201615189, 37.62639416656247 - Магазин №3
    55.83964040808177, 37.621326076356 - Бизнес техноград
    55.838399809355714, 37.61634054849824 - Фонтан Золотой колос
    55.838083953392776, 37.61496788987828 - Пицца Grace
    55.8357283684088, 37.61431679029217 - Зеленый лабиринт
    55.836165426818525, 37.61479843528937 - Ресторан Все лень
    55.835169392236025, 37.61419737117371 - Sky town
    55.83457207386189, 37.61379597486609 - ФастФуд ПянСе
    55.834875239304935, 37.613465804425914 - Спорт площадка
    55.83445219839497, 37.6166523116384 - Памятник И.В.Мичурину
    55.834758433367085, 37.620492273243975 - Мороженое Баскин Роббинс
    55.83631193525511, 37.627973582290956 - Shevol de Rustic ресторан
    55.83639477719996, 37.62964728070909 - Пельменя61 ресторан
    55.83400466382857, 37.629539042258095 - Кафе Ласточка
    55.834380183174915, 37.63001192107507 - Макет Москвы
    55.83430775559949, 37.63218543405309 - Учебный центр STANFOOD
    55.83499155179174, 37.63074780507736 - Таверна Голландский Дом
    55.83839595370603, 37.63316278028895 - Столовая Турист
    55.839344904871744, 37.62821807663378 - Рыбацкая деревня ресторан
    55.837924694351166, 37.62563577052721 - Свадьба соек ресторан
    55.8352717057895, 37.62580473907716 - Ресторан Московское небо
    55.831764541823304, 37.62296118020722 - Кафе Ферма
    55.83125927234232, 37.62543626724648 - Кафе Лагманная
    55.830722443521445, 37.62642077278753 - Ресторан Владикавказ
    55.828918644411274, 37.63161571218623 - Фастфуд Жареные каштаны
    55.82781685599752, 37.63131916450009 - Кафе Вареничная №1
    55.8281174533802, 37.62762937632024 - Ресторан АндерСон
    55.82859580347794, 37.622554235597825 - Кафе Mamma Italia
    55.82862798698594, 37.61436119701989 - Кафе ЛАВ
    55.82888585749681, 37.617176830446354 - Кафе Те самые пончики
    55.829205417971394, 37.617313270452826 - Кафе Русский чай
    55.829887316541246, 37.617300390088566 - Эспрессо Бар Kaldi's Coffe
    55.83037659909951, 37.61764068774049 - Кафе На мангале(Шашлычок)
    55.83142350098031, 37.61903861283423 - Ресторан Оттепель
    55.83061593622721, 37.61470932541989 - Чебуречная история
    55.83898392170949, 37.61305259153294 - Ресторан Doner One
    55.83840040122221, 37.6188201132614 - Кафе Счастье не за горами
    55.83104312909171, 37.634638368908305 - Остерия Трио
    55.8319491715105, 37.630722091615596 - Фуд Корт(РумПыш, Pho people, Gyros for Heroes, Теремок)
    55.83257765996064, 37.63155794542452 - Ресторан Домик в саду ВДНХ
    55.82863046365751, 37.6382137598611 - Кафе Мичурин
    55.82762743357889, 37.64249582743196 - Pizza Hut пиццерия
    55.82681950561108, 37.63533909556302 - Ресторан Дагестанская лавка
    55.8260886909113, 37.63703087005775 - Кофейня Vigor Maker
    55.823968860797464, 37.63182434757015 - Кафе Шашлычный Двор
    55.826724, 37.626549 - Солнце Москвы`

    arr = s.split('\n');
    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i].split(' - ');
        let coords = [parseFloat(elem[0].split(', ')[0]), parseFloat(elem[0].split(', ')[1])]
        dict.set(elem[1], coords);
    }


    let isopened = false;
    document.getElementById('search').onclick = function () {
        if (!isopened){
            let inp = document.createElement('input');
            inp.className = "searchinput";
            inp.id = "searchinput";
            inp.placeholder = "Введите название объекта";
            search.after(inp);
            var suggestView2 = new ymaps.SuggestView('searchinput', {provider: provider, results: 10});

            let inpbtn = document.createElement('button');
            inpbtn.className = "searchbutton";
            inpbtn.id = "searchbutton";
            inpbtn.innerHTML = "Найти";
            inpbtn.innerHTML = "<a href='#map' class='maplink'>Найти</a>";
            searchinput.after(inpbtn);

            isopened = true;
            document.getElementById('searchbutton').onclick = function () {
                next = document.getElementById("searchinput").value;
                document.getElementById("searchinput").value = "";
                // myMap.removeAllOverlays();
                console.log(next);
                console.log([dict.get(next)[0], dict.get(next)[1]]);
                myMap.geoObjects.add(new ymaps.Placemark([dict.get(next)[0], dict.get(next)[1]], {
                balloonContent: '<strong>' + next + '</strong>'
                }))
                myMap.setCenter([dict.get(next)[0], dict.get(next)[1]], 18, {
                    checkZoomRange: true
                });
            }
        } else {
        menupoints.removeChild(searchinput);
        menupoints.removeChild(searchbutton);
        isopened = false;
        }



    }

    document.getElementById('placesofinterest').onclick = function () {
        for (var [key, value] of dict){
             myMap.geoObjects.add(new ymaps.Placemark([value[0], value[1]], {
                balloonContent: '<strong>' + key + '</strong>'
            }, {
                preset: 'islands#dotIcon',
                iconColor: '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
            }))
        }
    }





    let clickcount = 0;

    document.getElementById('newRoute').onclick = function () {
        if (clickcount < 1) {
        let ul = document.createElement('ul');
        ul.className = "newpoint";
        ul.id = "newpoint";
        ul.innerHTML = `
                <input class="pnt1" maxlength="30" type="text" placeholder="Введите пункт 1" name="pnt1" id="pnt1">
                <input class="pnt2" maxlength="30" type="text" size="60" placeholder="Введите пункт 2" name="pnt2" id="pnt2">
                
                <img class="addpointbtn" id="addpointbtn" src="/static/images/add.png">
                <img class="deletepointbtn" id="deletepointbtn" src="/static/images/delete.png">
                <a href="#map" id="addroute"><button class="addroutebtn" name="addroutebtn" id="addroutebtn">Построить маршрут</button></a>
                `;

        newRoute.after(ul);
        var suggestpnt1 = new ymaps.SuggestView('pnt1', {provider: provider, results: 10});
        var suggestpnt2 = new ymaps.SuggestView('pnt2', {provider: provider, results: 10});
        clickcount = clickcount + 1;

        let pointcounts = 2;

    document.getElementById('addpointbtn').onclick = function () {
        if (pointcounts < 6) {
            pointcounts = pointcounts + 1;
            let ul = document.createElement('input');
            ul.className = "pnt2";
            ul.placeholder = "Введите пункт " + String(pointcounts);
            ul.type="text";
            ul.maxlength = "30";
            ul.id = "pnt" + String(pointcounts);
            console.log(pointcounts);
            document.getElementById("pnt" + String(pointcounts - 1)).after(ul);
            new ymaps.SuggestView("pnt" + String(pointcounts), {provider: provider, results: 10});
            }
        }

        document.getElementById('deletepointbtn').onclick = function () {
        if (pointcounts > 2) {
            document.getElementById("newpoint").removeChild(document.getElementById("pnt" + String(pointcounts)));
            pointcounts = pointcounts - 1;
            }
        }



        document.getElementById('addroutebtn').onclick = function () {

            coordsarr = [];
            for (let i = 1; i <= pointcounts; i++){
                next = document.getElementById("pnt" + String(i)).value;
                coordsarr.push([dict.get(next)[0], dict.get(next)[1]])
                console.log(dict.get(next)[0], dict.get(next)[1])
            }
            let pnt1 = document.getElementById('pnt1').value;
            let pnt2 = document.getElementById('pnt2').value;
            console.log(dict.get(pnt1)[0], dict.get(pnt1)[1])
        // Задаём точки мультимаршрута.
        var pointA = [dict.get(pnt1)[0], dict.get(pnt1)[1]],
            pointB = [dict.get(pnt2)[0], dict.get(pnt2)[1]],

            /**
             * Создаем мультимаршрут.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRoute.xml
             */
            multiRoute = new ymaps.multiRouter.MultiRoute({
                referencePoints: coordsarr,
                params: {
                    //Тип маршрутизации - пешеходная маршрутизация.
                    routingMode: 'pedestrian'
                }
            }, {
                // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                boundsAutoApply: true
            });


            myMap.geoObjects.add(multiRoute);
            // var activeRoute = multiRoute.getActiveRoute();
            // console.log(activeRoute.properties.get("distance").text)
            // console.log(activeRoute.properties.get("duration").text)
    }
        } else {
            menupoints.removeChild(newpoint);
            clickcount = 0;
        }

        }

    let isOpenedTimeRoute = false;
    document.getElementById('timeRoute').onclick = function () {
        if (!isOpenedTimeRoute) {

            let par = document.createElement('p');
            par.className = "discText";
            par.id = "discText";
            par.innerHTML = "Введите стартовый пункт маршрута и максимально время маршрута, которое Вам подходит:"
            timeRoute.after(par);

            let inp = document.createElement('input');
            inp.className = "startpointinput";
            inp.id = "startpointinput";
            inp.placeholder = "Введите название объекта";
            par.after(inp);
            var suggestView2 = new ymaps.SuggestView('startpointinput', {provider: provider, results: 10});


            let tm = document.createElement('input');
            tm.className = "tm";
            tm.id = "tm";
            tm.placeholder = "Время";
            tm.type = "time";
            inp.after(tm);


            let timeRouteBtn = document.createElement('button');
            timeRouteBtn.className = "timeRouteBtn";
            timeRouteBtn.id = "timeRouteBtn";
            timeRouteBtn.innerHTML = "<a class='maplink'>Подобрать</a>";
            tm.after(timeRouteBtn);


            isOpenedTimeRoute = true;


            document.getElementById('timeRouteBtn').onclick = async function () {
                let routetime = document.getElementById("tm").value.split(":")
                routetime = parseInt(routetime[0]) * 60 + parseInt(routetime[1]);
                console.log(routetime);


                let viewbox = document.createElement('div');
                viewbox.className = "viewbox";
                viewbox.id = "viewbox";
                timeRouteBtn.after(viewbox);

                async function getnewroute(point1, point2) {
                    var pointA = point1,
                            pointB = [point2[0], point2[1]],
                            multiRoute = await new ymaps.multiRouter.MultiRoute({
                                referencePoints: [
                                    pointA,
                                    pointB
                                ],
                                params: {
                                    routingMode: 'pedestrian'
                                }
                            }, {
                                boundsAutoApply: true
                            });
                    return multiRoute;
                }

                async function addnewroute(multiRoute, key, k) {
                    multiRoute.model.events.add('requestsuccess', await function() {
                            var activeRoute = multiRoute.getActiveRoute();
                            if (parseInt(activeRoute.properties.get("duration").text) <= routetime) {
                                viewbox.innerHTML += "<a href='#map'><div class='nextroute' id='nextroute" +
                                    String(k) + "'>" + "\n" + "<p class='viewboxtext'>" +
                                    'Старт: ' + String(document.getElementById("startpointinput").value) +
                                    "</p>" + "\n" + "<p class='viewboxtext'>" + 'Финиш: ' + key +"</p>" + "\n" +
                                    "<p class='viewboxtext'>" + String(activeRoute.properties.get("duration").text) +
                                    "</p>" + "\n" + "</div></a>";
                                console.log("Длина: " + activeRoute.properties.get("distance").text);
                                console.log("Время прохождения: " + activeRoute.properties.get("duration").text);
                            }
                        });
                }
                let k = 0;
                for (var [key, value] of dict) {
                    k += 1;
                    let strtpnt = [dict.get(document.getElementById("startpointinput").value)[0],
                                    dict.get(document.getElementById("startpointinput").value)[1]]
                    if (key !== document.getElementById("startpointinput").value) {
                        console.log(document.getElementById("startpointinput").value);
                        console.log(key);
                        let multiRoute = await getnewroute(strtpnt, value)
                        await addnewroute(multiRoute, key, k)
                    }
                }
                // console.log(document.getElementsByClassName('nextroute'))
                // document.getElementsByClassName('nextroute').onclick = function () {
                //     console.log('Ну типа нажали меня')
                //
                // }
                viewbox.onclick = function(event) {
                    let target;
                    if (event.currentTarget === "DIV"){
                        target = event.target.innerHTML;
                    } else {
                        console.log(event.target.parentNode);
                        target = event.target.parentNode.innerHTML;
                    }
                    // let target = event.target.innerHTML;
                    let start = target.split("\n")[1];
                    let finish = target.split("\n")[2];
                    start = start.slice(start.indexOf(":") + 2, start.indexOf("</"));
                    finish = finish.slice(finish.indexOf(":") + 2, finish.indexOf("</"));
                    console.log(start);
                    console.log(finish);
                    console.log(dict.get(start));
                    console.log(dict.get(finish));
                    var pointA = dict.get(start),
            pointB = dict.get(finish),
            multiRoute = new ymaps.multiRouter.MultiRoute({
                referencePoints: [
                    pointA,
                    pointB
                ],
                params: {
                    routingMode: 'pedestrian'
                }
            }, {
                boundsAutoApply: true
            });
        myMap.geoObjects.add(multiRoute);


                }

            }
        } else {
            isOpenedTimeRoute = false;
            menupoints.removeChild(discText);
            menupoints.removeChild(startpointinput);
            menupoints.removeChild(tm);
            menupoints.removeChild(timeRouteBtn);
            menupoints.removeChild(viewbox);
        }
    }


    document.getElementById('routeone').onclick = function () {
        // Задаём точки мультимаршрута.
        var pointA = [55.824231, 37.638901],
            pointB = [55.826271, 37.637578],
            multiRoute = new ymaps.multiRouter.MultiRoute({
                referencePoints: [
                    pointA,
                    pointB
                ],
                params: {
                    routingMode: 'pedestrian'
                }
            }, {
                boundsAutoApply: true
            });
        myMap.geoObjects.add(multiRoute);
    }
    document.getElementById('routetwo').onclick = function () {
        // Задаём точки мультимаршрута.
        var pointA = [55.826271, 37.637578],
            pointB = [55.830473, 37.630806],
            multiRoute = new ymaps.multiRouter.MultiRoute({
                referencePoints: [
                    pointA,
                    pointB
                ],
                params: {
                    routingMode: 'pedestrian'
                }
            }, {
                boundsAutoApply: true
            });
        myMap.geoObjects.add(multiRoute);
    }
    document.getElementById('routethree').onclick = function () {
        // Задаём точки мультимаршрута.
        var pointA = [55.826271, 37.637578],
            pointB = [55.835044, 37.621723],
            multiRoute = new ymaps.multiRouter.MultiRoute({
                referencePoints: [
                    pointA,
                    pointB
                ],
                params: {
                    routingMode: 'pedestrian'
                }
            }, {
                boundsAutoApply: true
            });
        myMap.geoObjects.add(multiRoute);
    }
}

$(function() {
  $(".menupoints").delegate("a", "click", function () {

          $.getJSON($SCRIPT_ROOT + '/add_to_history', {
              pnt1: $('input[name="pnt1"]').val(),
              pnt2: $('input[name="pnt2"]').val()
          });
      });
});



let a = navigator.userAgent;