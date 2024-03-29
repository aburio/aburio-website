import "bootstrap";
import PDFObject from "pdfobject";

const pdfOptions = {
  fallbackLink:
    "This browser does not support inline PDFs. Please download the PDF to view it: <a href=[url]>Download PDF</a>",
  height: "50vh",
  pdfOpenParams: {
    view: "Fit",
    pagemode: "bookmarks",
    scrollbar: "1",
    toolbar: "1",
    statusbar: "0",
    messages: "0",
    navpanes: "0",
  },
};
const pdfContainer = document.getElementById("pdfViewer");

if (pdfContainer) {
  const sourceTag = pdfContainer.querySelector(
    'source[type="application/pdf"]'
  );
  if (sourceTag) {
    const pdfURL = sourceTag.getAttribute("src");
    PDFObject.embed(pdfURL, "#pdfViewer", pdfOptions);
  } else {
    console.error("PDF source tag not found");
  }
} else {
  console.error("PDF container not found");
}

document.addEventListener("DOMContentLoaded", () => {
  const date = new Date();
  const contactFormSubmit = document.getElementById("contactFormSubmit");
  const projects = document.querySelectorAll(".projectDetails");

  document.getElementById("copyright-year").innerHTML = date.getFullYear();

  contactFormSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    sendContactRequest();
  });

  projects.forEach(function (collapsible) {
    collapsible.addEventListener("hide.bs.collapse", function () {
      let header = collapsible.closest(".projectHeader");
      if (header) {
        scrollToElement(header);
      }
    });
  });
});

function scrollToElement(element) {
  const remValue = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  const marginInRem = 1;
  const margin = marginInRem * remValue;

  const bounding = element.getBoundingClientRect();
  const isInViewport =
    bounding.top >= -margin &&
    bounding.left >= -margin &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + margin &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) + margin;

  if (!isInViewport) {
    const yCoordinate = bounding.top + window.scrollY;
    window.scrollTo({
      top: yCoordinate - margin,
      behavior: "smooth",
    });
  }
}

function sendContactRequest() {
  var form = document.getElementById("form").elements;
  var name = /[A-Za-z]{1}[A-Za-z]/;
  var email = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
  var message = form.item(2).value;
  var data;
  var XHR = new XMLHttpRequest();

  try {
    grecaptcha
      .execute("6LdeHNwUAAAAAKZtaMMY5BAW37uzFNlEHZO9y29o", {
        action: "contact",
      })
      .then(function (token) {
        if (!name.test(form.item(0).value)) {
          alert("Name field is too short !");
          return;
        } else {
          name = form.item(0).value;
        }

        if (form.item(1).value === "") {
          alert("Please enter an e-mail address");
          return;
        } else if (!email.test(form.item(1).value)) {
          alert("Please enter a valid email address");
          return;
        } else {
          email = form.item(1).value;
        }

        if (message.length < 10) {
          alert("Message is too short, please be more precise !");
          return;
        }

        data = JSON.stringify({
          name: name,
          email: email,
          message: message,
          token: token,
        });

        XHR.addEventListener("load", function (event) {
          alert(
            "Your message as been successfuly send ! I will get back to you as soon as possible."
          );
          document.getElementById("form").reset();
        });

        XHR.addEventListener("error", function (event) {
          alert(
            "Oups! Something wrong append. Please try to resend your message."
          );
        });

        XHR.open(
          "POST",
          "https://ennsa7847f.execute-api.eu-west-1.amazonaws.com/production/contact"
        );
        XHR.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        XHR.send(data);
      });
  } catch (error) {
    console.error(error);
  }
}
