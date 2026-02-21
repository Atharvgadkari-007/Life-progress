function lifeProgress() {

    var now = new Date();

    var hours = now.getHours();
    var todayPercent = Math.round((hours / 24) * 100);
    document.getElementById("todayPercent").innerText = todayPercent + "%";
    document.getElementById("todayInfo").innerText =
        hours + " hours passed out of 24";

    var day = now.getDay();
    var weekPercent = Math.round((day / 7) * 100);
    document.getElementById("weekPercent").innerText = weekPercent + "%";
    document.getElementById("weekInfo").innerText =
        "Day " + day + " of 7";

    var dob = document.getElementById("dob").value;
    if (dob != "") {

        var birthDate = new Date(dob);
        var age = now.getFullYear() - birthDate.getFullYear();

        document.getElementById("lifeInfo").innerText =
            "Age " + age + " years";
    }
}