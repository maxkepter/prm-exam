import React, { useState, useEffect, useMemo } from 'react'
import confetti from 'canvas-confetti'
import rawQuestions from './data/questions.json'

// SVG Icons
const SparklesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
);
const LayersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
);
const BookOpenIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
);
const CheckCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
);
const XCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
);
const BookmarkIcon = ({ filled = false, className = "w-5 h-5" }) => (
  <svg className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
);
const RotateIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
);
const EyeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
);

export default function App() {
  const questions = rawQuestions;
  const [mode, setMode] = useState('quiz'); // 'quiz', 'flashcard', 'bank'
  const [darkMode, setDarkMode] = useState(false);
  const [bookmarks, setBookmarks] = useState(() => {
    try { return JSON.parse(localStorage.getItem('prm_bookmarks') || '[]'); } catch { return []; }
  });

  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleBookmark = (id) => {
    setBookmarks(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      localStorage.setItem('prm_bookmarks', JSON.stringify(next));
      return next;
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer select-none" onClick={() => setMode('quiz')}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-fpt-orange to-amber-400 flex items-center justify-center shadow-md sm:shadow-lg shadow-orange-500/20 text-white font-black text-base sm:text-xl shrink-0">
              P
            </div>
            <div>
              <h1 className="font-extrabold text-sm sm:text-xl tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                PRM393 <span className="text-fpt-orange font-bold">Exam Master</span>
              </h1>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 hidden sm:block">Flutter & Android Cross-Platform Mobile</p>
            </div>
          </div>

          <nav className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setMode('quiz')}
              className={`flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                mode === 'quiz'
                  ? 'bg-white dark:bg-slate-700 text-fpt-orange dark:text-orange-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <SparklesIcon />
              <span className="hidden sm:inline">Luyện Đề</span>
              <span className="sm:hidden">Thi</span>
            </button>
            <button
              onClick={() => setMode('flashcard')}
              className={`flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                mode === 'flashcard'
                  ? 'bg-white dark:bg-slate-700 text-fpt-orange dark:text-orange-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <LayersIcon />
              <span className="hidden sm:inline">Flashcard</span>
              <span className="sm:hidden">Thẻ</span>
            </button>
            <button
              onClick={() => setMode('bank')}
              className={`flex items-center space-x-1 sm:space-x-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                mode === 'bank'
                  ? 'bg-white dark:bg-slate-700 text-fpt-orange dark:text-orange-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookOpenIcon />
              <span className="hidden sm:inline">Ngân Hàng Câu Hỏi</span>
              <span className="sm:hidden">Kho</span>
            </button>
          </nav>

          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <div className="hidden md:flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mr-1.5"></span>
              248 câu
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 sm:p-2 rounded-xl text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Chuyển chế độ sáng/tối"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 lg:p-8">
        {mode === 'quiz' && (
          <QuizView 
            allQuestions={questions} 
            bookmarks={bookmarks} 
            toggleBookmark={toggleBookmark}
            onOpenImage={setLightboxImage}
          />
        )}
        {mode === 'flashcard' && (
          <FlashcardView 
            allQuestions={questions} 
            bookmarks={bookmarks} 
            toggleBookmark={toggleBookmark}
            onOpenImage={setLightboxImage}
          />
        )}
        {mode === 'bank' && (
          <BankView 
            allQuestions={questions} 
            bookmarks={bookmarks} 
            toggleBookmark={toggleBookmark}
            onOpenImage={setLightboxImage}
          />
        )}
      </main>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl w-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl p-2" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200 dark:border-slate-800">
              <span className="font-semibold text-sm text-slate-700 dark:text-slate-300 truncate">{lightboxImage}</span>
              <button 
                onClick={() => setLightboxImage(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                <XCircleIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="p-2 flex items-center justify-center max-h-[80vh] overflow-auto">
              <img src={encodeURI(`/${lightboxImage}`)} alt="Ảnh gốc đề thi" className="max-w-full h-auto rounded-lg object-contain shadow" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// QUIZ VIEW
function QuizView({ allQuestions, bookmarks, toggleBookmark, onOpenImage }) {
  const [quizState, setQuizState] = useState('config');
  const [selectedExam, setSelectedExam] = useState('ALL_RANDOM');
  const [examPool, setExamPool] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [flagged, setFlagged] = useState([]);
  const [timeLeft, setTimeLeft] = useState(50 * 60);
  const [timerActive, setTimerActive] = useState(false);
  const [filterReview, setFilterReview] = useState('all');

  const exams = useMemo(() => Array.from(new Set(allQuestions.map(q => q.exam))), [allQuestions]);

  const startQuiz = (examChoice) => {
    let pool = [];
    if (examChoice === 'ALL_RANDOM') {
      const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
      pool = shuffled.slice(0, 50);
    } else if (examChoice === 'BOOKMARKED') {
      pool = allQuestions.filter(q => bookmarks.includes(q.id));
      if (pool.length === 0) {
        alert('Bạn chưa đánh dấu câu hỏi nào để ôn tập!');
        return;
      }
      pool.sort(() => 0.5 - Math.random());
    } else {
      pool = allQuestions.filter(q => q.exam === examChoice);
      pool.sort((a, b) => a.questionNumber - b.questionNumber);
    }

    setExamPool(pool);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlagged([]);
    setTimeLeft(Math.min(pool.length, 50) * 60);
    setTimerActive(true);
    setQuizState('in_progress');
  };

  useEffect(() => {
    let timer = null;
    if (timerActive && quizState === 'in_progress' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
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
    setUserAnswers(prev => {
      const next = { ...prev };
      if (next[currentIndex] === optKey) {
        delete next[currentIndex];
      } else {
        next[currentIndex] = optKey;
      }
      return next;
    });
  };

  const toggleFlag = (index) => {
    setFlagged(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  const finishQuiz = () => {
    setTimerActive(false);
    setQuizState('result');
    let correctCount = 0;
    examPool.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) correctCount++;
    });
    if (correctCount / examPool.length >= 0.7) {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    }
  };

  if (quizState === 'config') {
    return (
      <div className="max-w-3xl mx-auto space-y-8 py-6">
        <div className="text-center space-y-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 dark:bg-orange-950 text-fpt-orange dark:text-orange-400 uppercase tracking-wider">
            Chế độ Luyện Đề
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Thi Thử Trắc Nghiệm PRM393
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Luyện tập trắc nghiệm chọn lọc từ các đề thi chính thức kỳ SU26 & SP26. Mỗi đề chuẩn 50 câu hỏi xáo trộn ngẫu nhiên.
          </p>
        </div>

        {/* 50 Random Questions Card */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-fpt-orange text-white shadow-xl shadow-orange-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm text-white">
              🔥 Chế độ chuẩn đề thi
            </div>
            <h3 className="text-2xl font-black">50 Câu Hỏi Ngẫu Nhiên</h3>
            <p className="text-white/90 text-sm max-w-md">
              Rút trích 50 câu ngẫu nhiên từ toàn bộ kho 248 câu hỏi của tất cả các mã đề để thi thử như thi thật.
            </p>
          </div>
          <button
            onClick={() => startQuiz('ALL_RANDOM')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-orange-600 font-extrabold text-base hover:bg-orange-50 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
          >
            Bắt Đầu Ngay 🚀
          </button>
        </div>

        {/* Exams List */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-700/60 space-y-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <span>📚 Hoặc Luyện Theo Từng Mã Đề</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {exams.map(exam => {
              const count = allQuestions.filter(q => q.exam === exam).length;
              return (
                <button
                  key={exam}
                  onClick={() => startQuiz(exam)}
                  className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-fpt-orange dark:hover:border-fpt-orange text-left hover:bg-orange-50/50 dark:hover:bg-slate-750 transition-all group flex items-center justify-between"
                >
                  <div>
                    <div className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-fpt-orange transition-colors">
                      {exam}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {count} câu hỏi trắc nghiệm
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-orange-100 dark:group-hover:bg-orange-950 group-hover:text-fpt-orange transition-all">
                    Làm đề →
                  </span>
                </button>
              );
            })}

            {bookmarks.length > 0 && (
              <button
                onClick={() => startQuiz('BOOKMARKED')}
                className="p-4 rounded-2xl border border-amber-300 dark:border-amber-700 bg-amber-50/40 dark:bg-amber-950/20 text-left hover:border-amber-500 transition-all flex items-center justify-between sm:col-span-2"
              >
                <div className="flex items-center space-x-3">
                  <BookmarkIcon filled={true} className="w-6 h-6 text-amber-500" />
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      Ôn Các Câu Đã Đánh Dấu
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {bookmarks.length} câu hỏi bạn đã lưu lại
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-amber-500 text-white">
                  Ôn tập →
                </span>
              </button>
            )}
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center space-x-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <span className="p-2 rounded-xl bg-orange-100 dark:bg-orange-950/80 text-fpt-orange font-bold text-base shrink-0">🔒</span>
            <span>
              <strong>Chế độ thi chuẩn FPTU:</strong> Khi chọn câu trả lời sẽ không hiển thị đáp án ngay. Toàn bộ kết quả, đáp án đúng và lời giải chi tiết sẽ được hiển thị ngay sau khi bạn bấm <strong>Nộp bài</strong>.
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (quizState === 'in_progress' && examPool.length > 0) {
    const currQ = examPool[currentIndex];
    const selectedOpt = userAnswers[currentIndex];
    const isFlagged = flagged.includes(currentIndex);
    const isBookmarked = bookmarks.includes(currQ.id);

    return (
      <div className="max-w-5xl mx-auto space-y-3 py-1 sm:py-4">
        {/* Mobile Sticky Bar: Luôn theo dõi thời gian và số câu đã làm */}
        <div className="lg:hidden sticky top-14 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <div className="flex items-center space-x-1.5 text-xs font-bold">
            <span className="text-slate-500">Đã làm:</span>
            <span className="px-2 py-0.5 rounded-lg bg-orange-100 dark:bg-orange-950 text-fpt-orange">
              {Object.keys(userAnswers).length} / {examPool.length}
            </span>
          </div>
          <div className="font-mono text-base font-extrabold text-fpt-orange flex items-center space-x-1">
            <span>⏱️</span>
            <span>{formatTime(timeLeft)}</span>
          </div>
          <button
            onClick={finishQuiz}
            className="px-3 py-1.5 rounded-xl bg-fpt-orange hover:bg-orange-600 text-white font-bold text-xs shadow-sm transition"
          >
            Nộp bài
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-700/60 space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold bg-orange-100 dark:bg-orange-950 text-fpt-orange">
                    Câu {currentIndex + 1} / {examPool.length}
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 truncate max-w-[150px] sm:max-w-[200px]">
                    {currQ.exam}
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <button
                    onClick={() => toggleFlag(currentIndex)}
                    className={`flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                      isFlagged 
                        ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400' 
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    <span>🚩</span>
                    <span className="hidden sm:inline">{isFlagged ? 'Đã ghim' : 'Ghim'}</span>
                  </button>
                  <button
                    onClick={() => toggleBookmark(currQ.id)}
                    className={`p-1.5 sm:p-2 rounded-xl text-xs transition ${
                      isBookmarked 
                        ? 'bg-amber-100 dark:bg-amber-950 text-amber-600' 
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-400 hover:text-slate-700'
                    }`}
                    title="Lưu câu hỏi"
                  >
                    <BookmarkIcon filled={isBookmarked} className="w-4 h-4" />
                  </button>
                  {currQ.image && (
                    <button
                      onClick={() => onOpenImage(currQ.image)}
                      className="flex items-center space-x-1 px-2 sm:px-2.5 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition"
                      title="Xem ảnh gốc của đề thi"
                    >
                      <EyeIcon />
                      <span className="hidden sm:inline">Ảnh gốc</span>
                    </button>
                  )}
                </div>
              </div>

              <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
                {currQ.question}
              </h3>

              <div className="space-y-2 sm:space-y-3 pt-1 sm:pt-2">
                {['A', 'B', 'C', 'D'].map(optKey => {
                  const optText = currQ.options[optKey];
                  if (!optText) return null;
                  const isSelected = selectedOpt === optKey;
                  
                  let btnStyle = "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200";
                  let badgeStyle = "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300";

                  if (isSelected) {
                    btnStyle = "border-fpt-orange bg-orange-50/80 dark:bg-orange-950/40 text-orange-950 dark:text-orange-200 ring-2 ring-fpt-orange/30 shadow-sm";
                    badgeStyle = "bg-fpt-orange text-white font-black";
                  }

                  return (
                    <button
                      key={optKey}
                      onClick={() => handleSelectOption(optKey)}
                      className={`w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all flex items-start space-x-2.5 sm:space-x-3.5 ${btnStyle}`}
                    >
                      <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-all ${badgeStyle}`}>
                        {optKey}
                      </span>
                      <span className="text-xs sm:text-base font-medium pt-0.5 sm:pt-1 leading-snug">
                        {optText}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-700 gap-2">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(prev => prev - 1)}
                  className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 disabled:opacity-40 transition"
                >
                  ← <span className="hidden sm:inline">Câu trước</span><span className="sm:hidden">Trước</span>
                </button>
                <button
                  onClick={() => finishQuiz()}
                  className="px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition"
                >
                  Nộp bài sớm
                </button>
                <button
                  disabled={currentIndex === examPool.length - 1}
                  onClick={() => setCurrentIndex(prev => prev + 1)}
                  className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-fpt-orange text-white hover:bg-orange-600 disabled:opacity-40 transition shadow-sm"
                >
                  <span className="hidden sm:inline">Câu tiếp theo</span><span className="sm:hidden">Tiếp</span> →
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Desktop Timer & Progress Card */}
            <div className="hidden lg:block bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-sm border border-slate-200 dark:border-slate-700/60 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Thời gian còn lại</div>
                <div className="font-mono text-xl font-bold text-fpt-orange flex items-center space-x-1">
                  <span>⏱️</span>
                  <span>{formatTime(timeLeft)}</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                  <span>Đã làm: {Object.keys(userAnswers).length} / {examPool.length}</span>
                  <span>{Math.round((Object.keys(userAnswers).length / examPool.length) * 100)}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-400 to-fpt-orange transition-all duration-300"
                    style={{ width: `${(Object.keys(userAnswers).length / examPool.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <button
                onClick={finishQuiz}
                className="w-full py-3 rounded-2xl bg-fpt-orange hover:bg-orange-600 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all"
              >
                Nộp Bài Chấm Điểm
              </button>
            </div>

            {/* Bảng câu hỏi */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-sm border border-slate-200 dark:border-slate-700/60 space-y-3">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center justify-between">
                <span>Bảng Câu Hỏi</span>
                <span className="text-[11px] sm:text-xs font-normal text-slate-500">Chạm số để chuyển</span>
              </h4>

              <div className="grid grid-cols-5 sm:grid-cols-5 gap-1.5 sm:gap-2 max-h-64 sm:max-h-72 overflow-y-auto p-1">
                {examPool.map((_, idx) => {
                  const isAnswered = userAnswers[idx] !== undefined;
                  const isCurr = currentIndex === idx;
                  const isFlag = flagged.includes(idx);

                  let bg = "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300";
                  if (isCurr) {
                    bg = "ring-2 ring-fpt-orange bg-orange-100 dark:bg-orange-950 text-fpt-orange font-bold";
                  } else if (isAnswered) {
                    bg = "bg-emerald-500 text-white font-semibold";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-8 sm:h-9 rounded-xl text-xs transition-all relative flex items-center justify-center ${bg}`}
                    >
                      {idx + 1}
                      {isFlag && (
                        <span className="absolute -top-1 -right-1 text-[10px]">🚩</span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2.5 sm:pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-[11px] sm:text-xs text-slate-500">
                <div className="flex items-center space-x-1">
                  <span className="w-2.5 h-2.5 rounded bg-emerald-500"></span>
                  <span>Đã làm</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="w-2.5 h-2.5 rounded bg-slate-200 dark:bg-slate-700"></span>
                  <span>Chưa</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>🚩</span>
                  <span>Đã ghim</span>
                </div>
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
      else if (userAns === q.correctAnswer) correctCount++;
      else incorrectCount++;
    });

    const scorePercent = Math.round((correctCount / examPool.length) * 100);
    const passed = scorePercent >= 60;

    const reviewList = examPool.filter((q, idx) => {
      if (filterReview === 'wrong') return userAnswers[idx] && userAnswers[idx] !== q.correctAnswer;
      if (filterReview === 'flagged') return flagged.includes(idx);
      if (filterReview === 'unanswered') return !userAnswers[idx];
      return true;
    });

    return (
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 py-3 sm:py-6">
        <div className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-sm border border-slate-200 dark:border-slate-700/60 text-center space-y-5 sm:space-y-6">
          <div className="inline-flex p-3 sm:p-4 rounded-full bg-slate-100 dark:bg-slate-700">
            <span className="text-4xl sm:text-5xl">{passed ? '🎉' : '💪'}</span>
          </div>

          <div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {passed ? 'Chúc mừng bạn đã hoàn thành xuất sắc!' : 'Hãy cố gắng luyện tập thêm nhé!'}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
              Kết quả thi thử môn PRM393 ({examPool.length} câu hỏi)
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-2xl mx-auto">
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800">
              <div className="text-2xl sm:text-3xl font-black text-fpt-orange">{scorePercent}%</div>
              <div className="text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-slate-400 mt-0.5">Điểm số</div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600">{correctCount}</div>
              <div className="text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-slate-400 mt-0.5">Câu đúng</div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
              <div className="text-2xl sm:text-3xl font-black text-rose-600">{incorrectCount}</div>
              <div className="text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-slate-400 mt-0.5">Câu sai</div>
            </div>
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
              <div className="text-2xl sm:text-3xl font-black text-slate-700 dark:text-slate-300">{unansCount}</div>
              <div className="text-[11px] sm:text-xs font-semibold text-slate-600 dark:text-slate-400 mt-0.5">Chưa làm</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3 pt-2 sm:pt-4">
            <button
              onClick={() => startQuiz('ALL_RANDOM')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl sm:rounded-2xl bg-fpt-orange text-white font-bold hover:bg-orange-600 shadow-lg shadow-orange-500/20 transition text-xs sm:text-sm"
            >
              Thi Đề Mới (50 Câu Khác) 🚀
            </button>
            <button
              onClick={() => setQuizState('config')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition text-xs sm:text-sm"
            >
              Về Trang Luyện Đề
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Xem Lại Đáp Án & Giải Thích Chi Tiết
            </h4>
            <div className="flex items-center space-x-1 sm:space-x-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => setFilterReview('all')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition ${filterReview === 'all' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500'}`}
              >
                Tất cả ({examPool.length})
              </button>
              <button
                onClick={() => setFilterReview('wrong')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition ${filterReview === 'wrong' ? 'bg-white dark:bg-slate-700 text-rose-600 shadow-sm' : 'text-slate-500'}`}
              >
                Câu sai ({incorrectCount})
              </button>
              <button
                onClick={() => setFilterReview('flagged')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg transition ${filterReview === 'flagged' ? 'bg-white dark:bg-slate-700 text-amber-600 shadow-sm' : 'text-slate-500'}`}
              >
                Đã ghim ({flagged.length})
              </button>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {reviewList.map((q) => {
              const origIdx = examPool.findIndex(item => item.id === q.id);
              const userAns = userAnswers[origIdx];
              const isCorrect = userAns === q.correctAnswer;

              return (
                <div 
                  key={q.id}
                  className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700/60 space-y-3 sm:space-y-4"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      Câu {origIdx + 1} • {q.exam}
                    </span>
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      {isCorrect ? (
                        <span className="flex items-center text-[11px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2 sm:px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                          <CheckCircleIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" /> Đúng
                        </span>
                      ) : (
                        <span className="flex items-center text-[11px] sm:text-xs font-bold text-rose-600 bg-rose-50 dark:bg-rose-950/40 px-2 sm:px-2.5 py-1 rounded-full border border-rose-200 dark:border-rose-800">
                          <XCircleIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" /> {userAns ? `Sai (${userAns})` : 'Chưa làm'}
                        </span>
                      )}
                      <button
                        onClick={() => toggleBookmark(q.id)}
                        className="p-1 sm:p-1.5 text-slate-400 hover:text-amber-500 transition"
                      >
                        <BookmarkIcon filled={bookmarks.includes(q.id)} className="w-4 h-4" />
                      </button>
                      {q.image && (
                        <button
                          onClick={() => onOpenImage(q.image)}
                          className="text-slate-400 hover:text-fpt-orange p-1 sm:p-1.5 transition"
                          title="Xem ảnh gốc"
                        >
                          <EyeIcon />
                        </button>
                      )}
                    </div>
                  </div>

                  <h5 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-relaxed">
                    {q.question}
                  </h5>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs sm:text-sm">
                    {['A', 'B', 'C', 'D'].map(k => {
                      const optText = q.options[k];
                      if (!optText) return null;
                      const isUser = userAns === k;
                      const isRight = q.correctAnswer === k;
                      
                      let border = "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400";
                      if (isRight) border = "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200 font-semibold";
                      else if (isUser && !isRight) border = "border-rose-500 bg-rose-50/50 dark:bg-rose-950/30 text-rose-800 dark:text-rose-200";

                      return (
                        <div key={k} className={`p-2.5 sm:p-3 rounded-xl border flex items-start space-x-2 ${border}`}>
                          <span className="font-bold shrink-0">{k}.</span>
                          <span className="leading-snug">{optText}</span>
                        </div>
                      );
                    })}
                  </div>

                  {q.explanation && (
                    <div className="text-xs sm:text-sm p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-750 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80">
                      💡 <strong>Giải thích:</strong> {q.explanation}
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

// FLASHCARD VIEW
function FlashcardView({ allQuestions, bookmarks, toggleBookmark, onOpenImage }) {
  const [filterExam, setFilterExam] = useState(() => {
    try { return localStorage.getItem('prm_flashcard_filter') || 'ALL'; } catch { return 'ALL'; }
  });
  const [flipped, setFlipped] = useState(false);
  const [isFlippingAnim, setIsFlippingAnim] = useState(true);
  const [masteredIds, setMasteredIds] = useState(() => {
    try { return JSON.parse(localStorage.getItem('prm_mastered') || '[]'); } catch { return []; }
  });

  const exams = useMemo(() => Array.from(new Set(allQuestions.map(q => q.exam))), [allQuestions]);

  const deck = useMemo(() => {
    let list = allQuestions;
    if (filterExam === 'BOOKMARKED') {
      list = allQuestions.filter(q => bookmarks.includes(q.id));
    } else if (filterExam !== 'ALL') {
      list = allQuestions.filter(q => q.exam === filterExam);
    }
    return list;
  }, [allQuestions, filterExam, bookmarks]);

  const [currentIndex, setCurrentIndex] = useState(() => {
    try {
      const savedFilter = localStorage.getItem('prm_flashcard_filter') || 'ALL';
      const map = JSON.parse(localStorage.getItem('prm_flashcard_progress_map') || '{}');
      if (typeof map[savedFilter] === 'number') return map[savedFilter];
      const saved = localStorage.getItem('prm_flashcard_index');
      return saved ? parseInt(saved, 10) || 0 : 0;
    } catch {
      return 0;
    }
  });

  // Keep index within deck bounds
  useEffect(() => {
    if (deck.length > 0 && currentIndex >= deck.length) {
      setCurrentIndex(0);
    }
  }, [deck.length, currentIndex]);

  // Persist flashcard progress to local storage
  useEffect(() => {
    try {
      localStorage.setItem('prm_flashcard_filter', filterExam);
      localStorage.setItem('prm_flashcard_index', currentIndex.toString());
      const map = JSON.parse(localStorage.getItem('prm_flashcard_progress_map') || '{}');
      map[filterExam] = currentIndex;
      localStorage.setItem('prm_flashcard_progress_map', JSON.stringify(map));
    } catch (e) {
      console.error(e);
    }
  }, [currentIndex, filterExam]);

  const currCard = deck[currentIndex] || deck[0];

  // Chỉ nạp nội dung của thẻ vào mặt sau khi người dùng chủ động lật thẻ
  // Nhờ đó khi chuyển sang thẻ mới mà chưa lật, mặt sau tuyệt đối không chứa đáp án của thẻ mới!
  const [revealedCard, setRevealedCard] = useState(currCard);

  // Chuyển thẻ an toàn: tắt hiệu ứng lật ngược tức thì và reset lật
  const changeCard = (newIndex) => {
    setIsFlippingAnim(false);
    setFlipped(false);
    setCurrentIndex(newIndex);
    // Bật lại hiệu ứng 3D sau khi thẻ mới đã ở mặt trước (0deg)
    setTimeout(() => {
      setIsFlippingAnim(true);
    }, 60);
  };

  const handleNext = () => {
    if (currentIndex < deck.length - 1) {
      changeCard(currentIndex + 1);
    } else {
      changeCard(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      changeCard(currentIndex - 1);
    } else {
      changeCard(deck.length - 1);
    }
  };

  const handleFlip = () => {
    setIsFlippingAnim(true);
    if (!flipped && currCard) {
      setRevealedCard(currCard);
    }
    setFlipped(prev => !prev);
  };

  const shuffleDeck = () => {
    setIsFlippingAnim(false);
    setFlipped(false);
    const rand = Math.floor(Math.random() * deck.length);
    setCurrentIndex(rand);
    setTimeout(() => setIsFlippingAnim(true), 60);
  };

  const toggleMastered = (id) => {
    setMasteredIds(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      localStorage.setItem('prm_mastered', JSON.stringify(next));
      return next;
    });
  };

  // Hỗ trợ thao tác vuốt màn hình cảm ứng trên điện thoại
  const touchStartRef = React.useRef({ x: 0, y: 0, time: 0 });
  const hasSwipedRef = React.useRef(false);

  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now()
      };
      hasSwipedRef.current = false;
    }
  };

  const handleTouchEnd = (e) => {
    if (!e.changedTouches || !e.changedTouches[0]) return;
    const diffX = touchStartRef.current.x - e.changedTouches[0].clientX;
    const diffY = touchStartRef.current.y - e.changedTouches[0].clientY;
    const elapsed = Date.now() - touchStartRef.current.time;

    // Vuốt ngang dứt khoát: trong 600ms, khoảng cách > 45px và góc nghiêng ngang
    if (elapsed < 600 && Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY) * 1.4) {
      hasSwipedRef.current = true;
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleCardClick = () => {
    if (hasSwipedRef.current) {
      hasSwipedRef.current = false;
      return;
    }
    handleFlip();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
      if (e.code === 'Space' || e.code === 'Enter' || e.key === 'Enter') {
        e.preventDefault();
        handleFlip();
      } else if (e.code === 'ArrowRight') {
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, deck, flipped, currCard]);

  if (!currCard) {
    return (
      <div className="text-center py-12 space-y-4">
        <p className="text-slate-500">Không có thẻ nào trong bộ lọc này.</p>
        <button onClick={() => setFilterExam('ALL')} className="px-4 py-2 rounded-xl bg-fpt-orange text-white text-sm font-bold">
          Xem tất cả thẻ
        </button>
      </div>
    );
  }

  const isMastered = masteredIds.includes(currCard.id);
  const isBookmarked = bookmarks.includes(currCard.id);
  const displayBackCard = revealedCard || currCard;

  return (
    <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6 py-2 sm:py-6">
      <div className="space-y-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <select
            value={filterExam}
            onChange={e => {
              const nextFilter = e.target.value;
              setFilterExam(nextFilter);
              try {
                const map = JSON.parse(localStorage.getItem('prm_flashcard_progress_map') || '{}');
                const savedIdx = typeof map[nextFilter] === 'number' ? map[nextFilter] : 0;
                changeCard(savedIdx);
              } catch {
                changeCard(0);
              }
            }}
            className="w-full sm:w-auto px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-fpt-orange shadow-sm"
          >
            <option value="ALL">Tất cả đề ({allQuestions.length} câu)</option>
            {exams.map(ex => (
              <option key={ex} value={ex}>{ex}</option>
            ))}
            {bookmarks.length > 0 && (
              <option value="BOOKMARKED">⭐ Đã đánh dấu ({bookmarks.length} câu)</option>
            )}
          </select>

          <div className="flex items-center justify-between sm:justify-end space-x-2">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Thẻ {currentIndex + 1} / {deck.length} ({Math.round(((currentIndex + 1) / deck.length) * 100)}%)
            </span>
            <div className="flex items-center space-x-1.5">
              <button
                onClick={() => {
                  if (window.confirm('Bạn có muốn đặt lại tiến trình về thẻ đầu tiên?')) {
                    changeCard(0);
                  }
                }}
                className="px-2.5 py-1.5 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition text-xs font-bold"
                title="Về thẻ đầu tiên"
              >
                ⏮ Đầu
              </button>
              <button
                onClick={shuffleDeck}
                className="p-1.5 px-2 rounded-xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition"
                title="Xáo trộn ngẫu nhiên"
              >
                <RotateIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Thanh tiến trình Flashcard */}
        <div className="w-full bg-slate-200 dark:bg-slate-700/60 h-1.5 rounded-full overflow-hidden">
          <div 
            className="bg-gradient-to-r from-orange-400 to-fpt-orange h-full rounded-full transition-all duration-300"
            style={{ width: `${Math.min(100, Math.max(0, ((currentIndex + 1) / deck.length) * 100))}%` }}
          />
        </div>
      </div>

      {/* Thẻ 3D Flashcard có hỗ trợ Touch Swipe và chống lộ đáp án */}
      <div 
        className="perspective-1000 w-full min-h-[380px] sm:min-h-[440px] cursor-pointer select-none"
        onClick={handleCardClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`relative w-full h-full min-h-[380px] sm:min-h-[440px] rounded-2xl sm:rounded-3xl p-4 sm:p-8 transform-style-3d shadow-xl border ${
          isFlippingAnim ? 'transition-transform duration-500' : 'transition-none'
        } ${
          flipped ? 'rotate-y-180 bg-white dark:bg-slate-800 border-orange-300 dark:border-orange-800' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'
        }`}>
          {/* MẶT TRƯỚC: CÂU HỎI */}
          <div className={`absolute inset-0 p-4 sm:p-8 flex flex-col justify-between backface-hidden overflow-y-auto ${
            flipped ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}>
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-extrabold bg-orange-100 dark:bg-orange-950 text-fpt-orange uppercase">
                  Câu Hỏi • #{currCard.questionNumber}
                </span>
                <div className="flex items-center space-x-1.5 sm:space-x-2" onClick={e => e.stopPropagation()}>
                  <button
                    onClick={() => toggleBookmark(currCard.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-amber-500 transition"
                  >
                    <BookmarkIcon filled={isBookmarked} className="w-5 h-5" />
                  </button>
                  {currCard.image && (
                    <button
                      onClick={() => onOpenImage(currCard.image)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-fpt-orange transition"
                      title="Xem ảnh gốc"
                    >
                      <EyeIcon />
                    </button>
                  )}
                </div>
              </div>

              <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
                {currCard.question}
              </h3>

              <div className="mt-3.5 sm:mt-6 space-y-1.5 sm:space-y-2">
                {['A', 'B', 'C', 'D'].map(k => {
                  if (!currCard.options[k]) return null;
                  return (
                    <div key={k} className="p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-slate-750 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start space-x-2 border border-slate-100 dark:border-slate-700">
                      <span className="font-bold text-slate-400 shrink-0">{k}.</span>
                      <span className="leading-snug">{currCard.options[k]}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-[11px] sm:text-xs text-slate-400 mt-4">
              <span className="hidden sm:inline">Mẹo: Nhấn Enter hoặc Space để lật</span>
              <span className="sm:hidden">Chạm để lật thẻ</span>
              <span className="font-semibold text-fpt-orange flex items-center">
                Lật xem đáp án ↷
              </span>
            </div>
          </div>

          {/* MẶT SAU: ĐÁP ÁN & GIẢI THÍCH (Chỉ render nội dung khi đã lật để ngăn lộ đáp án câu mới) */}
          <div className={`absolute inset-0 p-4 sm:p-8 flex flex-col justify-between backface-hidden rotate-y-180 overflow-y-auto ${
            !flipped ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                  Đáp Án Chính Xác
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 truncate max-w-[150px] sm:max-w-none">{displayBackCard.exam}</span>
              </div>

              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center space-x-3 sm:space-x-4">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500 text-white font-black text-xl sm:text-2xl flex items-center justify-center shrink-0 shadow-md">
                  {displayBackCard.correctAnswer}
                </span>
                <span className="text-sm sm:text-lg font-bold text-emerald-900 dark:text-emerald-200 leading-snug">
                  {displayBackCard.options[displayBackCard.correctAnswer]}
                </span>
              </div>

              {displayBackCard.explanation && (
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-750 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
                  <div className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">Giải Thích Chi Tiết</div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {displayBackCard.explanation}
                  </p>
                </div>
              )}
            </div>

            <div className="pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between text-[11px] sm:text-xs text-slate-400 mt-4">
              <span className="hidden sm:inline">Nhấn Enter / Space để lật lại</span>
              <span className="sm:hidden">Chạm để xem câu hỏi</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMastered(displayBackCard.id);
                }}
                className={`px-2.5 sm:px-3 py-1.5 rounded-xl font-bold text-[11px] sm:text-xs transition ${
                  masteredIds.includes(displayBackCard.id) ? 'bg-emerald-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {masteredIds.includes(displayBackCard.id) ? '✓ Đã thuộc' : 'Đánh dấu đã thuộc'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hàng 3 nút điều khiển tối ưu Mobile */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-1 sm:pt-2">
        <button
          onClick={handlePrev}
          className="h-11 sm:h-12 px-2 sm:px-5 rounded-2xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 active:scale-95 transition shadow-sm flex items-center justify-center space-x-1"
        >
          <span>←</span>
          <span className="hidden sm:inline">Thẻ trước</span>
          <span className="sm:hidden">Trước</span>
        </button>
        <button
          onClick={handleFlip}
          className="h-11 sm:h-12 px-2 sm:px-6 rounded-2xl bg-orange-100 dark:bg-orange-950/80 text-fpt-orange font-bold text-xs sm:text-sm hover:bg-orange-200 active:scale-95 transition flex items-center justify-center space-x-1 shadow-sm"
        >
          <span>🔄</span>
          <span>{flipped ? 'Câu hỏi' : 'Lật thẻ'}</span>
        </button>
        <button
          onClick={handleNext}
          className="h-11 sm:h-12 px-2 sm:px-5 rounded-2xl bg-fpt-orange text-white font-bold text-xs sm:text-sm hover:bg-orange-600 active:scale-95 transition shadow-md shadow-orange-500/20 flex items-center justify-center space-x-1"
        >
          <span className="hidden sm:inline">Thẻ tiếp theo</span>
          <span className="sm:hidden">Tiếp</span>
          <span>→</span>
        </button>
      </div>

      <p className="text-center text-[11px] text-slate-400 sm:hidden">
        💡 Mẹo: Có thể vuốt sang trái/phải trên thẻ để chuyển câu
      </p>
    </div>
  );
}

// BANK VIEW
function BankView({ allQuestions, bookmarks, toggleBookmark, onOpenImage }) {
  const [search, setSearch] = useState('');
  const [filterExam, setFilterExam] = useState('ALL');
  const [filterBookmarkOnly, setFilterBookmarkOnly] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const exams = useMemo(() => Array.from(new Set(allQuestions.map(q => q.exam))), [allQuestions]);

  const filteredList = useMemo(() => {
    return allQuestions.filter(q => {
      if (filterExam !== 'ALL' && q.exam !== filterExam) return false;
      if (filterBookmarkOnly && !bookmarks.includes(q.id)) return false;
      if (search.trim()) {
        const term = search.toLowerCase();
        const inQ = q.question.toLowerCase().includes(term);
        const inOpts = Object.values(q.options).some(t => t.toLowerCase().includes(term));
        const inExp = q.explanation.toLowerCase().includes(term);
        if (!inQ && !inOpts && !inExp) return false;
      }
      return true;
    });
  }, [allQuestions, search, filterExam, filterBookmarkOnly, bookmarks]);

  return (
    <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 py-2 sm:py-6">
      <div className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-700/60 space-y-3 sm:space-y-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Ngân Hàng 248 Câu Hỏi PRM393
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-0.5">
            Tra cứu, tìm kiếm và xem toàn bộ đề bài, các phương án lựa chọn và đáp án chi tiết.
          </p>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Tìm kiếm theo từ khóa (Dart, Flutter, BLoC, SQLite...)..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-fpt-orange transition"
          />
          <span className="absolute left-3 sm:left-4 top-2.5 sm:top-3.5 text-xs sm:text-sm text-slate-400">🔍</span>
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-2.5 sm:top-3 text-slate-400 hover:text-slate-600 text-xs sm:text-sm p-0.5"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1 sm:pt-2">
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={filterExam}
              onChange={e => setFilterExam(e.target.value)}
              className="px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-700 border-none text-slate-700 dark:text-slate-300"
            >
              <option value="ALL">Tất cả mã đề</option>
              {exams.map(ex => (
                <option key={ex} value={ex}>{ex}</option>
              ))}
            </select>

            <button
              onClick={() => setFilterBookmarkOnly(!filterBookmarkOnly)}
              className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center space-x-1 ${
                filterBookmarkOnly 
                  ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 border border-amber-300' 
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              <span>⭐</span>
              <span>Đã lưu ({bookmarks.length})</span>
            </button>
          </div>

          <span className="text-[11px] sm:text-xs font-bold text-slate-500">
            Tìm thấy {filteredList.length} câu
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {filteredList.map((q) => {
          const isExpanded = expandedId === q.id;
          const isBookmarked = bookmarks.includes(q.id);

          return (
            <div 
              key={q.id}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700/60 overflow-hidden transition-all"
            >
              <div 
                onClick={() => setExpandedId(isExpanded ? null : q.id)}
                className="p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50/60 dark:hover:bg-slate-750 transition"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      #{q.questionNumber}
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {q.exam}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                      Đ/A: {q.correctAnswer}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-snug">
                    {q.question}
                  </h4>
                </div>

                <div className="flex items-center space-x-1 shrink-0" onClick={e => e.stopPropagation()}>
                  <button
                    onClick={() => toggleBookmark(q.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-amber-500 transition"
                  >
                    <BookmarkIcon filled={isBookmarked} className="w-4 h-4" />
                  </button>
                  {q.image && (
                    <button
                      onClick={() => onOpenImage(q.image)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-fpt-orange transition"
                      title="Xem ảnh gốc"
                    >
                      <EyeIcon />
                    </button>
                  )}
                  <span className="p-1 text-slate-400 text-xs">
                    {isExpanded ? '▲' : '▼'}
                  </span>
                </div>
              </div>

              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-700 space-y-3 bg-slate-50/50 dark:bg-slate-850">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                    {['A', 'B', 'C', 'D'].map(k => {
                      const optText = q.options[k];
                      if (!optText) return null;
                      const isRight = q.correctAnswer === k;
                      return (
                        <div 
                          key={k} 
                          className={`p-3 rounded-xl border flex items-start space-x-2 ${
                            isRight 
                              ? 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold' 
                              : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          <span>{k}.</span>
                          <span>{optText}</span>
                        </div>
                      );
                    })}
                  </div>

                  {q.explanation && (
                    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      💡 <strong>Giải thích:</strong> {q.explanation}
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
