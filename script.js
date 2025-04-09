// Set the date you’re counting down to
const targetDate = new Date("April 12, 2025 07:00:00").getTime();

const countdown = () => {
  const now = new Date().getTime();
  const gap = targetDate - now;

  if (gap <= 0) {
    document.getElementById("countdown").innerHTML = "Time's up!";
    return;
  }

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const d = Math.floor(gap / days);
  const h = Math.floor((gap % days) / hours);
  const m = Math.floor((gap % hours) / minutes);
  const s = Math.floor((gap % minutes) / seconds);

  document.getElementById("days").textContent = d;
  document.getElementById("hours").textContent = h;
  document.getElementById("minutes").textContent = m;
  document.getElementById("seconds").textContent = s;
};

setInterval(countdown, 1000);