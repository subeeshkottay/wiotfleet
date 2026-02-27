import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export function BarSparkChart({ data, color = '#3b82f6' }: { data: number[], color?: string }) {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      sparkline: { enabled: true },
      animations: { speed: 800, dynamicAnimation: { speed: 350 } }
    },
    plotOptions: {
      bar: {
        columnWidth: '60%',
        borderRadius: 2
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

  return <Chart options={options} series={[{ data }]} type="bar" height="100%" width="100%" />;
}
