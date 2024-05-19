var element = document.getElementById("No");

// The moving and changing text along with some like just saying stuff
let texts = ["PLEASE I ONLY MADE ONE PROMPT THIS TIME", "sike i did 2", "but that's it i promise please just press yes", "No"];
let index = 0;

document.getElementById('theButton').addEventListener('click', function() {
    this.innerHTML = texts[index];
    index = (index+1) % texts.length;
});

// The event listener
element.addEventListener("mousemove", function(){
    // Debugging
    console.log("it worked!!!")

    // Change the text of the button inside the div
    document.getElementById('theButton').textContent = texts[index];
    index = (index + 1) % texts.length;

    // The button movement section
    document.body.appendChild(element);
    var xCoordinate = Math.random() * (window.innerWidth - 300);
    var yCoordinate = Math.random() * (window.innerHeight - 100);
    // console.log(xCoordinate)
    // console.log(yCoordinate)
    element.style.left = xCoordinate + "px";
    element.style.top = yCoordinate + "px";
});