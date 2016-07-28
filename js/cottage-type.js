  $(document).ready(function(){
  var hideItem = $('.house-desc'),
  activeSelect = $('#flagman'),
  firstShow = $('#house-desc__flagman');

  hideItem.hide();
  firstShow.show();
  activeSelect.attr('checked', 'checked');

  $('.cottage__choise').on('click', function(){ 
  var forData = $(this).attr('for'),
  showItem = '#house-desc__'+forData;

  $(hideItem).hide();
  $(showItem).show();
  }); 
});