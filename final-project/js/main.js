  $( function() {
    $( ".ui-widget-content" ).draggable({ opacity: 0.7, helper: "clone" });
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
            $(this).html( "DONUT CAT!");
      }
    });
  } );

  // make food items draggable X
  // make catghost droppable X
  // change droppable depending on which draggable is dropped
  //  - read which draggable is dragged (ie. #pizza, #icepop, etc.)
  //  - droppable output "pizza img"(etc.) if "#pizza"(etc.) draggable is dropped

