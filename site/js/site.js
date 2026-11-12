// Mobile menu
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
})();

// Click-to-load YouTube / Drive videos (keeps pages fast, no tracking until played)
document.querySelectorAll('.video[data-yt]').forEach(function (box) {
  var id = box.getAttribute('data-yt');
  var title = box.getAttribute('data-title') || 'Video';
  if (!id) return; // no video set yet: keep the placeholder
  var img = document.createElement('img');
  img.src = 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg';
  img.alt = '';
  img.loading = 'lazy';
  var b = document.createElement('button');
  b.className = 'play';
  b.setAttribute('aria-label', 'Play video: ' + title);
  b.innerHTML = '<span></span>';
  b.addEventListener('click', function () {
    box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id +
      '?autoplay=1&rel=0" title="' + title.replace(/"/g, '') +
      '" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
  });
  box.appendChild(img);
  box.appendChild(b);
});
document.querySelectorAll('.video[data-drive]').forEach(function (box) {
  var id = box.getAttribute('data-drive');
  box.innerHTML = '<iframe src="https://drive.google.com/file/d/' + id +
    '/preview" title="Self-projection video" allow="autoplay" allowfullscreen></iframe>';
});

// Local-only helper: count placeholders still to fill (hidden on the live site)
(function () {
  var local = location.protocol === 'file:' || /^(localhost|127\.)/.test(location.hostname) || /[?&]todo/.test(location.search);
  var n = document.querySelectorAll('.todo').length;
  if (!local || !n) return;
  var d = document.createElement('div');
  d.id = 'todo-badge';
  d.textContent = n + ' placeholder' + (n > 1 ? 's' : '') + ' left on this page';
  document.body.appendChild(d);
})();
