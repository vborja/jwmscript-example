jQuery.extend({

  unpre : function(str) {
      str.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\\n/, "\n");
  },

  preplace : function(el) {
    $(el).replaceWith(unpre($(el).html()));
  }
});

$(window).load(function() {
    jQuery.each($("pre.replace"), function() {
        jQuery.preplace(this);
    });
});
