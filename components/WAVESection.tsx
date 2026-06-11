const wavePrinciples = [
  {
    letter: 'W',
    word: 'Watercraft',
    description:
      'Maintain 200 feet of separation from shorelines, docks, and other vessels at all times while operating at speed.',
  },
  {
    letter: 'A',
    word: 'Appreciate',
    description:
      'Play music at reasonable levels and avoid explicit lyrics, respecting the peace and enjoyment of all lake users.',
  },
  {
    letter: 'V',
    word: 'Value',
    description:
      'Minimize repetitive passes along residential shorelines and community docks to reduce wake impact on neighbors.',
  },
  {
    letter: 'E',
    word: 'Enjoy',
    description:
      'Lake Anna safely and responsibly by avoiding congested areas and being aware of other boats and swimmers.',
  },
];

export default function WAVESection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-display font-700 text-sky text-sm uppercase tracking-widest mb-3">
            Our Code of Conduct
          </p>
          <h2 className="font-display font-900 text-5xl md:text-7xl uppercase tracking-tight text-navy">
            The WAVE Program
          </h2>
          <p className="mt-4 text-navy text-lg max-w-2xl mx-auto">
            Four simple principles to keep Lake Anna enjoyable for everyone — boaters, swimmers, and shoreline residents alike.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wavePrinciples.map((principle) => (
            <div
              key={principle.letter}
              className="bg-navy rounded-xl p-8 hover:bg-navy-600 transition-colors duration-200 group"
            >
              <div className="font-display font-900 text-8xl text-sky leading-none mb-2 group-hover:scale-105 transition-transform duration-200">
                {principle.letter}
              </div>
              <h3 className="font-display font-800 text-xl uppercase tracking-wide text-white mb-3">
                {principle.word}
              </h3>
              <p className="text-sky-100 text-sm leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sky font-display font-700 text-lg uppercase tracking-widest">
            W &bull; A &bull; V &bull; E
          </p>
          <p className="text-navy text-sm mt-1">
            Ride the wave of responsible boating
          </p>
        </div>
      </div>
    </section>
  );
}
