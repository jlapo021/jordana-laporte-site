import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans p-8 md:p-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8 -ml-4 text-slate-500 hover:text-slate-900">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-slate-500 mb-12 text-sm italic">Last Updated: January 2026</p>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing this website and using the services of Jordana Laporte Coaching, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Coaching Services</h2>
            <p>
              Coaching is a professional relationship designed to facilitate the creation and achievement of personal or professional goals. Coaching is not therapy, counseling, or legal advice. Clients are responsible for their own decisions and actions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">3. Payment and Cancellation</h2>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Fees for coaching services are due as agreed upon prior to the commencement of sessions.</li>
              <li>We require at least 24 hours&apos; notice for the cancellation or rescheduling of a session. Sessions cancelled with less than 24 hours&apos; notice may be subject to the full session fee.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">4. Confidentiality</h2>
            <p>
              We maintain strict confidentiality regarding all client information and session content, in accordance with the International Coaching Federation (ICF) Code of Ethics.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
            <p>
              Jordana Laporte Coaching shall not be liable for any direct, indirect, or consequential damages resulting from the use of our coaching services or website content. The client assumes full responsibility for any changes they implement in their life or career.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">6. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, and logos, is the property of Jordana Laporte Coaching and is protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">7. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Continued use of our services after changes are posted constitutes acceptance of the new terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
