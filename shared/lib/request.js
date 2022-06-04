import { createEffect } from 'effector';

export function createRequestFx(handler) {
  let ctrl = new AbortController();
  const abort = () => {
    ctrl.abort(); 
    ctrl = new AbortController();
    return ctrl;
  };
  const requestFx = createEffect(async (params = {}, config = {}) => {
    const { signal } = abort();
    return handler({ params, config: { ...config, signal } });
  });

  return requestFx;
}
