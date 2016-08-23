//Business Logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Address(street, city, state, type) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.addType = type;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state + ", " + this.addType;
}




//User Logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul.contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");


    $(".new-address").each(function() {
        var inputtedStreet = $(this).find("input.new-street").val();
        var inputtedCity = $(this).find("input.new-city").val();
        var inputtedState = $(this).find("input.new-state").val();
        var inputtedAddType = $(this).find("input.new-addType").val();
        var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedAddType)
        newContact.addresses.push(newAddress)
      });

      $(".contact").last().click(function() {
          $("#show-contact").show();
          $("#show-contact h2").text(newContact.fullName());
          $(".first-name").text(newContact.firstName);
          $(".last-name").text(newContact.lastName);
          $("ul#addresses").text("");
          newContact.addresses.forEach(function(address) {
            $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
          });
        $("#new-addresses").hide();
      });


  });

});
