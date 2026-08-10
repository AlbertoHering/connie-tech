/**
 * Google Apps Script — Connietech Lead Collector
 *
 * Setup:
 * 1) Create a Google Sheet with headers:
 *    Timestamp | Name | Company | Email | Phone | Project Type | Budget | Timeline | Location | Description | Questions | How Heard
 * 2) Open Extensions > Apps Script and paste this code.
 * 3) In Code.gs, set SHEET_ID and NOTIFY_EMAIL below.
 * 4) Deploy > New deployment > Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5) Copy the Web app URL and set it as PUBLIC_FORMS_ENDPOINT in the site .env
 */

const SHEET_ID = 'PASTE_YOUR_SHEET_ID';
const NOTIFY_EMAIL = 'connie@connietech.com';

function doPost(e) {
  try {
    const data = e.parameter || {};
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    const row = [
      new Date(),
      data.name || '',
      data.company || '',
      data.email || '',
      data.phone || '',
      data.type || '',
      data.budget || '',
      data.timeline || '',
      data.location || '',
      data.description || '',
      data.questions || '',
      data.ref || ''
    ];
    sheet.appendRow(row);

    // Send notification email
    const subject = 'New Connietech Lead';
    const body = Object.keys(data).map(k => `${k}: ${data[k]}`).join('\n');
    MailApp.sendEmail(NOTIFY_EMAIL, subject, body);

    return ContentService.createTextOutput('OK').setMimeType(ContentService.MimeType.TEXT);
  } catch (err) {
    return ContentService.createTextOutput('ERR').setMimeType(ContentService.MimeType.TEXT);
  }
}
