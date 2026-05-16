export default function Home() {
  const calendlyLink = "https://calendly.com/markmcdowall-allstate/30min";
  const formspreeEndpoint = "https://formspree.io/f/maqkwezq";

  return (
    <main>
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          padding: "14px 24px",
          position: "sticky",
          top: 0,
          zIndex: 10,
          boxShadow: "0 4px 14px rgba(15, 23, 42, 0.04)",
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
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <img
              src="/logo.jpg"
              alt="McDowall Insurance Services logo"
              style={{
                height: "62px",
                width: "auto",
                display: "block",
              }}
            />

            <div>
              <div
                style={{
                  fontSize: "21px",
                  fontWeight: "bold",
                  color: "#0b1220",
                  lineHeight: "1.1",
                }}
              >
                McDowall Insurance Services, Inc.
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                  marginTop: "4px",
                }}
              >
                Licensed in AZ, NV, TX, VA, OH & TN
              </div>
            </div>
          </a>

          <nav
            style={{
              display: "flex",
              gap: "22px",
              alignItems: "center",
              flexWrap: "wrap",
              fontSize: "15px",
              fontWeight: 700,
            }}
          >
            <a href="#services">Services</a>
            <a href="#why-us">Why Us</a>
            <a href="#contact">Contact</a>
            <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
            <a href="tel:4803000040" style={{ color: "#001cff" }}>
              480-300-0040
            </a>
          </nav>
        </div>
      </header>

      <section
        style={{
          background:
            "radial-gradient(circle at top right, rgba(0, 28, 255, 0.38), transparent 36%), linear-gradient(135deg, #050816 0%, #0b1220 58%, #111827 100%)",
          color: "white",
          padding: "95px 20px 105px 20px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: "24px",
              padding: "24px 30px",
              marginBottom: "30px",
              boxShadow: "0 18px 45px rgba(0,0,0,0.24)",
              backdropFilter: "blur(8px)",
            }}
          >
            <img
              src="/logo.jpg"
              alt="McDowall Insurance Services logo"
              style={{
                height: "130px",
                width: "auto",
                display: "block",
                borderRadius: "14px",
                background: "white",
                padding: "8px",
              }}
            />

            <div
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#ffffff",
                lineHeight: "1.15",
              }}
            >
              McDowall Insurance Services, Inc.
            </div>

            <div
              style={{
                color: "#c7d2fe",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Licensed in Arizona, Nevada, Texas, Virginia, Ohio & Tennessee
            </div>
          </div>

          <p
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              fontSize: "14px",
              fontWeight: "bold",
              color: "#c7d2fe",
              marginBottom: "18px",
            }}
          >
            Home • Auto • Renters • Life • Commercial
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
            We help families compare coverage, understand their options, and
            avoid buying a policy based on price alone.
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
                color: "#0b1220",
                padding: "18px 34px",
                borderRadius: "14px",
                fontWeight: "bold",
                display: "inline-block",
                fontSize: "18px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.28)",
              }}
            >
              Have Us Check Your Rates
            </a>

            <a
              href="tel:4803000040"
              style={{
                border: "2px solid rgba(255,255,255,0.75)",
                color: "white",
                padding: "16px 30px",
                borderRadius: "14px",
                fontWeight: "bold",
                display: "inline-block",
                fontSize: "18px",
              }}
            >
              Call 480-300-0040
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
              color: "#0b1220",
            }}
          >
            Insurance We Can Help With
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              fontSize: "18px",
              maxWidth: "760px",
              margin: "0 auto 48px auto",
              lineHeight: "1.6",
            }}
          >
            Whether you are protecting your home, your car, your family, your
            business, or all of the above, we make the process simple and
            straightforward.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "22px",
            }}
          >
            {[
              {
                title: "Home Insurance",
                text: "Your home is probably the biggest thing you own, so this is not the place to play coverage roulette. We help you look at rebuild cost, deductibles, roof coverage, water damage, and the stuff people usually find out about too late.",
              },
              {
                title: "Auto Insurance",
                text: "Cheap auto insurance is easy to find. Good auto insurance takes a little more thought. We help compare liability limits, deductibles, uninsured motorist coverage, rental, roadside, and whether your policy actually makes sense for how you drive.",
              },
              {
                title: "Renters Insurance",
                text: "Renters insurance is usually inexpensive, but skipping it can get expensive fast. We help protect your belongings, liability, and temporary living expenses if life decides to throw a chair through the window.",
              },
              {
                title: "Life Insurance",
                text: "Life insurance is not fun to talk about, but neither is leaving people you love with a financial mess. We help make the conversation simple, practical, and focused on what your family would actually need.",
              },
              {
                title: "Commercial Insurance",
                text: "Business insurance should match the way your business actually operates, not just a generic checkbox. We help business owners think through liability, property, vehicles, employees, and the gaps that can turn into expensive problems.",
              },
            ].map((service) => (
              <div
                key={service.title}
                style={{
                  background: "white",
                  padding: "28px",
                  borderRadius: "20px",
                  boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
                  border: "1px solid #e5e7eb",
                  borderTop: "5px solid #001cff",
                }}
              >
                <h3
                  style={{
                    fontSize: "21px",
                    marginTop: 0,
                    marginBottom: "10px",
                    color: "#0b1220",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    lineHeight: "1.6",
                    marginBottom: 0,
                  }}
                >
                  {service.text}
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
                color: "#001cff",
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
                color: "#0b1220",
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

          <div style={{ display: "grid", gap: "18px" }}>
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
                title: "Multi-state support",
                text: "We are licensed in Arizona, Nevada, Texas, Virginia, Ohio, and Tennessee.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "18px",
                  padding: "24px",
                }}
              >
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: "8px",
                    color: "#0b1220",
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
          background:
            "linear-gradient(135deg, #050816 0%, #0b1220 68%, #001cff 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
              background: "#ffffff",
              color: "#0b1220",
              padding: "18px 34px",
              borderRadius: "14px",
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
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "42px",
              boxShadow: "0 12px 32px rgba(15, 23, 42, 0.1)",
              border: "1px solid #e5e7eb",
              textAlign: "center",
            }}
          >
            <img
              src="/logo.jpg"
              alt="McDowall Insurance Services logo"
              style={{
                height: "110px",
                width: "auto",
                display: "block",
                margin: "0 auto 20px auto",
              }}
            />

            <h2
              style={{
                fontSize: "38px",
                color: "#0b1220",
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
              Call, email, schedule a quick call, or send us your info through
              the form. We’ll help you figure out whether your coverage makes
              sense — and whether there is a better option available.
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
                href="tel:4803000040"
                style={{
                  background: "#001cff",
                  color: "white",
                  padding: "16px 28px",
                  borderRadius: "14px",
                  fontWeight: "bold",
                  display: "inline-block",
                }}
              >
                Call 480-300-0040
              </a>

              <a
                href="mailto:MarkMcDowall@Allstate.com"
                style={{
                  background: "#e0e7ff",
                  color: "#001cff",
                  padding: "16px 28px",
                  borderRadius: "14px",
                  fontWeight: "bold",
                  display: "inline-block",
                }}
              >
                Send Us Your Policy
              </a>

              <a
                href={calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#ffffff",
                  color: "#0b1220",
                  border: "1px solid #cbd5e1",
                  padding: "16px 28px",
                  borderRadius: "14px",
                  fontWeight: "bold",
                  display: "inline-block",
                }}
              >
                Schedule a 15-Minute Call
              </a>
            </div>
          </div>

          <form
            action={formspreeEndpoint}
            method="POST"
            style={{
              background: "white",
              borderRadius: "24px",
              padding: "42px",
              boxShadow: "0 12px 32px rgba(15, 23, 42, 0.1)",
              border: "1px solid #e5e7eb",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                color: "#0b1220",
                marginTop: 0,
                marginBottom: "10px",
              }}
            >
              Quick Quote Request
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "24px",
              }}
            >
              Tell us what you need help with. No novel required — unless your
              current policy is a horror story.
            </p>

            <input type="hidden" name="_subject" value="New Website Quote Request" />

            <div style={{ display: "grid", gap: "16px" }}>
              <label style={{ display: "grid", gap: "6px", fontWeight: 700 }}>
                Name
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  style={{
                    padding: "14px",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    fontSize: "16px",
                  }}
                />
              </label>

              <label style={{ display: "grid", gap: "6px", fontWeight: 700 }}>
                Phone
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Best phone number"
                  style={{
                    padding: "14px",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    fontSize: "16px",
                  }}
                />
              </label>

              <label style={{ display: "grid", gap: "6px", fontWeight: 700 }}>
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Best email"
                  style={{
                    padding: "14px",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    fontSize: "16px",
                  }}
                />
              </label>

              <label style={{ display: "grid", gap: "6px", fontWeight: 700 }}>
                State
                <select
                  name="state"
                  required
                  defaultValue=""
                  style={{
                    padding: "14px",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    fontSize: "16px",
                    background: "white",
                  }}
                >
                  <option value="" disabled>
                    Select your state
                  </option>
                  <option value="Arizona">Arizona</option>
                  <option value="Nevada">Nevada</option>
                  <option value="Texas">Texas</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label style={{ display: "grid", gap: "6px", fontWeight: 700 }}>
                What do you want quoted?
                <select
                  name="insurance_type"
                  required
                  defaultValue=""
                  style={{
                    padding: "14px",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    fontSize: "16px",
                    background: "white",
                  }}
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="Home">Home</option>
                  <option value="Auto">Auto</option>
                  <option value="Home and Auto Bundle">Home and Auto Bundle</option>
                  <option value="Renters">Renters</option>
                  <option value="Life">Life</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Not sure">Not sure</option>
                </select>
              </label>

              <label style={{ display: "grid", gap: "6px", fontWeight: 700 }}>
                Current carrier
                <input
                  type="text"
                  name="current_carrier"
                  placeholder="Who are you with now?"
                  style={{
                    padding: "14px",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    fontSize: "16px",
                  }}
                />
              </label>

              <label style={{ display: "grid", gap: "6px", fontWeight: 700 }}>
                Notes
                <textarea
                  name="message"
                  placeholder="Anything we should know?"
                  rows={5}
                  style={{
                    padding: "14px",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    fontSize: "16px",
                    fontFamily: "inherit",
                    resize: "vertical",
                  }}
                />
              </label>

              <button
                type="submit"
                style={{
                  background: "#001cff",
                  color: "white",
                  padding: "16px 28px",
                  borderRadius: "14px",
                  fontWeight: "bold",
                  fontSize: "17px",
                  border: "none",
                  cursor: "pointer",
                  marginTop: "8px",
                }}
              >
                Send My Quote Request
              </button>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "12px",
                  lineHeight: "1.5",
                  margin: "0",
                }}
              >
                By submitting this form, you agree that McDowall Insurance
                Services, Inc. may contact you about your insurance request.
              </p>
            </div>
          </form>
        </div>
      </section>

      <footer
        style={{
          padding: "30px 20px",
          background: "#ffffff",
          borderTop: "1px solid #e5e7eb",
          color: "#64748b",
          fontSize: "14px",
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <img
              src="/logo.jpg"
              alt="McDowall Insurance Services logo"
              style={{
                height: "50px",
                width: "auto",
              }}
            />
            <span>
              © {new Date().getFullYear()} McDowall Insurance Services, Inc.
              Licensed in Arizona, Nevada, Texas, Virginia, Ohio, and Tennessee.
            </span>
          </div>

          <a
            href="tel:4803000040"
            style={{
              color: "#001cff",
              fontWeight: "bold",
            }}
          >
            480-300-0040
          </a>
        </div>

        <div
          style={{
            maxWidth: "1180px",
            margin: "18px auto 0 auto",
            paddingTop: "18px",
            borderTop: "1px solid #e5e7eb",
            color: "#64748b",
            fontSize: "12px",
            lineHeight: "1.6",
          }}
        >
          Coverage is subject to policy terms, conditions, limits, exclusions,
          and underwriting approval. Products, features, discounts, and
          availability may vary by insurer and state. McDowall Insurance
          Services, Inc. is an insurance agency and may offer coverage through
          Allstate and other carrier partners where appointed and licensed.
        </div>
      </footer>
    </main>
  );
}
