
$(function() {

	$('.circle.available').on('click', function(){
		//return tableNo on reservation form
		if( $(this).attr('class') === 'circle reserved'){
			return;
		} 
		$('.tableNo').text("Table Number: " + $(this).text());
		$(this).addClass('selected');
		$('.formContainer').css('display', 'flex');
	});

	$('button').on('click', function(){
		$('.selected').removeClass('available');
		$('.selected').addClass('reserved');
		$('.selected').removeClass('selected');
		$(".formContainer").css('display', 'none');
		// I would like to know how to reuse the function for closeform onclick
	});

	$('.closeForm').on('click', function (){
		$('.selected').removeClass('selected');
		$(".formContainer").css('display', 'none');
	});

});
// end of wrapping function!!



//Ross calls this a document-ready YO, confirms page is loading properly
/* $(function() {
     alert("yo");
 });
 */
