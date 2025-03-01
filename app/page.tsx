'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Welcome to Resume Builder</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/edit" className="block">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4">Edit Resume</h2>
            <p className="text-gray-600">
              Create or update your professional resume with our easy-to-use editor.
            </p>
          </div>
        </Link>

        <Link href="/view" className="block">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4">View Resume</h2>
            <p className="text-gray-600">
              Preview your resume in a clean, professional format ready for download.
            </p>
          </div>
        </Link>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4">Getting Started</h3>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ol className="list-decimal list-inside space-y-3">
            <li className="text-gray-700">
              Click on <span className="font-semibold">Edit Resume</span> to start creating your resume
            </li>
            <li className="text-gray-700">
              Fill in your personal information, experience, education, and skills
            </li>
            <li className="text-gray-700">
              Use the <span className="font-semibold">View Resume</span> page to preview your changes
            </li>
            <li className="text-gray-700">
              Download your resume when you're ready to share it
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
