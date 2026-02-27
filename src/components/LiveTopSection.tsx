import React, { useState, useEffect } from 'react';
import { KPIChartCard } from './KPIChartCard';
import { RadialKPIChart } from './charts/RadialKPIChart';
import { LineSparkChart } from './charts/LineSparkChart';
import { DrivenKmChart } from './charts/DrivenKmChart';
import { CompaniesByDomainChart } from './charts/CompaniesByDomainChart';
import { VehiclesByTypesChart } from './charts/VehiclesByTypesChart';
import { PermitsChart } from './charts/PermitsChart';
import { InspectionOverviewChart } from './charts/InspectionOverviewChart';
import { ViolationsByTypeChart } from './charts/ViolationsByTypeChart';
import { CO2EmissionTrendChart } from './charts/CO2EmissionTrendChart';
import { Building2, Bus, Users, Calendar, ListFilter } from 'lucide-react';

export function LiveTopSection() {
  return (
    <div className="w-full">
      {/* Header Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-[#0f172a]">Live Operations Overview</h1>
          <p className="text-[15px] text-[#475569] mt-1">Real-time fleet performance and operational intelligence</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-[14px] font-medium text-[#334155] hover:bg-gray-50 flex items-center gap-2 transition-colors">
            <Calendar className="w-4 h-4 text-[#64748b]" />
            Jan 1, 2026 - Jan 31, 2026
          </button>
          <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-[14px] font-medium text-[#334155] hover:bg-gray-50 flex items-center gap-2 transition-colors">
            <ListFilter className="w-4 h-4 text-[#334155]" /> Filter
          </button>
        </div>
      </div>

      {/* KPI Cards Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Key Operational Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPIChartCard 
            title="Total Companies" 
            value="924" 
            trend="+12% from last month" 
            isPositive={true}
            icon={<Building2 className="w-5 h-5" />}
            colorClass="bg-[#e0f2fe]"
            iconBgClass="bg-[#0ea5e9]"
          >
            <RadialKPIChart value={75} color="#0ea5e9" />
          </KPIChartCard>
          
          <KPIChartCard 
            title="Total Vehicles" 
            value="11,240" 
            trend="+7% from last month" 
            isPositive={true}
            icon={<Bus className="w-5 h-5" />}
            colorClass="bg-[#f3e8ff]"
            iconBgClass="bg-[#a855f7]"
          >
            <LineSparkChart data={[10, 15, 13, 18, 16, 22, 20, 25]} color="#a855f7" />
          </KPIChartCard>
          
          <KPIChartCard 
            title="Total Drivers" 
            value="9,780" 
            trend="+5% from last month" 
            isPositive={true}
            icon={<div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center"><div className="w-2 h-2 bg-white rounded-full"></div></div>}
            colorClass="bg-[#dcfce7]"
            iconBgClass="bg-[#22c55e]"
          >
            <LineSparkChart data={[15, 18, 20, 22, 25, 28, 32, 35]} color="#22c55e" />
          </KPIChartCard>
          
          <KPIChartCard 
            title="Total Supervisors" 
            value="6,462" 
            trend="-17% from last month" 
            isPositive={false}
            icon={<Users className="w-5 h-5" />}
            colorClass="bg-[#ffedd5]"
            iconBgClass="bg-[#f97316]"
          >
            <LineSparkChart data={[35, 30, 28, 25, 26, 22, 20, 18]} color="#f97316" />
          </KPIChartCard>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        <div className="lg:col-span-6">
          <DrivenKmChart />
        </div>
        <div className="lg:col-span-3">
          <CompaniesByDomainChart />
        </div>
        <div className="lg:col-span-3">
          <VehiclesByTypesChart />
        </div>
      </div>

      {/* Second Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        <div className="lg:col-span-6">
          <PermitsChart />
        </div>
        <div className="lg:col-span-6">
          <InspectionOverviewChart />
        </div>
      </div>

      {/* Third Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6">
          <ViolationsByTypeChart />
        </div>
        <div className="lg:col-span-6">
          <CO2EmissionTrendChart />
        </div>
      </div>
    </div>
  );
}
