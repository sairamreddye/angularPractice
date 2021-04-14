import { Component, ViewChildren, ElementRef,OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import * as $ from 'jquery';
import {jsPDF} from 'jspdf'

@Component({
  selector: 'app-converthtmltopdf',
  templateUrl: './converthtmltopdf.component.html',
  styleUrls: ['./converthtmltopdf.component.css']
})
export class ConverthtmltopdfComponent implements OnInit {
  tableData: ({ name: any; Rating: any; In: any; Angular: any; 9: any; } | { name: any; Rating?: undefined; In?: undefined; Angular?: undefined; 9?: undefined; })[];
  
  // @ViewChildren('content') content: ElementRef;

  constructor() { }

  ngOnInit() {
    this.tableData = [{name:1},{name:"Star Rating In Angular 9"},{name:"Angular"},{name:"Yasin sai ram"}]
  }

  name = 'Angular';

  // generatePDF() {
  //   var data = document.getElementById('contentToConvert');
  //   html2canvas(data).then(canvas => {
  //     var imgWidth = 208;
  //     var imgHeight = canvas.height * imgWidth / canvas.width;
  //     const contentDataURL = canvas.toDataURL('image/png')
  //     let pdf = new jspdf.jsPDF('p', 'mm', 'a4');
  //     var position = 0;
  //     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
  //     pdf.save('newPDF.pdf');
  //   });
   // // tslint:disable-next-line: variable-name
    // // tslint:disable-next-line: prefer-const
    // const htmlWidth = $("#contentToConvert").width();
    // const htmlHeight = $("#contentToConvert").height();
    // const topLeftMargin = 5;
    // const pdfWidth = htmlWidth + topLeftMargin * 2;
    // const pdfHeight = 1500;
    // // tslint:disable-next-line: variable-name
    // const canvasImageWidth = htmlWidth;
    // // tslint:disable-next-line: variable-name
    // const canvas_image_height = htmlHeight;

    // const totalPDFPages = Math.ceil(htmlHeight / pdfHeight) - 1;

    // html2canvas($("#contentToConvert")[0], {
    //   allowTaint: true,
    //   useCORS: true
    // }).then(canvas => {
    //   canvas.getContext("2d");

    //   const imgData = canvas.toDataURL("image/*", 1.0);
    //   const pdf = new jspdf.jsPDF("p", "pt", [pdfWidth, pdfHeight]);
    //   pdf.addImage(
    //     imgData,
    //     "png",
    //     topLeftMargin,
    //     topLeftMargin,
    //     canvasImageWidth,
    //     canvas_image_height
    //   );
    //   for (let i = 1; i <= totalPDFPages; i++) {
    //     pdf.addPage(pdfWidth, pdfHeight);
    //     pdf.addImage(
    //       imgData,
    //       "png",
    //       topLeftMargin,
    //       -(pdfHeight * i) + topLeftMargin * 4,
    //       canvasImageWidth,
    //       canvas_image_height
    //     );
    //   }

    //   pdf.save("brochure.pdf");
    // });
  // }

  async generatePDF() {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
    // Few necessary setting options
    var imgWidth = 208;
    var pageHeight = 295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
     
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('new-file.pdf'); // Generated PDF
    });
  }

}
