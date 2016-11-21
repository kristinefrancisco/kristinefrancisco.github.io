  $( function() {
    $( ".ui-widget-content" ).draggable({ revert: "valid" });
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
            $(this).html( "DONUT CAT!");
      }
    });
  } );

  // make food items draggable
  // make catghost droppable
  // change droppable depending on which draggable is dropped

