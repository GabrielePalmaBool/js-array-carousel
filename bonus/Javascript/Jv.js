/*Creare un carosello */



//Svolgimento

const items = document.getElementsByClassName ('carousel-item');
const ind = document.getElementsByClassName ('ind');

let activeItem = 0;

const next = document.querySelector(".carousel-control-next");

const prev = document.querySelector(".carousel-control-prev");



// Se clicco la freccia di destra, scorrerrà in avanti
next.addEventListener('click',

            function () {

                if(activeItem <= items.length - 1){
                   
                    //Togliamo la classe active dall'elemento corrente
                    items[activeItem].classList.remove ('active');
                    ind[activeItem].classList.remove ('active');

                    //incremento l'indice
                    activeItem++;
                    
                    //siamo arrivati all'ultimo elemento
                    if (activeItem == items.length ){

                        activeItem = 0;
                    }

                    if (activeItem === 3){

                        //siamo arrivati all'ultimo elemento
                        prev.classList.add('thirdImg');

                    }

                    //aggiungo la classe active al nuovo elemento
                    items[activeItem].classList.add('active');
                    ind[activeItem].classList.add ('active');

                }


            }
);

// Se clicco la freccia di sinistra, scorrerrà in dietro
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

                     else if (activeItem === 0) {
                    
                        //siamo arrivati all'ultimo elemento
                        prev.classList.add('hidden');

                     }

                }

            }



);