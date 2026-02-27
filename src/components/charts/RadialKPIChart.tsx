import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export function RadialKPIChart({ value, color = '#3b82f6' }: { value: number, color?: string }) {
  const options: ApexOptions = {
    chart: {
      type: 'radialBar',
      sparkline: { enabled: true },
      animations: { speed: 800, animateGradually: { enabled: true, delay: 150 } }
    },
    plotOptions: {
      radialBar: {
        hollow: { size: '65%' },
        track: { background: 'rgba(0,0,0,0.05)' },
        dataLabels: { show: false }
      }
    },
    colors: [color],
    stroke: { lineCap: 'round' }
  };

  return <Chart options={options} series={[value]} type="radialBar" height="100%" width="100%" />;
}
