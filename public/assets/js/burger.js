$(document).ready(function () {

  var url = window.location.search;
  var userId;
  if (url.indexOf("?user_id=") !== -1) {
    userId = url.split("=")[1];
    
    getBurgers(userId);
  }
  // If there's no authorId we just get all posts as usual
  else {
    console.log("h")
  }

    // This function grabs posts from the database and updates the view
  function getBurgers(user) {
    userId = user || "";
    if (userId) {
      userId = "/?user_id=" + userId;
    }
    $.get("/api/burgers" + userId, function(data) {
      console.log(data)
      data = data;
      if (!data || !data.length) {
      }
      else {
        console.log("nothing")
      }
    });
  }


// //Below functions hide elements after initial delete
//     function cuteHide(el) {
//       el.animate({opacity: '0'}, 150, function(){
//         el.animate({height: '0px'}, 150, function(){
//           el.remove();
//         });
//       });
//     }


// //Changes state of Burger 
//     $(".statusOfBurger").on("click", function(event) {
//       var id = $(this).data("id");
//       var burgerState = $(this).data("eaten");
//       console.log(burgerState)
  
//       var newBurgerState = {
//         burgerState: burgerState
//       };
  
//       // Send the PUT request.
//       $.ajax("/api/burger/" + id, {
//         type: "PUT",
//         data: newBurgerState
//       }).then(
//         function() {
//           console.log("changed sleep to", newBurgerState);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });

    $(".burger-form").on("submit", function(event) {

      event.preventDefault()
      // Make sure to preventDefault on a submit event.
      var newBurger = {
        name: $("#burger").val().trim()
      };

      
  
      //Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function(data) {
          $("#burger").val("")
        })
        location.reload();
        }
      );
    

  

// //Event Handler when Delete button is pressed
// $(".delete-burger").on("click", function(event) {
//     var id = $(this).data("id");
  
//     $('.burgersStat').on('click',".delete-burger", function(){
//       var el = $(this).closest('.indi-burger');
//       cuteHide(el);
//     });
//     //Send the DELETE request.
//     $.ajax("/api/burger/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         //Wait to  reload the page to get the updated list
//         setTimeout(function(){location.reload(); }, 2000);
//       }
//     );
//   });
});


