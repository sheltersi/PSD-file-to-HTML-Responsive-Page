

function mountains(evt, mountainName) {
  // Declaring the variables
  var i, tabcontent, tablinks;

  // Geting all the elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // now we are getting all the elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Now we are show the current tab, and adding an "active" class to the button that opened the tab
  document.getElementById(mountainName).style.display = "block";
  evt.currentTarget.className += " active";
} 

