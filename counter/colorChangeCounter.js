(() => {
  const $counter = document.getElementById("js-counter");

  const colorChangeCounter = () => {
    const currentCount = parseInt($counter.textContent);
    if (currentCount % 10 === 0) {
      $counter.style.background = "#ccc";
      $counter.style.transition = "0.5s";
    } else {
      $counter.style.background = "#fff";
      $counter.style.transition = "0.5s";
    }
  }

  for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
    document.getElementsByClassName("js-button")[index].addEventListener("click", () => colorChangeCounter());
  }
})();
