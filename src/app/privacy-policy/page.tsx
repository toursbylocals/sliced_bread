import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">Last updated: [Current Date]</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Introduction</h2>
      <p className="mb-4">
        Welcome to the Elixir of Eternity privacy policy. We respect your
        privacy and are committed to protecting your personal data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        2. Information We Collect
      </h2>
      <p className="mb-4">
        We collect minimal personal information to process your order:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Name (optional)</li>
        <li>City</li>
        <li>State/Province</li>
        <li>Country</li>
        <li>Order quantity</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        3. How We Use Your Information
      </h2>
      <p className="mb-4">
        We use your information solely for processing and fulfilling your order.
        We do not share your data with third parties.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Data Security</h2>
      <p className="mb-4">
        We implement appropriate security measures to protect your personal
        information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, correct, or delete your personal
        information. Contact us for any privacy-related requests.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        6. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update our privacy policy from time to time. We will notify you
        of any changes by posting the new policy on this page.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this privacy policy, please contact us
        at: [Your Contact Information]
      </p>

      <Link href="/" className="text-blue-500 hover:underline">
        Return to Home
      </Link>
    </div>
  );
}
