import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const ChartCoin = (ctx) => {
    const labels = ctx.hysory.map((day) => { 
        let date = new Date(day.date);
        let shortDate = date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
        return shortDate
    })

    const data = {
        labels: labels,
        datasets: [{
          label: 'Hystory',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(230, 190, 138)',
          data: ctx.hysory.map((day) => day.priceUsd),
        }]
    };

    return (
        <div>
           <Chart type={'line'} data={data} />
        </div>
    )
}

export default ChartCoin