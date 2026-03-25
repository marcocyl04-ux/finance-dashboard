import { useState } from 'react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';
import { chartData } from '../data/mockData';
import { formatCurrency, cn } from '../lib/utils';

const timeRanges = ['1D', '1W', '1M', '3M', '1Y', 'ALL'] as const;

export function PriceChart() {
  const [selectedRange, setSelectedRange] = useState<typeof timeRanges[number]>('1D');
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const currentValue = hoveredValue ?? chartData[chartData.length - 1].value;
  const startValue = chartData[0].value;
  const change = currentValue - startValue;
  const changePercent = (change / startValue) * 100;

  return (
    <div className="bg-[#111118] border border-[#252532] rounded-xl p-5 animate-fade-in" style={{ animationDelay: '400ms' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">Portfolio Performance</h3>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-white">{formatCurrency(currentValue)}</span>
            <span className={cn(
              "text-sm font-medium px-2 py-0.5 rounded-full",
              change >= 0 ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"
            )}>
              {change >= 0 ? '+' : ''}{formatCurrency(change)} ({changePercent.toFixed(2)}%)
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-[#1a1a24] rounded-lg p-1">
          {timeRanges.map((range) => (
            <button
              key={range}
              onClick={() => setSelectedRange(range)}
              className={cn(
                "px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
                selectedRange === range 
                  ? "bg-[#252532] text-white" 
                  : "text-[#64748b] hover:text-white"
              )}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} onMouseMove={(e: any) => {
            if (e && e.activePayload && e.activePayload[0]) {
              setHoveredValue(e.activePayload[0].value as number);
            }
          }} onMouseLeave={() => setHoveredValue(null)}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#252532" vertical={false} />
            <XAxis 
              dataKey="time" 
              stroke="#64748b" 
              fontSize={12} 
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#64748b" 
              fontSize={12} 
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              domain={['dataMin - 1000', 'dataMax + 500']}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1a1a24', 
                border: '1px solid #252532',
                borderRadius: '8px',
                padding: '12px'
              }}
              itemStyle={{ color: '#fff' }}
              labelStyle={{ color: '#64748b', marginBottom: '4px' }}
              formatter={(value) => [formatCurrency(Number(value) || 0), 'Portfolio Value']}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#3b82f6" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorValue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
