import { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { STEP_TYPES } from '../data/templates';

export default function FunnelStep({ step, onUpdate, onDelete, index, total }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: step.name, visits: step.visits, conversions: step.conversions });

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: step.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const info = STEP_TYPES[step.type] || { label: step.type, icon: '📄', color: '#6b7280' };
  const convRate = step.visits > 0 ? ((step.conversions / step.visits) * 100).toFixed(1) : '0.0';

  function save() {
    onUpdate(step.id, {
      name: form.name,
      visits: Number(form.visits) || 0,
      conversions: Math.min(Number(form.conversions) || 0, Number(form.visits) || 0),
    });
    setEditing(false);
  }

  return (
    <div ref={setNodeRef} style={style} className={`funnel-step ${isDragging ? 'dragging' : ''}`}>
      {/* Drag handle */}
      <div
        className="step-drag-handle"
        {...attributes}
        {...listeners}
        title="Drag to reorder"
      >
        ⠿
      </div>

      {/* Step number */}
      <div className="step-number" style={{ background: info.color }}>
        {index + 1}
      </div>

      {/* Icon */}
      <div className="step-icon" style={{ color: info.color }}>
        {info.icon}
      </div>

      {/* Content */}
      {editing ? (
        <div className="step-edit-form">
          <input
            className="step-input"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Step name"
          />
          <div className="step-metrics-edit">
            <label>
              Visits
              <input
                className="step-input step-input-small"
                type="number"
                min="0"
                value={form.visits}
                onChange={(e) => setForm({ ...form, visits: e.target.value })}
              />
            </label>
            <label>
              Conversions
              <input
                className="step-input step-input-small"
                type="number"
                min="0"
                value={form.conversions}
                onChange={(e) => setForm({ ...form, conversions: e.target.value })}
              />
            </label>
          </div>
          <div className="step-actions">
            <button className="btn btn-primary btn-small" onClick={save}>Save</button>
            <button className="btn btn-ghost btn-small" onClick={() => setEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="step-content">
          <div className="step-info">
            <span className="step-type-badge" style={{ background: info.color + '22', color: info.color }}>
              {info.label}
            </span>
            <span className="step-name">{step.name}</span>
          </div>
          <div className="step-metrics">
            <span className="metric" title="Visitors">👥 {step.visits.toLocaleString()}</span>
            <span className="metric" title="Conversions">✅ {step.conversions.toLocaleString()}</span>
            <span className="metric metric-rate" title="Conversion rate">
              {convRate}%
            </span>
          </div>
          <div className="step-actions">
            <button className="btn btn-ghost btn-small" onClick={() => setEditing(true)}>✏️ Edit</button>
            <button className="btn btn-danger btn-small" onClick={() => onDelete(step.id)}>🗑️</button>
          </div>
        </div>
      )}

      {/* Arrow connector (not on last step) */}
      {index < total - 1 && (
        <div className="step-connector">▼</div>
      )}
    </div>
  );
}
