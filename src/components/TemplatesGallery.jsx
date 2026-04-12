import { TEMPLATES } from '../data/templates';

const CATEGORY_COLORS = {
  Beginner: '#10b981',
  Intermediate: '#f59e0b',
  Advanced: '#ef4444',
};

export default function TemplatesGallery({ onLoad }) {
  return (
    <div className="templates">
      <div className="templates-header">
        <h2>Example Funnel Templates</h2>
        <p>Click <strong>Use Template</strong> to load a pre-built funnel into your workspace.</p>
      </div>
      <div className="templates-grid">
        {TEMPLATES.map((tmpl) => (
          <div key={tmpl.id} className="template-card">
            <div className="template-card-header">
              <span
                className="template-category"
                style={{ background: CATEGORY_COLORS[tmpl.category] + '22', color: CATEGORY_COLORS[tmpl.category] }}
              >
                {tmpl.category}
              </span>
              <h3 className="template-name">{tmpl.name}</h3>
              <p className="template-desc">{tmpl.description}</p>
            </div>
            <div className="template-steps">
              {tmpl.steps.map((step, i) => (
                <div key={step.id} className="template-step-row">
                  <span className="template-step-num">{i + 1}</span>
                  <span className="template-step-name">{step.name}</span>
                  {i < tmpl.steps.length - 1 && <span className="template-step-arrow">→</span>}
                </div>
              ))}
            </div>
            <div className="template-metrics">
              <span>👥 {tmpl.steps[0].visits.toLocaleString()} visitors</span>
              <span>✅ {tmpl.steps[tmpl.steps.length - 1].conversions.toLocaleString()} conversions</span>
              <span>
                📈{' '}
                {((tmpl.steps[tmpl.steps.length - 1].conversions / tmpl.steps[0].visits) * 100).toFixed(1)}%
                overall rate
              </span>
            </div>
            <button className="btn btn-primary" onClick={() => onLoad(tmpl)}>
              Use Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
