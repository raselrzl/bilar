export default function Footer() {
  return (
    <footer className="bg-red-950 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Köpa */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Köpa</h2>
          <ul className="space-y-2">
            <li><a href="/bilar" className="hover:underline">Köp begagnade bilar</a></li>
            <li><a href="/transportbilar" className="hover:underline">Köp begagnade transportbilar</a></li>
            <li><a href="/losningar" className="hover:underline">Kompletta försäljningslösningar</a></li>
          </ul>
        </div>

        {/* Hjälp */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Hjälp</h2>
          <ul className="space-y-2 mb-6">
            <li><a href="/guider" className="hover:underline">Tips & guider</a></li>
            <li><a href="/faq" className="hover:underline">Vanliga frågor</a></li>
          </ul>
        </div>

        {/* Företag */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Företag</h2>
          <ul className="space-y-2">
            <li><a href="/om-oss" className="hover:underline">Om oss</a></li>
            <li><a href="/jobb" className="hover:underline">Lediga tjänster</a></li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Kontakt</h2>
          <ul className="space-y-2">
            <li>Norrköping 22, 60219 Vellinge</li>
            <li><a href="tel:000000000" className="underline">Tel: 000 000 000</a></li>
            <li><a href="mailto:info@gmail.com" className="underline">info@gmail.com</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400"></div>

      {/* Footer bottom */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-center text-xs space-y-2">
        <div>
          <a href="/integritetspolicy" className="hover:underline">Integritetspolicy</a>{' | '}
          <a href="/cookies" className="hover:underline">Cookiepolicy</a>{' | '}
          <a href="/sakerhet" className="hover:underline">Säkerhet</a>
        </div>
        <p className="text-white/70">© 2024. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
}
