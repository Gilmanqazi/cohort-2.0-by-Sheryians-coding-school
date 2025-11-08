//Project - 1 - Randon Quotes
const quotes = [
  "The best way to predict the future is to create it. — Peter Drucker",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "It always seems impossible until it’s done. — Nelson Mandela",
  "You miss 100% of the shots you don’t take. — Wayne Gretzky",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream big. Work hard. Stay humble.",
  "Do what you can, with what you have, where you are. — Theodore Roosevelt",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. — Roy T. Bennett",
  "In the middle of every difficulty lies opportunity. — Albert Einstein",
  "Happiness is not something ready-made. It comes from your own actions. — Dalai Lama",
  "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
  "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
  "Don’t limit your challenges. Challenge your limits.",
  "Act as if what you do makes a difference. It does. — William James",
  "Success is the sum of small efforts repeated day in and day out. — Robert Collier",
  "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
  "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
  "Little by little, one travels far. — J.R.R. Tolkien"
];

const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", ()=>{
Math.floor(Math.random()*20);
  h1.textContent = quotes[index];
})