
$(document).ready(function() {
    // Add a click event handler to both h2 and img tags inside .question
    $('.question').on('click', 'h2, img', function() {
      // Find the closest .question div relative to the clicked element
      var questionDiv = $(this).closest('.question');
      
      // Check if the clicked question is already open
      var isOpen = questionDiv.next('.answer').is(':visible');
      
      // Hide all .answer elements except the one within the clicked questionDiv
      $('.answer').not(questionDiv.next('.answer')).slideUp();
      
      // Reset the rotation for all images
      $('.question img').removeClass('rotate-up');
      
      // Toggle the visibility of .answer within the clicked questionDiv
      questionDiv.next('.answer').slideToggle();
      
      // Rotate the clicked image 180 degrees if the question was closed or opened
      questionDiv.find('img').toggleClass('rotate-up', !isOpen);
    });



    
        



    var pageNames = ["about", "contact us"];



  });

