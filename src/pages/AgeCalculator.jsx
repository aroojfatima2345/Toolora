
import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function AgeCalculator() {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState(null);

  const today = new Date();
  const todayString = today.toISOString().split("T")[0];

  const calculateAge = () => {
    if (!dateOfBirth) {
      alert("Please select your date of birth.");
      return;
    }

    const birthDate = new Date(`${dateOfBirth}T00:00:00`);
    const currentDate = new Date();

    if (birthDate > currentDate) {
      alert("Date of birth cannot be in the future.");
      return;
    }

    let years =
      currentDate.getFullYear() - birthDate.getFullYear();

    let months =
      currentDate.getMonth() - birthDate.getMonth();

    let days =
      currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;

      const previousMonthDays = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();

      days += previousMonthDays;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Calculate next birthday
    let nextBirthday = new Date(
      currentDate.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate()
    );

    // Handle February 29 birthdays in non-leap years
    if (
      birthDate.getMonth() === 1 &&
      birthDate.getDate() === 29 &&
      nextBirthday.getMonth() !== 1
    ) {
      nextBirthday = new Date(
        currentDate.getFullYear(),
        1,
        28
      );
    }

    if (nextBirthday < currentDate) {
      nextBirthday = new Date(
        currentDate.getFullYear() + 1,
        birthDate.getMonth(),
        birthDate.getDate()
      );

      if (
        birthDate.getMonth() === 1 &&
        birthDate.getDate() === 29 &&
        nextBirthday.getMonth() !== 1
      ) {
        nextBirthday = new Date(
          currentDate.getFullYear() + 1,
          1,
          28
        );
      }
    }

    const difference =
      nextBirthday.getTime() - currentDate.getTime();

    const daysUntilBirthday = Math.max(
      0,
      Math.ceil(difference / (1000 * 60 * 60 * 24))
    );

    setAge({
      years,
      months,
      days,
      daysUntilBirthday,
    });
  };

  const clearCalculator = () => {
    setDateOfBirth("");
    setAge(null);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does an age calculator work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An age calculator uses your date of birth and the current date to calculate your age in years, months and days.",
        },
      },
      {
        "@type": "Question",
        name: "Can I calculate my exact age online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Enter your date of birth into Toolora's age calculator to calculate your age in years, months and days.",
        },
      },
      {
        "@type": "Question",
        name: "Can I find how many days are left until my birthday?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Toolora's age calculator also calculates the number of days remaining until your next birthday.",
        },
      },
      {
        "@type": "Question",
        name: "Is Toolora's age calculator free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Toolora's age calculator is free to use online without requiring an account or software installation.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use the age calculator on mobile devices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Toolora age calculator is designed to work on desktop, tablet and mobile devices.",
        },
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Toolora Age Calculator",
    url: "https://toolora-inky.vercel.app/age-calculator",
    description:
      "Free online age calculator for calculating exact age in years, months and days and finding days remaining until the next birthday.",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    browserRequirements:
      "Requires JavaScript and a modern web browser.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="compressor-page">
      <SEO
        title="Age Calculator Online - Calculate Your Exact Age"
        description="Calculate your exact age in years, months and days with Toolora's free online age calculator. Find your age and days remaining until your next birthday."
        keywords="age calculator, age calculator online, calculate age, exact age calculator, date of birth calculator, birthday calculator, age in years months days, free age calculator, calculate age from date of birth"
        canonical="/age-calculator"
      />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(webAppSchema)}
      </script>

      <div className="container py-5">
        <header className="text-center mb-5">
          <div className="hero-badge mb-3">
            🎂 Calculator Tool
          </div>

          <h1 className="fw-bold">
            Age Calculator Online
          </h1>

          <p className="text-muted">
            Calculate your exact age in years, months and days
            and find out how many days remain until your next
            birthday.
          </p>
        </header>

        <main>
          <section
            className="compressor-box calculator-box mx-auto"
            aria-label="Online age calculator"
          >
            <div className="mb-4">
              <label
                htmlFor="dateOfBirth"
                className="form-label fw-semibold"
              >
                Date of Birth
              </label>

              <input
                id="dateOfBirth"
                type="date"
                className="form-control"
                value={dateOfBirth}
                max={todayString}
                onChange={(event) => {
                  setDateOfBirth(event.target.value);
                  setAge(null);
                }}
                aria-describedby="dob-help"
              />

              <small
                id="dob-help"
                className="text-muted d-block mt-2"
              >
                Select your date of birth to calculate your exact age.
              </small>
            </div>

            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <button
                type="button"
                className="btn btn-primary px-4"
                onClick={calculateAge}
              >
                Calculate Age
              </button>

              <button
                type="button"
                className="btn btn-outline-danger px-4"
                onClick={clearCalculator}
                disabled={!dateOfBirth && !age}
              >
                Clear
              </button>
            </div>

            {age && (
              <div
                className="calculator-result mt-5"
                aria-live="polite"
              >
                <p className="mb-3">
                  Your Exact Age
                </p>

                <div className="row text-center">
                  <div className="col-4">
                    <h2>{age.years}</h2>
                    <span>Years</span>
                  </div>

                  <div className="col-4">
                    <h2>{age.months}</h2>
                    <span>Months</span>
                  </div>

                  <div className="col-4">
                    <h2>{age.days}</h2>
                    <span>Days</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-top">
                  <p className="mb-1">
                    🎉 Next Birthday
                  </p>

                  <h4 className="fw-bold">
                    {age.daysUntilBirthday}{" "}
                    {age.daysUntilBirthday === 1
                      ? "day"
                      : "days"}{" "}
                    remaining
                  </h4>
                </div>
              </div>
            )}
          </section>

          <section className="tool-information mx-auto mt-5">
            <h2>
              Free Age Calculator Online
            </h2>

            <p>
              Toolora's free age calculator helps you calculate
              your exact age from your date of birth. It shows
              your age in complete years, months and days and
              also tells you how many days remain until your next
              birthday.
            </p>

            <h2>
              How to Calculate Your Age Online
            </h2>

            <p>
              Calculating your age manually can require checking
              different months, dates and leap years. An online
              age calculator makes the process simple and quick.
            </p>

            <ol>
              <li>
                Select your date of birth.
              </li>

              <li>
                Click the <strong>Calculate Age</strong> button.
              </li>

              <li>
                Your exact age will appear in years, months and days.
              </li>

              <li>
                You can also see the number of days remaining
                until your next birthday.
              </li>
            </ol>

            <h2>
              What Does an Age Calculator Calculate?
            </h2>

            <p>
              An age calculator compares your date of birth with
              the current date. It calculates completed years,
              remaining months and days. Toolora also calculates
              the number of days remaining until your next birthday.
            </p>

            <h2>
              Calculate Age From Date of Birth
            </h2>

            <p>
              Your date of birth is the main information required
              to calculate your age. Select the correct date and
              Toolora will calculate your age using calendar dates.
            </p>

            <h2>
              Why Use an Online Age Calculator?
            </h2>

            <p>
              An online age calculator saves time and avoids
              manual date calculations. It can be useful when
              you need to determine your age for forms,
              applications, school records, registrations,
              personal planning and everyday calculations.
            </p>

            <h2>
              How Accurate Is an Age Calculator?
            </h2>

            <p>
              Toolora calculates age using your selected date of
              birth and the current date. The result is displayed
              in years, months and days based on calendar dates.
            </p>

            <h2>
              Is Toolora Age Calculator Free?
            </h2>

            <p>
              Yes. Toolora's age calculator is completely free
              to use online. You do not need to install software
              or create an account to calculate your age.
            </p>

            <h2>
              Frequently Asked Questions
            </h2>

            <h3>
              How does an age calculator work?
            </h3>

            <p>
              An age calculator compares your date of birth with
              the current date to calculate your age in years,
              months and days.
            </p>

            <h3>
              Can I calculate my exact age online?
            </h3>

            <p>
              Yes. Select your date of birth in the calculator
              above and click Calculate Age to see your result.
            </p>

            <h3>
              Can I find how many days are left until my birthday?
            </h3>

            <p>
              Yes. Toolora's age calculator shows the number of
              days remaining until your next birthday.
            </p>

            <h3>
              Is Toolora's age calculator free?
            </h3>

            <p>
              Yes. The calculator is free to use online without
              requiring an account or software installation.
            </p>

            <h3>
              Can I use the age calculator on mobile devices?
            </h3>

            <p>
              Yes. The calculator is designed to work on
              smartphones, tablets and desktop computers.
            </p>

            <h2>
              Related Free Tools
            </h2>

            <p>
              You may also find these Toolora tools useful:
            </p>

            <ul>
              <li>
                <Link to="/percentage-calculator">
                  Percentage Calculator
                </Link>
              </li>

              <li>
                <Link to="/bmi-calculator">
                  BMI Calculator
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
          </section>
        </main>
      </div>
    </div>
  );
}

export default AgeCalculator;

