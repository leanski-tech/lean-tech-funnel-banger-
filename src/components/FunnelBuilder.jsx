import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import { useState } from 'react';
import FunnelStep from './FunnelStep';
import StepTypePalette from './StepTypePalette';

export default function FunnelBuilder({ funnel, onAddStep, onUpdateStep, onDeleteStep, onReorderSteps }) {
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  function handleDragStart({ active }) {
    setActiveId(active.id);
  }

  function handleDragEnd({ active, over }) {
    setActiveId(null);
    if (!over || active.id === over.id) return;
    const steps = funnel.steps;
    const oldIndex = steps.findIndex((s) => s.id === active.id);
    const newIndex = steps.findIndex((s) => s.id === over.id);
    onReorderSteps(arrayMove(steps, oldIndex, newIndex));
  }

  const activeStep = funnel.steps.find((s) => s.id === activeId);

  return (
    <div className="builder-layout">
      {/* Palette */}
      <aside className="builder-sidebar">
        <StepTypePalette onAdd={onAddStep} />
      </aside>

      {/* Canvas */}
      <main className="builder-canvas">
        {funnel.steps.length === 0 ? (
          <div className="canvas-empty">
            <div className="canvas-empty-icon">🚀</div>
            <h3>Your funnel is empty</h3>
            <p>Click a step type in the panel on the left to add your first funnel step.</p>
          </div>
        ) : (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={funnel.steps.map((s) => s.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="funnel-steps-list">
                {funnel.steps.map((step, index) => (
                  <FunnelStep
                    key={step.id}
                    step={step}
                    index={index}
                    total={funnel.steps.length}
                    onUpdate={onUpdateStep}
                    onDelete={onDeleteStep}
                  />
                ))}
              </div>
            </SortableContext>
            <DragOverlay>
              {activeStep && (
                <div className="drag-overlay-ghost">
                  {activeStep.name}
                </div>
              )}
            </DragOverlay>
          </DndContext>
        )}
      </main>
    </div>
  );
}
