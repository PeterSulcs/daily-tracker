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
});
