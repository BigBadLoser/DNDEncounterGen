var partyXP = 0;
var encounterDifficulty = 0; //0 being easy, 1 medium, 2 hard, 3 deadly
var selectedLevel;
var characters = [];
var totalPartyXP = 10000;
var XPThresholds = [];

function selectLevelSelected(lvl){
  selectedLevel = lvl;
  $("#levelSelectButton").html('Level ' + lvl);
}

function addCharacter(){
  if(selectedLevel != null){
    $('#characters').append('<h5><span class="label label-danger">' + 'Level ' + selectedLevel +'</span><h5>');
    characters.push(selectedLevel);

  }
  else {
    $('#noLevel').show();
  }
}


window.onload = function(){
  $('#noLevel').hide();
}

function hideAlert() {
  $('#noLevel').hide();
}

function testFunction() {
  $('#testThing').html(characters + ' XP: ' + totalPartyXP);
}
