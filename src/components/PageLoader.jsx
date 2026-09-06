import React from 'react';

export default function PageLoader() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="glass-container-elevated px-8 py-6 rounded-2xl flex items-center gap-3.5 shadow-2xl border border-tertiary-fixed-dim/80 animate-pulse">
        <div className="w-5 h-5 rounded-full border-2 border-secondary border-t-transparent animate-spin"></div>
        <span className="font-editorial text-sm font-semibold text-primary tracking-wide">
          Ascend Management • Loading...
        </span>
      </div>
    </div>
  );
}
