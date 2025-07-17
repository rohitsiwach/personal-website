import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const PDFDownload = ({ pageTitle }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadPDF = async () => {
    setIsGenerating(true);
    try {
      const content = document.querySelector('.detail-content');
      if (!content) {
        alert('Could not find content to download. Please try again.');
        setIsGenerating(false);
        return;
      }
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.style.width = '800px';
      tempContainer.style.backgroundColor = 'white';
      tempContainer.style.padding = '40px';
      tempContainer.style.fontFamily = 'Arial, sans-serif';
      tempContainer.style.fontSize = '12px';
      tempContainer.style.lineHeight = '1.6';
      tempContainer.style.color = '#333';
      const clonedContent = content.cloneNode(true);
      tempContainer.appendChild(clonedContent);
      document.body.appendChild(tempContainer);
      const canvas = await html2canvas(tempContainer, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: 800,
        height: tempContainer.scrollHeight,
        scrollX: 0,
        scrollY: 0,
      });
      document.body.removeChild(tempContainer);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      const fileName = `${pageTitle.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}.pdf`;
      pdf.save(fileName);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={downloadPDF}
      disabled={isGenerating}
      style={{
        background: isGenerating 
          ? '#6c757d' 
          : 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
        color: 'white',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '8px',
        cursor: isGenerating ? 'not-allowed' : 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '20px',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 8px rgba(102, 126, 234, 0.2)',
        opacity: isGenerating ? 0.7 : 1,
      }}
    >
      {isGenerating ? '⏳ Generating PDF...' : '📄 Download PDF'}
    </button>
  );
};

export default PDFDownload; 