import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section style={{ background: "#f3f3f1" }}>
      {/* ================= HERO ================= */}
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "140px 6% 80px",
        }}
      >
        <h1
          style={{
            fontSize: 56,
            fontWeight: 600,
            marginBottom: 16,
            maxWidth: 640,
          }}
        >
          Get in Touch
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "#6b6b6b",
            maxWidth: 420,
            lineHeight: 1.6,
          }}
        >
          Have a question or need expert guidance? Our team is here to help you
          every step of the way.
        </p>
      </div>

      {/* ================= FORM + SIDEBAR ================= */}
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 6% 96px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: 48,
        }}
      >
        {/* -------- FORM -------- */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#ffffff",
            borderRadius: 20,
            padding: 40,
            border: "1px solid #e6e6e6",
          }}
        >
          <h2 style={{ fontSize: 24, marginBottom: 24 }}>Send us a message</h2>

          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone", name: "phone", type: "tel" },
          ].map((field) => (
            <div key={field.name} style={{ marginBottom: 20 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  marginBottom: 6,
                  color: "#6b6b6b",
                }}
              >
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={form[field.name as keyof typeof form]}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: 10,
                  border: "1px solid #e6e6e6",
                  fontSize: 14,
                }}
              />
            </div>
          ))}

          <div style={{ marginBottom: 28 }}>
            <label
              style={{
                display: "block",
                fontSize: 13,
                marginBottom: 6,
                color: "#6b6b6b",
              }}
            >
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: 10,
                border: "1px solid #e6e6e6",
                fontSize: 14,
                resize: "none",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "16px",
              background: "#111",
              color: "#fff",
              borderRadius: 12,
              border: "none",
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>

        {/* -------- SIDEBAR -------- */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: 20,
            padding: 32,
            border: "1px solid #e6e6e6",
            height: "fit-content",
          }}
        >
          <h3 style={{ fontSize: 20, marginBottom: 20 }}>
            Contact Information
          </h3>

          <div style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 13, color: "#6b6b6b" }}>Phone</p>
            <p style={{ fontWeight: 500 }}>+1 (234) 567-8901</p>
          </div>

          <div style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 13, color: "#6b6b6b" }}>Email</p>
            <p style={{ fontWeight: 500 }}>support@harborstone.com</p>
          </div>

          <div>
            <p style={{ fontSize: 13, color: "#6b6b6b" }}>Office</p>
            <p style={{ fontWeight: 500 }}>
              120 Market Street, San Francisco, CA
            </p>
          </div>
        </div>
      </div>

      {/* ================= MAP ================= */}
      <div style={{ padding: "0 6% 96px" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            borderRadius: 24,
            overflow: "hidden",
            border: "1px solid #e6e6e6",
            height: 420,
          }}
        >
          <iframe
            title="map"
            src="https://www.google.com/maps?q=San%20Francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
      </div>

      {/* ================= RESPONSIVE ================= */}
      <style>{`
        @media (max-width: 1024px) {
          section > div:nth-of-type(2) {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 40px;
          }

          form {
            padding: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
