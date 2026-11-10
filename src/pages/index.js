
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const topics = [
  {
    icon: '✦',
    title: 'Getting Started',
    description: 'Understand the application and learn the basics.',
    link: '/docs/getting-started/overview',
  },
  {
    icon: '♡',
    title: 'Account Management',
    description: 'Learn about registration, login and password recovery.',
    link: '/docs/account-management/login',
  },
  {
    icon: '❀',
    title: 'Help & Support',
    description: 'Find answers to frequently asked questions.',
    link: '/docs/help-support/faq',
  },
  {
    icon: '⌘',
    title: 'User Guides',
    description: 'Follow simple, step-by-step instructions.',
    link: '/docs/intro',
  },
];

export default function Home() {
  return (
    <Layout
      title="EverAfter Documentation"
      description="Simple guides and product documentation for EverAfter."
    >
      <main style={{
        maxWidth: '1150px',
        margin: '0 auto',
        padding: '70px 24px',
      }}>

        {/* Hero Section */}
        <section style={{
          textAlign: 'center',
          padding: '65px 20px',
          borderRadius: '16px',
          background: '#FFFFFF',
        }}>
          <p style={{
            color: '#783B50',
            fontWeight: '700',
            letterSpacing: '3px',
            fontSize: '13px',
          }}>
            EVERAFTER PRODUCT DOCUMENTATION
          </p>

          <h1 style={{
            color: '#783B50',
            fontSize: 'clamp(36px, 6vw, 58px)',
            marginBottom: '20px',
          }}>
            Welcome to EverAfter
          </h1>

          <p style={{
            maxWidth: '700px',
            margin: '0 auto',
            fontSize: '19px',
            lineHeight: '1.8',
            color: '#444444',
          }}>
            Your guide to a better experience.
            Explore simple instructions, helpful resources
            and step-by-step application guides.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            marginTop: '30px',
          }}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              Explore Documentation →
            </Link>

            <Link
              className="button button--outline button--lg"
              to="/docs/account-management/login"
            >
              Login Guide
            </Link>
          </div>
        </section>

        {/* Documentation Cards */}
        <section style={{ marginTop: '55px' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ color: '#783B50' }}>
              Explore Documentation
            </h2>
            <p style={{ color: '#555555' }}>
              Everything you need, organised in one place.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '22px',
          }}>
            {topics.map((topic) => (
              <Link
                key={topic.title}
                to={topic.link}
                style={{
                  display: 'block',
                  padding: '28px',
                  border: '1px solid #E8DDE1',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: '#333333',
                  background: '#FFFFFF',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
              >
                <div style={{
                  color: '#783B50',
                  fontSize: '30px',
                  marginBottom: '15px',
                }}>
                  {topic.icon}
                </div>

                <h3 style={{
                  color: '#783B50',
                  fontSize: '21px',
                  marginBottom: '10px',
                }}>
                  {topic.title}
                </h3>

                <p style={{
                  color: '#555555',
                  lineHeight: '1.7',
                  marginBottom: '0',
                }}>
                  {topic.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom Section */}
        <section style={{
          marginTop: '65px',
          padding: '35px 20px',
          textAlign: 'center',
          borderTop: '1px solid #E8DDE1',
        }}>
          <h2 style={{ color: '#783B50' }}>
            Need help getting started?
          </h2>

          <p style={{ color: '#555555' }}>
            Visit our guides to find the information you need.
          </p>

          <Link
            to="/docs/help-support/faq"
            className="button button--primary"
          >
            Visit Help & Support
          </Link>
        </section>

      </main>
    </Layout>
  );
}
