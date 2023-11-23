/*Creare un carosello */



//Svolgimento

const items = document.getElementsByClassName ('carousel-item');
const ind = document.getElementsByClassName ('carousel-indicators');

let activeItem = 0;



const next = document.querySelector(".carousel-control-next");

const prev = document.querySelector(".carousel-control-prev");


// condizione di partenza del bottone di sinistra, con display none
prev.classList.add('hidden');


// Se clicco la freccia di destra, scorrerrà in avanti
next.addEventListener('click',

            function () {

                if(activeItem < items.length - 1){
                   
                    //Togliamo la classe active dall'elemento corrente
                    items[activeItem].classList.remove ('active');
                    // ind[activeItem].classList.remove ('active');
                    console.log (ind);
                    //incremento l'indice
                    activeItem++;

                    //aggiungo la classe active al nuovo elemento
                    items[activeItem].classList.add('active');
                    //ind[activeItem].classList.add ('active');

                    prev.classList.remove('hidden');
                    
                    if (activeItem === items.length -1){

                        //siamo arrivati all'ultimo elemento
                         next.classList.add('hidden');

                    }

                    if (activeItem === 3){

                        //siamo arrivati all'ultimo elemento
                        prev.classList.add('thirdImg');

                    }

                }


            }
);

// Se clicco la freccia di sinistra, scorrerrà in dietro
prev.addEventListener('click',

            function () {

                if(activeItem <= items.length - 1){

                    //Togliamo la classe active dall'elemento corrente
                    items[activeItem].classList.remove ('active');

                    //decremento l'indice
                    activeItem--;

                    //aggiungo la classe active al nuovo elemento
                    items[activeItem].classList.add('active');

                    console.log (activeItem);

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