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
    ctx.font = '16px sans-serif';
    ctx.fillText(perc.toFixed(1) + '%', xCoor, yCoor);
    ctx.restore();
  },
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
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
      backgroundColor: ['rgb(220, 0, 0)', 'rgb(226, 226, 226)']
    }
  ],
};

const ctx = document.getElementById('newsletters');
new Chart(ctx, {
type: 'doughnut',
plugins: [innerLabel],
data,
options
});

const ctx1 = document.getElementById('signs');
new Chart(ctx1, {
type: 'doughnut',
plugins: [innerLabel],
data: {
      datasets: [{
        // label: 'Newsletter signups YoY',
        data: [43.9, 56.1],
        borderWidth: 1,
        backgroundColor: [
          'rgb(0, 122, 200)',
          'rgb(226, 226, 226)',   ],
        }],
      },
options
});
