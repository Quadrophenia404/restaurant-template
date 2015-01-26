//As of now the main functionality of this script allows for the shuffling of
//website contact by clicking the dom objects in the nav bar
//

$(document).ready(function(){
  //When the mouse goes over a name in the navbar the text will become black and the
  //specific portion of the navbar will become white
  $(".nav").on("mouseover", function() { 
    $(this).css("background", "white");
    $(this).css("color", "black");
  //reverses the coloring
    $(".nav").on("mouseleave", function() { 
      $(this).css("background", "black");
      $(this).css("color", "white");
    });
  });
  //Allows for clicking of the navbar to display website content relating to the
  //navbar text
  $(".nav").on("click", function() {
  	var getID = $(this).attr('id');
  	$(".bod").css("display", "none");
  	$(".bod#"+getID).css("display", "inline-block"); 	
  }); 
});
