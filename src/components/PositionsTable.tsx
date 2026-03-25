import { ArrowUpRight, ArrowDownRight, MoreHorizontal } from 'lucide-react';
import { positions } from '../data/mockData';
import { formatCurrency, formatPercent, cn } from '../lib/utils';

export function PositionsTable() {
  return (
    <div className="bg-[#111118] border border-[#252532] rounded-xl overflow-hidden animate-fade-in" style={{ animationDelay: '500ms' }}>
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#252532]">
        <h3 className="text-lg font-semibold text-white">Positions</h3>
        <button className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
          View All
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#252532]">
              <th className="text-left py-3 px-5 text-xs font-medium text-[#64748b] uppercase tracking-wider">Asset</th>
              <th className="text-right py-3 px-5 text-xs font-medium text-[#64748b] uppercase tracking-wider">Shares</th>
              <th className="text-right py-3 px-5 text-xs font-medium text-[#64748b] uppercase tracking-wider">Avg Price</th>
              <th className="text-right py-3 px-5 text-xs font-medium text-[#64748b] uppercase tracking-wider">Current</th>
              <th className="text-right py-3 px-5 text-xs font-medium text-[#64748b] uppercase tracking-wider">Value</th>
              <th className="text-right py-3 px-5 text-xs font-medium text-[#64748b] uppercase tracking-wider">Day Change</th>
              <th className="text-right py-3 px-5 text-xs font-medium text-[#64748b] uppercase tracking-wider">Total Return</th>
              <th className="py-3 px-5"></th>
            </tr>
          </thead>
          <tbody>
            {positions.map((position, index) => (
              <tr 
                key={position.symbol} 
                className="border-b border-[#252532]/50 hover:bg-[#1a1a24]/50 transition-colors"
                style={{ animationDelay: `${600 + index * 50}ms` }}
              >
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1a1a24] flex items-center justify-center font-bold text-sm text-white border border-[#252532]">
                      {position.symbol.slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{position.symbol}</p>
                      <p className="text-sm text-[#64748b]">{position.name}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5 text-right">
                  <span className="text-white font-medium">{position.shares}</span>
                </td>
                <td className="py-4 px-5 text-right">
                  <span className="text-[#94a3b8]">{formatCurrency(position.avgPrice)}</span>
                </td>
                <td className="py-4 px-5 text-right">
                  <span className="text-white font-medium">{formatCurrency(position.currentPrice)}</span>
                </td>
                <td className="py-4 px-5 text-right">
                  <span className="text-white font-semibold">{formatCurrency(position.value)}</span>
                </td>
                <td className="py-4 px-5 text-right">
                  <div className={cn(
                    "flex items-center justify-end gap-1",
                    position.dayChange >= 0 ? "text-emerald-400" : "text-rose-400"
                  )}>
                    {position.dayChange >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    <span className="font-medium">{formatPercent(position.dayChange)}</span>
                  </div>
                </td>
                <td className="py-4 px-5 text-right">
                  <div className={cn(
                    "flex items-center justify-end gap-1",
                    position.totalReturn >= 0 ? "text-emerald-400" : "text-rose-400"
                  )}>
                    {position.totalReturn >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    <span className="font-semibold">{formatCurrency(position.totalReturn)}</span>
                  </div>
                </td>
                <td className="py-4 px-5">
                  <button className="p-2 rounded-lg hover:bg-[#252532] text-[#64748b] hover:text-white transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
