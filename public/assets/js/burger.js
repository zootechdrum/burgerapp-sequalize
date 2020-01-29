$(document).ready(function () {

  hbsObject = {
    burger: [{id:1,burger_name:"Mcdonald",devoured:false}]
  };

  var url = window.location.search;
  var userId;

  if (url.indexOf("?user_id=") !== -1) {
    userId = url.split("=")[1];
    
  }
  // If there's no authorId we just get all posts as usual
  else {
    console.log("h")
  }

//Below functions hide elements after initial delete
    function cuteHide(el) {
      el.animate({opacity: '0'}, 150, function(){
        el.animate({height: '0px'}, 150, function(){
          el.remove();
        });
      });
    }


//sends request to update state of burger 
    $(".statusOfBurger").on("click", function(event) {
      var id = $(this).data("id");
      console.log(id)
      var burgerState = $(this).data("eaten");
  
      var newBurgerState = {
        id: id,
        burgerState: burgerState
      };
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function(data) {
          console.log("changed sleep to", data);
          // Reload the page to get the updated list
          // location.reload();
        }
      );
    });

    $(".burger-form").on("submit", function(event) {

      event.preventDefault()
      // Make sure to preventDefault on a submit event.
      userId = url.split("=")[1];
      var newBurger = {
        burger_name: $("#burger").val().trim(),
        UserId:userId
      };
      
  
      //Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function(data) {
          console.log("Called")
          location.reload("/burgers")          
        })

        });
    

  

// //Event Handler when Delete button is pressed
$(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");
    console.log(id)
  
    $('.burgersStat').on('click',".delete-burger", function(){
      var el = $(this).closest('.indi-burger');
      cuteHide(el);
    });
    //Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        //Wait to  reload the page to get the updated list
        setTimeout(function(){location.reload(); }, 2000);
      }
    );
  });
});


