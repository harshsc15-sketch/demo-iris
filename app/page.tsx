"use client"

import Image from "next/image";

const ASSET = "https://iris-living-spaces.lovable.app";

const markets = [
  {
    number: "01",
    title: "India",
    description: "Lutyens’ Delhi, NCR farmhouses, South Mumbai, Goa and the Himalayan hills.",
    image: `${ASSET}/assets/market-india-lutyens-vFh-YElE.jpg`,
  },
  {
    number: "02",
    title: "Dubai",
    description: "Palm Jumeirah, Downtown, DIFC and Business Bay.",
    image: `${ASSET}/assets/market-dubai-palm-CbBHg_bC.jpg`,
  },
  {
    number: "03",
    title: "London",
    description: "Mayfair, Knightsbridge, the Cotswolds and Surrey Hills.",
    image: `${ASSET}/assets/market-london-mayfair-CQPSYmuc.jpg`,
  },
  {
    number: "04",
    title: "Scotland",
    description: "Edinburgh, Highland estates, lochside homes and distinguished rural retreats.",
    image: `${ASSET}/assets/market-scotland-highlands-BWM5P4Dl.jpg`,
  },
];

const services = [
  {
    number: "01",
    title: "Property Portfolio Management",
    description:
      "End-to-end oversight of residential and commercial assets, from tenancy and maintenance to legal coordination and portfolio review.",
  },
  {
    number: "02",
    title: "Acquisition & Investment Advisory",
    description:
      "Sourcing, due diligence, valuation, negotiation and transaction management across India, the UAE, England and Scotland.",
  },
  {
    number: "03",
    title: "Global Indian Advisory",
    description:
      "Coordinated support for NRIs navigating cross-border ownership, repatriation considerations and multi-market portfolios.",
  },
  {
    number: "04",
    title: "Holiday Homes & Lifestyle Estates",
    description:
      "Sourcing, setting up and managing distinctive homes in Goa, the hills, the UAE, England and Scotland.",
  },
  {
    number: "05",
    title: "Private & Off-Market Opportunities",
    description:
      "A discreet view of selected residential, farmhouse and land opportunities not always widely circulated.",
  },
  {
    number: "06",
    title: "Land Development & Value Unlock",
    description:
      "Land identification, planning, development coordination and structured advice for assets with unrealised potential.",
  },
];

const properties = [
  {
    location: "Gurugram, India · Contemporary Residencies",
    title: "The Skyline Residencies",
    description: "Expansive urban living with a quiet, considered interior.",
    image: `${ASSET}/assets/opportunity-gurugram-hd-CVWf9LuN.jpg`,
  },
  {
    location: "Dubai, UAE · Waterfront Living",
    title: "The Palm Address",
    description: "Light-filled residencies composed around sea and horizon.",
    image: `${ASSET}/assets/opportunity-dubai-hd-CkGTmCLR.jpg`,
  },
  {
    location: "London, UK · Prime Residencies",
    title: "The Belgravia Collection",
    description: "Classical proportions interpreted for modern city life.",
    image: `${ASSET}/assets/opportunity-london-hd-DOc8L8zx.jpg`,
  },
  {
    location: "Goa, India · Second Home",
    title: "The Coastal House",
    description: "Indoor-outdoor living shaped by landscape and privacy.",
    image: `${ASSET}/assets/opportunity-goa-hd-CFvJFyex.jpg`,
  },
  {
    location: "Scottish Highlands · Country Estate",
    title: "The Lochside Collection",
    description: "Distinguished stone estates shaped by landscape, heritage and privacy.",
    image: `${ASSET}/assets/market-scotland-highlands-BWM5P4Dl.jpg`,
  },
];

