var slideIndex = 0;
active();


function active() {
	var i;
  var x = document.getElementsByClassName("active");
  for (i = 0; i < x.length; i++) {
  	x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
  	slideIndex = 1
  }
  x[slideIndex-1].style.display = "block";
  setTimeout(active, 3000); //Change image every 3 secs
}

