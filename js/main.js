$("#signup-btn").click((e) => {
    const URL = "./signup.html";
    $("#content").load(URL, function (res, status, xhr) {
        if (status == "success") {
            // console.log("Load successful" + JSON.stringify(xhr));
            console.log("Load successful");
            $("#signup-button").click();
        } else console.log("Load Error");
    });
});

$("#list-members-btn").click((e) => {
    const URL = "./memberList.html";
    $("#content").load(URL, function (res, status, xhr) {
        if (status == "success") {
            const $tbody = $("tbody");
            const members = JSON.parse(localStorage.getItem("members"));
            members.forEach((member) => {
                const $tr = $tbody.append("<tr></tr>").children().last();
                delete member.password;
                for (const key in member) $tr.append(`<td>${member[key]}</td>`);
            });
        } else console.log("Load Error");
    });
});

$("#introduction-btn").click((e) => {
    const URL = "./introduction.html";
    $("#content").load(URL, function (res, status, xhr) {
        if (status == "success") {
            console.log("Load successful");
        } else console.log("Load Error");
    });
});

$("#roadmap-btn").click((e) => {
    const URL = "./roadmap.html";
    $("#content").load(URL, function (res, status, xhr) {
        if (status == "success") {
            console.log("Load successful");
        } else console.log("Load Error");
    });
});

$("#interests-btn").click((e) => {
    const URL = "./interests.html";
    $("#content").load(URL, function (res, status, xhr) {
        if (status == "success") {
            console.log("Load successful");
        } else console.log("Load Error");
    });
});
