"use strict";

document.querySelector(".current-day").textContent =
  new Date().toLocaleDateString("en-US", { weekday: "long" });

setInterval(function () {
  const newUTCTime = new Date().getTime();
  document.querySelector(".utc-time").textContent = new Date().getTime();
}, 1000);
