import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function AdPlaceholder({ label = "Advertisement" }) {
  return (
    <div
      className="mx-auto my-4"
      style={{
        width: "100%",
        maxWidth: "970px",
        minHeight: "90px",
        border: "1px dashed #d8d5e8",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#faf9ff",
        color: "#999",
        fontSize: "13px",
        textAlign: "center",
        padding: "15px",
      }}
      aria-label="Advertisement"
    >
      {label}
    </div>
  );
}

function BlogWhatIsBmi() {
  return (
    <>
      <SEO
        title="What Is BMI and How Is It Calculated?"
        description="Learn what BMI means, how BMI is calculated, what the common BMI categories are, and how to use a BMI calculator."
        keywords="what is BMI, BMI calculator, how to calculate BMI, BMI formula, body mass index, BMI categories"
        canonical="/blog/what-is-bmi"
      />

      <div
        style={{
          background: "#f7f6ff",
          minHeight: "100vh",
          paddingBottom: "60px",
        }}
      >
        <AdPlaceholder />

        <main className="container py-4">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="mb-4">
                <Link
                  to="/blog"
                  style={{
                    color: "#6c5ce7",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  ← Back to Blog
                </Link>
              </div>

              <article
                className="bg-white rounded-4 shadow-sm p-4 p-md-5"
                style={{
                  border: "1px solid #eeeafc",
                }}
              >
                <div className="mb-3">
                  <span
                    className="badge rounded-pill"
                    style={{
                      background: "#eeeaff",
                      color: "#6c5ce7",
                      padding: "8px 14px",
                    }}
                  >
                    Calculators
                  </span>
                </div>

                <h1
                  className="fw-bold mb-3"
                  style={{
                    color: "#172033",
                    lineHeight: "1.2",
                  }}
                >
                  What Is BMI and How Is It Calculated?
                </h1>

                <p
                  className="lead mb-4"
                  style={{
                    color: "#667085",
                    lineHeight: "1.7",
                  }}
                >
                  BMI, or Body Mass Index, is a commonly used screening
                  measurement that compares a person's weight with their
                  height. Learn how BMI is calculated and what the numbers
                  generally mean.
                </p>

                <hr className="my-4" />

                <h2 className="fw-bold mb-3" style={{ color: "#172033" }}>
                  What Is BMI?
                </h2>

                <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                  BMI stands for <strong>Body Mass Index</strong>. It is a
                  simple calculation based on weight and height that can be
                  used as a general screening measure for adults.
                </p>

                <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                  BMI does not directly measure body fat and should not be
                  treated as a complete assessment of someone's health.
                  Factors such as muscle mass, age, sex, and overall health
                  can also be important.
                </p>

                <h2 className="fw-bold mb-3 mt-5" style={{ color: "#172033" }}>
                  How Is BMI Calculated?
                </h2>

                <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                  When weight is measured in kilograms and height in meters,
                  the standard BMI formula is:
                </p>

                <div
                  className="p-4 rounded-4 my-4 text-center"
                  style={{
                    background: "#f7f6ff",
                    borderLeft: "4px solid #6c5ce7",
                  }}
                >
                  <strong style={{ color: "#172033" }}>
                    BMI = Weight (kg) ÷ Height² (m²)
                  </strong>
                </div>

                <h3 className="fw-bold mt-4 mb-3" style={{ color: "#172033" }}>
                  Example BMI Calculation
                </h3>

                <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                  Suppose a person weighs <strong>70 kg</strong> and is{" "}
                  <strong>1.75 meters</strong> tall.
                </p>

                <div
                  className="p-4 rounded-4 mb-4"
                  style={{
                    background: "#faf9ff",
                    border: "1px solid #e8e4f7",
                  }}
                >
                  <div style={{ color: "#4b5563", lineHeight: "2" }}>
                    BMI = 70 ÷ (1.75 × 1.75)
                    <br />
                    BMI = 70 ÷ 3.0625
                    <br />
                    <strong style={{ color: "#6c5ce7" }}>
                      BMI ≈ 22.9
                    </strong>
                  </div>
                </div>

                <h2 className="fw-bold mb-3 mt-5" style={{ color: "#172033" }}>
                  Common BMI Categories for Adults
                </h2>

                <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                  For adults, BMI is commonly grouped into the following
                  categories:
                </p>

                <div className="table-responsive">
                  <table className="table table-bordered align-middle">
                    <thead>
                      <tr>
                        <th>BMI Range</th>
                        <th>Category</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Below 18.5</td>
                        <td>Underweight</td>
                      </tr>

                      <tr>
                        <td>18.5 – 24.9</td>
                        <td>Healthy weight</td>
                      </tr>

                      <tr>
                        <td>25.0 – 29.9</td>
                        <td>Overweight</td>
                      </tr>

                      <tr>
                        <td>30.0 or higher</td>
                        <td>Obesity</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p
                  className="mt-3"
                  style={{
                    color: "#667085",
                    fontSize: "14px",
                    lineHeight: "1.7",
                  }}
                >
                  These categories are general screening ranges for adults.
                  BMI is not a diagnosis and may not accurately represent body
                  composition for every person.
                </p>

                <div
                  className="rounded-4 p-4 my-5"
                  style={{
                    background: "#fff8e8",
                    border: "1px solid #f3dfac",
                  }}
                >
                  <h3
                    className="fw-bold mb-2"
                    style={{ color: "#172033", fontSize: "20px" }}
                  >
                    Important Note
                  </h3>

                  <p
                    className="mb-0"
                    style={{
                      color: "#5f5b50",
                      lineHeight: "1.8",
                    }}
                  >
                    BMI is a screening tool, not a diagnosis. Children,
                    teenagers, pregnant people, athletes with high muscle
                    mass, and some other groups may need different methods of
                    assessment.
                  </p>
                </div>

                <h2 className="fw-bold mb-3 mt-5" style={{ color: "#172033" }}>
                  Why Do People Calculate BMI?
                </h2>

                <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                  BMI can provide a quick way to compare weight and height. It
                  is often used as one part of broader health and fitness
                  assessments.
                </p>

                <ul
                  style={{
                    color: "#4b5563",
                    lineHeight: "1.9",
                  }}
                >
                  <li>To get a general weight-to-height measurement.</li>
                  <li>To monitor changes in body weight over time.</li>
                  <li>To support general health and fitness discussions.</li>
                  <li>
                    To provide a simple screening measurement alongside other
                    health information.
                  </li>
                </ul>

                <h2 className="fw-bold mb-3 mt-5" style={{ color: "#172033" }}>
                  BMI and Body Fat Are Not the Same Thing
                </h2>

                <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                  One important limitation of BMI is that it does not tell you
                  how much of your weight comes from muscle, fat, bone, or
                  other tissues.
                </p>

                <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                  For example, someone who has a lot of muscle may have a
                  relatively high BMI even though they have a healthy amount of
                  body fat. This is one reason BMI should be considered
                  alongside other relevant information.
                </p>

                <div
                  className="rounded-4 p-4 my-5 text-center"
                  style={{
                    background: "#6c5ce7",
                    color: "#fff",
                  }}
                >
                  <h3 className="fw-bold mb-2">
                    Calculate Your BMI Quickly
                  </h3>

                  <p className="mb-3" style={{ opacity: 0.9 }}>
                    Use Toolora's free BMI calculator to calculate your BMI
                    using your height and weight.
                  </p>

                  <Link
                    to="/bmi-calculator"
                    className="btn btn-light fw-semibold px-4 py-2"
                    style={{
                      color: "#6c5ce7",
                    }}
                  >
                    Use BMI Calculator
                  </Link>
                </div>

                <h2 className="fw-bold mb-3 mt-5" style={{ color: "#172033" }}>
                  How to Calculate BMI Manually
                </h2>

                <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                  To calculate BMI manually, follow these simple steps:
                </p>

                <ol
                  style={{
                    color: "#4b5563",
                    lineHeight: "2",
                  }}
                >
                  <li>Measure your weight in kilograms.</li>
                  <li>Measure your height in meters.</li>
                  <li>Multiply your height by itself.</li>
                  <li>Divide your weight by the squared height.</li>
                  <li>Round the result if needed.</li>
                </ol>

                <h2 className="fw-bold mb-3 mt-5" style={{ color: "#172033" }}>
                  Frequently Asked Questions
                </h2>

                <div className="accordion" id="bmiFaq">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#bmiFaqOne"
                      >
                        What does BMI stand for?
                      </button>
                    </h3>

                    <div
                      id="bmiFaqOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#bmiFaq"
                    >
                      <div className="accordion-body">
                        BMI stands for Body Mass Index. It is a screening
                        measurement based on weight and height.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#bmiFaqTwo"
                      >
                        What is the BMI formula?
                      </button>
                    </h3>

                    <div
                      id="bmiFaqTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#bmiFaq"
                    >
                      <div className="accordion-body">
                        BMI = weight in kilograms divided by height in meters
                        squared.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#bmiFaqThree"
                      >
                        Is BMI a complete measure of health?
                      </button>
                    </h3>

                    <div
                      id="bmiFaqThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#bmiFaq"
                    >
                      <div className="accordion-body">
                        No. BMI is a screening measure and does not directly
                        measure body fat or account for every aspect of health
                        and body composition.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#bmiFaqFour"
                      >
                        Can children use adult BMI categories?
                      </button>
                    </h3>

                    <div
                      id="bmiFaqFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#bmiFaq"
                    >
                      <div className="accordion-body">
                        Adult BMI categories should not simply be applied to
                        children. BMI for children and teenagers is interpreted
                        differently based on age and sex.
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="fw-bold mb-3 mt-5" style={{ color: "#172033" }}>
                  Related Guides
                </h2>

                <div className="row g-3">
                  <div className="col-md-6">
                    <Link
                      to="/blog/how-to-calculate-percentage"
                      className="text-decoration-none"
                    >
                      <div
                        className="p-4 rounded-4 h-100"
                        style={{
                          background: "#faf9ff",
                          border: "1px solid #e8e4f7",
                        }}
                      >
                        <h5
                          className="fw-bold mb-2"
                          style={{ color: "#172033" }}
                        >
                          How to Calculate Percentage Easily
                        </h5>

                        <p className="mb-0" style={{ color: "#667085" }}>
                          Learn simple percentage formulas with practical
                          examples.
                        </p>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link
                      to="/percentage-calculator"
                      className="text-decoration-none"
                    >
                      <div
                        className="p-4 rounded-4 h-100"
                        style={{
                          background: "#faf9ff",
                          border: "1px solid #e8e4f7",
                        }}
                      >
                        <h5
                          className="fw-bold mb-2"
                          style={{ color: "#172033" }}
                        >
                          Percentage Calculator
                        </h5>

                        <p className="mb-0" style={{ color: "#667085" }}>
                          Quickly calculate percentages with Toolora.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </main>

        <AdPlaceholder />
      </div>
    </>
  );
}

export default BlogWhatIsBmi;

