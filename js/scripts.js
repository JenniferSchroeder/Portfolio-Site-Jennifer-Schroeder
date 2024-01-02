console.log ("Hi! Welcome to My Portfolio Site")
var person = {
    name: "Jennifer",
    age: 46,
    hobbies: "camping, arting, music",
  };


  function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }
