const stars = document.querySelectorAll(".stars .single-star");
const star = document.querySelector('.stars');
console.log(stars);

stars.forEach((selectedStar, i) => {
    selectedStar.addEventListener('click', () => {
        console.log(`Index ${i} star was selected going from right to left`);
        star.classList.add('disabled');
        stars.forEach((otherStar, otherIndex) => {
            if (otherIndex >= i ) {
            otherStar.classList.add("active");
            }
        })
    })
})