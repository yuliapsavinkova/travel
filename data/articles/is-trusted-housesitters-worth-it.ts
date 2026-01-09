import { THS_DISCOUNT } from '../../types';

export const content = `
  <p class="prose-lead">If you love pets and want to travel at no cost, TrustedHousesitters (THS) is
  one of the few platforms that can actually make it happen. Here’s a look at the pros, cons, and 
  real numbers so you can decide if it’s worth it.</p>

  <h2>What is TrustedHousesitters?</h2>
  <p>A global platform connecting homeowners with sitters who care for pets and homes while the 
  owners are away. Sitters pay an annual subscription, then can stay in homes around the 
  world—no accommodation cost, just pet care.</p>

  <div class="prose-comparison-grid" style="margin: var(--s-7) 0;">
    <style>
      .prose-comparison-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--s-4);
        width: 100%;
        max-width: none;
      }
      @media (min-width: 1024px) {
        .prose-comparison-grid {
          width: 900px;
          margin-left: -90px !important; 
        }
      }
    </style>
    <div class="prose-accent-box" style="margin: 0; height: 100%; border-radius: var(--r-md); background: rgba(229, 193, 133, 0.05);">
      <h3 style="color: var(--c-white); margin-top: 0;">The Pros</h3>
      <ul style="padding-left: var(--s-4); margin-bottom: 0;">
        <li><strong>Thousands of sits:</strong> From city lofts to rural farms.</li>
        <li><strong>Free stays:</strong> Your biggest travel expense becomes $0.</li>
        <li><strong>Pet fix:</strong> Animal love without the long-term commitment.</li>
        <li><strong>Verified:</strong> Built on a system of trust and safety.</li>
        <li><strong>Flexibility:</strong> Ideal for remote workers and nomads.</li>
      </ul>
    </div>
    <div class="prose-accent-box" style="margin: 0; height: 100%; border-radius: var(--r-md);
      border-top-color: rgba(255,255,255,0.1); background: rgba(255,255,255,0.02);">
      <h3 style="color: var(--c-text-muted); margin-top: 0;">The Cons</h3>
      <ul style="padding-left: var(--s-4); margin-bottom: 0;">
        <li><strong>Annual fee:</strong> Upfront cost to join the platform.</li>
        <li><strong>High competition:</strong> High-demand cities are very competitive.</li>
        <li><strong>Rejections:</strong> Common for all but brutal for new sitters</li>
        <li><strong>No guarantee:</strong> You must apply and be selected.</li>
        <li><strong>Time:</strong> Communication and profiles take effort.</li>
      </ul>
    </div>
  </div>

  <h2>Real Expenses</h2>
  <ul>
    <li><strong>Annual subscription:</strong> The primary cost to access the platform.</li>
    <li><strong>Travel/transport costs:</strong> You are responsible for reaching the sits.</li>
  </ul>

  <div class="prose-accent-box">
    <h3>The Math: Does it Pay Off?</h3>
    <p>We use approximate numbers to simplify the math. For this example, let's assume a
    subscription cost of $200 (to understand specific pricing, read my guide on
    <a href="/blog/trusted-housesitters-membership-cost-levels">TrustedHousesitters membership
    cost and different levels</a>):</p>
    <ul>
      <li>If a night in a hotel costs <strong>$100</strong>, two nights = <strong>$200</strong>.</li>
      <li>Your subscription pays for itself after <strong>just 2 nights</strong> of sitting.</li>
    </ul>
    
    <div style="margin-top: var(--s-7); text-align: center; padding: var(--s-8) var(--s-6); 
      background: rgba(0,0,0,0.3); border-radius: var(--r-md); border: 1px solid var(--c-gold-muted);
      position: relative; overflow: hidden;">
      
      <h3 class="serif-italic" style="color: var(--c-white); font-size: 1.6rem; 
        margin-bottom: var(--s-6);">The Financial Flip</h3>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--s-6); 
        margin-bottom: var(--s-6); text-align: center;">
        <div>
          <span class="sub-header" style="color: var(--c-text-muted); 
            margin-bottom: 8px;">Traditional Hotels</span>
          <div style="font-size: 20px; color: var(--c-text-muted); 
            text-decoration: line-through; opacity: 0.6;">
            $36,500 / year
          </div>
          <p style="font-size: 11px; margin-top: 4px; opacity: 0.5; 
            letter-spacing: 0.05em;">Based on $100/night avg</p>
        </div>
        <div>
          <span class="sub-header" style="color: var(--c-gold); 
            margin-bottom: 8px;">Sitter Journey</span>
          <div style="font-size: 24px; color: var(--c-white); font-weight: 700;">
            $200 / year
          </div>
          <p style="font-size: 11px; margin-top: 4px; color: var(--c-gold); 
            opacity: 0.8; letter-spacing: 0.05em;">Standard Annual Cost</p>
        </div>
      </div>

      <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: var(--s-6); 
        position: relative;">
        <div style="position: absolute; top: -11px; left: 50%; transform: translateX(-50%); 
          background: #0d0d0e; padding: 0 16px; color: var(--c-gold); font-size: 9px; 
          font-weight: 900; letter-spacing: 0.4em; text-transform: uppercase;">The Result</div>
        
        <span class="sub-header" style="margin-bottom: 4px; color: var(--c-gold);">Potential Annual Savings</span>
        <div class="display-title-md shimmer-text" style="font-size: clamp(3.5rem, 8vw, 5.5rem); 
          line-height: 1; margin: 0; filter: drop-shadow(0 0 20px rgba(229, 193, 133, 0.3));">$36,300</div>
        <p class="serif-italic" style="font-size: 1.3rem; color: var(--c-white); 
          margin-top: 8px; opacity: 1;">Saved per year. Every year.</p>
      </div>
    </div>
  </div>

  <h2>Can you get sits for the full year?</h2>
  <p>Absolutely. If you’re flexible and willing to drive, there’s almost always a sit available. 
  To maximize success, I highly recommend mastering your <a href="/blog/trusted-housesitters-profile-tips-how-to-secure-more-sits">profile 
  and application strategy</a>.</p>
  
  <blockquote class="prose-quote">
    "Example from my experience: In the last 6 months (180 days), I splurged for only 6 nights 
    in hotels—and it was mainly my choice. I have become very selective about the sits I accept."
  </blockquote>

  <div class="prose-accent-box" style="text-align: center;">
    <h3 style="margin-top: 0;">Get Started with a Discount</h3>
    <p style="margin-bottom: var(--s-5);">Ready to build your profile and start sitting? You can get a massive head start on your first year of travel with a special offer for my readers.</p>
    <a href="https://trustedhousesitters.com/refer/raf943607" target="_blank" 
      rel="noopener noreferrer" class="btn-gold" style="min-width: 280px;">
      Claim your ${THS_DISCOUNT} Discount
    </a>
  </div>
`;
