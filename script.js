// =========================
// Background Music
// =========================

const music = document.getElementById("bgMusic");
let playing = false;

function toggleMusic() {

    if (!playing) {
        music.play();
        playing = true;
    } else {
        music.pause();
        playing = false;
    }

}

// =========================
// Scroll
// =========================

function scrollDown() {

    window.scrollTo({

        top: window.innerHeight,

        behavior: "smooth"

    });

}

// =========================
// Secret Letter
// =========================

function showLetter() {

    document.getElementById("hiddenLetter").style.display = "block";

}

// =========================
// Floating Hearts
// =========================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    heart.style.fontSize = (18 + Math.random() * 20) + "px";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 500);

// =========================
// Falling Petals
// =========================

function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "%";

    petal.style.animationDuration = (5 + Math.random() * 6) + "s";

    petal.style.fontSize = (18 + Math.random() * 15) + "px";

    document.querySelector(".petals").appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 12000);

}

setInterval(createPetal, 800);

// =========================
// Auto Fade Animation
// =========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

});

document.querySelectorAll(".glass").forEach(box => {

    box.style.opacity = "0";

    box.style.transform = "translateY(70px)";

    box.style.transition = "1s";

    observer.observe(box);

});

// =========================
// Welcome Effect
// =========================

window.onload = () => {

    setTimeout(() => {

        alert("❤️ Welcome ❤️");

    }, 700);

};

// =========================
// Sparkle Cursor
// =========================

document.addEventListener("mousemove", e => {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";

    sparkle.style.left = e.clientX + "px";

    sparkle.style.top = e.clientY + "px";

    sparkle.style.pointerEvents = "none";

    sparkle.style.fontSize = "16px";

    sparkle.style.opacity = "1";

    sparkle.style.transition = "1s";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.style.opacity = "0";

        sparkle.style.transform = "translateY(-20px)";

    }, 50);

    setTimeout(() => {

        sparkle.remove();

    }, 1000);

});