export default class Reset {
    constructor() {
        this.btn = document.getElementById('reset');
    }

    onClick(callback) {
        this.btn.onclick = () => {
            this.btn.style.display = "none";
            callback();
        }
    }
}