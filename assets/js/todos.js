//check off specific ToDos by clicking
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
});

//Click on X to delete ToDo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //stop event bubbling
    event.stopPropagation();
});

//Add listener to text input
$("input[type = 'text']").on('keypress', function(event){
    if (event.which === 13){
        //grabbing new ToDo text from input, then clear it
        var toDoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");        
    }
});

$(".fa-plus").click(function(){    
    $("input[type='text']").fadeToggle();
});

