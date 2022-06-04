import { createEffect, createEvent, sample } from 'effector';
import { getCategoriesFx } from '../../entities/category';

export const headerBooted = createEvent();

const getHeaderDataFx = createEffect(() =>
  Promise.all([
    /**/
    getCategoriesFx(),
  ]),
);

sample({
  clock: headerBooted,
  target: [getHeaderDataFx],
});
