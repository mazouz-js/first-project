// Get the canvas element
let lineChart = document.getElementById("myChart").getContext("2d");
// Create data
const data = {
  labels: ["Facebook", "Youtube", "Amazon"],
  datasets: [
    {
      label: "# of Votes",
      data: [1200, 990, 590],
      backgroundColor: [
        "rgba(255, 99, 132)",
        "rgba(54, 162, 235)",
        "rgba(255, 206, 86)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const config = {
  type: "polarArea",
  data: data,
  Options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};
// Create the chart
let myChart = new Chart(lineChart, config);
