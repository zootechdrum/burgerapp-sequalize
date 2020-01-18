$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  var nameInput = $("#user-name");
  var authorList = $("tbody");
  var authorContainer = $(".user-container");

$(document).on("submit", "#user-form", handleAuthorFormSubmit);

function handleAuthorFormSubmit(event) {
    console.log(nameInput.val())
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertUser({
      name: nameInput
        .val()
        .trim()
    });
  }

  function upsertUser(authorData) {
    $.post("/api/users", authorData)
      .then(getAuthors);
  }

})