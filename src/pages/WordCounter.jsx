import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function WordCounter() {
  const [text, setText] = useState("");

  const words = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const characters = text.length;

  const charactersWithoutSpaces = text.replace(/\s/g, "").length;

  const sentences = text.trim()
    ? text.split(/[.!?]+/).filter((item) => item.trim()).length
    : 0;

  const paragraphs = text.trim()
    ? text.split(/\n+/).filter((item) => item.trim()).length
    : 0;

  const clearText = () => {
    setText("");
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a word counter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A word counter is an online tool that counts the number of words in a piece of text. It can also provide character, sentence and paragraph counts.",
        },
      },
      {
        "@type": "Question",
        name: "How does the Toolora word counter work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Paste or type your text into the Toolora word counter. The tool automatically calculates words, characters, characters without spaces, sentences and paragraphs.",
        },
      },
      {
        "@type": "Question",
        name: "Can I count characters without spaces?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Toolora shows both the total character count and the number of characters excluding whitespace.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Toolora word counter free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Toolora's online word counter is free to use.",
        },
      },
      {
        "@type": "Question",
        name: "Who can use an online word counter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Students, writers, bloggers, content creators and anyone who needs to check the length of text can use an online word counter.",
        },
      },
    ],
  };

  return (
    <div className="compressor-page">

      <SEO
        title="Word Counter Online - Count Words & Characters Free"
        description="Count words, characters, sentences and paragraphs online for free with Toolora's simple word counter."
        keywords="word counter, word count, character counter, count words online, online word counter, free word counter, character count, sentence counter"
        canonical="/word-counter"
      />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="container py-5">

        <header className="text-center mb-5">

          <div className="hero-badge mb-3">
            📝 Free Text Tool
          </div>

          <h1 className="fw-bold">
            Word Counter Online
          </h1>

          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Count words, characters, sentences and paragraphs
            instantly with Toolora's free online word counter.
          </p>

        </header>

        <main>

          <section
            className="compressor-box mx-auto"
            aria-label="Online word counter tool"
          >

            <label
              htmlFor="wordCounterText"
              className="visually-hidden"
            >
              Enter or paste your text
            </label>

            <textarea
              id="wordCounterText"
              className="form-control word-textarea"
              rows="12"
              placeholder="Start typing or paste your text here..."
              value={text}
              onChange={(event) =>
                setText(event.target.value)
              }
              aria-label="Enter or paste text to count words and characters"
            />

            <div className="row g-3 mt-3">

              <div className="col-6 col-md-3">
                <div className="counter-card">

                  <strong>
                    {words}
                  </strong>

                  <span>
                    Words
                  </span>

                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="counter-card">

                  <strong>
                    {characters}
                  </strong>

                  <span>
                    Characters
                  </span>

                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="counter-card">

                  <strong>
                    {charactersWithoutSpaces}
                  </strong>

                  <span>
                    Without Spaces
                  </span>

                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="counter-card">

                  <strong>
                    {sentences}
                  </strong>

                  <span>
                    Sentences
                  </span>

                </div>
              </div>

            </div>

            <div
              className="mt-3 text-center"
              aria-live="polite"
            >

              <span className="text-muted">
                Paragraphs:{" "}
              </span>

              <strong>
                {paragraphs}
              </strong>

            </div>

            <div className="text-center mt-4">

              <button
                type="button"
                className="btn btn-outline-danger px-4"
                onClick={clearText}
              >
                Clear Text
              </button>

            </div>

          </section>

          <article className="tool-information mx-auto mt-5">

            <section>

              <h2>
                Free Online Word Counter
              </h2>

              <p>
                Toolora's free word counter lets you count
                words, characters, sentences and paragraphs
                in your text. Simply type or paste your content
                into the text box and the results are calculated
                automatically.
              </p>

              <p>
                An online word counter can be useful for
                students, writers, bloggers, content creators,
                copywriters and anyone who needs to check the
                length of written content.
              </p>

            </section>

            <section className="mt-4">

              <h2>
                What Does the Word Counter Count?
              </h2>

              <p>
                Toolora provides several text statistics so
                you can quickly understand the length of your
                content.
              </p>

              <ul>

                <li>
                  <strong>Words:</strong> The total number of
                  words detected in your text.
                </li>

                <li>
                  <strong>Characters:</strong> The total number
                  of characters, including spaces.
                </li>

                <li>
                  <strong>Characters without spaces:</strong>
                  The number of characters after whitespace is
                  removed.
                </li>

                <li>
                  <strong>Sentences:</strong> The number of
                  detected sentences based on common sentence
                  punctuation.
                </li>

                <li>
                  <strong>Paragraphs:</strong> The number of
                  non-empty lines or text blocks separated by
                  line breaks.
                </li>

              </ul>

            </section>

            <section className="mt-4">

              <h2>
                How to Count Words Online
              </h2>

              <p>
                Counting words with Toolora is simple:
              </p>

              <ol>

                <li>
                  Type your text into the text box or paste
                  existing content.
                </li>

                <li>
                  View the automatically calculated word count.
                </li>

                <li>
                  Check characters, characters without spaces,
                  sentences and paragraphs.
                </li>

                <li>
                  Use the <strong>Clear Text</strong> button
                  when you want to start again.
                </li>

              </ol>

            </section>

            <section className="mt-4">

              <h2>
                Why Use an Online Word Counter?
              </h2>

              <p>
                Word count can be important when content needs
                to meet a specific length requirement. Instead
                of manually counting words, an online word
                counter can provide the information instantly.
              </p>

              <ul>

                <li>
                  Check the length of essays and assignments.
                </li>

                <li>
                  Monitor blog and article word counts.
                </li>

                <li>
                  Check content before submitting it.
                </li>

                <li>
                  Count characters for platforms with text
                  limits.
                </li>

                <li>
                  Quickly review the structure of written content.
                </li>

              </ul>

            </section>

            <section className="mt-4">

              <h2>
                Word Count for Students and Assignments
              </h2>

              <p>
                Students often need to meet minimum or maximum
                word-count requirements for essays, reports,
                applications and assignments. Toolora can help
                you quickly check the number of words in your
                content before submission.
              </p>

              <p>
                You can also check character and paragraph
                counts to get a broader overview of your text.
              </p>

            </section>

            <section className="mt-4">

              <h2>
                Word Count for Writers and Content Creators
              </h2>

              <p>
                Writers, bloggers and content creators may need
                to keep articles, website copy or other content
                within a particular length. A word counter makes
                it easy to check the current size of your text
                while editing.
              </p>

              <p>
                The character counter can also be useful when
                working with platforms that impose character
                limits.
              </p>

            </section>

            <section className="mt-4">

              <h2>
                Word Count vs Character Count
              </h2>

              <p>
                Word count measures the number of words in a
                text, while character count measures individual
                characters. Toolora displays total characters
                as well as characters without spaces.
              </p>

              <p>
                These measurements can be useful for different
                types of writing requirements. A document may
                have a word limit while a social media field,
                form or application may have a character limit.
              </p>

            </section>

            <section className="mt-4">

              <h2>
                Is Toolora Word Counter Free?
              </h2>

              <p>
                Yes. Toolora's online word counter is free to
                use. You can type or paste your text and view
                the word, character, sentence and paragraph
                counts instantly.
              </p>

            </section>

            <section className="mt-5">

              <h2>
                Frequently Asked Questions
              </h2>

              <h3 className="mt-4">
                What is a word counter?
              </h3>

              <p>
                A word counter is an online tool that counts
                the number of words in a piece of text. It can
                also provide character, sentence and paragraph
                counts.
              </p>

              <h3 className="mt-4">
                How does the Toolora word counter work?
              </h3>

              <p>
                Paste or type your text into the Toolora word
                counter. The tool automatically calculates
                words, characters, characters without spaces,
                sentences and paragraphs.
              </p>

              <h3 className="mt-4">
                Can I count characters without spaces?
              </h3>

              <p>
                Yes. Toolora shows both the total character
                count and the number of characters excluding
                whitespace.
              </p>

              <h3 className="mt-4">
                Is the Toolora word counter free?
              </h3>

              <p>
                Yes. Toolora's online word counter is free
                to use.
              </p>

              <h3 className="mt-4">
                Who can use an online word counter?
              </h3>

              <p>
                Students, writers, bloggers, content creators
                and anyone who needs to check the length of
                text can use an online word counter.
              </p>

            </section>

            <section className="mt-5">

              <h2>
                Related Toolora Tools
              </h2>

              <p>
                Explore other free online tools from Toolora:
              </p>

              <div className="d-flex flex-wrap gap-3 mt-3">

                <Link
                  to="/percentage-calculator"
                  className="btn btn-outline-primary"
                >
                  Percentage Calculator →
                </Link>

                <Link
                  to="/qr-code-generator"
                  className="btn btn-outline-primary"
                >
                  QR Code Generator →
                </Link>

                <Link
                  to="/image-compressor"
                  className="btn btn-outline-primary"
                >
                  Image Compressor →
                </Link>

              </div>

            </section>

          </article>

        </main>

      </div>

    </div>
  );
}

export default WordCounter;

