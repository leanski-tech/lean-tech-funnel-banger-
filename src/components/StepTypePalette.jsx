import { STEP_TYPES } from '../data/templates';

export default function StepTypePalette({ onAdd }) {
  return (
    <div className="palette">
      <h3 className="palette-title">Step Types</h3>
      <p className="palette-hint">Click to add a step to your funnel</p>
      <div className="palette-items">
        {Object.entries(STEP_TYPES).map(([type, info]) => (
          <button
            key={type}
            className="palette-item"
            style={{ borderLeft: `4px solid ${info.color}` }}
            onClick={() => onAdd(type)}
            title={`Add ${info.label}`}
          >
            <span className="palette-icon">{info.icon}</span>
            <span className="palette-label">{info.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
