

// chart 1 //
const ctx1 = document.getElementById('chart');

new Chart(ctx1, {
  type: 'doughnut',
  data: {
    datasets: [{
      label: 'Newsletter signups YoY',
      data: [56.4, 43.6],
      borderWidth: 1,
      backgroundColor: [
        'rgb(220, 0, 0)',
        'rgb(226, 226, 226)',   ],
      }],
    },
    options: {
      cutout: 75,
      plugins: {

        tooltip: { enabled: false, },

        title: {
          display: true,
          text: 'Newsletter Signups YoY'
        }
      }
    },



  });



  // chart 2 //
  const ctx = document.getElementById('newsletter');


  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        label: 'Newsletter signups YoY',
        data: [43.9, 56.1],
        borderWidth: 1,
        backgroundColor: [
          'rgb(0, 122, 200)',
          'rgb(226, 226, 226)',   ],
        }],
      },
      options: {
        cutout: 75,
        plugins: {
          tooltip: {
            enabled: false,
          },
          title: {
            display: true,
            text: 'Pageviews Increase YoY'
          }
        }
      },



    });
