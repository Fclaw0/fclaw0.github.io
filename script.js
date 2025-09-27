// TYPEWRITE TEXT

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = [
  "Web Developer",
  "Network specialist",
  "Cloud expert",
  "Linux enthusiast",
];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove("blink");
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    cursor.classList.add("blink");
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 750);
  }
};

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove("blink");
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 50);
  } else {
    cursor.classList.add("blink");
    setTimeout(erase, 1000);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// BACK TO TOP BUTTON

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// GET CURRENT YEAR FOR COPYRIGHT

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// FORCE PDF TO OPEN IN NEW TAB (PREVENT DOWNLOAD)

document.addEventListener("DOMContentLoaded", function () {
  const resumeLink = document.querySelector('a[href*="Resume.pdf"]');

  if (resumeLink) {
    resumeLink.addEventListener("click", function (e) {
      e.preventDefault();

      // Create a blob URL to force browser viewing instead of downloading
      fetch(this.href)
        .then((response) => response.blob())
        .then((blob) => {
          const blobUrl = URL.createObjectURL(blob);
          const newWindow = window.open(blobUrl, "_blank", "noopener");

          // Clean up the blob URL after opening
          setTimeout(() => {
            URL.revokeObjectURL(blobUrl);
          }, 1000);
        })
        .catch(() => {
          // Fallback: try direct opening if fetch fails
          window.open(this.href, "_blank", "noopener");
        });
    });
  }
});

// iOS/Safari Video Replacement for YouTube Videos

function isIOSSafari() {
  const userAgent = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);
  const isSafari =
    /Safari/.test(userAgent) &&
    !/Chrome|CriOS|FxiOS|OPiOS|mercury/.test(userAgent);
  return isIOS && isSafari;
}

function replaceWebMVideosWithGIFs() {
  if (isIOSSafari()) {
    // Replace youtube-primary.webm with youtube-primary.gif
    const primaryVideo = document.querySelector(
      'video source[src*="youtube-primary.webm"]'
    );
    if (primaryVideo) {
      primaryVideo.src = "img/youtube-primary.gif";
      primaryVideo.type = "image/gif";
    }

    // Replace youtube-secondary.webm with youtube-secondary.gif
    const secondaryVideo = document.querySelector(
      'video source[src*="youtube-secondary.webm"]'
    );
    if (secondaryVideo) {
      secondaryVideo.src = "img/youtube-secondary.gif";
      secondaryVideo.type = "image/gif";
    }

    // Replace youtube-tertiary.webm with youtube-tertiary.gif
    const tertiaryVideo = document.querySelector(
      'video source[src*="youtube-tertiary.webm"]'
    );
    if (tertiaryVideo) {
      tertiaryVideo.src = "img/youtube-tertiary.gif";
      tertiaryVideo.type = "image/gif";
    }
  }
}

// Run video replacement when DOM is loaded
document.addEventListener("DOMContentLoaded", replaceWebMVideosWithGIFs);
