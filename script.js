document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("test").addEventListener("submit", function (event) {
    event.preventDefault();
    const input = document.querySelector("input");
    const value = input.value;
    const coinDiv = document.getElementById("coins");
    console.log(value);
    for (let i = 0; i < value; i++) {
      const img = document.createElement("img");
      img.src = "penny.png"
      img.style.width = "50px";
      img.style.height = "50px";
      img.style.margin = "5px";
      coinDiv.appendChild(img);
    }
  });
});
