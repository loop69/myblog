    let reset = document.querySelector('#B2');

        reset.onclick = function() {
            let youare = document.querySelector('.you-are');
            youare.innerHTML = "";
        };


function makeDiagnosis()
{
    let youare = document.querySelector('.you-are');
    let sum = "";

    for( let j=0; j<document.F.R1.length; j++ ) { if( document.F.R1[j].checked ) { sum += document.F.R1[j].value; } }
    for( let j=0; j<document.F.R2.length; j++ ) { if( document.F.R2[j].checked ) { sum += document.F.R2[j].value; } }
    for( let j=0; j<document.F.R3.length; j++ ) { if( document.F.R3[j].checked ) { sum += document.F.R3[j].value; } }
    for( let j=0; j<document.F.R4.length; j++ ) { if( document.F.R4[j].checked ) { sum += document.F.R4[j].value; } }

    let rez= "";

    switch (sum)
    {
        case "2368" : rez= "Изобретатель";
            break;
        case "2457" : rez = "Посредник";
            break;
        case "1458" : rez = "Энтузиаст";
            break;
        case "1367" : rez = "Аналитик";
            break;
        case "1468" : rez = "Наставник";
            break;

        case "1357" : rez = "Инспектор";
            break;
        case "2358" : rez = "Маршал";
            break;
        case "2467" : rez = "Лирик";
            break;
        case "1368" : rez = "Предпрениматель";
            break;
        case "1457" : rez = "Хранитель";
            break;
        case "1467" : rez = "Гуманист";
            break;

        case "2458" : rez = "Политик";
            break;
        case "2367" : rez = "Критик";
            break;
        case "2468" : rez = "Советчик";
            break;
        case "2357" : rez = "Мастер";
            break;
        case "1358" : rez = "Администратор";
            break;

        default : youare.innerHTML = "Будте внимательнее! Попытайтесь еще раз!";

            return;}


                youare.innerHTML = rez;

}

    let result = document.getElementById("B1");
        result.addEventListener("click", makeDiagnosis);



