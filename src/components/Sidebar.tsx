import { 
  LayoutDashboard, 
  PieChart, 
  TrendingUp, 
  History, 
  Settings, 
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: PieChart, label: 'Portfolio', active: false },
  { icon: TrendingUp, label: 'Markets', active: false },
  { icon: History, label: 'History', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 h-screen bg-[#111118] border-r border-[#252532] transition-all duration-300 z-50",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-[#252532]">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-white">FinDash</span>
          </div>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-[#1a1a24] text-[#64748b] hover:text-white transition-colors"
        >
          {collapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
        </button>
      </div>

      <nav className="p-3 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
              item.active 
                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" 
                : "text-[#64748b] hover:text-white hover:bg-[#1a1a24]"
            )}
          >
            <item.icon className={cn(
              "w-5 h-5 flex-shrink-0",
              item.active ? "text-blue-400" : "group-hover:text-white"
            )} />
            {!collapsed && (
              <span className="font-medium text-sm">{item.label}</span>
            )}
          </button>
        ))}
      </nav>

      {!collapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#252532]">
          <div className="bg-[#1a1a24] rounded-lg p-3 border border-[#252532]">
            <p className="text-xs text-[#64748b] mb-1">Account Status</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-emerald-400">Active</span>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
