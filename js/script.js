const imagenes = [
    "url('img/avinash-kumar-ydtyNU7-c1A-unsplash.jpg')",
    "url('img/camilo-contreras-_cZY3CoFbOY-unsplash.jpg')",
    "url('img/casey-horner-4rDCa5hBlCs-unsplash.jpg')",
    "url('img/cheng-lin-BJmFkjQFq44-unsplash.jpg')",
    "url('img/christoph-keil-0ihS2bYo4gQ-unsplash.jpg')",
    "url('img/claudio-schwarz-d-vYj8A-JQ8-unsplash.jpg')",
    "url('img/clement-m-igX2deuD9lc-unsplash.jpg')",
    "url('img/daniel-gomez-4qLLVXqhe5A-unsplash.jpg')",
    "url('img/daoudi-aissa-Pe1Ol9oLc4o-unsplash.jpg')",
    "url('img/evie-s-kBzQNk9AgOg-unsplash.jpg')",
    "url('img/filip-zrnzevic-_EMkxLdko9k-unsplash.jpg')",
    "url('img/frame-harirak-5Q5jtb1SEVo-unsplash.jpg')",
    "url('img/greg-rakozy-oMpAz-DN-9I-unsplash.jpg')",
    "url('img/ingmar-h-Urr7MbStFL8-unsplash.jpg')",
    "url('img/james-liu-X_eZUfU3EFQ-unsplash.jpg')",
    "url('img/johannes-andersson-UCd78vfC8vU-unsplash.jpg')",
    "url('img/john-noonan-E-9CFTftQh4-unsplash.jpg')",
    "url('img/joseph-corl-ArYTNkubaBg-unsplash.jpg')",
    "url('img/li-zhang-IiLVwx3e8bk-unsplash.jpg')",
    "url('img/marek-piwnicki-3f22ob_rtnA-unsplash.jpg')",
    "url('img/max-22x7fxFpl_8-unsplash.jpg')",
    "url('img/pascal-debrunner-b_8cJyp2BwI-unsplash.jpg')",
    "url('img/pawel-czerwinski-oykbZuvajO0-unsplash.jpg')",
    "url('img/ryan-hutton-Jztmx9yqjBw-unsplash.jpg')",
    "url('img/sarlote-laura-jevdokimova-Y5p_0LW1xQg-unsplash.jpg')",
    "url('img/scott-lord-jjiSx1-xTrA-unsplash.jpg')",
    "url('img/stas-ostrikov-jpiCys_S38k-unsplash.jpg')",
    "url('img/tengyart-pYlSLXkduQg-unsplash.jpg')",
    "url('img/v2osk-1Z2niiBPg5A-unsplash.jpg')",
    "url('img/wietse-jongsma-K_GLVR6O1ME-unsplash.jpg')",
    "url('img/zetong-li-aCusqffy5sY-unsplash.jpg')",
 
    ];
  

  function cambiarFondo() {
    const index = Math.floor(Math.random() * imagenes.length);
    document.body.style.backgroundImage = imagenes[index];
  }
  
 
  cambiarFondo(); 
  setInterval(cambiarFondo, 15000); 
  