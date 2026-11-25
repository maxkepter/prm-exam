import React, { useState, useMemo } from 'react';
import { Bookmark, ChevronDown, ChevronUp, Eye, Search, X } from 'lucide-react';
import { isCorrectOption } from '../utils/questionUtils';

export default function BankView({
  subject,
  placeholder,
  allQuestions,
  bookmarks,
  toggleBookmark,
  onOpenImage,
}) {
  const [search, setSearch] = useState('');
  const [filterExam, setFilterExam] = useState('ALL');
  const [filterBookmarkOnly, setFilterBookmarkOnly] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const exams = useMemo(
    () => Array.from(new Set(allQuestions.map((q) => q.exam))),
    [allQuestions]
  );

  const filteredList = useMemo(() => {
    return allQuestions.filter((q) => {
      if (filterExam !== 'ALL' && q.exam !== filterExam) return false;
      if (filterBookmarkOnly && !bookmarks.includes(q.id)) return false;
      if (search.trim()) {
        const term = search.toLowerCase();
        const inQ = q.question.toLowerCase().includes(term);
        const inOpts = Object.values(q.options).some((t) =>
          t.toLowerCase().includes(term)
        );
        const inExp = (q.explanation || '').toLowerCase().includes(term);
        if (!inQ && !inOpts && !inExp) return false;
      }
      return true;
    });
  }, [allQuestions, search, filterExam, filterBookmarkOnly, bookmarks]);

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-4 sm:py-6 animate-enter">
      {/* Search & Filter Panel */}
      <div
        className="rounded-2xl p-5 sm:p-7 border space-y-5"
        style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--line)' }}
      >
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-medium tracking-tight" style={{ color: 'var(--ink)' }}>
            Ngân hàng {allQuestions.length} câu hỏi {subject}
          </h1>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            Tra cứu nhanh đề bài, phương án lựa chọn, đáp án và giải thích chi tiết.
          </p>
        </div>

        <div className="relative">
          <Search
            className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: 'var(--muted)' }}
          />
          <input
            type="text"
            placeholder={placeholder || 'Tìm kiếm theo từ khóa...'}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-10 min-h-[44px] rounded-xl border text-sm focus:outline-none transition-colors"
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'var(--line)',
              color: 'var(--ink)',
            }}
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-md flex items-center justify-center"
              style={{ color: 'var(--muted)' }}
              aria-label="Xóa tìm kiếm"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={filterExam}
              onChange={(e) => setFilterExam(e.target.value)}
              aria-label="Lọc theo mã đề"
              className="px-3 min-h-[38px] rounded-lg text-xs font-medium border focus:outline-none"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--line)',
                color: 'var(--ink)',
              }}
            >
              <option value="ALL">Tất cả mã đề</option>
              {exams.map((ex) => (
                <option key={ex} value={ex}>
                  {ex}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => setFilterBookmarkOnly(!filterBookmarkOnly)}
              className={`px-3 min-h-[38px] rounded-lg text-xs font-medium inline-flex items-center gap-1.5 border transition-colors ${
                filterBookmarkOnly
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-700 dark:text-amber-300'
                  : 'btn-secondary'
              }`}
            >
              <Bookmark
                className={`w-3.5 h-3.5 ${
                  filterBookmarkOnly ? 'fill-amber-500 text-amber-500' : ''
                }`}
              />
              <span>Đã lưu ({bookmarks.length})</span>
            </button>
          </div>

          <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
            Tìm thấy {filteredList.length} câu
          </span>
        </div>
      </div>

      {/* Results List */}
      <div className="space-y-2.5">
        {filteredList.map((q) => {
          const isExpanded = expandedId === q.id;
          const isBookmarked = bookmarks.includes(q.id);

          return (
            <div
              key={q.id}
              className="rounded-xl border overflow-hidden transition-colors"
              style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--line)' }}
            >
              <div
                onClick={() => setExpandedId(isExpanded ? null : q.id)}
                className="p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer"
              >
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="font-mono text-xs px-2 py-0.5 rounded font-medium"
                      style={{ backgroundColor: 'var(--surface)', color: 'var(--ink)' }}
                    >
                      #{q.questionNumber}
                    </span>
                    <span className="font-mono text-xs truncate" style={{ color: 'var(--muted)' }}>
                      {q.exam}
                    </span>
                    <span className="font-mono text-xs font-medium px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
                      Đ/A: {q.correctAnswer}
                    </span>
                  </div>
                  <h2 className="font-medium text-sm sm:text-base leading-snug" style={{ color: 'var(--ink)' }}>
                    {q.question}
                  </h2>
                </div>

                <div
                  className="flex items-center gap-1 shrink-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => toggleBookmark(q.id)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center btn-secondary"
                    aria-label="Lưu câu hỏi"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        isBookmarked ? 'text-amber-500 fill-amber-500' : ''
                      }`}
                    />
                  </button>
                  {q.image && (
                    <button
                      type="button"
                      onClick={() => onOpenImage(q.image)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center btn-secondary"
                      title="Xem ảnh gốc"
                      aria-label="Xem ảnh gốc"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : q.id)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ color: 'var(--muted)' }}
                    aria-label={isExpanded ? 'Thu gọn' : 'Mở rộng'}
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {isExpanded && (
                <div
                  className="px-4 sm:px-5 pb-5 pt-3 border-t space-y-3"
                  style={{
                    borderColor: 'var(--line)',
                    backgroundColor: 'var(--surface)',
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    {['A', 'B', 'C', 'D'].map((k) => {
                      const optText = q.options[k];
                      if (!optText) return null;
                      const isRight = isCorrectOption(q.correctAnswer, k);
                      return (
                        <div
                          key={k}
                          className={`p-3 rounded-xl border flex items-start gap-2 ${
                            isRight
                              ? 'border-emerald-500 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200 font-medium'
                              : 'border-[var(--line)] bg-[var(--bg)] text-[var(--muted)]'
                          }`}
                        >
                          <span className="font-mono shrink-0">{k}.</span>
                          <span className="leading-snug">{optText}</span>
                        </div>
                      );
                    })}
                  </div>

                  {q.explanation && (
                    <div
                      className="p-3.5 rounded-xl border text-sm leading-relaxed"
                      style={{
                        backgroundColor: 'var(--bg)',
                        borderColor: 'var(--line)',
                        color: 'var(--ink)',
                      }}
                    >
                      <span className="font-medium">Giải thích: </span>
                      <span style={{ color: 'var(--muted)' }}>{q.explanation}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
