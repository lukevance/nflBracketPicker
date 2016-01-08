$('input').click(function(){
  var afc = [];
  var nfc = [];
  var week1Picks = {};

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
    $('.AFCgame1').hide('slow', function(){
      console.log(btnName);
      return btnName;
    });
  } else if(btnClass === 'houButton' || btnClass === 'kanButton'){
    houButton.prop('disabled', true);
    kanButton.prop('disabled', true);
    $('.AFCgame2').hide('slow', function(){
      console.log(btnName);
      return btnName;
    });
  } else if(btnClass === 'minButton' || btnClass === 'seaButton'){
    minButton.prop('disabled', true);
    seaButton.prop('disabled', true);
    $('.NFCgame1').hide('slow', function(){
      console.log(btnName);
      return btnName;
    });
  } else if(btnClass === 'wasButton' || btnClass === 'gbButton'){
    wasButton.prop('disabled', true);
    gbButton.prop('disabled', true);
    $('.NFCgame2').hide('slow', function(){
      console.log(btnName);
      return btnName;
    });
  }

});

$('#subWeek1').click(function(){

});

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
  console.log('Week 2 - Game 1 in the ' + conference[7] + ' will be the...' + conferenceWinnersWeek1[1] + ' vs. ' + conferenceWinnersWeek1[4]);
  console.log('Week 2 - Game 2 in the ' + conference[7] + ' will be the...' + conferenceWinnersWeek1[2] + ' vs. ' + conferenceWinnersWeek1[3]);

  return conferenceWinnersWeek1;
};



console.log(winnersWeekOne(afc, "Pittsburgh Steelers", "Kansas City Chiefs"));
console.log(winnersWeekOne(nfc, "Seattle Seahawks", "Green Bay Packers"));
