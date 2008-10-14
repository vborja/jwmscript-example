$(window).load(function() {
  jQuery.each($("pre.replace"), function() {
    var content = $(this).html().replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\\n/, "\n");
    $(this).replaceWith(content);
  });
});