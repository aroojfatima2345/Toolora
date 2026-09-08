import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function WordCounter() {
  const [text, setText] = useState("");

  const statistics = useMemo(() => {
    const trimmedText = text.trim();

    const words = trimmedText
      ? trimmedText.split(/\s+/).length
      : 0;

    const characters = text.length;

    const charactersWithoutSpaces = text.replace(/\s/g, "").length;

    const sentences = trimmedText
      ? text.split(/[.!?]+/).filter((item) => item.trim()).length
      : 0;

    const paragraphs = trimmedText
      ? text.split(/\n+/).filter((item) => item.trim()).length
      : 0;

    return {
      words,
      characters,
      charactersWithoutSpaces,
      sentences,
      paragraphs,
    };
  }, [text]);

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
          text: "Type or paste your text into the Toolora word counter. The tool automatically calculates words, characters, characters without spaces, sentences and paragraphs.",
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
          text: "Yes. Toolora's online word counter is completely free to use.",
        },
      },
      {
        "@type": "Question",
        name: "Who can use an online word counter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Students, writers, bloggers, content creators, copywriters and anyone who needs to check the length of written content can use an online word counter.",
        },
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Toolora Word Counter",
    url: "https://toolora-inky.vercel.app/word-counter",
    description:
      "Free online word counter for counting words, characters, sentences and paragraphs instantly.",
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
        title="Word Counter Online - Count Words & Characters Free"
        description="Free online word counter to count words, characters, characters without spaces, sentences and paragraphs instantly. No signup required."
        keywords="word counter, word count, online word counter, free word counter, character counter, character count, count words online, word count tool, sentence counter, paragraph counter"
        canonical="/word-counter"
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
            aria-labelledby="word-counter-tool-heading"
          >
            <h2
              id="word-counter-tool-heading"
              className="visually-hidden"
            >
              Online Word and Character Counter
            </h2>

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
              onChange={(event) => setText(event.target.value)}
              aria-label="Enter or paste text to count words and characters"
              aria-describedby="word-counter-help"
            />

            <p
              id="word-counter-help"
              className="visually-hidden"
            >
              Your text is analyzed instantly in your browser to
              calculate words, characters, sentences and paragraphs.
            </p>

            <div
              className="row g-3 mt-3"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="col-6 col-md-3">
                <div className="counter-card">
                  <strong>
                    {statistics.words}
                  </strong>

                  <span>
                    Words
                  </span>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="counter-card">
                  <strong>
                    {statistics.characters}
                  </strong>

                  <span>
                    Characters
                  </span>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="counter-card">
                  <strong>
                    {statistics.charactersWithoutSpaces}
                  </strong>

                  <span>
                    Without Spaces
                  </span>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="counter-card">
                  <strong>
                    {statistics.sentences}
                  </strong>

                  <span>
                    Sentences
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3 text-center">
              <span className="text-muted">
                Paragraphs:{" "}
              </span>

              <strong>
                {statistics.paragraphs}
              </strong>
            </div>

            <div className="text-center mt-4">
              <button
                type="button"
                className="btn btn-outline-danger px-4"
                onClick={clearText}
                disabled={!text}
                aria-label="Clear all text"
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
                Toolora's free online word counter helps you
                instantly count words, characters, sentences and
                paragraphs in your text. Type directly into the
                text box or paste existing content to see the
                results automatically.
              </p>

              <p>
                This online word count tool is useful for students,
                writers, bloggers, copywriters, content creators
                and anyone who needs to check the length of written
                content.
              </p>
            </section>

            <section className="mt-4">
              <h2>
                What Does the Word Counter Count?
              </h2>

              <p>
                Toolora provides several useful text statistics
                so you can quickly understand the size and
                structure of your content.
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
                  <strong>Characters without spaces:</strong>{" "}
                  The number of characters after whitespace is
                  removed.
                </li>

                <li>
                  <strong>Sentences:</strong> The number of
                  sentences detected using common sentence
                  punctuation such as periods, exclamation marks
                  and question marks.
                </li>

                <li>
                  <strong>Paragraphs:</strong> The number of
                  non-empty text blocks separated by line breaks.
                </li>
              </ul>
            </section>

            <section className="mt-4">
              <h2>
                How to Count Words Online
              </h2>

              <p>
                Counting words with Toolora is quick and simple:
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
                  Select <strong>Clear Text</strong> when you want
                  to start again.
                </li>
              </ol>
            </section>

            <section className="mt-4">
              <h2>
                Why Use an Online Word Counter?
              </h2>

              <p>
                Many types of writing have specific word or
                character limits. An online word counter lets you
                check the length of your content instantly instead
                of counting words manually.
              </p>

              <ul>
                <li>
                  Check essays, assignments and reports.
                </li>

                <li>
                  Monitor blog posts and articles.
                </li>

                <li>
                  Check content before submitting or publishing it.
                </li>

                <li>
                  Count characters for platforms with text limits.
                </li>

                <li>
                  Quickly review the structure of written content.
                </li>
              </ul>
            </section>

            <section className="mt-4">
              <h2>
                Word Counter for Students and Assignments
              </h2>

              <p>
                Students often need to meet minimum or maximum
                word-count requirements for essays, reports,
                applications and assignments. Toolora makes it
                easy to check your word count before submission.
              </p>

              <p>
                You can also check character and paragraph counts
                to get a better overview of your written content.
              </p>
            </section>

            <section className="mt-4">
              <h2>
                Word Counter for Writers and Content Creators
              </h2>

              <p>
                Writers, bloggers and content creators may need
                to keep articles, website copy and other content
                within a specific length. A word counter makes it
                easy to monitor content size while writing and
                editing.
              </p>

              <p>
                The character counter can also help when working
                with forms, applications or platforms that use
                character limits.
              </p>
            </section>

            <section className="mt-4">
              <h2>
                Word Count vs Character Count
              </h2>

              <p>
                Word count measures the number of words in a text,
                while character count measures individual
                characters. Toolora displays both total characters
                and characters without spaces.
              </p>

              <p>
                These measurements are useful for different
                writing requirements. Documents may have a word
                limit, while forms, applications and online
                platforms may have character limits.
              </p>
            </section>

            <section className="mt-4">
              <h2>
                Is Toolora Word Counter Free?
              </h2>

              <p>
                Yes. Toolora's online word counter is completely
                free to use. You can type or paste your text and
                instantly view word, character, sentence and
                paragraph counts without creating an account.
              </p>
            </section>

            <section className="mt-4">
              <h2>
                Is My Text Uploaded?
              </h2>

              <p>
                No. The word counter processes your text directly
                in your browser. The tool does not require you to
                upload a document or create an account to calculate
                your text statistics.
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
                A word counter is an online tool that counts the
                number of words in a piece of text. It can also
                provide character, sentence and paragraph counts.
              </p>

              <h3 className="mt-4">
                How does the Toolora word counter work?
              </h3>

              <p>
                Type or paste your text into the Toolora word
                counter. The tool automatically calculates words,
                characters, characters without spaces, sentences
                and paragraphs.
              </p>

              <h3 className="mt-4">
                Can I count characters without spaces?
              </h3>

              <p>
                Yes. Toolora shows both the total character count
                and the number of characters excluding whitespace.
              </p>

              <h3 className="mt-4">
                Is the Toolora word counter free?
              </h3>

              <p>
                Yes. Toolora's online word counter is completely
                free to use.
              </p>

              <h3 className="mt-4">
                Who can use an online word counter?
              </h3>

              <p>
                Students, writers, bloggers, content creators,
                copywriters and anyone who needs to check the
                length of text can use an online word counter.
              </p>
            </section>

            <section className="mt-5">
              <h2>
                Related Toolora Tools
              </h2>

              <p>
                Explore more free online tools from Toolora:
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

                <Link
                  to="/image-resizer"
                  className="btn btn-outline-primary"
                >
                  Image Resizer →
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

