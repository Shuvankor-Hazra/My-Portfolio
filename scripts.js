const submitButton = document.getElementById("submit-button");

const nameInput = document.getElementById("input-name");
const emailInput = document.getElementById("input-email");
const textInput = document.getElementById("input-text");
const errorText = document.getElementById("error-text");
const sendDiv = document.getElementById("send-div");

submitButton.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const textValue = textInput.value;

  const templateParams = {
    nameValue: nameValue,
    emailValue: emailValue,
    textValue: textValue,
  };

  if (nameValue && emailValue && textValue) {
    errorText.innerText = "";
    sendDiv.innerText = "Message sent successfully!";
    nameInput.value = "";
    emailInput.value = "";
    textInput.value = "";
    emailjs.send(
      "service_4evss5d",
      "template_2g8fq0j",
      templateParams,
      "3xd1VyeW9RbKVVGor"
    );
  } else {
    errorText.innerText = "Please fill the all field!";
    sendDiv.innerText = "";
  }
});
