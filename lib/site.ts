/**
 * Where customer inquiries go, and the address published on the site.
 *
 * Back on hello@proofshotpro.com now that Cloudflare Email Routing forwards it to a
 * live inbox and it has been cleared from Resend's suppression list. It previously
 * hard-bounced because the domain's Google Workspace had been discontinued, leaving
 * stale MX records behind.
 */
export const CONTACT_EMAIL = "hello@proofshotpro.com";

/** Sender for transactional mail. Must stay on the Resend-verified sending domain. */
export const MAIL_FROM = "ProofShot Pro <noreply@proofshotpro.com>";
