/**
 * Single source of truth for site-wide constants.
 */

/**
 * Where customer inquiries go, and the address published on the site.
 *
 * NOT hello@proofshotpro.com — that domain's Google Workspace was discontinued, so its
 * MX records are stale and mail to it hard-bounces. Resend has since suppressed the
 * address. Once Cloudflare Email Routing forwards hello@proofshotpro.com to a live
 * inbox, change this one constant back and remove the address from Resend's suppression
 * list, or mail will keep being dropped before it is ever sent.
 */
export const CONTACT_EMAIL = "trey@clawsonbuilt.com";

/** Sender for transactional mail. Must stay on the Resend-verified sending domain. */
export const MAIL_FROM = "ProofShot Pro <noreply@proofshotpro.com>";
