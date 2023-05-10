function getDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var now = year + "-" + month + "-" + day;
    return now
}

function submitForm(){
    var name = document.getElementById("name").value;
    if (name == null || name.trim() == "") {
        // 结束
        return;
    }

    var sex = $("sex").value;
    if (sex == -1){
        $("validate").innerHTML = '请选择你的性别！';
        return;
    }

    var mail = document.getElementById("mail").value;
    if (mail == null || mail.trim() == "") {
        // 结束
        return;
    }

    var phone = document.getElementById("phone").value;
    if (phone == null || phone.trim() == "") {
        // 结束
        return;
    }

    var ip = document.getElementById("ip").value;
    if (ip == null || ip.trim() == "") {
        // 结束
        return;
    }

    // 设置表单提交的地址
    $("submit").action = "./index01.html";

    // 提交表单
    document.getElementById("submit").submit();
}