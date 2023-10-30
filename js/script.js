let date = new Date()
date.setTime((new Date().getTime()) - 60 * 1000)
let signup = document.querySelector(`#signup`)
let form = document.querySelector(`form`)
let hidden = document.querySelector(`.hidden`)
let Name = document.forms[0].Name;
let Email = document.forms[0].Email
let Login = document.forms[0].Login
let Password = document.forms[0].Password
let enterbutton = document.querySelector(`.enterbutton`);
let input = document.querySelectorAll(`input`)
let span = document.querySelector(`span`);
let square = document.querySelector(`.square`);
let username = document.querySelector(`.username`);

function Info(Name, Email, Login, Password) {
    this.Name = Name.value;
    this.Email = Email.value;
    this.Login = Login.value;
    this.Password = Password.value;
}

function valueChack(a) {
    let flag = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i].value == `` || (/^ /.test(a[i].value))) {
            a[i].style.border = `2px red solid`;
            flag++
        }
        else {
            // a[i].style.border = `2px green solid`;
        }
    }
    if (flag > 0) {
        return false;
    }
    else {
        return true;
    }
}

function LocalWrite() {
    if (LOcalCheck() && valueChack(input)) {
        let Information = new Info(Name, Email, Login, Password);
        let count;
        if (localStorage.getItem(`Count`) != null) {
            count = +localStorage.getItem(`Count`)
        }
        else {
            count = 0
        }
        localStorage.setItem(`Count`, `${count + 1}`)
        count = +localStorage.getItem(`Count`)
        let UserInfo = JSON.stringify(Information)
        localStorage.setItem(`USER${count}`, `${UserInfo}`)
        span.textContent = `Дякуємо, ви зареєстровані`;
        span.style.color = `#000`;
    }
    else {
        span.textContent = `Такий, користувач вже зареєстрований`;
        span.style.color = `red`;
        return
    }
}

function LOcalCheck() {//перевіряєм чи є такий логін/мило в локал при заповненні форми
    let flag = 0;

    for (let i = 1; i < localStorage.length; i++) {
        let check = localStorage.getItem(`USER${i}`);
        console.log(check)
        check = JSON.parse(check);
        console.log(check.Login)
        console.log(Login.value)
        if (localStorage.length > 0) {
            console.log(localStorage.getItem(`USER${i}`))
            if (check.Login == Login.value) {
                flag++;
                Login.style.border = `2px red solid`;

            }
            if (check.Login == Email.value) {
                Email.style.border = `2px red solid`;
                flag++

            }
        }
    }

    if (flag > 0) {

        return false;
    }
    else {
        return true;
    }

}

function SIGNupIN() {// кнопка сшпт шт/ап
    hidden.classList.toggle(`hidden`);
    if (signup.textContent == `Sign Up`) {
        signup.textContent = `Sign In`;
        square.style.right = `-7px`
    }
    else {
        signup.textContent = `Sign Up`;
        square.style.right = `-17px`
    }

}

function LOGIN(Password, Login) {
    for (let i = 1; i < localStorage.length; i++) {
        let check = localStorage.getItem(`USER${i}`);
        check = JSON.parse(check);
        if (check.Login == Login.value) {
            if (check.Password == Password.value) {
                document.cookie = `userLogin=${check.Login}; expires=${date};path=/`
                document.cookie = `userpassword=${check.Password}; expires=${date};path=/`
                document.cookie = `userName=${check.Name}; expires=${date};path=/`
                document.cookie = `userEmail=${check.Email}; expires=${date};path=/`
                return 1
            }
            else {
                return 2
            }
        }
    }
}

function cklick() {
    if (hidden.classList.contains(`hidden`)) {
        if (LOGIN(Password, Login) == 1) {
            window.open(`user.html`);
            return
        }
        else if (LOGIN(Password, Login) == 2) {
            Password.style.border = `1px solid red`
            span.textContent = `Введено невірний пароль`;
            return
        }
        else {
            span.textContent = `такого користувача не існує, зареєструйтеся`
            span.style.color="rgb(175, 91, 76)"
            Password.style.border = `1px solid red`
            Login.style.border = `1px solid red`
            return
        }
    }
    else {
        console.log(LOcalCheck())
        LocalWrite()
        SIGNupIN()
        Password.style.border = `1px solid green`
        Login.style.border = `1px solid green`
    }
}

enterbutton.addEventListener(`click`, (e) => {
    // valueChack(input)
    cklick()
})

signup.addEventListener(`click`, (e) => {
    SIGNupIN()

})









