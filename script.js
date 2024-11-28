document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const value = document.querySelector("input").value;
    const cents = value * 100;
    const coinDiv = document.getElementById("coins");
    const coinType = document.getElementById("coinType").value;

    const coinValues = {
      quarter: 25,
      dime: 10,
      nickel: 5,
      penny: 1,
    };

    const numberOfCoins = Math.ceil(cents / coinValues[coinType]);

    coinDiv.innerHTML = "";
    document.getElementById("coinType")
    console.log(value);
    for (let i = 0; i < numberOfCoins; i++) {
      const img = document.createElement("img");
      img.src = `${coinType}.png`;
      img.style.width = "75px";
      img.style.height = "75px";
      img.style.margin = "5px";
      coinDiv.appendChild(img);
    }
  });
});
