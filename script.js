function spoilCharacters() {
    const originalText = document.getElementById("originalText").value;
    let spoiledText = "";

    for (let i = 0; i < originalText.length; i++) {
        const char = originalText.charAt(i);
        if (char !== " ") {
            spoiledText += "||" + char + "||";
        } else {
            spoiledText += " "; 
        }
    }

    document.getElementById("spoiledText").value = spoiledText;
}

/* failed attempt at making a easter egg
document.addEventListener('keydown', (event) => {
    const keys = [];
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 
        'ArrowDown', 'ArrowDown', 
        'ArrowLeft', 'ArrowRight', 
        'ArrowLeft', 'ArrowRight', 
        'b', 'a'
    ];

    keys.push(event.key);

    if (keys.length > konamiCode.length) {
        keys.shift();
    }

    if (JSON.stringify(keys) === JSON.stringify(konamiCode)) {
        alert("boop!");
        keys.length = 0;
    }
});
*/
