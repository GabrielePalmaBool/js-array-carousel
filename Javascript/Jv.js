/*Creare un carosello */



//Svolgimento

const items = document.getElementsByClassName ('carousel-item');
const ind = document.getElementsByClassName ('ind');

let activeItem = 0;
console.log ('ok');
const next = document.querySelector(".carousel-control-next");

const prev = document.querySelector(".carousel-control-prev");


// condizione di partenza del bottone di sinistra, con display none
prev.classList.add('hidden');


// Se clicco la freccia di destra, scorrerrà in avanti
next.addEventListener('click',

            function () {

                if(activeItem <= items.length - 1){
                   
                    //Togliamo la classe active dall'elemento corrente
                    items[activeItem].classList.remove ('active');
                    ind[activeItem].classList.remove ('active');

                    //incremento l'indice
                    activeItem++;

                    //aggiungo la classe active al nuovo elemento
                    items[activeItem].classList.add('active');
                    ind[activeItem].classList.add ('active');

                    prev.classList.remove('hidden');

                    //siamo arrivati all'ultimo elemento
                    if (activeItem == items.length -1){
                    
                        next.classList.add('hidden');

                    }

                }


            }
);

// Se clicco la freccia di sinistra, scorrerrà indietro
prev.addEventListener('click',

            function () {

                if(activeItem <= items.length - 1){

                    //Togliamo la classe active dall'elemento corrente
                    items[activeItem].classList.remove ('active');
                    ind[activeItem].classList.remove ('active');

                    //decremento l'indice
                    activeItem--;

                    //aggiungo la classe active al nuovo elemento
                    items[activeItem].classList.add('active');
                    ind[activeItem].classList.add ('active');

                    if (activeItem === items.length -2){

                        //torniamo indietro al penultimo elemento
                         next.classList.remove ('hidden');
                        
                     }

                    //siamo arrivati all'ultimo elemento
                     else if (activeItem === 0) {
                    
                        
                        prev.classList.add('hidden');

                     }

                }

            }



);