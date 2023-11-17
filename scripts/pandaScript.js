(function(){

    let currentImage = 0;
    const myphotos = ['image1.jpg', 'image2.jpg','image3.jpg'];
    const container = document.getElementById('content');
    const nextBtn = document.getElementById('next');
    const preBtn = document.getElementById('previous');

    nextBtn.addEventListener('click',function(event){
        event.preventDefault();

        currentImage++;
        if(currentImage > myphotos.length - 1){
            currentImage = 0;
        }
        swapImage();


    });

    preBtn.addEventListener('click', function(event){
        event.preventDefault();

        currentImage--;
        if(currentImage < 0){
            currentImage = myphotos.length - 1;
        }

        swapImage();
    })

    function swapImage(){
        const newSlide = document.createElement('img');

        newSlide.src = `./images/${myphotos[currentImage]}`;

        newSlide.className = 'fadeinimg';

        container.appendChild(newSlide);

        if(container.children.length > 2 ){
            container.removeChild(container.children[0]);
        }

    }


})();






