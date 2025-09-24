
export function Footer() {
  return (
    <>
      <section class="features-section-phone">
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
      <div class="contact-section">
        <div className={"icon"}>
          <a href="https://github.com/nextpointer/Mr.-Calculator" target={"_blank"}><img src="/assets/gh.png" alt="" /></a>
        </div>
        <div className={"icon"}>
          <a href="https://www.linkedin.com/in/thelazycoder3112/" target={"_blank"}><img src="/assets/li.png" alt="" /></a>
        </div>
        <div className={"icon"}>
          <a href="https://x.com/nextpointerX" target={"_blank"}><img src="/assets/x.png" alt="" /></a>
        </div >
      </div>

    </>
  );
}