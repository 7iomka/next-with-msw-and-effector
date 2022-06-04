import { createStore } from 'effector';
import { createRequestFx } from '../../shared/lib';
import { API } from '../../shared/api';

export const getCategoriesFx = createRequestFx(async ({ config }) =>
  API.getFx({
    url: '/categories',
    config,
  }),
);
 
export const $categories = createStore({}).on(
  getCategoriesFx.doneData,
  (_, data) => data,
);
