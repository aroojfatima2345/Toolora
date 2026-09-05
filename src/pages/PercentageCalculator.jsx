import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function PercentageCalculator() {
  const [type, setType] = useState("of");

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const [result, setResult] = useState(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a percentage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A percentage is a number expressed as a fraction of 100. For example, 25% means 25 out of 100.",
        },
      },
      {
        "@type": "Question",
        name: "How do I calculate a percentage of a number?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To calculate X% of a number Y, divide X by 100 and multiply the result by Y. For example, 20% of 500 is 100.",
        },
      },
      {
        "@type": "Question",
        name: "How do I calculate percentage increase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To calculate percentage increase, subtract the original value from the new value, divide the difference by the original value, and multiply by 100.",
        },
      },
      {
        "@type": "Question",
        name: "How do I calculate percentage decrease?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To calculate percentage decrease, subtract the new value from the original value, divide the difference by the original value, and multiply by 100.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Toolora percentage calculator free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Toolora's percentage calculator is free to use online.",
        },
      },
    ],
  };

  const calculate = () => {
    if (value1 === "" || value2 === "") {
      alert("Please enter both values.");
      return;
    }

    const first = Number(value1);
    const second = Number(value2);

    if (Number.isNaN(first) || Number.isNaN(second)) {
      alert("Please enter valid numbers.");
      return;
    }

    if (type === "whatPercent" && second === 0) {
      alert("Total value cannot be zero.");
      return;
    }

    if (
      (type === "increase" || type === "decrease") &&
      first === 0
    ) {
      alert("Original value cannot be zero.");
      return;
    }

    let calculatedResult = 0;

    // What is X% of Y?
    if (type === "of") {
      calculatedResult = (first / 100) * second;
    }

    // X is what % of Y?
    if (type === "whatPercent") {
      calculatedResult = (first / second) * 100;
    }

    // Percentage Increase
    if (type === "increase") {
      calculatedResult =
        ((second - first) / first) * 100;
    }

    // Percentage Decrease
    if (type === "decrease") {
      calculatedResult =
        ((first - second) / first) * 100;
    }

    setResult(calculatedResult);
  };

  const clearCalculator = () => {
    setValue1("");
    setValue2("");
    setResult(null);
  };

  const getLabels = () => {
    if (type === "of") {
      return {
        first: "Percentage (%)",
        second: "Number",
        placeholder1: "e.g. 20",
        placeholder2: "e.g. 500",
      };
    }

    if (type === "whatPercent") {
      return {
        first: "Value",
        second: "Total",
        placeholder1: "e.g. 100",
        placeholder2: "e.g. 500",
      };
    }

    if (type === "increase") {
      return {
        first: "Original Value",
        second: "New Value",
        placeholder1: "e.g. 500",
        placeholder2: "e.g. 600",
      };
    }

    return {
      first: "Original Value",
      second: "New Value",
      placeholder1: "e.g. 500",
      placeholder2: "e.g. 400",
    };
  };

  const labels = getLabels();

  return (
    <div className="compressor-page">
      <SEO
        title="Percentage Calculator Online - Calculate Percentages Free"
        description="Calculate percentages, percentage increase and percentage decrease online with Toolora's free percentage calculator."
        keywords="percentage calculator, calculate percentage, percentage increase calculator, percentage decrease calculator, percent calculator, percentage calculator online, free percentage calculator"
        canonical="/percentage-calculator"
      />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="container py-5">
        {/* PAGE HEADING */}

        <header className="text-center mb-5">
          <div className="hero-badge mb-3">
            🧮 Free Calculator Tool
          </div>

          <h1 className="fw-bold">
            Percentage Calculator Online
          </h1>

          <p className="text-muted">
            Calculate percentages, percentage increases and
            percentage decreases quickly and accurately.
          </p>
        </header>

        {/* CALCULATOR */}

        <main>
          <section
            className="compressor-box calculator-box mx-auto"
            aria-label="Percentage calculator"
          >
            {/* Calculation Type */}

            <div className="mb-4">
              <label
                htmlFor="percentage-type"
                className="form-label fw-semibold"
              >
                What do you want to calculate?
              </label>

              <select
                id="percentage-type"
                className="form-select"
                value={type}
                onChange={(event) => {
                  setType(event.target.value);
                  setValue1("");
                  setValue2("");
                  setResult(null);
                }}
              >
                <option value="of">
                  What is X% of Y?
                </option>

                <option value="whatPercent">
                  X is what % of Y?
                </option>

                <option value="increase">
                  Percentage Increase
                </option>

                <option value="decrease">
                  Percentage Decrease
                </option>
              </select>
            </div>

            {/* Inputs */}

            <div className="row g-4">
              <div className="col-md-6">
                <label
                  htmlFor="percentage-value-1"
                  className="form-label fw-semibold"
                >
                  {labels.first}
                </label>

                <input
                  id="percentage-value-1"
                  type="number"
                  className="form-control"
                  placeholder={labels.placeholder1}
                  value={value1}
                  onChange={(event) =>
                    setValue1(event.target.value)
                  }
                />
              </div>

              <div className="col-md-6">
                <label
                  htmlFor="percentage-value-2"
                  className="form-label fw-semibold"
                >
                  {labels.second}
                </label>

                <input
                  id="percentage-value-2"
                  type="number"
                  className="form-control"
                  placeholder={labels.placeholder2}
                  value={value2}
                  onChange={(event) =>
                    setValue2(event.target.value)
                  }
                />
              </div>
            </div>

            {/* Buttons */}

            <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">
              <button
                type="button"
                className="btn btn-primary px-4"
                onClick={calculate}
              >
                Calculate
              </button>

              <button
                type="button"
                className="btn btn-outline-danger px-4"
                onClick={clearCalculator}
              >
                Clear
              </button>
            </div>

            {/* Result */}

            {result !== null && (
              <div
                className="calculator-result mt-5"
                aria-live="polite"
              >
                <p className="mb-2">
                  Your Result
                </p>

                <h2>
                  {result.toFixed(2)}
                  {type !== "of" && "%"}
                </h2>
              </div>
            )}
          </section>
        </main>

        {/* SEO CONTENT */}

        <section className="tool-information mx-auto mt-5">
          <h2>
            Free Percentage Calculator Online
          </h2>

          <p>
            Toolora's free percentage calculator helps you
            calculate percentages, find what percentage one
            number is of another, and calculate percentage
            increases or decreases.
          </p>

          <p>
            Instead of calculating percentages manually, enter
            your numbers above and choose the type of
            calculation you need. The calculator provides the
            result instantly.
          </p>

          <h2 className="mt-4">
            What Can You Calculate With This Percentage
            Calculator?
          </h2>

          <ul>
            <li>
              Calculate X% of a number.
            </li>

            <li>
              Find what percentage one value is of another.
            </li>

            <li>
              Calculate percentage increase between two
              values.
            </li>

            <li>
              Calculate percentage decrease between two
              values.
            </li>
          </ul>

          <h2 className="mt-4">
            How to Calculate a Percentage
          </h2>

          <p>
            To calculate a percentage of a number, use this
            basic formula:
          </p>

          <p>
            <strong>
              Percentage of a Number = (Percentage ÷ 100) ×
              Number
            </strong>
          </p>

          <p>
            For example, to calculate 20% of 500:
          </p>

          <p>
            <strong>
              (20 ÷ 100) × 500 = 100
            </strong>
          </p>

          <p>
            Therefore, <strong>20% of 500 is 100</strong>.
          </p>

          <h2 className="mt-4">
            How to Calculate Percentage Increase
          </h2>

          <p>
            Percentage increase measures how much a value has
            increased compared with its original value.
          </p>

          <p>
            The formula is:
          </p>

          <p>
            <strong>
              ((New Value − Original Value) ÷ Original Value)
              × 100
            </strong>
          </p>

          <p>
            For example, if a value increases from 500 to
            600:
          </p>

          <p>
            <strong>
              ((600 − 500) ÷ 500) × 100 = 20%
            </strong>
          </p>

          <p>
            The percentage increase is therefore
            <strong> 20%</strong>.
          </p>

          <h2 className="mt-4">
            How to Calculate Percentage Decrease
          </h2>

          <p>
            Percentage decrease shows how much a value has
            decreased compared with its original value.
          </p>

          <p>
            The formula is:
          </p>

          <p>
            <strong>
              ((Original Value − New Value) ÷ Original Value)
              × 100
            </strong>
          </p>

          <p>
            For example, if a value decreases from 500 to
            400:
          </p>

          <p>
            <strong>
              ((500 − 400) ÷ 500) × 100 = 20%
            </strong>
          </p>

          <p>
            The percentage decrease is therefore
            <strong> 20%</strong>.
          </p>

          <h2 className="mt-4">
            Where Are Percentages Used?
          </h2>

          <p>
            Percentages are commonly used in everyday
            calculations, education, finance, shopping,
            business and data analysis.
          </p>

          <ul>
            <li>
              Discounts and sale prices
            </li>

            <li>
              Tax and service charges
            </li>

            <li>
              Exam and test scores
            </li>

            <li>
              Business growth and changes
            </li>

            <li>
              Price increases and decreases
            </li>

            <li>
              Financial calculations
            </li>
          </ul>

          <h2 className="mt-4">
            Percentage vs Percentage Points
          </h2>

          <p>
            A percentage describes a relative change or
            proportion, while percentage points describe the
            direct difference between two percentages.
          </p>

          <p>
            For example, if a rate changes from 20% to 25%,
            the difference is 5 percentage points. The
            relative increase is 25%.
          </p>

          <h2 className="mt-4">
            Is Toolora Percentage Calculator Free?
          </h2>

          <p>
            Yes. Toolora's percentage calculator is free to
            use online. You can calculate common percentage
            problems without installing additional software.
          </p>

          {/* FAQ */}

          <h2 className="mt-5">
            Frequently Asked Questions
          </h2>

          <h3 className="mt-3">
            What is a percentage?
          </h3>

          <p>
            A percentage is a number expressed as a fraction
            of 100. For example, 25% means 25 out of 100.
          </p>

          <h3 className="mt-3">
            How do I calculate a percentage of a number?
          </h3>

          <p>
            Divide the percentage by 100 and multiply it by
            the number. For example, 20% of 500 is 100.
          </p>

          <h3 className="mt-3">
            How do I calculate percentage increase?
          </h3>

          <p>
            Subtract the original value from the new value,
            divide the difference by the original value, and
            multiply by 100.
          </p>

          <h3 className="mt-3">
            How do I calculate percentage decrease?
          </h3>

          <p>
            Subtract the new value from the original value,
            divide the difference by the original value, and
            multiply by 100.
          </p>

          <h3 className="mt-3">
            Is the Toolora percentage calculator free?
          </h3>

          <p>
            Yes. Toolora's percentage calculator is free to
            use online.
          </p>

          {/* RELATED TOOLS */}

          <h2 className="mt-5">
            Try Our Other Free Tools
          </h2>

          <p>
            Looking for more useful online tools? Try these
            Toolora calculators and utilities:
          </p>

          <div className="d-flex flex-wrap gap-3 mt-3">
            <Link
              to="/age-calculator"
              className="btn btn-outline-primary"
            >
              Age Calculator →
            </Link>

            <Link
              to="/bmi-calculator"
              className="btn btn-outline-primary"
            >
              BMI Calculator →
            </Link>

            <Link
              to="/word-counter"
              className="btn btn-outline-primary"
            >
              Word Counter →
            </Link>

            <Link
              to="/qr-code-generator"
              className="btn btn-outline-primary"
            >
              QR Code Generator →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PercentageCalculator;

