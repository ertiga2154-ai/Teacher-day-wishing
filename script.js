const lines = [
    "Loading teacher_mentorship_module...",
    "Importing passion, patience, and logic...",
    "Status: 100% Inspired.",
    "Ready to execute compilation..."
];

let lineIndex = 0;
let charIndex = 0;
const outputDiv = document.getElementById("output");

function typeText() {
    if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
            outputDiv.innerHTML += lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 40);
        } else {
            outputDiv.innerHTML += "<br>";
            lineIndex++;
            charIndex = 0;
            setTimeout(typeText, 300);
        }
    }
}

window.onload = typeText;

function celebrate() {
    document.getElementById("wishBtn").style.display = "none";
    document.getElementById("finalMessage").style.display = "block";
    createConfetti();
}

function createConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 80 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        color: ['#58a6ff', '#7ee787', '#ffbd2e', '#ff5f56'][Math.floor(Math.random() * 4)],
        size: Math.random() * 6 + 2,
        speed: Math.random() * 3 + 2
    }));

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            p.y += p.speed;
            if (p.y > canvas.height) p.y = 0;
        });
        requestAnimationFrame(draw);
    }
    draw();
}
