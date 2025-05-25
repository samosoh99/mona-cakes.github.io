document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("readMoreBtn");
  const fullText = document.querySelector(".history-full");

  btn.addEventListener("click", function () {
    fullText.classList.toggle("hidden");

    if (fullText.classList.contains("hidden")) {
      btn.textContent = "Read More ↓";
    } else {
      btn.textContent = "Show Less ↑";
    }
  });
});