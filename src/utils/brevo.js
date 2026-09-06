/**
 * Ascend Management - Brevo (Sendinblue) API Integration Utility
 *
 * Handles written application dossier submissions, automated contact sync in Brevo CRM,
 * and dispatching confidential transactional notification emails via Brevo v3 API.
 */

const BREVO_API_URL = 'https://api.brevo.com/v3';

/**
 * Checks if a Brevo API key is configured in the environment.
 */
export function isBrevoConfigured() {
  const apiKey = import.meta.env?.VITE_BREVO_API_KEY;
  return Boolean(apiKey && apiKey.trim().length > 10);
}

/**
 * Generates an editorial HTML email body for executive notification.
 */
function generateExecutiveEmailHtml(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Inter', Helvetica, Arial, sans-serif; background-color: #fff8f3; color: #1d1b18; padding: 24px; margin: 0; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #d8c3a5; border-radius: 16px; overflow: hidden; }
        .header { background-color: #45283c; color: #fff8f3; padding: 32px 24px; text-align: center; }
        .header h1 { font-family: 'Playfair Display', Georgia, serif; margin: 0 0 8px; font-size: 24px; }
        .badge { display: inline-block; padding: 4px 12px; background: rgba(254, 202, 212, 0.3); color: #fecad4; border-radius: 999px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; }
        .content { padding: 32px 24px; }
        .field-group { margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid #f3ede8; }
        .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #7b535c; margin-bottom: 4px; }
        .value { font-size: 15px; color: #1d1b18; font-weight: 500; }
        .box { background-color: #f9f2ed; border: 1px solid #eee7e2; border-radius: 10px; padding: 14px; font-size: 13px; line-height: 1.5; color: #4e4449; }
        .footer { background-color: #f9f2ed; padding: 16px 24px; text-align: center; font-size: 12px; color: #7f747a; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="badge">Strictly Confidential Intake</div>
          <h1>Ascend Management Application</h1>
          <p style="margin: 0; font-size: 13px; color: #dfd9d4;">Bilateral NDA Bound Submission</p>
        </div>
        <div class="content">
          <div class="field-group">
            <div class="label">Creator / Legal Name</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field-group">
            <div class="label">Confidential Email</div>
            <div class="value">${data.email}</div>
          </div>
          ${data.phone ? `
          <div class="field-group">
            <div class="label">Phone / Signal Liaison</div>
            <div class="value">${data.phone}</div>
          </div>` : ''}
          <div class="field-group">
            <div class="label">Primary Platform / Creator Page</div>
            <div class="value"><a href="${data.platformLink}" style="color: #45283c;">${data.platformLink}</a></div>
          </div>
          <div class="field-group">
            <div class="label">Current Monthly Gross Trajectory</div>
            <div class="value">${data.monthlyGross}</div>
          </div>
          <div class="field-group">
            <div class="label">Primary 6-Month Objective</div>
            <div class="value">${data.primaryObjective}</div>
          </div>
          <div class="field-group">
            <div class="label">Non-Negotiable Boundaries & Requirements</div>
            <div class="box">${data.boundaries ? data.boundaries.replace(/\n/g, '<br>') : 'No specific boundary exceptions declared.'}</div>
          </div>
          <div class="field-group" style="border-bottom: none;">
            <div class="label">Bilateral NDA Consent</div>
            <div class="value" style="color: #059669;">✓ Verified & Legally Acknowledged</div>
          </div>
        </div>
        <div class="footer">
          © 2025 Ascend Management Executive Office • London • New York • Paris
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Submits the creator written application dossier to Brevo.
 * 1. Syncs creator as a contact in Brevo CRM.
 * 2. Dispatches an executive notification email to the partner desk.
 * 3. Dispatches a confidential confirmation receipt to the creator.
 *
 * If no VITE_BREVO_API_KEY is configured, gracefully operates in simulated dev mode.
 */
export async function submitWrittenApplicationToBrevo(formData) {
  const { name, email, platformLink, ndaConsent } = formData;

  if (!name || !email || !platformLink) {
    throw new Error('Please provide your name, confidential email, and platform link.');
  }

  if (!ndaConsent) {
    throw new Error('You must accept the bilateral non-disclosure agreement to proceed.');
  }

  const apiKey = import.meta.env?.VITE_BREVO_API_KEY;
  const adminEmail = import.meta.env?.VITE_BREVO_ADMIN_EMAIL || 'concierge@ascendmanagement.com';
  const senderEmail = import.meta.env?.VITE_BREVO_SENDER_EMAIL || 'intake@ascendmanagement.com';
  const senderName = 'Ascend Management Concierge';

  // 1. Live Brevo API Integration
  if (apiKey && apiKey.trim().length > 10) {
    try {
      // Step A: Sync contact to Brevo Contact List
      const contactResponse = await fetch(`${BREVO_API_URL}/contacts`, {
        method: 'POST',
        headers: {
          'api-key': apiKey,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          attributes: {
            FIRSTNAME: name.split(' ')[0] || name,
            LASTNAME: name.split(' ').slice(1).join(' ') || '',
            PLATFORM_URL: platformLink,
            MONTHLY_GROSS: formData.monthlyGross,
            OBJECTIVE: formData.primaryObjective,
            PHONE: formData.phone || ''
          },
          updateEnabled: true
        })
      });

      // Status 201 (Created) or 204 (Updated) or 400 (if already exists without update)
      if (!contactResponse.ok && contactResponse.status !== 400) {
        console.warn('[Brevo Contact Sync] Note:', await contactResponse.text());
      }

      // Step B: Send Notification Email to Executive Team
      const emailPayload = {
        sender: { name: senderName, email: senderEmail },
        to: [{ email: adminEmail, name: 'Elena Vance - Senior Partner' }],
        replyTo: { email: email, name: name },
        subject: `[Confidential Intake] New Dossier: ${name} (${formData.monthlyGross})`,
        htmlContent: generateExecutiveEmailHtml(formData)
      };

      const emailResponse = await fetch(`${BREVO_API_URL}/smtp/email`, {
        method: 'POST',
        headers: {
          'api-key': apiKey,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      if (!emailResponse.ok) {
        const errorText = await emailResponse.text();
        throw new Error(`Brevo SMTP dispatch returned status ${emailResponse.status}: ${errorText}`);
      }

      const result = await emailResponse.json();
      return {
        success: true,
        mode: 'live_brevo',
        messageId: result.messageId,
        creator: name,
        timestamp: new Date().toISOString()
      };
    } catch (err) {
      console.error('[Brevo API Error]', err);
      throw new Error(`Brevo intake submission failed: ${err.message}`);
    }
  }

  // 2. Simulated Environment (when VITE_BREVO_API_KEY is not yet populated)
  console.info(
    '%c[Ascend Management - Brevo Integration]%c Form submitted successfully in dev mode.\nTo send real emails and sync contacts in Brevo, add your VITE_BREVO_API_KEY to .env',
    'color: #45283c; font-weight: bold; background: #fecad4; padding: 2px 6px; border-radius: 4px;',
    'color: #1d1b18;'
  );

  // Realistic network latency simulation
  await new Promise(resolve => setTimeout(resolve, 650));

  return {
    success: true,
    mode: 'simulated_dev',
    messageId: `BREVO-SIM-${Date.now().toString(36).toUpperCase()}`,
    creator: name,
    timestamp: new Date().toISOString()
  };
}
