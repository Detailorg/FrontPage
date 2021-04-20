const token = "fbb71673-ddf8-431e-b288-57d66620ceef";
const $formContact = document.querySelector("#contact-form");

const sendForm = event => {
  event.preventDefault();
  const message = {
    name: document.querySelector("#form-name").value,
    email: document.querySelector("#form-email").value,
    text: document.querySelector("#form-message").value
  };
  smtpJS(message);
};
const smtpJS = message => {
  try {
    if (navigator.onLine) {
        Email.send(
            "info@detailorg.com",
            "info@detailorg.com",
            `${message.name} - ${message.email}`,
            message.text,
            { token }
        );
        document.getElementById("ContactChange").innerHTML = "<h2 style='background-color:#149641; border-radius:30px; text-align: center; padding: 5px;'>¡Gracias por tu mensaje!</h2>";
        document.getElementById("SendButtonDiv").style = "cursor: not-allowed;";
        document.getElementById("SendButton").style = "pointer-events: none;";
        document.getElementById("form-name").style = "pointer-events: none;";
        document.getElementById("form-name-div").style = "cursor: not-allowed;";
        document.getElementById("form-email").style = "pointer-events: none;";
        document.getElementById("form-email-div").style = "cursor: not-allowed;";
        document.getElementById("form-message").style = "pointer-events: none;";
        document.getElementById("form-message-div").style = "cursor: not-allowed;";
    } else {
        document.getElementById("ContactChange").innerHTML = "<h2 style='background-color:#F59BA1; border-radius:30px; text-align: center; padding: 5px;'>¡Error! Recarga la página.</h2>";
    }
    
  } catch (e) {
    alert("Error, recarga la página porfavor, si el problema persiste envía un email a info@detailorg.com");
  }
};

$formContact.addEventListener("submit", sendForm);