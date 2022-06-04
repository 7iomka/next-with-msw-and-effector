import { createEffect, createEvent, sample } from 'effector';
import { getCategoriesFx } from '../../entities/category';

export const footerBooted = createEvent();

const getFooterDataFx = createEffect(() =>
  Promise.all([
    /**/
    getCategoriesFx(),
  ]),
);

sample({
  clock: footerBooted,
  target: [getFooterDataFx],
});
