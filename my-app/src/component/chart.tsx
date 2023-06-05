import '../css/Dashboard.css'
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
        fill: {
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

  return <div className='' id="wave-chart" />;
};


  export default WaveChart;