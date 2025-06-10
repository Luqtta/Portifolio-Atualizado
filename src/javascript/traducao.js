function getUserLanguage() {
    return (navigator.language || navigator.userLanguage || 'en').toLowerCase();
}

function getCurrentLangFromPath() {
    return window.location.pathname.includes('pt-br') ? 'pt-br' :
           window.location.pathname.includes('en') ? 'en' : '';
}

function loadLanguageFile() {
    const userLang = getUserLanguage();
    const currentLang = getCurrentLangFromPath();

    if (!currentLang) {
        if (userLang.startsWith('pt-br')) {
            window.location.href = '/pt';
        } else {
            window.location.href = '/en';
        }
    }
}

document.addEventListener('DOMContentLoaded', loadLanguageFile);
