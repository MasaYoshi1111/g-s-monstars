let bossHp = 50;
let playerHp = 50;

const bossImages = ["img/mfire.png", "img/msanda.png", "img/mfuriza.png"];
const bossMonster = document.getElementById("bossMonster");
bossMonster.src = bossImages[Math.floor(Math.random() * bossImages.length)];

function getRandomAction() {
  return Math.ceil(Math.random() * 3); // 1: グー, 2: チョキ, 3: パー
}

function updateHp(damage, target) {
  if (target === "boss") {
    bossHp -= damage;
    if (bossHp < 0) bossHp = 0;
    document.getElementById("bossHp").textContent = bossHp;
    if (bossHp === 0) {
      document.getElementById("result").textContent = "ボスを倒しました！";
    }
  } else if (target === "player") {
    playerHp -= damage;
    if (playerHp < 0) playerHp = 0;
    document.getElementById("playerHp").textContent = playerHp;
    if (playerHp === 0) {
      document.getElementById("result").textContent = "あなたは倒されました…";
    }
  }
}

function determineDamage(playerAction, enemyAction) {
  let resultText = "";
  if (
    (playerAction === 1 && enemyAction === 3) || // グー vs パー
    (playerAction === 2 && enemyAction === 1) || // チョキ vs グー
    (playerAction === 3 && enemyAction === 2)
  ) {
    // パー vs チョキ
    resultText = "負け";
    return { player: 10, enemy: 0, result: resultText };
  } else if (
    (playerAction === 3 && enemyAction === 1) || // パー vs グー
    (playerAction === 1 && enemyAction === 2) || // グー vs チョキ
    (playerAction === 2 && enemyAction === 3)
  ) {
    // チョキ vs パー
    resultText = "勝ち";
    return { player: 0, enemy: 10, result: resultText };
  } else {
    resultText = "アイコ";
    return { player: 0, enemy: 0, result: resultText }; // 同じ手の場合
  }
}

function handlePlayerAction(playerAction) {
  const enemyAction = getRandomAction();
  const actions = ["", "グー", "チョキ", "パー"];
  const damage = determineDamage(playerAction, enemyAction);

  updateHp(damage.enemy, "boss");
  updateHp(damage.player, "player");

  document.getElementById(
    "battleResult"
  ).textContent = `あなた: ${actions[playerAction]} ボス: ${actions[enemyAction]} - 結果: ${damage.result}`;
}

document.getElementById("rockBtn").addEventListener("click", function () {
  handlePlayerAction(1); // グー
});

document.getElementById("scissorsBtn").addEventListener("click", function () {
  handlePlayerAction(2); // チョキ
});

document.getElementById("paperBtn").addEventListener("click", function () {
  handlePlayerAction(3); // パー
});
