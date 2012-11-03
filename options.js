$('#sources').submit(function(){
  localStorage.mashable = $('#mashable').is(':checked');
  localStorage.techcrunch = $('#techcrunch').is(':checked');
  localStorage.sources = $('textarea', this).val();

  $('#saved')
    .fadeIn("fast")
    .fadeOut(5000);

  return false;
});

$(document).ready(function(){
  $('#mashable').attr('checked', (localStorage.mashable == "true"));
  $('#techcrunch').attr('checked', (localStorage.techcrunch == "true"));
  $('#sources textarea').val(localStorage.sources);
});