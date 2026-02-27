import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export function DrivenKmChart() {
  const [series, setSeries] = useState([
    { name: 'School Bus', data: [4400, 4300, 4400, 4300, 4450, 4500] },
    { name: 'Heavy Trucks', data: [3000, 3100, 3200, 2800, 2700, 3100] },
    { name: 'Light Trucks', data: [2800, 2850, 2900, 2600, 2650, 2800] },
    { name: 'Passenger Transport', data: [4800, 4700, 4600, 4500, 4600, 4650] },
    { name: 'Motorcycle', data: [900, 1000, 900, 700, 600, 700] },
    { name: 'Micro Mobility', data: [300, 500, 400, 300, 100, 200] }
  ]);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSeries(prevSeries => 
        prevSeries.map(s => {
          const lastVal = s.data[s.data.length - 1];
          const newVal = lastVal + Math.floor(Math.random() * 50) - 10; // slight upward trend
          return {
            ...s,
            data: [...s.data.slice(1), newVal]
          };
        })
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const options: ApexOptions = {
    chart: {
      type: 'line',
      height: 350,
      toolbar: { show: false },
      animations: { speed: 800, dynamicAnimation: { speed: 350 } },
      fontFamily: 'Inter, sans-serif',
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    colors: [
      '#3b82f6', // blue
      '#f59e0b', // amber
      '#10b981', // emerald
      '#8b5cf6', // violet
      '#ec4899', // pink
      '#64748b'  // slate
    ],
    xaxis: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: { colors: '#64748b', fontSize: '12px', fontWeight: 500 }
      }
    },
    yaxis: {
      title: {
        text: 'Kilometers',
        style: {
          fontWeight: 600,
          color: '#0f172a'
        }
      },
      labels: {
        style: { colors: '#64748b', fontSize: '12px' },
      },
      min: 0,
      max: 5000,
      tickAmount: 5
    },
    grid: {
      borderColor: '#f1f5f9',
      strokeDashArray: 0,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      offsetY: 0,
      markers: { size: 6 },
      itemMargin: { horizontal: 10, vertical: 5 },
      fontSize: '11px'
    },
    markers: {
      size: 4,
      strokeWidth: 0,
      hover: { size: 6 }
    },
    tooltip: {
      theme: 'light',
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 h-full flex flex-col">
      <h2 className="text-lg font-bold text-gray-900 mb-2">Driven KM</h2>
      <div className="flex-1 w-full min-h-[350px]">
        <Chart options={options} series={series} type="line" height="100%" width="100%" />
      </div>
    </div>
  );
}
