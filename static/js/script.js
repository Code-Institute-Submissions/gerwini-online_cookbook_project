$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('select').formSelect();
  });

$(document).ready(function() {
    var max_fields = 10;
    var wrapper = $(".container1");
    var add_button = $(".add_form_field");

    var x = 1;
    $(add_button).click(function(e) {
        // let input = `
        //     <div class="input-field row">
        //         <a href="#" class="delete col s2">Delete</a>
        //         <input class="col s10" type="text" name="ingredients">
        //         <label for="ingredients">Ingredient</label>
        //     </div>`

        let input = `
                <div class="input-field">
                    <input type="text" name="ingredients">
                    <label for="ingredients">Ingredient</label>
                </div>
                <a href="#" class="delete">Delete</a>`
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(wrapper).append(input);
        } else {
            alert('You Reached the limits')
        }
    });

    $(wrapper).on("click", ".delete", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    })
});