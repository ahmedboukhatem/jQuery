var counter = 0;
var image = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];


$(".next").click(function(){
	      if (counter==3){counter=0;}
 else (counter=counter+1)
    $("img").attr('src',image[counter]);
});

$(".prev").click(function(){

	      if (counter==0){counter=3;}
 else (counter=counter-1)
 $("img").attr('src',image[counter]);
});



