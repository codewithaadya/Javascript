// ==========================================
// JAVASCRIPT LABORATORY SHOWCASE
// ==========================================


// ---------- CURRENT YEAR ----------

const yearElement = document.getElementById("year");

const currentYear = new Date().getFullYear();

yearElement.textContent = currentYear;


// ---------- DARK MODE ----------

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


// ---------- REMEMBER THEME ----------

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeButton.textContent = "☀️";

}


// ---------- ACTIVE NAVIGATION ----------

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ---------- CONSOLE MESSAGE ----------

console.log("=================================");
console.log("JavaScript Laboratory Showcase");
console.log("Student: Aadya Gupta");
console.log("Course: BCA");
console.log("University: DSVV");
console.log("=================================");