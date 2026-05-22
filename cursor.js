
<script>
  function trailCursor() {
    const trail = [];
    const N = 12;
    for (let i = 0; i < N; i++) {
      const dot = document.createElement('div');
      const size = 12 * (1 - i / N);
      dot.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: #780000;
        border-radius: 50%;
        pointer-events: none;
        z-index: 99999;
        top: 0; left: 0;
        opacity: ${1 - i**2 / N};
        transform: translate(-50%, -50%);
        transition: left ${30 + i * 20}ms ease, top ${30 + i * 20}ms ease;
      `;
      document.body.appendChild(dot);
      trail.push(dot);
    }
    document.addEventListener('mousemove', function(e) {
      trail.forEach(dot => {
        dot.style.left = e.clientX + 'px';
        dot.style.top  = e.clientY + 'px';
      });
    });
  }

  function dotCursor() {
    const dot = document.createElement('div');
    dot.style.cssText = 'position:fixed; width:16px; height:16px; background:#780000; border-radius:50%; pointer-events:none; z-index:99999; top:0; left:0; transform:translate(-50%,-50%);';
    document.body.appendChild(dot);
    document.addEventListener('mousemove', function(e) {
      dot.style.left = e.clientX + 'px';
      dot.style.top  = e.clientY + 'px';
    });
  }
  
  function spotlightCursor() {
    const dot = document.createElement('div');
    dot.style.cssText = `
      position: fixed;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      pointer-events: none;
      z-index: 99999;
      top: 0; left: 0;
      transform: translate(-50%, -50%);
      background: transparent;
border: 3px solid rgba(120,0,0,0.9);
box-shadow: 0 0 12px 4px rgba(120,0,0,0.4), inset 0 0 8px 2px rgba(120,0,0,0.2);
    `;
    document.body.appendChild(dot);
    document.addEventListener('mousemove', function(e) {
      dot.style.left = e.clientX + 'px';
      dot.style.top  = e.clientY + 'px';
    });
  }

  // Comment out the one you don't want:
  //spotlightCursor();
   trailCursor();
  // dotCursor();
  

</script>