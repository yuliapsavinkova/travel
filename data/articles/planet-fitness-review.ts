import { PF_DISCOUNT } from '../../types';

export const content = `
  <p class="prose-lead">Staying healthy on the road can be a challenge. 
  I use a Planet Fitness membership because they have locations in 
  almost every major city I visit across the United States.</p>

  <h2>Routine and recovery</h2>
  <p>It gives me a consistent place to work out and just as importantly 
  a reliable place to shower when I am driving between stays. The 
  atmosphere is usually very welcoming and it is a nice way to 
  maintain a routine no matter where I am in the country.</p>

  <p>It is one of the most practical investments for a full-time 
  traveler. Having a "home base" gym that feels the same regardless 
  of the state you are in provides a sense of comfort and stability. 
  It's not just about the equipment—it's about the consistency 
  of a routine.</p>

  <div class="prose-accent-box variant-cta">
    <h3>Claim Your ${PF_DISCOUNT} Down Discount</h3>
    <p>Ready to start? Use this referral link 
      to join for just ${PF_DISCOUNT} down and maintain your routine 
      on the road.</p>
    <a href="https://www.planetfitness.com/referrals?referralCode=LVX9KEAQ" 
      target="_blank" rel="noopener noreferrer" class="btn-gold" 
      style="min-width: 280px;">
      Claim ${PF_DISCOUNT} Discount Link
    </a>
  </div>
`;