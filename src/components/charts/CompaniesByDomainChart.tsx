import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export function CompaniesByDomainChart() {
  const options: ApexOptions = {
    chart: {
      type: 'donut',
      fontFamily: 'Inter, sans-serif',
    },
    labels: ['Public Pax', 'School Transport', 'Freight & Cargo', 'Energy & Fuel Logistics', 'Specialty & Micro-Mobility', 'Driver Licensing & Training', 'Others'],
    colors: ['#3b82f6', '#f59e0b', '#10b981', '#a855f7', '#ec4899', '#84cc16', '#ef4444'],
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '12px',
              color: '#64748b',
              offsetY: -10
            },
            value: {
              show: true,
              fontSize: '24px',
              fontWeight: 700,
              color: '#0f172a',
              offsetY: 5
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Total',
              fontSize: '14px',
              color: '#0f172a',
              fontWeight: 600,
              formatter: function (w) {
                return "924"
              }
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2,
      colors: ['#ffffff']
    },
    legend: {
      position: 'bottom',
      markers: {
        size: 6,
      },
      itemMargin: {
        horizontal: 8,
        vertical: 4
      },
      fontSize: '10px'
    }
  };

  const series = [300, 200, 150, 100, 80, 50, 44];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 h-full flex flex-col">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Companies By Domain</h2>
      <div className="flex-1 flex items-center justify-center min-h-[300px]">
        <Chart options={options} series={series} type="donut" width="100%" height="100%" />
      </div>
    </div>
  );
}
