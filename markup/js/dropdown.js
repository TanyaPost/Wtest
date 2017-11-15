$(document).ready(function(){
  $(".open-dropdown").click(function(){
    if ( $(".open-dropdown").hasClass("open") ) {
  closeSidepage();
      } else {
   openSidepage();
    }
  });
  function openSidepage() {
    $(".open-dropdown + .dropdown-block").css( "display", "block" );
    $(".open-dropdown").addClass("open");
  }

  function closeSidepage(){
    $(".open-dropdown").removeClass("open");
    $(".open-dropdown + .dropdown-block").css( "display", "none" );
  }
});
