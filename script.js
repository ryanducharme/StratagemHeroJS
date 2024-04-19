const STRATAGEMS = [
  {
    name: "Reinforce",
    code: "WSDAW",
    category: "Mission",
    enabled: false
  },
  {
    name: "SOS Beacon",
    code: "WSDW",
    category: "Mission",
    enabled: false
  },
  {
    name: "Resupply",
    code: "SSWD",
    category: "Mission",
    enabled: false
  },
  {
    name: "Hellbomb",
    code: "SWASWDSW",
    category: "Mission",
    enabled: true
  },
  {
    name: "SSSD Delivery",
    code: "WSDW",
    category: "Mission",
    enabled: true
  },
  {
    name: "Seismic Probe",
    code: "WWADSS",
    category: "Mission",
    enabled: true
  },
  {
    name: "Upload Data",
    code: "SSWWW",
    category: "Mission",
    enabled: true
  },
  {
    name: "SEAF Artillery",
    code: "DWWS",
    category: "Mission",
    enabled: true
  },
  {
    name: "Super Earth Flag",
    code: "SWSW",
    category: "Mission",
    enabled: true
  },
  {
    name: "Orbital Strike",
    code: "WWD",
    category: "Offensive: Orbital",
    enabled: true
  },
  {
    name: "Eagle Rearm",
    code: "WWAWD",
    category: "Mission",
    enabled: true
  },
  {
    name: "Eagle Strafing Run",
    code: "WDD",
    category: "Offensive: Eagle",
    enabled: true
  },
  {
    name: "Eagle Airstrike",
    code: "WDSD",
    category: "Offensive: Eagle",
    enabled: true
  },
  {
    name: "Eagle Cluster Bomb",
    code: "WDSSD",
    category: "Offensive: Eagle",
    enabled: true
  },
  {
    name: "Eagle Napalm Strike",
    code: "WDSW",
    category: "Offensive: Eagle",
    enabled: true
  },
  {
    name: "Eagle Smoke Strike",
    code: "WDWS",
    category: "Offensive: Eagle",
    enabled: true
  },
  {
    name: "Eagle 110MM Rocket Pods",
    code: "WDWA",
    category: "Offensive: Eagle",
    enabled: true
  },
  {
    name: "Eagle 500kg Bomb",
    code: "WDSSS",
    category: "Offensive: Eagle",
    enabled: true
  },
  {
    name: "A/M-12 Mortar Sentry",
    code: "SWDDS",
    category: "Defensive",
    enabled: true
  },
  {
    name: "A/MG-43 Machine Gun Sentry",
    code: "SWDDW",
    category: "Defensive",
    enabled: true
  },
]


const missionStratagems = filterByCategory("Mission");
const orbitalStratagems = filterByCategory("Offensive: Orbital");
const eagleStratagems = filterByCategory("Offensive: Eagle");


//all of the stratagems are enabled by default
enableByCategory("all");
var selectedStratagems = getEnabledStratagems();


console.log(selectedStratagems);

var streak = 0;
var highestStreak = 0;

let checkboxes = document.querySelectorAll('input');
checkboxes = [...checkboxes];
checkboxes.forEach(element => {
  element.addEventListener('change', handleCheckboxOptions);
});


let ui_strat = document.getElementById("current_stratagem");
let ui_input = document.getElementById("user_input");
let ui_streak = document.getElementById("streak");
let ui_current_stratagem_name = document.getElementById("current_stratagem_name");
let ui_highest_streak = document.getElementById("record");
let ui_timer = document.getElementById("timer");
let stratagem_spans_container = document.getElementById("stratagem_spans_container");
<<<<<<< HEAD

//let audio = document.getElementById("audio");
=======
let inputElements = document.getElementsByTagName('input');
let audio = document.getElementById("audio");
>>>>>>> d3cdbaf0075d668acd702ec3029d0c982ef33212

let lastFrameTime = performance.now();
let gameOver = false;
let timer = 10;


var userInput = [];
var currentStratagem = selectedStratagems[0];

<<<<<<< HEAD
// var sound = new Audio('minimal-pop-click-ui-1-198301.mp3');
// var wrongInput = new Audio('buzzer-or-wrong-answer-20582.mp3');





ui_current_stratagem_name.textContent = `${currentStratagem.name}`
update_stratagem_code_ui();

