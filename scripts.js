document.addEventListener('DOMContentLoaded', function(){
    const toggleBtn = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

    toggleBtn.addEventListener('click', function(){
        mobileMenu.classList.toggle('active');
    });

    const model = document.querySelector('#videomodel');
    const videoBtn = document.querySelector('.preview__video-button');
    const closeBtn = document.querySelector('.model__close-button');
    const vidoplayer = document.querySelector('#videoplayer');

    videoBtn.addEventListener('click', function(){
        model.style.display='block';
        vidoplayer.src='https://www.youtube.com/embed/nRBcfIqEglw?si=tfU3XexgZyXzQ4FJ';

        closeBtn.addEventListener('click', function(){
            model.style.display = 'none';
            vidoplayer.src='';
        });

        window.addEventListener('click', function(event){
            if(event.target==model){
            model.style.display = 'none';
            vidoplayer.src='';
            }
        })
    });
});

window.addEventListener('scroll', function(){
    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 0){
        navbar.classList.add('navbar--scroll');
    }else{
        navbar.classList.remove('navbar--scroll');
    }
})