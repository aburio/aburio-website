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
