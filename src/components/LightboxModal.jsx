import React from 'react';
import { X } from 'lucide-react';

export default function LightboxModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Ảnh gốc đề thi"
    >
      <div
        className="relative max-w-4xl w-full rounded-2xl overflow-hidden border"
        style={{
          backgroundColor: 'var(--bg)',
          borderColor: 'var(--line)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-between px-4 py-3 border-b"
          style={{ borderColor: 'var(--line)' }}
        >
          <span className="font-mono text-xs sm:text-sm truncate" style={{ color: 'var(--muted)' }}>
            {image}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-lg flex items-center justify-center btn-secondary"
            aria-label="Đóng ảnh"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div
          className="p-4 flex items-center justify-center max-h-[80vh] overflow-auto"
          style={{ backgroundColor: 'var(--surface)' }}
        >
          <img
            src={encodeURI(`/${image}`)}
            alt="Ảnh gốc đề thi"
            className="max-w-full h-auto rounded-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
}
