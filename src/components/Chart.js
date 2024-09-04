import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Chart = ({ data }) => {
  const certificationCounts = data.reduce((acc, item) => {
    acc[item.certifitation_type] = (acc[item.certifitation_type] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(certificationCounts),
    datasets: [
      {
        label: 'Number of Certifications',
        data: Object.values(certificationCounts),
        backgroundColor: 'rgba(165, 21, 53, 1)',
      },
    ],
  };

  const maxValue = Math.max(...Object.values(certificationCounts), 0);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y;
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: window.innerWidth < 768 ? 10 : 12,
          },
        },
      },
      y: {
        title: {
          display: false,
        },
        min: 0,
        max: maxValue + 10,
        ticks: {
          stepSize: 10,
        },
        grid: {
          borderColor: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };

  return (
    <div className="p-2 md:p-4">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default Chart;
