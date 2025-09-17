(function(){
  var y = new Date().getFullYear();
  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  var btn = document.getElementById('open-channel');
  if(btn){
    btn.addEventListener('click', function(e){
      var href = btn.getAttribute('href');
      var channelIdOrName = href.replace(/^https?:\/\//i, '');
      var intentUrl = 'intent://' + channelIdOrName + '#Intent;package=com.google.android.youtube;scheme=https;end';
      setTimeout(function(){ window.location.href = intentUrl; }, 150);
    });
  }
})();
