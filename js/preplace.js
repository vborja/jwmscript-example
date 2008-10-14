jQuery.extend({

  unpre : function(str) {
      return str.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\\n/, "\n");
  },

  preplace : function(el) {
      var code = jQuery.unpre($(el).html());
      alert(code);
      return $(el).replaceWith(code);
  }

});

$(window).load(function() {
    jQuery.each($("pre.replace"), function() {
        jQuery.preplace(this);
    });
});
