/**
 * Bizex4U — brief intake.
 *
 * Appends every website form submission to this spreadsheet and emails
 * a notification. Paste this into a Google Apps Script project bound
 * to the Sheet you want the rows in, then deploy it as a Web App.
 *
 * Setup is in apps-script/SETUP.md.
 */

/* ------------------------------------------------------------------
   SETTINGS — change these two.
------------------------------------------------------------------- */

/* Where notifications go. Multiple addresses: "a@x.com,b@x.com". */
var NOTIFY_EMAIL = 'yash@bizex4u.com';

/* Must match BRIEF_WEBHOOK_TOKEN in the site's .env.local. Anyone who
   finds this web app URL can post to it otherwise — the token is what
   stops your Sheet filling with junk. Make it long and random. */
var SHARED_TOKEN = 'CHANGE-ME-to-a-long-random-string';

/* ------------------------------------------------------------------
   The columns, in order. Adding a field to the site means adding it
   here too; anything not listed is ignored rather than silently
   shifting every other column.
------------------------------------------------------------------- */

var COLUMNS = [
  'Received',
  'Brand',
  'Name',
  'Role',
  'Market',
  'Enquiry about',
  'Message',
  'Holding',          // barter selector
  'Rough value',      // barter selector
  'Markets',          // barter selector
  'Source',
  'Page'
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    if (SHARED_TOKEN && data.token !== SHARED_TOKEN) {
      return json({ ok: false, error: 'bad_token' });
    }
    if (!data.brand || !data.person) {
      return json({ ok: false, error: 'brand_and_name_required' });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    ensureHeader_(sheet);

    /* Timestamp in IST rather than the script's locale, so the column
       matches the working day everyone here is actually in. */
    var received = Utilities.formatDate(
      new Date(), 'Asia/Kolkata', 'yyyy-MM-dd HH:mm:ss'
    );

    sheet.appendRow([
      received,
      data.brand || '',
      data.person || '',
      data.role || '',
      data.market || '',
      data.context || '',
      data.detail || '',
      data.holding || '',
      data.value || '',
      data.markets || '',
      data.source || 'brief',
      data.page || ''
    ]);

    notify_(data, received);
    return json({ ok: true });

  } catch (err) {
    /* Visible under Executions in the Apps Script editor. */
    console.error(err);
    return json({ ok: false, error: String(err) });
  }
}

/* A GET is handy for checking the deployment is live from a browser. */
function doGet() {
  return json({ ok: true, service: 'bizex4u-brief-intake' });
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow(COLUMNS);
  sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight('bold');
  sheet.setFrozenRows(1);
}

function notify_(data, received) {
  if (!NOTIFY_EMAIL) return;

  var subject = 'New brief — ' + data.brand +
    (data.context ? ' — ' + data.context : '');

  var rows = [
    ['Brand', data.brand],
    ['Name', data.person],
    ['Role', data.role],
    ['Market', data.market],
    ['Enquiry about', data.context],
    ['Holding', data.holding],
    ['Rough value', data.value],
    ['Markets', data.markets],
    ['Source', data.source],
    ['Page', data.page],
    ['Received', received + ' IST']
  ].filter(function (r) { return r[1]; });

  var html =
    '<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;font-size:15px;color:#1b1030">' +
    '<p style="margin:0 0 16px">New brief from the website.</p>' +
    '<table cellpadding="0" cellspacing="0" style="border-collapse:collapse">' +
    rows.map(function (r) {
      return '<tr>' +
        '<td style="padding:6px 18px 6px 0;color:#4a3f5e;white-space:nowrap;vertical-align:top">' +
          escapeHtml_(r[0]) + '</td>' +
        '<td style="padding:6px 0"><strong>' + escapeHtml_(r[1]) + '</strong></td>' +
      '</tr>';
    }).join('') +
    '</table>' +
    (data.detail
      ? '<p style="margin:20px 0 6px;color:#4a3f5e">What they said</p>' +
        '<p style="margin:0;white-space:pre-wrap">' + escapeHtml_(data.detail) + '</p>'
      : '') +
    '</div>';

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: subject,
    htmlBody: html,
    /* Replying goes to you, not to the script's owner address. */
    name: 'Bizex4U website'
  });
}

function escapeHtml_(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
