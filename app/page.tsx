export default function Home() {
  return (
    <main>
      <section
        style={{
          background: "#0d1b2a",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            marginBottom: "20px",
            maxWidth: "900px",
            margin: "0 auto 20px auto",
          }}
        >
          Insurance Written Correctly.
          <br />
          Not Just Cheaply.
        </h1>

        <p
          style={{
            fontSize: "22px",
            maxWidth: "750px",
            margin: "0 auto 40px auto",
            lineHeight: "1.6",
            color: "#d6dce5",
          }}
        >
          Helping Arizona families protect their homes, cars, businesses, and
          future without cutting corners on coverage.
        </p>

        <a
          href="tel:6025555555"
          style={{
            background: "#1d4ed8",
            padding: "18px 34px",
            borderRadius: "10px",
            fontWeight: "bold",
            display: "inline-block",
            fontSize: "18px",
          }}
        >
          Get A Fast Quote
        </a>
      </section>

      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          Why Clients Choose Us
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3>Coverage That Actually Fits</h3>
            <p>
              We focus on making sure your insurance protects you properly —
              not just finding the lowest number possible.
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3>Bundle Savings</h3>
            <p>
              Home and auto bundle discounts have improved significantly, and
              many Arizona drivers are seeing lower auto rates.
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3>Real People. Real Help.</h3>
            <p>
              No endless phone trees. No disappearing agents. Just fast,
              honest help from a local Arizona agency.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
