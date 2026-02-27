import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export function AreaSparkChart({ data, color = '#3b82f6' }: { data: number[], color?: string }) {
  const options: ApexOptions = {
    chart: {
      type: 'area',
      sparkline: { enabled: true },
      animations: { speed: 800, dynamicAnimation: { speed: 350 } }
    },
    stroke: { curve: 'smooth', width: 2 },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    colors: [color],
    tooltip: {
      fixed: { enabled: false },
      x: { show: false },
      y: { title: { formatter: () => '' } },
      marker: { show: false }
    }
  };

  return <Chart options={options} series={[{ data }]} type="area" height="100%" width="100%" />;
}
