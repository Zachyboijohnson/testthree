function play() {
  image("player", "icon://fa-smile-o");
  setSize("player", 50, 50);
  onEvent("player", "click", function( ) {
    playSound("assets/category_explosion/puzzle_game_break_magic_01.mp3", false);
    setPosition("player", randomNumber(1, 318), randomNumber(1, 500), 50, 50);
  });
}
hideElement("play");
image("logo", "https://code.org/images/logo.png");
setPosition("logo", 125, 150, 100, 100);
button("one", "start");
setPosition("one", 120, 260, 100, 50);
onEvent("one", "click", function(titlescreen ) {
  playSound("assets/default.mp3", false);
  hideElement("logo");
  hideElement("one");
  showElement(play());
});
