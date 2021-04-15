/* This example requires Tailwind CSS v2.0+ */
const metrics = [
  { id: 1, stat: '100+', emphasis: 'Klijenata', rest: 'sa kojima smo suradjivali u BiH i inostranstvu.' },
  { id: 2, stat: '5+', emphasis: 'Uposlenika', rest: 'zadovoljno cineci dio naseg tima.' },
  { id: 3, stat: '98%', emphasis: 'Korisnicka satisfakcija', rest: 'na osnovu povratne informacije korisnika.' },
  { id: 4, stat: '12M+', emphasis: 'Konvertibilnih maraka', rest: 'investirano u projekte kojima smo mi idejni kreatori.' },
]

export default function Metrics() {
  return (
    <div className="relative bg-black">
      <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="/features/fourth.jpg"
              alt="People working on laptops"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold text-green-300 tracking-wide uppercase">Rezultati</h2>
          <p className="mt-3 text-3xl font-extrabold text-white">
            Ovo su neke od brojki na koje smo mi ponosni!
          </p>
          <p className="mt-5 text-lg text-gray-300">
            Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare
            feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus
            nibh integer quis. Eu vulputate diam sit tellus quis at.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-white">{item.stat}</span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
