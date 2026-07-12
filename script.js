document.getElementById("submitBtn").addEventListener("click", gradeQuiz);

function gradeQuiz() {

    let score = 0;
    let results = "";

    // Question 1
    let q1 = document.getElementById("q1").value.trim().toLowerCase();

    if (q1 === "hypertext transfer protocol") {
        score++;
        results += "<p style='color:green;'>Question 1: Correct ✔</p>";
    } else {
        results += "<p style='color:red;'>Question 1: Incorrect ✘<br>Correct Answer: Hypertext Transfer Protocol</p>";
    }

    // Question 2

    let q2 = document.querySelector('input[name="q2"]:checked');

    if (q2 && q2.value === "GET") {
        score++;
        results += "<p style='color:green;'>Question 2: Correct ✔</p>";
    } else {
        results += "<p style='color:red;'>Question 2: Incorrect ✘<br>Correct Answer: GET</p>";
    }

    // Question 3

    let q3 = document.querySelector('input[name="q3"]:checked');

    if (q3 && q3.value === "HTTPS") {
        score++;
        results += "<p style='color:green;'>Question 3: Correct ✔</p>";
    } else {
        results += "<p style='color:red;'>Question 3: Incorrect ✘<br>Correct Answer: HTTPS</p>";
    }

    // Question 4

    let q4 = document.querySelector('input[name="q4"]:checked');

    if (q4 && q4.value === "404") {
        score++;
        results += "<p style='color:green;'>Question 4: Correct ✔</p>";
    } else {
        results += "<p style='color:red;'>Question 4: Incorrect ✘<br>Correct Answer: 404</p>";
    }

    // Question 5

    let get = document.getElementById("get").checked;
    let post = document.getElementById("post").checked;
    let put = document.getElementById("put").checked;
    let jpeg = document.getElementById("jpeg").checked;
    let css = document.getElementById("css").checked;

    if (get && post && put && !jpeg && !css) {
        score++;
        results += "<p style='color:green;'>Question 5: Correct ✔</p>";
    } else {
        results += "<p style='color:red;'>Question 5: Incorrect ✘<br>Correct Answers: GET, POST, PUT</p>";
    }

    // Pass or Fail

    let finalResult = "";

    if (score >= 4) {
        finalResult = "<h2 style='color:green;'>PASS</h2>";
    } else {
        finalResult = "<h2 style='color:red;'>FAIL</h2>";
    }

    document.getElementById("results").innerHTML =
        finalResult +
        "<h3>Score: " + score + " / 5</h3>" +
        results;

}
document.getElementById("resetBtn").addEventListener("click", function () {
    document.getElementById("results").innerHTML =
        "Your results will appear here after you submit the quiz.";
});