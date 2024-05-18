document.getElementById('nameForm').addEventListener('submit', function(event){
    event.preventDefault();

    var userName = document.getElementById('name').value;

    if (userName === "Rebecca Lu" || userName == "123youareweird")  {
        console.log("Access granted");
        window.location.href = "secondslide.html";
    } else {
        console.log("Access denied");
    }
});

