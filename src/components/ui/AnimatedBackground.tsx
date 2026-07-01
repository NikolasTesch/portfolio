export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -left-[10vw] top-[10vh] h-[40vw] w-[40vw] animate-drift-a rounded-full bg-primary/25 blur-[100px]" />
      <div className="absolute right-[-5vw] top-[40vh] h-[35vw] w-[35vw] animate-drift-b rounded-full bg-[#a484d7]/20 blur-[110px]" />
      <div className="absolute bottom-[-10vh] left-[30vw] h-[30vw] w-[30vw] animate-drift-a rounded-full bg-primary/15 blur-[120px] [animation-delay:-8s]" />
      {/* grão sutil por cima dos blobs */}
      <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />
    </div>
  );
}
