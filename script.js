const messages = [
    "Ești sigură?",
    "Sigur sigur??",
    "Chiar...?",
    "Bebe...",
    "Nu vrei sa te mai gândești?",
    "O să fiu foarte trist..",
    "Te rog spune da...",
    "O sa fac urat..",
    "Ok o să mă opresc...",
    "Glumeam, acum APASĂ DA"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}