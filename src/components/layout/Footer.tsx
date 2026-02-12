export default function Footer() {
  return (
    <footer
      style={{
        background: "#f3f3f1",
        borderTop: "1px solid #e6e6e6",
        padding: "72px 0 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 6%",
        }}
      >
        {/* TOP GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* BRAND */}
          <div>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              Harborstone Realty
            </h3>

            <p
              style={{
                color: "#6b6b6b",
                lineHeight: 1.7,
                maxWidth: 420,
              }}
            >
              Harborstone Realty is a trusted real estate partner helping
              buyers, sellers, and investors find the perfect property across
              the United States.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <p style={titleStyle}>Company</p>
            <ul style={listStyle}>
              <li>
                <a href="/" style={linkStyle}>
                  Home
                </a>
              </li>
              <li>
                <a href="/listings" style={linkStyle}>
                  Listings
                </a>
              </li>
              <li>
                <a href="/investments" style={linkStyle}>
                  Investments
                </a>
              </li>
              <li>
                <a href="/agents" style={linkStyle}>
                  Agents
                </a>
              </li>
              <li>
                <a href="/about" style={linkStyle}>
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <p style={titleStyle}>Support</p>
            <ul style={listStyle}>
              <li>
                <a href="/contact" style={linkStyle}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#" style={linkStyle}>
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" style={linkStyle}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" style={linkStyle}>
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <p style={titleStyle}>Contact</p>
            <p style={contactText}>📍 United States</p>
            <p style={contactText}>📞 +1 (555) 123-4567</p>
            <p style={contactText}>✉️ hello@harborstone.com</p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          style={{
            borderTop: "1px solid #e6e6e6",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 14, color: "#6b6b6b" }}>
            © {new Date().getFullYear()} Harborstone Realty. All rights
            reserved.
          </p>

          <div style={{ display: "flex", gap: 16 }}>
            <a href="#" style={socialLink}>
              LinkedIn
            </a>
            <a href="#" style={socialLink}>
              Twitter
            </a>
            <a href="#" style={socialLink}>
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }

          footer {
            padding: 56px 0 24px;
          }
        }
      `}</style>
    </footer>
  );
}

/* ---------- SHARED STYLES ---------- */

const titleStyle = {
  fontSize: 14,
  fontWeight: 600,
  marginBottom: 16,
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column" as const,
  gap: 10,
};

const linkStyle = {
  fontSize: 14,
  color: "#6b6b6b",
  textDecoration: "none",
};

const contactText = {
  fontSize: 14,
  color: "#6b6b6b",
  marginBottom: 8,
};

const socialLink = {
  fontSize: 14,
  color: "#111",
  textDecoration: "none",
};
