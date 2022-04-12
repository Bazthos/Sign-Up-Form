let submit = document.querySelector('.submit');
const empty = document.querySelectorAll(".text");
const errortext = document.querySelectorAll('.empty');
const mail = document.getElementById('mail');
let masque1 = /@/g;
let masque2 = /\....$/gi;

function emptyclass(element){
    element.classList.add('input_empty');
    element.nextElementSibling.classList.remove('none');
}

function validclass(e){
    e.classList.remove('input_empty');
    e.nextElementSibling.classList.add('none');
}

function valid(){
    let isValid = true;
    empty.forEach((e, i) => {
        if(e.value==''){
            emptyclass(e);
            isValid = false;
        }else{
            validclass(e);
        }
    })
    if(mail.value.search(masque1) == -1 || mail.value.search(masque2) == -1){
        emptyclass(mail);
        isValid = false;
    }else{
        validclass(mail);
    }
    return isValid;
}

submit.addEventListener('click', (form) => {
    form.preventDefault();
    let isValid = valid();
    if (isValid) {
        document.querySelector('form').reset();
        empty.forEach((e) => {
            if(e.classList.contains('input_empty')){
                validclass(e);
            }
        })
    }
})