var myVideo = document.getElementById("video1"); 

myVideo.play();  

$(document).on("scroll" , ()=>{
  $(".site-navbar").slideDown()
})

function openDiv(that){
    if ($(that).hasClass("selected")){
        $(".beans img").removeClass("selected");
        $(".beans-info").hide();
    }
    else{
     $(".beans img").removeClass("selected");
     $(".beans-info").hide();
    let elementID = $(that).data("id");
    $element = $("."+elementID);
    $element.show();
     $(that).addClass("selected");
    }
}

$("#btnEmail").on("click",()=>{
    $.ajax({
        type: 'POST',
        url: 'sendMail',
        data: {
            'mail':  $("#txtEmail").val(),  
            name:$("#txtName").val(),
            'text':$("#txtMessage").val(),
            phone:$("#txtPhone").val()
        }
       }).done(function(response) {
         console.log(response); // if you're into that sorta thing
       });
})