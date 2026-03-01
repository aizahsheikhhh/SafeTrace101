// Dashboard URL Analyzer (placeholder logic)
function analyzeURL() {
  const url = document.getElementById("urlInput").value;
  const result = document.getElementById("riskResult");

  if (!url) {
    result.innerText = "⚠️ Please enter a URL!";
    return;
  }

  // Simple risk logic
  let risk = "Low Risk";
  if (url.includes("http://") || url.includes("suspicious")) risk = "High Risk";

  result.innerHTML = `<strong>URL:</strong> ${url} <br> <strong>Risk Level:</strong> ${risk}`;
}

// Quiz Function
function checkQuiz() {
  const options = document.getElementsByName("quiz");
  let correct = false;
  options.forEach(opt => {
    if (opt.checked && opt.value === "correct") correct = true;
  });

  const result = document.getElementById("quizResult");
  if (correct) result.innerText = "🎉 Correct! You're digitally safe.";
  else result.innerText = "⚠️ Oops! Review the safety tips above.";
}
