import { ResourceCategory, ResourceItem } from '../../types';
import { resource as rover } from './rover-review';
import { resource as ths } from './trusted-housesitters-review';
import { resource as visible } from './visible-review';

export const RESOURCES: ResourceCategory[] = [
  {
    title: 'Resources',
    items: [ths, rover, visible],
  },
];

export const ALL_RESOURCES: ResourceItem[] = RESOURCES.flatMap((category) => category.items);
