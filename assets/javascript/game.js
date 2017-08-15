
      var s;
      var count = 0;
      var answerArray =[];
      var selectedLetters =[];
      var randomWordArr = ["pizza", "cake", "cookies", "candy", "scones"];
      var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];

      String.prototype.replaceAt = function(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
      }
      
      function startUp() {
      
        for (var i = 0; i< randomWord.length; i++) {
          answerArray[i] = "-";
        }
        s = answerArray.join("");
        document.getElementById("answer").innerHTML = s;
      }
      startUp();

      function addLetter(){
        // Grabbing the letter from the input value
        var letter = document.getElementById("letter").value;

        // is the letter selected included in the random word
        if(randomWord.indexOf(letter) > -1) {
          // Get the current status of the answer
          var currentAnswer = document.getElementById("answer").innerHTML;
          // Get the position of where the letter is found in the random word
          var currentIndexOrLetter = randomWord.indexOf(letter);
          // Update the string to include the letter selected
          var newPartialAnswerString = currentAnswer.replaceAt(currentIndexOrLetter, letter);
          //Update the page (html) to have the selected letter
          document.getElementById("answer").innerHTML = newPartialAnswerString;
          // Clear the value from the field
          document.getElementById("letter").value = ""

          if(newPartialAnswerString.indexOf('-') === -1){
            console.log('YOU WIN!! You successfully guessed the word ' + randomWord + '!');
          }
        }else{
          // Alert the user if there is no match
          alert('There was no ' + letter + ' found in the word');
        }
      }



  

      
        
