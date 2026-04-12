import { useState } from 'react';
import Sidebar from './components/Sidebar';
import FunnelBuilder from './components/FunnelBuilder';
import FunnelAnalyzer from './components/FunnelAnalyzer';
import TemplatesGallery from './components/TemplatesGallery';
import HowToGuide from './components/HowToGuide';
import { useFunnels } from './hooks/useFunnels';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('builder');

  const {
    funnels,
    activeFunnel,
    activeFunnelId,
    setActiveFunnel,
    createFunnel,
    deleteFunnel,
    renameFunnel,
    loadTemplate,
    updateSteps,
    addStep,
    updateStep,
    deleteStep,
  } = useFunnels();

  function handleLoadTemplate(template) {
    loadTemplate(template);
    setActiveTab('builder');
  }

  return (
    <div className="app">
      <Sidebar
        funnels={funnels}
        activeFunnelId={activeFunnelId}
        onSelect={setActiveFunnel}
        onNew={() => createFunnel()}
        onDelete={deleteFunnel}
        onRename={renameFunnel}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="main-content">
        {/* Header */}
        <header className="main-header">
          <div>
            <h1 className="main-title">
              {activeTab === 'builder' && `🏗️ Builder — ${activeFunnel?.name || 'Untitled'}`}
              {activeTab === 'analyzer' && `📊 Analyzer — ${activeFunnel?.name || 'Untitled'}`}
              {activeTab === 'templates' && '📋 Templates'}
              {activeTab === 'guide' && '📖 How To Guide'}
            </h1>
            {(activeTab === 'builder' || activeTab === 'analyzer') && activeFunnel && (
              <p className="main-subtitle">
                {activeFunnel.steps.length} step{activeFunnel.steps.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>
          {activeTab === 'builder' && activeFunnel && (
            <div className="header-actions">
              <span className="step-count-badge">
                {activeFunnel.steps.length} step{activeFunnel.steps.length !== 1 ? 's' : ''}
              </span>
            </div>
          )}
        </header>

        {/* Content */}
        <div className="tab-content">
          {activeTab === 'builder' && activeFunnel && (
            <FunnelBuilder
              funnel={activeFunnel}
              onAddStep={addStep}
              onUpdateStep={updateStep}
              onDeleteStep={deleteStep}
              onReorderSteps={updateSteps}
            />
          )}
          {activeTab === 'analyzer' && (
            <FunnelAnalyzer funnel={activeFunnel} />
          )}
          {activeTab === 'templates' && (
            <TemplatesGallery onLoad={handleLoadTemplate} />
          )}
          {activeTab === 'guide' && (
            <HowToGuide />
          )}
        </div>
      </div>
    </div>
  );
}
