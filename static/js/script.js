$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('select').formSelect();
  });

$(document).ready(function() { // Function to add aditional ingredients to a recipe
    var max_fields = 10;
    var wrapper = $(".ingredient_list");
    var add_button = $(".add_ingredient");

    var x = 1;
    $(add_button).click(function(e) {
        let input = `
                <div class="input-field">
                    <input type="text" name="ingredients">
                    <label for="ingredients">Ingredient</label>
                    <a href="#" class="delete">Delete</a>
                </div>`
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(wrapper).append(input);
        } else {
            alert('You Reached the limits')
        }
    });

    $(wrapper).on("click", ".delete", function(e) { // option to delete a row of ingredients
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    })
});
