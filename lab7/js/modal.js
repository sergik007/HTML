 // Показать полупрозрачный DIV, затеняющий всю страницу 
    // (а форма будет не в нем, а рядом с ним, чтобы не полупрозрачная) 
    function showCover() {
      var coverDiv = document.createElement('div');
      coverDiv.id = 'cover-div';
      document.body.appendChild(coverDiv);
    }

    function hideCover() {
      document.body.removeChild(document.getElementById('cover-div'));
    }

    function showPrompt() {
      showCover();
      var form = document.getElementById('prompt-form');
      var container = document.getElementById('prompt-form-container');
      
     

      function complete(value) {
        hideCover();
        container.style.display = 'none';
        document.onkeydown = null;        
      }      

      form.elements.cancel.onclick = function() {
        complete(null);
      };

      var lastElem = form.elements[form.elements.length - 1];
      var firstElem = form.elements[0];

      container.style.display = 'block';   
      
      query();
    }