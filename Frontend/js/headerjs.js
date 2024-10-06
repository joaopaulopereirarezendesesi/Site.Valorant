document.addEventListener("DOMContentLoaded", () => {
  let winrateText = document.getElementById("winrate").textContent;
  let winrate = parseFloat(winrateText.replace("%", "").replace(",", "."));

  animatePercentage(winrate);
});

function animatePercentage(targetPercentage) {
  const percentageElement = document.getElementById("winrate");
  let currentPercentage = 0;
  const duration = 2000;
  const totalSteps = duration / 16;
  const initialIncrement = targetPercentage / totalSteps;

  const interval = setInterval(() => {
    const easingFactor = Math.pow(currentPercentage / targetPercentage, 3);
    const increment = initialIncrement * (1 - easingFactor);

    currentPercentage = Math.min(
      currentPercentage + increment,
      targetPercentage
    );

    percentageElement.textContent = formatNumber(currentPercentage) + "%";

    updateColor(percentageElement, currentPercentage);

    if (currentPercentage >= targetPercentage) {
      clearInterval(interval);
      updateResult(targetPercentage);
    }
  }, 16);
  updateResult(winrate);
}

function formatNumber(number) {
  return number.toFixed(2).replace(".", ",");
}

function updateColor(element, percentage) {
  const red = Math.round((1 - percentage / 100) * 255);
  const green = Math.round((percentage / 100) * 255);
  element.style.color = `rgb(${red}, ${green}, 0)`;
}

function updateResult(percentage) {
  const resultElement = document.getElementById("result");
  resultElement.style.opacity = 0;
  resultElement.textContent = percentage > 50 ? "Attack" : "Defense";

  resultElement.style.color = percentage > 50 ? "red" : "blue";

  fadeIn(resultElement);
}

function fadeIn(element) {
  let opacity = 0;
  element.style.opacity = opacity;

  const fadeInterval = setInterval(() => {
    opacity += 0.02;
    element.style.opacity = opacity;

    if (opacity >= 1) {
      clearInterval(fadeInterval);
    }
  }, 16);
}
