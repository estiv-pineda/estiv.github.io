document.addEventListener('DOMContentLoaded', function() {
    const testimonies = document.querySelectorAll('.testimony__body');
    const nextBtn = document.getElementById('next');
    const beforeBtn = document.getElementById('before');
    let currentTestimony = 0;

    function showTestimony(index) {
        testimonies.forEach((testimony, i) => {
            if (i === index) {
                testimony.classList.add('testimony__body--show');
            } else {
                testimony.classList.remove('testimony__body--show');
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        currentTestimony = (currentTestimony + 1) % testimonies.length;
        showTestimony(currentTestimony);
    });

    beforeBtn.addEventListener('click', () => {
        currentTestimony = (currentTestimony - 1 + testimonies.length) % testimonies.length;
        showTestimony(currentTestimony);
    });

    showTestimony(currentTestimony);
});

document.querySelectorAll('.questions__title').forEach(title => {
    title.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      answer.classList.toggle('questions__show');
      const arrow = this.querySelector('.questions__arrow');
      arrow.classList.toggle('questions__arrow--rotate');
    });
  });
  
  