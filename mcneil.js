$(document).ready(function() {
  // var upcase = $('body').find('*').filter(function(index) {
  //   return $(this).css('text-transform') == 'uppercase';
  // });
  // var $upChildren = upcase.children().filter(function(index) {
  //   return $(this).clone().children().remove().end().text().indexOf("McNeil") > -1;
  // });
  // upcase.each(function(index, el) {
  //   if ($(el).clone().children().remove().end().text().indexOf("McNeil") > -1){
  //     $upChildren = $upChildren.add($(el));
  //   };
  // });
  // $upChildren.each(function(index, element) {
  //   $(element).html($(element).html().replace("McNeil", "M<span class='mcneil'>c</span>Neil"));
  // });

  $('body').mcneil();

});

(function ($) {
  var defaults = {
    spanClass: "mcneil-lowercase",
    targetString: "Mc",
    targetIndex: 2,
    inlineStyles: false
  };

  $.fn.mcneil = function( options ) {

    var settings = $.extend( {}, defaults, options );

    var beforeLowerCase = settings.targetString.slice(0, settings.targetIndex - 1);
    var afterLowerCase = settings.targetString.slice(settings.targetIndex);
    var targetCharacter = settings.targetString[settings.targetIndex - 1];

    var replacement;

    if (settings.inlineStyles) {
      replacement = beforeLowerCase + "<span style='text-transform: lowercase;'>" + targetCharacter + "</span>" + afterLowerCase;
    } else {
      replacement = beforeLowerCase + "<span class='" + settings.spanClass + "'>" + targetCharacter + "</span>" + afterLowerCase;
      var $styleTag = $('<style>').text('.' + settings.spanClass + "{ text-transform: lowercase !important; }");
      $(document).find('head').append($styleTag);
    };


    var upcase = this.find("*").filter(function(index) {
      return $(this).css('text-transform') == 'uppercase';
    });

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
