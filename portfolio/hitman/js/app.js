function addScript(src){
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.head.insertBefore(script, document.head.children[1]);
}

function addLink(href, rel){
  var link = document.createElement('link');
  link.href = href;
  link.rel = rel;
  document.head.appendChild(link);
}

addScript('https://code.jquery.com/jquery-3.1.1.min.js');
addScript('/hitman/js/scripts.min.js');
