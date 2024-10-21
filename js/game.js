$(function () {
  $("#openModal1").click(function () {
    $("#modalArea1").fadeIn();
  });
  $("#closeModal , #modalBg").click(function () {
    $("#modalArea1").fadeOut();
  });
});

$(function () {
  $("#openModal2").click(function () {
    $("#modalArea2").fadeIn();
  });
  $("#closeModal , #modalBg").click(function () {
    $("#modalArea2").fadeOut();
  });
});

$(function () {
  $("#openModal3").click(function () {
    $("#modalArea3").fadeIn();
  });
  $("#closeModal , #modalBg").click(function () {
    $("#modalArea3").fadeOut();
  });
});

document.getElementById("hono").addEventListener("click", function () {
  window.location.href = "boss1.html"; // 遷移先のURLを指定します
});

document.getElementById("mizu").addEventListener("click", function () {
  window.location.href = "boss2.html"; // 遷移先のURLを指定します
});

document.getElementById("kusa").addEventListener("click", function () {
  window.location.href = "boss3.html"; // 遷移先のURLを指定します
});
