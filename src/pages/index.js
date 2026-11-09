
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="EverAfter Documentation"
      description="User guides and product documentation"
    >
      <main style={{ maxWidth: '1000px', margin: '80px auto', padding: '24px' }}>
        <p style={{ color: '#777', fontWeight: '600' }}>
          PRODUCT DOCUMENTATION
        </p>

        <h1 style={{ fontSize: '48px' }}>
          Welcome to EverAfter
        </h1>

        <p style={{ fontSize: '20px', lineHeight: '1.7' }}>
          Find simple guides, step-by-step instructions and helpful
          information to understand the EverAfter application.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Explore Documentation
          </Link>

          <Link className="button button--secondary button--lg" to="/docs/account-management/login">
            Login Guide
          </Link>
        </div>

        <hr style={{ margin: '60px 0' }} />

        <h2>Explore Help Topics</h2>

        <ul style={{ fontSize: '18px', lineHeight: '2' }}>
          <li>Getting Started</li>
          <li>Account Management</li>
          <li>Help and Support</li>
        </ul>
      </main>
    </Layout>
  );
}
