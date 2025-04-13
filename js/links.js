const tagInput = document.getElementById("tagInput");
const urlInput = document.getElementById("urlInput");
const btnAdd = document.getElementById("btnAdd");
const linksDiv = document.getElementById("linksDiv");


function loadLinks() {
    const savedLinks = getStoredLinks();

    savedLinks.forEach(link => {
        showLink(link.tag, link.url);
    });
}


function getStoredLinks() {
    const localStorageKeys = Object.keys(localStorage);
    const links = [];

    localStorageKeys.forEach(key => {
        const url = localStorage.getItem(key);
        links.push({ tag: key, url: url });
    });

    return links;
}


function showLink(tag, url) {
    const linkElement = document.createElement('li');
    linkElement.id = tag;

    linkElement.innerHTML = `
        <a href="${url}" target="_blank">${tag}</a>
        <button class="btnDelete">X</button>
    `;

    const deleteButton = linkElement.querySelector('.btnDelete');
    deleteButton.addEventListener('click', () => deleteLink(tag, linkElement));

    linksDiv.appendChild(linkElement);
}


function deleteLink(tag, linkElement) {
    localStorage.removeItem(tag);
    linksDiv.removeChild(linkElement);
}

function addLink(tag, url) {
    if (!tag || !url) {
        alert("Por favor, ingresa tanto el nombre como la URL.");
        return;
    }

    if (localStorage.getItem(tag)) {
        const confirmReplace = confirm("Ya existe un link con este nombre. ¿Deseas reemplazarlo?");
        if (!confirmReplace) return;
    }

    localStorage.setItem(tag, url);
    showLink(tag, url);
    tagInput.value = '';
    urlInput.value = '';
}

btnAdd.addEventListener("click", () => {
    const tagValue = tagInput.value.trim();
    const urlValue = urlInput.value.trim();

    addLink(tagValue, urlValue);
});

window.addEventListener("DOMContentLoaded", loadLinks);
