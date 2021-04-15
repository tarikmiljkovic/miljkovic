/* This example requires Tailwind CSS v2.0+ */
export default function Clouds() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-black">Alati koje koristimo pri izradi projekata</h2>
        <div className="flow-root mt-8 lg:mt-10">
          <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img className="h-12" src="/clouds/archicad.svg" alt="Tuple" />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img className="h-12" src="/clouds/archicad.svg" alt="Mirage" />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 text-black">
              <img
                className="h-12 fill-current text-black"
                src="/clouds/archicad.svg"
                alt="StaticKit"
              />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-12"
                src="/clouds/archicad.svg"
                alt="Transistor"
              />
            </div>
            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
              <img
                className="h-12"
                src="/clouds/archicad.svg"
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

