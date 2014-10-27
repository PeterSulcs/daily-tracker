$(document).ready(function() {

  // Place JavaScript code here...
  $('#taketurmeric').click(function(){
  	if ($('#taketurmeric').is(':checked')){
  		$('#turmeric_options').show();
  	} else {
  		$('#turmeric_options').hide();
  	}
  });

  $('#usedurezol').click(function(){
  	if ($('#usedurezol').is(':checked')){
  		$('#durezol_options').show();
  	} else {
  		$('#durezol_options').hide();
  	}
  });

  $('#exercise').click(function(){
  	if ($('#exercise').is(':checked')){
  		$('#exercise_options').show();
  	} else {
  		$('#exercise_options').hide();
  	}
  });

  $('#sulphorousveggies').click(function(){
  	if ($('#sulphorousveggies').is(':checked')){
  		$('#sulphorous_options').show();
  	} else {
  		$('#sulphorous_options').hide();
  	}
  });

  $('#leafygreens').click(function(){
  	if ($('#leafygreens').is(':checked')){
  		$('#leafy_options').show();
  	} else {
  		$('#leafy_options').hide();
  	}
  });

  $('#colors').click(function(){
  	if ($('#colors').is(':checked')){
  		$('#colors_options').show();
  	} else {
  		$('#colors_options').hide();
  	}
  });


});
