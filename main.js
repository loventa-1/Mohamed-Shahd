// ====================== DYNAMIC VARIABLES (change later easily) ======================
// You can edit these variables to customize names, date, location, image, music source
const CONFIG = {
  groomName: "Mohamed",
  brideName: "Shahd",
  weddingDate: "Saturday, September 12, 2026",
  weddingTime: "7:00 PM",
  venueName: "See Nile",
  venueMapLink:
    "https://www.google.com/maps/place/%D9%82%D8%A7%D8%B9%D8%A9+%D8%A7%D9%81%D8%B1%D8%A7%D8%AD+See+nile%E2%80%AD/@30.1065611,31.2195175,19.29z/data=!4m6!3m5!1s0x145841eb3ab134fd:0x64e4cb90182bf56!8m2!3d30.1067063!4d31.2190874!16s%2Fg%2F11tf4rj2g8?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D", // location url
  imageUrl: "assets/images/couple.webp", // replace with actual romantic image
  musicUrl: "assets/music/music.mp3", // soft piano / instrumental (change to your own)
  romanticMessage: "We are waiting for you to celebrate with us",
  // TIMER CONFIGURATION - set your wedding date and time here
  timerTargetDate: "September 12, 2026 19:00:00", // Year-Month-Day Hour:Minute:Second (9:00 PM)

  // ========== NEW SOCIAL MEDIA & CONTACT CONFIG ==========
  // Phone number (will be displayed and clickable)
  phoneNumber: "+201505646406",
  phoneLink: "tel:+201505646406", // for click-to-call

  // Social Media Links (put your full URLs here)
  socialLinks: {
    whatsapp: {
      url: "https://wa.me/201505646406", // WhatsApp number with country code
      label: "WhatsApp",
      icon: "fab fa-whatsapp",
    },
    tiktok: {
      url: "https://www.tiktok.com/@loventa68",
      label: "TikTok",
      icon: "fab fa-tiktok",
    },
    instagram: {
      url: "https://www.instagram.com/love__nta",
      label: "Instagram",
      icon: "fab fa-instagram",
    },
    facebook: {
      url: "https://www.facebook.com/profile.php?id=61565289157594&mibextid=wwXIfr&rdid=LvOEQfQIXRkCukV0&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Ck7EUrzmW%2F%3Fmibextid%3DwwXIfr#",
      label: "Facebook",
      icon: "fab fa-facebook-f",
    },
  },
  // ========== END SOCIAL MEDIA CONFIG ==========
};

// DOM elements
const hookScreen = document.getElementById("hookScreen");
const mainCard = document.getElementById("mainCard");
const tapBtn = document.getElementById("tapToOpenBtn");
const locationBtn = document.getElementById("locationBtn");
const bgMusic = document.getElementById("bgMusic");
const musicToggleDiv = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");
const musicStatusSpan = document.getElementById("musicStatus");
const weddingImg = document.getElementById("weddingImage");

// Timer DOM elements
const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");

