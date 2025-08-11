export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Joaquin Ross. All rights reserved.
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-center md:text-right">
            Built with Next.js, TypeScript, and Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}