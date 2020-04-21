function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
const btn = document.getElementById('btn');
const ip = document.getElementsByClassName('ip');
btn.addEventListener('click',()=>{
    if(!validateEmail(ip[0].value))
    {
        console.log(document.getElementsByClassName('error')[0].style)
        document.getElementsByClassName('error')[0].style.display="block"
        document.getElementsByClassName('error1')[0].style.display="block"
    }
    else
    {
        document.getElementsByClassName('error')[0].style.display="none"
        document.getElementsByClassName('error1')[0].style.display="none"
    }
})