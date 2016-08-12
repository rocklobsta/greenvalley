  $(document).ready(function(){
  var hideItem = $('.house-decs'),
  activeSelect = $(),
  firstShow = $();

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