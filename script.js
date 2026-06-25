/* COLOR LAB */

const colorButtons = document.querySelectorAll(".color-buttons button");
const furniture = document.getElementById("colorFurniture");

if (furniture) {
  furniture.src = "./images/MUEBLE VERDE.png";
  furniture.style.opacity = "1";
  furniture.style.transform = "scale(1)";
}

if (colorButtons.length && furniture) {
  colorButtons.forEach(button => {
    button.addEventListener("click", () => {
      furniture.style.opacity = "0";
      furniture.style.transform = "scale(.97)";

      setTimeout(() => {
        furniture.src = button.dataset.image;

        furniture.onload = () => {
          furniture.style.opacity = "1";
          furniture.style.transform = "scale(1)";
        };
      }, 150);
    });
  });
}

/* HERO COMPARADOR */

const compareRange = document.getElementById("compareRange");
const compareOld = document.getElementById("compareOld");
const compareLine = document.getElementById("compareLine");

if (compareRange && compareOld && compareLine) {
  compareRange.addEventListener("input", () => {
    const value = compareRange.value;
    compareOld.style.clipPath = `inset(0 0 0 ${value}%)`;
    compareLine.style.left = value + "%";
  });
}

/* PROYECTOS MOBILE */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});

/* TESTIMONIOS */

const testimonialData = [
  {
    text: "“Aprendí que restaurar no era solamente lijar, sino diseñar.”",
    name: "— Martina"
  },
  {
    text: "“Me fui con una pieza terminada y muchas ganas de seguir creando.”",
    name: "— Camila"
  },
  {
    text: "“El color cambió por completo la forma en que miro los muebles.”",
    name: "— Julieta"
  }
];

const testimonialText = document.getElementById("testimonialText");
const testimonialName = document.getElementById("testimonialName");
const testimonialDots = document.querySelectorAll(".dot");

if (testimonialText && testimonialName && testimonialDots.length) {
  testimonialDots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = Number(dot.dataset.testimonial);

      testimonialText.style.opacity = "0";
      testimonialText.style.transform = "translateY(12px)";

      setTimeout(() => {
        testimonialText.textContent = testimonialData[index].text;
        testimonialName.textContent = testimonialData[index].name;

        testimonialDots.forEach(d => d.classList.remove("active"));
        dot.classList.add("active");

        testimonialText.style.opacity = "1";
        testimonialText.style.transform = "translateY(0)";
      }, 250);
    });
  });
}

/* MUEBLES CÁPSULA */

const capsuleTrack = document.querySelector(".capsule-track");

if (capsuleTrack) {
  let capsulePosition = 0;
  const capsuleSpeed = 0.6;
  const capsuleGap = 24;

  function animateCapsule() {
    capsulePosition -= capsuleSpeed;

    const first = capsuleTrack.children[0];

    if (first) {
      const firstWidth = first.offsetWidth + capsuleGap;

      if (-capsulePosition >= firstWidth) {
        capsulePosition += firstWidth;
        capsuleTrack.appendChild(first);
      }

      capsuleTrack.style.transform = `translateX(${capsulePosition}px)`;
    }

    requestAnimationFrame(animateCapsule);
  }

  animateCapsule();
}

