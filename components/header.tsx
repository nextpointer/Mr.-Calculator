export function Header() {
  return (
    <div class="header-container">
      <div class="header">
        <div class="hero-img-container">
          <img class="hero-img" src="/assets/mr-calc.webp" alt="mr-calc" />
        </div>
        <h1>Mr. Calculator</h1>
      </div>
      <div class="star">
        <img class="arrow-svg" src="/assets/arrow.svg" alt="arrow" />
        <a
          href="https://github.com/nextpointer/Mr.-Calculator"
          target={"_blank"}
        >
          <img class="star-svg" src="/assets/star.svg" alt="star-svg" />
        </a>
      </div>
      <section class="features-section">
        <div class="features-grid">
          <div class="feature-card">
            <p>⚡ Arbitrary-Precision</p>
          </div>
          <div class="feature-card">
            <p>🔒 Precision Control</p>
          </div>
          <div class="feature-card">
            <p>🖩 Large Number Support</p>
          </div>
          <div class="feature-card">
            <p>🎯 Accurate Results</p>
          </div>
        </div>
      </section>
    </div>
  );
}
