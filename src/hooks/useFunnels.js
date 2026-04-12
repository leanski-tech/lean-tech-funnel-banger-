import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DEFAULT_FUNNEL } from '../data/templates';

const STORAGE_KEY = 'ltfb_funnels';

function loadFunnels() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore
  }
  return [{ ...DEFAULT_FUNNEL }];
}

function saveFunnels(funnels) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(funnels));
  } catch {
    // ignore
  }
}

export function useFunnels() {
  const [funnels, setFunnels] = useState(loadFunnels);
  const [activeFunnelId, setActiveFunnelId] = useState(() => loadFunnels()[0]?.id);

  const activeFunnel = funnels.find((f) => f.id === activeFunnelId) || funnels[0];

  const updateFunnels = useCallback((next) => {
    setFunnels(next);
    saveFunnels(next);
  }, []);

  const setActiveFunnel = useCallback((id) => setActiveFunnelId(id), []);

  const createFunnel = useCallback(
    (name = 'New Funnel') => {
      const funnel = { id: uuidv4(), name, steps: [] };
      const next = [...funnels, funnel];
      updateFunnels(next);
      setActiveFunnelId(funnel.id);
    },
    [funnels, updateFunnels]
  );

  const deleteFunnel = useCallback(
    (id) => {
      const next = funnels.filter((f) => f.id !== id);
      if (!next.length) next.push({ ...DEFAULT_FUNNEL, id: uuidv4() });
      updateFunnels(next);
      if (activeFunnelId === id) setActiveFunnelId(next[0].id);
    },
    [funnels, activeFunnelId, updateFunnels]
  );

  const renameFunnel = useCallback(
    (id, name) => {
      updateFunnels(funnels.map((f) => (f.id === id ? { ...f, name } : f)));
    },
    [funnels, updateFunnels]
  );

  const loadTemplate = useCallback(
    (template) => {
      const funnel = {
        id: uuidv4(),
        name: template.name,
        steps: template.steps.map((s) => ({ ...s, id: uuidv4() })),
      };
      const next = [...funnels, funnel];
      updateFunnels(next);
      setActiveFunnelId(funnel.id);
    },
    [funnels, updateFunnels]
  );

  const updateSteps = useCallback(
    (steps) => {
      updateFunnels(funnels.map((f) => (f.id === activeFunnelId ? { ...f, steps } : f)));
    },
    [funnels, activeFunnelId, updateFunnels]
  );

  const addStep = useCallback(
    (type) => {
      const step = { id: uuidv4(), type, name: 'New Step', visits: 100, conversions: 50 };
      updateSteps([...(activeFunnel?.steps || []), step]);
    },
    [activeFunnel, updateSteps]
  );

  const updateStep = useCallback(
    (id, changes) => {
      updateSteps(
        (activeFunnel?.steps || []).map((s) => (s.id === id ? { ...s, ...changes } : s))
      );
    },
    [activeFunnel, updateSteps]
  );

  const deleteStep = useCallback(
    (id) => {
      updateSteps((activeFunnel?.steps || []).filter((s) => s.id !== id));
    },
    [activeFunnel, updateSteps]
  );

  return {
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
  };
}
