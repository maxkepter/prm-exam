import React, { useState, useEffect, useMemo } from 'react';
import { SUBJECTS } from './utils/questionUtils';
import Header from './components/Header';
import QuizView from './components/QuizView';
import FlashcardView from './components/FlashcardView';
import BankView from './components/BankView';
import LightboxModal from './components/LightboxModal';

export default function App() {
  const [subject, setSubject] = useState(() => {
    try {
      return localStorage.getItem('exam_subject') || 'PRM393';
    } catch {
      return 'PRM393';
    }
  });
  const activeSubject = SUBJECTS[subject] || SUBJECTS.PRM393;
  const questions = activeSubject.questions;

  const [mode, setMode] = useState('quiz');
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem('exam_theme') === 'dark';
    } catch {
      return false;
    }
  });
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('prm_bookmarks') || '[]');
    } catch {
      return [];
    }
  });
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('exam_subject', subject);
    } catch {}
  }, [subject]);

  const subjectBookmarks = useMemo(() => {
    const idSet = new Set(questions.map((q) => q.id));
    return bookmarks.filter((id) => idSet.has(id));
  }, [bookmarks, questions]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('exam_theme', darkMode ? 'dark' : 'light');
    } catch {}
  }, [darkMode]);

  const toggleBookmark = (id) => {
    setBookmarks((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        localStorage.setItem('prm_bookmarks', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        subject={subject}
        setSubject={setSubject}
        mode={mode}
        setMode={setMode}
        questionCount={questions.length}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {mode === 'quiz' && (
          <QuizView
            key={subject}
            subject={subject}
            subtitle={activeSubject.subtitle}
            allQuestions={questions}
            bookmarks={subjectBookmarks}
            toggleBookmark={toggleBookmark}
            onOpenImage={setLightboxImage}
          />
        )}
        {mode === 'flashcard' && (
          <FlashcardView
            key={subject}
            subject={subject}
            allQuestions={questions}
            bookmarks={subjectBookmarks}
            toggleBookmark={toggleBookmark}
            onOpenImage={setLightboxImage}
          />
        )}
        {mode === 'bank' && (
          <BankView
            key={subject}
            subject={subject}
            placeholder={activeSubject.placeholder}
            allQuestions={questions}
            bookmarks={subjectBookmarks}
            toggleBookmark={toggleBookmark}
            onOpenImage={setLightboxImage}
          />
        )}
      </main>

      <LightboxModal image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  );
}
