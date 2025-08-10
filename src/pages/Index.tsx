import Header from "@/components/site/Header";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-deepfake.jpg";

const Index = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Deepfake Scanner & Detector',
    url: '/',
    potentialAction: {
      '@type': 'SearchAction',
      target: '/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="content" className="container mx-auto px-4">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span>Scan & Detect </span>
              <span className="gradient-text">Deepfake</span>
              <span> Videos</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-prose">
              Scan a suspicious video to find out if it’s synthetically manipulated.
              <br />
              <strong>Contact Us</strong> for on‑premise solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero" className="hover-scale" aria-label="Go to Scanner">
                <a href="https://scanner.deepware.ai/" target="_blank" rel="noreferrer">GO TO SCANNER</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="hover-scale" aria-label="Email Contact">
                <a href="mailto:info@deepware.ai">CONTACT US</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              loading="lazy"
              alt="Abstract AI shield with waveform representing deepfake detection"
              className="w-full rounded-xl border shadow-[var(--shadow-elegant)]"
            />
          </div>
        </section>

        {/* Enemy at the Gates */}
        <section id="about" className="grid md:grid-cols-2 gap-10 items-center py-16 md:py-24 bg-muted/30 rounded-xl px-6">
          <div className="order-2 md:order-1 space-y-4">
            <h2 className="text-3xl font-bold">Enemy at the Gates</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cybersecurity faces an emerging threat generally known as deepfakes. Malicious uses of AI‑generated
              synthetic media, the most powerful cyber‑weapon in history, are just around the corner.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="glass-card p-4">
              <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-accent/20 to-primary/10 border" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="scanner" className="py-16 md:py-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Try the Deepfake Scanner</h2>
          <p className="text-muted-foreground mb-6">Fast analysis, clear results, and enterprise options available.</p>
          <Button asChild size="lg" variant="hero" className="hover-scale">
            <a href="https://scanner.deepware.ai/" target="_blank" rel="noreferrer">Start Scanning</a>
          </Button>
        </section>
      </main>

      <footer className="border-t mt-8 py-6 text-sm text-muted-foreground">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Deepfake Scanner</p>
          <a className="story-link" href="#content">Back to top</a>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
};

export default Index;
