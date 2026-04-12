import { useState } from 'react';

export default function Sidebar({
  funnels,
  activeFunnelId,
  onSelect,
  onNew,
  onDelete,
  onRename,
  activeTab,
  onTabChange,
}) {
  const [renamingId, setRenamingId] = useState(null);
  const [renameValue, setRenameValue] = useState('');

  function startRename(funnel) {
    setRenamingId(funnel.id);
    setRenameValue(funnel.name);
  }

  function commitRename(id) {
    if (renameValue.trim()) onRename(id, renameValue.trim());
    setRenamingId(null);
  }

  return (
    <aside className="sidebar">
      {/* App logo / title */}
      <div className="sidebar-logo">
        <span className="logo-icon">🔥</span>
        <div>
          <div className="logo-title">Funnel Banger</div>
          <div className="logo-subtitle">Lean Tech</div>
        </div>
      </div>

      {/* Nav tabs */}
      <nav className="sidebar-nav">
        {[
          { id: 'builder', label: '🏗️ Builder' },
          { id: 'analyzer', label: '📊 Analyzer' },
          { id: 'templates', label: '📋 Templates' },
          { id: 'guide', label: '📖 How To' },
        ].map((tab) => (
          <button
            key={tab.id}
            className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Funnel list */}
      <div className="sidebar-section">
        <div className="sidebar-section-header">
          <span>My Funnels</span>
          <button className="btn btn-primary btn-small" onClick={onNew} title="Create new funnel">
            + New
          </button>
        </div>
        <ul className="funnel-list">
          {funnels.map((funnel) => (
            <li
              key={funnel.id}
              className={`funnel-list-item ${funnel.id === activeFunnelId ? 'active' : ''}`}
              onClick={() => onSelect(funnel.id)}
            >
              {renamingId === funnel.id ? (
                <input
                  className="rename-input"
                  value={renameValue}
                  autoFocus
                  onChange={(e) => setRenameValue(e.target.value)}
                  onBlur={() => commitRename(funnel.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') commitRename(funnel.id);
                    if (e.key === 'Escape') setRenamingId(null);
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <>
                  <span className="funnel-list-name" title={funnel.name}>
                    {funnel.name}
                  </span>
                  <span className="funnel-list-actions">
                    <button
                      className="icon-btn"
                      title="Rename"
                      onClick={(e) => {
                        e.stopPropagation();
                        startRename(funnel);
                      }}
                    >
                      ✏️
                    </button>
                    <button
                      className="icon-btn danger"
                      title="Delete"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (window.confirm(`Delete "${funnel.name}"?`)) onDelete(funnel.id);
                      }}
                    >
                      🗑️
                    </button>
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-footer">
        <small>All data saved locally in your browser.</small>
      </div>
    </aside>
  );
}
