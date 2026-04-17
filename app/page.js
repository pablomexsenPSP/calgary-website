export default function CalgarySignatureFinal() {
  const navItems = [
    "Home",
    "Jeans",
    "Fits",
    "Lookbook",
    "Our Story",
    "Wholesale",
    "Contact",
  ];

  const collections = [
    {
      series: "Series 1",
      fit: "Straight Fit",
      tagline: "Clean western balance.",
      description:
        "A structured straight fit built for everyday western wear with a tougher premium presence.",
      washes: ["Wash 01", "Wash 02", "Wash 03"],
    },
    {
      series: "Series 2",
      fit: "Boot Cut",
      tagline: "Boot-authentic profile.",
      description:
        "A more traditional western leg opening designed to sit right over boots without losing shape.",
      washes: ["Wash 01", "Wash 02", "Wash 03"],
    },
    {
      series: "Series 3",
      fit: "Slim Fit",
      tagline: "Sharper western line.",
      description:
        "A more modern western silhouette with a closer profile while keeping rugged denim character.",
      washes: ["Wash 01", "Wash 02", "Wash 03"],
    },
    {
      series: "Series 4",
      fit: "Relaxed Fit",
      tagline: "Roomier, tougher, grounded.",
      description:
        "A relaxed fit made for comfort, movement, and a stronger everyday ranch-inspired feel.",
      washes: ["Wash 01", "Wash 02", "Wash 03"],
    },
  ];

  const values = [
    {
      title: "Premium Denim",
      text: "Built to feel heavier, stronger, and more serious from the first touch.",
    },
    {
      title: "Western Inspired",
      text: "Open land, raw texture, dust, distance, and a genuine western visual language.",
    },
    {
      title: "Durability",
      text: "Designed with a made-to-last attitude and a long-wear point of view.",
    },
    {
      title: "Boot-Authentic Fit",
      text: "Every fit is shaped to make sense with boots, not fight against them.",
    },
  ];

  const sizes = [
    "30x30",
    "30x32",
    "30x34",
    "30x36",
    "32x30",
    "32x32",
    "32x34",
    "32x36",
    "34x30",
    "34x32",
    "34x34",
    "34x36",
    "36x30",
    "36x32",
    "36x34",
    "36x36",
  ];

  const lookbookCards = [
    {
      title: "Desert Light",
      text: "Warm tones, cinematic grain, and a premium western atmosphere.",
    },
    {
      title: "Fence Line",
      text: "Texture, simplicity, and a grounded feeling that never turns urban.",
    },
    {
      title: "Buffalo Mark",
      text: "A symbol of strength, endurance, and the visual soul of Calgary Signature.",
    },
  ];

  const heroImage =
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80";

  return (
    <div className="min-h-screen bg-[#0c0a08] text-[#f3ebde] selection:bg-[#d8c19a] selection:text-[#120f0c]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0c0a08]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e7dac2]/30 bg-[#e7dac2]/10 text-lg font-black text-[#efe2ca]">
              B
            </div>
            <div>
              <div className="text-lg font-black uppercase tracking-[0.28em] text-[#efe2ca]">
                Calgary Signature
              </div>
              <div className="text-[10px] uppercase tracking-[0.34em] text-[#bfab88]">
                Premium Western Denim
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#eadcc5]/82 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#wholesale"
            className="rounded-full border border-[#efe2ca]/30 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#efe2ca] transition hover:bg-[#efe2ca] hover:text-[#15110d]"
          >
            Wholesale Inquiry
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative isolate overflow-hidden border-b border-white/10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-45"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,7,6,0.35),rgba(8,7,6,0.88))]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:52px_52px]" />

          <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-end gap-12 px-5 pb-14 pt-24 md:grid-cols-[1.12fr_0.88fr] md:px-8 md:pb-20 md:pt-28">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#eadcc5]/20 bg-[#eadcc5]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d9c5a3]">
                Western Premium Identity
              </div>
              <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.92] text-[#f7f0e4] md:text-7xl lg:text-[6.4rem]">
                Calgary
                <span className="block text-[#e5d1af]">Signature</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#ddcfb8]/82 md:text-lg">
                Premium western denim with a tougher point of view. Built to last, shaped for boots, and made to
                carry the attitude of open country with a cleaner, stronger finish.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#jeans"
                  className="rounded-full bg-[#efe2ca] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.26em] text-[#15110d] transition hover:-translate-y-0.5"
                >
                  Explore Jeans
                </a>
                <a
                  href="#lookbook"
                  className="rounded-full border border-[#efe2ca]/30 px-7 py-3 text-[11px] font-bold uppercase tracking-[0.26em] text-[#efe2ca] transition hover:bg-white/10"
                >
                  View Lookbook
                </a>
              </div>
            </div>

            <div className="grid gap-4 md:justify-self-end">
              <div className="rounded-[2rem] border border-[#eadcc5]/15 bg-[#eadcc5]/8 p-6 backdrop-blur-sm">
                <div className="text-[10px] uppercase tracking-[0.34em] text-[#cdb899]">Hero Direction</div>
                <h3 className="mt-3 text-2xl font-black uppercase text-[#f5ebdb]">Video-ready cinematic block.</h3>
                <p className="mt-3 text-sm leading-7 text-[#dbcdb5]/80">
                  This hero is already structured so your final cinematic western video can replace the temporary image
                  without changing layout or style.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[1.75rem] border border-white/10 bg-[#15110d] p-5">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#bca887]">Starting Price</div>
                  <div className="mt-2 text-3xl font-black text-[#f3eadb]">$74.99</div>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-[#15110d] p-5">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#bca887]">Main Category</div>
                  <div className="mt-2 text-3xl font-black text-[#f3eadb]">Jeans</div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-[#15110d] p-5">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#bca887]">Brand line</div>
                <div className="mt-2 text-2xl font-black uppercase text-[#efe2ca]">Made to Last.</div>
              </div>
            </div>
          </div>
        </section>

        <section id="jeans" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="mb-12 max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#bca887]">Jeans</div>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-[#f4ebdc] md:text-6xl">
              Four series. Four western fits.
            </h2>
            <p className="mt-4 text-base leading-8 text-[#d8c8b0]/78">
              Calgary launches with four core fits designed to cover the western essentials, each one prepared for
              three wash variations and a stronger premium perception.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {collections.map((item) => (
              <div
                key={item.series}
                className="group rounded-[2rem] border border-white/10 bg-[#17120f] p-6 transition hover:-translate-y-1 hover:border-[#eadcc5]/20"
              >
                <div className="aspect-[4/5] rounded-[1.5rem] bg-[linear-gradient(180deg,#ab8d66_0%,#5d4734_50%,#18120f_100%)]" />
                <div className="mt-6 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#bca887]">
                  {item.series}
                </div>
                <h3 className="mt-2 text-2xl font-black uppercase text-[#f2e7d5]">{item.fit}</h3>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#d3bea0]">{item.tagline}</div>
                <p className="mt-3 text-sm leading-7 text-[#d5c4aa]/74">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.washes.map((wash) => (
                    <span
                      key={wash}
                      className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[#e6d7bf]/80"
                    >
                      {wash}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="fits" className="border-y border-white/10 bg-[#13100d]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[0.92fr_1.08fr] md:px-8 md:py-24">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#bca887]">Fits</div>
              <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-[#f4ebdc] md:text-6xl">
                Built around real boot-driven proportions.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#d9cab2]/78">
                Straight, boot cut, slim, and relaxed. Every Calgary fit is designed to feel authentic in a western
                context, not borrowed from urban denim trends.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#17120f] p-7 md:p-8">
              <div className="grid gap-4 md:grid-cols-4">
                {[
                  "Straight",
                  "Boot Cut",
                  "Slim",
                  "Relaxed",
                ].map((fit) => (
                  <div key={fit} className="rounded-[1.5rem] border border-white/10 bg-[#110d0a] p-4 text-center">
                    <div className="text-sm font-black uppercase tracking-[0.18em] text-[#efe2ca]">{fit}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#bca887]">Available Sizes</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <span
                      key={size}
                      className="rounded-full border border-white/10 bg-[#110d0a] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f0e2cc]/82"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="mb-12 max-w-2xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#bca887]">Craftsmanship</div>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-[#f4ebdc] md:text-6xl">
              What Calgary stands for.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-[2rem] border border-white/10 bg-[#17120f] p-6">
                <h3 className="text-2xl font-black uppercase text-[#f1e6d5]">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#d8c8af]/76">{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="lookbook" className="border-y border-white/10 bg-[linear-gradient(180deg,#100f0d_0%,#18120d_100%)]">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
            <div className="mb-12 max-w-3xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#bca887]">Lookbook</div>
              <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-[#f4ebdc] md:text-6xl">
                Cinematic western atmosphere.
              </h2>
              <p className="mt-4 text-base leading-8 text-[#d7c8b0]/78">
                Built around dust, earth tones, open country, cinematic grain, and a visual tone that feels premium
                without becoming fashion-editorial in the wrong way.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="min-h-[540px] rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#b49268_0%,#433427_48%,#14100d_100%)] p-7 md:p-10">
                <div className="flex h-full items-end">
                  <div className="max-w-xl rounded-[1.75rem] border border-white/10 bg-[#120f0c]/72 p-6 backdrop-blur-sm">
                    <div className="text-[10px] uppercase tracking-[0.35em] text-[#ccb899]">Future Video Placement</div>
                    <h3 className="mt-3 text-3xl font-black uppercase text-[#f3e8d7] md:text-4xl">
                      Hero footage can drop in here next.
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#d8c8af]/82">
                      The structure is already prepared for your final cinematic western video, while keeping a strong
                      premium visual presence in the meantime.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                {lookbookCards.map((card) => (
                  <div key={card.title} className="rounded-[2rem] border border-white/10 bg-[#17120f] p-6">
                    <div className="h-36 rounded-[1.5rem] bg-[linear-gradient(180deg,#8f7556_0%,#2f251c_100%)]" />
                    <h3 className="mt-5 text-2xl font-black uppercase text-[#f1e7d5]">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#d7c7ae]/76">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="our-story" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="grid gap-12 md:grid-cols-[0.92fr_1.08fr]">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#bca887]">Our Story</div>
              <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-[#f4ebdc] md:text-6xl">
                Premium western denim with a more grounded attitude.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-[#d7c8b0]/82">
              <p>
                Calgary Signature is being built around the idea that western denim can feel tougher, cleaner, and more
                memorable without losing its authenticity.
              </p>
              <p>
                The brand language comes from open land, buffalo strength, rawhide toughness, and the kind of visual
                confidence that feels natural with boots, leather, and worn denim.
              </p>
              <p>
                The goal is not to imitate. The goal is to belong in the same premium western conversation while
                building a distinct identity of its own.
              </p>
            </div>
          </div>
        </section>

        <section id="wholesale" className="border-y border-white/10 bg-[#13100d]">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
            <div className="grid gap-12 md:grid-cols-[0.88fr_1.12fr]">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#bca887]">Wholesale</div>
                <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-[#f4ebdc] md:text-6xl">
                  Wholesale inquiry and commercial contact.
                </h2>
                <p className="mt-5 text-base leading-8 text-[#d8c8af]/78">
                  Designed for stores, partners, and buyers who want to contact Calgary Signature early as a premium
                  western denim brand with room to grow into a wider product universe.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-[#17120f] p-7 md:p-8">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    className="rounded-2xl border border-white/10 bg-[#110d0a] px-4 py-4 text-sm text-[#f3e7d5] outline-none placeholder:text-[#9f8b6d]"
                    placeholder="Full Name"
                  />
                  <input
                    className="rounded-2xl border border-white/10 bg-[#110d0a] px-4 py-4 text-sm text-[#f3e7d5] outline-none placeholder:text-[#9f8b6d]"
                    placeholder="City"
                  />
                  <input
                    className="rounded-2xl border border-white/10 bg-[#110d0a] px-4 py-4 text-sm text-[#f3e7d5] outline-none placeholder:text-[#9f8b6d]"
                    placeholder="Phone"
                  />
                  <input
                    className="rounded-2xl border border-white/10 bg-[#110d0a] px-4 py-4 text-sm text-[#f3e7d5] outline-none placeholder:text-[#9f8b6d]"
                    placeholder="Email"
                  />
                </div>
                <textarea
                  className="mt-4 min-h-[160px] w-full rounded-[1.5rem] border border-white/10 bg-[#110d0a] px-4 py-4 text-sm text-[#f3e7d5] outline-none placeholder:text-[#9f8b6d]"
                  placeholder="Message"
                />
                <button className="mt-5 rounded-full bg-[#efe2ca] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.26em] text-[#15110d] transition hover:-translate-y-0.5">
                  Wholesale Inquiry
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#bca887]">Contact</div>
              <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-[#f4ebdc] md:text-5xl">
                Brand first. Shopify next.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#d8c8af]/78">
                This version is intentionally built as a premium identity-first website. Shopify can be connected later
                for products, checkout, inventory, and payments without changing the visual foundation.
              </p>
            </div>
            <a
              href="#home"
              className="rounded-full border border-[#efe2ca]/30 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.26em] text-[#efe2ca] transition hover:bg-white/10"
            >
              Back To Top
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#090806]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.1fr_0.9fr_0.8fr] md:px-8">
          <div>
            <div className="text-2xl font-black uppercase tracking-[0.28em] text-[#efe2ca]">Calgary Signature</div>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#d1bfa2]/72">
              Premium western denim built to last.
            </p>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#bca887]">Navigation</div>
            <div className="mt-4 grid gap-3 text-sm text-[#eee1ca]/82">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="transition hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#bca887]">Contact</div>
            <div className="mt-4 grid gap-3 text-sm text-[#eee1ca]/82">
              <a href="#">Instagram</a>
              <a href="#">WhatsApp</a>
              <a href="#">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
