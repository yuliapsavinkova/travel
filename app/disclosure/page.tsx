import CommonDetail from '../../components/CommonDetail';
import ContentRenderer from '../../components/ContentRenderer';
import { disclosureContent } from '../../data/articles/disclosure';

export default function DisclosurePage() {
  return (
    <CommonDetail
      image="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=2400"
      title="Disclosure of Referrals & Affiliates."
      date="January 2026"
    >
      <div className="flex-col">
        <ContentRenderer content={disclosureContent} />
      </div>
    </CommonDetail>
  );
}
