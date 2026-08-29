import SupportChat from '../components/SupportChat';

const gallery = [
  { id: '0223', title: 'Quiet Confidence', category: 'Portraits', crop: 'galleryCropA' },
  { id: '0217', title: 'Signature Editorial', category: 'Editorial', crop: 'galleryCropB' },
  { id: '0223', title: 'Studio Detail', category: 'Studio Portraits', crop: 'galleryCropC' },
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
            <p>The work should do the convincing. Real Xposure photography stays in full colour so skin, styling, light and atmosphere remain exactly where the photographer intended them.</p>
            <a className="goldButton" href="#gallery">BROWSE THE PORTFOLIO</a>
          </div>

          <div className="shotGrid signatureShotGrid">
            <figure className="shotCard shot1"><img src="/api/media/0223" alt="Xposure portrait in white"/><figcaption><span>Portrait</span><b>Quiet confidence</b></figcaption></figure>
            <figure className="shotCard shot2"><img src="/api/media/0217" alt="Xposure editorial portrait"/><figcaption><span>Editorial</span><b>Signature Xposure</b></figcaption></figure>
            <div className="shotControls"><span>01</span><i></i><span>02</span></div>
          </div>
        </div>
      </section>

      <section className="weddingStory" aria-labelledby="wedding-story-title">
        <div className="studioWrap weddingStoryGrid">
          <figure className="weddingStoryImage">
            <img src="/images/xposure-wedding-story.jpeg" alt="Wedding portrait by Xposure Studio" />
          </figure>
          <div className="weddingStoryCopy">
            <p className="miniLabel">WEDDING / XPOSURE STORY</p>
            <h2 id="wedding-story-title">A beginning,<br/>held still.</h2>
            <p className="weddingLead">Two people. One frame. Everything ahead.</p>
            <p>The symmetry, stillness and contrast in this portrait give the moment its weight. The groom stands composed, the bride commands the frame, and the white architecture keeps everything timeless. It is not just a wedding photograph. It is the first page of a story they will keep returning to.</p>
            <div className="weddingMeta"><div><span>Type</span><b>Wedding Portrait</b></div><div><span>Style</span><b>Editorial & Timeless</b></div><div><span>Studio</span><b>Xposure</b></div></div>
            <a className="goldButton" href="#contact">BOOK A WEDDING SHOOT</a>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallerySection">
        <div className="studioWrap">
          <div className="galleryHeading"><div><p className="miniLabel">THE XPOSURE ARCHIVE</p><h2>Stories in frame.</h2></div><p>People. Milestones. Personality. Every frame treated like it has to sell the studio without saying a word.</p></div>
          <div className="galleryGrid galleryGridThree">
            {gallery.map((item, i)=><figure className={`galleryItem galleryItem${i+1} ${item.crop}`} key={`${item.id}-${i}`}><img src={`/api/media/${item.id}`} alt={`${item.title} by Xposure Studio`}/><figcaption><span>{item.category}</span><b>{item.title}</b></figcaption></figure>)}
          </div>
        </div>
      </section>

      <section id="studio" className="studioFeature studioFeatureText">
        <div className="studioWrap studioFeatureGrid">
          <div className="studioManifesto" aria-hidden="true"><span>X</span><div><small>THE XPOSURE SIGNATURE</small><strong>LIGHT<br/>FORM<br/>FEELING</strong></div></div>
          <div className="studioFeatureCopy"><p className="miniLabel">THE EXPERIENCE</p><h2>Walk in with an idea.<br/>Leave with an image.</h2><p>Xposure is built around controlled light, thoughtful direction and a polished finish. From first pose to final delivery, the experience is designed to make every client look intentional, not accidental.</p><div className="studioFacts"><div><b>Studio</b><span>Controlled lighting & creative sets</span></div><div><b>Direction</b><span>Guidance from pose to final frame</span></div><div><b>Finish</b><span>Professional retouching & delivery</span></div></div><a className="goldButton" href="#contact">BOOK THE STUDIO</a></div>
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
