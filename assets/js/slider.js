window.onload = function(){

               let btnNext = document.querySelector('.button_forward');
           let btnBack = document.querySelector('.button_back');
           let images = document.querySelectorAll('.slider img');
           //let images = document.querySelectorAll('.slider img');
               let canSlide = true;

               let i = 0;

               function next(){

                           if(!canSlide) return;
                       canSlide = false;

                           images[i].style.opacity = fade(images[i], 2000, 40);
                       i++;

                           if(i === images.length)
                               i = 0;

                           images[i].style.opacity = uf(images[i], 2000, 40);
                       setTimeout(function() {canSlide = true}, 980);

                       }

           function prev(){

                       if(!canSlide) return;
                   canSlide = false;

                       images[i].style.opacity = fade(images[i], 2000, 40);
                   i--;

                       if(i < 0)
                           i = images.length -1;

                       images[i].style.opacity = uf(images[i], 2000, 40);

                       setTimeout(function() {canSlide = true}, 980);
               }

           btnNext.onclick = next;
           btnBack.onclick = prev;
          // setInterval(next, 3000);
           }

   function fade(elem, t, f){
           // кадров в секунду (по умолчанию 50)
               let fps = f || 50;
           // время работы анимации (по умолчанию 500мс)
               let time = t || 500;
           // сколько всего покажем кадров
               let steps = time / fps;
           // текущее значение opacity - изначально 0
               let op = 1;
           // изменение прозрачности за 1 кадр
               let d0 = op / steps;

               // устанавливаем интервал (1000 / fps)
                   // например, 50fps -> 1000 / 50 = 20мс
                       let timer = setInterval(function(){
                   // уменьшаем текущее значение opacity
                       op -= d0;
                   // устанавливаем opacity элементу DOM
                       elem.style.opacity = op;
                   // уменьшаем количество оставшихся шагов анимации
                       steps--;

                       // если анимация окончена
                           if(steps === 0){
                           // убираем интервал выполнения
                               clearInterval(timer);
                           // и убираем элемент из потока документа
                              // elem.style.display = 'none';
                               }
               }, (1000 / fps));

               /*this.canSlide = true;
+    console.log(this.canSlide);*/
               }

   function uf(elem, t, f){
           // кадров в секунду (по умолчанию 50)
               let fps = f || 50;
           // время работы анимации (по умолчанию 500мс)
               let time = t || 500;
           // сколько всего покажем кадров
               let steps = time / fps;
           // текущее значение opacity - изначально 0
               let op = 0;
           // изменение прозрачности за 1 кадр
               let d0 = 1 / steps;

               // устанавливаем интервал (1000 / fps)
                   // например, 50fps -> 1000 / 50 = 20мс
                       let timer = setInterval(function(){
                   // увеличиваем текущее значение opacity
                       op += d0;
                   // устанавливаем opacity элементу DOM
                       elem.style.opacity = op;
                   // уменьшаем количество оставшихся шагов анимации
                       steps--;

                       // если анимация окончена
                           if(steps === 1){
                           // убираем интервал выполнения
                               clearInterval(timer);
                           // и убираем элемент из потока документа
                               //elem.style.display = 'none';
                               }
               }, (1000 / fps));
       }