// console.log("Hello world");

// const myName = "Alex";
// console.log(myName);

// const h1 = document.querySelector(".header-primary");
// console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

const copyrightYear = document.querySelector(".copyright-year");
const currentYear = new Date().getFullYear();
copyrightYear.textContent = currentYear;

////////////////////////////////////////

const btnMobileNavEl = document.querySelector(".btn-mobile-nav");
const headerSectionEl = document.querySelector(".header-section");
btnMobileNavEl.addEventListener("click", function () {
  headerSectionEl.classList.toggle("nav--open");
});

// get all links into a variable
const allLinks = document.querySelectorAll("a:link");
// iterate trough all the links
allLinks.forEach(function (link) {
  // add event listener to every link element
  link.addEventListener("click", function (e) {
    //cancel default scrolling behaviour
    e.preventDefault();
    //store hrev attribute value into a variable
    const href = link.getAttribute("href");

    if (href === "#")
      //condition that determines the scrolling target
      // based on the value of href attribute
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behaviour: "smooth" });
    }

    link.classList.forEach(function (a) {
      console.log(a);
    });

    if (link.classList.contains("nav-link"))
      headerSectionEl.classList.toggle("nav--open");
  });
});

//////////////////////////STICKY NAVIGATION MENU////////////////////////

const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the view port
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
