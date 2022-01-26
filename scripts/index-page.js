const stars = document.querySelectorAll(".stars .single-star");
console.log(stars);

stars.forEach((star, i) => {
    star.addEventListener('click', () => {
        console.log(`Index ${i} star was selected from right to left`);
    })
})