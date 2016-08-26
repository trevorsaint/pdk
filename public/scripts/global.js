(function() {
 
 
 'strict'
 
 
  // FILTERS
   
  if ($('.filters').length > 0) {
  
    
    $('.filters').each(function() {
      
      
      var $container = $(this);
      
      
      // click handler
      $container.find('.filters-button').on('click', function(e) {
        
        
        var $button     = $(this);
        var $dataToSort = $(this).attr('data-sort');
        
        
        // reset
        $container.find('tbody tr').attr('aria-hidden', null);
        
        
        // filter results
        if ($button.attr('data-sort') != 'all') {
          $container.find('tbody tr').not('body tr[data-filter="' + $dataToSort + '"]').attr('aria-hidden', true);  
        }
        
        // add and remove attributes
        $(this).siblings().attr('aria-pressed', false).removeClass('is-selected');
        $(this).attr('aria-pressed', true).addClass('is-selected').focus();
      
      
      });      
      
      
      // keydown handler
      $container.find('.filters-button').on('keydown', function(e) {
      
      
        // define current, previous and next (possible) tabs
        var $newButton;
        var $prevButton = $(this).prev();
        var $nextButton = $(this).next();
        var $dataToSort = $(this).attr('data-sort');
        
  
        // find the direction (prev or next)
        switch (e.keyCode) {
          case 37:
            $newButton = $prevButton;
            break;
          case 39:
            $newButton = $nextButton;
            break;
          default:
            $newButton = false;
            break;  
        }
        
        
        if ($newButton.length) {
          $newButton.focus();
        }
        
      
      });
      
      
    });
    
    
  }
 
 
 
 // TABS
 
 if ($('.tabs').length > 0) {
 
  
  $('.tabs').each(function() {
  
  
    var $container = $(this);
    
    
    // the setup
    $container.find('.tabs-header > ul').attr('role', 'tablist');
    $container.find('.tabs-header > ul li').attr('role', 'presentation');
    
    $container.find('[role="tablist"] a').attr({
      'role' : 'tab',
      'tabindex' : '-1'
    });
    
    
    // make each aria-controls correspond id of targeted section (re href)
    $container.find('[role="tablist"] a').each(function() {
      
      $(this).attr(
        'aria-controls', $(this).attr('href').substring(1)
      );
      
    });
    
    
    // make first tab selected by default and allow it focus
    $container.find('[role="tablist"] li:first-child a').attr({
      'aria-selected' : true,
      'tabindex' : 0
    });
    
    
    // make each section focusable and give it the tabpanel role
    $container.find('section').attr({
      'role' : 'tabpanel'
    });
    
    
    // make first child of each panel focusable programmatically
    $container.find('section > *:first-child').attr({
      'tabindex' : 0
    });
    
    
    // make all but the first section hidden (ARIA state and display CSS)
    $container.find('[role="tabpanel"]:not(:first-of-type)').attr({
      'aria-hidden' : true
    });
    
    
    // change focus between tabs with arrow keys
    $container.find('[role="tab"]').on('keydown', function(e) {
      
      
      // define current, previous and next (possible) tabs
      var $original = $(this);
      var $prev = $(this).parents('li').prev().children('[role="tab"]');
      var $next = $(this).parents('li').next().children('[role="tab"]');
      var $target;
      
      
      // find the direction (prev or next)
      switch (e.keyCode) {
        case 37:
          $target = $prev;
          break;
        case 39:
          $target = $next;
          break;
        default:
          $target = false;
          break;  
      }
      
      
      if ($target.length) {
        
        $original.attr({
          'tabindex' : -1,
          'aria-selected' : null
        });
        
        $target.attr({
          'tabindex' : 0,
          'aria-selected' : true
        }).focus();
        
      }
      
      
      // hide panels
      $container.find('[role="tabpanel"]').attr('aria-hidden', true);
      
      
      // show panel which corresponds to target
      $('#' + $(document.activeElement).attr('href').substring(1)).attr('aria-hidden', null);
      
      
    });
    
    
    $container.find('[role="tab"]').on('click', function(e) {
      
      
      e.preventDefault();
      
      
      // remove focusability and aria-selected
      $container.find('[role="tab"]').attr({
        'tabindex' : -1,
        'aria-selected' : null
      });
      
      
      // replace above on clicked tab
      $(this).attr({
        'aria-selected' : true,
        'tabindex' : 0
      });
      
      
      // hide panels
      $container.find('[role="tabpanel"]').attr('aria-hidden', true);
      
      
      // show corresponding panel
      $('#' + $(this).attr('href').substring(1)).attr('aria-hidden', null);
      
      
    });
  
  
  });
  
   
 }
  
 
})();