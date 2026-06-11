import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Logo size={52} />
              <div>
                <p className="font-display font-800 text-sm uppercase tracking-widest leading-tight">Lake Anna</p>
                <p className="font-display font-700 text-xs text-sky uppercase tracking-widest leading-tight">Lake For All</p>
              </div>
            </div>
            <p className="text-sky-100 text-sm leading-relaxed">
              Advocating for public lake access and preservation of all watersports through education and equal representation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-700 text-xs uppercase tracking-widest text-sky mb-4">Navigate</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/news', label: 'News & Updates' },
                { href: '/lake-responsibly', label: 'Lake Responsibly' },
                { href: '/take-action', label: 'Take Action' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sky-100 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h3 className="font-display font-700 text-xs uppercase tracking-widest text-sky mb-4">Organization</h3>
            <ul className="space-y-2">
              {[
                { href: '/membership', label: 'Join Free' },
                { href: '/shop', label: 'Shop' },
                { href: '/about', label: 'About Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sky-100 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h3 className="font-display font-700 text-xs uppercase tracking-widest text-sky mb-4">Our Mission</h3>
            <p className="text-sky-100 text-sm leading-relaxed italic">
              &ldquo;Preservation of all watersports on Lake Anna, a public lake, through education and respect with limitations that are equally applied to all watercraft.&rdquo;
            </p>
            <Link
              href="/membership"
              className="inline-block mt-4 px-4 py-2 bg-sky text-white text-xs font-display font-700 uppercase tracking-wider rounded hover:bg-sky-600 transition-colors"
            >
              Join Free Today
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-navy-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sky-200 text-xs">
            &copy; {new Date().getFullYear()} Lake Anna Lake For All &mdash; lakeanna4all.org
          </p>
          <p className="text-navy-300 text-xs">
            Lake Anna, Virginia &mdash; Advocating for public access since day one
          </p>
        </div>
      </div>
    </footer>
  );
}
