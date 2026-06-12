/* App — composes the full portfolio. Scroll happens inside .da-scroll. */
function App() {
  const { Atmosphere, Nav, Hero, About, Skills, Projects, Contact, Footer } = window;

  const onNav = (id) => {
    const el = document.getElementById(id);
    const scroller = document.querySelector('.da-scroll');
    if (!el || !scroller) return;
    const top = el.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop - 90;
    scroller.scrollTo({ top: id === 'inicio' ? 0 : top, behavior: 'smooth' });
  };

  return (
    <React.Fragment>
      <Atmosphere />
      <Nav onNav={onNav} />
      <Hero onNav={onNav} />
      <div style={{ background: 'rgba(255,255,255,0.01)' }}><About onNav={onNav} /></div>
      <Skills />
      <div style={{ background: 'rgba(255,255,255,0.01)' }}><Projects /></div>
      <Contact />
      <Footer onNav={onNav} />
    </React.Fragment>
  );
}

window.App = App;
