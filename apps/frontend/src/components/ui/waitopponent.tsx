export function Waitopponent() {
  return (
    <div className="relative m-4 text-center items-center block max-w-sm p-6 bg-gray-400 border border-black rounded-lg shadow-md">
      <h5 className="mb-2 animate-pulse text-xl font-extrabold tracking-tight text-black opacity-40">
        Wait opponent will join soon...
      </h5>
      <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
