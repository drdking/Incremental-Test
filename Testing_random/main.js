let score = 0;

const scoreDisplay = document.getElementById("score");
const clickBtn = document.getElementById("clickBtn");
const autoClickersDiv = document.getElementById("autoClickers");
const autoAmount = document.getElementById("idle_amount");

// Manual click
clickBtn.onclick = () => {
  score += 1;
  updateUI();
};

// Auto clicker definitions
const autoClickers = [
  {
    id: "slow",
    name: "Slow Clicker",
    cost: 25,
    cps: 0.5, // clicks per second
    owned: 0
  },
  {
    id: "medium",
    name: "Medium Clicker",
    cost: 100,
    cps: 2,
    owned: 0
  },
  {
    id: "fast",
    name: "Fast Clicker",
    cost: 300,
    cps: 5,
    owned: 0
  }
];

// Create buttons
autoClickers.forEach(clicker => {
  const btn = document.createElement("button");
  btn.id = clicker.id;
  btn.textContent = `${clicker.name} (Cost: ${clicker.cost})`;
  
  btn.onclick = () => buyClicker(clicker, btn);
  
  autoClickersDiv.appendChild(btn);
});

// Buying logic
function buyClicker(clicker, button) {
  if (score >= clicker.cost) {
    score -= clicker.cost;
    clicker.owned++;
    clicker.cost = Math.floor(clicker.cost * 1.5);


    let totalCPS = 0;

  autoClickers.forEach(clicker => {
    totalCPS += clicker.cps * clicker.owned;
  });
    autoAmount.textContent = "Auto Increase:" + totalCPS;
    console.log(totalCPS);
    button.textContent =
      `${clicker.name} (Owned: ${clicker.owned}, Cost: ${clicker.cost})`;

    updateUI();
  }
}
// _
// Game loop (runs 10 times per second)
setInterval(() => {
  let totalCPS = 0;

  autoClickers.forEach(clicker => {
    totalCPS += clicker.cps * clicker.owned;
  });

  score += totalCPS / 10;
  updateUI();
}, 100);

function updateUI() {
  scoreDisplay.textContent = Math.floor(score);
}
