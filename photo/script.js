const inputs = document.querySelectorAll(".properties input");
const outputs = document.querySelectorAll(".properties output");
const canvas = document.querySelector("canvas");

let conditionArray = [];
// const images = {};
// let imagesCounter = 1;

function changePhoto(ctx, img) {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", () => {
      if (!outputs[i]) return;
      outputs[i].innerHTML = inputs[i].value;
      conditionArray[i] = `${inputs[i].getAttribute("name")}(${
        inputs[i].value
      }${inputs[i].getAttribute("data-sizing")})`;
      console.log(conditionArray[i]);
      ctx.filter = conditionArray.join(" ");
      ctx.drawImage(img, 0, 0);
      revertChanges(inputs, outputs, i, ctx, img);
      console.log(ctx);
    });
  }
}
const images = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
];
let i = 0;
let base;
function getImage() {
  const index = (i + 1) % images.length;
  const imageSrc = base + images[index];
  drawImage(imageSrc);
  i++;
}

const now = new Date();
let hours = now.getHours();
if (hours >= 6 && hours < 12) {
  base =
    "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/";
}
if (hours >= 12 && hours < 18) {
  base =
    "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/";
}
if (hours >= 18 && hours < 24) {
  base =
    "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/";
}
if (hours >= 0 && hours < 6) {
  base =
    "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/";
}

function drawImage(src = base + "01.jpg") {
  const img = new Image();
  img.setAttribute("crossOrigin", "anonymous");
  img.src = src;
  // const fileInput = document.querySelector('input[type="file"]');
  // fileInput.addEventListener("click", clickLoadImage(img));
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    changePhoto(ctx, img);
    // nextPicture(img);
    // imagesCounter++;
    // savePicture(canvas);
  };
}
drawImage();

function revertChanges(inputs, outputs, i, ctx, img) {
  let buttonReset = document.querySelector(".btn-reset");
  buttonReset.addEventListener("click", () => {
    console.log(inputs[i]);
    if (inputs[i].getAttribute("name") != "saturate") {
      inputs[i].value = 0;
    } else inputs[i].value = 100;
    outputs[i].innerHTML = inputs[i].value;
    ctx.filter = "none";
    ctx.drawImage(img, 0, 0);
  });
}

// const outputs = document.querySelectorAll(".properties output");

// function handleUpdate() {
//   const suffix = this.dataset.sizing || "";
//   console.log(this.name);
//   if (this.name !== "blur") {
//     document.documentElement.style.setProperty(
//       `--${this.name}`,
//       this.value + suffix
//     );
//   }
//   if (this.name === "blur") {
//     document.documentElement.style.setProperty(
//       `--${this.name}`,
//       this.value / 10 + suffix
//     );
//   }

//   // const pole = document.querySelector(`#${this.name + "o"}`);
//   outputs.forEach((item) => {
//     if (item.getAttribute("for") === this.name) {
//       item.value = this.value;
//     }
//   });
// }

// inputs.forEach((input) => input.addEventListener("change", handleUpdate));
// inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));

//кнопки;
const btns = document.querySelectorAll(".btns button");
console.log(btns);
btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.toElement.outerText === "Reset") {
      ctx.filter = "none";
      inputs.forEach((input) => {
        if (input.id != "saturate") {
          input.value = 0;
          document.documentElement.style.setProperty(`--${input.id}`, 0);
        }
        if (input.id == "saturate") {
          input.value = "100%";
          document.documentElement.style.setProperty(`--${input.id}`, "100%");
        }
      });
      outputs.forEach((item) => {
        if (item.getAttribute("for") !== "saturate") {
          item.value = 0;
        }
        if (item.getAttribute("for") === "saturate") {
          item.value = 100;
        }
      });
    }

    //
    if (e.toElement.outerText === "Next picture") {
      getImage();
    }

    if (e.toElement.outerText === "Save picture") {
      console.log("kek");
      const dataURI = canvas.toDataURL();
      // console.log(item.childNodes[1].href);
      item.childNodes[1].href = dataURI;
    }
  });
});

// //date

// const images = [
//   "01.jpg",
//   "02.jpg",
//   "03.jpg",
//   "05.jpg",
//   "06.jpg",
//   "07.jpg",
//   "08.jpg",
//   "09.jpg",
//   "10.jpg",
//   "11.jpg",
//   "12.jpg",
//   "13.jpg",
//   "14.jpg",
//   "15.jpg",
//   "16.jpg",
//   "17.jpg",
//   "18.jpg",
//   "19.jpg",
//   "20.jpg",
// ];
// let i = 0;

// function getImage() {
//   const index = (i + 1) % images.length;
//   const imageSrc = base + images[index];
//   drawImage(imageSrc);
//   i++;
// }
// let base;
// const now = new Date();
// let hours = now.getHours();
// if (hours >= 6 && hours < 12) {
//   base =
//     "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/";
// }
// if (hours >= 12 && hours < 18) {
//   base =
//     "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/";
// }
// if (hours >= 18 && hours < 24) {
//   base =
//     "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/";
// }
// if (hours >= 0 && hours < 6) {
//   base =
//     "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/";
// }

// function drawImage(src = base + "01.jpg") {
//   const img = new Image();
//   img.setAttribute("crossOrigin", "anonymous");
//   img.src = src;
//   img.onload = function () {
//     canvas.width = img.width;
//     canvas.height = img.height;
//     const ctx = canvas.getContext("2d");

//     ctx.drawImage(img, 0, 0);
//   };
//   // document.querySelector("img").src = canvas.toDataURL();
// }
// drawImage();

//полный экран

const full = document.getElementById("full");
console.log(full);
full.addEventListener("click", toogleScreen);

window.addEventListener("keydown", (e) => {
  //С буквой q работает без проблем
  if (e.keyCode === 81 && document.fullscreenEnabled) {
    document.exitFullscreen();
    full.classList.remove("icon-shrink");
    full.classList.add("icon-enlarge");
  }
  if (e.keyCode !== 81 || document.fullscreenElement === null) {
    return;
  }
});

function toogleScreen(e) {
  if (document.fullscreenElement === null) {
    document.documentElement.requestFullscreen();
    full.classList.remove("icon-enlarge");
    full.classList.add("icon-shrink");
  } else if (document.fullscreenEnabled) {
    console.log("1");
    document.exitFullscreen();
    full.classList.remove("icon-shrink");
    full.classList.add("icon-enlarge");
  }
}

//Запрос фотки
const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener("change", function (e) {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    drawImage(reader.result);
  };
  reader.readAsDataURL(file);
  reader.result = "";
  fileInput.files[0].reset();
});
