$(window).load(function() {
  jQuery.each($("pre.replace"), function() {
    var content = this.innerHTML.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    $(this).replaceWith(content);
  });
});