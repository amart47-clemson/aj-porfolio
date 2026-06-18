const particles = [
  { top: "8%", left: "12%", size: 2, delay: 0 },
  { top: "15%", left: "78%", size: 1, delay: 2 },
  { top: "22%", left: "45%", size: 2, delay: 4 },
  { top: "35%", left: "88%", size: 1, delay: 1 },
  { top: "42%", left: "22%", size: 2, delay: 3 },
  { top: "55%", left: "65%", size: 1, delay: 5 },
  { top: "68%", left: "8%", size: 2, delay: 2 },
  { top: "72%", left: "52%", size: 1, delay: 0 },
  { top: "80%", left: "92%", size: 2, delay: 4 },
  { top: "88%", left: "35%", size: 1, delay: 1 },
  { top: "12%", left: "58%", size: 1, delay: 3 },
  { top: "48%", left: "38%", size: 2, delay: 5 },
  { top: "62%", left: "82%", size: 1, delay: 2 },
  { top: "28%", left: "5%", size: 1, delay: 4 },
  { top: "92%", left: "68%", size: 2, delay: 0 },
  { top: "5%", left: "92%", size: 1, delay: 3 },
  { top: "58%", left: "15%", size: 1, delay: 1 },
  { top: "38%", left: "72%", size: 2, delay: 5 },
];

function NeuralMesh() {
  const nodes = [
    [120, 180],
    [280, 120],
    [420, 220],
    [580, 90],
    [720, 200],
    [860, 140],
    [980, 280],
    [200, 380],
    [360, 320],
    [520, 420],
    [680, 350],
    [840, 480],
    [960, 380],
    [140, 560],
    [400, 620],
    [620, 540],
    [780, 680],
    [920, 580],
  ];

  const connections: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [0, 7],
    [1, 8],
    [2, 8],
    [2, 9],
    [3, 10],
    [4, 10],
    [5, 11],
    [6, 12],
    [7, 8],
    [8, 9],
    [9, 10],
    [10, 11],
    [11, 12],
    [7, 13],
    [8, 14],
    [9, 14],
    [10, 15],
    [11, 16],
    [12, 16],
    [13, 14],
    [14, 15],
    [15, 16],
  ];

  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.18]"
      viewBox="0 0 1100 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {connections.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="url(#neural-line)"
          strokeWidth="0.75"
          className="neural-line"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
      {nodes.map(([cx, cy], i) => (
        <g key={i}>
          <circle
            cx={cx}
            cy={cy}
            r="3"
            fill="rgba(249,115,22,0.6)"
            className="neural-node"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
          <circle
            cx={cx}
            cy={cy}
            r="8"
            fill="none"
            stroke="rgba(251,146,60,0.25)"
            strokeWidth="0.5"
            className="neural-node-ring"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        </g>
      ))}
      <defs>
        <linearGradient id="neural-line" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(249,115,22,0.1)" />
          <stop offset="50%" stopColor="rgba(251,146,60,0.45)" />
          <stop offset="100%" stopColor="rgba(249,115,22,0.1)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black"
    >
      {/* Depth base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#111111_0%,#000000_55%,#000000_100%)]" />

      {/* Animated aurora orbs */}
      <div className="bg-orb bg-orb-1 absolute -top-32 left-[10%] h-[520px] w-[520px] rounded-full bg-orange-600/15 blur-[100px]" />
      <div className="bg-orb bg-orb-2 absolute top-[20%] -right-24 h-[480px] w-[480px] rounded-full bg-amber-500/10 blur-[110px]" />
      <div className="bg-orb bg-orb-3 absolute bottom-[10%] left-[30%] h-[400px] w-[400px] rounded-full bg-orange-500/8 blur-[90px]" />

      {/* Top horizon glow */}
      <div className="absolute inset-x-0 top-0 h-[40vh] bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(249,115,22,0.12),transparent)]" />

      {/* Neural mesh overlay */}
      <NeuralMesh />

      {/* Perspective floor grid */}
      <div className="absolute inset-x-0 bottom-0 h-[55vh] overflow-hidden opacity-40">
        <div className="bg-grid-floor absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* Fine coordinate grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />

      {/* Scan sweep */}
      <div className="bg-scan-line absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />

      {/* Floating data particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="bg-particle absolute rounded-full bg-orange-400/60 shadow-[0_0_6px_rgba(249,115,22,0.5)]"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Subtle noise grain */}
      <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjEiLz48L3N2Zz4=')]" />

      {/* Edge vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}
