import FloatingNav from "./ui/floating-nav";

export default function DemoOne() {
  return (
    <div className="bg-midnight-950 min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h2 className="text-white text-2xl font-bold mb-4">Floating Navigation Demo</h2>
        <p className="text-white/60">Check the bottom of your screen on mobile devices.</p>
      </div>
      <FloatingNav />
    </div>
  );
}
