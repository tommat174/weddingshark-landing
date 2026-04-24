import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — WeddingShark",
  description:
    "How WeddingShark collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout>
      <h1>Privacy Policy</h1>
      <p className="legal-meta">Last updated: April 23, 2026</p>

      <p>
        WeddingShark (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
        is a wedding vendor CRM mobile application operated by Tom Matthews, a
        sole proprietor based in New York, United States. This Privacy Policy
        explains how we collect, use, share, and protect your information when
        you use the WeddingShark mobile application (the &ldquo;App&rdquo;) and
        related services.
      </p>
      <p>
        By using WeddingShark, you agree to the practices described in this
        policy.
      </p>

      <hr />

      <h2>1. Information we collect</h2>

      <h3>Information you provide</h3>
      <ul>
        <li>
          <strong>Account information</strong>: your name, partner&rsquo;s
          name, email address, wedding date, wedding location
        </li>
        <li>
          <strong>Vendor information</strong>: vendors you research, save, and
          correspond with through the App
        </li>
        <li>
          <strong>Messages</strong>: subject lines, body content, and metadata
          of emails you send to or receive from vendors through the App
        </li>
        <li>
          <strong>Budget information</strong>: quotes, payments, and budget
          details you enter
        </li>
        <li>
          <strong>Photos and documents</strong>: any images or contracts you
          upload to vendor records
        </li>
      </ul>

      <h3>Information collected automatically</h3>
      <ul>
        <li>
          <strong>Device information</strong>: device type, operating system,
          and App version
        </li>
        <li>
          <strong>Usage data</strong>: features used, screens visited, and
          interactions within the App
        </li>
        <li>
          <strong>Log data</strong>: error reports and diagnostic information
        </li>
      </ul>

      <h3>Google user data (when you connect your Gmail account)</h3>
      <p>
        If you choose to connect your Google account, we access specific Gmail
        data via Google&rsquo;s OAuth 2.0 and the Gmail API. Specifically:
      </p>
      <ul>
        <li>
          <strong>Your connected Gmail address</strong>, used to send emails
          from your account on your behalf
        </li>
        <li>
          <strong>
            Email messages you send to vendors through WeddingShark
          </strong>
          , via users.messages.send
        </li>
        <li>
          <strong>Email messages vendors reply to you</strong>, accessed via
          the Gmail API specifically to thread responses with your vendor
          conversations in the App
        </li>
        <li>
          <strong>A refresh token</strong>, stored securely on our servers, so
          we can maintain the connection without requiring you to
          re-authenticate constantly
        </li>
      </ul>
      <p>
        We only access messages related to vendor conversations you initiated
        through WeddingShark. We do not read, index, or store unrelated
        messages from your Gmail inbox.
      </p>

      <hr />

      <h2>2. How we use your information</h2>
      <ul>
        <li>
          To provide and operate the App&rsquo;s core functionality (vendor
          tracking, messaging, CRM features)
        </li>
        <li>To send emails to vendors on your behalf (when you connect Gmail)</li>
        <li>
          To parse vendor replies and surface pricing, availability, and next
          steps in your vendor pipeline
        </li>
        <li>To improve the App&rsquo;s features, performance, and reliability</li>
        <li>
          To communicate with you about your account, updates, or support
          requests
        </li>
        <li>To comply with legal obligations</li>
      </ul>

      <h3>Google API Services User Data — Limited Use</h3>
      <p>
        WeddingShark&rsquo;s use and transfer of information received from
        Google APIs adheres to the{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements.
      </p>
      <p>Specifically:</p>
      <ul>
        <li>
          We use Google user data <strong>only</strong> to provide the
          user-facing features of WeddingShark (sending vendor emails from your
          Gmail, tracking replies, and displaying them in your vendor
          conversations).
        </li>
        <li>
          We <strong>do not</strong> use Google user data for advertising.
        </li>
        <li>
          We <strong>do not</strong> sell or transfer Google user data to third
          parties except as necessary to provide the service, comply with
          applicable law, or as part of a merger, acquisition, or sale of
          assets with appropriate notice.
        </li>
        <li>
          We <strong>do not</strong> allow humans to read Google user data,
          except (a) with your explicit consent for specific messages, (b)
          where necessary for security (investigating abuse), (c) to comply
          with applicable law, or (d) where data has been de-identified and
          aggregated for internal operations.
        </li>
        <li>
          We <strong>do not</strong> use Google user data to train generalized
          machine learning or AI models. We do use Anthropic&rsquo;s Claude AI
          to help summarize individual vendor messages <em>you have received</em>,
          to display that summary inside the App for your own use. These
          summaries are generated on a per-message basis and are not used to
          train any models.
        </li>
      </ul>

      <hr />

      <h2>3. How we share information</h2>
      <p>
        We do not sell your personal information. We share information only in
        the following limited cases:
      </p>
      <ul>
        <li>
          <strong>Service providers</strong> that help us operate WeddingShark,
          including:
          <ul>
            <li>
              <strong>Supabase</strong> (database, authentication, file
              storage)
            </li>
            <li>
              <strong>Resend</strong> (outbound and inbound email for users who
              have not connected Gmail)
            </li>
            <li>
              <strong>Anthropic</strong> (AI-powered email summaries and
              drafting assistance)
            </li>
            <li>
              <strong>Google Places and Yelp</strong> (vendor discovery data)
            </li>
            <li>
              <strong>Vercel</strong> (hosting our website and API)
            </li>
          </ul>
          Each service provider is contractually obligated to protect your
          information.
        </li>
        <li>
          <strong>Legal compliance</strong>, when required by law, court order,
          or to respond to valid legal requests
        </li>
        <li>
          <strong>Business transfers</strong>, if WeddingShark is acquired or
          merged; you will be notified with an opportunity to delete your data
          before any transfer
        </li>
        <li>
          <strong>With your consent</strong>, for any purpose we disclose to
          you at the time
        </li>
      </ul>

      <hr />

      <h2>4. How long we keep your information</h2>
      <p>
        We retain your information for as long as your account is active. If
        you delete your account, we delete your personal information within 30
        days, except where retention is required for legal, tax, or
        fraud-prevention purposes.
      </p>
      <p>
        If you disconnect your Gmail account, we delete the stored refresh
        token immediately. Messages already synced to the App remain in your
        vendor conversations until you delete them individually or delete your
        account.
      </p>

      <hr />

      <h2>5. Your rights and choices</h2>
      <p>You can:</p>
      <ul>
        <li>
          <strong>Access or update</strong> your information by editing your
          profile in the App
        </li>
        <li>
          <strong>Delete your account</strong> at any time in Settings — this
          removes all personal information associated with your account
        </li>
        <li>
          <strong>Disconnect Gmail</strong> at any time in Settings — this
          revokes our access to your Gmail account and deletes the stored
          refresh token
        </li>
        <li>
          <strong>Export your data</strong> by emailing{" "}
          <a href="mailto:support@weddingshark.co">support@weddingshark.co</a>;
          we will provide a copy within 30 days
        </li>
        <li>
          <strong>Object to processing</strong> or{" "}
          <strong>restrict processing</strong> where permitted by law
        </li>
      </ul>
      <p>
        If you are a resident of the European Union, United Kingdom, or
        California, you have additional rights under GDPR and the CCPA,
        including the right to know what personal information we have
        collected, the right to delete personal information, and the right not
        to be discriminated against for exercising these rights. To exercise
        any of these rights, email{" "}
        <a href="mailto:support@weddingshark.co">support@weddingshark.co</a>.
      </p>

      <hr />

      <h2>6. Security</h2>
      <p>
        We use industry-standard security practices including encrypted
        connections (TLS), encrypted data storage, and access controls. Refresh
        tokens and other secrets are stored in encrypted form and are never
        exposed to client applications.
      </p>
      <p>
        No system is perfectly secure. If we become aware of a security breach
        affecting your personal information, we will notify you as required by
        applicable law.
      </p>

      <hr />

      <h2>7. Children</h2>
      <p>
        WeddingShark is not intended for children under 16. We do not knowingly
        collect information from children under 16. If you believe a child has
        provided us with personal information, please contact{" "}
        <a href="mailto:support@weddingshark.co">support@weddingshark.co</a>{" "}
        and we will delete it.
      </p>

      <hr />

      <h2>8. International users</h2>
      <p>
        WeddingShark is operated from the United States. If you access the App
        from outside the United States, your information will be transferred
        to, stored, and processed in the United States, which may have data
        protection laws different from your country. By using the App, you
        consent to this transfer.
      </p>

      <hr />

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we
        will post the updated version with a new &ldquo;Last updated&rdquo;
        date. If changes are material, we will notify you through the App or
        by email. Your continued use of the App after changes are posted
        constitutes your acceptance of the updated policy.
      </p>

      <hr />

      <h2>10. Contact</h2>
      <p>
        Questions about this Privacy Policy or about your personal information?
        Email us at{" "}
        <strong>
          <a href="mailto:support@weddingshark.co">support@weddingshark.co</a>
        </strong>
        .
      </p>

      <hr />

      <p className="legal-meta">Effective date: April 23, 2026</p>
    </LegalLayout>
  );
}
