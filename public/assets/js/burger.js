$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = 1
  
      var ifDevoured = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: ifDevoured
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $('.create-form').on('submit', function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      const newBurger = {
      burger_name: $('#br')
        .val()
        .trim(),
      devoured: 0
      }

      // Send the POST request.
      $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger,
      }).then(function() {
        console.log('created new burger');
        // Reload the page to get the updated list
        location.reload();
      });
    }); 
  });
 