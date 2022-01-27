// const stars = document.querySelectorAll(".stars .single-star");
// const star = document.querySelector('.stars');
// console.log(stars);

const starContainers = document.querySelectorAll(".stars");

starContainers.forEach((el) => {
  const starsUL = createElements(el, "ul", "main");
  const output = createElements(el, "div", "output");
  // looping to create each individual star
  for (let x = 0; x < 5; x++) {
    const star = createElements(starsUL, "li", "star");
    // star.innerHTML = "&#9734";
    star.starValue = x + 1; // storing the star value for each star rating
    console.log(star);
  }
  console.log(starsUL); // outputs the list of stars created

  const curStars = starsUL.querySelectorAll(".star");
  console.log(curStars);

  curStars.forEach((singleStar, Idx) => {
    singleStar.addEventListener("click", () => {
      console.log(`Rating of ${Math.abs(Idx - 5)} was selected`);
      el.classList.add("no-hover");
      curStars.forEach((otherStar, otherIndex) => {
      
        if (otherIndex >= Idx) {
          otherStar.classList.add("active");

        } else {
          otherStar.classList.remove("active");
        }
      });
    });
  });

  // starsUL.forEach((selectedStar, i) => {
  //   selectedStar.addEventListener("click", () => {
  //     console.log(`Index ${i} star was selected going from right to left`);
  //     star.classList.add("disabled");
  //     stars.forEach((otherStar, otherIndex) => {
  //       if (otherIndex >= i) {
  //         otherStar.classList.add("active");
  //       }
  //     });
  //   });
  // });
});

// function to create an element
function createElements(parent, elType, myClass) {
  const el = document.createElement(elType);
  el.classList.add(myClass);
  parent.append(el);
  return el;
}