=======
var sound = new Audio('minimal-pop-click-ui-1-198301.mp3');
var wrongInput = new Audio('buzzer-or-wrong-answer-20582.mp3');
ui_current_stratagem_name.textContent = `${currentStratagem.name}`
update_stratagem_code_ui();

//assign an event handle to all of the input tags (these hold the stratagem optons + others)
for (let i = 0; i < inputElements.length; i++) {
  const element = inputElements[i];
  element.addEventListener("change", handle_options);
}

function handle_options(event) {
  var newOptions;
  //on value change, check if the box is checked, if yes - push
  console.log(typeof(selectedStratagems));;
  switch (event.target.name) {
    case "mission_stratagems":
      if(event.target.checked) {
        console.log(event.target.name);
        selectedStratagems(filterByCategory("Mission"));
      }
  }
  
}


>>>>>>> d3cdbaf0075d668acd702ec3029d0c982ef33212
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

function getEnabledStratagems() {
  return STRATAGEMS.filter(stratagem => stratagem.enabled === true);
}

function filterByCategory(category) {
  return STRATAGEMS.filter(stratagem => {
    if (stratagem.category === category) {
    }
  });
}

function enableByCategory(category) {
  STRATAGEMS.map(stratagem => {
    if (category == "all") {
      stratagem.enabled = true;
    } else if (stratagem.category === category) {
      stratagem.enabled = true;
    }
  });
}

function disableByCategory(category) {
  STRATAGEMS.map(stratagem => {
    if (stratagem.category === category) {
      stratagem.enabled = false;
    }
  });
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
    //sound.cloneNode().play();

    //if the code is correct, react accordingly.
    if (JSON.stringify(userInput.toString()) === JSON.stringify(code.toString())) {
      flashCorrectBackground();
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
    flashIncorrectBackground()
    update_stratagem_code_ui();
    console.log(currentStratagem.code);
    //wrongInput.cloneNode().play();
    userInput = [];
    streak = 0;
    timer -= 1;
  }
}

function gameLoop() {

  const currentTime = performance.now();
  const deltaTime = (currentTime - lastFrameTime) / 1000; // Convert milliseconds to seconds

  updateGameState(deltaTime);

  lastFrameTime = currentTime;

  // Request next frame
  requestAnimationFrame(gameLoop);
}

function updateGameState(deltaTime) {
  var time;

  if (!gameOver) {
    time = timer -= deltaTime

    if (time <= 0) {
      time = 0.00;
      gameOver = true;
    }
  }
  else {
    time = 0.00;
    
  }


  ui_timer.innerText = parseFloat(time).toPrecision(3);
}

function reset() {
  timer = 10;
  streak = 0;
  userInput = [];
  gameOver = false;
  update_stratagem_code_ui();

}

function flashCorrectBackground() {
  var output = document.getElementById('output');
  output.classList.add("correctInputAnimation");
  
  setTimeout(function() {
    output.classList.remove("correctInputAnimation");
  }, 300)  
}

function flashIncorrectBackground() {
  var output = document.getElementById('output');
  output.classList.add("incorrectInputAnimation");
  
  setTimeout(function() {
    output.classList.remove("incorrectInputAnimation");
  }, 500)  
}

function handleCheckboxOptions(event) {
  //if I click a checkbox, figure out which was clicked and add them to the list
  console.log(event);
  console.log(event.target.id);

  let newSelections = [];
  switch (event.target.id) {
    case "mission_stratagems":
      if (event.target.checked) {
        enableByCategory("Mission");
      } else {
        disableByCategory("Mission");
      }
      break;

    case "defensive_stratagems":
      if (event.target.checked) {
        enableByCategory("Defensive");
      } else {
        disableByCategory("Defensive");
      }
      break;

    case "orbital_stratagems":
      if (event.target.checked) {
        enableByCategory("Offensive: Orbital");
      } else {
        disableByCategory("Offensive: Orbital");
      }
      break;

    case "eagle_stratagems":
      if (event.target.checked) {
        enableByCategory("Offensive: Eagle");

      } else {
        disableByCategory("Offensive: Eagle");
      }
      break;

    default:
      break;
  }
  selectedStratagems = getEnabledStratagems();
  console.log(selectedStratagems);
}
// Start the game loop
gameLoop();