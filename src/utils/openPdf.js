/**
 * Opens a PDF from public/pdfs/ in a new tab.
 * Vercel must not rewrite /pdfs/* to index.html — see vercel.json.
 */
export function openPdfUrl(url) {
  const win = window.open(url, '_blank', 'noopener,noreferrer');
  if (!win) {
    window.alert('Please allow pop-ups to view the PDF.');
  }
}
