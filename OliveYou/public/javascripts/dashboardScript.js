setTimeout(function() {

$('.title').fadeOut("slow", function(){
   var div = $("<div class='title'>My Dashboard</div>").hide();
   $(this).replaceWith(div);
   $('.title').fadeIn("slow");
});

  // $(".title").html('My Dashboard');
  }, 1500);
