import { ResourceCategory, ResourceItem } from '../../types';
import { resource as ths } from './trusted-housesitters-review';
import { resource as rover } from './rover-review';
import { resource as visible } from './visible-review';
import { resource as pf } from './planet-fitness-review';

export const RESOURCES: ResourceCategory[] = [
  {
    title: 'My Resources',
    items: [ths, rover, visible, pf],
  },
];

export const ALL_RESOURCES: ResourceItem[] = RESOURCES.flatMap((category) => category.items);
