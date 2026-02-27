import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export function LineSparkChart({ data, color = '#3b82f6' }: { data: number[], color?: string }) {
  const options: ApexOptions = {
    chart: {
      type: 'line',
      sparkline: { enabled: true },
      animations: { speed: 800, dynamicAnimation: { speed: 350 } }
    },
    stroke: { curve: 'smooth', width: 2 },
    colors: [color],
    tooltip: {
      fixed: { enabled: false },
      x: { show: false },
      y: { title: { formatter: () => '' } },
      marker: { show: false }
    }
  };

  return <Chart options={options} series={[{ data }]} type="line" height="100%" width="100%" />;
}
