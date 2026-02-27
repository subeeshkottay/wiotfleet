import React from 'react';

interface KPIChartCardProps {
  title: string;
  value: string | number;
  trend: string;
  isPositive: boolean;
  icon: React.ReactNode;
  colorClass: string;
  iconBgClass: string;
  children: React.ReactNode;
}

export function KPIChartCard({ title, value, trend, isPositive, icon, colorClass, iconBgClass, children }: KPIChartCardProps) {
  return (
    <div className={`rounded-xl p-6 flex relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-md group cursor-pointer ${colorClass}`}>
      <div className="flex flex-col z-10 w-3/5">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${iconBgClass}`}>
          {icon}
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-black">{value}</div>
        <div className="text-sm font-medium text-gray-600 mb-4">{title}</div>
        <div className={`text-xs font-medium ${isPositive ? 'text-emerald-600' : 'text-red-500'}`}>
          {trend}
        </div>
      </div>
      <div className="w-2/5 h-full absolute right-0 bottom-0 z-0 flex items-center justify-end pr-4 pb-4 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-x-1">
        <div className="w-full h-20">
          {children}
        </div>
      </div>
    </div>
  );
}
