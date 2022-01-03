let drag = document.querySelector('img')

    drag.onmousedown = function(){
        drag.classList.add('active');
        }
    drag.onmouseup = function(){
        drag.classList.toggle('active');
        }        
    drag.ondragstart = function(){
        drag.classList.remove('active');
        }