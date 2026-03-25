import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { PortfolioSummary } from './components/PortfolioSummary';
import { PriceChart } from './components/PriceChart';
import { PositionsTable } from './components/PositionsTable';
import { RecentTrades } from './components/RecentTrades';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Sidebar />
      
      <div className="ml-64">
        <Header />
        
        <main className="pt-16 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Page Title */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                <p className="text-[#64748b] mt-1">Welcome back, Marco. Here's your portfolio overview.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 rounded-lg bg-[#1a1a24] border border-[#252532] text-white font-medium hover:bg-[#252532] transition-colors">
                  Export
                </button>
                <button className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">
                  New Trade
                </button>
              </div>
            </div>

            {/* Portfolio Summary Cards */}
            <PortfolioSummary />

            {/* Chart and Recent Trades Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <PriceChart />
              </div>
              <div>
                <RecentTrades />
              </div>
            </div>

            {/* Positions Table */}
            <PositionsTable />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
