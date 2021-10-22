$("#submit").click(() => {
    if (!localStorage) return alert("Web storage unavailable");
    localStorage.setItem;
});

class Member {
    constructor(username, id, password, email, mobile) {
        this.username = username;
        this.id = id;
        this.password = password;
        this.email = email;
        this.mobile = mobile;
    }
}

document["signup-form"].onsubmit = function () {
    return true;
};

const submit = () => {
    const member = getUserInput();
    const members = JSON.parse(localStorage.getItem("members")) ?? [];
    members.push(member);
    localStorage.setItem("members", JSON.stringify(members));
    alert("회원가입 완료");
    location.href = "./index.html";
};

const getUserInput = () => {
    return new Member(
        username.value,
        id.value,
        password.value,
        email.value,
        mobile.value,
    );
};
