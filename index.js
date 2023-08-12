var mailStorage;

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    console.log("True");
    // $(".container p b").html(mail);
    localStorage.setItem(mailStorage, mail);
    window.location.href = "./success.html";
    // $(".container").hide().css("visibility", "hidden");
  }
  else{
    $(".news-letter span h3").css("color","hsl(4, 100%, 67%)");
    console.log("False");
  }
}

function changeEmail(){
  var value = localStorage.getItem(mailStorage);
  $(".container p b").text(value);
}