// Apply config variables to the page content dynamically (so user can change later)
function applyDynamicContent() {
  // update names in big-names section
  const namesContainer = document.querySelector(".big-names");
  if (namesContainer) {
    namesContainer.innerHTML = `${CONFIG.groomName} <span class="heart-icon">❤️</span> ${CONFIG.brideName}`;
  }
  // update date block
  const dateValueDiv = document.querySelector(".date-value");
  if (dateValueDiv) {
    dateValueDiv.innerHTML = `<i class="fas fa-star-of-life"></i>  ${CONFIG.weddingDate}  <i class="fas fa-star-of-life"></i>`;
    const timeSpan = document.querySelector(".wedding-time-text");
    if (timeSpan) {
      timeSpan.innerHTML = `at ${CONFIG.weddingTime} · sunset ceremony`;
    }
  }
  // update location text
  const hallPlace = document.querySelector(".hall-place");
  if (hallPlace) {
    hallPlace.innerHTML = `🌹 ${CONFIG.venueName} 🌹`;
  }
  // update message
  const msgParagraph = document.querySelector(".message-card p");
  if (msgParagraph) {
    msgParagraph.innerHTML = `✨ “${CONFIG.romanticMessage}” ✨`;
  }
  // update image source
  if (weddingImg) {
    weddingImg.src = CONFIG.imageUrl;
    weddingImg.alt = `${CONFIG.groomName} & ${CONFIG.brideName} wedding`;
  }
  // update music source
  if (bgMusic) {
    bgMusic.src = CONFIG.musicUrl;
    bgMusic.load();
  }
  // update location button link (view location)
  if (locationBtn) {
    locationBtn.onclick = (e) => {
      e.preventDefault();
      window.open(CONFIG.venueMapLink, "_blank");
      // zoom effect on tap
      locationBtn.style.transform = "scale(0.96)";
      setTimeout(() => {
        locationBtn.style.transform = "";
      }, 150);
    };
  }

  // ========== APPLY FOOTER DATA ==========
  // Update phone number
  const phoneDisplay = document.getElementById("phoneNumberDisplay");
  if (phoneDisplay) {
    phoneDisplay.textContent = CONFIG.phoneNumber;
    // Make phone number clickable
    const phoneContainer = document.querySelector(".footer-phone");
    if (phoneContainer) {
      phoneContainer.style.cursor = "pointer";
      phoneContainer.onclick = () => {
        window.location.href = CONFIG.phoneLink;
      };
    }
  }

  // Generate social media icons dynamically
  const socialContainer = document.getElementById("socialLinksContainer");
  if (socialContainer) {
    socialContainer.innerHTML = ""; // Clear existing

    // Define social platforms with their specific classes for hover effects
    const platformClasses = {
      whatsapp: "whatsapp",
      tiktok: "tiktok",
      instagram: "instagram",
      facebook: "facebook",
    };

    // Loop through socialLinks object
    Object.keys(CONFIG.socialLinks).forEach((key) => {
      const social = CONFIG.socialLinks[key];
      const platformClass = platformClasses[key] || "";

      // Create anchor element
      const link = document.createElement("a");
      link.href = social.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = `social-link ${platformClass}`;
      link.setAttribute("aria-label", social.label);

      // Create icon
      const icon = document.createElement("i");
      icon.className = social.icon;
      link.appendChild(icon);

      // Create label (appears on hover)
      const label = document.createElement("span");
      label.className = "social-label";
      label.textContent = social.label;
      link.appendChild(label);

      socialContainer.appendChild(link);
    });
  }
  // ========== END FOOTER DATA ==========
}

// ====================== COUNTDOWN TIMER FUNCTION ======================
let countdownInterval = null;

function startCountdown() {
  const targetDate = new Date(CONFIG.timerTargetDate).getTime();

  if (isNaN(targetDate)) {
    console.error(
      "Invalid target date format. Please use a valid date string.",
    );
    if (daysSpan) daysSpan.innerText = "??";
    if (hoursSpan) hoursSpan.innerText = "??";
    if (minutesSpan) minutesSpan.innerText = "??";
    if (secondsSpan) secondsSpan.innerText = "??";
    return;
  }

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      // Timer expired
      if (daysSpan) daysSpan.innerText = "00";
      if (hoursSpan) hoursSpan.innerText = "00";
      if (minutesSpan) minutesSpan.innerText = "00";
      if (secondsSpan) secondsSpan.innerText = "00";
      if (countdownInterval) clearInterval(countdownInterval);

      // Optional: Show "The Big Day is Here!" message in countdown label
      const countdownLabel = document.querySelector(".countdown-label");
      if (countdownLabel && distance < 0) {
        countdownLabel.innerHTML =
          '<i class="fas fa-heart"></i> TODAY IS THE DAY! <i class="fas fa-heart"></i>';
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysSpan) daysSpan.innerText = days < 10 ? "0" + days : days;
    if (hoursSpan) hoursSpan.innerText = hours < 10 ? "0" + hours : hours;
    if (minutesSpan)
      minutesSpan.innerText = minutes < 10 ? "0" + minutes : minutes;
    if (secondsSpan)
      secondsSpan.innerText = seconds < 10 ? "0" + seconds : seconds;
  }

  updateTimer(); // initial call
  if (countdownInterval) clearInterval(countdownInterval);
  countdownInterval = setInterval(updateTimer, 1000);
}

// Music handling (start softly after opening)
let musicPlaying = false;
let musicStarted = false;

function enableMusic() {
  if (!musicStarted) {
    bgMusic.volume = 0.45;
    bgMusic
      .play()
      .then(() => {
        musicPlaying = true;
        musicStarted = true;
        updateMusicUI(true);
      })
      .catch((err) => {
        console.log("autoplay blocked, user interaction needed");
        musicPlaying = false;
        updateMusicUI(false);
      });
  } else {
    if (musicPlaying) {
      bgMusic.pause();
      musicPlaying = false;
      updateMusicUI(false);
    } else {
      bgMusic
        .play()
        .then(() => {
          musicPlaying = true;
          updateMusicUI(true);
        })
        .catch(() => {});
    }
  }
}

