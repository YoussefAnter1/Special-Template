let toggle = document.querySelector(".toggle-settings .icon");
let setting = document.querySelector(".settings-box");
toggle.addEventListener("click", function () {
  setting.classList.toggle("open");
  toggle.classList.toggle("fa-spin");
});

// Stor Colors In LocalStorage
let Storecolor = localStorage.getItem("activeColor");
if (Storecolor !== null) {
  document.documentElement.style.setProperty("--main-color", Storecolor);
  document.querySelectorAll(".settings-box .colors-list li").forEach((ele) => {
    ele.classList.remove("active");
    if (ele.dataset.color === Storecolor) {
      ele.classList.add("active");
    }
  });
}

// Switch Colors
let colorlis = document.querySelectorAll(".settings-box .colors-list li");
colorlis.forEach((li) => {
  //Click On Every List
  li.addEventListener("click", (e) => {
    // Set Color On Root
    let Color = e.target.dataset.color;
    document.documentElement.style.setProperty("--main-color", Color);
    handleActive(e);
    // Store the selected color in localStorage
    localStorage.setItem("activeColor", Color);
  });
  li.style.backgroundColor = li.dataset.color;
});

// Stor Colors In LocalStorage
let Storerandom = localStorage.getItem("activeRandom");
if (Storerandom !== null) {
  document.documentElement.style.setProperty("--main-color", Storerandom);
  document
    .querySelectorAll(".option-box .random-backgrounds span")
    .forEach((ele) => {
      ele.classList.remove("active");
      if (ele.dataset.color === Storerandom) {
        ele.classList.add("active");
      }
    });
}
// Random Background Option
let backgroundOption = true;

// Variable To Control The Interval
let backgroundInterval;

// Stor randombackground In LocalStorage
let backgroundlocalItem = localStorage.getItem("background_option");

if (backgroundlocalItem !== null) {
  if (backgroundlocalItem === "true") {
    backgroundOption = true;
    // console.log("empty")
  } else {
    backgroundOption = false;
  }
  console.log(backgroundOption);
  document
    .querySelectorAll(".option-box .random-backgrounds span")
    .forEach((ele) => {
      ele.classList.remove("active");
    });

  if (backgroundlocalItem === "true") {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}
// Switch Random

let randomBaground = document.querySelectorAll(
  ".option-box .random-backgrounds span"
);

// randomBaground.forEach((spans) => {
//   spans.addEventListener("click", (e) => {
//     randomBaground.forEach((span) => {
//       span.classList.remove("active");
//     });
//     e.target.classList.add("active");
//   });
// });

// Another Solution

randomBaground.forEach((spans) => {
  spans.addEventListener("click", (e) => {
    handleActive(e);
    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background_option", false);
    }
  });
});

// Stor Random In LocalStorage

//------------------------------------------------
//------------------------------------------------
//------------------------------------------------
//------------------------------------------------
//------------------------------------------------
//------------------------------------------------
//------------------------------------------------

// Select Landing Page Element
let landing = document.querySelector(".landing-page");

// Get Array Of Imgs
let arrayImgs = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

function randomizeImgs() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // Get Random Number
      let random = Math.floor(Math.random() * arrayImgs.length);

      // Change Backgrounf Image Url
      // landing.style.backgroundImage  = `url("imgs/${arrayImgs[random]}")`
      landing.style.backgroundImage = 'url("imgs/' + arrayImgs[random] + '")';
    }, 1000);
  }
}

randomizeImgs();

// Select all background images
let bgImages = document.querySelectorAll(".background-images img");

bgImages.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Get the background image from the data-bg attribute
    let bg = e.target.dataset.bg;

    // Set it as the background of the landing page
    document.querySelector(
      ".landing-page"
    ).style.backgroundImage = `url(${bg})`;

    // Save the background choice to localStorage
    localStorage.setItem("backgroundImage", bg);
  });
});

