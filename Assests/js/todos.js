//check off todo when clicked
$("ul").on("click","li",function(){
	//alert("clicked");
	if($(this).css("color") === "rgb(128, 128, 128)")
	{
	$(this).css("color","black");
	 $(this).css("text-decoration","none");
	}
	else{
	$(this).css("color","gray");
	 $(this).css("text-decoration","line-through");
	 }
});

$("ul").on("click","span",function(event){
			$(this).parent().fadeOut(1000,function(){
				$(this).remove();
			});
		event.stopPropagation();
});

$("input").keypress(function(event){
	if(event.which === 13)
	{
		var todo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "  +  todo  + "</li>")
	}
});
$(".fa-plus").click(function(){
	$("input").fadeToggle()
});