function updateMusicUI(isPlaying) {
  if (isPlaying) {
    musicIcon.className = "fas fa-volume-up";
    musicStatusSpan.innerText = "♥ Melody";
  } else {
    musicIcon.className = "fas fa-music";
    musicStatusSpan.innerText = "♫ muted";
  }
}

// tap to open: hide hook, show main card with animation, start music + apply zoom/fade effects
function openInvitation() {
  // Add transition for hiding
  hookScreen.classList.add("hidden");
  // Show main card with visibility class
  mainCard.classList.add("visible");
  // optional: trigger additional animations via CSS
  // Also start music softly if user gesture (respects browser policy)
  enableMusic();
  // add extra gold sparkle for names (small scale effect)
  const namesDiv = document.querySelector(".names-section");
  if (namesDiv) {
    namesDiv.style.animation = "none";
    namesDiv.offsetHeight; // reflow
    namesDiv.style.animation = "fadeUp 0.9s ease forwards";
  }
  // image gets extra zoom scale (wow)
  const imgEl = document.querySelector(".wedding-img");
  if (imgEl) {
    imgEl.style.transform = "scale(1.02)";
    setTimeout(() => {
      imgEl.style.transform = "";
    }, 400);
  }

  // Start countdown timer when invitation opens
  startCountdown();
}

// button zoom effect on tap (tap to open)
tapBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  // zoom effect for button
  tapBtn.style.transform = "scale(0.94)";
  setTimeout(() => {
    tapBtn.style.transform = "";
  }, 150);
  openInvitation();
});

// also click on hook background (anywhere) opens invitation (better UX)
hookScreen.addEventListener("click", (e) => {
  if (
    e.target === hookScreen ||
    e.target.closest(".hook-content") ===
      hookScreen?.querySelector(".hook-content")
  ) {
    // but ensure not double trigger if tap btn child
    if (!e.target.closest("#tapToOpenBtn")) {
      tapBtn.style.transform = "scale(0.94)";
      setTimeout(() => {
        tapBtn.style.transform = "";
      }, 150);
      openInvitation();
    }
  }
});

// music toggle click (bottom right)
musicToggleDiv.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!musicStarted && mainCard.classList.contains("visible")) {
    // if invitation already opened but music not started yet (autoplay prevented), try play
    bgMusic.volume = 0.45;
    bgMusic
      .play()
      .then(() => {
        musicPlaying = true;
        musicStarted = true;
        updateMusicUI(true);
      })
      .catch(() => {
        alert("Please tap again to enable background music 🎵");
      });
  } else {
    if (musicPlaying) {
      bgMusic.pause();
      musicPlaying = false;
      updateMusicUI(false);
    } else {
      bgMusic
        .play()
        .then(() => {
          musicPlaying = true;
          updateMusicUI(true);
        })
        .catch(() => {});
    }
  }
});

// additional zoom for image when clicked? (extra interactive)
if (weddingImg) {
  weddingImg.addEventListener("click", () => {
    weddingImg.style.transform = "scale(1.03)";
    setTimeout(() => {
      weddingImg.style.transform = "";
    }, 280);
  });
}

// Apply all dynamic data from CONFIG (easy to modify later)
applyDynamicContent();

// Ensure main card starts hidden and hook fully visible (no transition flick)
window.addEventListener("load", () => {
  // preload image subtle? fine
  mainCard.classList.remove("visible");
  // if any music preload, ok.
  bgMusic.volume = 0.4;
  // Pre-initialize timer display with placeholder values (will update properly when opened)
  if (daysSpan) daysSpan.innerText = "00";
  if (hoursSpan) hoursSpan.innerText = "00";
  if (minutesSpan) minutesSpan.innerText = "00";
  if (secondsSpan) secondsSpan.innerText = "00";
});

// For variables after build: just change the CONFIG object above (names, date, location, image, message, timerTargetDate)
// The background style uses dark + blur, golden/white, fonts romantic.
// Animations: fade in names, scale image, button zoom, heartbeat heart icon, hover effects.
// Music starts only after tap to open (user gesture ensures compliance)