const audiences = [
  "HNIs & UHNIs",
  "NRIs",
  "Entrepreneurs & Business Families",
  "Global Investors",
  "Family Offices",
  "Luxury Home Buyers",
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="IRIS Living Spaces home">
          <span className="brand-mark">I</span>
          <span className="brand-copy">
            <span className="brand-name">IRIS</span>
            <span className="brand-subtitle">LIVING SPACES</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#advisory">Advisory</a>
          <a href="#markets">Global Markets</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#consultation">
          Speak to an Advisor <Arrow diagonal />
        </a>
      </header>

      <section className="hero" id="home">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={`${ASSET}/assets/opportunity-gurugram-hd-CVWf9LuN.jpg`} aria-hidden="true">
          <source src="/videos/hero-global-desktop.mp4" type="video/mp4" />
          <source src={`${ASSET}/__l5e/assets-v1/843aa0a8-3858-4a1a-b6bb-4a063ffe8bd9/hero-global-desktop.mp4`} type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="hero-inner">
          <p className="hero-location">INDIA <span>·</span> DUBAI <span>·</span> LONDON <span>·</span> SCOTLAND</p>
          <p className="hero-kicker">Private real estate advisory</p>
          <h1>Legacy Defined.<br /><em>Wealth Preserved.</em></h1>
          <a className="button button-light" href="#about">Explore IRIS <Arrow diagonal /></a>
        </div>
        <div className="hero-bottom">
          <span>Thoughtful advice. Enduring value.</span>
          <a href="#markets">Discover <span className="scroll-line" /></a>
        </div>
      </section>

      <div className="trust-strip" aria-label="Our approach">
        <span>Private advisory</span><i />
        <span>India · Dubai · London · Scotland</span><i />
        <span>Carefully selected opportunities</span><i />
        <span>Long-term perspective</span>
      </div>

      <section className="section markets-section" id="markets">
        <div className="section-topline">
          <SectionIntro
            eyebrow="Global markets"
            title="Distinctive places. One discerning perspective."
            description="Local understanding, considered access and a consistent point of view across markets."
          />
          <a className="text-link" href="#consultation">Explore our markets <Arrow diagonal /></a>
        </div>
        <div className="market-grid">
          {markets.map((market) => (
            <a className="market-card" href="#consultation" key={market.title}>
              <Image height={300} width={300} src={market.image} alt={`${market.title} luxury real estate`} loading="lazy" />
              <span className="market-number">{market.number}</span>
              <div className="market-card-bottom">
                <div><h3>{market.title}</h3><p>{market.description}</p></div>
                <span className="round-arrow"><Arrow diagonal /></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section advisory-section" id="advisory">
        <div className="advisory-heading">
          <SectionIntro
            eyebrow="What we advise on"
            title="Strategic Investment and Legacy Insights."
            description="A personal, considered approach to property decisions that can shape more than a portfolio."
          />
          <a className="text-link" href="#consultation">Explore advisory <Arrow diagonal /></a>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-copy">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <span className="service-arrow"><Arrow diagonal /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="section opportunities-section">
        <SectionIntro
          eyebrow="Selected opportunities"
          title="Residencies of rare distinction."
          description="An illustrative selection of the places and possibilities that shape our conversations."
        />
        <div className="property-grid">
          {properties.map((property) => (
            <article className="property-card" key={property.title}>
              <a className="property-image" href="#consultation" aria-label={`Discuss ${property.title}`}>
                <Image height={300} width={300} src={property.image} alt={property.title} loading="lazy" />
                <span className="property-image-arrow"><Arrow diagonal /></span>
              </a>
              <p className="property-location">{property.location}</p>
              <h3>{property.title}</h3>
              <p className="property-description">{property.description}</p>
            </article>
          ))}
        </div>
        <p className="illustrative-note">Images and opportunity names are illustrative and are not representations of current availability.</p>
        <div className="center-action"><a className="button button-dark" href="#consultation">Discuss an Opportunity <Arrow diagonal /></a></div>
      </section>

      <section className="audience-section">
        <div className="audience-image">
          <Image height={300} width={300} src={`${ASSET}/assets/about-iris-advisor-hd-D2LrDxxM.jpg`} alt="Advisor looking over a city from a private residence" loading="lazy" />
        </div>
        <div className="audience-content">
          <p className="eyebrow">Who we work with</p>
          <h2>Sovereign Goals.<br /><em>Meticulously Met.</em></h2>
          <p className="audience-intro">We work with people whose property decisions deserve a wider view and a personal level of care.</p>
          <ol className="audience-list">
            {audiences.map((audience, index) => (
              <li key={audience}><span>{String(index + 1).padStart(2, "0")}</span>{audience}<Arrow diagonal /></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="founder-section" id="about">
        <div className="founder-copy">
          <p className="eyebrow">From the Founder’s Desk</p>
          <h2>Property is personal.<br /><em>Legacy, even more so.</em></h2>
          <p>With more than 21 years across real estate strategy, APAC investments, mergers and acquisitions, and fundraising, Sahil brings an operator’s perspective to every conversation.</p>
          <p>His work spans India, the UAE and the United Kingdom, with a focus on disciplined, cross-border advisory for HNIs and UHNIs. At IRIS, that experience shapes a considered approach to property, wealth and legacy.</p>
          <div className="founder-signature">
            <span className="signature-rule" />
            <div><strong>Sahil Verma</strong><span>FOUNDER, IRIS LIVING SPACES</span></div>
          </div>
        </div>
        <div className="founder-portrait">
          <Image height={300} width={300} src={`${ASSET}/__l5e/assets-v1/c1f3fc0b-b9bd-4123-a029-6ebc2a5f53ad/sahil-verma-founder.png`} alt="Sahil Verma, founder of IRIS Living Spaces" loading="lazy" />
          <span className="portrait-caption">A personal approach to property and legacy</span>
        </div>
      </section>

      <section className="about-band">
        <div>
          <p className="eyebrow">About IRIS</p>
          <h2>Privilege begins<br /><em>with trust.</em></h2>
        </div>
        <div className="about-band-copy">
          <p>IRIS has been built around meaningful relationships, careful judgement and long-term value. Our role is personal: to understand what matters, filter what does not, and remain alongside you throughout the decision.</p>
          <a className="text-link" href="#consultation">Our approach <Arrow diagonal /></a>
        </div>
      </section>

      <section className="consultation-section" id="consultation">
        <div className="consultation-bg" />
        <div className="consultation-content">
          <p className="eyebrow">Private consultation</p>
          <h2>Exceptional decisions<br /><em>begin in confidence.</em></h2>
          <p>Tell us what you are considering. An IRIS advisor will get back to you personally.</p>
          <a className="button button-light" href="mailto:enquiries@iris-living-spaces.com?subject=Private%20Consultation%20Request">Request a Private Consultation <Arrow diagonal /></a>
          <a className="consultation-whatsapp" href="https://wa.me/?text=Hello%20IRIS%2C%20I%27d%20like%20to%20discuss%20a%20property%20opportunity." target="_blank" rel="noreferrer">Or start a conversation on WhatsApp <Arrow diagonal /></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand brand-footer" href="#home">
            <span className="brand-mark">I</span>
            <span className="brand-copy"><span className="brand-name">IRIS</span><span className="brand-subtitle">LIVING SPACES</span></span>
          </a>
          <p>A private real-estate advisory connecting discerning clients with carefully selected opportunities.</p>
          <div className="footer-nav">
            <div><span className="footer-label">Navigate</span><a href="#advisory">Advisory</a><a href="#markets">Global Markets</a><a href="#about">About</a><a href="#consultation">Contact</a></div>
            <div><span className="footer-label">Our markets</span><span>India</span><span>Dubai</span><span>London</span><span>Scotland</span></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} IRIS Living Spaces</span><span>India · Dubai · London · Scotland</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
