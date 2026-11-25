import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Clock,
  Eye,
  Flag,
  Lock,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { isAnswerMatch, isCorrectOption } from '../utils/questionUtils';

export default function QuizView({
  subject,
  subtitle,
  allQuestions,
  bookmarks,
  toggleBookmark,
  onOpenImage,
}) {
  const randomCount = subject === 'ITE302c' ? 60 : 50;
  const [quizState, setQuizState] = useState('config');
  const [examPool, setExamPool] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [flagged, setFlagged] = useState([]);
  const [timeLeft, setTimeLeft] = useState(randomCount * 60);
  const [timerActive, setTimerActive] = useState(false);
  const [filterReview, setFilterReview] = useState('all');

  const exams = useMemo(
    () => Array.from(new Set(allQuestions.map((q) => q.exam))),
    [allQuestions]
  );

  const finishQuiz = (poolOverride, answersOverride) => {
    const activePool = poolOverride || examPool;
    const activeAnswers = answersOverride || userAnswers;
    setTimerActive(false);
    setQuizState('result');
    let correctCount = 0;
    activePool.forEach((q, idx) => {
      if (isAnswerMatch(activeAnswers[idx], q.correctAnswer)) correctCount++;
    });
    if (activePool.length > 0 && correctCount / activePool.length >= 0.7) {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }
  };

  const startQuiz = (examChoice) => {
    let pool = [];
    if (examChoice === 'ALL_RANDOM') {
      const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
      pool = shuffled.slice(0, randomCount);
    } else if (examChoice === 'BOOKMARKED') {
      pool = allQuestions.filter((q) => bookmarks.includes(q.id));
      if (pool.length === 0) {
        alert('Bạn chưa đánh dấu câu hỏi nào để ôn tập.');
        return;
      }
      pool.sort(() => 0.5 - Math.random());
    } else {
      pool = allQuestions.filter((q) => q.exam === examChoice);
      pool.sort((a, b) => a.questionNumber - b.questionNumber);
    }

    setExamPool(pool);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlagged([]);
    setFilterReview('all');
    setTimeLeft(Math.min(pool.length, randomCount) * 60);
    setTimerActive(true);
    setQuizState('in_progress');
  };

  useEffect(() => {
    let timer = null;
    if (timerActive && quizState === 'in_progress' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && quizState === 'in_progress') {
      finishQuiz();
    }
    return () => clearInterval(timer);
  }, [timerActive, quizState, timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optKey) => {
    const currQ = examPool[currentIndex];
    const isMulti = (currQ?.correctAnswer || '').length > 1;
    setUserAnswers((prev) => {
      const next = { ...prev };
      if (isMulti) {
        const cur = next[currentIndex] || '';
        const updated = cur.includes(optKey)
          ? cur.replace(optKey, '')
          : (cur + optKey).split('').sort().join('');
        if (updated) next[currentIndex] = updated;
        else delete next[currentIndex];
      } else {
        if (next[currentIndex] === optKey) {
          delete next[currentIndex];
        } else {
          next[currentIndex] = optKey;
        }
      }
      return next;
    });
  };

  const toggleFlag = (index) => {
    setFlagged((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  if (quizState === 'config') {
    return (
      <div className="max-w-4xl mx-auto space-y-8 py-4 sm:py-8 animate-enter">
        {/* Editorial Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="font-mono text-xs px-2.5 py-1 rounded-md border"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--line)',
                color: 'var(--ink)',
              }}
            >
              {subject}
            </span>
            <span className="text-sm" style={{ color: 'var(--muted)' }}>
              {subtitle}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.08]" style={{ color: 'var(--ink)' }}>
            Thi thử trắc nghiệm {subject}.{' '}
            <span style={{ color: 'var(--muted)' }}>
              {randomCount} câu chuẩn đề, chấm điểm sau khi nộp.
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-6 pt-1 font-mono text-xs sm:text-sm" style={{ color: 'var(--muted)' }}>
            <span>{allQuestions.length} câu hỏi trong kho</span>
            <span>{exams.length} mã đề gốc</span>
            <span>{bookmarks.length} câu đã lưu</span>
          </div>
        </div>

        {/* Primary Action Card (Inverse Surface + Mint Accent) */}
        <div
          className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border"
          style={{
            backgroundColor: 'var(--inv-bg)',
            color: 'var(--inv-ink)',
            borderColor: 'var(--line)',
          }}
        >
          <div className="space-y-2 max-w-lg">
            <div className="inline-flex items-center gap-2 font-mono text-xs px-2.5 py-1 rounded-md bg-mint text-ink font-medium">
              Đề chuẩn {randomCount} câu • {randomCount} phút
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Đề thi ngẫu nhiên tổng hợp
            </h2>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--inv-muted)' }}>
              Rút trích {randomCount} câu ngẫu nhiên từ toàn bộ {allQuestions.length} câu hỏi thuộc {exams.length} mã đề để mô phỏng áp lực thi thật.
            </p>
          </div>
          <button
            type="button"
            onClick={() => startQuiz('ALL_RANDOM')}
            className="group w-full sm:w-auto px-6 min-h-[48px] rounded-lg font-medium text-sm sm:text-base inline-flex items-center justify-center gap-2 shrink-0 transition-transform hover:-translate-y-0.5 active:scale-[0.985]"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--accent-ink)',
            }}
          >
            <span>Bắt đầu thi ngay</span>
            <ArrowRight className="w-4 h-4 m-arrow" />
          </button>
        </div>

        {/* Bookmarked Review Banner */}
        {bookmarks.length > 0 && (
          <button
            type="button"
            onClick={() => startQuiz('BOOKMARKED')}
            className="group w-full rounded-2xl p-5 card-interactive text-left flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'var(--surface)' }}
              >
                <Bookmark className="w-5 h-5 text-amber-500 fill-amber-500" />
              </div>
              <div className="min-w-0">
                <div className="font-medium text-base" style={{ color: 'var(--ink)' }}>
                  Ôn tập các câu đã đánh dấu
                </div>
                <div className="text-sm font-mono" style={{ color: 'var(--muted)' }}>
                  {bookmarks.length} câu hỏi bạn đã lưu
                </div>
              </div>
            </div>
            <span
              className="px-3.5 py-2 rounded-lg font-medium text-xs sm:text-sm inline-flex items-center gap-1.5 shrink-0"
              style={{ backgroundColor: 'var(--surface)', color: 'var(--ink)' }}
            >
              <span>Ôn tập</span>
              <ArrowRight className="w-3.5 h-3.5 m-arrow" />
            </span>
          </button>
        )}

        {/* Exam Papers Grid */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-medium" style={{ color: 'var(--ink)' }}>
              Luyện theo từng mã đề
            </h3>
            <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
              {exams.length} bộ đề
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {exams.map((exam) => {
              const count = allQuestions.filter((q) => q.exam === exam).length;
              return (
                <button
                  key={exam}
                  type="button"
                  onClick={() => startQuiz(exam)}
                  className="group p-4 sm:p-5 rounded-xl card-interactive text-left flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <div className="font-medium text-base truncate" style={{ color: 'var(--ink)' }}>
                      {exam}
                    </div>
                    <div className="font-mono text-xs mt-1" style={{ color: 'var(--muted)' }}>
                      {count} câu hỏi
                    </div>
                  </div>
                  <span
                    className="px-3 py-1.5 rounded-lg text-xs font-medium inline-flex items-center gap-1.5 shrink-0"
                    style={{ backgroundColor: 'var(--surface)', color: 'var(--ink)' }}
                  >
                    <span>Làm đề</span>
                    <ArrowRight className="w-3.5 h-3.5 m-arrow" />
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Exam Mode Notice */}
        <div
          className="rounded-xl p-4 border flex items-start gap-3 text-sm"
          style={{
            backgroundColor: 'var(--surface)',
            borderColor: 'var(--line)',
            color: 'var(--muted)',
          }}
        >
          <Lock className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--ink)' }} />
          <p className="leading-relaxed">
            <strong style={{ color: 'var(--ink)' }}>Chế độ thi chuẩn FPTU:</strong> Hệ thống giữ kín đáp án trong lúc làm bài. Toàn bộ kết quả, đáp án đúng và giải thích chi tiết sẽ hiển thị sau khi bạn bấm <strong style={{ color: 'var(--ink)' }}>Nộp bài</strong>.
          </p>
        </div>
      </div>
    );
  }

  if (quizState === 'in_progress' && examPool.length > 0) {
    const currQ = examPool[currentIndex];
    const selectedOpt = userAnswers[currentIndex];
    const isFlagged = flagged.includes(currentIndex);
    const isBookmarked = bookmarks.includes(currQ.id);
    const answeredCount = Object.keys(userAnswers).length;
    const progressPct = Math.round((answeredCount / examPool.length) * 100);

    return (
      <div className="max-w-5xl mx-auto space-y-4 py-2 sm:py-4 animate-enter">
        {/* Mobile Top Bar */}
        <div
          className="lg:hidden sticky top-16 z-20 p-3 rounded-xl border flex items-center justify-between gap-2"
          style={{
            backgroundColor: 'var(--bg)',
            borderColor: 'var(--line)',
          }}
        >
          <div className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
            Đã làm{' '}
            <span className="font-medium" style={{ color: 'var(--ink)' }}>
              {answeredCount}/{examPool.length}
            </span>
          </div>
          <div className="font-mono text-sm font-medium flex items-center gap-1.5" style={{ color: 'var(--ink)' }}>
            <Clock className="w-4 h-4" />
            <span className="tabular-nums">{formatTime(timeLeft)}</span>
          </div>
          <button
            type="button"
            onClick={() => finishQuiz()}
            className="px-3.5 min-h-[36px] rounded-lg text-xs font-medium btn-primary"
          >
            Nộp bài
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Question Panel */}
          <div className="lg:col-span-2">
            <div
              className="rounded-2xl p-5 sm:p-7 border space-y-5"
              style={{
                backgroundColor: 'var(--bg)',
                borderColor: 'var(--line)',
              }}
            >
              {/* Metadata Bar */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className="font-mono text-xs px-2.5 py-1 rounded-md font-medium"
                    style={{ backgroundColor: 'var(--surface)', color: 'var(--ink)' }}
                  >
                    Câu {currentIndex + 1} / {examPool.length}
                  </span>
                  <span className="font-mono text-xs truncate max-w-[160px] sm:max-w-[240px]" style={{ color: 'var(--muted)' }}>
                    {currQ.exam}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => toggleFlag(currentIndex)}
                    className={`min-h-[36px] px-2.5 rounded-lg text-xs font-medium inline-flex items-center gap-1.5 border transition-colors ${
                      isFlagged
                        ? 'bg-amber-500/10 border-amber-500/40 text-amber-600 dark:text-amber-400'
                        : 'btn-secondary'
                    }`}
                  >
                    <Flag className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{isFlagged ? 'Đã ghim' : 'Ghim'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleBookmark(currQ.id)}
                    className="w-9 h-9 rounded-lg flex items-center justify-center btn-secondary"
                    title="Lưu câu hỏi"
                    aria-label="Lưu câu hỏi"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        isBookmarked ? 'text-amber-500 fill-amber-500' : ''
                      }`}
                    />
                  </button>

                  {currQ.image && (
                    <button
                      type="button"
                      onClick={() => onOpenImage(currQ.image)}
                      className="min-h-[36px] px-2.5 rounded-lg text-xs font-medium inline-flex items-center gap-1.5 btn-secondary"
                      title="Xem ảnh gốc của đề thi"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Ảnh gốc</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Question Text */}
              <h2 className="text-base sm:text-xl font-medium leading-relaxed" style={{ color: 'var(--ink)' }}>
                {currQ.question}
              </h2>

              {/* Options */}
              <div className="space-y-2.5 pt-1">
                {['A', 'B', 'C', 'D'].map((optKey) => {
                  const optText = currQ.options[optKey];
                  if (!optText) return null;
                  const isSelected = isCorrectOption(selectedOpt, optKey);

                  return (
                    <button
                      key={optKey}
                      type="button"
                      onClick={() => handleSelectOption(optKey)}
                      className="w-full p-3.5 sm:p-4 rounded-xl border text-left transition-all flex items-start gap-3 min-h-[52px]"
                      style={
                        isSelected
                          ? {
                              backgroundColor: 'var(--surface)',
                              borderColor: 'var(--ink)',
                              boxShadow: 'inset 0 0 0 1px var(--ink)',
                            }
                          : {
                              backgroundColor: 'var(--bg)',
                              borderColor: 'var(--line)',
                            }
                      }
                    >
                      <span
                        className="w-7 h-7 rounded-md font-mono text-xs font-medium flex items-center justify-center shrink-0 transition-colors"
                        style={
                          isSelected
                            ? { backgroundColor: 'var(--action)', color: 'var(--action-ink)' }
                            : { backgroundColor: 'var(--surface)', color: 'var(--muted)' }
                        }
                      >
                        {optKey}
                      </span>
                      <span className="text-sm sm:text-base leading-snug pt-0.5" style={{ color: 'var(--ink)' }}>
                        {optText}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Footer Controls */}
              <div
                className="flex items-center justify-between pt-4 border-t gap-2"
                style={{ borderColor: 'var(--line)' }}
              >
                <button
                  type="button"
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex((prev) => prev - 1)}
                  className="px-3.5 sm:px-4 min-h-[44px] rounded-lg text-xs sm:text-sm font-medium inline-flex items-center gap-1.5 btn-secondary disabled:opacity-40"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Câu trước</span>
                  <span className="sm:hidden">Trước</span>
                </button>

                <button
                  type="button"
                  onClick={() => finishQuiz()}
                  className="px-3.5 min-h-[44px] rounded-lg text-xs sm:text-sm font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 transition-colors"
                >
                  Nộp bài sớm
                </button>

                <button
                  type="button"
                  disabled={currentIndex === examPool.length - 1}
                  onClick={() => setCurrentIndex((prev) => prev + 1)}
                  className="group px-4 sm:px-5 min-h-[44px] rounded-lg text-xs sm:text-sm font-medium inline-flex items-center gap-1.5 btn-primary disabled:opacity-40"
                >
                  <span className="hidden sm:inline">Câu tiếp theo</span>
                  <span className="sm:hidden">Tiếp</span>
                  <ArrowRight className="w-4 h-4 m-arrow" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar: Timer & Navigator */}
          <div className="space-y-4">
            <div
              className="hidden lg:block rounded-2xl p-5 border space-y-4"
              style={{
                backgroundColor: 'var(--bg)',
                borderColor: 'var(--line)',
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                  Thời gian còn lại
                </span>
                <div className="font-mono text-2xl font-medium tabular-nums flex items-center gap-1.5" style={{ color: 'var(--ink)' }}>
                  <Clock className="w-4 h-4" style={{ color: 'var(--muted)' }} />
                  <span>{formatTime(timeLeft)}</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between font-mono text-xs" style={{ color: 'var(--muted)' }}>
                  <span>
                    Đã làm {answeredCount}/{examPool.length}
                  </span>
                  <span>{progressPct}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--surface)' }}>
                  <div
                    className="h-full transition-all duration-300"
                    style={{ width: `${progressPct}%`, backgroundColor: 'var(--action)' }}
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => finishQuiz()}
                className="w-full min-h-[44px] rounded-lg font-medium text-sm btn-primary"
              >
                Nộp bài chấm điểm
              </button>
            </div>

            <div
              className="rounded-2xl p-4 sm:p-5 border space-y-3"
              style={{
                backgroundColor: 'var(--bg)',
                borderColor: 'var(--line)',
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium" style={{ color: 'var(--ink)' }}>
                  Bảng câu hỏi
                </h3>
                <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
                  Chạm số để chuyển
                </span>
              </div>

              <div className="grid grid-cols-5 gap-1.5 max-h-64 sm:max-h-72 overflow-y-auto p-0.5">
                {examPool.map((_, idx) => {
                  const isAnswered = userAnswers[idx] !== undefined;
                  const isCurr = currentIndex === idx;
                  const isFlag = flagged.includes(idx);

                  let style = {
                    backgroundColor: 'var(--surface)',
                    color: 'var(--muted)',
                    borderColor: 'transparent',
                  };
                  if (isCurr) {
                    style = {
                      backgroundColor: 'var(--bg)',
                      color: 'var(--ink)',
                      borderColor: 'var(--ink)',
                    };
                  } else if (isAnswered) {
                    style = {
                      backgroundColor: 'var(--action)',
                      color: 'var(--action-ink)',
                      borderColor: 'transparent',
                    };
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className="h-9 rounded-lg font-mono text-xs font-medium border relative flex items-center justify-center transition-colors"
                      style={style}
                    >
                      {idx + 1}
                      {isFlag && (
                        <span
                          className="w-2 h-2 rounded-full bg-amber-500 absolute -top-0.5 -right-0.5"
                          aria-label="Đã ghim"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              <div
                className="pt-3 border-t flex items-center justify-between text-xs"
                style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: 'var(--action)' }} />
                  Đã làm
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--line)' }} />
                  Chưa làm
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  Đã ghim
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (quizState === 'result') {
    let correctCount = 0;
    let incorrectCount = 0;
    let unansCount = 0;

    examPool.forEach((q, idx) => {
      const userAns = userAnswers[idx];
      if (!userAns) unansCount++;
      else if (isAnswerMatch(userAns, q.correctAnswer)) correctCount++;
      else incorrectCount++;
    });

    const scorePercent = Math.round((correctCount / examPool.length) * 100);
    const passed = scorePercent >= 60;

    const reviewList = examPool.filter((q, idx) => {
      if (filterReview === 'wrong')
        return userAnswers[idx] && !isAnswerMatch(userAnswers[idx], q.correctAnswer);
      if (filterReview === 'flagged') return flagged.includes(idx);
      if (filterReview === 'unanswered') return !userAnswers[idx];
      return true;
    });

    return (
      <div className="max-w-4xl mx-auto space-y-8 py-4 sm:py-6 animate-enter">
        {/* Scorecard */}
        <div
          className="rounded-2xl p-6 sm:p-10 border space-y-6"
          style={{
            backgroundColor: 'var(--bg)',
            borderColor: 'var(--line)',
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span
                className={`inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-md font-medium ${
                  passed
                    ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                    : 'bg-rose-500/15 text-rose-700 dark:text-rose-300'
                }`}
              >
                {passed ? 'Đạt yêu cầu (≥ 60%)' : 'Cần ôn tập thêm'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight" style={{ color: 'var(--ink)' }}>
                Kết quả thi thử {subject}
              </h2>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>
                Hoàn thành {examPool.length} câu hỏi trắc nghiệm
              </p>
            </div>

            <div className="font-mono text-4xl sm:text-5xl font-medium tabular-nums" style={{ color: 'var(--ink)' }}>
              {scorePercent}%
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--line)' }}>
              <div className="font-mono text-2xl font-medium tabular-nums" style={{ color: 'var(--ink)' }}>
                {scorePercent}%
              </div>
              <div className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
                Điểm số
              </div>
            </div>
            <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10">
              <div className="font-mono text-2xl font-medium tabular-nums text-emerald-600 dark:text-emerald-400">
                {correctCount}
              </div>
              <div className="text-xs mt-1 text-emerald-700 dark:text-emerald-300">
                Câu đúng
              </div>
            </div>
            <div className="p-4 rounded-xl border border-rose-500/30 bg-rose-500/10">
              <div className="font-mono text-2xl font-medium tabular-nums text-rose-600 dark:text-rose-400">
                {incorrectCount}
              </div>
              <div className="text-xs mt-1 text-rose-700 dark:text-rose-300">
                Câu sai
              </div>
            </div>
            <div className="p-4 rounded-xl border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--line)' }}>
              <div className="font-mono text-2xl font-medium tabular-nums" style={{ color: 'var(--ink)' }}>
                {unansCount}
              </div>
              <div className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
                Chưa làm
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={() => startQuiz('ALL_RANDOM')}
              className="group w-full sm:w-auto px-6 min-h-[44px] rounded-lg font-medium text-sm inline-flex items-center justify-center gap-2 btn-primary"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Thi đề mới ({randomCount} câu khác)</span>
            </button>
            <button
              type="button"
              onClick={() => setQuizState('config')}
              className="w-full sm:w-auto px-6 min-h-[44px] rounded-lg font-medium text-sm btn-secondary"
            >
              Về trang luyện đề
            </button>
          </div>
        </div>

        {/* Review Section */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="text-lg sm:text-xl font-medium" style={{ color: 'var(--ink)' }}>
              Xem lại đáp án &amp; giải thích
            </h3>
            <div
              className="flex items-center p-1 rounded-lg border text-xs font-medium self-start sm:self-auto"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--line)' }}
            >
              {[
                { id: 'all', label: `Tất cả (${examPool.length})` },
                { id: 'wrong', label: `Câu sai (${incorrectCount})` },
                { id: 'flagged', label: `Đã ghim (${flagged.length})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilterReview(tab.id)}
                  className="px-3 py-1.5 rounded-md transition-colors"
                  style={
                    filterReview === tab.id
                      ? { backgroundColor: 'var(--bg)', color: 'var(--ink)' }
                      : { color: 'var(--muted)' }
                  }
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {reviewList.map((q) => {
              const origIdx = examPool.findIndex((item) => item.id === q.id);
              const userAns = userAnswers[origIdx];
              const isCorrect = isAnswerMatch(userAns, q.correctAnswer);

              return (
                <div
                  key={q.id}
                  className="rounded-2xl p-5 sm:p-6 border space-y-4"
                  style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--line)' }}
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span
                      className="font-mono text-xs px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: 'var(--surface)', color: 'var(--muted)' }}
                    >
                      Câu {origIdx + 1} • {q.exam}
                    </span>

                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Đúng
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-rose-600 dark:text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-md">
                          <XCircle className="w-3.5 h-3.5" />{' '}
                          {userAns ? `Sai (${userAns})` : 'Chưa làm'}
                        </span>
                      )}

                      <button
                        type="button"
                        onClick={() => toggleBookmark(q.id)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center btn-secondary"
                        aria-label="Lưu câu hỏi"
                      >
                        <Bookmark
                          className={`w-4 h-4 ${
                            bookmarks.includes(q.id) ? 'text-amber-500 fill-amber-500' : ''
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
                    </div>
                  </div>

                  <h4 className="font-medium text-base leading-relaxed" style={{ color: 'var(--ink)' }}>
                    {q.question}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    {['A', 'B', 'C', 'D'].map((k) => {
                      const optText = q.options[k];
                      if (!optText) return null;
                      const isUser = isCorrectOption(userAns, k);
                      const isRight = isCorrectOption(q.correctAnswer, k);

                      let cls = 'border-[var(--line)] text-[var(--muted)]';
                      if (isRight) {
                        cls =
                          'border-emerald-500 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200 font-medium';
                      } else if (isUser && !isRight) {
                        cls =
                          'border-rose-500 bg-rose-500/10 text-rose-800 dark:text-rose-200';
                      }

                      return (
                        <div key={k} className={`p-3 rounded-xl border flex items-start gap-2 ${cls}`}>
                          <span className="font-mono font-medium shrink-0">{k}.</span>
                          <span className="leading-snug">{optText}</span>
                        </div>
                      );
                    })}
                  </div>

                  {q.explanation && (
                    <div
                      className="text-sm p-3.5 rounded-xl border leading-relaxed"
                      style={{
                        backgroundColor: 'var(--surface)',
                        borderColor: 'var(--line)',
                        color: 'var(--ink)',
                      }}
                    >
                      <span className="font-medium">Giải thích: </span>
                      <span style={{ color: 'var(--muted)' }}>{q.explanation}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
