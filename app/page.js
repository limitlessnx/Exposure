import SupportChat from '../components/SupportChat';

const gallery = [
  { id: '0224', title: 'Studio Portrait', category: 'Portraits' },
  { id: '0219', title: 'Wedding Story', category: 'Weddings' },
  { id: '0221', title: 'Editorial Light', category: 'Editorial' },
  { id: '0218', title: 'Little Moments', category: 'Kids' },
  { id: '0215', title: 'The Xposure Space', category: 'Studio' },
];

export default function Home(){
  return (
    <main className="studioPage">
      <section id="top" className="studioHero">
        <header className="studioNav studioWrap">
          <a className="brand" href="#top" aria-label="Xposure home">Xposure</a>
          <nav aria-label="Primary navigation">
            <a href="#about">About Us</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#studio">Studio</a>
            <a href="#contact">Contact Us</a>
            <a className="bookLink" href="#contact">Book Now</a>
          </nav>
          <button className="studioMenu" aria-label="Open menu"><span></span><span></span></button>
        </header>

        <div className="studioWrap heroLayout">
          <div className="heroIntro" id="about">
            <p className="miniLabel">XPOSURE STUDIO</p>
            <h1>Photography<br/>with presence.</h1>
            <h3>Made to be remembered.</h3>
            <p className="heroBody">Portraits, weddings, editorials and studio stories shaped with intentional light, confident direction and a finish that feels unmistakably Xposure.</p>
            <div className="heroActions"><a className="goldButton" href="#portfolio">VIEW OUR WORK</a><a className="textLink" href="#contact">BOOK A SESSION <span>↗</span></a></div>
            <div className="heroSocials" aria-label="Social links"><a href="https://www.instagram.com/xposure.ng" target="_blank" rel="noreferrer">Instagram</a><span>•</span><span>Lagos, Nigeria</span></div>
          </div>

          <div className="heroPortrait">
            <div className="portraitHalo"></div>
            <img src="/api/media/0217" alt="Xposure studio editorial portrait" fetchPriority="high"/>
            <div className="heroFrameLabel"><span>PORTRAIT / EDITORIAL</span><strong>01</strong><i></i><small>08</small></div>
            <div className="imageCredit">SHOT BY XPOSURE</div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="bestShots">
        <div className="studioWrap bestLayout">
          <div className="bestCopy">
            <p className="miniLabel">SELECTED WORK</p>
            <h2>Best<br/>Shots</h2>
            <p>The work should do the convincing. Real Xposure portraits, preserved in full colour so skin, styling, light and atmosphere stay exactly where the photographer intended them.</p>
            <a className="goldButton" href="#gallery">BROWSE THE PORTFOLIO</a>
          </div>

          <div className="shotGrid">
            <figure className="shotCard shot1"><img src="/api/media/0223" alt="Xposure portrait in white"/><figcaption><span>Portrait</span><b>Quiet confidence</b></figcaption></figure>
            <figure className="shotCard shot2"><img src="/api/media/0220" alt="Xposure portrait in pink suit"/><figcaption><span>Editorial</span><b>Studio character</b></figcaption></figure>
            <div className="shotControls"><span>01</span><i></i><span>02</span></div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallerySection">
        <div className="studioWrap">
          <div className="galleryHeading"><div><p className="miniLabel">THE XPOSURE ARCHIVE</p><h2>Stories in frame.</h2></div><p>People. Milestones. Personality. Every frame treated like it has to sell the studio without saying a word.</p></div>
          <div className="galleryGrid">
            {gallery.map((item, i)=><figure className={`galleryItem galleryItem${i+1}`} key={item.id}><img src={`/api/media/${item.id}`} alt={`${item.title} by Xposure Studio`}/><figcaption><span>{item.category}</span><b>{item.title}</b></figcaption></figure>)}
          </div>
        </div>
      </section>

      <section id="studio" className="studioFeature">
        <div className="studioWrap studioFeatureGrid">
          <figure className="studioImage"><img src="/api/media/0215" alt="Inside Xposure Studio"/></figure>
          <div className="studioFeatureCopy"><p className="miniLabel">THE SPACE</p><h2>Walk in with an idea.<br/>Leave with an image.</h2><p>A warm, controlled studio built for portraits, children, fashion, personal branding and creative productions. The environment is part of the experience, not an afterthought.</p><div className="studioFacts"><div><b>Studio</b><span>Controlled lighting & sets</span></div><div><b>Direction</b><span>Guidance from pose to final frame</span></div><div><b>Finish</b><span>Professional retouching & delivery</span></div></div><a className="goldButton" href="#contact">BOOK THE STUDIO</a></div>
        </div>
      </section>

      <section className="statementBand"><div className="studioWrap"><span>PORTRAITS</span><i></i><span>WEDDINGS</span><i></i><span>EDITORIAL</span><i></i><span>KIDS</span><i></i><span>STUDIO</span></div></section>

      <section id="contact" className="studioContact">
        <div className="studioWrap contactGrid">
          <div><p className="miniLabel">BOOK XPOSURE</p><h2>Your next favourite photograph starts here.</h2><p>Tell us what you are creating and we will help shape the session around it.</p></div>
          <div className="contactActions"><a className="goldButton" href="mailto:hello@xposure.studio">START A PROJECT</a><a className="instagramLink" href="https://www.instagram.com/xposure.ng" target="_blank" rel="noreferrer">@xposure.ng ↗</a></div>
        </div>
      </section>

      <footer className="studioFooter">
        <div className="studioWrap footerInner"><a className="brand footerBrand" href="#top">Xposure</a><span>© 2026 Xposure Studio</span><div><a href="#portfolio">Portfolio</a><a href="#studio">Studio</a><a href="#contact">Contact</a></div></div>
      </footer>

      <SupportChat/>
    </main>
  );
}
