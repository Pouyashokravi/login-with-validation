const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const sigininMsg = document.querySelector(".signin-status");
const siginBtn = document.querySelector(".signin-button");

siginBtn.addEventListener("click", signIn);

function signIn(event) {
    event.preventDefault();
    usernameMsg.innerText = "";
    passwordMsg.innerText = "";
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    let ifSendData = true;
     
    // اگه مقدار ورودی صفر بود یا توش اتساین یا نقطه یا کام نبود بیا متغیر ایف سند دیتا رو بزار فالس 
    // که برای آخرش برای فرستادن به دیتا اگه ترو بود بگیم بفرسته ولی اگه فالس بود نفرسته برای سرور
    if (usernameValue.length === 0 || usernameValue.indexOf("@") === -1 || usernameValue.indexOf(".") === -1 || usernameValue.indexOf("com") === -1) {
        usernameMsg.innerText = "Please enter a valid Email";
        ifSendData = false;
    }

    if (passwordValue.length === 0) {
        passwordMsg.innerText = "Please enter your password";
        ifSendData = false;
    } else if (passwordValue.length <= 4) {
        passwordMsg.innerText = "Your password is too short (minimum 4)";
        ifSendData = false;
    }

    // اگه دیتا ها درست بود و اوکی بود
    if (ifSendData) {
        const body = JSON.stringify({
            username: usernameValue,
            password: passwordValue,
        })
        const headers = {
            "Content-Type": "application/json"
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: body,
            headers: headers
        })
            .then(response => {
                if(response.ok) {
                    sigininMsg.innerText = "You signed in successfully"
                }
            })
    }
}