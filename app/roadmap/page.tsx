import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS, ALL_RESOURCES, IS_DEV } from '../../constants';
import { MASTER_FAQS } from '../../data/faqs';
import {
  LinkIcon,
  HelpCircleIcon,
  ZapIcon,
  LayoutIcon,
  ShieldCheckIcon,
  AlertCircleIcon,
} from '../../components/Icons';

export default function RoadmapPage() {
  // If not in dev, we could redirect or show a 404, but for this simulation,
  // we'll just show a restricted view if someone manually types the URL.
  if (!IS_DEV) {
    return (
      <div
        className="container section-margin text-center"
        style={{ paddingTop: 'var(--h-header)' }}
      >
        <ShieldCheckIcon size={64} style={{ color: 'var(--c-gold)', marginBottom: 'var(--s-4)' }} />
        <h1 className="display-title">Restricted Access.</h1>
        <p className="hero-paragraph">
          This technical content dictionary is only available in development environments.
        </p>
        <Link href="/" className="btn-gold" style={{ marginTop: 'var(--s-6)' }}>
          Return Home
        </Link>
      </div>
    );
  }

  // Defined clusters for grouping
  const clusterDefinitions = [
    {
      id: 'ths-core',
      title: 'TrustedHousesitters: The Core',
      description: 'Foundational value and math.',
    },
    {
      id: 'operational-strategy',
      title: 'Operational Strategy',
      description: 'Tactical guides for winning.',
    },
    {
      id: 'safety-support',
      title: 'Safety & Comparisons',
      description: 'Risk management and platforms.',
    },
    { id: 'nomad-toolkit', title: 'The Nomad Toolkit', description: 'Physical and digital tools.' },
    {
      id: 'legal',
      title: 'Legal & Disclosure',
      description: 'Privacy, disclosure, and compliance.',
    },
  ];

  // Combine all content for the map
  const allContent = [...BLOG_POSTS, ...ALL_RESOURCES];

  return (
    <div className="roadmap-page">
      <div className="blueprint-grid" />

      <header className="roadmap-header container text-center">
        <div className="sub-header">Internal Content Strategy</div>
        <h1 className="display-title shimmer-text">Content Blueprint.</h1>
        <p className="hero-paragraph">
          Technical dictionary and architectural overview of the Sitter Journey knowledge base.
        </p>
      </header>

      <div className="container">
        <div className="roadmap-clusters">
          {clusterDefinitions.map((cluster) => {
            const items = allContent.filter((item) => item.roadmap?.clusterId === cluster.id);

            return (
              <section key={cluster.id} className="roadmap-cluster">
                <div className="cluster-info">
                  <h2 className="cluster-title serif-italic">{cluster.title}</h2>
                  <p className="cluster-description">{cluster.description}</p>
                  <div className="cluster-stat">
                    <LayoutIcon size={14} />
                    <span>{items.length} Tracked Items</span>
                  </div>
                </div>

                <div className="roadmap-grid">
                  {items.length > 0 ? (
                    items.map((item) => {
                      const isResource = 'name' in item;
                      const title = isResource ? (item as any).name : (item as any).title;
                      const excerpt = isResource
                        ? (item as any).description
                        : (item as any).excerpt;
                      const faqCount = (item.faqIds || []).length;
                      const roadmap = item.roadmap;

                      return (
                        <div key={item.slug} className="roadmap-node-card glass-card">
                          <div className="node-header">
                            <span className="node-type-pill">
                              {isResource ? 'Resource' : 'Blog'} • {roadmap?.status || 'published'}
                            </span>
                            {item.slug.includes('ai') && (
                              <ZapIcon size={14} className="node-icon-ai" />
                            )}
                          </div>

                          <Link
                            href={isResource ? `/resources/${item.slug}` : `/blog/${item.slug}`}
                          >
                            <h3 className="node-title serif-italic">{title}</h3>
                          </Link>

                          <div className="node-backbone">
                            <span className="backbone-label">Backbone Strategy</span>
                            <p className="backbone-text">
                              {roadmap?.backbone || 'No internal strategy notes defined.'}
                            </p>
                          </div>

                          <div className="node-meta">
                            <div className="meta-row">
                              <LinkIcon size={12} />
                              <span>/{item.slug}</span>
                            </div>
                            {faqCount > 0 && (
                              <div className="meta-row highlight">
                                <HelpCircleIcon size={12} />
                                <span>{faqCount} Linked FAQs</span>
                              </div>
                            )}
                          </div>

                          <div className="node-connectors">
                            <div className="connector-group">
                              <span className="connector-label">Outbound Connections</span>
                              <div className="connector-dots">
                                {roadmap?.linksTo && roadmap.linksTo.length > 0 ? (
                                  roadmap.linksTo.map((c, i) => (
                                    <div key={i} className="dot out" title={`Links to ${c}`} />
                                  ))
                                ) : (
                                  <span className="dot-empty">No tracked links</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="empty-cluster-node glass-card">
                      <AlertCircleIcon size={24} style={{ opacity: 0.3 }} />
                      <p>No content currently assigned to this clusterId.</p>
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </div>

        <section className="roadmap-stats-section text-center">
          <div className="glass-card roadmap-summary">
            <div className="sub-header">Data Points</div>
            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-val">{BLOG_POSTS.length}</div>
                <div className="stat-lab">Articles</div>
              </div>
              <div className="stat-item">
                <div className="stat-val">{ALL_RESOURCES.length}</div>
                <div className="stat-lab">Resources</div>
              </div>
              <div className="stat-item">
                <div className="stat-val">{MASTER_FAQS.length}</div>
                <div className="stat-lab">FAQ Bank</div>
              </div>
            </div>
            <div
              className="roadmap-notice"
              style={{ marginTop: 'var(--s-6)', fontSize: '10px', opacity: 0.5 }}
            >
              NOTICE: This page is only visible when IS_DEV is true. Metadata is managed within
              individual content files in data/*.tsx.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
