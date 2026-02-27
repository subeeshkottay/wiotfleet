import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export function ViolationsByTypeChart() {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 400,
      toolbar: { show: false },
      fontFamily: 'Inter, sans-serif',
    },
    colors: ['#508ff4'], // Light blue matching the screenshot
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 6,
        barHeight: '55%',
        dataLabels: {
          position: 'center',
        }
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '13px',
        fontWeight: 600,
        colors: ['#fff']
      }
    },
    xaxis: {
      categories: [
        'Inspection Failure',
        'Driver License Issue',
        'Safety Equipment Missing',
        'Unauthorized Route',
        'Geo-Fence Violation',
        'Permit Expired',
        'Overloading',
        'Speeding'
      ],
      title: {
        text: 'Number of Violations',
        style: {
          fontWeight: 700,
          color: '#334155',
          fontSize: '13px'
        },
        offsetY: 10
      },
      labels: {
        style: { colors: '#475569', fontSize: '13px' }
      },
      min: 0,
      max: 500,
      tickAmount: 5,
      axisBorder: { show: true, color: '#e2e8f0' },
      axisTicks: { show: true, color: '#e2e8f0' }
    },
    yaxis: {
      labels: {
        style: { colors: '#475569', fontSize: '13px', fontWeight: 400 }
      }
    },
    grid: {
      borderColor: '#e2e8f0',
      strokeDashArray: 0,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
      padding: {
        left: 20,
        right: 20
      }
    },
    tooltip: {
      theme: 'light'
    }
  };

  const series = [
    {
      name: 'Violations',
      data: [95, 120, 150, 180, 210, 280, 320, 460]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full flex flex-col">
      <h2 className="text-[22px] font-bold text-[#0f172a] mb-6">Violations By Type</h2>
      <div className="flex-1 w-full min-h-[400px]">
        <Chart options={options} series={series} type="bar" height="100%" width="100%" />
      </div>
    </div>
  );
}
