import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "react-bootstrap";

export default function ExportPDF() {
  const handleDownloadPDF = () => {
    const input = document.getElementById("pdf-content");
    html2canvas(input, {
      useCORS: true,
      allowTaint: true,
      scrollY: -window.scrollY,
    }).then((canvas) => {
      const image = canvas.toDataURL("image/jpeg", 1.0);
      const doc = new jsPDF("p", "px", "a4");
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const widthRatio = pageWidth / canvas.width;
      const heightRatio = pageHeight / canvas.height;
      const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
      const canvasWidth = canvas.width * ratio;
      const canvasHeight = canvas.height * ratio;
      const marginX = (pageWidth - canvasWidth) / 2;
      const marginY = 0;

      doc.addImage(image, "JPEG", marginX, marginY, canvasWidth, canvasHeight);
      doc.output("dataurlnewwindow");
    });
  };
  return (
    <Button variant="primary" size="sm" onClick={handleDownloadPDF}>
        <FontAwesomeIcon icon={faCloudDownloadAlt} /> {" "}
        Download Resume
    </Button>
  );
}
