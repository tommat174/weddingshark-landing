import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — WeddingShark",
  description: "The terms governing your use of WeddingShark.",
};

export default function TermsPage() {
  return (
    <LegalLayout>
      <h1>Terms of Service</h1>
      <p className="legal-meta">Last updated: April 23, 2026</p>

      <p>
        Welcome to WeddingShark. These Terms of Service (&ldquo;Terms&rdquo;)
        govern your use of the WeddingShark mobile application (the
        &ldquo;App&rdquo;) and any related services (collectively, the
        &ldquo;Service&rdquo;), operated by Tom Matthews, a sole proprietor
        based in New York, United States (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
        &ldquo;our&rdquo;).
      </p>
      <p>
        By using the Service, you agree to these Terms. If you don&rsquo;t
        agree, don&rsquo;t use the Service.
      </p>

      <hr />

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 18 years old to use WeddingShark. By using the
        Service, you represent that you are 18 or older and have the legal
        capacity to enter into these Terms.
      </p>

      <hr />

      <h2>2. Your account</h2>
      <p>You are responsible for:</p>
      <ul>
        <li>Providing accurate information when creating an account</li>
        <li>Keeping your login credentials secure</li>
        <li>All activity on your account</li>
        <li>
          Notifying us immediately at{" "}
          <a href="mailto:support@weddingshark.co">support@weddingshark.co</a>{" "}
          if you suspect unauthorized access
        </li>
      </ul>
      <p>
        We reserve the right to suspend or terminate your account if you
        violate these Terms or engage in abusive behavior.
      </p>

      <hr />

      <h2>3. Using the Service</h2>

      <h3>What you can do</h3>
      <ul>
        <li>
          Use WeddingShark to manage your own wedding vendor conversations,
          quotes, contracts, and payments
        </li>
        <li>
          Connect your Gmail account (optional) to send and receive vendor
          emails through the App
        </li>
        <li>
          Upload vendor-related documents, photos, and contracts to your
          account
        </li>
      </ul>

      <h3>What you can&rsquo;t do</h3>
      <ul>
        <li>
          Use the Service for any purpose other than managing your own wedding
          vendor relationships
        </li>
        <li>
          Send spam, unsolicited marketing emails, or harassing messages
          through the App
        </li>
        <li>
          Attempt to reverse-engineer, decompile, or extract source code from
          the App
        </li>
        <li>
          Access the Service through automated means (bots, scrapers) without
          our written permission
        </li>
        <li>
          Use the Service to violate any law, regulation, or third-party right
        </li>
        <li>Resell, license, or make the Service available to third parties</li>
        <li>
          Use the Service to collect, harvest, or mine data about vendors
          beyond what&rsquo;s necessary for your own wedding planning
        </li>
      </ul>
      <p>
        If you connect your Gmail account, you agree to use it in compliance
        with Google&rsquo;s Terms of Service and any applicable anti-spam laws
        (CAN-SPAM Act, GDPR, etc.).
      </p>

      <hr />

      <h2>4. Your content</h2>
      <p>
        You retain ownership of all content you submit to WeddingShark
        (messages, photos, contracts, notes, etc.) (&ldquo;Your Content&rdquo;).
      </p>
      <p>
        By submitting content to WeddingShark, you grant us a limited,
        non-exclusive license to host, display, process, and transmit Your
        Content solely to provide the Service to you. We do not claim ownership
        of Your Content, and we do not use it to train AI models.
      </p>
      <p>
        You are responsible for ensuring that Your Content does not violate
        any third-party rights (copyright, privacy, etc.) or applicable law.
      </p>

      <hr />

      <h2>5. Vendor communications</h2>
      <p>
        WeddingShark facilitates communication between you and wedding vendors.
        We are not responsible for:
      </p>
      <ul>
        <li>The accuracy of information provided by vendors</li>
        <li>
          The quality or reliability of any vendor&rsquo;s services or
          products
        </li>
        <li>Contracts, quotes, or agreements between you and any vendor</li>
        <li>
          Disputes, damages, or losses resulting from your relationship with a
          vendor
        </li>
      </ul>
      <p>
        Any transaction or contract you enter into with a vendor is strictly
        between you and the vendor. WeddingShark is not a party to, nor liable
        for, any such transaction.
      </p>

      <hr />

      <h2>6. Fees</h2>
      <p>
        WeddingShark is currently free to use. We reserve the right to
        introduce paid features or subscription tiers in the future with
        reasonable notice. Free features that you currently rely on will
        remain available or be replaced with equivalent alternatives, where
        reasonably possible.
      </p>

      <hr />

      <h2>7. Third-party services</h2>
      <p>
        WeddingShark integrates with third-party services including Google
        (Gmail), Supabase, Resend, Anthropic, Google Places, Yelp, and Vercel.
        Your use of these integrations is also subject to those providers&rsquo;
        terms and privacy policies. We are not responsible for the policies or
        practices of third-party services.
      </p>

      <hr />

      <h2>8. Termination</h2>
      <p>
        You may delete your account at any time in the App&rsquo;s Settings.
        We may suspend or terminate your access for violations of these Terms,
        fraudulent activity, or extended inactivity, with or without notice.
      </p>
      <p>
        On termination, your right to use the Service ends immediately. We
        will delete your personal information per our Privacy Policy, except
        as required by law.
      </p>

      <hr />

      <h2>9. Disclaimers</h2>
      <p>
        THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
        AVAILABLE,&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
        INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
        NON-INFRINGEMENT.
      </p>
      <p>
        We do not warrant that the Service will be uninterrupted, error-free,
        secure, or that defects will be corrected. Wedding planning involves
        important financial and emotional decisions; always verify critical
        information with vendors directly.
      </p>

      <hr />

      <h2>10. Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, WEDDINGSHARK AND ITS OPERATOR
        WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
        CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST DATA,
        OR LOST BUSINESS OPPORTUNITIES, ARISING FROM YOUR USE OF THE SERVICE,
        EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      </p>
      <p>
        Our total liability arising out of or relating to these Terms or the
        Service will not exceed the greater of (a) $100 USD or (b) the total
        amount you paid us in the twelve months before the claim arose.
      </p>
      <p>
        Some jurisdictions do not allow the exclusion or limitation of certain
        damages, so some of these limitations may not apply to you.
      </p>

      <hr />

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless WeddingShark and its operator
        from any claims, damages, liabilities, losses, costs, or expenses
        (including reasonable attorneys&rsquo; fees) arising out of (a) your
        use of the Service, (b) your violation of these Terms, or (c) your
        violation of any third-party right.
      </p>

      <hr />

      <h2>12. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of the State of New York, United
        States, without regard to its conflict-of-laws principles. Any disputes
        arising from these Terms or the Service will be resolved in the state
        or federal courts located in New York County, New York, and you consent
        to the jurisdiction of those courts.
      </p>

      <hr />

      <h2>13. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will post
        the updated version with a new &ldquo;Last updated&rdquo; date. If
        changes are material, we will notify you through the App or by email.
        Your continued use of the Service after changes are posted constitutes
        your acceptance of the updated Terms.
      </p>

      <hr />

      <h2>14. Contact</h2>
      <p>
        Questions about these Terms? Email{" "}
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