// Apply the saved background on page load
let savedBg = localStorage.getItem("backgroundImage");
if (savedBg !== null) {
  document.querySelector(
    ".landing-page"
  ).style.backgroundImage = `url(${savedBg})`;
}

// Start Our Skills

// let Section =document.querySelector(".about-us h1")
let Section = document.querySelector(".our-skills");
let skillprogress = document.querySelector(".skill-progress");
let skillbox = document.querySelectorAll(".skill-box .skill-progress span");

window.onscroll = function () {
  // if (window.scrollY >= Section.offsetTop - window.innerHeight + 200) {
  if (window.scrollY >= Section.offsetTop) {
    skillbox.forEach((prog) => {
      prog.style.width = prog.dataset.width;
    });
  }
};

// Another Solution
// let ourSkills = document.querySelector(".our-skills");

// window.onscroll = function () {
//   // Skills Offset Top
//   let skillsOffsetTop = ourSkills.offsetTop;

//   // Skills Outer Height
//   let skillsOuterHeight = ourSkills.offsetHeight;

//   // Window Height
//   let windowHeight = this.innerHeight;

//   // Window ScrollTop
//   let windowScrollTop = this.pageYOffset;

//   if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
//     let allSkills = document.querySelectorAll(
//       ".skill-box .skill-progress span"
//     );

//     allSkills.forEach((skill) => {
//       skill.style.width = skill.dataset.width;
//       // let windowScrollTop = this.pageYOffset;

//       console.log(windowScrollTop);
//     });
//   }
// };

// End Our Skills

// Start Our Imges
// let popupBox =document.querySelector(".popup-box")
// let overlaypopup =document.querySelector(".overlay-popup")
// let imgbox = document.querySelectorAll(".Our-Gallery .imgs-box img")

// imgbox.forEach(img => {
//   img.addEventListener("click" , e=>{
//     // console.log(e.target)

//     let heading = document.createElement("h3");
//     let spaning = document.createElement("span");
//     let newElement = document.createElement("div");

//     heading.textContent = e.target.alt;
//     // تعيين كلاس للعنصر الجديد
//     newElement.className = "popup-box";
//     spaning.textContent="X"
//     // إضافة محتوى نصي للعنصر (اختياري)

//     let imgClone = img.cloneNode();
//     newElement.appendChild(heading);
//     newElement.appendChild(spaning);
//     newElement.appendChild(imgClone);
//     // إضافة العنصر إلى الـ body
//     document.body.append(newElement,popupBox);

//   })
// })

// End Our Imges
let imgbox = document.querySelectorAll(".Our-Gallery .imgs-box img");
let popupBox = document.createElement("div");
let overlaypopup = document.createElement("div");
let heading = document.createElement("h3");
let spaning = document.createElement("span");
let imgClone = document.createElement("img");

popupBox.className = "popup-box";
overlaypopup.className = "overlay-popup";
spaning.textContent = "X";

popupBox.appendChild(heading);
popupBox.appendChild(spaning);
popupBox.appendChild(imgClone);

imgbox.forEach((img) => {
  img.addEventListener("click", (e) => {
    heading.textContent = e.target.alt;
    imgClone.src = e.target.src;

    popupBox.style.display = "block";
    overlaypopup.style.display = "block";
    document.body.appendChild(popupBox);
    document.body.appendChild(overlaypopup);
  });
});

spaning.addEventListener("click", () => {
  popupBox.style.display = "none";
  overlaypopup.style.display = "none";
});

// Start Nav Bullets

let bullets = document.querySelectorAll(".nav-bullets .bullet");
// bullets.forEach((bull) => {
//   bull.addEventListener("click", (e) => {
//     // console.log(e.target.dataset.section)
//     document.querySelector(e.target.dataset.section).scrollIntoView({ behavior: 'smooth' })
//   } )
// })

// End Nav Bullets

let links = document.querySelectorAll(".links li");
// links.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault()
//     // console.log(e.target.dataset.section)
//     document.querySelector(e.target.dataset.section).scrollIntoView({ behavior: 'smooth' })
//   } )
// })

