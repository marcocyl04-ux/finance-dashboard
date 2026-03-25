import { Bell, Search, User } from 'lucide-react';
import { marketIndices } from '../data/mockData';
import { formatNumber, cn } from '../lib/utils';

export function Header() {
  return (
    <header className="h-16 bg-[#111118]/80 backdrop-blur-xl border-b border-[#252532] fixed top-0 right-0 left-64 z-40">
      <div className="h-full flex items-center justify-between px-6">
        {/* Market Ticker */}
        <div className="flex items-center gap-6 overflow-hidden">
          {marketIndices.map((index) => (
            <div key={index.name} className="flex items-center gap-2 text-sm whitespace-nowrap">
              <span className="text-[#64748b] font-medium">{index.name}</span>
              <span className="text-white font-semibold">{formatNumber(index.value, index.name === 'VIX' ? 2 : 2)}</span>
              <span className={cn(
                "text-xs font-medium",
                index.change >= 0 ? "text-emerald-400" : "text-rose-400"
              )}>
                {index.change >= 0 ? '+' : ''}{index.change.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748b]" />
            <input 
              type="text"
              placeholder="Search assets..."
              className="w-64 bg-[#1a1a24] border border-[#252532] rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-blue-500/50 transition-colors"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-[#1a1a24] text-[#64748b] hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full" />
          </button>

          {/* User */}
          <button className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-[#1a1a24] transition-colors">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-sm font-medium text-white">Marco Lam</p>
              <p className="text-xs text-[#64748b]">Pro Account</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
