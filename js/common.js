// head.ready(function() {
// 	console.log($('body').html());
$(document).ready(function() {
  function tab() {
       $(".js-tab").each(function(){
         var tab_link = $(this).find("a");
         var tab_item = $(this).find("li");
         var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
         tab_cont.hide();
         tab_item.first().addClass("is-active");
         $(this).parents(".js-tab-group").find(".js-tab1").show();
         tab_link.on("click", function() {
             var index = $(this).attr("href");
             tab_item.removeClass("is-active");
             $(this).parent().addClass("is-active");
             tab_cont.hide();
             $(this).parents(".js-tab-group").find("."+index).show();
             return false;
          });
       });
  } 
  tab();

  function choose() {
    var number = $(".js-choose");
    number.each(function(){
      var max_number = +($(this).attr("data-max-number"));
      var input = $(this).find("input");
      var plus = $(this).find(".js-plus");
      var minus = $(this).find(".js-minus");
      plus.bind("click", function(){
          var val = +(input.val());
          if (val >= max_number) {
              return false
          }
          else {
              val += 1;
              input.val(val);
          }
      });
      minus.bind("click", function(){
          var val = +(input.val());
          if (val > 1) {
              val -= 1;
              input.val(val);
          }
          else {
              return false;
          }
      });
    });
  }
  choose();

});