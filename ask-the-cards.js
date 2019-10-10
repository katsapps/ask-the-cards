var deck_dict = {
  "0" : 'columba',
  "1" : 'pegasus',
  "2" : 'sirius',
  "3" : 'venus',
  "4" : 'jupiter',
  "5" : 'centaurus',
  "6" : 'corona-borealis',
  "7" : 'auriga',
  "8" : 'hercules',
  "9" : 'halleys-comet',
  "10" : 'draco',
  "11" : 'libra',
  "12" : 'capricornicus',
  "13" : 'phoenix',
  "14" : 'horologium',
  "15" : 'cetus',
  "16" : 'pavo',
  "17" : 'polaris',
  "18" : 'moon',
  "19" : 'sun',
  "20" : 'cassiopeia',
  "21" : 'earth',
  "22" : 'ace-of-cups',
  "23" : 'two-of-cups',
  "24" : 'three-of-cups',
  "25" : 'four-of-cups',
  "26" : 'five-of-cups',
  "27" : 'six-of-cups',
  "28" : 'seven-of-cups',
  "29" : 'eight-of-cups',
  "30" : 'nine-of-cups',
  "31" : 'ten-of-cups',
  "32" : 'page-of-cups',
  "33" : 'knight-of-cups',
  "34" : 'queen-of-cups',
  "35" : 'king-of-cups',
  "36" : 'ace-of-swords',
  "37" : 'two-of-swords',
  "38" : 'three-of-swords',
  "39" : 'four-of-swords',
  "40" : 'five-of-swords',
  "41" : 'six-of-swords',
  "42" : 'seven-of-swords',
  "43" : 'eight-of-swords',
  "44" : 'nine-of-swords ',
  "45" : 'ten-of-swords',
  "46" : 'page-of-swords',
  "47" : 'knight-of-swords',
  "48" : 'queen-of-swords',
  "49" : 'king-of-swords',
  "50" : 'ace-of-pentacles',
  "51" : 'two-of-pentacles',
  "52" : 'three-of-pentacles',
  "53" : 'four-of-pentacles',
  "54" : 'five-of-pentacles',
  "55" : 'six-of-pentacles',
  "56" : 'seven-of-pentacles',
  "57" : 'eight-of-pentacles',
  "58" : 'nine-of-pentacles',
  "59" : 'ten-of-pentacles',
  "60" : 'page-of-pentacles',
  "61" : 'knight-of-pentacles',
  "62" : 'queen-of-pentacles',
  "63" : 'king-of-pentacles',
  "64" : 'ace-of-wands',
  "65" : 'two-of-wands',
  "66" : 'three-of-wands',
  "67" : 'four-of-wands',
  "68" : 'five-of-wands',
  "69" : 'six-of-wands',
  "70" : 'seven-of-wands',
  "71" : 'eight-of-wands',
  "72" : 'nine-of-wands',
  "73" : 'ten-of-wands',
  "74" : 'page-of-wands',
  "75" : 'knight-of-wands',
  "76" : 'queen-of-wands',
  "77" : 'king-of-wands'
};

var dict_size = 77;
var chosen_num;
var shuffled = true;

/*$( window ).resize(function() {
  set_img_size();
});*/
window.addEventListener('resize', set_img_size);

//display the desktop or mobile image depending on the screen size
function set_img_size() {

    var window_width = $( window ).width();
    if (window_width < 572) {

      $( ".imgs" ).each(function( index, element ) {
        var img_src = $(element).attr('src').split(/\.jpg/g)[0];
        var src_name = img_src.split(/\//g)[10]; //_first-image.jpg
        var index_of_m = src_name.lastIndexOf("m");
        var src_length = img_src.length;

        var src_name_length = src_name.length - 4 - 1; //_first-image = 12 - 1 = 11

        if (index_of_m == -1) { //if it's desktop
          var new_img_src = img_src + 'm' + '.jpg';
          $(element).attr('src', new_img_src);
        } else {
          return
        }
      });
    }
    else {
      $( ".imgs" ).each(function( index, element ) {
        var img_src = $(element).attr('src').split(/\.jpg/g)[0];
        var src_name = img_src.split(/\//g)[10]; //_first-image.jpg
        var index_of_m = src_name.lastIndexOf("m");
        var src_length = img_src.length;

        var src_name_length = src_name.length - 4 - 1; //_first-image = 12 - 1 = 11

        if (index_of_m > -1) {
          var img_src = $(element).attr('src').split(/\m.jpg/g)[0];
          var new_img_src = img_src + '.jpg';
          $(element).attr('src', new_img_src);
        }
      });
    }
}

$( document ).ready(function() {

  set_img_size();

  $('#imgs-div').click(function() {
    if (shuffled) {
      $('#deck-div').empty();
      chosen_num = Math.floor(Math.random()*dict_size);
      var card_src = chosen_num.toString().concat('.jpg');
      var card_name = deck_dict[chosen_num.toString()];
      var img = new Image();
      //img.src = "/s/files/1/0107/8407/9938/files/" + card_src;

      var windowsize = $(window).width();
      if (windowsize < 572) {
        var shopify_addition = "?178";
      } else {
        var shopify_addition = "?179";
      }

      var cdn_url = "https://cdn.shopify.com/s/files/1/0107/8407/9938/files/";
      var final_src = cdn_url + card_src; // + shopify_addition;
      img.src = final_src;

      img.alt =  card_name;
      $(img).addClass('imgs');
      $('#deck-div').append(img);

      set_img_size();

      $('#desc-div').html($('#' + card_name).html());

      $('#imgs-div').removeClass('hand-cursor');

      $('#transition-img').addClass('opacity-to-1');
      $('.picked-card').addClass('opacity-to-1');

      shuffled = false;

      setTimeout(function () {
        $('#desc-div').addClass('to-display');
        $('#shuffle-deck').addClass('to-display');
      }, 2100);
    }
  });

  $('#shuffle-deck').click(function() {

    $('#imgs-div').addClass('hand-cursor');

    $('html, body').animate({
      scrollTop: ($('#imgs-div').offset().top)
    },500);

    shuffled = true;
    $('#transition-img').removeClass('opacity-to-1');
    $('.picked-card').removeClass('opacity-to-1');

    setTimeout(function () {
      $('#desc-div').removeClass('to-display');
      $('#shuffle-deck').removeClass('to-display');
    }, 1000);
  });
});
