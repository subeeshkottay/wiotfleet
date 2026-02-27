import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export function InspectionOverviewChart() {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 400,
      stacked: true,
      toolbar: { show: false },
      fontFamily: 'Inter, sans-serif',
    },
    colors: ['#34d399', '#f87171', '#fbbf24'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '45%',
        borderRadius: 4,
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'last',
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
        fontWeight: 600,
        colors: ['#fff']
      },
    },
    xaxis: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: { colors: '#475569', fontSize: '13px', fontWeight: 500 }
      }
    },
    yaxis: {
      title: {
        text: 'Number of Inspections',
        style: {
          fontWeight: 700,
          color: '#334155',
          fontSize: '13px'
        }
      },
      labels: {
        style: { colors: '#475569', fontSize: '12px' },
      },
      min: 0,
      max: 1000,
      tickAmount: 5
    },
    grid: {
      borderColor: '#e2e8f0',
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
      fontSize: '13px',
      fontWeight: 500,
      labels: { colors: '#475569' }
    },
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'light',
    },
    fill: {
      opacity: 1
    }
  };

  const series = [
    {
      name: 'Passed',
      data: [520, 610, 580, 640, 690, 720]
    },
    {
      name: 'Failed',
      data: [80, 95, 90, 105, 110, 120]
    },
    {
      name: 'With Fine',
      data: [45, 60, 55, 70, 75, 85]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full flex flex-col">
      <h2 className="text-[22px] font-bold text-[#0f172a] mb-6">Inspection Overview</h2>
      <div className="flex-1 w-full min-h-[400px]">
        <Chart options={options} series={series} type="bar" height="100%" width="100%" />
      </div>
    </div>
  );
}
