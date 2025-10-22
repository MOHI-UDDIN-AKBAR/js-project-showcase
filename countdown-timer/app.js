// DOM ELEMENTS
const dateTimeEl = document.querySelector(".countdown-timer__date");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// CONSTANTS
const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Set the giveaway to end 10 days from now at 11:30am
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 10);
futureDate.setHours(11, 30, 0, 0);

// FUNCTIONS
// Format date into readable text
function formateDate(date) {
  const dayName = WEEK_DAYS[date.getDay()];
  const day = date.getDate();
  const month = date.toLocaleDateString("en-us", {
    month: "long",
  });
  const year = date.getFullYear();
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${dayName}, ${day} ${month} ${year} - ${time}`;
}

// Update the "giveaway end on" text
function updateEndDateDisplay(date) {
  dateTimeEl.dateTime = date.toISOString();
  dateTimeEl.textContent = formateDate(date);
}

// Calculate remaining time
function calculateTimeRemaining(current, target) {
  const diff = target - current;
  if (diff <= 0) return null;

  const msPerDay = 1000 * 60 * 60 * 24;
  const msPerHour = 1000 * 60 * 60;
  const msPerMinute = 1000 * 60;

  return {
    days: Math.floor(diff / msPerDay),
    hours: Math.floor((diff % msPerDay) / msPerHour),
    minutes: Math.floor((diff % msPerHour) / msPerMinute),
    seconds: Math.floor((diff % msPerMinute) / 1000),
  };
}

function padZero(num) {
  if (num >= 10) return num;

  return `0${num}`;
}

function renderCountDown(time) {
  if (!time) {
    document.querySelector(
      ".countdown-timer__countdown"
    ).innerHTML = `<h3 class="countdown-timer__expired">Giveaway has ended</h3>`;
  }

  daysEl.textContent = padZero(time.days);
  hoursEl.textContent = padZero(time.hours);
  minutesEl.textContent = padZero(time.minutes);
  secondsEl.textContent = padZero(time.seconds);
}

//  Main countdown loop
function startCountDown() {
  updateEndDateDisplay(futureDate);

  const intervalId = setInterval(() => {
    const now = new Date();
    const timeRemaining = calculateTimeRemaining(now, futureDate);
    if (!timeRemaining) {
      renderCountDown(null);
      clearInterval(intervalId);
      return;
    }

    renderCountDown(timeRemaining);
  }, 1000);
}

startCountDown();
