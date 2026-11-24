import { BlogPost } from '../../types';
import { sortPostsByOrder } from '../../utils/content';
import { post as prepareHome } from './homeowners/how-to-prepare-your-home-for-a-house-sitter';
import { post as questionsToAsk } from './homeowners/questions-to-ask-before-hiring-a-house-sitter';
import { post as exchangeVsProfessional } from './homeowners/trusted-housesitters-exchange-vs-professional-house-sitting';
import { post as welcomeGuide } from './homeowners/what-to-include-in-a-house-sitter-welcome-guide';
import { post as math } from './sitters/can-you-really-travel-for-free-house-sitting-math';
import { post as hiddenPerks } from './sitters/hidden-perks-of-house-sitting';
import { post as firstSit } from './sitters/how-to-get-your-first-house-sit-no-reviews';
import { post as updatingOwners } from './sitters/how-to-update-homeowners-while-house-sitting';
import { post as worthIt } from './sitters/is-trusted-housesitters-worth-it';
import { post as aiStrategy } from './sitters/trusted-housesitters-how-to-apply-for-competitive-sits-fast-using-ai';
import { post as alertsAndFilters } from './sitters/trusted-housesitters-how-to-set-up-alerts-and-filters';
import { post as costLevels } from './sitters/trusted-housesitters-membership-cost-levels';
import { post as profileTips } from './sitters/trusted-housesitters-profile-tips-how-to-secure-more-sits';
import { post as vsOthers } from './sitters/trusted-housesitters-vs-other-house-sitting-websites';
import { post as vsRover } from './sitters/trusted-housesitters-vs-rover-comparison';
import { post as reporting } from './sitters/trusted-housesitters-what-happens-if-sit-goes-wrong-and-how-to-report-it';
import { post as rejections } from './sitters/why-trusted-housesitters-applications-get-rejected';

export const SITTER_POSTS: BlogPost[] = sortPostsByOrder([
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
  hiddenPerks,
  alertsAndFilters,
  updatingOwners,
]);

export const HOMEOWNER_POSTS: BlogPost[] = sortPostsByOrder([
  exchangeVsProfessional,
  prepareHome,
  welcomeGuide,
  questionsToAsk,
]);

export const BLOG_POSTS: BlogPost[] = [...SITTER_POSTS, ...HOMEOWNER_POSTS];
