function pdf(){ 
  var doc = new jsPDF('portrait', 'pt', 'a4', true);    
    var elementHandler = {    
        '#ignorePDF': function(element, renderer) {    
            return true;    
        }    
    };    
    
    var source = document.getElementById("top-content");    
    doc.fromHTML(source, 15, 15, {    
        'width': 560,    
        'elementHandlers': elementHandler    
    });    
    
    var svg = document.querySelector('svg');    
    var canvas = document.createElement('canvas');    
    var canvasIE = document.createElement('canvas');    
    var context = canvas.getContext('2d');    
    
    
    
    
    var data = (new XMLSerializer()).serializeToString(svg);    
    canvg(canvas, data);    
    var svgBlob = new Blob([data], {    
        type: 'image/svg+xml;charset=utf-8'    
    });    
    
    var url = canvas.toDataURL(svgBlob);//DOMURL.createObjectURL(svgBlob);    
    
    var img = new Image();    
    img.onload = function() {    
        context.canvas.width = $('#testchart').find('svg').width();;    
        context.canvas.height = $('#testchart').find('svg').height();;    
        context.drawImage(img, 0, 0);    
        // freeing up the memory as image is drawn to canvas    
        //DOMURL.revokeObjectURL(url);    
    
        var dataUrl;    
        if (isIEBrowser()) { // Check of IE browser     
            var svg = $('#testchart').highcharts().container.innerHTML;    
            canvg(canvasIE, svg);    
            dataUrl = canvasIE.toDataURL('image/JPEG');    
        } else {    
            dataUrl = canvas.toDataURL('image/jpeg');    
        }    
        doc.addImage(dataUrl, 'JPEG', 20, 365, 560, 350); // 365 is top     
    
        var bottomContent = document.getElementById("bottom-content");    
        doc.fromHTML(bottomContent, 15, 750, {   //700 is bottom content top  if you increate this then you should increase above 365    
            'width': 560,    
            'elementHandlers': elementHandler    
        });    
    
        setTimeout(function() {    
            doc.save('HTML-To-PDF-Dvlpby-Bhavdip.pdf');    
        }, 2000);    
    };    
    img.src = url;    

} 
function isIEBrowser() {    
    var ieBrowser;    
    var ua = window.navigator.userAgent;    
    var msie = ua.indexOf("MSIE ");    
    
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // Internet Explorer    
    {    
        ieBrowser = true;    
    } else //Other browser    
    {    
        console.log('Other Browser');    
        ieBrowser = false;    
    }    
    
    return ieBrowser;    
};    