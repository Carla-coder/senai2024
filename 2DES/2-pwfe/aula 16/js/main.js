// Para fazer o Login

function loginWithGitHub() {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=9efdc218c4387de1cefa&scope=user';
}

const urlParams = new URLSearchParams(window.location.search);
const error = urlParams.get('error');
if(error === 'access_denied') {
    window.location.href = 'index.html';
}
