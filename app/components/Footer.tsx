export default function Footer() {
  return (
    <footer className="bg-gradient-to-l from-red-200 to-[#f6f6f6] text-red-950 text-sm mt-20">
      <div className="max-w-5xl xl:max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Köpa */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Köpa</h2>
          <ul className="space-y-2">
            <li><a href="/kopbilar#used-car-section" className="hover:underline">Köp begagnade bilar</a></li>
            <li><a href="/kopbilar#used-transport-section" className="hover:underline">Köp begagnade transportbilar</a></li>
             </ul>
        </div>

        {/* Hjälp */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Hjälp</h2>
          <ul className="space-y-2 mb-6">
            <li><a href="/tipsguider" className="hover:underline">Tips & guider</a></li>
            <li><a href="/faq" className="hover:underline">Vanliga frågor</a></li>
          </ul>
        </div>

        {/* Företag */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Företag</h2>
          <ul className="space-y-2">
            <li><a href="/omoss" className="hover:underline">Om oss</a></li>
            <li><a href="/job" className="hover:underline">Lediga tjänster</a></li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Kontakt</h2>
          <ul className="space-y-2">
            <li>Norrköping 22, 60219 Vellinge</li>
            <li><a href="tel:000000000" className="underline">Tel: 000 000 000</a></li>
            <li><a href="mailto:support@bilvio.se" className="underline">support@bilvio.se</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400"></div>

      {/* Footer bottom */}
      <div className="max-w-5xl xl:max-w-7xl mx-auto px-4 py-4 text-center text-xs space-y-2">
        <div>
          <a href="/integritetspolicy" className="hover:underline">Integritetspolicy</a>{' | '}
          <a href="/cookie" className="hover:underline">Cookiepolicy</a>{' | '}
          <a href="/sakerhet" className="hover:underline">Säkerhet</a>
        </div>
        <p className="text-gray-600">© 2024. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
}
