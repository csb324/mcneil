(function ($) {
  var defaults = {
    spanClass: "mcneil-force-lower",
    targetString: "Mc",
    targetIndex: 2,
    inlineStyles: true
  };

  $.fn.mcneil = function( options ) {

    var settings = $.extend( {}, defaults, options );
    var replacement;

    if (settings.inlineStyles) {
      replacement = settings.targetString.slice(0, settings.targetIndex - 1) +
        "<span style='text-transform: lowercase;'>" +
        settings.targetString[settings.targetIndex - 1] +
        "</span>" +
        settings.targetString.slice(settings.targetIndex);

    } else {
      replacement = settings.targetString.slice(0, settings.targetIndex - 1) +
        "<span class='" + settings.spanClass + "'>" +
        settings.targetString[settings.targetIndex - 1] +
        "</span>" +
        settings.targetString.slice(settings.targetIndex);

      if ($('#' + settings.spanClass + '-style').length == 0) {
        var $styleTag = $('<style id="' + settings.spanClass + '-style">').text('.' + settings.spanClass + "{ text-transform: lowercase !important; }");
        $(document).find('head').append($styleTag);
      };
    };

    var upcase = this.find("*").filter(function(index) {
      return $(this).css('text-transform') == 'uppercase';
    });

    if (this.css('text-transform') == 'uppercase') {
      upcase = upcase.add(this);
    };

    var upChildren = upcase.children().filter(function(index) {
      return $(this).clone().children().remove().end().text().indexOf(settings.targetString) > -1;
    });

    upcase.each(function(index, el) {
      if ($(el).clone().children().remove().end().text().indexOf("McNeil") > -1) {
        upChildren = upChildren.add($(el));
      };
    });

    upChildren.each(function(index, el) {
      $(el).html(
        $(el).html().replace(settings.targetString, replacement)
      );
    });
  }
}(jQuery));
