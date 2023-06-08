import ApexCharts from 'apexcharts'
import React from 'react'
const WaveChart = (props: any) => {
  React.useEffect(() => {
    const chartData = {
      options: {
        chart: {
          height: 380,
          type: 'area',
          animations: {
            enabled: true,
          },
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        series: [
          {
            name: '',
            data: props.data,
          },
        ],
        xaxis: {
          categories: props.categories,
        },
        colors:['#fe9c44', '#E91E63', '#9C27B0'],
        fill: {
          colors: ['#fe9c44', '#E91E63', '#9C27B0'],
          type: 'gradient', 
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
      },
    };

    const chart = new ApexCharts(document.querySelector('#wave-chart'), chartData.options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="wave-chart" />;
};


  export default WaveChart;