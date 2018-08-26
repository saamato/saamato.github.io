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
      text: 'Why do users use cloud-based storage services',
      fontSize: 15,
      fontFamily: "Lato",
      fontColor: 'black'
    },
    plugins: {p1: true, p2: false, p3: false},
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
      fontSize: 15,
      text: 'What feature is most important to a user',
      fontFamily: "Lato",
      fontColor: 'black'
    },
      plugins: {p1: false, p2: true, p3: false},
    legend: {
      labels: {
        // This more specific font property overrides the global property
        fontColor: 'black',
        fontFamily: "Lato",

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
      fontSize: 15,
      text: 'What feature is least important to a user',
      fontFamily: "Lato",
      fontColor: 'black'

    },
  plugins: {p1: false, p2: false, p3: true},
    legend: {
      labels: {
        // This more specific font property overrides the global property
        fontColor: 'black',
        fontFamily: "Lato",

      }
    }
  }

});

var plugin = Chart.pluginService.register({
  id: "p1",
  beforeDraw: function(chart) {
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    ctx.restore();
    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em Abril Fatface";
    ctx.fillStyle = "#93d0d1";
    ctx.textBaseline = "middle";

    var text = "60.7%",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 1.8;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }
});

var plugin = Chart.pluginService.register({
  id: "p2",
  beforeDraw: function(chart) {
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    ctx.restore();
    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em Abril Fatface";
    ctx.fillStyle = "#93d0d1";
    ctx.textBaseline = "middle";

    var text = "50%",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 1.8;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }
});

var plugin = Chart.pluginService.register({
  id: "p3",
  beforeDraw: function(chart) {
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    ctx.restore();
    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em Abril Fatface";
    ctx.fillStyle = "#93d0d1";
    ctx.textBaseline = "middle";

    var text = "64.3%",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 1.8;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }
});
