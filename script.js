//DOM elements
let timerValue = document.getElementById("timer");
let levelValue = document.getElementById("level");
let scoreValue = document.getElementById("score");
let highScoreValue = document.getElementById("high-score");
let currentWord = document.getElementById("current-word");
let inputWord = document.getElementById("input-word");
let start = document.getElementById("start-button");
let alertMessage = document.getElementById("alert");
let restart = document.getElementById("restart-button")



window.onload = function(){
  
  let level = 0;
  let index = 0;
  let timer = 6 - level;
  let score = 0;
  let highScore = 0;
  inputWord.value = "";

  //words
  let words = [['splendid', 'waffle', 'anger', 'gargle', 'fragile', 'believe', 'recess', 'concern', 'hesitant', 'rotten', 'prefer', 'pick','letter', 'enormous', 'compete', 'dangerous', 'envious', 'thrill', 'zephyr', 'bent', 'oil', 'holiday', 'plot', 'canvas','neat', 'cycle', 'flood', 'instinctive', 'boy', 'introduce', 'change', 'murder', 'string', 'outstanding', 'vengeful', 'furry','pleasure', 'eager', 'rain', 'bells', 'marked', 'skip', 'enchanted', 'meddle', 'bear', 'upbeat', 'zoo', 'sudden'],
                ['publicity', 'think', 'omission', 'horseshoe', 'specimen', 'presidential', 'palace', 'unrest', 'coverage', 'battle', 'belong', 'cooperative', 'survivor', 'harvest', 'shake', 'manufacture', 'pause', 'rebellion', 'restless', 'production', 'social', 'distortion', 'ticket', 'congress', 'extent', 'dance', 'update', 'forget', 'create', 'pneumonia', 'rifle', 'scenario', 'decade', 'flash', 'epicalyx', 'tumble', 'quality', 'allowance', 'amber', 'invisible', 'dealer', 'chalk', 'admiration', 'harass', 'disappointment', 'accompany', 'abbey', 'justify'],
                ['abstract', 'palace', 'conceive', 'prevalence', 'common', 'prayer', 'crystal', 'computer', 'complex', 'barrier', 'suppress', 'country', 'transmission', 'welcome', 'transport', 'understand', 'unanimous', 'follow', 'loyalty', 'embryo', 'communist', 'offense', 'provoke', 'resort', 'decoration', 'thinker', 'flight', 'penalty', 'vegetable', 'federation', 'environmental', 'default', 'thread', 'reward', 'button', 'garbage', 'affair', 'effect', 'diamond', 'predict', 'classify', 'planet', 'predator', 'royalty', 'immune', 'intensify', 'license', 'medicine'],
                ['repulsive', 'nonchalant', 'past', 'yarn', 'slave', 'moor', 'laborer', 'hobbies', 'juvenile', 'ad hoc', 'knot', 'pollution', 'super', 'amused', 'underwear', 'torpid', 'scintillating', 'badge', 'tap', 'numberless', 'optimal', 'meaty', 'absorbing', 'arithmetic', 'science', 'brash', 'limit', 'dogs', 'immense', 'church', 'observant', 'bore', 'moon', 'ambitious', 'cumbersome', 'lucky', 'share', 'careful', 'outrageous', 'bike', 'pretend', 'tasty', 'powerful', 'competition', 'wet', 'painful', 'hook', 'van'],
                ['leader', 'classify', 'tenant', 'winner', 'create', 'shake', 'assertive', 'evolution', 'lease', 'closed', 'consideration', 'jelly', 'consensus', 'negative', 'qualify', 'relinquish', 'rescue', 'forestry', 'circulate', 'finish', 'accessible', 'diameter', 'inflate', 'command', 'hilarious', 'excess', 'linear', 'chase', 'mayor', 'urine', 'leadership', 'quest', 'guerrilla', 'terms', 'jealous', 'species', 'offense', 'specimen', 'discrimination', 'community', 'crack', 'understand', 'advance', 'agreement', 'Europe', 'mouse', 'software', 'reason'],
                ['announcement', 'college', 'decoration', 'mainstream', 'bloody', 'relaxation', 'finished', 'danger', 'deposit', 'exceed', 'instinct', 'kidney', 'concede', 'admission', 'magnetic', 'royalty', 'responsibility', 'inject', 'peasant', 'possession', 'degree', 'plaster', 'compartment', 'gossip', 'assumption', 'length', 'material', 'socialist', 'automatic', 'effect', 'provision', 'glasses', 'humanity', 'stretch', 'patrol', 'orthodox', 'mother', 'determine', 'uniform', 'debate', 'scheme', 'referee', 'charismatic', 'federation', 'motorcycle', 'pioneer', 'hilarious', 'fisherman']]

  start.addEventListener("click",startGame);


  function startGame() {
    start.style.visibility = "hidden";
    inputWord.value = "";
    inputWord.focus();

    //display word
    displayWord(level, index);

    inputWord.addEventListener("input",matchWord);

    //timer
    
    timerInterval = setInterval(setTimer,1000);

    
  }

  function displayWord(){
    pointer = Math.floor(Math.random()*48);
    let word = words[level][pointer];
    index++;
    currentWord.innerText = word;
    timer = 6 - level;
    timerValue.value = timer;

  }

  function setTimer(){
    if(timer>0)
    timer--;

    timerValue.innerText = timer;

    if(timer==0)
    {
      clearInterval(timerInterval);
      alertMessage.style.color = "rgba(248,7,39)";
      alertMessage.style.fontSize = "40px";
      alertMessage.innerText = "GAME OVER!";
      currentWord.innerText = "Click Restart to play again.";
      restart.style.visibility = "visible";
      restart.addEventListener("click",restartGame);
        
    }

  }

  function restartGame(){
    alertMessage.innerText = "";
    restart.style.visibility = "hidden";
    changeLevel(0);
    timer = 6 - level;
    index = 0;
    score = 0;
    scoreValue.innerText = 0;
    timerValue.value = timer;
    inputWord.innerText = "";
    startGame();

  }

  function matchWord(){
    //console.log(currentWord.innerText);
    //console.log(inputWord.value)
    alertMessage.innerText="";
    if(currentWord.innerText === inputWord.value)
    {
      //console.log(index);
      if(index===5)
        {
          index = 0;
          changeLevel(level+1);
        }
      alertMessage.style.color = "rgba(46,206,61)";
      alertMessage.style.fontSize = "30px";
      alertMessage.innerText = "Correct!"
      setScore();
      setHighScore();
      inputWord.value = "";
      displayWord();
    }
  }

  function setScore(){
    score=score+timer;
    scoreValue.innerText = score;
  }

  function setHighScore(){
    if(highScore < score)
      highScore = score;
    highScoreValue.innerText = highScore;
  }

  function changeLevel(newLevel){
    level = newLevel;
    levelValue.innerText = level;
  }
}
