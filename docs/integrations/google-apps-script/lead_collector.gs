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
const SHEET_NAME = 'Sheet1'; // change if needed
const NOTIFY_EMAIL = 'constanza.andrade@connie-tech.com';

function doPost(e) {
  try {
    // Support both form-urlencoded (recommended) and JSON bodies
    let data = e.parameter || {};
    if ((!data || Object.keys(data).length === 0) && e.postData?.type === 'application/json') {
      data = JSON.parse(e.postData.contents || '{}');
    }

    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.getActiveSheet();
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

    // Send notification email (optional)
    if (NOTIFY_EMAIL) {
      const subject = 'New Connietech Lead';
      const body = Object.keys(data).map(k => `${k}: ${data[k]}`).join('\n');
      MailApp.sendEmail(NOTIFY_EMAIL, subject, body);
    }

    const out = ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
    out.setHeader('Access-Control-Allow-Origin', '*');
    out.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    out.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return out;
  } catch (err) {
    const out = ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
    out.setHeader('Access-Control-Allow-Origin', '*');
    return out;
  }
}

function doOptions() {
  const out = ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
  out.setHeader('Access-Control-Allow-Origin', '*');
  out.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  out.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  return out;
}
