const starContainers = document.querySelectorAll(".stars");

// function to generate uuid for each product
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// creating content for each star ranking system
starContainers.forEach((el) => {
  const starsUL = createElements(el, "ul", "main");

  // obtaining product info
  const product = el.querySelector(".product");
  const productName = product.innerHTML;
  const productId = uuidv4();
  console.log(product);
  console.log(productName);
  console.log(productId);

  // looping to create each individual star
  for (let x = 0; x < 5; x++) {
    const star = createElements(starsUL, "li", "star");
    star.starValue = x + 1; // storing the star value for each star rating
    console.log(star);
  }
  console.log(starsUL); // outputs the list of stars created

  const curStars = starsUL.querySelectorAll(".star");
  console.log(curStars);

  // adding event listener click to each star of selected rating system
  curStars.forEach((singleStar, Idx) => {
    singleStar.addEventListener("click", () => {
      // index direction is reversed for preceding elements to have the same state
      // as the hovered or clicked star so the below is necessary to have the index
      // match the actual star number selected
      console.log(`Rating of ${Math.abs(Idx - 5)} was selected`);

      const starValue = Math.abs(Idx - 5);
      console.log(starValue);
      console.log(productId);
      console.log(productName);

      // To send request to web server
      axios
        .post(URL, {
          productId: productId,
          productName: productName,
          starRating: starValue,
        })
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );

      el.classList.add("no-hover");

      // Enable stars preceding the clicked star to also be in active state
      curStars.forEach((otherStar, otherIndex) => {
        if (otherIndex >= Idx) {
          otherStar.classList.add("active");
        } else {
          // removes active state of stars succeeding clicked star
          otherStar.classList.remove("active");
        }
      });
    });
  });
});

// function to create an element
function createElements(parent, elType, myClass) {
  const el = document.createElement(elType);
  el.classList.add(myClass);
  parent.append(el);
  return el;
}
