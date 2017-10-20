window.onload = function(){

  shuffle(trueNames)
  shuffle(fakeNames)

  var i = 0;
  var leftName = $("#left-name")[0]
  var rightName = $("#right-name")[0]
  var answer = $("#answer")[0]
  var next = $("#next")[0]
  var score = $("#score")[0]
  var trueName = trueNames[0]
  var fakeName = fakeNames[0]
  var names = [trueName, fakeName]

  var setNames = function(){
    trueName = trueNames[i]
    fakeName = fakeNames[i]
    names = [trueName, fakeName]
    shuffle(names)
    leftName.textContent = names[0];
    rightName.textContent = names[1];
    i += 1;
  };

  var color_names = function(){
   if(trueName == names[0]){
     leftName.style.color='#FFFB00'
     rightName.style.color='#0080FF'
   } else {
     rightName.style.color='#FFFB00'
     leftName.style.color='#0080FF'
   }
  };

  var set_score = function(is_good_guess){
    scores = score.innerHTML.split("/");
    if (answer.innerHTML == "&nbsp;") {
      if (is_good_guess) {
        scores[0] = (parseInt(scores[0]) + 1).toString();
        answer.innerHTML = "Good guess!";
      } else {
        answer.innerHTML = "Wrong!"
      }
      scores[1] = (parseInt(scores[1]) + 1).toString();
    }
    score.innerHTML = scores[0] + "/" + scores[1];
  };

  setNames();

  leftName.onclick = function(){
    color_names();
    set_score(trueName == names[0]);
  };

  rightName.onclick = function(){
    color_names();
    set_score(trueName == names[1]);
  };

  next.onclick = function(){
    document.getElementById("left-name").style.color = '#FFFFFF';
    document.getElementById("right-name").style.color = '#FFFFFF';
    document.getElementById("answer").innerHTML = "&nbsp;";
    setNames();
  };
};

function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
};
