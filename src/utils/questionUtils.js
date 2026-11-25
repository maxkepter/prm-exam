import prmQuestions from '../data/questions.json';
import ite302cQuestions from '../data/ite302c_questions.json';

export const SUBJECTS = {
  PRM393: {
    code: 'PRM393',
    subtitle: 'Flutter & Android Cross-Platform Mobile',
    placeholder: 'Tìm kiếm theo từ khóa (Dart, Flutter, BLoC, SQLite...)...',
    questions: prmQuestions,
  },
  ITE302c: {
    code: 'ITE302c',
    subtitle: 'Ethics in IT & AI Governance',
    placeholder: 'Tìm kiếm theo từ khóa (privacy, fairness, risk, GDPR...)...',
    questions: ite302cQuestions,
  },
};

export const isCorrectOption = (answerStr, optKey) =>
  Boolean(answerStr && answerStr.includes(optKey));

export const isAnswerMatch = (userAns, correctAnswer) => {
  if (!userAns || !correctAnswer) return false;
  const sortLetters = (s) => s.split('').sort().join('');
  return sortLetters(userAns) === sortLetters(correctAnswer);
};

export const formatOptionsText = (options, answerStr) =>
  (answerStr || '')
    .split('')
    .map((k) => options?.[k])
    .filter(Boolean)
    .join(' | ');

export const dedupeQuestions = (list) => {
  const norm = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const seen = new Set();
  return list.filter((q) => {
    const optSig = Object.values(q.options || {}).map(norm).sort().join('|');
    const key = `${norm(q.question)}__${optSig}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};
