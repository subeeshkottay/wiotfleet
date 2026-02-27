import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export function PermitsChart() {
  const options: ApexOptions = {
    chart: {
      type: 'area',
      height: 400,
      stacked: true,
      toolbar: { show: false },
      animations: {
        enabled: true,
        speed: 800
      },
      fontFamily: 'Inter, sans-serif',
    },
    colors: ['#10B981', '#EF4444'],
    stroke: {
      curve: 'smooth',
      width: 3
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.2,
        stops: [0, 100]
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
        fontWeight: 600,
      },
      background: {
        enabled: true,
        foreColor: '#fff',
        padding: 4,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#fff',
        opacity: 1,
      }
    },
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
        text: 'Number of Permits',
        style: {
          fontWeight: 600,
          color: '#0f172a',
          fontSize: '12px'
        }
      },
      labels: {
        style: { colors: '#64748b', fontSize: '12px' },
      },
      min: 0,
      max: 10000,
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
      horizontalAlign: 'right',
      offsetY: -20,
      markers: { size: 6 },
      itemMargin: { horizontal: 10, vertical: 5 },
      fontSize: '12px',
      fontWeight: 500,
      labels: { colors: '#64748b' }
    },
    markers: {
      size: 0,
      hover: { size: 6 }
    },
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'light',
    }
  };

  const series = [
    {
      name: 'Active',
      data: [8650, 8590, 8530, 8470, 8410, 8350]
    },
    {
      name: 'Expired',
      data: [950, 915, 880, 845, 810, 775]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full flex flex-col">
      <h2 className="text-[22px] font-bold text-[#0f172a] mb-6">Active vs Expired Permits</h2>
      <div className="flex-1 w-full min-h-[400px]">
        <Chart options={options} series={series} type="area" height="100%" width="100%" />
      </div>
    </div>
  );
}
