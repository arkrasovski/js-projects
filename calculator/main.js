const numbers = document.querySelectorAll(".number"),
  operations = document.querySelectorAll(".operator"),
  decimalpoint = document.querySelector("#decimal"),
  clearBtns = document.querySelectorAll(".clear-btn"),
  resultBtn = document.querySelector("#result"),
  display = document.querySelector("#display"),
  minus = document.querySelector(".minus");

let memoryCurrentNumber = "0",
  memoryNewNumber = false,
  memoryPendingOperation = "";

numbers.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    numberPress(e.target.textContent);
  });
});

operations.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    operation(e.target.textContent);
  });
});

clearBtns.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    clear(e.srcElement.id);
  });
});

decimalpoint.addEventListener("click", decimal);

minus.addEventListener("click", (e) => {
  minustest(e.target.textContent);
});

function minustest(symbol) {
  console.log(symbol);

  if (memoryNewNumber) {
    display.value = symbol;
    memoryNewNumber = false;
  } else {
    if (display.value === "0") {
      display.value = symbol;
    }
  }
}

function numberPress(number) {
  if (memoryNewNumber) {
    display.value = number;
    memoryNewNumber = false;
  } else {
    if (display.value === "0") {
      display.value = number;
    } else {
      display.value += number;
    } //+= чтобы сделать многознвчным
  }
}

function operation(op) {
  let localOperationMemory = display.value;

  if (memoryNewNumber && memoryPendingOperation !== "=") {
    display.value = memoryCurrentNumber;
  } else {
    memoryNewNumber = true;
    if (memoryPendingOperation === "+" || memoryPendingOperation === "-") {
      // if (localOperationMemory[0] === "--") {
      //   localOperationMemory = localOperationMemory.slice(2);
      // }
      memoryCurrentNumber += parseFloat(localOperationMemory);
      // } else if (memoryPendingOperation === "-") {
      //   localOperationMemory = -parseFloat(localOperationMemory);
      //   memoryCurrentNumber += parseFloat(localOperationMemory);
    } else if (memoryPendingOperation === "*") {
      memoryCurrentNumber *= parseFloat(localOperationMemory);
    } else if (memoryPendingOperation === "/") {
      memoryCurrentNumber /= parseFloat(localOperationMemory);
    } else if (memoryPendingOperation === "pow") {
      memoryCurrentNumber =
        memoryCurrentNumber ** parseFloat(localOperationMemory);
    } else if (op === "sqr") {
      memoryNewNumber = false;
      memoryCurrentNumber = Math.sqrt(localOperationMemory);
    } else {
      memoryCurrentNumber = parseFloat(localOperationMemory);
    }
    if (isNaN(memoryCurrentNumber)) {
      display.value = "error";
    } else {
      display.value = memoryCurrentNumber;
    }
    memoryPendingOperation = op;
  }
}

function decimal() {
  let localDecimalMemory = display.value;

  if (memoryNewNumber) {
    localDecimalMemory = "0.";
    memoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf(".") === -1) {
      //Проверили чтобы точек уже не было
      localDecimalMemory += ".";
    }
  }
  display.value = localDecimalMemory;
}

function clear(id) {
  if (id === "ce") {
    display.value = "0";
    memoryNewNumber = true;
  } else if (id === "c") {
    display.value = "0";
    memoryNewNumber = true;
    memoryCurrentNumber = 0;
    memoryPendingOperation = "";
  }
}

// switch (memoryPendingOperation) {
//     case "+":
//       memoryCurrentNumber += localOperationMemory;
//       break;
//     case "-":
//       memoryCurrentNumber -= localOperationMemory;
//       break;
//     case "*":
//       memoryCurrentNumber *= localOperationMemory;
//       break;
//     case "-":
//       memoryCurrentNumber /= localOperationMemory;
//       break;
//     case "=":
//       memoryCurrentNumber = localOperationMemory;
//       break;
//   }
