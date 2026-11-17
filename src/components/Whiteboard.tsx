import React, { useRef, useState, useEffect } from 'react';
import { Download, RotateCcw, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Whiteboard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState('#2563eb');
  const [brushSize, setBrushSize] = useState(4);
  const [isEraser, setIsEraser] = useState(false);

  const colors = [
    { name: 'Blue', value: '#2563eb' },
    { name: 'Cyan', value: '#06b6d4' },
    { name: 'Indigo', value: '#6366f1' },
    { name: 'Rose', value: '#f43f5e' },
    { name: 'White', value: '#f8fafc' },
  ];

  const stamps = [
    { label: 'APPROVED', bg: 'bg-blue-600', text: 'text-white' },
    { label: 'LGTM', bg: 'bg-indigo-600', text: 'text-white' },
    { label: 'SHIPPED', bg: 'bg-sky-600', text: 'text-white' },
    { label: 'HIRED', bg: 'bg-blue-500', text: 'text-white' },
  ];

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set high DPI canvas resolution
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    // Initial message
    ctx.font = '16px Inter, sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText('✍️ Sign here or leave an endorsement for Mahek Panara...', 30, 50);
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.beginPath();
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (isEraser) {
      ctx.globalCompositeOperation = 'destination-out';
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = currentColor;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearBoard = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const addStamp = (label: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const x = 50 + Math.random() * (canvas.width / 2 - 200);
    const y = 80 + Math.random() * (canvas.height / 2 - 140);

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((Math.random() - 0.5) * 0.3);

    ctx.fillStyle = '#2563eb';
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, 140, 48);
    ctx.fillRect(4, 4, 132, 40);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`[ ${label} ]`, 70, 24);

    ctx.restore();

    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#2563eb', '#38bdf8', '#ffffff'],
    });
  };

  const downloadSouvenir = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;

    tempCtx.fillStyle = '#0b0e14';
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(canvas, 0, 0);

    tempCtx.font = '16px Inter, sans-serif';
    tempCtx.fillStyle = '#94a3b8';
    tempCtx.fillText('Mahek Panara Portfolio Souvenir • 2026', 40, tempCanvas.height - 40);

    const dataUrl = tempCanvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'Mahek_Panara_Souvenir.png';
    a.click();
  };

  return (
    <section id="whiteboard" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACT III • Interactive Studio Canvas</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight leading-none mb-3">
            The Whiteboard.
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed font-normal">
            Sign the visitor board, drop an endorsement stamp, or export your signature souvenir.
          </p>
        </div>

        {/* Canvas & Controls Container */}
        <div className="rounded-3xl bg-[#0c1018] border border-slate-800 shadow-2xl overflow-hidden p-4 sm:p-6">
          
          {/* Top Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800 text-xs sm:text-sm">
            
            {/* Color Inks & Eraser */}
            <div className="flex items-center gap-2.5">
              <span className="text-slate-300 font-mono text-xs font-semibold mr-1">Inks:</span>
              {colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => {
                    setCurrentColor(c.value);
                    setIsEraser(false);
                  }}
                  className={`w-6 h-6 rounded-full transition-transform ${
                    currentColor === c.value && !isEraser
                      ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-[#0c1018]'
                      : 'hover:scale-110 opacity-80 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: c.value }}
                  title={c.name}
                />
              ))}

              <button
                onClick={() => setIsEraser(true)}
                className={`px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-semibold transition-all ${
                  isEraser
                    ? 'bg-blue-600 text-white border-blue-500'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white'
                }`}
              >
                Eraser
              </button>

              {/* Sizes */}
              <div className="hidden sm:flex items-center gap-1.5 ml-2 pl-2 border-l border-slate-800">
                {[2, 5, 10].map((s) => (
                  <button
                    key={s}
                    onClick={() => setBrushSize(s)}
                    className={`w-7 h-7 rounded flex items-center justify-center font-mono text-xs font-bold ${
                      brushSize === s
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {s === 2 ? 'S' : s === 5 ? 'M' : 'L'}
                  </button>
                ))}
              </div>
            </div>

            {/* Stamps */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-slate-300 font-mono text-xs font-semibold mr-1">Stamps:</span>
              {stamps.map((s) => (
                <button
                  key={s.label}
                  onClick={() => addStamp(s.label)}
                  className="px-3 py-1.5 rounded-lg bg-[#141a26] hover:bg-blue-950 text-slate-200 hover:text-blue-300 border border-slate-800 hover:border-blue-500/50 text-xs font-mono font-bold transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>{s.label}</span>
                </button>
              ))}
            </div>

            {/* Canvas Actions */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={clearBoard}
                className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Clear</span>
              </button>

              <button
                onClick={downloadSouvenir}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Souvenir</span>
              </button>
            </div>

          </div>

          {/* Interactive HTML5 Drawing Surface */}
          <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl bg-[#080b11] border border-slate-800/80 cursor-crosshair overflow-hidden mt-4">
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onMouseMove={draw}
              onTouchStart={startDrawing}
              onTouchEnd={stopDrawing}
              onTouchMove={draw}
              className="w-full h-full block"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
