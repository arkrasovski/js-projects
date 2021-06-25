function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

// const keys = document.querySelectorAll(".key");
// console.log(keys);
// window.addEventListener("keydown", function (e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   if (!audio) {
//     return;
//   } //stop the function from running all together
//   audio.currentTime = 0;
//   audio.play();
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   key.classList.add("active");
// });

// keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// function removeTransition(e) {
//   // if (e.propertyName !== "transform") return;
//   // e.target.classList.remove("active");
//   console.log(e);
// }

keys.forEach((key) => {
  key.addEventListener("click", playNote);
});

function playNote(e) {
  console.log(e);
  const music = document.querySelector(
    `audio[data-note="${e.target.dataset.note}"]`
  );
  const key1 = document.querySelector(
    `div[data-note="${e.target.dataset.note}"]`
  );
  if (!music) {
    return;
  }
  key1.classList.add("playing");
  music.currentTime = 0;
  music.play();
}

//Кнопки
const btns = document.querySelectorAll(".top-btns");
console.log(btns);

btns.forEach((item) => {
  item.addEventListener("click", () => {
    hideContent();
    if (item.id === "notes") {
      changeTypeN();
      showContent(0);
    }
    if (item.id === "letters") {
      changeTypeL();
      showContent(1);
    }
  });
});

function showContent(i = 0) {
  btns[i].classList.add("btn-active");
}

function hideContent() {
  btns.forEach((item) => {
    item.classList.remove("btn-active");
  });
}
function changeTypeL() {
  const words = document.querySelectorAll(".symbol");
  words.forEach((item, index) => {
    if (index % 2 !== 0 && item.classList.contains("hide")) {
      item.classList.remove("hide");
    } else if (index % 2 === 0) {
      item.classList.add("hide");
    }
  });
}

function changeTypeN() {
  const words = document.querySelectorAll(".symbol");
  words.forEach((item, index) => {
    if (index % 2 === 0 && item.classList.contains("hide")) {
      item.classList.remove("hide");
    } else if (index % 2 !== 0) {
      item.classList.add("hide");
    }
  });
}

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

const titan = document.querySelector("#titan");
const stop = document.querySelector("#stop");
titan.addEventListener("click", playTitan);
function playTitan(e) {
  const music = document.querySelector(
    `audio[data-note="${e.target.dataset.note}"]`
  );
  if (!music) {
    return;
  }

  music.play();
}

stop.addEventListener("click", (e) => {
  const music = document.querySelector(
    `audio[data-note="${e.target.dataset.note}"]`
  );
  if (!music) {
    return;
  }
  music.pause();
});

//Наведение
window.addEventListener("mousedown", mouseOver);
window.addEventListener("mouseup", function () {
  const keys = document.querySelectorAll(".key");
  //   console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    keys[i].removeEventListener("mouseover", keyPlay);
  }
});

function mouseOver() {
  // console.log(event);
  const keys = document.querySelectorAll(".key");
  //   console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("mouseover", keyPlay);
  }
}

function keyPlay() {
  console.log(event);
  const audio = document.querySelector(
    `audio[data-key="${event.toElement.dataset.key}"]`
  );
  const key = event.target;
  //   console.log(event.target);
  if (!audio) {
    return;
  }
  audio.play();
  audio.currentTime = 0;
  key.classList.add("playing");
}
