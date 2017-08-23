
	$(document).ready(function(){

		var arrival;
		var firstName;
		var lastName;
		var guest1firstname;
		var guest1lastname;
		var guest1email;
		var guest2firstname;
		var guest2lastname;
		var guest2email;
		var guest3firstname;
		var guest3lastname;
		var guest3email;
		var guest4firstname;
		var guest4lastname;
		var guest4email;
		var guest5firstname;
		var guest5lastname;
		var guest5email;
		var guest6firstname;
		var guest6lastname;
		var guest6email;
		var guest7firstname;
		var guest7lastname;
		var guest7email;
		var guest8firstname;
		var guest8lastname;
		var guest8email;
		var teeTime;
		var food;
		var spa;
		var boating;
		var fishing;
		var car;
		var grocery;
		var catering;
		var babysitting;
		var choosePathRemaining;
		var filledOut = "yes";

	$("input").keyup(function(event){
    if(event.keyCode == 13){
        $("#nameButton").click();
    }
});

//ACTIVITIES MULTISELECT
 $("#favoriteActivities input").click(function(){
	 	 $(this).toggleClass("selected");
});


// Get Name

$('#provideName button').click(function() {
		 arrival = $("#datepicker").val();
	 	 firstName = $("#firstName").val();
	 	 lastName = $("#lastName").val();
	 	guest1firstname = $("#guest1firstname").val();
		guest1lastname = $("#guest1lastname").val();
		guest1email = $("#guest1email").val();
		guest2firstname = $("#guest2firstname").val();
		guest2lastname = $("#guest2lastname").val();
		guest2email = $("#guest2email").val();
		guest3firstname = $("#guest3firstname").val();
		guest3lastname = $("#guest3lastname").val();
		guest3email = $("#guest3email").val();
		guest4firstname = $("#guest4firstname").val();
		guest4lastname = $("#guest4lastname").val();
		guest4email = $("#guest4email").val();
		guest5firstname = $("#guest5firstname").val();
		guest5lastname = $("#guest5lastname").val();
		guest5email = $("#guest5email").val();
		guest6firstname = $("#guest6firstname").val();
		guest6lastname = $("#guest6lastname").val();
		guest6email = $("#guest6email").val();
		guest7firstname = $("#guest7firstname").val();
		guest7lastname = $("#guest7lastname").val();
		guest7email = $("#guest7email").val();
		guest8firstname = $("#guest8firstname").val();
		guest8lastname = $("#guest8lastname").val();
		guest8email = $("#guest8email").val();
	 	 $("#provideName").fadeOut("slow", function(){
	 	 $("#favoriteActivities").fadeIn("slow");
	 	 });
	 	 console.log(firstName, lastName);
	 	 returnTop();
	 });

//GOLF TRANSITION

$('#golf').click(function() {
	 golf = firstName + " " + lastName + " would like to book a tee time."
	 $(".rateStay").prop("disabled", true);
	  	 $("#favoriteActivities").fadeOut("slow", function(){
	 	 $("#teeTimeContainer").fadeIn("slow");
	 	 $(".rateStay").prop("disabled", false);
	 	 });
	 	 console.log(golf);
	 	 returnTop();
	 });

//GOLF SUBMISSION
	 $('#teeTimeContainer button').click(function(){
	 	 teeTime = $("#teeTimeContainer textarea").val();
	 	 console.log(teeTime);
	 	 $("#teeTimeContainer").fadeOut("slow", function(){
	 	 $("#favoriteActivities").fadeIn("slow");
	 	returnTop();
     });
	 	 });

//DINNER TRANSITION
	 $('#dinner').click(function() {
	 $(".rateStay").prop("disabled", true);
	  	 $("#favoriteActivities").fadeOut("slow", function(){
	 	 $("#foodContainer").fadeIn("slow");
	 	 $(".rateStay").prop("disabled", false);
	 	 });
	 	 console.log(golf);
	 	 returnTop();
	 });

//DINNER SUBMISSION

	 $('#foodContainer button').click(function(){
	 	 food = $("#foodContainer textarea").val();
	 	 console.log(teeTime);
	 	 $("#foodContainer").fadeOut("slow", function(){
	 	 $("#favoriteActivities").fadeIn("slow");
	 	returnTop();
     });
	 	 });

//SPA TRANSITION
	 $('#spa').click(function() {
	 $(".rateStay").prop("disabled", true);
	  	 $("#favoriteActivities").fadeOut("slow", function(){
	 	 $("#spaContainer").fadeIn("slow");
	 	 $(".rateStay").prop("disabled", false);
	 	 });
	 	 console.log(golf);
	 	 returnTop();
	 });

//SPA SUBMISSION

	 $('#spaContainer button').click(function(){
	 	 spa = $("#spaContainer textarea").val();
	 	 console.log(teeTime);
	 	 $("#spaContainer").fadeOut("slow", function(){
	 	 $("#favoriteActivities").fadeIn("slow");
	 	returnTop();
     });
	 	 });

//BOATING TRANSITION
	 $('#boating').click(function() {
	 $(".rateStay").prop("disabled", true);
	  	 $("#favoriteActivities").fadeOut("slow", function(){
	 	 $("#boatingContainer").fadeIn("slow");
	 	 $(".rateStay").prop("disabled", false);
	 	 });
	 	 console.log(golf);
	 	 returnTop();
	 });

//BOATING SUBMISSION

	 $('#boatingContainer button').click(function(){
	 	 boating = $("#boatingContainer textarea").val();
	 	 console.log(teeTime);
	 	 $("#boatingContainer").fadeOut("slow", function(){
	 	 $("#favoriteActivities").fadeIn("slow");
	 	returnTop();
     });
	 	 });

//fishing TRANSITION
	 $('#fishing').click(function() {
	 $(".rateStay").prop("disabled", true);
	  	 $("#favoriteActivities").fadeOut("slow", function(){
	 	 $("#fishingContainer").fadeIn("slow");
	 	 $(".rateStay").prop("disabled", false);
	 	 });
	 	 console.log(golf);
	 	 returnTop();
	 });

//fishing SUBMISSION

	 $('#fishingContainer button').click(function(){
	 	 fishing = $("#fishingContainer textarea").val();
	 	 console.log(teeTime);
	 	 $("#fishingContainer").fadeOut("slow", function(){
	 	 $("#favoriteActivities").fadeIn("slow");
	 	returnTop();
     });
	 	 });

//car TRANSITION
	 $('#car').click(function() {
	 $(".rateStay").prop("disabled", true);
	  	 $("#favoriteActivities").fadeOut("slow", function(){
	 	 $("#carContainer").fadeIn("slow");
	 	 $(".rateStay").prop("disabled", false);
	 	 });
	 	 console.log(golf);
	 	 returnTop();
	 });

//car SUBMISSION

	 $('#carContainer button').click(function(){
	 	 car = $("#carContainer textarea").val();
	 	 console.log(teeTime);
	 	 $("#carContainer").fadeOut("slow", function(){
	 	 $("#favoriteActivities").fadeIn("slow");
	 	returnTop();
     });
	 	 });

//grocery TRANSITION
	 $('#grocery').click(function() {
	 $(".rateStay").prop("disabled", true);
	  	 $("#favoriteActivities").fadeOut("slow", function(){
	 	 $("#groceryContainer").fadeIn("slow");
	 	 $(".rateStay").prop("disabled", false);
	 	 });
	 	 console.log(golf);
	 	 returnTop();
	 });

//grocery SUBMISSION

	 $('#groceryContainer button').click(function(){
	 	 grocery = $("#groceryContainer textarea").val();
	 	 console.log(teeTime);
	 	 $("#groceryContainer").fadeOut("slow", function(){
	 	 $("#favoriteActivities").fadeIn("slow");
	 	returnTop();
     });
	 	 });

//catering TRANSITION
	 $('#catering').click(function() {
	 $(".rateStay").prop("disabled", true);
	  	 $("#favoriteActivities").fadeOut("slow", function(){
	 	 $("#cateringContainer").fadeIn("slow");
	 	 $(".rateStay").prop("disabled", false);
	 	 });
	 	 console.log(golf);
	 	 returnTop();
	 });

//catering SUBMISSION

	 $('#cateringContainer button').click(function(){
	 	 catering = $("#cateringContainer textarea").val();
	 	 console.log(teeTime);
	 	 $("#cateringContainer").fadeOut("slow", function(){
	 	 $("#favoriteActivities").fadeIn("slow");
	 	returnTop();
     });
	 	 });

//babysitting TRANSITION
	 $('#babysitting').click(function() {
	 $(".rateStay").prop("disabled", true);
	  	 $("#favoriteActivities").fadeOut("slow", function(){
	 	 $("#babysittingContainer").fadeIn("slow");
	 	 $(".rateStay").prop("disabled", false);
	 	 });
	 	 console.log(golf);
	 	 returnTop();
	 });

//babysitting SUBMISSION

	 $('#babysittingContainer button').click(function(){
	 	 babysitting = $("#babysittingContainer textarea").val();
	 	 console.log(teeTime);
	 	 $("#babysittingContainer").fadeOut("slow", function(){
	 	 $("#favoriteActivities").fadeIn("slow");
	 	returnTop();
     });
	 	 });


//submit survey function
	 	$('#complete-button').click(function() {
	 		//submit all values to Google
	 		console.log(typeof firstName);
	 		// postContactToGoogle();
	 		$.ajax({
              url: "https://docs.google.com/forms/d/e/1FAIpQLScqUxJfwN1boc5xIUy1cSzmbBxN9dIZFbwwV_ZECkQ476t6EA/formResponse",
              data: {
	"entry.1458294248":arrival,
      "entry.125958543":firstName,
      "entry.1751603251":lastName,
      "entry.1912128957":guest1firstname,
      "entry.8793174":guest1lastname,
      "entry.1133083523":guest1email,
      "entry.181165311":guest2firstname,
      "entry.1779926079":guest2lastname,
      "entry.1407424141":guest2email,
      "entry.720697189":guest3firstname,
      "entry.860627045":guest3lastname,
      "entry.569848737":guest3email,
      "entry.228868308":guest4firstname,
      "entry.720785260":guest4lastname,
      "entry.1560625099":guest3email,
      "entry.2103772881":guest5firstname,
      "entry.1005462121":guest5lastname,
      "entry.30990793":guest5email,
      "entry.1516109444":guest6firstname,
      "entry.681371232":guest6lastname,
      "entry.1727814613":guest6email,
      "entry.1869442866":guest7firstname,
      "entry.1215000110":guest7lastname,
      "entry.993831154":guest7email,
      "entry.34591044":guest8firstname,
      "entry.854742999":guest8lastname,
      "entry.1491345046":guest8email,
      "entry.320904679":filledOut
  },
              type: "POST",
              dataType: "xml",
          });
	 		$("#favoriteActivities").fadeOut(600, function(){setTimeout(greatExperience, 800); setTimeout(resetBG, 800)});
	 		$("#sd-logo").fadeOut(600);
	 	 });
	 	 });

	  // function postContactToGoogle() {
          

//functions for each experience

var badExperience = function(){
	$("#badTimeText").fadeIn(2000);
};

var okExperience = function(){
	$("#okTimeText").fadeIn(2000);
};


var greatExperience = function(){
	$("#greatTimeText").fadeIn(2000);
};

var resetBG = function(){
	$('#bgimage').fadeIn(2000);
}

//scroll back to top on submit
var returnTop =  function(){
    $("body").animate({
        scrollTop: $("body").offset().top
    }, 800);
    };

  // $( function() {
  //   $( "#datepicker" ).datepicker();
  // }); 
