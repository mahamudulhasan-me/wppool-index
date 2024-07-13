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

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const button = dropdown.querySelector("button");
  const links = dropdown.querySelectorAll(".dropdown-content a");
  const select = dropdown.querySelector("select");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const value = this.getAttribute("data-value");
      const text = this.textContent;
      button.textContent = text;
      select.value = value;
    });
  });
});
