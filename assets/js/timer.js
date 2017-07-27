let endDate = new Date(2017,6,31,7,0); // получаем дату истечения таймера
console.log(endDate);

let currentDate = new Date(); // получаем текущую дату

console.log(currentDate);

let seconds = Math.floor((endDate-currentDate) / 1000); // определяем количество секунд до истечения таймера

console.log(seconds);

let t1 = new Timer(150000);

t1.start();

function Timer(time){
    let timer;
    //console.log('all sec',time);

    let minutes = (time/60).toFixed(2); // определяем количество минут до истечения таймера

    let hours = (minutes/60).toFixed(2); // определяем количество часов до истечения таймера
    minutes =  ((hours - Math.floor(hours)) * 60).toFixed(); // подсчитываем кол-во оставшихся минут в текущем часе

    hours = Math.floor(hours);

    let seconds = (minutes - Math.floor(minutes)) * 60;// подсчитываем кол-во оставшихся секунд в текущей минуте

    let days = (hours/24).toFixed(2);  // дни

    hours = ((days - Math.floor(days)) * 60).toFixed();

    days = Math.floor(days);

    // minutes = Math.floor(minutes); // округляем до целого кол-во оставшихся минут в текущем часе

    setTimePage(days,hours,minutes,seconds); // выставляем начальные значения таймера


    this.start = function(){

        timer = setInterval(this.tick, 1000);
    };

    //  elem.innerHTML = time;

    this.tick = function(){

        if (seconds === 0) { // если секунду закончились то
            if (minutes === 0) { // если минуты закончились то
                if (hours === 0) { // если часы закончились то
                    if (days === 0) {
                        clearInterval(timer); // выводим сообщение об окончании отсчета
                    }
                    else {
                        days--;
                        hours = 23;
                        minutes = 59; // обновляем минуты
                        seconds = 59; // обновляем секунды
                    }
                }

                else {
                    hours--; // уменьшаем кол-во часов
                    minutes = 59; // обновляем минуты
                    seconds = 59; // обновляем секунды
                }
            }
            else {
                minutes--; // уменьшаем кол-во минут
                seconds = 59; // обновляем секунды
            }
        }
        else {
            seconds--; // уменьшаем кол-во секунд
        }

        setTimePage(days,hours,minutes,seconds); // обновляем значения таймера на странице

    };


    function setTimePage(d, h,m,s) { // функция выставления таймера на странице
        let element = document.getElementById("timer"); // находим элемент с id = timer
        let ho = h;
        // console.log(ho);
        let ch = '';


        if(ho >=5 && ho <= 20)
            ch = 'часов';
        else if ((ho % 10) >=2 && (ho % 10) <= 4)
            ch = 'часа';
        else if ((ho % 10) === 1)
            ch = 'час';
        else
            ch = 'часов';

        let mo = m;
        // console.log(mo);
        let mi = '';

        if(mo >=5 && mo <= 20)
            mi = 'минут';
        else if ((mo % 10) >=2 && (mo % 10) <= 4)
            mi = 'минуты';
        else if ((mo % 10) === 1)
            mi = 'минута';
        else
            mi = 'минут';


        // console.log(1 % 10);
        element.innerHTML = "days:" + d + "<br>" +ch + ":" + h + "<br>" + mi + ":" + m + ":" +s; // выставляем новые значения таймеру на странице
    }


}