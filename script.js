console.log(CryptoJS.AES);

(function() {
    let content;

    function load(contentJsonString) {
        content = JSON.parse(contentJsonString).content;

        const p = prompt("p");
        const value = CryptoJS.AES.decrypt(content, p).toString(CryptoJS.enc.Utf8);

        document.body.innerHTML = value;
    }

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            load(this.responseText);
        }
    }
    xhr.open("GET", "content.json");
    xhr.send();
})();
