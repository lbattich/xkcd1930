function fact() {

  var what = choice(
    seq("the ", choice("fall", "spring"), " equinox"),
    seq("the ", choice("winter", "summer"), " ", choice("solstice", "olympics")),
    seq("the ", choice("earliest", "latest"), " ", choice("sunrise", "sunset")),
    seq("daylight ", choice("saving", "savings"), " time"),
    seq("leap ", choice("day", "year")),
    "Easter",
    seq("the ", choice("harvest", "super", "blood"), " moon"),
    "Toyota Truck Month",
    "Shark Week");

  var willDo = choice(
    seq("happens ", choice("earlier", "later", "at the wrong time"), " every year"),
    seq("drifts out of sync with the ", choice(
      choice("sun", "moon", "zodiac"),
      seq(choice("Gregorian", "Mayan", "lunar", "iPhone"), " calendar"),
      "atomic clock in Colorado")),
    seq("might ", choice("not happen", "happen twice"), " this year") );

  var geoReason = seq(
    choice("precession", "libration", "nutation", "libation", "eccentricity", "obliquity"),
    " of the ",
    choice("moon", "sun", "earth's axis", "equator", "prime meridian", seq( choice("international date", "Mason-Dixon"), " line") ) );


  var reason = choice(
    seq("time zone legislation in ", choice("Indiana", "Arizona", "Russia")),
    "a decree by the pope in 1950s",
    geoReason,
    "magnetic field reversal",
    seq("an arbitrary decision by ", choice("Benjamin Franklin", "Isaac Newton", "FDR")) );

  var consequence = choice(
    "it causes a predicticable increase in car accidents",
    "that's why we have leap seconds",
    "scientists are really worried",
    seq("it was even more extreme during the ", choice("Bronze Age", "ice age", "Cretaceous", "1990s")),
    seq("there is a proposal to fix it, but it ", choice("will never happen", "actually makes things worse", "is stalled in Congress", "might be unconstitutional")),
    "it's getting worse and no one knows why");

  return seq("Did you know that ", what, " ", willDo, " because of ", reason, "? Apparently ", consequence, "." );
};


function choice() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
  return arguments[Math.floor(Math.random()*arguments.length)];
};

function seq() {
  var sequence = "";
  for (var i = 0; i < arguments.length; i++) {
    sequence += arguments[i];
  }
  return sequence;
};