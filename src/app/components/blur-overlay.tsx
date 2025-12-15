export default function BlurOverlay() {
  return (
    <div className="relative w-full h-[85px] overflow-hidden">
      {/* Base gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b from-[#0A0A0A] to-[#111111]
        "
      />

      {/* Soft blur feather edges */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.6),transparent_70%)]
          opacity-70
        "
      />

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.6),transparent_70%)]
          opacity-70
        "
      />
    </div>
  );
}
