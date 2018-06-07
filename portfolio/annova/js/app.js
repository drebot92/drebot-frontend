function addScript(src){
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.head.appendChild(script);
}

function addLink(href, rel){
  var link = document.createElement('link');
  link.href = href;
  link.rel = rel;
  document.head.appendChild(link);
}

addScript('https://code.jquery.com/jquery-3.1.1.min.js');
addScript('/annova/js/scripts.min.js');
