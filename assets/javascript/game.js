$(document).ready(function(){

    // random number between 20-100
    var Random=Math.floor(Math.random()*81+20)

    // puts random number on page
    $('#randomNumber').text(Random);

    // random number for each gem between 1-12
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

    //  wins/losses
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

    //puts wins/losses in page
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  //reset 
  function reset(){
        Random=Math.floor(Math.random()*81+20);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
  //adds wins
  function winner(){
  alert("You Win!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  //adds losses
  function loser(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  // gem click function
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
            
        if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 

  