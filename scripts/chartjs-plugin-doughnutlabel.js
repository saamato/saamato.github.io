$( document ).ready(function() {
var ctx = document.getElementById("myChart");
var ctx2 = document.getElementById("myChart2");
var ctx3 = document.getElementById("myChart3");

  var myChartOps = {
    type: 'doughnut',
    data: { datasets: [{data: [84, 16], backgroundColor: ['#ea524e', '#eef2f4'], borderWidth: 0 }] },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      cutoutPercentage: 60,
      legend:{ display: false },
      animation: {duration: 2000},
      hover: {mode: null},
      tooltips:{ enabled: false, backgroundColor: ['#ea524e', '#eef2f4']}
    }
  }

  var myChartOps2 = {
    type: 'doughnut',
    data: { datasets: [{data: [ 63, 37], backgroundColor: ['#9f2064','#eef2f4'], borderWidth: 0 }] },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      cutoutPercentage: 60,
      legend: {display: false},
      animation:{ duration: 2000},
      hover: {mode: null},
      tooltips:{enabled: false, backgroundColor: ['#9f2064','#eef2f4']}
     }
  };

  var myChartOps3 = {
    type: 'doughnut',
    data: { datasets: [{ data: [31, 69], backgroundColor: [ '#ff8521','#eef2f4'], borderWidth: 0 }]},
    options: {
      animation:{duration: 2000},
      hover: {mode: null},
      legend: {display: false},
      tooltips:{enabled: false, backgroundColor: [ '#ff8521', '#eef2f4']},
      responsive: true,
      maintainAspectRatio: true,
      cutoutPercentage: 60,
    }
  };

  var myChart;
  var myChart2;
  var myChart3;

  var makePercentage = function(thischart){
        Chart.pluginService.register({
      beforeDraw: function(thischart) {
        var width = thischart.chart.width,
            height = thischart.chart.height,
            ctx = thischart.chart.ctx,
            type = thischart.config.type;

        if (type == 'doughnut')
        {
          var percent = Math.round((thischart.config.data.datasets[0].data[0] * 100) /
                        (thischart.config.data.datasets[0].data[0] +
                        thischart.config.data.datasets[0].data[1]));
          var oldFill = ctx.fillStyle;
          var fontSize = ((height - thischart.chartArea.top) / 90).toFixed(2);

          ctx.restore();
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "middle"

          var text = percent + "%",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = (height + thischart.chartArea.top) / 2;

          ctx.fillStyle = thischart.config.data.datasets[0].backgroundColor[0];
          ctx.fillText(text, textX, textY);
          ctx.fillStyle = oldFill;
          ctx.save();
        }
      }
    });
  }

  function draw1(){
    myChart = new Chart(ctx, myChartOps)
   makePercentage(myChart)
 }
 function draw2(){
    myChart2 = new Chart(ctx2, myChartOps2)
   makePercentage(myChart2)
 }
 function draw3(){
    myChart3 = new Chart(ctx3, myChartOps3)
    makePercentage(myChart3)
  }

function renderCharts(){
  draw1()
  draw2()
  draw3()
}

// Animate on scroll

  var scrolloptions = [{selector: '.card1', offset:50,callback:draw1},{selector: '.card2', offset:50,callback:draw2},{selector: '.card3', offset:50,callback:draw3}];      Materialize.scrollFire(scrolloptions);

  $(".card1").click( function(){
    myChart.destroy()
    myChart = new Chart(ctx, myChartOps);
    }
  )
  $(".card2").click( function(){
    myChart2.destroy()
    myChart2 = new Chart(ctx2, myChartOps2);
    }
  )
  $(".card3").click( function(){
    myChart3.destroy()
    myChart3 = new Chart(ctx3, myChartOps3)
    }
  )
});
