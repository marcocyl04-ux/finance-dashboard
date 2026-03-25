import { TrendingUp, TrendingDown, Wallet, DollarSign, PieChart, Activity } from 'lucide-react';
import { portfolioData } from '../data/mockData';
import { formatCurrency, formatPercent, cn } from '../lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  subValue?: string;
  subLabel?: string;
  icon: React.ElementType;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  delay?: number;
}

function StatCard({ title, value, subValue, subLabel, icon: Icon, trend, trendValue, delay = 0 }: StatCardProps) {
  return (
    <div 
      className="bg-[#111118] border border-[#252532] rounded-xl p-5 hover:border-[#3a3a4a] transition-all duration-300 animate-fade-in group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 rounded-lg bg-[#1a1a24] group-hover:bg-[#252532] transition-colors">
          <Icon className="w-5 h-5 text-blue-400" />
        </div>
        {trend && trendValue && (
          <div className={cn(
            "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
            trend === 'up' ? "bg-emerald-500/10 text-emerald-400" : 
            trend === 'down' ? "bg-rose-500/10 text-rose-400" : "bg-[#1a1a24] text-[#64748b]"
          )}>
            {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : trend === 'down' ? <TrendingDown className="w-3 h-3" /> : null}
            {trendValue}
          </div>
        )}
      </div>
      <p className="text-[#64748b] text-sm font-medium mb-1">{title}</p>
      <p className="text-2xl font-bold text-white mb-2">{value}</p>
      {subValue && (
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-white">{subValue}</span>
          {subLabel && <span className="text-xs text-[#64748b]">{subLabel}</span>}
        </div>
      )}
    </div>
  );
}

interface StatItem {
  title: string;
  value: string;
  subValue: string;
  subLabel: string;
  icon: React.ElementType;
  trend: 'up' | 'down' | 'neutral';
  trendValue: string;
}

export function PortfolioSummary() {
  const stats: StatItem[] = [
    {
      title: 'Total Portfolio Value',
      value: formatCurrency(portfolioData.totalValue),
      subValue: formatCurrency(portfolioData.totalPnL),
      subLabel: 'total return',
      icon: PieChart,
      trend: portfolioData.totalPnL >= 0 ? 'up' : 'down',
      trendValue: formatPercent(portfolioData.totalPnLPercent),
    },
    {
      title: "Today's P&L",
      value: formatCurrency(portfolioData.dayPnL),
      subValue: formatPercent(portfolioData.dayPnLPercent),
      subLabel: 'today',
      icon: Activity,
      trend: portfolioData.dayPnL >= 0 ? 'up' : 'down',
      trendValue: formatPercent(portfolioData.dayPnLPercent),
    },
    {
      title: 'Buying Power',
      value: formatCurrency(portfolioData.buyingPower),
      subValue: formatCurrency(portfolioData.cash),
      subLabel: 'cash available',
      icon: Wallet,
      trend: 'neutral',
      trendValue: 'Ready',
    },
    {
      title: 'Total Invested',
      value: formatCurrency(portfolioData.totalCost),
      subValue: '7',
      subLabel: 'positions',
      icon: DollarSign,
      trend: 'neutral',
      trendValue: 'Active',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={stat.title} {...stat} delay={index * 100} />
      ))}
    </div>
  );
}
