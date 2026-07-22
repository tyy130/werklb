import Image from "next/image";

const weeklyHours = [
  { day: "Wednesday", short: "WED", time: "7PM—2AM", note: "The week clocks in." },
  { day: "Thursday", short: "THU", time: "7PM—2AM", note: "Warm up the floor." },
  { day: "Friday", short: "FRI", time: "7PM—2AM", note: "Full shift. Full volume." },
  { day: "Saturday", short: "SAT", time: "7PM—2AM", note: "Overtime looks good on you." },
  { day: "Sunday", short: "SUN", time: "7PM—2AM", note: "One more before Monday." },
];

const levels = [
  {
    number: "01",
    title: "Dance",
    copy: "Big sound, hot bodies, and a floor made for losing track of time.",
  },
  {
    number: "02",
    title: "Sing + Play",
    copy: "Karaoke, pool, and enough room to catch your breath—or somebody’s eye.",
  },
  {
    number: "03",
    title: "Perform",
    copy: "Drag, dancers, live moments, and the kind of chaos worth dressing for.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="WERK Long Beach home">
          WERK<span>.</span>
        </a>
        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="#calendar">What’s on</a>
          <a href="#inside">The club</a>
          <a href="#visit">Visit</a>
        </nav>
        <a
          className="header-cta"
          href="https://www.instagram.com/werklongbeach/"
          target="_blank"
          rel="noreferrer"
        >
          Tonight’s lineup <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> Clock in Wednesday—Sunday</div>
          <h1>
            Do the
            <span>WERK.</span>
          </h1>
          <p className="hero-lede">
            Three levels. Five nights. Zero reason to behave. Long Beach’s queer
            dance floor is ready when you are.
          </p>
          <div className="hero-actions">
            <a className="button button-hot" href="#calendar">See this week</a>
            <a
              className="button button-ghost"
              href="https://maps.google.com/?q=3428+Pacific+Coast+Hwy+Long+Beach+CA+90804"
              target="_blank"
              rel="noreferrer"
            >
              Get directions <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-meta" aria-label="Venue details">
            <div><b>3428</b><span>Pacific Coast Hwy</span></div>
            <div><b>7—2</b><span>Wednesday—Sunday</span></div>
            <div><b>3×</b><span>Levels to explore</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <Image
            src="/images/hero-heat.webp"
            alt="Portrait lit by a vivid red beam"
            width="896"
            height="1344"
          />
          <div className="photo-label">Hot off the clock</div>
          <div className="stamp" aria-hidden="true"><span>LB</span>90804</div>
        </div>
      </section>

      <div className="ticker" aria-label="WERK venue highlights">
        <div>
          <span>Dance</span><i>✦</i><span>Drag</span><i>✦</i><span>Karaoke</span><i>✦</i>
          <span>Pool</span><i>✦</i><span>Community</span><i>✦</i><span>Long Beach</span><i>✦</i>
          <span>Dance</span><i>✦</i><span>Drag</span><i>✦</i><span>Karaoke</span>
        </div>
      </div>

      <section className="schedule section-pad" id="calendar">
        <div className="section-heading schedule-heading">
          <div>
            <span className="kicker">The punch list</span>
            <h2>This week<br />at WERK.</h2>
          </div>
          <div className="schedule-intro">
            <p>
              The room changes nightly. The attitude doesn’t. Check the live board
              for DJs, drag, go-go sets, theme nights, and special events.
            </p>
            <a
              className="text-link"
              href="https://www.instagram.com/werklongbeach/"
              target="_blank"
              rel="noreferrer"
            >
              View the live calendar <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="shift-grid">
          {weeklyHours.map((shift, index) => (
            <article className={`shift-card shift-${index + 1}`} key={shift.day}>
              <div className="shift-top"><span>{shift.short}</span><span>#{String(index + 1).padStart(2, "0")}</span></div>
              <h3>{shift.day}</h3>
              <p>{shift.note}</p>
              <div className="shift-time">{shift.time}</div>
            </article>
          ))}
        </div>
        <p className="calendar-note">Programming may change. Instagram has the latest nightly call sheet.</p>
      </section>

      <section className="manifesto" id="inside">
        <div className="manifesto-image">
          <Image
            src="/images/werk-future.webp"
            alt="Woman in futuristic black glasses under red light"
            width="896"
            height="1344"
            loading="lazy"
          />
          <div className="image-index">02 / AFTER DARK</div>
        </div>
        <div className="manifesto-copy">
          <span className="kicker">Built different</span>
          <h2>Three floors.<br /><em>One pulse.</em></h2>
          <p className="manifesto-lede">
            WERK is a multi-level queer nightclub built for music, movement,
            performance, and the people who make Long Beach impossible to copy.
          </p>
          <div className="level-list">
            {levels.map((level) => (
              <div className="level" key={level.number}>
                <span>{level.number}</span>
                <h3>{level.title}</h3>
                <p>{level.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="heat-check section-pad" aria-label="WERK atmosphere">
        <div className="section-heading">
          <div>
            <span className="kicker">Heat check</span>
            <h2>Come ready.<br />Leave wrecked.</h2>
          </div>
          <p className="heat-copy">
            Loud enough to forget your inbox. Close enough to make new plans.
            Inclusive by design, electric on purpose.
          </p>
        </div>
        <div className="photo-grid">
          <figure className="photo-card photo-a">
            <Image src="/images/close-heat.webp" alt="Close portrait under warm club light" width="896" height="1344" loading="lazy" />
            <figcaption><span>01</span> Feel seen</figcaption>
          </figure>
          <figure className="photo-card photo-b">
            <Image src="/images/neon-werk.webp" alt="Man painted in vivid neon light" width="960" height="1200" loading="lazy" />
            <figcaption><span>02</span> Lose the light</figcaption>
          </figure>
          <div className="photo-callout">
            <span>WERK RULE #01</span>
            <p>Be hot.<br />Don’t be an asshole.</p>
            <small>Respect the room. Respect the staff. Respect each other.</small>
          </div>
        </div>
      </section>

      <section className="community">
        <div className="community-copy">
          <span className="kicker">This space is for all</span>
          <h2>No velvet rope<br />around belonging.</h2>
          <p>
            WERK is for the LGBTQ+ community and everyone who shows up with love.
            Dance hard. Tip well. Make room. Take care of each other.
          </p>
          <a className="button button-light" href="mailto:WerkLongBeach@gmail.com">Contact WERK</a>
        </div>
        <div className="community-mark" aria-hidden="true">ALL<br /><span>NIGHT</span></div>
      </section>

      <section className="visit section-pad" id="visit">
        <div className="visit-main">
          <span className="kicker">Report for duty</span>
          <h2>Meet us<br />after dark.</h2>
          <address>
            3428 Pacific Coast Hwy<br />
            Long Beach, CA 90804
          </address>
          <div className="visit-actions">
            <a className="button button-hot" href="https://maps.google.com/?q=3428+Pacific+Coast+Hwy+Long+Beach+CA+90804" target="_blank" rel="noreferrer">Open in Maps ↗</a>
            <a className="text-link" href="tel:+15625973884">562-597-3884</a>
          </div>
        </div>
        <div className="hours-panel">
          <h3>Opening hours</h3>
          <dl>
            <div><dt>Mon—Tue</dt><dd>Closed</dd></div>
            <div><dt>Wed—Sun</dt><dd>7PM—2AM</dd></div>
          </dl>
          <div className="hazard-stripe" />
          <p>Special-event hours may vary. Check the live board before you clock in.</p>
        </div>
      </section>

      <footer>
        <div className="footer-brand">WERK<span>.</span></div>
        <div className="footer-links">
          <a href="https://www.instagram.com/werklongbeach/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="mailto:WerkLongBeach@gmail.com">Email</a>
          <a href="#top">Back to top ↑</a>
        </div>
        <p>Queer nights, made in Long Beach.</p>
      </footer>
    </main>
  );
}
