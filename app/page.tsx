export default function Home() {
  return (
    <main>
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          padding: "18px 24px",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#0d1b2a",
              }}
            >
              McDowall Insurance Services
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#64748b",
                marginTop: "3px",
              }}
            >
              Phoenix, Arizona Insurance Agency
            </div>
          </div>

          <nav
            style={{
              display: "flex",
              gap: "22px",
              alignItems: "center",
              flexWrap: "wrap",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            <a href="#services">Services</a>
            <a href="#why-us">Why Us</a>
            <a href="#contact">Contact</a>
            <a
              href="tel:6025844506"
              style={{
                color: "#1d4ed8",
              }}
            >
              602-584-4506
            </a>
          </nav>
        </div>
      </header>

      <section
        style={{
          background:
            "linear-gradient(135deg, #0d1b2a 0%, #102a43 55%, #1d4ed8 100%)",
          color: "white",
          padding: "95px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              fontSize: "14px",
              fontWeight: "bold",
              color: "#bfdbfe",
              marginBottom: "18px",
            }}
          >
            Home • Auto • Renters • Condo • Commercial
          </p>

          <h1
            style={{
              fontSize: "clamp(42px, 6vw, 68px)",
              lineHeight: "1.05",
              margin: "0 auto 26px auto",
              maxWidth: "980px",
            }}
          >
            Insurance built around getting it right — not just getting it cheap.
          </h1>

          <p
            style={{
              fontSize: "22px",
              maxWidth: "820px",
              margin: "0 auto 42px auto",
              lineHeight: "1.6",
              color: "#dbeafe",
            }}
          >
            We help Arizona families compare coverage, understand their options,
            and avoid buying a policy based on price alone.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#contact"
              style={{
                background: "#ffffff",
                color: "#0d1b2a",
                padding: "18px 34px",
                borderRadius: "12px",
                fontWeight: "bold",
                display: "inline-block",
                fontSize: "18px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.22)",
              }}
            >
              Have Us Check Your Rates
            </a>

            <a
              href="tel:6025844506"
              style={{
                border: "2px solid rgba(255,255,255,0.75)",
                color: "white",
                padding: "16px 30px",
                borderRadius: "12px",
                fontWeight: "bold",
                display: "inline-block",
                fontSize: "18px",
              }}
            >
              Call 602-584-4506
            </a>
          </div>
        </div>
      </section>

      <section
        id="services"
        style={{
          padding: "80px 20px",
          background: "#f8fafc",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "14px",
              textAlign: "center",
              color: "#0d1b2a",
            }}
          >
            Insurance We Can Help With
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              fontSize: "18px",
              maxWidth: "720px",
              margin: "0 auto 48px auto",
              lineHeight: "1.6",
            }}
          >
            Whether you are protecting your home, your car, your business, or
            all of the above, we make the process simple and straightforward.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "22px",
            }}
          >
            {[
              "Home Insurance",
              "Auto Insurance",
              "Renters Insurance",
              "Condo Insurance",
              "Commercial Insurance",
            ].map((service) => (
              <div
                key={service}
                style={{
                  background: "white",
                  padding: "28px",
                  borderRadius: "18px",
                  boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
                  border: "1px solid #e5e7eb",
                }}
              >
                <h3
                  style={{
                    fontSize: "21px",
                    marginTop: 0,
                    marginBottom: "10px",
                    color: "#0d1b2a",
                  }}
                >
                  {service}
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    lineHeight: "1.6",
                    marginBottom: 0,
                  }}
                >
                  Smart coverage options, clear explanations, and help comparing
                  what actually matters before you make a decision.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="why-us"
        style={{
          padding: "85px 20px",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "34px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#1d4ed8",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontSize: "14px",
              }}
            >
              Why Work With Us
            </p>

            <h2
              style={{
                fontSize: "42px",
                lineHeight: "1.15",
                color: "#0d1b2a",
                marginTop: 0,
                marginBottom: "22px",
              }}
            >
              Cheap insurance is great — until it skips the part you needed.
            </h2>

            <p
              style={{
                color: "#475569",
                fontSize: "18px",
                lineHeight: "1.75",
              }}
            >
              Our job is not to sell you the thinnest policy with the prettiest
              price tag. It is to help you understand your options, compare the
              details, and choose coverage that makes sense for your life.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "18px",
            }}
          >
            {[
              {
                title: "Coverage-first conversations",
                text: "We look beyond the monthly payment and talk through the actual protection behind the policy.",
              },
              {
                title: "Bundle opportunities",
                text: "Home and auto bundles can create meaningful savings when the coverage is structured correctly.",
              },
              {
                title: "Real agency support",
                text: "You get help from people who know Arizona insurance, not a random call center reading from a script.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  padding: "24px",
                }}
              >
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: "8px",
                    color: "#0d1b2a",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "#64748b",
                    lineHeight: "1.6",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "80px 20px",
          background: "#0d1b2a",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginTop: 0,
              marginBottom: "18px",
            }}
          >
            Want a second opinion on your current insurance?
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.65",
              color: "#dbeafe",
              marginBottom: "34px",
            }}
          >
            Send us what you have now and we’ll help you see where the price,
            coverage, and gaps may be hiding.
          </p>

          <a
            href="#contact"
            style={{
              background: "#1d4ed8",
              padding: "18px 34px",
              borderRadius: "12px",
              fontWeight: "bold",
              display: "inline-block",
              fontSize: "18px",
            }}
          >
            Have Us Check Your Rates
          </a>
        </div>
      </section>

      <section
        id="contact"
        style={{
          padding: "80px 20px",
          background: "#f8fafc",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "white",
            borderRadius: "22px",
            padding: "42px",
            boxShadow: "0 12px 32px rgba(15, 23, 42, 0.1)",
            border: "1px solid #e5e7eb",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "38px",
              color: "#0d1b2a",
              marginTop: 0,
              marginBottom: "14px",
            }}
          >
            Ready to compare?
          </h2>

          <p
            style={{
              color: "#64748b",
              fontSize: "18px",
              lineHeight: "1.6",
              marginBottom: "30px",
            }}
          >
            Call, email, or send over your current policy. We’ll help you figure
            out whether your coverage makes sense — and whether there is a
            better option available.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:6025844506"
              style={{
                background: "#1d4ed8",
                color: "white",
                padding: "16px 28px",
                borderRadius: "12px",
                fontWeight: "bold",
                display: "inline-block",
              }}
            >
              Call 602-584-4506
            </a>

            <a
              href="mailto:MarkMcDowall@Allstate.com"
              style={{
                background: "#e0ecff",
                color: "#1d4ed8",
                padding: "16px 28px",
                borderRadius: "12px",
                fontWeight: "bold",
                display: "inline-block",
              }}
            >
              Email Your New Agent
            </a>
          </div>
        </div>
      </section>

      <footer
        style={{
          padding: "28px 20px",
          background: "#ffffff",
          borderTop: "1px solid #e5e7eb",
          textAlign: "center",
          color: "#64748b",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} McDowall Insurance Services. Phoenix,
        Arizona.
      </footer>
    </main>
  );
}
