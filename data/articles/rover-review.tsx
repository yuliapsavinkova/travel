import React from 'react';
import { ROVER_DISCOUNT } from '../../types';

export const content = (
  <>
    <p className="prose-lead">
      Rover is a helpful tool when I have short gaps between my house sits. It allows me to find
      local pet care opportunities that do not necessarily require an overnight stay. It is a great
      way to meet more animals and help out pet owners in the local community.
    </p>

    <h2>Filling the gaps between sits</h2>
    <p>
      I use it to keep my schedule full and stay active with animals even when I am just passing
      through a city for a few days. It is reliable and the app makes communication with pet owners
      very easy and transparent.
    </p>

    <p>
      Whether you need someone to walk your dog or you are looking to earn a little extra while
      traveling, it is a solid platform that focuses on the well-being of the pets. While my primary
      stays are through long-term house sitting, having Rover as a backup ensures I'm never without
      a connection to the pet community.
    </p>

    <div className="prose-accent-box variant-cta">
      <h3>Claim Your {ROVER_DISCOUNT} Credit</h3>
      <p style={{ marginBottom: 'var(--s-4)', fontSize: '1.1rem', fontStyle: 'italic' }}>
        Sign up to become a sitter on Rover and earn money caring for dogs and cats in your
        neighborhood. You'll also get a {ROVER_DISCOUNT} credit to book a sitter for your own pets.
      </p>
      <a
        href="https://www.rover.com/ambas-refer-a-friend/Q93GankN"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold"
        style={{ minWidth: '280px' }}
      >
        Claim {ROVER_DISCOUNT} Discount Link
      </a>
    </div>
  </>
);
