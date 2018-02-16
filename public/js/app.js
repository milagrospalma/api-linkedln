function OnLinkedInLoad() {
  IN.Event.on(IN, 'auth', OnLinkedInAuth);
}

function OnLinkedInAuth() {
  IN.API.Profile('me').fields('id', 'first-name', 'last-name', 'headline', 'location', 'picture-url', 'public-profile-url', 'email-address').result(getProfile).error(onError);
  console.log('Ingresó correctamente.');
}

function onError(error) {
  console.log('error');
}

function getProfile(profile) {
  console.log('Se cargan los datos del usuario');
}

function clearIndex() {
  var firstView = document.getElementById('in');
  var wall = document.getElementsByTagName('body');
  // agrega la clase d-none
  // remueve la clase login
}