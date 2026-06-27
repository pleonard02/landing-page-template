const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {
  console.log("Button clicked");
  console.log("Audio file:", music.currentSrc);

  try {
    if (music.paused) {
      await music.play();
      musicBtn.textContent = "Pause Music";
      console.log("Music is playing");
    } else {
      music.pause();
      musicBtn.textContent = "Play Music";
      console.log("Music is paused");
    }
  } catch (error) {
    console.error("Music failed:", error);
  }
});

const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active");
  });

  testimonials[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  currentTestimonial++;

  if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0;
  }

  showTestimonial(currentTestimonial);
});

prevBtn.addEventListener("click", () => {
  currentTestimonial--;

  if (currentTestimonial < 0) {
    currentTestimonial = testimonials.length - 1;
  }

  showTestimonial(currentTestimonial);
});