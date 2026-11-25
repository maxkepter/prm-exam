import React from 'react';
import { BookOpen, Layers, Sparkles, Sun, Moon } from 'lucide-react';
import { SUBJECTS } from '../utils/questionUtils';

const NAV_ITEMS = [
  { id: 'quiz', label: 'Luyện đề', shortLabel: 'Thi', icon: Sparkles },
  { id: 'flashcard', label: 'Flashcard', shortLabel: 'Thẻ', icon: Layers },
  { id: 'bank', label: 'Ngân hàng', shortLabel: 'Kho', icon: BookOpen },
];

export default function Header({
  subject,
  setSubject,
  mode,
  setMode,
  questionCount,
  darkMode,
  setDarkMode,
}) {
  return (
    <header
      className="sticky top-0 z-30 border-b"
      style={{
        backgroundColor: 'var(--bg)',
        borderColor: 'var(--line)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand */}
        <button
          type="button"
          onClick={() => setMode('quiz')}
          className="flex items-center gap-2.5 text-left min-w-0 group"
        >
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
            style={{
              backgroundColor: 'var(--inv-bg)',
              borderColor: 'var(--line)',
            }}
            aria-hidden="true"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="5" height="5" rx="1.5" fill="#a1ffcb" />
              <rect x="9" y="2" width="5" height="5" rx="1.5" fill="#ffffff" fillOpacity="0.45" />
              <rect x="2" y="9" width="5" height="5" rx="1.5" fill="#ffffff" fillOpacity="0.45" />
              <rect x="9" y="9" width="5" height="5" rx="1.5" fill="#a1ffcb" />
            </svg>
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-base tracking-tight truncate" style={{ color: 'var(--ink)' }}>
                Exam Master
              </span>
              <span
                className="hidden lg:inline-block font-mono text-[11px] px-1.5 py-0.5 rounded"
                style={{ backgroundColor: 'var(--surface)', color: 'var(--muted)' }}
              >
                {subject}
              </span>
            </div>
          </div>
        </button>

        {/* Subject Switcher */}
        <div
          className="flex items-center p-1 rounded-lg border shrink-0"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--line)' }}
          role="group"
          aria-label="Chọn môn học"
        >
          {Object.keys(SUBJECTS).map((subj) => {
            const active = subject === subj;
            return (
              <button
                key={subj}
                type="button"
                onClick={() => setSubject(subj)}
                className="px-2.5 sm:px-3 py-1 rounded-md font-mono text-xs font-medium transition-colors min-h-[32px]"
                style={
                  active
                    ? { backgroundColor: 'var(--action)', color: 'var(--action-ink)' }
                    : { color: 'var(--muted)' }
                }
              >
                {subj}
              </button>
            );
          })}
        </div>

        {/* Mode Navigation */}
        <nav
          className="flex items-center p-1 rounded-lg border"
          style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--line)' }}
          aria-label="Chế độ học"
        >
          {NAV_ITEMS.map(({ id, label, shortLabel, icon: Icon }) => {
            const active = mode === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setMode(id)}
                aria-current={active ? 'page' : undefined}
                className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors min-h-[34px]"
                style={
                  active
                    ? { backgroundColor: 'var(--bg)', color: 'var(--ink)', boxShadow: '0 1px 2px rgba(0,0,0,0.06)' }
                    : { color: 'var(--muted)' }
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline">{label}</span>
                <span className="sm:hidden">{shortLabel}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <span
            className="hidden md:inline-flex items-center px-2.5 py-1 rounded-md font-mono text-xs border"
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'var(--line)',
              color: 'var(--muted)',
            }}
          >
            {questionCount} câu
          </span>
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-lg flex items-center justify-center btn-secondary"
            title="Chuyển chế độ sáng/tối"
            aria-label="Chuyển chế độ sáng/tối"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
