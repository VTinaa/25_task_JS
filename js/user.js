let username = document.querySelector(`.username`);
let avatar = document.querySelector(`.avatar`);
let avatarSP = document.querySelector(`.avatar span`);
let form = document.querySelector(`form`)
let hidden = document.querySelector(`.hidden`)
let Name = document.forms[0].Name;
let Email = document.forms[0].Email
let Login = document.forms[0].Login
let Password = document.forms[0].Password
let profile = document.querySelector(`.profile`)
let main = document.querySelector(`.main`)
let x = document.querySelector(`.x`)
let cookieObj = {}
function Cookies() {
    let cooks = document.cookie;
    cooks = JSON.stringify(cooks)
    cooks = JSON.parse(cooks)
    cooks = cooks.split(`; `)

    for (let i = 0; i < cooks.length; i++) {
        if (cooks[i] != 'undefined') {
            let str = cooks[i].split('=')
            cookieObj[str[0]] = str[1]
        }
    }
    username.textContent = cookieObj.userName
    avatarSP.textContent = cookieObj.userName[0]
    Name.value = cookieObj.userName
    Email.value = cookieObj.userEmail
    Login.value = cookieObj.userLogin
    Password.value = cookieObj.userpassword
}
Cookies()

avatar.addEventListener(`click`, (e) => {
    profile.classList.toggle(`hidden`)
    main.classList.toggle(`popup`)
})

x.addEventListener(`click`, (e) => {
    profile.classList.toggle(`hidden`)
    main.classList.toggle(`popup`)
})