"use strict";
let nameR = []
let no = []
let value = []
let t = []
let table;
function add() {
    const nt = document.getElementById("stuff").value;
    const not = document.getElementById("no").value;
    const valuet = document.getElementById("cost").value;
    const tt = +not * +valuet;
    nameR.push(nt);
    no.push(not);
    value.push(valuet);
    t.push(tt);
    table = "";
    table = "<table border='1'><tr><td>ردیف</td><td>نام</td><td>تعداد</td><td>قیمت واحد</td><td>قیمت کل</td><td colspan=" + 2 + ">ویرایش ها</td></tr>";
    for (let i = 0; i < nameR.length; i++) {
        table +=
            "<tr><td>" + parseInt(i + 1) + "</td><td>" + nameR[i] + "</td><td>" + no[i] + "</td><td>" + value[i] + "</td><td>" + t[i] + "</td><td><button onclick=del(" + i + ")>حذف</button><button onclick=showEdit(" + i + ")>ادیت</button></td></tr>";
    }
    table += "</table>";
    document.getElementById("table").innerHTML = table;
}
function del(index) {
    let table = "";
    let nameRT = []
    let noT = []
    let valueT = []
    let tT = []
    let indexer = 0;

    let a = confirm("آیا میخواهید کالای شماره " + parseInt(index + 1) + " را حذف کنید؟");
    if (a == true) {
        table = "<table border='1'><tr><td>ردیف</td><td>نام</td><td>تعداد</td><td>قیمت واحد</td><td>قیمت کل</td><td colspan=" + 2 + ">ویرایش ها</td></tr>";
        for (let i = 0; i < nameR.length; i++) {

            if (i != index) {
                nameRT.push(nameR[i]);
                noT.push(no[i]);
                valueT.push(value[i]);
                tT.push(t[i]);
                table =
                    table +
                    "<tr><td>" + parseInt(indexer + 1) + "</td><td>" + nameR[i] + "</td><td>" + no[i] + "</td><td>" + value[i] + "</td><td>" + t[i] + "</td><td><button onclick=del(" + indexer + ")>حذف</button><button onclick=showEdit(" + indexer + ")>ادیت</button></td></tr>"
                indexer++;
            }
        }
        nameR = nameRT
        no = noT
        value = valueT
        t = tT
        table += "</table>";
        document.getElementById("table").innerHTML = table;
    }
}
function showEdit(i) {
    let a = confirm("ایا میخواهید کالای شماره" + parseInt(i + 1) + " را ویرایش کنید؟");
    if (a == true) {
        document.getElementById("showadd").style.visibility = "hidden";
        document.getElementById("showEdit").style.visibility = "visible";
        document.getElementById("accedit").innerHTML = "<button onclick=edit(" + i + ") style=" + 'width: max-cntent;height: 30px;' + ">ویرایش</button>";
    }
    document.getElementById("stuffedit").value = nameR[i];
    document.getElementById("noedit").value = no[i];
    document.getElementById("costedit").value = value[i];
    document.getElementById("stuffedit").className = "editColor"
    document.getElementById("noedit").className = "editColor"
    document.getElementById("costedit").className = "editColor"
}
function edit(index) {
    let nedit = document.getElementById("stuffedit").value;
    let noedit = document.getElementById("noedit").value;
    let valueedit = document.getElementById("costedit").value;
    let tedit = +noedit * +valueedit;


    let nameRT = []
    let noT = []
    let valueT = []
    let tT = []

    let table = "";
    table = "<table border='1'><tr><td>ردیف</td><td>نام</td><td>تعداد</td><td>قیمت واحد</td><td>قیمت کل</td><td colspan=" + 2 + ">ویرایش ها</td></tr>";
    for (let i = 0; i < nameR.length; i++) {
        if (i != index) {
            nameRT.push(nameR[i]);
            noT.push(no[i]);
            valueT.push(value[i]);
            tT.push(t[i]);
            table +=
                "<tr><td>" + parseInt(i + 1) + "</td><td>" + nameR[i] + "</td><td>" + no[i] + "</td><td>" + value[i] + "</td><td>" + t[i] + "</td><td><button onclick=del(" + i + ")>حذف</button><button onclick=showEdit(" + i + ")>ادیت</button></td></tr>";
        } else {
            nameRT.push(nedit);
            noT.push(noedit);
            valueT.push(valueedit);
            tT.push(tedit);
            table += "<tr><td>" + parseInt(i + 1) + "</td><td>" + nedit + "</td><td>" + noedit + "</td><td>" + valueedit + "</td><td>" + tedit + "</td><td><button onclick=del(" + i + ")>حذف</button><button onclick=showEdit(" + i + ")>ادیت</button></td></tr>";
        }
    }
    nameR = nameRT
    no = noT
    value = valueT
    t = tT
    table += "</table>";
    document.getElementById("table").innerHTML = table;

    document.getElementById("showadd").style.visibility = "visible";
    document.getElementById("showEdit").style.visibility = "hidden";
}
