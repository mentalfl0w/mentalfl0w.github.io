function clickToc() {
    details = document.querySelector("#toc-details");
    switch (details.style.display) {
        case 'none':
            details.style.display = 'block';
            setTimeout(() =>
                document.addEventListener('click', closeToc, {once: true}), 1);
            break;
        case 'block':
            details.style.display = 'none';
            break;
    }
}

function openToc() {
    details = document.querySelector("#toc-details");
    details.style.display = 'block';
}

function closeToc() {
    details = document.querySelector("#toc-details");
    details.style.display = 'none';
}

function getToc() {
    const hs = document.querySelector('.markdown-body').querySelectorAll('h1, h2, h3, h4, h5, h6');
    const toc_list = document.querySelector("#toc-list");
    for (const h of hs) {
        const size = Number(h.tagName.toLowerCase().replace('h', ''));
        const a = document.createElement('a');
        a.classList.add("filter-item", "SelectMenu-item", "ws-normal", "wb-break-word", "line-clamp-2", "py-1", "toc-item");
        a.href = `#${h.id}`;
        a.innerText = h.innerText;
        a.style.paddingLeft = `${size * 12}px`;
        toc_list.appendChild(a);
    }
}


// TODO: highlight on scroll
(() => {
    getToc();
})();
