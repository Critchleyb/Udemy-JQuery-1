$(function() {
  // jQuery goes here...

  /*------FADING-------*/

  // $('.red-box').fadeTo(2000,.25);
  // $('.green-box').fadeTo(2000, .5);
  // $('.blue-box').fadeTo(2000, .8);

  // $('.green-box').fadeToggle(2000);

  /*------HIDE / DISPLAY-------*/

  // $('.blue-box').hide(1000); //hides, sets display property to hidden
  // $('.red-box').show(); //shows, sets display property to visible
  // $('.green-box').toggle(); //toggles display to property

  /*------SLIDING-------*/

  // $('.blue-box').slideUp(1000);
  // $('.blue-box').slideDown(1000);

  // $('.red-box').slideToggle(1000);
  // $('.red-box').slideToggle(1000);

  // $('p').hide();
  // $('p').slideDown(1000);

  /*------CUSTOM ANIMATIONS-------*/
  //use .animate() and pass in an object of strings containing the css properties to mutate, then over how long and on what curve

  // $('.blue-box').animate({
  //   'margin-left': '+=200px',
  //   'padding': '+=20px'
  // }, 1000, 'linear');
  // $('.blue-box').animate({
  //   'margin-left': '-=200',
  //   'padding': '-=20px'
  // }, 1000, 'linear');

  // $('p').animate({
  //   'font-size': '20px'
  // }, 1000);

  /*------CHAINING ANIMATIONS-------*/

  // $('.red-box').fadeTo(1000, .25);
  // $('.green-box').delay(1000).fadeTo(1000, .5);
  // $('.blue-box').delay(2000).fadeTo(1000, .8).fadeOut().fadeIn();

  // Last argument in an animation is a callback function
  // $('.red-box').fadeTo(1000, .25, () => {
  //   alert("finished");
  // });

  // $('.lightbox').fadeIn(1000);

  /*------CSS Selectors-------*/

  // $("p").css("background-color", "rgba(180, 180, 30, .8)");
  // $(".red-box").css("background-color", "rgba(180, 180, 30, .8)");
  // $("#list").css("background-color", "rgba(180, 180, 30, .8)");
  // $('input[type="text"]').css("background-color", "rgba(180, 180, 30, .8)");
  // $("p:first").css("background-color", "rgba(180, 180, 30, .8)");
  // $("li:even").css("background-color", "rgba(180, 180, 30, .8)");
  // $("li:odd").css("background-color", "rgba(180, 180, 30, .8)");

  /*------JQuery Functions-------*/

  //$("#list").find("li").css("background-color", "rgba(180, 180, 30, .8)"); //recursivley selects all child elements
  //$("#list").children("li").css("background-color", "rgba(180, 180, 30, .8)"); //selects only the direct children

  // $("#list").parents("div").css("background-color", "rgba(180, 180, 30, .8)"); //selects all parents recursively
  // $("#list").parent().css("background-color", "rgba(180, 180, 30, .8)"); // selects only the direct parent

  // $("#list").siblings().css("background-color", "rgba(180, 180, 30, .8)"); // selects adjacent elements

  // $("#list").prev().css("background-color", "rgba(180, 180, 30, .8)"); //selects index before
  // $("#list").next().css("background-color", "rgba(180, 180, 30, .8)"); //selects index after

  /*------filtering-------*/

  // $("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, .8)");
  // $("li").filter(index => index % 2 === 0).css("background-color", "rgba(180, 180, 30, .8)"); //filter can take a callback function

  // $("li").first().css("background-color", "rgba(180, 180, 30, .8)");
  // $("li").last().css("background-color", "rgba(180, 180, 30, .8)");

  // $("li").eq(0).css("background-color", "rgba(180, 180, 30, .8)"); //same as first
  // $("li").eq(-1).css("background-color", "rgba(180, 180, 30, .8)"); //goes from back

  // $("li").not(first()).css("background-color", "rgba(180, 180, 30, .8)"); //.not() similar as filter but selects ones you do not want

  /*------DOM Manipulation-------*/

  // $("ul ul:first").append('<li> New sub item </li>'); //These both add element as last child
  // $("<li>New Last Item</li>").appendTo($("ul ul:first"));

  // $("ul ul:first").prepend('<li> New first sub item </li>'); //These add elements as first child
  // $("<li>New First Item</li>").prependTo("ul ul:first");

  // $(".red-box").after('<div class="red-box">after Red Box</div>'); //These add elements as siblings
  // $(".blue-box").before('<div class="blue-box">before blue Box</div>');

//   const name = 'Peter';
//   $('.blue-box').after(() => {  //Accepts a callback function
//     return `<div class="blue-box">${name}</div>`
//   });

//   $('.blue-box').before($('.red-box'));

  // $("li").replaceWith('<li>Replaced.</li>'); // Replaces items
  // $("li").replaceWith(() => { //Aceepts callback functions, like most JQ functions
  //   return `<li>ReplacedWithFunction</li>`;
  // });

  // const element = $('li:first');
  // $("p:first").replaceWith(element); // Replaces items with another item, but moves it in the DOM tree

  // const element = `<div class="green-box">Replaced Box</div>`
  // $('.red-box, .blue-box').replaceWith(element);
  // $(element).replaceAll('.red-box, .blue-box');

  // $('.red-box').remove();
  // $('form').children().not('input:text, textarea, br').remove();

  // const detachedElement = $('li').detach(); //detaches an object from the page and remembers things like event listners etc
  // $('#content').append(detachedElement);

  // $("p:first").empty() //empties the children and content of the element

  // const anchor = $('#test-anchor');

  // anchorHref = anchor.attr("href", "test"); //returns the specified attribute, second value sets it
   
  // const checkbox = $('input:checkbox');
  // console.log(checkbox.prop('checked')); //returns if the property is there on not

  // const text = $('input:text');
  // console.log(text.val()); //returns the value of the element
  
  // const galleryImg = $('.gallery').find('img').first();
  // const images = [
  //   'images/laptop-mobile_small.jpg',
  //   'images/laptop-on-table_small.jpg',
  //   'images/people-office-group-team_small.jpg'
  // ];

  // let i = 0;
  // setInterval(() => {
  //   i = (i + 1) % images.length; // 0,1,2,0,1,2
  //   galleryImg.fadeOut(1000, function() {
  //     $(this).attr("src", images[i]);
  //     $(this).fadeIn(1000);
  //   });
  // },4000);

  $('.gallery').hide();

  // const redBox = $('.red-box');
  // console.log(redBox.css('width')); //returns with the unit
  // console.log(redBox.width()); //returns without the unit

  // $('p').css('font-size', '2rem');

  // const properties = $('p').css(['font-size', 'line-height', 'color']);
  // console.log(properties);

  // $('a').addClass('fancy-link');
  // $('p').addClass('large emphasize'); //This adds two classes

  // $('li li').addClass(function(index) {
  //   $(this).addClass(`item-${index}`);
  // });

  // $('div').addClass(function (index,currentClass) {
  //   if (currentClass === 'dummy') {
  //     return 'red-box';
  //   }
  // });

  // $('.red-box').removeClass('red-box');

  /*------ELEMENT DATA-------*/
  // DATA PROPERTIES INLINE HTML ALSO GET STORED HERE

  // const gallery = $('.gallery');
  // const images = [
  //   'images/laptop-mobile_small.jpg',
  //   'images/laptop-on-table_small.jpg',
  //   'images/people-office-group-team_small.jpg'
  // ];

  // gallery.data('availableImages', images); // Can set key value pairs
  // console.log(gallery.data('availableImages')); //use the key to get the data
  // gallery.data('title', 'AwesomeGallery');
  // console.log(gallery.data()); // Empty .data() returns all data

  /*------ELEMENT CONTENT-------*/
  // text(), html()

// const firstPar = $('p:first');

// console.log(firstPar.text());
// console.log(firstPar.html());

//   firstPar.html(`${firstPar.html()} This has been appended`);

  /*------EVENT HANDLERS-------*/

  // $('#button-click').click(event => {
  //   console.log(event.target);
  // });

  $('.red-box').click(function() {
    $(this).fadeTo(500, .5);
  });

  $('#button-hover').hover(function() {
    console.log('Button Hovered');
  });

  // $('.green-box').hover(function () {
  //   $(this).text('hovered');
  // });


  const blueBox = $('.blue-box');

  // blueBox.mouseenter(function() {
  //   $(this).stop().fadeTo(500,.7);
  // });
  // blueBox.mouseleave(function () {
  //   $(this).stop().fadeTo(500,1);
  // });

  // blueBox.hover(
  //   function () {
  //   $(this).stop().fadeTo(500, .7);
  // }, 
  // function () {
  //   $(this).stop().fadeTo(500, 1);
  // });

  // $('html').on("click keydown", function() { // Setting the same function for multiple event types
  //   console.log(`mouse was clicked or key was pressed`);
  // })

  /*------EVENT DELEGATION-------*/

  // $('#content').on('click','p',function() { // Use the .on() function to delegate. the second parameter is the target.
  //   $(this).slideUp();
  // });

  /*------EVENT DATA-------*/

  // $('#button-click').click({ // first argument in an event can be an object to set the event.data property.
  //   user: 'Peter'
  // },event => {
  //   alert(`Hello ${event.data.user}`);
  // });

  // $('html').keydown(event => { //.which is offered by Jquery to give a keycode that is cross browser and can be used to identify which key was pressed.
  //   console.log(event.which);
  // });

  /*------FORMS-------*/

  // const inputFields = $('input:text, input[type="email"], textarea');
  // inputFields.focus(function() { // This is when box is focused
  //   $(this).css('box-shadow', '0 0 4px #666');
  // });
  // inputFields.blur(function () { // This is when box is focused
  //   $(this).css('box-shadow', 'none');
  // });
  // $('input:text').blur(function () { // This is when the box is no longer focused
  //   if($(this).val().length <img 3) {
  //     $(this).css('border', '1px solid rgb(200,0,0)');
  //   } else {
  //     $(this).css('border', '1px solid rgb(0,200,0)');
  //   }
  // });

  // $('input:checkbox').change(function() {
  //   const isChecked = $(this).is(':checked');
  //   if(isChecked) {
  //     $(this).add('label[for="cb"]').css('box-shadow', '0 0 4px #181');
  //   } else {
  //     $(this).add('label[for="cb"]').css('box-shadow', '0 0 4px #811');
  //   }
  // });

  
  // $('#form').submit(function(event) {
  //   const textArea = $("#message");
  //   if (textArea.val().trim() == '') {
  //     textArea.css('box-shadow','0 0 4px #811');
  //     event.preventDefault();
  //   }
  // });

  const form = $('#form');
  enableFastFeedback(form);
  form.submit(function (event) {
    const name = $('#name').val();
    const password = $('#password').val();
    const message = $('#message').val();
    const checked = $('#checkbox').is(':checked');

    Validate(name,'name',event);
    Validate(password,'password', event);
    Validate(message, 'message', event, 5);
    Validate(checked,'checkbox', event);
  });

  function enableFastFeedback(formElement) {
    const nameInput = formElement.find('#name');
    const passwordInput = formElement.find('#password');
    const messageInput = formElement.find('#message');
    const checkboxInput = formElement.find('#checkbox');

    nameInput.blur(function() {
      const name = $('#name').val();
      Validate(name, 'name');
    });

    passwordInput.blur(function () {
      const password = $('#password').val();
      Validate(password, 'password');
    });

    messageInput.blur(function () {
      const message = $('#message').val();
      Validate(message, 'message', null, 5);
    });

    checkboxInput.blur(function () {
      const checked = $('#checkbox').is(':checked');
      Validate(checked, 'checkbox');
    });
  }

  function Validate(val, type, event, limit = 3) {
    if (type === 'name' || type === 'password' || type === 'message') {
      if (val.length >= limit) {
        $(`#${type}-feedback`).text('')
      } else {
        $(`#${type}-feedback`).text(`${type} needs at least ${limit} characters`);
        if (event) event.preventDefault();
      }
    } else if (type === 'checkbox') {
      if (val === true) {
        $(`#${type}-feedback`).text('')
      } else {
        $(`#${type}-feedback`).text(`${type} must be ticked`);
        if (event) event.preventDefault();
      }
    }
  }

  /*------AJAX-------*/

  // $('#code').load("js/script.js"); //Loads content from a file on own server.

  // $('#code').load("js/script.js", function(response, statusCode) {
  //   if (statusCode == "error") {
  //     alert("could not find file");
  //   }
  //   console.log(response);
  // })

  // const flickerApiUrl = 'https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';

  // $.getJSON(flickerApiUrl, {
  //   tags: "sun, beach",
  //   tagmode: "any",
  //   format: "json"
  // }).done(function(data) {
  //   //Success
  //   $.each(data.items, (index, element) => {
  //     $("<img>").attr("src", element.media.m).appendTo('#flickr');
  //     if(index == 4) return false;
  //   });
  // }).fail(function() {
  //   //Failure
  //   alert("AJAX Call Failed")
  // });

  const pokeAPI = 'https://pokeapi.co/api/v2/generation/1';
  const pokemonByNameAPI = 'https://pokeapi.co/api/v2/pokemon/';

  $.getJSON(pokeAPI)
  .done(data => {
    $.each(data.pokemon_species, (i, element) => {
      const name = `${element.name.charAt(0).toUpperCase()}${element.name.slice(1)}`;
      const link = $("<a>").attr("id", element.name).attr("href", "#").append($("<strong>").text(name));
      const par = $("<p>").text(`${i+1}: `).append(link);
      par.appendTo('#pokemon');

      link.click(event => {
        event.preventDefault();
        $.getJSON(`${pokemonByNameAPI}${element.name}`)
        .done( details => {
          const pokemonDiv = $('#pokemon-details');
          pokemonDiv.empty();
          pokemonDiv.append(`<h2> ${name} </h2>`);
          pokemonDiv.append(`<img src="${details.sprites.front_default}" alt="${element.name}"></img>`);
        })
      });
    })
  })
  .fail(() => alert("AJAX Call Failed"))
  .always(() => console.log("This is always executed"));

});