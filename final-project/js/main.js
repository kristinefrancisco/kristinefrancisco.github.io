  $( function() {
    $( '.ui-widget-content' ).draggable({ opacity: 0.7, helper: 'clone' });
    $( '#droppable' ).droppable({
      drop: function( event, ui ) {
           if (ui.draggable.attr('id') == 'egg') { 
            $(this).html( 'EGG CAT!');
          } else if (ui.draggable.attr('id') == 'toast') {
            $(this).html( 'TOAST CAT!');
          } else if (ui.draggable.attr('id') == 'avocado') {
            $(this).html( 'AVOCADO CAT!');
          } else {
            $(this).html( 'ORANGE JUICE CAT!');
          }
      }
    });
  });

  // make food items draggable [X]
  // make catghost droppable [X]
  // change droppable depending on which draggable is dropped: 
  //  - get id of draggable in play (ie. #pizza, #icepop, etc.) [X]
  //  - droppable output "pizza img"(etc.) if "#pizza"(etc.) draggable is dropped [X]
  // create "POOF" hover state when draggable is dropped [ ]
  // reset to OG cat ghost on click title [ ]

