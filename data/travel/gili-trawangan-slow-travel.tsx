import React from 'react';
import ArticleImage from '../../components/ArticleImage';

export const content = (
  <>
    <p className="prose-lead">
      After three months in Bali, I needed a break from the constant noise of motorbikes. I chose
      Gili Trawangan for its slower pace and the unique absence of motorized transport.
    </p>

    <p>
      The Gili islands feel like a world apart. You move between them by local boat, and horses are
      still the primary way to move heavy goods. I visited during the off-season, which meant fewer
      tourists and significant discounts on scuba courses and hotels. Even the occasional rain felt
      like a welcome break from the heat.
    </p>

    <ArticleImage
      src="https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&q=80&w=1200"
      alt="Clear blue water of Gili Islands"
      caption="The Gili Islands offer a motorized-vehicle-free sanctuary in Indonesia."
      aspectRatio="3/2"
    />

    <h2>Getting to the Islands</h2>
    <p>
      I took a boat from Sanur, leaving the crowds behind for something much smaller. When I
      arrived, the first thing I noticed was the silence. Life on the island is dictated by the
      water, and everything from beaches to dive centers is within easy walking distance.
    </p>

    <ArticleImage
      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200"
      alt="Scuba diver underwater"
      caption="Gili Trawangan provides some of the most accessible and professional diving certifications in the region."
      aspectRatio="3/2"
    />
  </>
);
