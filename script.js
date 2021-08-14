var p_list = document.getElementById("plant_list")

function addToGarden(){
    if(p_list){
        p_list.style.backgroundColor = "blue";
    }
}

var slideIndex = 0;
showSlides();

function zoneFind(event){
  let input = document.getElementById("userZip").value
  document.getElementById('zone').innerHTML = input
  

  var req = new XMLHttpRequest()
  req.open("GET", "http://flip1.engr.oregonstate.edu:3469/" + input, false)
  req.send(null)
  var hZone = JSON.parse(req.responseText)
  
  test(hZone.zone)

  event.preventDefault();

}

function test(zone){
  document.getElementById('zone').innerHTML = zone
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("gardenTips");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
} 