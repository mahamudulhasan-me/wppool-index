const ctx = document.getElementById("myChart").getContext("2d");

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "WPPOOL",
      data: [0, 10, 5, 2, 20, 30, 45],
      borderColor: "rgb(255, 99, 132)",
      tension: 0.1,
    },
    {
      label: "Google",
      data: [0, 20, 15, 12, 40, 50, 65],
      borderColor: "rgb(54, 162, 235)",
      tension: 0.1,
    },
    {
      label: "Microsoft",
      data: [0, 30, 25, 22, 60, 70, 85],
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "Twitter",
      data: [0, 40, 35, 32, 80, 90, 105],
      borderColor: "rgb(153, 102, 255)",
      tension: 0.1,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  },
};

const myChart = new Chart(ctx, config);

// slider configuration
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

function showSlide(index) {
  const slideWidth = slides[0].offsetWidth + 16; // Including margin
  slider.style.transform = `translateX(${-index * slideWidth}px)`;
  prevButton.disabled = index === 0;
  nextButton.disabled = index >= slides.length - 2; // Adjust this to the number of fully visible slides
}

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
  showSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex =
    currentIndex < slides.length - 2 ? currentIndex + 1 : currentIndex;
  showSlide(currentIndex);
});

showSlide(currentIndex);

//toggle menu operation

// Function to toggle menu visibility
function toggleMenu(menuButton, menu, closeMenu) {
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
}

// Apply the function to each menu set
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");
toggleMenu(menuButton, menu, closeMenu);

const menuButton2 = document.getElementById("menu-button2");
const menu2 = document.getElementById("menu2");
const closeMenu2 = document.getElementById("close-menu2");
toggleMenu(menuButton2, menu2, closeMenu2);

// show sticky header

document.addEventListener("DOMContentLoaded", () => {
  const header1 = document.getElementById("header-1");
  const header2 = document.getElementById("header-2");
  const header1Height = header1.offsetHeight;

  window.addEventListener("scroll", () => {
    if (window.scrollY > header1Height) {
      header2.classList.remove("hidden");
    } else {
      header2.classList.add("hidden");
    }
  });
});
