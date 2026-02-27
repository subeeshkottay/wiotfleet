import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export function VehiclesByTypesChart() {
  const options: ApexOptions = {
    chart: {
      type: 'polarArea',
      fontFamily: 'Inter, sans-serif',
    },
    labels: ['Light Vehicle', 'Light Truck', 'Heavy Truck', 'Light bus', 'Heavy Bus', 'Heavy Coach', 'Handicap Vehicle', 'Others'],
    colors: ['#3b82f6', '#a855f7', '#f59e0b', '#10b981', '#c084fc', '#84cc16', '#ef4444', '#f43f5e'],
    stroke: {
      colors: ['#fff'],
      width: 2
    },
    fill: {
      opacity: 0.9
    },
    yaxis: {
      show: true,
      labels: {
        style: {
          fontSize: '10px'
        }
      }
    },
    legend: {
      position: 'bottom',
      markers: {
        size: 6,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 4
      },
      fontSize: '10px'
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 1,
          strokeColor: '#e2e8f0',
        },
        spokes: {
          strokeWidth: 1,
          connectorColors: '#e2e8f0',
        }
      }
    }
  };

  const series = [2500, 1800, 1200, 900, 700, 500, 300, 200];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 h-full flex flex-col">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Vehicles By Types</h2>
      <div className="flex-1 flex items-center justify-center min-h-[300px]">
        <Chart options={options} series={series} type="polarArea" width="100%" height="100%" />
      </div>
    </div>
  );
}
