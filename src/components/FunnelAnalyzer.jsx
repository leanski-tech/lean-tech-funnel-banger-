import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  FunnelChart,
  Funnel,
  LabelList,
  Cell,
} from 'recharts';
import { STEP_TYPES } from '../data/templates';

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#14b8a6', '#3b82f6', '#f97316'];

export default function FunnelAnalyzer({ funnel }) {
  if (!funnel || funnel.steps.length === 0) {
    return (
      <div className="analyzer-empty">
        <div className="canvas-empty-icon">📊</div>
        <h3>No data to analyse</h3>
        <p>Add steps to your funnel in the Builder tab to see metrics here.</p>
      </div>
    );
  }

  const steps = funnel.steps;
  const first = steps[0];
  const last = steps[steps.length - 1];

  const totalDropRate = first.visits > 0
    ? (((first.visits - last.conversions) / first.visits) * 100).toFixed(1)
    : '0.0';
  const overallConvRate = first.visits > 0
    ? ((last.conversions / first.visits) * 100).toFixed(1)
    : '0.0';

  const chartData = steps.map((s, i) => ({
    name: s.name,
    visits: s.visits,
    conversions: s.conversions,
    dropOff: s.visits - s.conversions,
    convRate: s.visits > 0 ? +((s.conversions / s.visits) * 100).toFixed(1) : 0,
    fill: COLORS[i % COLORS.length],
    value: s.visits,
  }));

  return (
    <div className="analyzer">
      {/* Summary cards */}
      <div className="analyzer-cards">
        <div className="analyzer-card">
          <div className="card-label">Total Visitors</div>
          <div className="card-value">{first.visits.toLocaleString()}</div>
        </div>
        <div className="analyzer-card">
          <div className="card-label">Final Conversions</div>
          <div className="card-value">{last.conversions.toLocaleString()}</div>
        </div>
        <div className="analyzer-card">
          <div className="card-label">Overall Conv. Rate</div>
          <div className="card-value green">{overallConvRate}%</div>
        </div>
        <div className="analyzer-card">
          <div className="card-label">Total Drop-Off</div>
          <div className="card-value red">{totalDropRate}%</div>
        </div>
      </div>

      {/* Funnel chart */}
      <div className="chart-section">
        <h3 className="chart-title">Funnel Visualisation</h3>
        <ResponsiveContainer width="100%" height={300}>
          <FunnelChart>
            <Tooltip formatter={(value) => [value.toLocaleString(), 'Visitors']} />
            <Funnel dataKey="value" data={chartData} isAnimationActive>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              <LabelList position="center" fill="#fff" stroke="none" dataKey="name" />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>

      {/* Bar chart: visits vs conversions */}
      <div className="chart-section">
        <h3 className="chart-title">Visits vs Conversions per Step</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={chartData} margin={{ top: 5, right: 20, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-30} textAnchor="end" interval={0} tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="visits" name="Visitors" fill="#6366f1" radius={[4, 4, 0, 0]} />
            <Bar dataKey="conversions" name="Conversions" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Metrics table */}
      <div className="chart-section">
        <h3 className="chart-title">Step-by-Step Metrics</h3>
        <div className="table-wrapper">
          <table className="metrics-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Step</th>
                <th>Type</th>
                <th>Visitors</th>
                <th>Conversions</th>
                <th>Conv. Rate</th>
                <th>Drop-Off</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((step, i) => {
                const info = STEP_TYPES[step.type] || { label: step.type, icon: '📄', color: '#6b7280' };
                const rate = step.visits > 0 ? ((step.conversions / step.visits) * 100).toFixed(1) : '0.0';
                const dropOff = step.visits - step.conversions;
                const dropRate = step.visits > 0 ? (((step.visits - step.conversions) / step.visits) * 100).toFixed(1) : '0.0';
                return (
                  <tr key={step.id}>
                    <td>{i + 1}</td>
                    <td>{step.name}</td>
                    <td>
                      <span className="step-type-badge" style={{ background: info.color + '22', color: info.color }}>
                        {info.icon} {info.label}
                      </span>
                    </td>
                    <td>{step.visits.toLocaleString()}</td>
                    <td>{step.conversions.toLocaleString()}</td>
                    <td>
                      <span className={`rate-badge ${+rate >= 50 ? 'good' : +rate >= 25 ? 'ok' : 'bad'}`}>
                        {rate}%
                      </span>
                    </td>
                    <td className="drop-off">{dropOff.toLocaleString()} ({dropRate}%)</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
