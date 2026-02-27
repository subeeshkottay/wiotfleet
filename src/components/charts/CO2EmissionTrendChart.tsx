import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export function CO2EmissionTrendChart() {
  const options: ApexOptions = {
    chart: {
      type: 'area',
      height: 400,
      toolbar: { show: false },
      fontFamily: 'Inter, sans-serif',
      animations: {
        enabled: true,
        speed: 800
      }
    },
    colors: ['#10b981'], // Emerald green
    stroke: {
      curve: 'smooth',
      width: 3
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.05,
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
        style: { colors: '#475569', fontSize: '13px', fontWeight: 500 }
      }
    },
    yaxis: {
      title: {
        text: 'CO₂ Emissions (tons)',
        style: {
          fontWeight: 700,
          color: '#334155',
          fontSize: '13px'
        }
      },
      labels: {
        style: { colors: '#475569', fontSize: '13px' },
      },
      min: 465,
      max: 485,
      tickAmount: 4
    },
    grid: {
      borderColor: '#e2e8f0',
      strokeDashArray: 0,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    annotations: {
      yaxis: [
        {
          y: 480,
          borderColor: '#ef4444',
          strokeDashArray: 2,
          label: {
            borderColor: '#ef4444',
            style: {
              color: '#fff',
              background: '#ef4444',
              fontSize: '12px',
              fontWeight: 500,
              padding: { left: 8, right: 8, top: 4, bottom: 4 }
            },
            text: 'Target Limit (480 tons)',
            position: 'right',
            offsetX: 0,
            offsetY: 0
          }
        }
      ],
      xaxis: [
        {
          x: 'Week 1',
          borderColor: '#94a3b8',
          strokeDashArray: 3,
        }
      ]
    },
    markers: {
      size: 0,
      hover: { size: 6 }
    },
    tooltip: {
      theme: 'light',
    }
  };

  const series = [
    {
      name: 'CO₂ Emissions',
      data: [480, 484, 470, 477, 469, 475]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full flex flex-col">
      <h2 className="text-[22px] font-bold text-[#0f172a] mb-6">
        CO<sub className="text-[14px] font-semibold">2</sub> Emission Trend
      </h2>
      <div className="flex-1 w-full min-h-[400px]">
        <Chart options={options} series={series} type="area" height="100%" width="100%" />
      </div>
    </div>
  );
}
