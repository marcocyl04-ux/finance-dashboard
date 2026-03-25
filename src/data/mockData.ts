// Mock data for the dashboard
export const portfolioData = {
  totalValue: 124893.45,
  totalCost: 118200.00,
  dayPnL: 2341.89,
  dayPnLPercent: 1.91,
  totalPnL: 6693.45,
  totalPnLPercent: 5.66,
  buyingPower: 45231.20,
  cash: 32456.78,
};

export const positions = [
  { symbol: 'AAPL', name: 'Apple Inc.', shares: 150, avgPrice: 178.50, currentPrice: 189.42, value: 28413.00, dayChange: 2.34, totalReturn: 1638.00 },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', shares: 85, avgPrice: 485.20, currentPrice: 523.78, value: 44521.30, dayChange: 4.12, totalReturn: 3279.30 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', shares: 95, avgPrice: 372.15, currentPrice: 389.25, value: 36978.75, dayChange: 1.08, totalReturn: 1624.50 },
  { symbol: 'TSLA', name: 'Tesla Inc.', shares: 200, avgPrice: 245.80, currentPrice: 228.45, value: 45690.00, dayChange: -2.45, totalReturn: -3470.00 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', shares: 180, avgPrice: 145.30, currentPrice: 151.89, value: 27340.20, dayChange: 0.87, totalReturn: 1186.20 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 120, avgPrice: 138.75, currentPrice: 142.56, value: 17107.20, dayChange: 1.23, totalReturn: 457.20 },
  { symbol: 'META', name: 'Meta Platforms', shares: 65, avgPrice: 298.40, currentPrice: 315.78, value: 20525.70, dayChange: 2.89, totalReturn: 1129.70 },
];

export const chartData = [
  { time: '09:30', value: 122500 },
  { time: '10:00', value: 122850 },
  { time: '10:30', value: 123200 },
  { time: '11:00', value: 122950 },
  { time: '11:30', value: 123450 },
  { time: '12:00', value: 123800 },
  { time: '12:30', value: 124100 },
  { time: '13:00', value: 123950 },
  { time: '13:30', value: 124250 },
  { time: '14:00', value: 124650 },
  { time: '14:30', value: 124400 },
  { time: '15:00', value: 124893 },
];

export const recentTrades = [
  { time: '14:32:15', symbol: 'NVDA', type: 'BUY', shares: 25, price: 523.78, total: 13094.50 },
  { time: '13:45:22', symbol: 'AAPL', type: 'SELL', shares: 50, price: 189.42, total: 9471.00 },
  { time: '11:20:08', symbol: 'TSLA', type: 'BUY', shares: 100, price: 231.20, total: 23120.00 },
  { time: '10:15:33', symbol: 'MSFT', type: 'BUY', shares: 30, price: 387.50, total: 11625.00 },
];

export const marketIndices = [
  { name: 'S&P 500', value: 4789.32, change: 1.24 },
  { name: 'NASDAQ', value: 15023.45, change: 1.89 },
  { name: 'DOW', value: 37543.21, change: 0.67 },
  { name: 'VIX', value: 13.42, change: -5.23 },
];
