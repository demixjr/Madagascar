document.getElementsByClassName('scroll-button')[0].addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

document.querySelectorAll('.star-icon').forEach(star => {
    star.addEventListener('click', function() {
        if (this.src.includes('gold')) {
            this.src = '/images/star.svg';
        } 
        else {
            document.querySelectorAll('.star-icon').forEach(s => s.src = '/images/star.svg');
            this.src = '/images/gold-star.svg';
        }
    });
});

