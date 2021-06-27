const btnsNum = document.querySelectorAll(".num");
const tablo = document.querySelector(".tablo");
const del = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const enter = document.querySelector(".enter");
const pole = document.querySelector(".pole");
const water = document.querySelector(".water");
const scorepanel = document.querySelector(".score");
let result = 0;
let score = 0;
tablo.innerHTML = result;
scorepanel.innerHTML = score;
btnsNum.forEach((btnNum) => {
  btnNum.addEventListener("click", (e) => {
    result = result * 10 + Number(e.target.textContent);
    tablo.innerHTML = result;
  });
});

clear.addEventListener("click", () => {
  result = 0;
  tablo.innerHTML = result;
});

del.addEventListener("click", () => {
  result = Math.floor(result / 10);
  tablo.innerHTML = result;
});

enter.addEventListener("click", () => {
  const balls = document.querySelectorAll(".ball");
  let rescopy = result;
  balls.forEach((ball) => {
    if (rescopy == ball.getAttribute("data-res")) {
      ball.style.top = window.innerHeight + "px";
      score += 30;
      scorepanel.innerHTML = score;

      result = 0;
      tablo.innerHTML = 0;
    }
  });
});

function move(el) {
  let pos = 0;
  const id = setInterval(frame, 10);
  function frame() {
    if (
      parseInt(el.style.top, 10) ===
      window.innerHeight - water.offsetHeight - 50
    ) {
      water.style.height = water.offsetHeight * 1.5 + "px";
      el.remove();
      score -= 50;
      scorepanel.innerHTML = score;
      clearInterval(id);
    } else if (
      parseInt(el.style.top, 10) >
      window.innerHeight - water.offsetHeight - 50
    ) {
      el.remove();
      clearInterval(id);
    } else {
      pos++;
      el.style.top = pos + "px";
    }
  }
}

function createBall() {
  let div = document.createElement("div");
  let first = Math.floor(getRandomArbitrary(1, 10));
  let second = Math.floor(getRandomArbitrary(1, 10));
  div.className = "ball";
  div.innerHTML = `<div class='ball-op'><span>+</span></div> <div class='ball-nums'><span>${first}</span> <span>${second}</span></div>`;
  div.setAttribute("data-res", first + second);
  div.style.left = getRandomArbitrary(0, pole.offsetWidth - 70) + "px";
  pole.prepend(div);
  move(div);
}
setInterval(createBall, 2000);
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
