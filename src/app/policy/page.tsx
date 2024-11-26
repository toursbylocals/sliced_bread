import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default async function Page() {
  return (
    <>
      <section className="container px-4 mx-auto  max-w-[1200px]">
        <Link href={"/"} className="flex items-center text-muted-foreground text-sm mb-2">
          <ChevronLeft className="h-4 w-4 opacity-50 mr-1" />
          Back
        </Link>
        <h2 automation-id="order-details-header" className="text-3xl text-primary font-bold mb-8">
          Policy
        </h2>

        <div className="mx-auto mb-16">
          <div className="space-y-4">
            <p>
              This Privacy Policy explains how we collect, use, and protect your personal
              information when you use our services. By accessing or using our services, you agree
              to the terms outlined below.
            </p>

            <div>
              <p className="font-bold">1. Information We Collect</p>
              <p>
                We may collect the following information when you fill out a form on our website:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Country, region, and city.</li>
                <li>Name (if provided).</li>
              </ul>
            </div>

            <div>
              <p className="font-bold">2. How We Use Your Information</p>
              <p>We use the information you provide to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Process your requests or inquiries.</li>
                <li>Improve our services based on your location and needs.</li>
              </ul>
            </div>

            <div>
              <p className="font-bold">3. How We Protect Your Information</p>
              <p>We take appropriate measures to protect your personal information, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Using secure servers to store your data.</li>
                <li>Restricting access to authorized personnel only.</li>
              </ul>
            </div>

            <div>
              <p className="font-bold">4. Sharing Your Information</p>
              <p>
                We do not sell, rent, or share your personal information with third parties, except:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>When required by law or to comply with legal obligations.</li>
              </ul>
            </div>

            <div>
              <p className="font-bold">5. Your Rights</p>
              <p>You can:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Request access to the information you have provided.</li>
                <li>Ask for corrections or removal of your information.</li>
              </ul>
            </div>

            <div>
              <p className="font-bold">6. Changes to This Policy</p>
              <p>
                We may update this Privacy Policy periodically. Any changes will be posted on this
                page with an updated date.
              </p>
            </div>

            <div>
              <p className="font-bold">7. Contact Us</p>
              <p>
                If you have any questions about this Privacy Policy, please contact us at
                <span className="font-medium ml-2">email@email.com</span>
              </p>
            </div>

            <p className="font-medium">Effective Date: 24.11.2024</p>
          </div>
        </div>
      </section>
    </>
  );
}
