export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-white z-50 flex items-center justify-center">
      <div className="flex items-center justify-center gap-2 my-16">
        <span className="heading-6-lg font-semibold">Loading</span>
        <div className="dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
}
