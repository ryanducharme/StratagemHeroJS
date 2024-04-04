const STRATAGEMS = [
  {
    name: "Reinforce",
    code: "WSDAW",
    category: "Mission"
  },
  {
    name: "SOS Beacon",
    code: "WSDW",
    category: "Mission"
  },
  {
    name: "Resupply",
    code: "SSWD",
    category: "Mission"
  },
  {
    name: "Hellbomb",
    code: "SWASWDSW",
    category: "Mission"
  },
  {
    name: "SSSD Delivery",
    code: "WSDW",
    category: "Mission"
  },
  {
    name: "Seismic Probe",
    code: "WWADSS",
    category: "Mission"
  },
  {
    name: "Upload Data",
    code: "SSWWW",
    category: "Mission"
  },
  {
    name: "SEAF Artillery",
    code: "DWWS",
    category: "Mission"
  },
  {
    name: "Super Earth Flag",
    code: "SWSW",
    category: "Mission"
  },
  {
    name: "Orbital Strike",
    code: "WWD",
    category: "Offensive: Orbital"
  },
  {
    name: "Eagle Rearm",
    code: "WWAWD",
    category: "Mission"
  },
  {
    name: "Eagle Strafing Run",
    code: "WDD",
    category: "Offensive: Eagle"
  },
  {
    name: "Eagle Airstrike",
    code: "WDSD",
    category: "Offensive: Eagle"
  },
  {
    name: "Eagle Cluster Bomb",
    code: "WDSSD",
    category: "Offensive: Eagle"
  },
  {
    name: "Eagle Napalm Strike",
    code: "WDSW",
    category: "Offensive: Eagle"
  },
  {
    name: "Eagle Smoke Strike",
    code: "WDWS",
    category: "Offensive: Eagle"
  },
  {
    name: "Eagle 110MM Rocket Pods",
    code: "WDWA",
    category: "Offensive: Eagle"
  },
  {
    name: "Eagle 500kg Bomb",
    code: "WDSSS",
    category: "Offensive: Eagle"
  }
]

const missionStratagems = filterByCategory("Mission");
const orbitalStratagems = filterByCategory("Offensive: Orbital");
const eagleStratagems = filterByCategory("Offensive: Eagle");

var selectedStratagems = missionStratagems;

var streak = 0;
var highestStreak = 0;


let ui_strat = document.getElementById("current_stratagem");
let ui_input = document.getElementById("user_input");
let ui_streak = document.getElementById("streak");
let ui_current_stratagem_name = document.getElementById("current_stratagem_name");
let ui_highest_streak = document.getElementById("record");
let ui_timer = document.getElementById("timer");
let stratagem_spans_container = document.getElementById("stratagem_spans_container");

var userInput = [];
var currentStratagem = selectedStratagems[0];


ui_current_stratagem_name.textContent = `${currentStratagem.name}`
update_stratagem_code_ui();




function filterByCategory(category) {
  return STRATAGEMS.filter(stratagem => stratagem.category === category);
}

function update_stratagem_code_ui() {
  stratagem_spans_container.textContent = "";
  var s = convertWASDToArrows(currentStratagem.code);
  [...s].forEach(element => {
    var arrow = document.createElement("span");
    arrow.innerHTML = element;
    stratagem_spans_container.appendChild(arrow);
  });
  console.log(s)
}

function convertWASDToArrows(code) {
  var endingString = ""
  var res = code.toLowerCase().split("").map(x => {
    switch (x) {
      //use the unicode representation of the arrow emoji (up down left right)
      case "w":
        x = "🡅"
        endingString += x;
        break;
      case "s":
        x = "🡇"
        endingString += x;
        break;
      case "a":
        x = "🡄"
        endingString += x;
        break;
      case "d":
        x = "🡆"
        endingString += x;
        break;
    }
  })
  return endingString;
}

function checkSuccessfulInput() {
  //when the user presses an input check to make sure the input is the next in the stratagems code
  var code = currentStratagem.code.toLowerCase().split("");

  //user input gets updated with each key stroke so the length of it will be how many times the user has pressed
  //the last item in the userInput array tells us the last button pressed, compare that to what the stratagem code is looking for and we can find a match
  if (userInput[userInput.length - 1] == code[userInput.length - 1]) {

    var spans = document.querySelectorAll('#stratagem_spans_container span');
    console.log(spans.length);
    spans[userInput.length - 1].className = "correct";

    if (JSON.stringify(userInput.toString()) === JSON.stringify(code.toString())) {

      let rand = Math.floor(Math.random() * selectedStratagems.length);
      currentStratagem = selectedStratagems[rand];

      userInput = [];
      streak += 1;
      //ui_strat.innerHTML = currentStratagem.code;
      update_stratagem_code_ui();
      timer += 0.5;
      if (streak > highestStreak) {
        highestStreak = streak;
      }
    }
    return true;

  } else {
    // ui_strat.innerHTML = currentStratagem.code;
    update_stratagem_code_ui();
    console.log(currentStratagem.code);

    userInput = [];
    streak = 0;
    timer -= 1;
  }
}

window.addEventListener(
  "keydown",
  (event) => {
    var key = event.key;
    console.log(key);
    if (gameOver == false) {
      switch (key) {
        case "w":
          console.log("User Input: w");
          userInput.push(key);
          checkSuccessfulInput();
          break;
        case "a":
          console.log("User Input: a");
          userInput.push(key);
          checkSuccessfulInput();
          break;
        case "s":
          console.log("User Input: s");
          userInput.push(key);
          checkSuccessfulInput();
          break;
        case "d":
          console.log("User Input: d");
          userInput.push(key);
          checkSuccessfulInput();
          break;
      }
    }
    if (key == " ") {
      reset();
    }
    //ui_input.innerHTML = convertWASDToArrows(userInput.toString());
    ui_streak.textContent = `Streak: ${streak}`;
    ui_current_stratagem_name.textContent = `${currentStratagem.name}`;
    ui_highest_streak.innerText = `Record: ${highestStreak}`
    //ui_strat.innerHTML = convertWASDToArrows(currentStratagem.code);
    //document.getElementById("output").appendChild(p);
  },
  true,
);

let lastFrameTime = performance.now();
let gameOver = false;

let timer = 10;

function gameLoop() {
  // if (gameOver) {
  //   return;
  // }

  const currentTime = performance.now();
  const deltaTime = (currentTime - lastFrameTime) / 1000; // Convert milliseconds to seconds

  updateGameState(deltaTime);

  renderGame();

  lastFrameTime = currentTime;

  // Request next frame
  requestAnimationFrame(gameLoop);
}

function updateGameState(deltaTime) {
  var time

  if(!gameOver) {
    var time = timer -= deltaTime

    if (time <= 0) {
      time = 0.00;
      gameOver = true;
    }
  }
  

  ui_timer.innerText = parseFloat(time).toPrecision(3);
}

function renderGame() {
  // Render game graphics
}

function handleKeyDown(event) {
  // Handle keydown events
  console.log('Key pressed:', event.key);
}

function reset() {
  timer = 10;
  streak = 0;
  userInput = [];
  gameOver = false;
  update_stratagem_code_ui();

}

// Start the game loop
gameLoop();