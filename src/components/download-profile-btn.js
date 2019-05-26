import React from "react";
import ReactDOM from "react-dom";

export default class DownloadProfileBtn extends React.Component {
  printThisDocument() {
    let mywindow = window.open("", "title", "height=400width=600");
    let strPrint = "";
    strPrint += "<html><thead>";
    strPrint +=
      '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />';
    strPrint += "</head><body>";
    strPrint += window.document.getElementByClass("container").innerHTML;
    strPrint += "</body></html>";

    // Print the document
    mywindow.document.write(strPrint);

    mywindow.print();
  }

  render() {
    return (
      <a
        className="btn btn-info bg-light text-danger float-right ml-2 mt-2 hidden-print"
        href="Resume.pdf"
      >
        <i class="fa fa-file-pdf-o fa-2x" />
      </a>
    );
  }
}
