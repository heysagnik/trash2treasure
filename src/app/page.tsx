"use client";
import Image from "next/image";
import { House, Recycle, User } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100vh] md:min-h-full bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
        <h1 className="text-xl font-bold text-gray-900">My App</h1>
      </header>

      {/* Main content */}
      <main className="flex-1 p-4 pb-24">
        <div className="flex flex-col gap-6">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={30}
            priority
            className="self-center"
          />
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <h2 className="font-semibold mb-2 text-gray-900">Getting Started</h2>
              <p className="text-sm text-gray-600">
                Edit{" "}
                <code className="bg-gray-100 px-1 py-0.5 rounded">
                  src/app/page.tsx
                </code>{" "}
                to start building your app.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="https://nextjs.org/docs"
                className="bg-gray-900 text-white p-4 rounded-lg text-center font-medium hover:bg-gray-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Documentation
              </a>
              
              <a
                href="https://vercel.com/new"
                className="bg-gray-50 p-4 rounded-lg text-center font-medium text-gray-900 border border-gray-200 hover:bg-gray-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy Now
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
