<script>
const logo = document.createElement('img');
logo.src = 'figs/compBayesLogo_mvcolors.png';
logo.style.cssText = 'position:fixed; bottom: 50px; left:50%; transform:translateX(-50%); width:600px; z-index:9998; pointer-events:none; display:none;';
document.body.appendChild(logo);

Reveal.on('ready', event => {
  if (event.indexh === 0) logo.style.display = 'block';
});

Reveal.on('slidechanged', event => {
  logo.style.display = event.indexh === 0 ? 'block' : 'none';
});

const footer = document.querySelector('.footer');
Reveal.on('ready', event => {
  footer.style.display = event.indexh === 0 ? 'block' : 'none';
});
Reveal.on('slidechanged', event => {
  footer.style.display = event.indexh === 0 ? 'block' : 'none';
});

</script>