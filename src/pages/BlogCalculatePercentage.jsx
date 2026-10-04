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

function BlogCalculatePercentage() {
  return (
    <>
      <SEO
        title="How to Calculate Percentage Easily"
        description="Learn how to calculate percentages with simple formulas and examples. Understand percentage increase, decrease, discounts, marks, and more."
        keywords="how to calculate percentage, percentage formula, percentage calculator, calculate percentage, percentage increase, percentage decrease, percentage discount"
        canonical="/blog/how-to-calculate-percentage"
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
              <div
                className="mb-4"
                style={{
                  fontSize: "14px",
                  color: "#6c5ce7",
                }}
              >
                <Link
                  to="/blog"
                  style={{
                    color: "#6c5ce7",
                    textDecoration: "none",
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
                  How to Calculate Percentage Easily
                </h1>

                <p
                  className="lead mb-4"
                  style={{
                    color: "#667085",
                    lineHeight: "1.7",
                  }}
                >
                  Percentages are used everywhere, from school marks and
                  discounts to business reports and everyday calculations.
                  This guide explains how to calculate percentages with simple
                  formulas and practical examples.
                </p>

                <hr className="my-4" />

                <h2 className="fw-bold mb-3" style={{ color: "#172033" }}>
                  What Is a Percentage?
                </h2>

                <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                  A percentage is a way of expressing a number as a part of
                  100. The word percentage means "per hundred." The percentage
                  symbol is <strong>%</strong>.
                </p>

                <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                  For example, 50% means 50 out of 100, while 25% means 25 out
                  of 100.
                </p>

                <div
                  className="p-4 rounded-4 my-4"
                  style={{
                    background: "#f7f6ff",
                    borderLeft: "4px solid #6c5ce7",
                  }}
                >
                  <strong style={{ color: "#172033" }}>
                    Basic Percentage Formula:
                  </strong>
                  <div
                    className="mt-2 fw-semibold"
                    style={{
                      color: "#6c5ce7",
                      fontSize: "18px",
                    }}
                  >
                    Percentage = (Part ÷ Total) × 100
                  </div>
                </div>

                <h2 className="fw-bold mb-3 mt-5" style={{ color: "#172033" }}>
                  How to Calculate Percentage
                </h2>

                <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                  To calculate a percentage, divide the part by the total
                  amount and multiply the result by 100.
                </p>

                <h3 className="fw-bold mt-4 mb-3" style={{ color: "#172033" }}>
                  Example 1: Finding a Percentage
                </h3>

                <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                  Suppose a student gets <strong>45 marks out of 60</strong>.
                  To find the percentage:
                </p>

                <div
                  className="p-4 rounded-4 mb-4"
                  style={{
                    background: "#faf9ff",
                    border: "1px solid #e8e4f7",
                  }}
                >
                  <div style={{ color: "#4b5563", lineHeight: "2" }}>
                    Percentage = (45 ÷ 60) × 100
                    <br />
                    Percentage = 0.75 × 100
                    <br />
                    <strong style={{ color: "#6c5ce7" }}>
                      Percentage = 75%
                    </strong>
                  </div>
                </div>

                <h3 className="fw-bold mt-4 mb-3" style={{ color: "#172033" }}>
                  Example 2: Finding a Percentage of a Number
                </h3>

                <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                  If you want to find <strong>20% of 500</strong>, use this
                  formula:
                </p>

                <div
                  className="p-4 rounded-4 mb-4"
                  style={{
                    background: "#faf9ff",
                    border: "1px solid #e8e4f7",
                  }}
                >
                  <div style={{ color: "#4b5563", lineHeight: "2" }}>
                    20% of 500 = (20 ÷ 100) × 500
                    <br />
                    = 0.20 × 500
                    <br />
                    <strong style={{ color: "#6c5ce7" }}>= 100</strong>
                  </div>
                </div>

                <h2 className="fw-bold mb-3 mt-5" style={{ color: "#172033" }}>
                  How to Calculate Percentage Increase
                </h2>

                <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                  Percentage increase tells you how much a value has increased
                  compared with its original value.
                </p>

                <div
                  className="p-4 rounded-4 my-4"
                  style={{
                    background: "#f7f6ff",
                    borderLeft: "4px solid #6c5ce7",
                  }}
                >
                  <strong style={{ color: "#172033" }}>
                    Percentage Increase Formula:
                  </strong>
                  <div
                    className="mt-2 fw-semibold"
                    style={{
                      color: "#6c5ce7",
                      fontSize: "18px",
                    }}
                  >
                    ((New Value − Original Value) ÷ Original Value) × 100
                  </div>
                </div>

                <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                  For example, if a product price increases from Rs. 1,000 to
                  Rs. 1,200:
                </p>

                <div
                  className="p-4 rounded-4 mb-4"
                  style={{
                    background: "#faf9ff",
                    border: "1px solid #e8e4f7",
                  }}
                >
                  <div style={{ color: "#4b5563", lineHeight: "2" }}>
                    Increase = 1,200 − 1,000 = 200
                    <br />
                    Percentage Increase = (200 ÷ 1,000) × 100
                    <br />
                    <strong style={{ color: "#6c5ce7" }}>
                      Percentage Increase = 20%
                    </strong>
                  </div>
                </div>

                <h2 className="fw-bold mb-3 mt-5" style={{ color: "#172033" }}>
                  How to Calculate Percentage Decrease
                </h2>

                <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                  Percentage decrease shows how much a value has decreased
                  compared with its original value.
                </p>

                <div
                  className="p-4 rounded-4 my-4"
                  style={{
                    background: "#f7f6ff",
                    borderLeft: "4px solid #6c5ce7",
                  }}
                >
                  <strong style={{ color: "#172033" }}>
                    Percentage Decrease Formula:
                  </strong>
                  <div
                    className="mt-2 fw-semibold"
                    style={{
                      color: "#6c5ce7",
                      fontSize: "18px",
                    }}
                  >
                    ((Original Value − New Value) ÷ Original Value) × 100
                  </div>
                </div>

                <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                  For example, if a price decreases from Rs. 2,000 to Rs.
                  1,500:
                </p>

                <div
                  className="p-4 rounded-4 mb-4"
                  style={{
                    background: "#faf9ff",
                    border: "1px solid #e8e4f7",
                  }}
                >
                  <div style={{ color: "#4b5563", lineHeight: "2" }}>
                    Decrease = 2,000 − 1,500 = 500
                    <br />
                    Percentage Decrease = (500 ÷ 2,000) × 100
                    <br />
                    <strong style={{ color: "#6c5ce7" }}>
                      Percentage Decrease = 25%
                    </strong>
                  </div>
                </div>

                <h2 className="fw-bold mb-3 mt-5" style={{ color: "#172033" }}>
                  How to Calculate a Discount Percentage
                </h2>

                <p style={{ color: "#4b5563", lineHeight: "1.8" }}>
                  Percentage calculations are especially useful when shopping.
                  For example, suppose an item costs Rs. 5,000 and has a 20%
                  discount.
                </p>

                <div
                  className="p-4 rounded-4 mb-4"
                  style={{
                    background: "#faf9ff",
                    border: "1px solid #e8e4f7",
                  }}
                >
                  <div style={{ color: "#4b5563", lineHeight: "2" }}>
                    Discount = (20 ÷ 100) × 5,000
                    <br />
                    Discount = Rs. 1,000
                    <br />
                    Final Price = 5,000 − 1,000
                    <br />
                    <strong style={{ color: "#6c5ce7" }}>
                      Final Price = Rs. 4,000
                    </strong>
                  </div>
                </div>

                <div
                  className="rounded-4 p-4 my-5 text-center"
                  style={{
                    background: "#6c5ce7",
                    color: "#fff",
                  }}
                >
                  <h3 className="fw-bold mb-2">
                    Need a Quick Percentage Calculation?
                  </h3>

                  <p className="mb-3" style={{ opacity: 0.9 }}>
                    Use Toolora's free percentage calculator to get your result
                    quickly without doing the calculation manually.
                  </p>

                  <Link
                    to="/percentage-calculator"
                    className="btn btn-light fw-semibold px-4 py-2"
                    style={{
                      color: "#6c5ce7",
                    }}
                  >
                    Use Percentage Calculator
                  </Link>
                </div>

                <h2 className="fw-bold mb-3 mt-5" style={{ color: "#172033" }}>
                  Common Percentage Examples
                </h2>

                <div className="table-responsive">
                  <table className="table align-middle">
                    <thead>
                      <tr>
                        <th>Calculation</th>
                        <th>Formula</th>
                        <th>Answer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>25% of 200</td>
                        <td>(25 ÷ 100) × 200</td>
                        <td>50</td>
                      </tr>
                      <tr>
                        <td>60 out of 80</td>
                        <td>(60 ÷ 80) × 100</td>
                        <td>75%</td>
                      </tr>
                      <tr>
                        <td>10% increase from 500</td>
                        <td>(10 ÷ 100) × 500</td>
                        <td>550</td>
                      </tr>
                      <tr>
                        <td>20% decrease from 1,000</td>
                        <td>1,000 − (20 ÷ 100 × 1,000)</td>
                        <td>800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="fw-bold mb-3 mt-5" style={{ color: "#172033" }}>
                  Tips for Calculating Percentages
                </h2>

                <ul
                  style={{
                    color: "#4b5563",
                    lineHeight: "1.9",
                  }}
                >
                  <li>Remember that percentage always means "out of 100."</li>
                  <li>
                    For a percentage of a number, convert the percentage to a
                    decimal first.
                  </li>
                  <li>
                    For percentage increase or decrease, always compare the
                    difference with the original value.
                  </li>
                  <li>
                    Double-check whether you are calculating an increase,
                    decrease, discount, or simple percentage.
                  </li>
                  <li>
                    Use a percentage calculator when you need quick results for
                    multiple calculations.
                  </li>
                </ul>

                <h2 className="fw-bold mb-3 mt-5" style={{ color: "#172033" }}>
                  Frequently Asked Questions
                </h2>

                <div className="accordion" id="percentageFaq">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqOne"
                      >
                        What is the basic percentage formula?
                      </button>
                    </h3>

                    <div
                      id="faqOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#percentageFaq"
                    >
                      <div className="accordion-body">
                        The basic formula is: Percentage = (Part ÷ Total) ×
                        100.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqTwo"
                      >
                        How do I calculate 20% of a number?
                      </button>
                    </h3>

                    <div
                      id="faqTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#percentageFaq"
                    >
                      <div className="accordion-body">
                        Divide 20 by 100 and multiply the result by the number.
                        For example, 20% of 500 is 100.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqThree"
                      >
                        How do I calculate percentage increase?
                      </button>
                    </h3>

                    <div
                      id="faqThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#percentageFaq"
                    >
                      <div className="accordion-body">
                        Subtract the original value from the new value, divide
                        the difference by the original value, and multiply by
                        100.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqFour"
                      >
                        Can I calculate percentages without a calculator?
                      </button>
                    </h3>

                    <div
                      id="faqFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#percentageFaq"
                    >
                      <div className="accordion-body">
                        Yes. You can use the basic percentage formulas explained
                        in this guide. For faster calculations, you can also
                        use Toolora's free percentage calculator.
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
                      to="/blog/what-is-bmi"
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
                          What Is BMI and How Is It Calculated?
                        </h5>
                        <p className="mb-0" style={{ color: "#667085" }}>
                          Learn about BMI and how the calculation works.
                        </p>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <Link
                      to="/blog/how-to-reduce-pdf-file-size"
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
                          How to Reduce PDF File Size Online
                        </h5>
                        <p className="mb-0" style={{ color: "#667085" }}>
                          Simple ways to make large PDF files smaller.
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

export default BlogCalculatePercentage;