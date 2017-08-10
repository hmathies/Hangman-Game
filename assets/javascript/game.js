      var s;
      var count = 0;
      var answerArray =[];
      var randomWordArr = ["pizza", "cake", "cookies", "candy", "scones"];
    var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
      
    //below is the code that will put the dashes for whatever word
    //math.random choose from the array at the start of the game
      
      function startUp()
      {
        for (var i = 0; i< randomWord.length; i++)
        {
          answerArray[i] = "-";
        }
       
        s = answerArray.join(" ");
        document.getElementById("answer").innerHTML = s;
      }

      //stuck on how to get the user guesses, when correct, on the line
      //without the line disappearing
      
        
