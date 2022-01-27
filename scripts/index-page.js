// const stars = document.querySelectorAll(".stars .single-star");
// const star = document.querySelector('.stars');
// console.log(stars);

const starContainers = document.querySelectorAll(".stars");

// function to generate uuid for each product
function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

starContainers.forEach((el) => {
  const starsUL = createElements(el, "ul", "main");
  const output = createElements(el, "div", "output");

  // obtaining product info
  const product = el.querySelector('.product');
  const productName = product.innerHTML;
  const productId = uuidv4();
  console.log(product);
  console.log(productName);
  console.log(productId);
 

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

      const starValue = Math.abs(Idx - 5);
      console.log(starValue);
      console.log(productId);
      console.log(productName);

      // To send request to web server
      axios.post( URL, {
        productId: productId,
        productName: productName,
        starRating: starValue
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });

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
