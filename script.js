document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('approveButton');
    var bird = document.getElementById('bird');
    var message = document.getElementById('message');
  
    button.onclick = function() {
      bird.style.display = 'block';
  
      setTimeout(function() {
        bird.style.display = 'none';
        message.style.display = 'block';
      }, 2000);
    };
  });
  