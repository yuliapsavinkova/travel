import CommonDetail from '../../components/CommonDetail';
import ContentRenderer from '../../components/ContentRenderer';
import { privacyPolicyContent } from '../../data/articles/privacy-policy';

export default function PrivacyPage() {
  return (
    <CommonDetail
      image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2400"
      title="Privacy Policy."
      date="Legal Disclosure"
    >
      <div className="flex-col">
        <ContentRenderer content={privacyPolicyContent} />
      </div>
    </CommonDetail>
  );
}
