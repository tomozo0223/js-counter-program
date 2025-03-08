(() => {
  const $counter = document.getElementById("js-counter")

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);
    if ($targetButton.textContent === "+") {
      $counter.textContent = currentCount + 1;
    } else {
      $counter.textContent = currentCount - 1;
    }

    //0以下になるとアラートを表示
    if ($targetButton.textContent === "-" && currentCount <= 0) {
      alert("0以下にすることはできません。");
      $counter.textContent = 0;
    }
  }

  for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
    document.getElementsByClassName("js-button")[index].addEventListener("click", (e) => clickHandler(e));
  }
})();
