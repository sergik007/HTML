    function goMail() {
      if(document.getElementById("operation").checked) 
          document.getElementById("operation").value = "true";
        
      if(document.getElementById("terms").checked)
          document.getElementById("terms").value = "true";
        
      if(document.getElementById("answer").checked) 
          document.getElementById("answer").value = "true";
        
      if(document.getElementById("operation").checked==0){
         if(document.getElementById("terms").checked==0){
           if(document.getElementById("answer").checked==0){
                alert("Fill in all fields");
                return 0;
              }
           }
         }
        
      if(document.getElementById("uname").value.length==0){ 
        alert("Enter name");
        return 0;                            
      }

      if(document.getElementById("some_info").value.length==0){ 
        alert("Enter information");
		return 0;
	  }
	  if(document.getElementById("mail").value.length==0){ 
          alert("Enter mail");
          return 0; 
	  }
        if (confirm("Do you want to send information ?")) {
            document.location = "index2.html?id=" + document.getElementById("operation").value + "$" + document.getElementById("terms").value +"$" + document.getElementById("answer").value+"$" + document.getElementById("uname").value+"$" + document.getElementById("some_info").value+"$" + document.getElementById("mail").value;
        }
    }
