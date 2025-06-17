const display = document.getElementById('display');
  let calculated = false; // flag to detect if '=' was pressed

  function press(val) {
    if (calculated) {
      display.value = '';  // clear display if new input after calculation
      calculated = false;
    }
    display.value += val;
  }

  function calculate() {
    try {
      const expression = display.value;
      const result = eval(expression);
      display.value = result;
      calculated = true;
      addToHistory(expression + " = " + result);
    } catch {
      display.value = "Error";
      calculated = true;
    }
  }

  function addToHistory(entry){
    const historyList = document.getElementById("historyList");
    const li = document.createElement("li");
    li.textContent = entry;
    historyList.prepend(li); // adds newest entry to the top


    // limit to 5 items
    while (historyList.children.length > 5){
      historyList.removeChild(historyList.lastChild);
    }

    saveHistory();
  }

  function clearDisplay() {
    display.value = '';
    calculated = false;
  }

  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }

  function backspace() {
    display.value = display.value.slice(0, -1);
  }

  document.addEventListener('keydown', function (e) {
    const key = e.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
      press(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      backspace();
    } else if (key.toLowerCase() === 'c') {
      clearDisplay();
    }
  });

  function clearHistory(){
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = "";
    localStorage.removeItem("calcHistory");
  }

  // Save/Load History with localStorage
  function saveHistory(){
    const historyItems = Array.from(document.querySelectorAll("#historyList li")).map(li => li.textContent);
    localStorage.setItem("calcHistory", JSON.stringify(historyItems));
  }

  function loadHistory(){
    const saved = localStorage.getItem("calcHistory");
    if (saved){
      const historyList = document.getElementById("historyList");
      const entries = JSON.parse(saved);
      entries.forEach(entry =>{
        const li = document.createElement("li");
        li.textContent = entry;
        historyList.appendChild(li);
      });
    }
  }

  // Load history when the page loads
  window.onload = function (){
    loadHistory();

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark'){
      document.body.classList.add('dark-mode');
    }
  }