jQuery.extend({

  untag : function(tag, str) {
      var re = new RegExp("^<"+tag+">|</"+tag+">$", "g");
      return str.replace(re, "");
  },

  unpre : function(str) {
      return str.replace(/&lt;/g, "<").
          replace(/&gt;/g, ">").
          replace(/&amp;/g, "&").
          replace(/\\n/g, "\n");
  },

  preplace : function(el) {
      var code = jQuery.unpre($(el).html());
      return $(el).replaceWith(code);
  }

});

$(window).load(function() {
    jQuery.each($("pre.replace"), function() {
        jQuery.preplace(this);
    });
});
