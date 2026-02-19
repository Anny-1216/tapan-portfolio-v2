export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 py-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-600 text-sm transition-colors duration-300">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Tapan Chourey. All rights reserved.</p>
        <p className="mt-2 text-xs">Developed by Chaitanya with Next.js & Tailwind</p>
      </div>
    </footer>
  );
}
