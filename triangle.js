  

        function Triangle(h, w, color) {
            this.htmlCode = `<div style="border: ${h}px solid transparent; \
                                         border-bottom: ${w}px solid ${color};\
                                         width: 0; \
                                         height: 100px;\
                                             "></div>`;

            this.show = function () {
                document.write(this.htmlCode);
            }
        }

        let triangle = new Triangle(100, 100, "red");
        triangle.show();

    
