import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    if (!weight || !height) {
      alert("Please enter your weight and height.");
      return;
    }

    const weightValue = Number(weight);
    const heightValue = Number(height);

    if (
      !Number.isFinite(weightValue) ||
      !Number.isFinite(heightValue) ||
      weightValue <= 0 ||
      heightValue <= 0
    ) {
      alert("Please enter valid weight and height values.");
      return;
    }

    const heightInMeters = heightValue / 100;

    const bmi =
      weightValue / (heightInMeters * heightInMeters);

    let category = "";

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal Weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }

    setResult({
      bmi: bmi.toFixed(1),
      category,
    });
  };

  const clearCalculator = () => {
    setWeight("");
    setHeight("");
    setResult(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      calculateBMI();
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is BMI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BMI, or Body Mass Index, is a screening measure calculated using a person's weight and height."
        }
      },
      {
        "@type": "Question",
        name: "How is BMI calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BMI is calculated by dividing weight in kilograms by height in meters squared."
        }
      },
      {
        "@type": "Question",
        name: "What is a normal BMI range?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For adults, a BMI from 18.5 to 24.9 is commonly categorized as normal weight."
        }
      },
      {
        "@type": "Question",
        name: "Is Toolora's BMI calculator free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Toolora's BMI calculator is free to use online without requiring an account or software installation."
        }
      },
      {
        "@type": "Question",
        name: "Is BMI an accurate measure of health?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BMI is a general screening measure and does not directly measure body fat or overall health. It may not accurately represent health for every individual."
        }
      }
    ]
  };

  return (
    <main className="compressor-page">

      <SEO
        title="BMI Calculator Online - Calculate Body Mass Index"
        description="Calculate your BMI online using your weight and height with Toolora's free BMI calculator. Get your Body Mass Index result instantly."
        keywords="BMI calculator, body mass index calculator, calculate BMI, BMI online, free BMI calculator, weight height BMI, BMI calculator online"
        canonical="/bmi-calculator"
      />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="container py-5">

        {/* Page Header */}
        <header className="text-center mb-5">

          <div className="hero-badge mb-3">
            ⚖️ Calculator Tool
          </div>

          <h1 className="fw-bold">
            BMI Calculator Online
          </h1>

          <p className="text-muted">
            Calculate your Body Mass Index using your weight
            and height and get your BMI category instantly.
          </p>

        </header>


        {/* BMI Calculator */}
        <section
          className="compressor-box calculator-box mx-auto"
          aria-label="Online BMI calculator"
        >

          <div className="row g-4">

            {/* Weight */}
            <div className="col-md-6">

              <label
                htmlFor="weight"
                className="form-label fw-semibold"
              >
                Weight (kg)
              </label>

              <input
                id="weight"
                type="number"
                min="1"
                step="0.1"
                className="form-control"
                placeholder="e.g. 60"
                value={weight}
                onChange={(event) =>
                  setWeight(event.target.value)
                }
                onKeyDown={handleKeyDown}
                aria-describedby="weight-help"
              />

              <small
                id="weight-help"
                className="text-muted d-block mt-2"
              >
                Enter your weight in kilograms.
              </small>

            </div>


            {/* Height */}
            <div className="col-md-6">

              <label
                htmlFor="height"
                className="form-label fw-semibold"
              >
                Height (cm)
              </label>

              <input
                id="height"
                type="number"
                min="1"
                step="0.1"
                className="form-control"
                placeholder="e.g. 165"
                value={height}
                onChange={(event) =>
                  setHeight(event.target.value)
                }
                onKeyDown={handleKeyDown}
                aria-describedby="height-help"
              />

              <small
                id="height-help"
                className="text-muted d-block mt-2"
              >
                Enter your height in centimeters.
              </small>

            </div>

          </div>


          {/* Buttons */}
          <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">

            <button
              type="button"
              className="btn btn-primary px-4"
              onClick={calculateBMI}
            >
              Calculate BMI
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
          {result && (

            <div
              className="calculator-result mt-5 text-center"
              aria-live="polite"
            >

              <p className="mb-2">
                Your BMI
              </p>

              <h2>
                {result.bmi}
              </h2>

              <h5 className="mt-3">
                {result.category}
              </h5>

            </div>

          )}

        </section>


        {/* SEO Content */}
        <article className="tool-information mx-auto mt-5">

          <h2>
            Free BMI Calculator Online
          </h2>

          <p>
            Toolora's free BMI calculator helps you calculate
            your Body Mass Index using your weight in kilograms
            and height in centimeters. Enter your measurements
            to get your BMI result instantly.
          </p>


          <h2>
            What Is BMI?
          </h2>

          <p>
            BMI stands for Body Mass Index. It is a commonly
            used screening measure based on a person's weight
            and height. BMI can provide a general indication
            of whether an adult's weight falls within an
            underweight, normal weight, overweight or obesity
            category.
          </p>


          <h2>
            How to Use the BMI Calculator
          </h2>

          <ol>

            <li>
              Enter your weight in kilograms.
            </li>

            <li>
              Enter your height in centimeters.
            </li>

            <li>
              Click the <strong>Calculate BMI</strong> button.
            </li>

            <li>
              Your BMI value and category will appear instantly.
            </li>

          </ol>


          <h2>
            BMI Formula
          </h2>

          <p>
            BMI is calculated by dividing a person's weight
            in kilograms by the square of their height in meters.
          </p>

          <p>
            <strong>
              BMI = Weight (kg) ÷ Height² (m)
            </strong>
          </p>


          <h2>
            BMI Categories
          </h2>

          <p>
            For adults, BMI values are commonly grouped into
            the following categories:
          </p>

          <ul>

            <li>
              <strong>Below 18.5:</strong> Underweight
            </li>

            <li>
              <strong>18.5 – 24.9:</strong> Normal Weight
            </li>

            <li>
              <strong>25 – 29.9:</strong> Overweight
            </li>

            <li>
              <strong>30 or above:</strong> Obesity
            </li>

          </ul>


          <h2>
            Why Use an Online BMI Calculator?
          </h2>

          <p>
            An online BMI calculator makes it easy to perform
            the BMI calculation without manually applying the
            formula. Toolora provides an instant result directly
            in your browser.
          </p>


          <h2>
            BMI and Body Weight
          </h2>

          <p>
            BMI can be useful as a general screening measurement,
            but it does not directly measure body fat or provide
            a complete assessment of an individual's health.
            Factors such as muscle mass, age and other
            characteristics can affect how BMI should be interpreted.
          </p>


          <h2>
            Is Toolora's BMI Calculator Free?
          </h2>

          <p>
            Yes. Toolora's BMI calculator is free to use online.
            No account or software installation is required.
            Enter your measurements and calculate your BMI
            instantly.
          </p>


          {/* Important Note */}
          <div className="mt-4">

            <p className="small text-muted">
              <strong>Note:</strong> BMI is a general screening
              measure and should not be used as the only indicator
              of an individual's health or body composition.
            </p>

          </div>


          {/* FAQ */}
          <h2>
            Frequently Asked Questions
          </h2>


          <h3>
            What is BMI?
          </h3>

          <p>
            BMI, or Body Mass Index, is a screening measure
            calculated using a person's weight and height.
          </p>


          <h3>
            How is BMI calculated?
          </h3>

          <p>
            BMI is calculated by dividing weight in kilograms
            by height in meters squared.
          </p>


          <h3>
            What is a normal BMI range?
          </h3>

          <p>
            For adults, a BMI from 18.5 to 24.9 is commonly
            categorized as normal weight.
          </p>


          <h3>
            Is Toolora's BMI calculator free?
          </h3>

          <p>
            Yes. Toolora's BMI calculator is completely free
            to use online.
          </p>


          <h3>
            Is BMI an accurate measure of health?
          </h3>

          <p>
            BMI is a general screening measure and does not
            directly measure body fat or overall health.
            It may not accurately represent health for every
            individual.
          </p>


          {/* Related Tools */}
          <h2>
            Related Free Tools
          </h2>

          <p>
            You may also find these Toolora tools useful:
          </p>

          <ul>

            <li>
              <Link to="/age-calculator">
                Age Calculator
              </Link>
            </li>

            <li>
              <Link to="/percentage-calculator">
                Percentage Calculator
              </Link>
            </li>

            <li>
              <Link to="/word-counter">
                Word Counter
              </Link>
            </li>

            <li>
              <Link to="/qr-code-generator">
                QR Code Generator
              </Link>
            </li>

          </ul>

        </article>

      </div>

    </main>
  );
}

export default BMICalculator;

