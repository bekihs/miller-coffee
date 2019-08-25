var myVideo = document.getElementById("video1"); 

if (typeof myVideo.loop == 'boolean') { // loop supported
  myVideo.loop = true;
} else { // loop property not supported
  myVideo.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
  }, false);
}
//...
myVideo.play();

$(document).on("scroll" , ()=>{
  $(".site-navbar").slideDown()
})

function openDiv(that){
    if ($(that).hasClass("selected")){
        $(".beans img").removeClass("selected");
        $(".beans-info").hide();
        $(".beans img").removeClass("unselected");
    }
    else{
     $(".beans img").removeClass("selected");
     $(".beans-info").hide();
        $(".beans img").addClass("unselected");
        let elementID = $(that).data("id");
    $element = $("."+elementID);
    $element.show();
        $(that).removeClass("unselected");
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