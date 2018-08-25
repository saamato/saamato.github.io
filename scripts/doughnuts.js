var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [" Personal and Business", "Personal or Business"],
    datasets: [{
      data: [60.7, 39.3],
      backgroundColor: [
        '#93d0d1',
        '#E1E2E3',
      ],
      borderWidth: 3,
      borderColor: ["#FDFAF3", "#FDFAF3"],
      hoverBorderColor: ["#FDFAF3", "#FDFAF3"]

    }]
  },
  options: {
    cutoutPercentage: 75,
    title: {
      display: true,
      text: 'Why users use cloud-based storages services (percentage)',
      fontFamily: "Lato",
      fontColor: 'black'
    },
    legend: {
      labels: {
        // This more specific font property overrides the global property
        fontColor: 'black',
        fontFamily: "Lato"

      }
    }
  }

});

var chartTwo = document.getElementById("d2").getContext('2d');
var d2 = new Chart(chartTwo, {
  type: 'doughnut',
  data: {
    labels: ["Uploading your own files", "Other"],

    datasets: [{
      label: '# of Votes',
      data: [50, 50],
      backgroundColor: [
        '#93d0d1',
        '#E1E2E3'
      ],
      borderWidth: 3,
      borderColor: ["#FDFAF3", "#FDFAF3"],
      hoverBorderColor: ["#FDFAF3", "#FDFAF3"]

    }]
  },
  options: {
    cutoutPercentage: 75,
    title: {
      display: true,
      text: 'What feature is most important to a user (percentage)',
      fontFamily: "Lato",
      fontColor: 'black'
    },
    legend: {
      labels: {
        // This more specific font property overrides the global property
        fontColor: 'black',
        fontFamily: "Lato"

      }
    }
  }

});

var chartThree = document.getElementById("d3").getContext('2d');
var d3 = new Chart(chartThree, {
  type: 'doughnut',
  data: {
    labels: ["Saving links from the web", "Other"],

    datasets: [{
      label: '# of Votes',
      data: [64.3, 35.7],
      backgroundColor: [
        '#93d0d1',
        '#E1E2E3'
      ],
      borderWidth: 3,
      borderColor: ["#FDFAF3", "#FDFAF3"],
      hoverBorderColor: ["#FDFAF3", "#FDFAF3"]
    }]
  },
  options: {
    cutoutPercentage: 75,
    title: {
      display: true,
      text: 'What feature is least important to a user (percentage)',
      fontFamily: "Lato",
      fontColor: 'black'

    },
    legend: {
      labels: {
        // This more specific font property overrides the global property
        fontColor: 'black',
        fontFamily: "Lato",

      }
    }
  }

});
