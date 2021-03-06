/* t_main_graph.js */

/*
(function(){

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['거래량1', '거래량2', '거래량3', '거래량4', '거래량5', '거래량6'],
          datasets: [{
              label: '# 거래량',
              data: [8, 12, 10, 15, 2, 10],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

})(jQuery);

*/

window.onload = function () {

    var chart = new CanvasJS.Chart("graph", {
        animationEnabled: true,
        theme: "light2",
        data: [{        
            type: "line",
              indexLabelFontSize: 1,
            dataPoints: [
                { y: 450 },
                { y: 414},
                { y: 520, indexLabel: "\u2191",markerColor: "red", markerType: "triangle" },
                { y: 460 },
                { y: 450 },
                { y: 500 },
                { y: 480 },
                { y: 480 },
                { y: 410 , indexLabel: "\u2193",markerColor: "DarkSlateGrey", markerType: "cross" },
                { y: 500 },
                { y: 480 },
                { y: 510 }
            ]
        }]
    });
    chart.render();
    
    }
