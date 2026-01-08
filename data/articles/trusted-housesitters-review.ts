import { THS_DISCOUNT } from '../../types';

export const content = `
  <p class="prose-lead">TrustedHousesitters is the main platform I use to travel full-time. 
  The concept is simple: I stay in homes for free while taking care of pets. In exchange, 
  owners get reliable care for their animals. There is no money involved, and I am treated 
  as a guest rather than an employee.</p>

  <h2>Why I Use This Platform</h2>
  <p>The platform is built on verified reviews, which makes it easy to choose the right fit. 
  I always read previous reviews carefully before committing to a stay. This ensures that 
  the expectations of both the homeowner and myself are aligned before the sit begins.</p>
  
  <p>I paid for a year-long membership with a sign-up discount and it was worth the 
  investment. By using this service, I didn’t pay for any accommodations for an entire year. 
  Even at a conservative estimate of one hundred dollars per night for a hotel, that adds 
  up to thirty-six thousand dollars in annual savings.</p>
  
  <p>I have used the platform in many different states. It works exceptionally well if you 
  work remotely or simply enjoy spending time with animals. You get to live like a local 
  in real neighborhoods and experience life in a way that hotels can't offer.</p>
  
  <p>Many homeowners are incredibly warm. They often go out of their way to show 
  appreciation, sometimes inviting you for a meal or sharing their local secrets. It is 
  rewarding to know that a home and a pet are in good hands while the owners are away.</p>

  <div class="prose-accent-box" style="text-align: center; display: flex; 
    flex-direction: column; align-items: center; gap: 20px;">
    <h3 style="margin-top: 0;">Claim Your ${THS_DISCOUNT} Membership Discount</h3>
    <p style="margin-bottom: 10px;">Ready to start your own journey? Use this referral 
    link to claim your ${THS_DISCOUNT} discount. The savings apply to any of their 
    annual membership tiers.</p>
    <a href="https://trustedhousesitters.com/refer/raf943607" target="_blank" 
      rel="noopener noreferrer" class="btn-gold" style="min-width: 280px;">
      Claim ${THS_DISCOUNT} Discount Link
    </a>
  </div>
`;
