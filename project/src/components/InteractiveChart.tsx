import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface ChartDataPoint {
  month: string;
  value: number;
  growth: number;
  details: {
    newCustomers: number;
    recurring: number;
    churn: number;
  };
}

const InteractiveChart: React.FC = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const chartData: ChartDataPoint[] = [
    {
      month: 'Gen',
      value: 85000,
      growth: 12.5,
      details: { newCustomers: 150, recurring: 680, churn: 25 }
    },
    {
      month: 'Feb',
      value: 92000,
      growth: 8.2,
      details: { newCustomers: 180, recurring: 720, churn: 30 }
    },
    {
      month: 'Mar',
      value: 108000,
      growth: 17.4,
      details: { newCustomers: 220, recurring: 780, churn: 20 }
    },
    {
      month: 'Apr',
      value: 98000,
      growth: -9.3,
      details: { newCustomers: 160, recurring: 740, churn: 45 }
    },
    {
      month: 'Mag',
      value: 115000,
      growth: 17.3,
      details: { newCustomers: 280, recurring: 820, churn: 15 }
    },
    {
      month: 'Giu',
      value: 127000,
      growth: 10.4,
      details: { newCustomers: 320, recurring: 880, churn: 18 }
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const maxValue = Math.max(...chartData.map(d => d.value));
  const minValue = Math.min(...chartData.map(d => d.value));
  const range = maxValue - minValue;

  // Chart dimensions and positioning constants
  const chartConfig = {
    width: 560,
    height: 280,
    padding: {
      top: 40,
      right: 40,
      bottom: 40,
      left: 60
    },
    plotArea: {
      width: 480, // 560 - 60 - 20
      height: 200  // 280 - 40 - 40
    }
  };
  const getYPosition = (value: number) => {
    // Calculate Y position within the plot area, then add top padding
    const normalizedValue = (value - minValue) / range;
    const plotY = chartConfig.plotArea.height - (normalizedValue * chartConfig.plotArea.height);
    return plotY + chartConfig.padding.top;
  };

  const getXPosition = (index: number) => {
    // Calculate X position within the plot area, then add left padding
    const stepWidth = chartConfig.plotArea.width / (chartData.length - 1);
    return chartConfig.padding.left + (index * stepWidth);
  };

  const getTooltipPosition = (index: number, mouseX: number) => {
    const chartWidth = chartConfig.width;
    const tooltipWidth = 200;
    const padding = 20;
    
    // Calculate base position
    let x = getXPosition(index) - (tooltipWidth / 2);
    
    // Prevent overflow on left edge
    if (x < padding) {
      x = padding;
    }
    
    // Prevent overflow on right edge
    if (x + tooltipWidth > chartWidth - padding) {
      x = chartWidth - tooltipWidth - padding;
    }
    
    return x;
  };

  // Generate path data using consistent coordinate system
  const pathData = chartData
    .map((point, index) => {
      const x = getXPosition(index);
      const y = getYPosition(point.value);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  return (
    <div className="bg-black/60 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-6 shadow-2xl shadow-cyan-400/10 overflow-visible">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Analisi Ricavi Interattiva</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
          <span>Ricavi Mensili</span>
        </div>
      </div>

      <div className="relative">
        {/* Chart Container */}
        <div className="relative" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <svg 
            width="100%" 
            height={chartConfig.height} 
            viewBox={`0 0 ${chartConfig.width} ${chartConfig.height}`} 
            className="overflow-visible"
          >
          {/* Grid Lines */}
          <defs>
            <pattern id="grid" width="96" height="40" patternUnits="userSpaceOnUse" opacity="0.3">
              <path d="M 96 0 L 0 0 0 40" fill="none" stroke="rgb(6 182 212 / 0.2)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect 
            x={chartConfig.padding.left} 
            y={chartConfig.padding.top} 
            width={chartConfig.plotArea.width} 
            height={chartConfig.plotArea.height} 
            fill="url(#grid)" 
          />

          {/* Chart Line */}
          <path
            d={pathData}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-all duration-1500 ${animationComplete ? 'opacity-100' : 'opacity-0'}`}
            style={{
              strokeDasharray: animationComplete ? 'none' : '1000',
              strokeDashoffset: animationComplete ? '0' : '1000'
            }}
          />

          {/* Gradient Definition */}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00FFFF" />
              <stop offset="100%" stopColor="#0891B2" />
            </linearGradient>
            <linearGradient id="pointGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFFF" />
              <stop offset="100%" stopColor="#0891B2" />
            </linearGradient>
          </defs>

          {/* Data Points */}
          {chartData.map((point, index) => {
            const x = getXPosition(index);
            const y = getYPosition(point.value);
            const isHovered = hoveredPoint === index;

            return (
              <g key={index}>
                {/* Hover Area */}
                <circle
                  cx={x}
                  cy={y}
                  r="40"
                  fill="transparent"
                  className="cursor-pointer opacity-0"
                  onMouseEnter={(e) => {
                    setHoveredPoint(index);
                    setMousePosition({ x: e.clientX, y: e.clientY });
                  }}
                  onMouseLeave={() => setHoveredPoint(null)}
                  onMouseMove={(e) => {
                    setMousePosition({ x: e.clientX, y: e.clientY });
                  }}
                />
                
                {/* Data Point */}
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered ? "10" : "7"}
                  fill="url(#pointGradient)"
                  className={`transition-all duration-300 ${animationComplete ? 'opacity-100' : 'opacity-0'} pointer-events-none`}
                  style={{
                    filter: isHovered ? 'drop-shadow(0 0 12px #00FFFF) drop-shadow(0 0 24px #00FFFF)' : 'drop-shadow(0 0 4px rgba(0,255,255,0.3))',
                    animationDelay: `${index * 200}ms`
                  }}
                />

                {/* Month Label */}
                <text
                  x={x}
                  y="265"
                  textAnchor="middle"
                  className="text-sm fill-gray-300 font-medium pointer-events-none"
                >
                  {point.month}
                </text>
              </g>
            );
          })}
          </svg>
          
          {/* Floating Tooltip */}
          {hoveredPoint !== null && (
            <div 
              className="absolute pointer-events-none z-50 transition-all duration-200"
              style={{
                left: `${getTooltipPosition(hoveredPoint, mousePosition.x)}px`,
                top: `${getYPosition(chartData[hoveredPoint].value) - 40}px`,
                transform: 'translateY(-100%)'
              }}
            >
              <div className="bg-black/95 backdrop-blur-md border border-cyan-500/40 rounded-xl p-4 shadow-2xl min-w-[220px]"
                   style={{ 
                     boxShadow: '0 0 30px rgba(0, 255, 255, 0.2), 0 0 60px rgba(0, 255, 255, 0.1)',
                     border: '1px solid rgba(0, 255, 255, 0.4)'
                   }}>
                {/* Arrow */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black/95 border-r border-b border-cyan-500/40 rotate-45"></div>
                
                <div className="text-center mb-3">
                  <div className="text-xl font-bold text-cyan-400 mb-1">
                    €{chartData[hoveredPoint].value.toLocaleString()}
                  </div>
                  <div className={`text-sm flex items-center justify-center space-x-1 ${
                    chartData[hoveredPoint].growth >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {chartData[hoveredPoint].growth >= 0 ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="font-semibold">
                      {chartData[hoveredPoint].growth >= 0 ? '+' : ''}{chartData[hoveredPoint].growth}%
                    </span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-300 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Nuovi clienti:</span>
                    <span className="text-cyan-400 font-semibold">{chartData[hoveredPoint].details.newCustomers}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Ricorrenti:</span>
                    <span className="text-green-400 font-semibold">{chartData[hoveredPoint].details.recurring}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Persi:</span>
                    <span className="text-red-400 font-semibold">{chartData[hoveredPoint].details.churn}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-black/40 rounded-lg p-4 border border-cyan-500/20">
            <div className="text-sm text-gray-400 mb-1">Ricavi Totali</div>
            <div className="text-xl font-bold text-cyan-400">
              €{chartData.reduce((sum, point) => sum + point.value, 0).toLocaleString()}
            </div>
          </div>
          <div className="bg-black/40 rounded-lg p-4 border border-cyan-500/20">
            <div className="text-sm text-gray-400 mb-1">Crescita Media</div>
            <div className="text-xl font-bold text-green-400">
              +{(chartData.reduce((sum, point) => sum + point.growth, 0) / chartData.length).toFixed(1)}%
            </div>
          </div>
          <div className="bg-black/40 rounded-lg p-4 border border-cyan-500/20">
            <div className="text-sm text-gray-400 mb-1">Miglior Mese</div>
            <div className="text-xl font-bold text-cyan-400">
              {chartData.reduce((max, point) => point.value > max.value ? point : max).month}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveChart;