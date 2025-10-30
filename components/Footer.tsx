export default function Footer() {
  return (
    <footer className="mt-20 py-10 text-center border-t border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md">
      <div className="space-x-4 mb-3">
        <a
          href="mailto:kiarash.naghavi_khanghah@uconn.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/kiarash-naghavi/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://scholar.google.com/citations?user=5Z3tnvgAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Google Scholar
        </a>
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm">
        © 2025 Kiarash Naghavi Khanghah. All rights reserved.
      </p>
    </footer>
  );
}
