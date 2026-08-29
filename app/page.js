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
            <a href="#weddings">Weddings</a>
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

      <section id="weddings" className="weddingStory">
        <div className="studioWrap weddingCard">
          <figure className="weddingImage">
            <img src="/api/media/0219" alt="Bride and groom photographed by Xposure Studio"/>
            <figcaption><span>WEDDING / XPOSURE</span><b>A beginning, held still.</b></figcaption>
          </figure>
          <div className="weddingDetail">
            <p className="miniLabel">WEDDING STORY</p>
            <h2>Two people.<br/>One frame.<br/>Everything ahead.</h2>
            <p className="weddingLead">A wedding portrait is more than proof that the day happened. It is the photograph that returns years later and still carries the quiet confidence, anticipation and weight of the moment.</p>
            <p>For this frame, the couple are allowed to stand in their own presence. Clean whites, strong symmetry and the dark architectural centre create a portrait that feels formal without becoming distant. The result is less about posing for a camera and more about preserving the beginning of a shared story.</p>
            <div className="weddingMeta"><div><span>STORY</span><b>Wedding Portrait</b></div><div><span>STYLE</span><b>Editorial / Timeless</b></div><div><span>BY</span><b>Xposure Studio</b></div></div>
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
        <div className="studioWrap footerInner"><a className="brand footerBrand" href="#top">Xposure</a><span>© 2026 Xposure Studio</span><div><a href="#portfolio">Portfolio</a><a href="#weddings">Weddings</a><a href="#studio">Studio</a><a href="#contact">Contact</a></div></div>
      </footer>

      <style>{`
        .weddingStory{padding:120px 0;background:#090909;border-top:1px solid #181818;border-bottom:1px solid #181818}
        .weddingCard{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(360px,.95fr);gap:86px;align-items:center}
        .weddingImage{margin:0;min-height:740px;position:relative;background:#0d0d0d;overflow:hidden;border:1px solid rgba(255,255,255,.06)}
        .weddingImage img{width:100%;height:100%;position:absolute;inset:0;object-fit:contain;object-position:center;background:#0d0d0d}
        .weddingImage:after{content:'';position:absolute;inset:auto 0 0;height:26%;background:linear-gradient(transparent,rgba(0,0,0,.72));pointer-events:none}
        .weddingImage figcaption{position:absolute;z-index:2;left:24px;right:24px;bottom:22px;display:flex;align-items:flex-end;justify-content:space-between;gap:20px}
        .weddingImage figcaption span{font-size:8px;letter-spacing:.18em;color:#c9c5bd}
        .weddingImage figcaption b{font-size:12px;font-weight:600;color:#fff}
        .weddingDetail h2{font-size:58px;line-height:.94;letter-spacing:-.055em;margin:0 0 24px}
        .weddingDetail>p:not(.miniLabel){font-size:12px;line-height:1.8;color:#8f8c86;max-width:520px}
        .weddingDetail .weddingLead{font-size:14px!important;color:#c4c0b8!important;margin-bottom:18px}
        .weddingMeta{margin:34px 0;border-top:1px solid #252525}
        .weddingMeta>div{display:grid;grid-template-columns:90px 1fr;gap:20px;padding:14px 0;border-bottom:1px solid #222}
        .weddingMeta span{font-size:8px;letter-spacing:.16em;color:#777}
        .weddingMeta b{font-size:10px;font-weight:600;color:#d4d0c8}
        @media(max-width:900px){.weddingCard{grid-template-columns:1fr;gap:48px}.weddingImage{min-height:680px}.weddingDetail h2{font-size:48px}}
        @media(max-width:600px){.weddingStory{padding:76px 0}.weddingImage{min-height:0;aspect-ratio:1284/1643}.weddingImage img{object-fit:contain}.weddingDetail h2{font-size:39px}.weddingImage figcaption{left:14px;right:14px;bottom:14px}.weddingImage figcaption b{font-size:10px}.weddingMeta>div{grid-template-columns:74px 1fr}}
      `}</style>

      <SupportChat/>
    </main>
  );
}
