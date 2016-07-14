var form = document.forms.questions;

form.elements.name.oninput = function(e) {
    this.value = this.value.toUpperCase();
    console.log("Событие: " + e.type + " " + this.value);
};

form.elements.name.onchange = function(e) {
    console.log("Событие: " + e.type + " " + this.value);
};

form.onsubmit = function(e) {
    e.preventDefault();
    var errors = document.querySelector('p.errors');
    if(form.elements.name.value.length < 2) {
        errors.innerHTML = "Your name is too short";
        return;
    }
    if(form.elements.surname.value.length < 2) {
        errors.innerHTML = "Your surname is too short";
        return;
    }
    this.submit();
};