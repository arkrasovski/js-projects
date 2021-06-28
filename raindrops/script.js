const btnsNum = document.querySelectorAll(".num");
const tablo = document.querySelector(".tablo");
const del = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const enter = document.querySelector(".enter");
const pole = document.querySelector(".pole");
const water = document.querySelector(".water");
const scorepanel = document.querySelector(".score");
const modal = document.querySelector(".modal");
const scoremodal = document.querySelector(".scoreIs");
const repeat = document.querySelector(".buttons button");
const tutors = document.querySelectorAll(".tutor");
audio = document.createElement("audio");
audio.src = "audio/bulk.mp3";
audio.autoplay = true;

let result = 0;
let score = 0;
let chance;
let boolTutor = false;
function play(tutor, score = 0) {
  result = 0;
  if (tutor === 1) {
    chance = 1;
  }
  if (tutor === 2) {
    chance = 9999;
  }
  if (tutor === 3) {
    chance = 0;
  }

  tablo.innerHTML = result;
  scorepanel.innerHTML = "Score " + score;
  const cr = setInterval(() => {
    createBall(cr, "ball", false);
  }, 2000);
}
play(3);

function tutorial() {
  if (!boolTutor) {
    if (parseInt(water.style.height, 10) == water.offsetHeight) {
      water.style.height = water.offsetHeight / 8 + "px";
    }

    modal.style.display = "none";
    play(2);
    createBall("", "ball1", true);
    boolTutor = true;
  } else return;
}
tutors.forEach((tutor) => {
  tutor.addEventListener("click", tutorial);
});

repeat.addEventListener("click", () => {
  water.style.height = water.offsetHeight / 8 + "px";
  modal.style.display = "none";
  play(3);
});

tablo.innerHTML = result;
scorepanel.innerHTML = "Score " + score;
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

enter.addEventListener("click", submit);

function submit() {
  const balls = document.querySelectorAll(".ball");
  const tutorball = document.querySelector(".ball1");
  let rescopy = result;
  balls.forEach((ball) => {
    if (rescopy == ball.getAttribute("data-res")) {
      ball.style.top = window.innerHeight + "px";
      score += 30;
      scorepanel.innerHTML = "Score " + score;
      result = 0;
      tablo.innerHTML = 0;
    }
  });
  if (
    rescopy == tutorball.getAttribute("data-res") &&
    parseInt(tutorball.style.top, 10) === Math.floor(window.innerHeight / 2)
  ) {
    tutorball.setAttribute("data-res", 3219); //чтобы нельзя было стакать

    result = 0;
    tablo.innerHTML = 0;
    score += 30;
    scorepanel.innerHTML = "Score " + score;
    alert("молодец! вы ввели правильный ответ, шарик лопнул");
    play(3, score);
    tutorball.remove();
  } else if (
    rescopy != tutorball.getAttribute("data-res") &&
    parseInt(tutorball.style.top, 10) === Math.floor(window.innerHeight / 2)
  ) {
    alert("вы ввели неверный ответ двигаемся дальше");

    score -= 50;
    scorepanel.innerHTML = "Score " + score;
    moveLastInTutorial(tutorball);
    play(1, score);
  }
}
function moveLastInTutorial(el) {
  let pos = Math.floor(window.innerHeight / 2);
  const id = setInterval(change, 10);
  function change() {
    if (pos != window.innerHeight - water.offsetHeight - 50) {
      pos++;
      el.style.top = pos + "px";
    }
    if (pos == window.innerHeight - water.offsetHeight - 50) {
      clearInterval(id);
      alert("сейчас шарик лопнет и уровень воды подымется в 2 раза");
      el.remove();
      water.style.height = water.offsetHeight * 2 + "px";
    }
  }
}
function move(el, tutor) {
  let pos = 0;
  const id = setInterval(frame, 10);
  function frame() {
    if (!tutor) {
      if (
        parseInt(el.style.top, 10) ===
        window.innerHeight - water.offsetHeight - 50
      ) {
        water.style.height = water.offsetHeight * 2 + "px";
        el.remove();
        score -= 50;
        chance++;
        console.log(chance);
        scorepanel.innerHTML = "Score " + score;
        audio.play();
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
    if (tutor) {
      if (pos === Math.floor(window.innerHeight / 2)) {
        alert("Введите ответ выражения и нажмите ентер ");

        if (result == el.getAttribute("data-res")) {
          score += 30;
          scorepanel.innerHTML = "Score " + score;
        }
        clearInterval(id);
      } else if (pos === window.innerHeight - water.offsetHeight - 50) {
        audio.play();
        water.style.height = water.offsetHeight * 2 + "px";
        el.remove();

        score -= 50;
        chance++;
        scorepanel.innerHTML = "Score " + score;
        audio.play();
        clearInterval(id);
      } else {
        pos++;
        el.style.top = pos + "px";
      }
    }
  }
}

function createBall(cr, clas, tutor) {
  const opArray = ["+", "-", "*", "/"];
  let opIndex = Math.floor(getRandomArbitrary(0, 4));

  let div = document.createElement("div");
  let first = Math.floor(getRandomArbitrary(1, 10));
  let second = Math.floor(getRandomArbitrary(1, 10));
  switch (opArray[opIndex]) {
    case "+":
      div.setAttribute("data-res", first + second);
      break;
    case "-":
      if (second > first) {
        [first, second] = [second, first];
      }
      div.setAttribute("data-res", first - second);
      break;
    case "*":
      {
        if (second === 1 || first === 1) {
          first = Math.floor(getRandomArbitrary(2, 10));
          second = Math.floor(getRandomArbitrary(2, 10));
        }
      }
      div.setAttribute("data-res", first * second);
      break;
    case "/":
      if (second > first) {
        [first, second] = [second, first];
      }
      if (second % first != 0 || first === second || second === 1) {
        while (second % first != 0 || first === second || second === 1) {
          first = Math.floor(getRandomArbitrary(2, 10));
          second = Math.floor(getRandomArbitrary(2, 10));
        }
        if (second > first) {
          [first, second] = [second, first];
        }
      }
      div.setAttribute("data-res", first / second);
      break;
  }
  div.className = clas;
  div.innerHTML = `<div class='ball-op'><span>${opArray[opIndex]}</span></div> <div class='ball-nums'><span>${first}</span> <span>${second}</span></div>`;

  div.style.left = getRandomArbitrary(0, pole.offsetWidth - 70) + "px";
  pole.prepend(div);
  move(div, tutor);
  if (chance >= 3 && chance != 9999) {
    clearInterval(cr);
    const balls = document.querySelectorAll(".ball");
    balls.forEach((ball) => {
      ball.style.top = window.innerHeight + "px";
    });
    openModal();
    boolTutor = false;
  }
  if (chance == 9999) {
    clearInterval(cr);
    const balls = document.querySelectorAll(".ball");
    balls.forEach((ball) => {
      ball.style.top = window.innerHeight + "px";
    });
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function openModal() {
  modal.style.display = "flex";
  scoremodal.innerHTML = "Your score is: " + score;
  score = 0;
}

function closeModal() {
  modal.style.display = "none";
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 8) {
    result = Math.floor(result / 10);
    tablo.innerHTML = result;
  }
  if (e.keyCode === 13) {
    submit();
  }
  if (e.keyCode === 27) {
    result = 0;
    tablo.innerHTML = result;
  }
  const btns = document.querySelectorAll(`div[data-key]`);
  btns.forEach((btn) => {
    if (e.keyCode == btn.getAttribute("data-key")) {
      console.log("kek");
      result = result * 10 + Number(btn.textContent);
      tablo.innerHTML = result;
    }
  });
});
