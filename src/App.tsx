import React from 'react';
import { LiveTopSection } from './components/LiveTopSection';
import { 
  Menu, Settings, Bell, ChevronDown, 
  LayoutDashboard, Map, FileText, Radio, Link2, 
  Share2, File, Building2, Bus, CircleDashed, 
  Users, BadgeCheck, Home, Wrench, Cpu, Globe, 
  History, LineChart 
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">
      {/* Top Navigation */}
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-20 sticky top-0">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            {/* Logo placeholder */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-[10px]">ITC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-800 leading-tight">مركز النقل المتكامل</span>
                <span className="text-[9px] text-gray-500 leading-tight uppercase tracking-wider font-semibold mt-0.5">Integrated Transport Centre</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500 relative transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          
          <div className="h-8 w-px bg-gray-200 mx-1"></div>
          
          <button className="flex items-center gap-3 hover:bg-gray-50 p-1 pr-2 rounded-full transition-colors">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-semibold text-gray-700">John Doe</div>
              <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">Administrator</div>
            </div>
            <img 
              src="https://i.pravatar.cc/150?u=johndoe" 
              alt="User avatar" 
              className="w-9 h-9 rounded-full border border-gray-200 object-cover"
              referrerPolicy="no-referrer"
            />
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 gap-2 overflow-y-auto z-10 hidden sm:flex custom-scrollbar">
          <SidebarIcon icon={<LayoutDashboard />} active />
          <SidebarIcon icon={<Map />} />
          <SidebarIcon icon={<FileText />} />
          <SidebarIcon icon={<Radio />} />
          <SidebarIcon icon={<Link2 />} />
          <SidebarIcon icon={<Share2 />} />
          <SidebarIcon icon={<File />} />
          <SidebarIcon icon={<Building2 />} />
          <SidebarIcon icon={<Bus />} />
          <SidebarIcon icon={<CircleDashed />} />
          <SidebarIcon icon={<Users />} />
          <SidebarIcon icon={<BadgeCheck />} />
          <SidebarIcon icon={<Home />} />
          <SidebarIcon icon={<Wrench />} />
          <SidebarIcon icon={<Cpu />} />
          <SidebarIcon icon={<Globe />} />
          <SidebarIcon icon={<Bell />} />
          <SidebarIcon icon={<History />} />
          <SidebarIcon icon={<LineChart />} />
        </aside>

        {/* Main Content Wrapper */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="w-full">
            <LiveTopSection />
          </div>
        </main>
      </div>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-3 text-center text-xs text-gray-400 font-medium">
        &copy; Copyright - WioT 2022 - 2023
      </footer>
    </div>
  );
}

function SidebarIcon({ icon, active = false }: { icon: React.ReactNode, active?: boolean }) {
  return (
    <button className={`p-2.5 rounded-xl transition-colors ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'}`}>
      {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5' })}
    </button>
  );
}
