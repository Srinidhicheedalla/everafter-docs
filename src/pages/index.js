
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
        padding: '55px 24px',
      }}>

        {/* Hero Section */}
        <section style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '45px',
          padding: '45px 35px',
          borderRadius: '16px',
          background: '#FAF5F6',
          flexWrap: 'wrap',
        }}>

          {/* Left Content */}
          <div style={{
            flex: '1 1 350px',
            textAlign: 'left',
          }}>
            <p style={{
              color: '#783B50',
              fontWeight: '700',
              letterSpacing: '2px',
              fontSize: '13px',
            }}>
              EVERAFTER PRODUCT DOCUMENTATION
            </p>

            <h1 style={{
              color: '#783B50',
              fontSize: 'clamp(34px, 5vw, 52px)',
              marginBottom: '18px',
            }}>
              Welcome to EverAfter
            </h1>

            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#444444',
            }}>
              Your guide to a better experience.
              Explore simple instructions, helpful resources
              and step-by-step application guides.
            </p>

            <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              marginTop: '25px',
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
          </div>

          {/* Right Image */}
          <div style={{
            flex: '1 1 300px',
            textAlign: 'center',
          }}>
            <img
              src="/img/everafter-banner.jpg"
              alt="EverAfter Matrimony"
              style={{
                width: '100%',
                maxWidth: '440px',
                height: '310px',
                objectFit: 'cover',
                borderRadius: '14px',
                display: 'block',
                margin: '0 auto',
              }}
            />
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
