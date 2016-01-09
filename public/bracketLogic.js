var afc = {
  1: "Denver Broncos",
  2: "New England Patriots",
  3: "Cincinnati Bengals",
  4: "Houston Texans",
  5: "Kansas City Chiefs",
  6: "Pittsburgh Steelers"
};

var nfc = {
  1: "Carolina Panthers",
  2: "Arizona Cardinals",
  3: "Minnesota Vikings",
  4: "Washington Redskins",
  5: "Green Bay Packers",
  6: "Seattle Seahawks"
};

var afc1;
var afc2;
var nfc1;
var nfc2;

var afcArrayWeek1 = [];
var nfcArrayWeek1 = [];

var afcArrayWeek2 = [];
var nfcArrayWeek2 = [];

var afcArrayWeek3 = [];
var nfcArrayWeek3 = [];

var afcArrayWeek4 = [];
var nfcArrayWeek4 = [];

var week1Winners = [];

var winnerPicks = {};


$('input').click(function(){

  var afcWeek1Winners = {};

  var cinButton = $('.cinButton');
  var pitButton = $('.pitButton');
  var houButton = $('.houButton');
  var kanButton = $('.kanButton');
  var minButton = $('.minButton');
  var seaButton = $('.seaButton');
  var wasButton = $('.wasButton');
  var gbButton = $('.gbButton');

var btnClass = this.getAttribute('class');
var btnName = this.getAttribute('name');

  if(btnClass === 'cinButton' || btnClass === 'pitButton'){
    cinButton.prop('disabled', true);
    pitButton.prop('disabled', true);
    winnerPicks.afc_g1 = btnName;
    console.log(winnerPicks);
    week1Winners.push(btnName);
    $('.AFCgame1').hide('slow', function(){
      return week1Winners;
    });
  } else if(btnClass === 'houButton' || btnClass === 'kanButton'){
    houButton.prop('disabled', true);
    kanButton.prop('disabled', true);
    winnerPicks.afc_g2 = btnName;
    console.log(winnerPicks);
    week1Winners.push(btnName);
    $('.AFCgame2').hide('slow', function(){
      return week1Winners;
    });
  } else if(btnClass === 'minButton' || btnClass === 'seaButton'){
    minButton.prop('disabled', true);
    seaButton.prop('disabled', true);
    winnerPicks.nfc_g1 = btnName;
    console.log(winnerPicks);
    week1Winners.push(btnName);
    $('.NFCgame1').hide('slow', function(){
      return week1Winners;
    });
  } else if(btnClass === 'wasButton' || btnClass === 'gbButton'){
    wasButton.prop('disabled', true);
    gbButton.prop('disabled', true);
    winnerPicks.nfc_g2 = btnName;
    console.log(winnerPicks);
    week1Winners.push(btnName);
    $('.NFCgame2').hide('slow', function(){
      return week1Winners;
    });

  }

  pushToObject(week1Winners);


});

var pushToObject = function(winnerArray){
  for(var i = 0; i < winnerArray.length; i++){

    if(winnerArray[i] === afc[3] || winnerArray[i] === afc[6]){
      afc1 = winnerArray[i];
    } else if(winnerArray[i] === afc[4] || winnerArray[i] === afc[5]){
      afc2 = winnerArray[i];
    }

    if(winnerArray[i] === nfc[3] || winnerArray[i] === nfc[6]){
      nfc1 = winnerArray[i];
    } else if(winnerArray[i] === nfc[4] || winnerArray[i] === nfc[5]){
      nfc2 = winnerArray[i];
    }

    // console.log(winnersWeekOne(nfc, nfc1, nfc2));
    // console.log(winnersWeekOne(afc, afc1, afc2));
    $()
  }
  console.log(winnersWeekOne(afc, afc1, afc2));
  console.log(winnersWeekOne(nfc, nfc1, nfc2));
};

$('#subWeek1').click(function(){

});



var week2 = function(conference){
  var game1 = conference[1] + ' vs. ' + conference[4];
  var game2 = conference[2] + ' vs. ' + conference[3];
};

var winnersWeekOne = function(conference, x, y){
  if (conference === nfc){
    conference[7] = 'NFC';
  } else {
    conference[7] = 'AFC';
  }
  var conferenceWinnersWeek1 = {1: conference[1], 2:conference[2]};
  if(x === conference[3]){
    conferenceWinnersWeek1[3] = x;
    conferenceWinnersWeek1[4] = y;
  } else if(x === conference[6]){
    conferenceWinnersWeek1[3] = y;
    conferenceWinnersWeek1[4] = x;
  }
  // console.log('Week 2 - Game 1 in the ' + conference[7] + ' will be the...' + conferenceWinnersWeek1[1] + ' vs. ' + conferenceWinnersWeek1[4]);
  // console.log('Week 2 - Game 2 in the ' + conference[7] + ' will be the...' + conferenceWinnersWeek1[2] + ' vs. ' + conferenceWinnersWeek1[3]);

  return conferenceWinnersWeek1;
};



// console.log(winnersWeekOne(afc, "Pittsburgh Steelers", "Kansas City Chiefs"));
// console.log(winnersWeekOne(nfc, "Seattle Seahawks", "Green Bay Packers"));
