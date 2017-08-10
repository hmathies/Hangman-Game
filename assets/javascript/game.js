      var s;
      var count = 0;
      var answerArray =[];
      var randomWordArr = ["pizza", "cake", "cookies", "candy", "scones"];
    var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
      
    
      
      function startUp()
      {
        for (var i = 0; i< randomWord.length; i++)
        {
          answerArray[i] = "-";
        }
       
        s = answerArray.join(" ");
        document.getElementById("answer").innerHTML = s;
      }
      
        
