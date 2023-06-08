import React from 'react'
import ApexCharts from 'apexcharts'

interface Props {
    series: number[],
    labels: string[],
    text: string,
    id: string
}

const PieChart: React.FC<Props> = ({series, labels, text, id}) => {
    React.useEffect(() => {
        const chartData = {
            options: {
                series: series,
                chart: {
                    width: 267,
                    type: 'donut',  
                },
                plotOptions: {
                    pie: {
                      donut: {
                        size: '40%',
                      },
                    },
                  },
                stroke: {
                    width: 0,
                  },
                labels: labels,
                colors: ['#FF8A48', '#4F75FF',],
                title: {
                    text: text,
                    align: "center"
                  },
                dataLabels: {
                    enabled: true,
                    formatter: function (val: any, opts: { w: { globals: { series: { [x: string]: any; }; }; }; seriesIndex: string | number; }) {
                        return opts.w.globals.series[opts.seriesIndex];
                    },
                    background: {
                        enabled: true,
                        borderRadius: 2,
                        opacity: 0.8,
                        borderWidth: 1,
                        borderColor: '#000',
                        foreColor: '#000',
                      },
                },
                legend: {
                    show: false, 
                  },
                responsive: [{
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 200
                      },
                      legend: {
                        position: 'bottom'
                      }
                    }
                }]
            },         
        };
    
        const chart = new ApexCharts(document.querySelector(`#${id}`), chartData.options);
        chart.render();
    
        return () => {
          chart.destroy();
        };
      }, []);
  return <div id={id} />;
  
}

export default PieChart
