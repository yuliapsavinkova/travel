import { BlogPost } from '../types';
import { post as worthIt } from './articles/is-trusted-housesitters-worth-it';
import { post as math } from './articles/can-you-really-travel-for-free-house-sitting-math';
import { post as costLevels } from './articles/trusted-housesitters-membership-cost-levels';
import { post as firstSit } from './articles/how-to-get-your-first-house-sit-no-reviews';
import { post as profileTips } from './articles/trusted-housesitters-profile-tips-how-to-secure-more-sits';
import { post as vsOthers } from './articles/trusted-housesitters-vs-other-house-sitting-websites';
import { post as vsRover } from './articles/trusted-housesitters-vs-rover-comparison';
import { post as rejections } from './articles/why-trusted-housesitters-applications-get-rejected';
import { post as reporting } from './articles/trusted-housesitters-what-happens-if-sit-goes-wrong-and-how-to-report-it';
import { post as aiStrategy } from './articles/trusted-housesitters-how-to-beat-competition-using-ai';

// The registry is now just a simple list of imports.
// Metadata and body are managed within each individual file.
export const BLOG_POSTS: BlogPost[] = [
  worthIt,
  math,
  costLevels,
  firstSit,
  profileTips,
  vsOthers,
  vsRover,
  rejections,
  reporting,
  aiStrategy,
];