function scrollToSomewhere(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      // console.log(e.target.dataset.section)
      document
        .querySelector(e.target.dataset.section)
        .scrollIntoView({ behavior: "smooth" });
    });
  });
}

//  الاكواد دي في حالة لو انا عايز انشي bullets دينامكيا بعدد الاقسام اللي موجوده في الصفحه

// أنشئ العنصر الرئيسي
// let navBullets = document.createElement('div');
// navBullets.className = 'nav-bullets';

// // بيانات الأقسام
// let sections = [
//   { section: '.about-us', tooltip: 'About Us' },
//   { section: '.our-skills', tooltip: 'Our Skills' },
//   { section: '.Our-Gallery', tooltip: 'Our Gallery' },
//   { section: '.Timeling', tooltip: 'Timeline' },
//   { section: '.our-features', tooltip: 'Features' },
//   { section: '.testimonials', tooltip: 'Testimonials' }
// ];

// // أضف الرصاصات (bullets) إلى navBullets
// sections.forEach(item => {
//   let bullet = document.createElement('div');
//   bullet.className = 'bullet';
//   bullet.setAttribute('data-section', item.section);

//   let tooltip = document.createElement('div');
//   tooltip.className = 'tooltip';
//   tooltip.textContent = item.tooltip;

//   bullet.appendChild(tooltip);
//   navBullets.appendChild(bullet);
// });

// // أضف navBullets إلى الـ body أو أي عنصر آخر
// document.body.appendChild(navBullets);
// let bullets = document.querySelectorAll(".nav-bullets .bullet")

scrollToSomewhere(links);
scrollToSomewhere(bullets);

function handleActive(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  ev.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletsContainer = document.querySelector(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullets_option");
if (bulletLocalItem !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });

  if (bulletLocalItem === "block") {
    bulletsContainer.style.display = "block";
    document.querySelector(".bullets-option .yes").classList.add("active");
  } else {
    bulletsContainer.style.display = "none";
    document.querySelector(".bullets-option .no").classList.add("active");
  }
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "show") {
      bulletsContainer.style.display = "block";
      localStorage.setItem("bullets_option", "block");
    } else {
      bulletsContainer.style.display = "none";
      localStorage.setItem("bullets_option", "none");
    }
    handleActive(e);
  });
});

document.querySelector(".reset-options").onclick = function () {
  // localStorage.clear();
  localStorage.removeItem("activeColor");
  localStorage.removeItem("backgroundImage");
  localStorage.removeItem("background_option");
  localStorage.removeItem("activeRandom");
  window.location.reload();
};

// let toggelBtn =document.querySelector(".toggle-menu")
// let tlink =document.querySelector(".links")
// let linkContainer =document.querySelector(".links-container")
// toggelBtn.onclick=function() {
//   this.classList.toggle("menu-active")
//   tlink.classList.toggle("open")

//   document.addEventListener("click" ,function(e) {
//     if(e.target !=tlink && e.target != toggelBtn )
//       tlink.classList.remove("open")
//     toggelBtn.classList.remove("menu-active")
//   })
// }

let toggelBtn = document.querySelector(".toggle-menu");
let tlink = document.querySelector(".links");

// تفعيل أو تعطيل القائمة عند الضغط على الزرار
toggelBtn.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");
  tlink.classList.toggle("open");
};

// إغلاق القائمة إذا تم الضغط في أي مكان آخر غير الزرار
document.addEventListener("click", function (e) {
  // إذا كان العنصر المضغوط عليه ليس الزرار وكانت القائمة مفتوحة
  if (e.target !== toggelBtn && e.target !== tlink) {
    if (tlink.classList.contains("open")){
      toggelBtn.classList.toggle("menu-active");
      tlink.classList.toggle("open");
    }
      
  }
});

tlink.onclick = function (e) {
  e.stopPropagation();
};
