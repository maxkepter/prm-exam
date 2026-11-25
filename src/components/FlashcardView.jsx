import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Check,
  Eye,
  RotateCcw,
  Shuffle,
} from 'lucide-react';
import {
  dedupeQuestions,
  formatOptionsText,
  isAnswerMatch,
  isCorrectOption,
} from '../utils/questionUtils';

export default function FlashcardView({
  subject,
  allQuestions,
  bookmarks,
  toggleBookmark,
  onOpenImage,
}) {
  const storagePrefix = subject === 'PRM393' ? 'prm' : subject.toLowerCase();
  const filterKey = `${storagePrefix}_flashcard_filter`;
  const indexKey = `${storagePrefix}_flashcard_index`;
  const progressMapKey = `${storagePrefix}_flashcard_progress_map`;

  const [filterExam, setFilterExam] = useState(() => {
    try {
      return localStorage.getItem(filterKey) || 'ALL';
    } catch {
      return 'ALL';
    }
  });
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [revealedIds, setRevealedIds] = useState([]);
  const [masteredIds, setMasteredIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('prm_mastered') || '[]');
    } catch {
      return [];
    }
  });

  const exams = useMemo(
    () => Array.from(new Set(allQuestions.map((q) => q.exam))),
    [allQuestions]
  );
  const dedupedAll = useMemo(() => dedupeQuestions(allQuestions), [allQuestions]);

  const deck = useMemo(() => {
    let list = allQuestions;
    if (filterExam === 'BOOKMARKED') {
      list = allQuestions.filter((q) => bookmarks.includes(q.id));
    } else if (filterExam !== 'ALL') {
      list = allQuestions.filter((q) => q.exam === filterExam);
    }
    return dedupeQuestions(list);
  }, [allQuestions, filterExam, bookmarks]);

  const [currentIndex, setCurrentIndex] = useState(() => {
    try {
      const savedFilter = localStorage.getItem(filterKey) || 'ALL';
      const map = JSON.parse(localStorage.getItem(progressMapKey) || '{}');
      if (typeof map[savedFilter] === 'number') return map[savedFilter];
      const saved = localStorage.getItem(indexKey);
      return saved ? parseInt(saved, 10) || 0 : 0;
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    if (deck.length > 0 && currentIndex >= deck.length) {
      setCurrentIndex(0);
    }
  }, [deck.length, currentIndex]);

  useEffect(() => {
    try {
      localStorage.setItem(filterKey, filterExam);
      localStorage.setItem(indexKey, currentIndex.toString());
      const map = JSON.parse(localStorage.getItem(progressMapKey) || '{}');
      map[filterExam] = currentIndex;
      localStorage.setItem(progressMapKey, JSON.stringify(map));
    } catch (e) {
      console.error(e);
    }
  }, [currentIndex, filterExam, filterKey, indexKey, progressMapKey]);

  const currCard = deck[currentIndex] || deck[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < deck.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : deck.length - 1));
  };

  const handleSelectOption = (key) => {
    if (!currCard) return;
    const targetLen = (currCard.correctAnswer || '').length;
    if (targetLen > 1) {
      setSelectedAnswers((prev) => {
        const cur = prev[currCard.id] || '';
        const nextVal = cur.includes(key)
          ? cur.replace(key, '')
          : (cur + key).split('').sort().join('');
        return { ...prev, [currCard.id]: nextVal };
      });
    } else {
      setSelectedAnswers((prev) => ({
        ...prev,
        [currCard.id]: key,
      }));
    }
  };

  const handleRevealAnswer = () => {
    if (!currCard) return;
    setRevealedIds((prev) => (prev.includes(currCard.id) ? prev : [...prev, currCard.id]));
  };

  const handleResetCard = () => {
    if (!currCard) return;
    setSelectedAnswers((prev) => {
      const next = { ...prev };
      delete next[currCard.id];
      return next;
    });
    setRevealedIds((prev) => prev.filter((id) => id !== currCard.id));
  };

  const shuffleDeck = () => {
    const rand = Math.floor(Math.random() * deck.length);
    setCurrentIndex(rand);
  };

  const toggleMastered = (id) => {
    setMasteredIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      localStorage.setItem('prm_mastered', JSON.stringify(next));
      return next;
    });
  };

  const touchStartRef = useRef({ x: 0, y: 0, time: 0 });

  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now(),
      };
    }
  };

  const handleTouchEnd = (e) => {
    if (!e.changedTouches || !e.changedTouches[0]) return;
    const diffX = touchStartRef.current.x - e.changedTouches[0].clientX;
    const diffY = touchStartRef.current.y - e.changedTouches[0].clientY;
    const elapsed = Date.now() - touchStartRef.current.time;

    if (elapsed < 600 && Math.abs(diffX) > 55 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      if (diffX > 0) handleNext();
      else handlePrev();
    }
  };

  const selectedOption = currCard ? selectedAnswers[currCard.id] : null;
  const requiredCount = currCard ? Math.max(1, (currCard.correctAnswer || '').length) : 1;
  const isRevealed = Boolean(
    currCard &&
      (revealedIds.includes(currCard.id) ||
        (selectedOption && selectedOption.length >= requiredCount))
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

      const keyUpper = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(keyUpper) && currCard && currCard.options[keyUpper]) {
        e.preventDefault();
        handleSelectOption(keyUpper);
        return;
      }
      const numMap = { 1: 'A', 2: 'B', 3: 'C', 4: 'D' };
      if (numMap[e.key] && currCard && currCard.options[numMap[e.key]]) {
        e.preventDefault();
        handleSelectOption(numMap[e.key]);
        return;
      }

      if (e.code === 'Space' || e.code === 'Enter' || e.key === 'Enter') {
        e.preventDefault();
        if (!isRevealed) handleRevealAnswer();
        else handleNext();
      } else if (e.code === 'ArrowRight') {
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, deck, isRevealed, currCard]);

  if (!currCard) {
    return (
      <div className="max-w-xl mx-auto text-center py-16 space-y-4">
        <p className="text-base" style={{ color: 'var(--muted)' }}>
          Không có thẻ nào trong bộ lọc này.
        </p>
        <button
          type="button"
          onClick={() => setFilterExam('ALL')}
          className="px-5 min-h-[44px] rounded-lg text-sm font-medium btn-primary"
        >
          Xem tất cả thẻ
        </button>
      </div>
    );
  }

  const isMastered = masteredIds.includes(currCard.id);
  const isBookmarked = bookmarks.includes(currCard.id);
  const progressPct = Math.min(100, Math.max(0, ((currentIndex + 1) / deck.length) * 100));

  return (
    <div className="max-w-2xl mx-auto space-y-5 py-2 sm:py-6 animate-enter">
      {/* Toolbar */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <select
            value={filterExam}
            onChange={(e) => {
              const nextFilter = e.target.value;
              setFilterExam(nextFilter);
              try {
                const map = JSON.parse(localStorage.getItem(progressMapKey) || '{}');
                const savedIdx = typeof map[nextFilter] === 'number' ? map[nextFilter] : 0;
                setCurrentIndex(savedIdx);
              } catch {
                setCurrentIndex(0);
              }
            }}
            aria-label="Lọc bộ đề flashcard"
            className="w-full sm:w-auto px-3.5 min-h-[42px] rounded-lg text-xs sm:text-sm font-medium border focus:outline-none"
            style={{
              backgroundColor: 'var(--bg)',
              borderColor: 'var(--line)',
              color: 'var(--ink)',
            }}
          >
            <option value="ALL">Tất cả đề - Không trùng ({dedupedAll.length} câu)</option>
            {exams.map((ex) => (
              <option key={ex} value={ex}>
                {ex}
              </option>
            ))}
            {bookmarks.length > 0 && (
              <option value="BOOKMARKED">Đã đánh dấu ({bookmarks.length} câu)</option>
            )}
          </select>

          <div className="flex items-center justify-between sm:justify-end gap-2">
            <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
              Thẻ {currentIndex + 1}/{deck.length} ({Math.round(progressPct)}%)
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => {
                  if (window.confirm('Đặt lại tiến trình về thẻ đầu tiên?')) {
                    setCurrentIndex(0);
                  }
                }}
                className="px-2.5 min-h-[36px] rounded-lg text-xs font-medium btn-secondary"
                title="Về thẻ đầu tiên"
              >
                Đầu
              </button>
              <button
                type="button"
                onClick={shuffleDeck}
                className="w-9 h-9 rounded-lg flex items-center justify-center btn-secondary"
                title="Xáo trộn ngẫu nhiên"
                aria-label="Xáo trộn ngẫu nhiên"
              >
                <Shuffle className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--surface)' }}>
          <div
            className="h-full transition-all duration-300"
            style={{ width: `${progressPct}%`, backgroundColor: 'var(--action)' }}
          />
        </div>
      </div>

      {/* Flashcard Surface */}
      <div
        className="w-full rounded-2xl border p-5 sm:p-7 select-none space-y-5"
        style={{
          backgroundColor: 'var(--bg)',
          borderColor: 'var(--line)',
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Card Header */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span
              className="font-mono text-xs px-2.5 py-1 rounded-md font-medium shrink-0"
              style={{ backgroundColor: 'var(--surface)', color: 'var(--ink)' }}
            >
              #{currCard.questionNumber}
            </span>
            <span className="font-mono text-xs truncate" style={{ color: 'var(--muted)' }}>
              {currCard.exam}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => toggleBookmark(currCard.id)}
              className="w-9 h-9 rounded-lg flex items-center justify-center btn-secondary"
              title={isBookmarked ? 'Bỏ đánh dấu' : 'Đánh dấu câu hỏi'}
              aria-label="Đánh dấu câu hỏi"
            >
              <Bookmark
                className={`w-4 h-4 ${isBookmarked ? 'text-amber-500 fill-amber-500' : ''}`}
              />
            </button>

            {currCard.image && (
              <button
                type="button"
                onClick={() => onOpenImage(currCard.image)}
                className="w-9 h-9 rounded-lg flex items-center justify-center btn-secondary"
                title="Xem ảnh gốc"
                aria-label="Xem ảnh gốc"
              >
                <Eye className="w-4 h-4" />
              </button>
            )}

            <button
              type="button"
              onClick={() => toggleMastered(currCard.id)}
              className={`min-h-[36px] px-2.5 rounded-lg text-xs font-medium inline-flex items-center gap-1 border transition-colors ${
                isMastered
                  ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-700 dark:text-emerald-300'
                  : 'btn-secondary'
              }`}
              title="Đánh dấu đã thuộc"
            >
              {isMastered && <Check className="w-3.5 h-3.5" />}
              <span>{isMastered ? 'Đã thuộc' : 'Thuộc'}</span>
            </button>
          </div>
        </div>

        {/* Question */}
        <h2 className="text-base sm:text-lg font-medium leading-relaxed" style={{ color: 'var(--ink)' }}>
          {currCard.question}
        </h2>

        {/* Options */}
        <div className="space-y-2.5">
          {['A', 'B', 'C', 'D'].map((k) => {
            if (!currCard.options[k]) return null;
            const isChosen = isCorrectOption(selectedOption, k);
            const isCorrect = isCorrectOption(currCard.correctAnswer, k);

            let rowClass = 'border-[var(--line)] bg-[var(--bg)] hover:border-[var(--line-strong)]';
            let badgeClass = 'bg-[var(--surface)] text-[var(--muted)]';

            if (!isRevealed && isChosen) {
              rowClass = 'border-[var(--ink)] bg-[var(--surface)]';
              badgeClass = 'bg-[var(--action)] text-[var(--action-ink)]';
            } else if (isRevealed) {
              if (isChosen && isCorrect) {
                rowClass = 'border-emerald-500 bg-emerald-500/10';
                badgeClass = 'bg-emerald-600 text-white';
              } else if (isChosen && !isCorrect) {
                rowClass = 'border-rose-500 bg-rose-500/10';
                badgeClass = 'bg-rose-600 text-white';
              } else if (!isChosen && isCorrect) {
                rowClass = 'border-emerald-500 bg-emerald-500/10';
                badgeClass = 'bg-emerald-600 text-white';
              } else {
                rowClass = 'border-[var(--line)] opacity-50';
              }
            }

            return (
              <button
                key={k}
                type="button"
                onClick={() => handleSelectOption(k)}
                className={`w-full p-3.5 rounded-xl border transition-all flex items-start gap-3 text-left min-h-[48px] ${rowClass}`}
              >
                <span
                  className={`w-7 h-7 rounded-md font-mono text-xs font-medium flex items-center justify-center shrink-0 ${badgeClass}`}
                >
                  {k}
                </span>
                <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pt-0.5">
                  <span className="text-sm sm:text-base leading-snug break-words" style={{ color: 'var(--ink)' }}>
                    {currCard.options[k]}
                  </span>
                  {isRevealed && isChosen && isCorrect && (
                    <span className="font-mono text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 shrink-0 self-start sm:self-auto">
                      Đúng
                    </span>
                  )}
                  {isRevealed && isChosen && !isCorrect && (
                    <span className="font-mono text-[11px] font-medium px-2 py-0.5 rounded bg-rose-500/15 text-rose-700 dark:text-rose-300 shrink-0 self-start sm:self-auto">
                      Sai
                    </span>
                  )}
                  {isRevealed && !isChosen && isCorrect && (
                    <span className="font-mono text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 shrink-0 self-start sm:self-auto">
                      Đáp án đúng
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Result & Explanation */}
        {isRevealed && (
          <div className="pt-4 border-t space-y-3" style={{ borderColor: 'var(--line)' }}>
            {selectedOption ? (
              isAnswerMatch(selectedOption, currCard.correctAnswer) ? (
                <div className="p-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-between gap-3">
                  <div className="space-y-0.5 min-w-0">
                    <div className="text-sm font-medium text-emerald-800 dark:text-emerald-200">
                      Chính xác — Đáp án {currCard.correctAnswer}
                    </div>
                    <div className="text-xs text-emerald-700 dark:text-emerald-300 truncate">
                      {formatOptionsText(currCard.options, currCard.correctAnswer)}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleResetCard}
                    className="text-xs font-medium text-emerald-700 dark:text-emerald-300 hover:underline shrink-0"
                  >
                    Làm lại
                  </button>
                </div>
              ) : (
                <div className="p-3.5 rounded-xl border border-rose-500/40 bg-rose-500/10 flex items-center justify-between gap-3">
                  <div className="space-y-0.5 min-w-0">
                    <div className="text-sm font-medium text-rose-800 dark:text-rose-200">
                      Chưa đúng (bạn chọn {selectedOption})
                    </div>
                    <div className="text-xs text-rose-700 dark:text-rose-300">
                      Đáp án đúng: <strong>{currCard.correctAnswer}</strong> —{' '}
                      {formatOptionsText(currCard.options, currCard.correctAnswer)}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleResetCard}
                    className="text-xs font-medium text-rose-700 dark:text-rose-300 hover:underline shrink-0"
                  >
                    Làm lại
                  </button>
                </div>
              )
            ) : (
              <div
                className="p-3.5 rounded-xl border flex items-center justify-between gap-3"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--line)' }}
              >
                <div className="space-y-0.5 min-w-0">
                  <div className="text-sm font-medium" style={{ color: 'var(--ink)' }}>
                    Đáp án đúng: {currCard.correctAnswer}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--muted)' }}>
                    {formatOptionsText(currCard.options, currCard.correctAnswer)}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleResetCard}
                  className="text-xs font-medium hover:underline shrink-0"
                  style={{ color: 'var(--ink)' }}
                >
                  Làm lại
                </button>
              </div>
            )}

            {currCard.explanation && (
              <div
                className="p-4 rounded-xl border space-y-1.5"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--line)' }}
              >
                <div className="font-mono text-xs uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                  Giải thích chi tiết
                </div>
                <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--ink)' }}>
                  {currCard.explanation}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Footer Hint */}
        <div
          className="pt-3 border-t flex items-center justify-between text-xs"
          style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}
        >
          {!isRevealed ? (
            <>
              <span className="hidden sm:inline font-mono">
                Phím tắt: A–D hoặc 1–4 để chọn nhanh
              </span>
              <span className="sm:hidden">Chạm đáp án để kiểm tra</span>
              <button
                type="button"
                onClick={handleRevealAnswer}
                className="font-medium hover:underline inline-flex items-center gap-1"
                style={{ color: 'var(--ink)' }}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Xem đáp án</span>
              </button>
            </>
          ) : (
            <>
              <span className="hidden sm:inline font-mono">
                Enter / Space để sang thẻ tiếp theo
              </span>
              <span className="sm:hidden">Vuốt ngang để chuyển thẻ</span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400">
                Đã kiểm tra
              </span>
            </>
          )}
        </div>
      </div>

      {/* Bottom 3-Button Control */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
        <button
          type="button"
          onClick={handlePrev}
          className="min-h-[46px] px-3 rounded-xl font-medium text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 btn-secondary"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Thẻ trước</span>
          <span className="sm:hidden">Trước</span>
        </button>

        <button
          type="button"
          onClick={isRevealed ? handleResetCard : handleRevealAnswer}
          className="min-h-[46px] px-3 rounded-xl font-medium text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 btn-secondary"
        >
          {isRevealed ? (
            <>
              <RotateCcw className="w-4 h-4" />
              <span>Làm lại</span>
            </>
          ) : (
            <>
              <Eye className="w-4 h-4" />
              <span>Xem đáp án</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="group min-h-[46px] px-3 rounded-xl font-medium text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 btn-primary"
        >
          <span className="hidden sm:inline">Thẻ tiếp theo</span>
          <span className="sm:hidden">Tiếp</span>
          <ArrowRight className="w-4 h-4 m-arrow" />
        </button>
      </div>
    </div>
  );
}
