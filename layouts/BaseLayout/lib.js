import { getCoreLayoutServerSideProps } from '../lib';
import { layoutBooted } from './model';

export const getBaseLayoutSSP = getCoreLayoutServerSideProps.bind(null, { trigger: layoutBooted });