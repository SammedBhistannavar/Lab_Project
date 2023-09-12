function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        number: document.getElementById("number").value,
    }
const serviceID = "service_tlha0ur";
const templateID ="template_pyoaf3e";

emailjs
.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("number").value ="";
        document.getElementById("message").value ="";
        console.log(res);
        
            swal("Successfull", "Your Data Successfully Received", "success");
        
    }
      )
    
 .catch((err) => console.log(err));
}

