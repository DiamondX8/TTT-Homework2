
import jsPDF from "jspdf";
import { Get_font_th } from "./pdf_font";

function Examplereport(params) {


    const doc = new jsPDF("p", "mm", "a4");


    doc.addFileToVFS("THSarabunNew.ttf", Get_font_th());
    doc.addFont("THSarabunNew.ttf", "THSarabunNew", "bold");
    doc.setFont("THSarabunNew", 'bold');

    let hpage = 18;
    doc.rect(10,hpage,190*0.1,10);
    doc.text(10+((190*0.1)/2),hpage+(10/2),'no.','center');

    doc.rect(10+(190*0.1),hpage,190*0.1,10);
    doc.text(10+(190*0.1)+((190*0.1)/2),hpage+(10/2),'customer','center');

    doc.rect(10+(190*0.1)+(190*0.1),hpage,190*0.2,10);
    doc.text(10+(190*0.1)+(190*0.1)+((190*0.2)/2),hpage+(10/2),'product','center');

    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2),hpage,190*0.2,10);
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+((190*0.2)/2),hpage+(10/2),'item','center');

    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2),hpage,190*0.2,10);
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpage+(10/2),'price','center');

    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2),hpage,190*0.2,10);
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpage+(10/2),'sum','center');

    let a = 0;
    let b = 0;
    const c = new Set();
    let d = 0;

    hpage+=10
    for(let index = 0; index<params.length; index++){
        const element = params[index];
        a = element.item.toString()*element.price.toString();
        b += element.price;
        c.add(element.customer);
        d += a;
        if(hpage>280){
            doc.addPage()
            hpage=10
        }



        if(index%2===0){
            doc.setFillColor(255,0,155);
            doc.rect(10,hpage,190*0.1,10,'DF');
    doc.text(10+((190*0.1)/2),hpage+(10/2),`${index+1}`,'center');

    doc.setFillColor(255,0,155);
    doc.rect(10+(190*0.1),hpage,190*0.1,10,'DF');
    doc.text(10+(190*0.1)+((190*0.1)/2),hpage+(10/2),element.customer,'left');

    doc.setFillColor(255,0,155);
    doc.rect(10+(190*0.1)+(190*0.1),hpage,190*0.2,10,'DF');
    doc.text(10+(190*0.1)+(190*0.1)+((190*0.2)/2),hpage+(10/2),element.product,'left');

    doc.setFillColor(255,0,155);
    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2),hpage,190*0.2,10,'DF');
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+((190*0.2)),hpage+(10/2),element.item.toString(),'right');

    doc.setFillColor(255,0,155);
    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2),hpage,190*0.2,10,'DF');
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+((190*0.2)),hpage+(10/2),element.price.toString(),'right');

    doc.setFillColor(255,0,155);
    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2),hpage,190*0.2,10,'DF');
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpage+(10/2),a.toString(),'center');

    hpage+=10;
        }else{
            doc.rect(10,hpage,190*0.1,10);
    doc.text(10+((190*0.1)/2),hpage+(10/2),`${index+1}`,'center');

    doc.rect(10+(190*0.1),hpage,190*0.1,10);
    doc.text(10+(190*0.1)+((190*0.1)/2),hpage+(10/2),element.customer,'left');

    doc.rect(10+(190*0.1)+(190*0.1),hpage,190*0.2,10);
    doc.text(10+(190*0.1)+(190*0.1)+((190*0.2)/2),hpage+(10/2),element.product,'left');

    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2),hpage,190*0.2,10);
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+((190*0.2)),hpage+(10/2),element.item.toString(),'right');

    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2),hpage,190*0.2,10);
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+((190*0.2)),hpage+(10/2),element.price.toString(),'right');

    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2),hpage,190*0.2,10);
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpage+(10/2),a.toString(),'center');

    hpage+=10;
        }
    
    }
    let e = d/c.size;
    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2),hpage,190*0.2,10);
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+(190*0.2)+((190*0.2)/2),hpage+(10/2),e.toString(),'center');

    doc.rect(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2),hpage,190*0.2,10);
    doc.text(10+(190*0.1)+(190*0.1)+(190*0.2)+(190*0.2)+((190*0.2)),hpage+(10/2),b.toString(),'right');



window.open(doc.output('bloburl'))
    


}
    export default Examplereport;