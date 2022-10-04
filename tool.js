function calculate() {
    var cal = Math.random() * 90;
    cal = Math.floor(cal) + 10;

    var n1 = document.getElementById("input1").value;
    n1 = n1.toUpperCase();
    var n2 = document.getElementById("input2").value;
    n2 = n2.toUpperCase();
    if (n1 == "") {
        alert("Enetr your name");
        return;
    }

    if (n2 == "") {
        alert("Enetr your partner name");
        return;
    }

    document.getElementById("demo").innerHTML = "Love between " + n1 + " and " + n2 + " is " + cal;

    if (cal >= 90) {
        var s1 = "Bond between " + n1 + " and " + n2 + " is like Romeo & Juliot!";
        document.getElementById("suggestion").innerHTML = s1;
        return;
    } else if (cal < 90 && cal >= 80) {
        var s2 = "Bond between " + n1 + " and " + n2 + " is very strong and adorable!";
        document.getElementById("suggestion").innerHTML = s2;
        return;
    } else if (cal < 80 && cal >= 70) {
        var s3 = "Bond between " + n1 + " and " + n2 + " is FABULOUS!";
        document.getElementById("suggestion").innerHTML = s3;
        return;
    } else if (cal < 70 && cal >= 60) {
        var s4 = "Bond between " + n1 + " and " + n2 + " is VERY GOOD!";
        document.getElementById("suggestion").innerHTML = s4;
        return;
    } else if (cal < 60 && cal >= 50) {
        var s5 = "Bond between " + n1 + " and " + n2 + " is GOOD!";
        document.getElementById("suggestion").innerHTML = s5;
        return;
    } else if (cal < 50 && cal >= 40) {
        var s6 = "Bond between " + n1 + " and " + n2 + " is OK!";
        document.getElementById("suggestion").innerHTML = s6;
        return;
    } else if (cal < 40 && cal >= 30) {
        var s7 = "Bond between " + n1 + " and " + n2 + " is North & South!";
        document.getElementById("suggestion").innerHTML = s7;
        return;
    } else {
        document.getElementById("suggestion").innerHTML = "Need to work on it."
        return;
    }
}

// function gohome() {
//     window.location.href = "../index.html"
// }