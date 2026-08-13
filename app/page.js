import SupportChat from '../components/SupportChat';

const serviceCards = [
  ['PORTRAITS','Portraits / Editorial','https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=90'],
  ['STUDIO','Studio / Production','https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=90'],
  ['DRONE','Aerial / Motion','https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=90'],
  ['EVENTS','Live / Celebration','https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=90'],
  ['COMMERCIAL','Campaigns / Brands','https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=90'],
];

const journal = [
  ['5 Lighting Tips Every Photographer Should Know','Tips','https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=88'],
  ['Behind The Scenes: Fashion Editorial Photoshoot','Behind The Scenes','https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=88'],
  ['The Best Camera Settings For Cinematic Video','Gear','https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=900&q=88'],
  ['Building A Strong Brand Through Visual Storytelling','Business','https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=88'],
];

const disciplines = [
  ['01','Photography','Portraits, fashion, lifestyle, products and brand campaigns captured with precision.'],
  ['02','Film Production','Commercials, documentaries, music videos and cinematic storytelling that connects.'],
  ['03','Creative Direction','Concept development, styling, visual strategy and art direction from idea to final frame.'],
  ['04','Post Production','Professional editing, retouching, colour grading and finishing that elevates every detail.'],
];

export default function Home(){
  return <main>
    <section id="top" className="heroShell">
      <header className="nav wrap">
        <a className="brand" href="#top" aria-label="Xposure home">Xposure</a>
        <nav aria-label="Primary navigation">
          <a className="active" href="#top">HOME</a><a href="#about">ABOUT</a><a href="#services">SERVICES</a><a href="#work">PORTFOLIO</a><a href="#journal">JOURNAL</a><a href="#contact">CONTACT</a>
        </nav>
        <div className="navRight"><a className="ghostBtn" href="#contact">BOOK A SESSION <span>→</span></a><button className="menuBtn" aria-label="Open menu"><i></i><i></i><i></i></button></div>
      </header>

      <div className="socialRail" aria-label="Social media links"><span>◎</span><span>▶</span><span>𝕏</span><span>♪</span></div>
      <div className="heroBackdrop"></div>
      <div className="wrap heroGrid">
        <div className="heroCopy">
          <p className="eyebrow"><b></b> CAPTURE <span>/</span> CREATE <span>/</span> INSPIRE</p>
          <h1>YOUR STORY<br/>DESERVES<br/><em>XPOSURE</em><sup>™</sup></h1>
          <p className="heroText">We turn moments into timeless visuals. From portraits to productions, events to campaigns, Xposure delivers cinematic photography and creative content that speaks.</p>
          <div className="heroActions"><a href="#contact" className="primaryBtn">BOOK A SESSION <span>→</span></a><a href="#showreel" className="playBtn"><span className="playCircle">▶</span><b>WATCH SHOWREEL</b></a></div>
          <div className="heroStats"><div><strong>500<em>+</em></strong><span>PROJECTS</span></div><div><strong>300<em>+</em></strong><span>CLIENTS</span></div><div><strong>5<em>+</em></strong><span>YEARS</span></div><div><strong>12</strong><span>AWARDS</span></div></div>
        </div>

        <div className="heroVisual" aria-hidden="true">
          <div className="cameraGlow"></div>
          <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1800&q=95" alt="Professional cinema camera"/>
          <div className="videoCard" id="showreel"><div className="videoCardShade"></div><span className="videoPlay">▶</span><div><b>MOMENTS IN MOTION</b><small>Xposure Studio</small></div></div>
          <div className="pager"><i></i><i></i><i></i></div>
        </div>
      </div>
      <div className="scrollCue"><span></span><small>SCROLL TO EXPLORE</small><b></b></div>
    </section>

    <section id="services" className="serviceStrip">
      {serviceCards.map(([title,tag,img])=><a href="#work" className="serviceTile" key={title} style={{backgroundImage:`linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.72)),url(${img})`}}><div><small>{tag}</small><strong>{title} <span>→</span></strong></div></a>)}
    </section>

    <section id="about" className="about wrap sectionSplit">
      <div className="aboutPhoto"><img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1400&q=90" alt="Xposure photographer at work"/><span className="roundPlay">▶</span></div>
      <div className="aboutText"><p className="kicker">ABOUT XPOSURE</p><h2>We Don’t Just Capture Moments. We Shape How They’re Remembered.</h2><p>We blend creativity, technical mastery and storytelling to create visuals that connect, inspire and leave a lasting impression. From portraits to full-scale productions, we bring your vision to life.</p><div className="stats"><div><b>8+</b><span>Years Creating</span></div><div><b>500+</b><span>Projects Delivered</span></div><div><b>300+</b><span>Clients</span></div><div><b>20K+</b><span>Images Produced</span></div></div></div>
    </section>

    <section id="work" className="work wrap">
      <div className="workIntro"><p className="kicker">FEATURED WORK</p><h2>Selected<br/>Xposures</h2><p>A collection of our favourite projects across photography and film.</p><a href="#contact">VIEW ALL PROJECTS →</a></div>
      <div className="mosaic"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=88" alt="Fashion portrait"/><img src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=88" alt="Commercial automotive work"/><img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=88" alt="Portrait campaign"/><img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=88" alt="Wedding photography"/><img src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=88" alt="Product photography"/><img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=88" alt="Film production"/></div>
    </section>

    <section id="studio" className="disciplines wrap">{disciplines.map(([n,t,d])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</section>

    <section className="testimonial wrap sectionSplit"><div><p className="kicker">CLIENT STORIES</p><h2>Seen Through<br/>Their Eyes.</h2><blockquote>“Xposure completely understood the visual direction we wanted and delivered something beyond what we imagined.”</blockquote><div className="stars">★★★★★</div><b>Sarah Johnson</b><small>Brand Director, Lumière</small></div><div className="testPhoto"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=88" alt="Client portrait"/></div></section>

    <section id="journal" className="journal wrap"><div className="journalHead"><div><p className="kicker">THE XPOSURE JOURNAL</p><h2>Insights. Stories. Inspiration.</h2></div><a href="#">VIEW ALL ARTICLES →</a></div><div className="journalGrid">{journal.map(([title,cat,img],i)=><article key={title}><img src={img} alt=""/><div><small>APR {15-i*3}, 2026 &nbsp;•&nbsp; {cat}</small><h3>{title}</h3></div></article>)}</div></section>

    <section id="contact" className="cta"><div className="wrap ctaInner"><div><h2>Ready To Create Something Unforgettable?</h2><p>Let’s bring your vision to life.</p></div><a className="primaryBtn" href="mailto:hello@xposure.studio">BOOK YOUR SESSION <span>→</span></a></div></section>

    <footer className="footer"><div className="wrap footerTop"><div className="footerBrand"><a className="brand big" href="#top" aria-label="Xposure home">Xposure</a><p>Creating visuals.<br/>Telling stories.</p></div><div className="footerLinks"><a href="#top">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#work">Portfolio</a><a href="#journal">Journal</a><a href="#contact">Contact</a></div><div className="footerSocials"><span>◎</span><span>▶</span><span>𝕏</span><span>♪</span></div><a className="ghostBtn" href="#contact">BOOK NOW <span>→</span></a></div><div className="wrap footerBottom"><span>© 2026 Xposure Studio. All rights reserved.</span><div><span>Lagos, Nigeria</span><span>hello@xposure.studio</span></div></div></footer>

    <SupportChat/>
  </main>
}
