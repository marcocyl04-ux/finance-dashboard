import { recentTrades } from '../data/mockData';
import { formatCurrency, cn } from '../lib/utils';
import { ArrowRightLeft } from 'lucide-react';

export function RecentTrades() {
  return (
    <div className="bg-[#111118] border border-[#252532] rounded-xl overflow-hidden animate-fade-in" style={{ animationDelay: '600ms' }}>
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#252532]">
        <h3 className="text-lg font-semibold text-white">Recent Trades</h3>
        <button className="p-2 rounded-lg hover:bg-[#1a1a24] text-[#64748b] hover:text-white transition-colors">
          <ArrowRightLeft className="w-4 h-4" />
        </button>
      </div>
      
      <div className="divide-y divide-[#252532]/50">
        {recentTrades.map((trade, index) => (
          <div 
            key={`${trade.time}-${index}`}
            className="flex items-center justify-between px-5 py-3 hover:bg-[#1a1a24]/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm border",
                trade.type === 'BUY' 
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                  : "bg-rose-500/10 text-rose-400 border-rose-500/20"
              )}>
                {trade.symbol.slice(0, 2)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">{trade.symbol}</span>
                  <span className={cn(
                    "text-xs px-1.5 py-0.5 rounded font-medium",
                    trade.type === 'BUY' 
                      ? "bg-emerald-500/10 text-emerald-400" 
                      : "bg-rose-500/10 text-rose-400"
                  )}>
                    {trade.type}
                  </span>
                </div>
                <p className="text-xs text-[#64748b]">{trade.time}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-white">{formatCurrency(trade.total)}</p>
              <p className="text-xs text-[#64748b]">{trade.shares} shares @ {formatCurrency(trade.price)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
