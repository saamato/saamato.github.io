//
//
// // chart 1 //
// const ctx1 = document.getElementById('chart');
//
// new Chart(ctx1, {
//   type: 'doughnut',
//   data: {
//     datasets: [{
//       label: 'Newsletter signups YoY',
//       data: [56.4, 43.6],
//       borderWidth: 1,
//       backgroundColor: [
//         'rgb(220, 0, 0)',
//         'rgb(226, 226, 226)',   ],
//       }],
//     },
//     options: {
//       cutout: 75,
//       plugins: {
//
//         tooltip: { enabled: false, },
//
//         title: {
//           display: true,
//           text: 'Newsletter Signups YoY'
//         }
//       }
//     },
//
//
//
//   });
// //
// //
// //
// //   // chart 2 //
//   const ctx = document.getElementById('newsletter');
//
//
//   new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//       datasets: [{
//         label: 'Newsletter signups YoY',
//         data: [43.9, 56.1],
//         borderWidth: 1,
//         backgroundColor: [
//           'rgb(0, 122, 200)',
//           'rgb(226, 226, 226)',   ],
//         }],
//       },
//       options: {
//         cutout: 75,
//         plugins: {
//           tooltip: {
//             enabled: false,
//           },
//           title: {
//             display: true,
//             text: 'Pageviews Increase YoY'
//           }
//         }
//       },
//
//
//
//     });

// trustworthy

Chart.register(ChartDeferred);

const innerLabel = {
  id: 'innerLabel',
  afterDatasetDraw(chart, args, pluginOptions) {
    const { ctx } = chart;
    const meta = args.meta;
    const xCoor = meta.data[0].x;
    const yCoor = meta.data[0].y;
    const perc = chart.data.datasets[0].data[0] / meta.total * 100;
    ctx.save();
    ctx.textAlign = 'center';
    ctx.font = '300 32px "Work Sans"';
    ctx.fillText(perc.toFixed(1) + '%', xCoor, yCoor);
    ctx.restore();
  },
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: 100,
  plugins: {
    title: {
              display: true,
              text: 'Increase in Pageviews'
            },

    tooltip: {
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      },
      enabled: false,
    },
  },
};


const value = 56.1;
const value1 = 43.9;



const data = {
  labels: [],
  datasets: [
    {
      data: [56.1, 100 - value],
      backgroundColor: ['rgb(0, 122, 200)', 'rgb(226, 226, 226)']
    }
  ],
};

const ctx = document.getElementById('newsletters');
new Chart(ctx, {
type: 'doughnut',
plugins: [innerLabel],
data,
options: {
  responsive: true,
  maintainAspectRatio: false,
  cutout: 100,
  plugins: {
    title: {
              display: true,
              text: 'Increase in Newsletter Sign Ups'
            },

    tooltip: {
      deferred: {
        xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      },
      enabled: false,
    },
  },
}
});

const ctx1 = document.getElementById('signs');
new Chart(ctx1, {
type: 'doughnut',
plugins: [innerLabel],
data: {
      datasets: [{
        // title: 'Newsletter signups YoY',
        data: [43.9, 56.1],
        borderWidth: 1,
        backgroundColor: [
          'rgb(0, 122, 200)',
          'rgb(226, 226, 226)',   ],
        }],
      },
options
});
