import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans p-8 md:p-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8 -ml-4 text-slate-500 hover:text-slate-900">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-slate-500 mb-12 text-sm italic">Last Updated: January 2026</p>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p>
              Jordana Laporte Coaching (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website and use our coaching services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us, including:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Contact information (such as name, email address, and phone number) provided via contact forms or booking tools.</li>
              <li>Information related to your career and life transitions shared during introductory calls or coaching sessions.</li>
              <li>Payment information processed through secure third-party providers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Provide and manage our coaching services.</li>
              <li>Communicate with you regarding appointments, inquiries, and service updates.</li>
              <li>Improve our website and user experience.</li>
              <li>Comply with legal and professional obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Confidentiality</h2>
            <p>
              Confidentiality is a cornerstone of the coaching relationship. All information shared during coaching sessions is kept strictly confidential, except where disclosure is required by law or where there is an imminent risk of harm to yourself or others.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Cookies and Tracking</h2>
            <p>
              Our website may use cookies to enhance your browsing experience and analyze website traffic. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Third-Party Services</h2>
            <p>
              We use trusted third-party services for scheduling (e.g., Koalendar) and website analytics. These providers have their own privacy policies governing how they handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
            <p>
              This Privacy Policy is governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at jordanalaporte@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
