   /*checkForm*/
// function checkForm(){
//     var name = document.forms.myForm.name.value;
//     var email = document.forms.myForm.email.value;
//     var phone = document.forms.myForm.phone.value;
//     var title = document.forms.myForm.title.value;
//     var message = document.forms.myForm.message.value;
//     var regExpMail = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
//     var regExpPhone = /((09|03|07|08|05)+([0-9]{8})\b)/;
//     var regExpName = /^([a-zA-Z].*[\s\.]*){2,30}$/;
//     var regExpTitle = /^([a-zA-Z].*[\s\.]*){2,30}$/;
    
//     if(name == ""){
//         alert("nhap ten vao nhe");
//         return false;
//     }else if(!regExpName.test(name)){
//         alert("nhap lai ten cho dung dinh dang nhe");
//         return false;
//     }else if(email == ""){
//         alert("phai nhap email");
//         return false;
//     }else if(!regExpMail.test(email)){
//         alert("nhap email dung dinh dang co @ va .com");
//         return false;
//     }else if(phone == ""){
//         alert("phai nhap sdt vao nhe");
//         return false;
//     }else if(!regExpPhone.test(phone)){
//         alert("Nhap so dien thoai du 10 so va bat dau bang 09|03|07|08|05");
//         return false;
//     }else if(title == "" ){
//         alert("phai nhap tieu de");
//         return false;
//     }else if(!regExpTitle.test(title)){
//         alert("nhap lai tieu de dung dinh dang");
//         return false;
//     }

//     alert("nhap thanh cong");

//     console.log(name);
//     console.log(email);
//     console.log(phone);
//     console.log(title);
//     console.log(message);
//     return false;
// }   


function checkForm() {
    let formData = document.forms.myForm;
    var name = formData.name;
    var email = formData.email;
    var phone = formData.phone;
    var title = formData.title;
    var message = formData.message;
    // const regExp = [/^([a-zA-Z].*[\s\.]*){2,30}$/,
    //                 /^[A-Za-z][\w$.]+@[\w]+\.\w+$/,
    //                 /((09|03|07|08|05)+([0-9]{8})\b)/g,
    //                 /^([a-zA-Z].*[\s\.]*){2,100}$/];

    let errorMsg = '';

    let errorName = validate(name, /^([a-zA-Z].*[\s\.]*){2,30}$/);
    if (errorName !== true) {
        errorMsg += errorName;
    }
    let errorEmail = validate(email, /^[A-Za-z][\w$.]+@[\w]+\.\w+$/);
    if (errorEmail !== true) {
        errorMsg += errorEmail;
    }
    let errorPhone = validate(phone, /((09|03|07|08|05)+([0-9]{8})\b)/g);
    if (errorPhone !== true) {
        errorMsg += errorPhone;
    }
    let errorTitle = validate(title, /^([a-zA-Z].*[\s\.]*){2,100}$/);
    if (errorTitle !== true) {
        errorMsg += errorTitle;
    }
    if (errorMsg !== '') {
        alert(errorMsg);
    } else {
        alert("Nhập thành công");
    }

    // if (validate(name, regExp[0]) && validate(email, regExp[1]) && validate(phone, regExp[2]) && validate(title, regExp[3])) {
    //     alert("Nhập thành công");
    //     console.log(name.value);
    //     console.log(email.value);
    //     console.log(phone.value);
    //     console.log(title.value);
    //     console.log(message.value);      
    // }
    return false;
}

function validate(input, regExp) {
    if (input.value == "") {
        return "Vui lòng nhập vào ô " + input.name + "\n";
    } else if (!(regExp.test(input.value))) {
        return "Vui lòng nhập lại định dạng ô " + input.name + "\n";
    }
    return true;
}