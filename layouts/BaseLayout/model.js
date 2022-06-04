import { createEvent, sample } from 'effector';
import { headerBooted } from '../../widgets/Header';
import { footerBooted } from '../../widgets/Footer';

export const layoutBooted = createEvent();

sample({
  clock: layoutBooted,
  target: [headerBooted, footerBooted],
});
