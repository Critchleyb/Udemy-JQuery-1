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
  
  const galleryImg = $('.gallery').find('img').first();
  const images = [
    'images/laptop-mobile_small.jpg',
    'images/laptop-on-table_small.jpg',
    'images/people-office-group-team_small.jpg'
  ];

  let i = 0;
  setInterval(() => {
    i = (i + 1) % images.length; // 0,1,2,0,1,2
    galleryImg.fadeOut(1000, function() {
      $(this).attr("src", images[i]);
      $(this).fadeIn(1000);
    });
  },4000);
});