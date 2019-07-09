var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [" Personal and Business", "Personal or Business"],
    datasets: [{
      data: [60.7, 39.3],
      backgroundColor: [
        '#4597b5',
        '#E1E2E3',
      ],
      borderWidth: 3,
      borderColor: ["#F5F5F5", "#F5F5F5"],
      hoverBorderColor: ["#F5F5F5", "#F5F5F5"]

    }]
  },
  options: {
    cutoutPercentage: 75,
    // title: {
    //   display: true,
    //   text: 'Why do users use cloud-based storage services',
    //   fontSize: 15,
    //   fontFamily: "Lato",
    //   fontColor: 'black'
    // },
    plugins: {
      p1: true, p2: false, p3: false,
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      }

    },
    legend: {
      display: false,

      labels: {
        // This more specific font property overrides the global property
        fontColor: 'black',
        fontFamily: "Roboto",
        fontSize: 15,


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
        '#4597b5',
        '#E1E2E3'
      ],
      borderWidth: 3,
      borderColor: ["#F5F5F5", "#F5F5F5"],
      hoverBorderColor: ["#F5F5F5", "#F5F5F5"]

    }]
  },
  options: {
    cutoutPercentage: 75,
    // title: {
    //   display: true,
    //   fontSize: 15,
    //   text: 'What feature is most important to a user',
    //   fontFamily: "Lato",
    //   fontColor: 'black'
    // },
    plugins: {
      p1: false, p2: true, p3: false,
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      }

    },
    legend: {
      display: false,

      labels: {
        // This more specific font property overrides the global property
        fontColor: 'black',
        fontFamily: "Roboto",
        fontSize: 15,


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
      data: [64.3, 35.7],
      backgroundColor: [
        '#4597b5',
        '#E1E2E3'
      ],
      borderWidth: 3,
      borderColor: ["#F5F5F5", "#F5F5F5"],
      hoverBorderColor: ["#F5F5F5", "#F5F5F5"]
    }]
  },
  options: {
    cutoutPercentage: 75,
    // title: {
    //   display: true,
    //   fontSize: 15,
    //   text: 'What feature is least important to a user',
    //   fontFamily: "Lato",
    //   fontColor: 'black'
    // },
    plugins: {
      p1: false, p2: false, p3: true,
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      }

    },
    legend: {
      display: false,

      labels: {
         // This more specific font property overrides the global property
        fontColor: 'black',
        fontFamily: "Roboto",
        fontSize: 15,

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
    ctx.font = fontSize + "em Roboto";
    ctx.fillStyle = "#4597b5";
    // ctx.textBaseline = "middle";

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
    ctx.font = fontSize + "em Roboto";
    ctx.fillStyle = "#4597b5";
    // ctx.textBaseline = "middle";

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
    ctx.font = fontSize + "em Roboto";
    ctx.fillStyle = "#4597b5";
    // ctx.textBaseline = "middle";

    var text = "64.3%",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 1.8;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }
});
