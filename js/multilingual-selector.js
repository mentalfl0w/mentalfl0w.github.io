function clickLang() {
    details = document.querySelector("#lang-details");
    switch (details.style.display) {
        case 'none':
            details.style.display = 'block';
            setTimeout(() =>
                document.addEventListener('click', closeSelector, {once: true}), 1);
            break;
        case 'block':
            details.style.display = 'none';
            break;
    }
}

function openSelector() {
    details = document.querySelector("#lang-details");
    details.style.display = 'block';
}

function closeSelector(elem) {
    details = document.querySelector("#lang-details");
    details.style.display = 'none';
}