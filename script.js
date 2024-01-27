$(function() {
  $('.prompt').html('[' + codehelper_ip["IP"] + '@HTML5] # ');
  var term = new Terminal('#input-line .cmdline', '#container output');
  term.initFS();
});
