$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  var nameInput = $("#user-name");
  var userList = $("tbody");
  var userContainer = $(".user-container");

$(document).on("submit", "#user-form", handleAuthorFormSubmit);

function handleAuthorFormSubmit(event) {
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
// A function for creating an author. Calls getAuthors upon completion
  function upsertUser(userData) {
    $.post("/api/users", userData)
      .then(getUsers);
  }

  function getUsers() {
    $.get("/api/users", function(data) {
      console.log(data)
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createUserRow(data[i]));
      }
      renderUserList(rowsToAdd);
      nameInput.val("");
    });
  }
//Creates row for users
  function createUserRow(userData) {
    var newTr = $("<tr>");
    newTr.data("author", userData);
    newTr.append("<td>" + userData.name + "</td>");
    if (userData.burgers) {
      newTr.append("<td> " + userData.burgers.length + "</td>");
    } else {
      newTr.append("<td>0</td>");
    }
    newTr.append("<td><a href='/blog?author_id=" + userData.id + "'>Go to Posts</a></td>");
    newTr.append("<td><a href='/cms?author_id=" + userData.id + "'>Create a Post</a></td>");
    newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
    return newTr;
  }

  //   // A function for rendering the list of authors to the page
  function renderUserList(rows) {
    userList.children().not(":last").remove();
    userContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      userList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }
//Display mesage if there are users to show
    function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create a user before you can eat burger.");
    userContainer.append(alertDiv);
  }

})
