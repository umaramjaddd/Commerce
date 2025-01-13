"use client";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <main className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About Us</h1>

        <section className="max-w-3xl mx-auto text-gray-600">
          <p className="mb-4">
            Welcome to MyStore, your number one source for all things fashion. We're dedicated to providing you the very best of clothing, with a focus on quality, customer service, and uniqueness.
          </p>
          <p className="mb-4">
            Founded in [Year], MyStore has come a long way from its beginnings. We now serve customers all over the world, and are thrilled to be a part of the [industry] wing of the fashion industry.
          </p>
          <p className="mb-8">
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, feel free to <Link href="/contact" className="text-blue-600">contact us</Link>!
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;
