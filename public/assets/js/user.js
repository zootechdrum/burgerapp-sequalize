$(document).on("submit", "#user-form", handleAuthorFormSubmit);

function handleAuthorFormSubmit(event) {
    console.log("Hello")
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