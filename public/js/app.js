function OnLinkedInLoad() {
  IN.Event.on(IN, 'auth', OnLinkedInAuth);
}

function OnLinkedInAuth() {
  IN.API.Profile('me').fields('id', 'first-name', 'last-name', 'headline', 'location', 'picture-url', 'public-profile-url', 'email-address').result(getProfile).error(onError);
  console.log('accede a su perfil');
}

function onError(error) {
  console.log('error');
}

function getProfile(profile) {
  console.log('muestra datos de usuario');
}