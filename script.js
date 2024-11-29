document.addEventListener("DOMContentLoaded", () => {
  const advancedToggle = document.getElementById("advancedToggle");
  const advancedOptions = document.getElementById("advancedOptions");
  const items = document.getElementById("items");

  advancedToggle.checked = false;

  advancedToggle.addEventListener("change", () => {
    if (advancedToggle.checked) {
      advancedOptions.style.display = "block";
      const customOption = document.createElement("option");
      customOption.value = "custom";
      customOption.text = "Custom Item";
      items.add(customOption);
    } else {
      advancedOptions.style.display = "none";
      const customOption = items.querySelector('option[value="custom"]');
      if (customOption) {
        items.removeChild(customOption);
      }
    }
  });

  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const value = parseFloat(document.getElementById("dollars").value);
    const cents = value * 100;
    const imageDiv = document.getElementById("image");
    const item = items.value;

    const coinValues = {
      quarter: 25,
      dime: 10,
      nickel: 5,
      penny: 1,
      taki: 375,
    };

    if (item === "custom") {
      const customValue =
        parseFloat(document.getElementById("customValue").value) * 100;
      const customName = document.getElementById("customName").value;
      const customImage = document.getElementById("customImage").value;

      coinValues.custom = customValue;
      const numberOfItems = Math.floor(cents / customValue);

      imageDiv.innerHTML = "";
      for (let i = 0; i < numberOfItems; i++) {
        const img = document.createElement("img");
        img.src = customImage;
        img.alt = customName;
        img.style.width = "75px";
        img.style.height = "75px";
        img.style.margin = "5px";
        imageDiv.appendChild(img);
      }
      return;
    }

    const numberOfCoins = Math.floor(cents / coinValues[item]);
    imageDiv.innerHTML = "";

    for (let i = 0; i < numberOfCoins; i++) {
      const img = document.createElement("img");
      img.src = `${item}.png`;
      img.style.width = "75px";
      img.style.height = "75px";
      img.style.margin = "5px";
      imageDiv.appendChild(img);
    }
  });
});
