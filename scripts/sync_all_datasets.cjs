// sync_all_datasets.cjs
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../..');
const prmAppQuestionsPath = path.join(rootDir, 'prm-app/src/data/questions.json');
const prmAppPublicQuestionsPath = path.join(rootDir, 'prm-app/public/prm393_questions.json');
const prmQuestionsPath = path.join(rootDir, 'prm/prm393_questions.json');
const prmIndexPath = path.join(rootDir, 'prm/index.html');

const su26ReData = require('./su26_re_data.cjs');
const su26B5Data = require('./su26_b5_fixes.cjs');
const su26FeData = require('./su26_fe_fixes.cjs');

console.log('Loading existing questions from:', prmAppQuestionsPath);
const originalQuestions = JSON.parse(fs.readFileSync(prmAppQuestionsPath, 'utf8'));

// Filter out the three exams being updated
const spB5Data = originalQuestions.filter(q => q.exam === 'PRM393 - SP26 - B5 - FE');
const spFeData = originalQuestions.filter(q => q.exam === 'PRM393 - SP26 - FE');

console.log('Kept SP26 B5 FE:', spB5Data.length);
console.log('Kept SP26 FE:', spFeData.length);
console.log('New SU26 B5 FE:', su26B5Data.length);
console.log('New SU26 FE:', su26FeData.length);
console.log('New SU26 FE RE:', su26ReData.length);

const finalQuestions = [
  ...spB5Data,
  ...spFeData,
  ...su26B5Data,
  ...su26FeData,
  ...su26ReData
];

console.log('Total merged questions:', finalQuestions.length);

// Validation
if (finalQuestions.length !== 248) {
  throw new Error(`Expected 248 questions, got ${finalQuestions.length}`);
}

finalQuestions.forEach((q, idx) => {
  if (!q.id || !q.exam || !q.question || !q.options || !q.correctAnswer || !q.explanation || !q.image) {
    throw new Error(`Missing mandatory field at index ${idx}: ${JSON.stringify(q)}`);
  }
  const opts = Object.keys(q.options);
  if (opts.length !== 4 || !q.options.A || !q.options.B || !q.options.C || !q.options.D) {
    throw new Error(`Invalid options at Q${q.questionNumber} (${q.exam}): ${JSON.stringify(q.options)}`);
  }
  if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) {
    throw new Error(`Invalid correctAnswer '${q.correctAnswer}' at Q${q.questionNumber} (${q.exam})`);
  }
  if (q.explanation.includes('Đáp án tham khảo')) {
    throw new Error(`Generic explanation still present at Q${q.questionNumber} (${q.exam}): ${q.explanation}`);
  }
  if (q.explanation.length < 50) {
    throw new Error(`Explanation too short (<50 chars) at Q${q.questionNumber} (${q.exam}): ${q.explanation}`);
  }
});

console.log('All 248 questions passed validation 100%!');

const jsonContent = JSON.stringify(finalQuestions, null, 2);

// 1. Write to prm-app/src/data/questions.json
fs.writeFileSync(prmAppQuestionsPath, jsonContent, 'utf8');
console.log('Updated:', prmAppQuestionsPath);

// 2. Write to prm-app/public/prm393_questions.json
fs.writeFileSync(prmAppPublicQuestionsPath, jsonContent, 'utf8');
console.log('Updated:', prmAppPublicQuestionsPath);

// 3. Write to prm/prm393_questions.json
fs.writeFileSync(prmQuestionsPath, jsonContent, 'utf8');
console.log('Updated:', prmQuestionsPath);

// 4. Update prm/index.html
const indexHtmlContent = fs.readFileSync(prmIndexPath, 'utf8');
const regex = /window\.RAW_QUESTIONS\s*=\s*\[[\s\S]*?\];/;
if (!regex.test(indexHtmlContent)) {
  throw new Error('Could not find window.RAW_QUESTIONS in prm/index.html');
}
const updatedHtml = indexHtmlContent.replace(regex, `window.RAW_QUESTIONS = ${JSON.stringify(finalQuestions)};`);
fs.writeFileSync(prmIndexPath, updatedHtml, 'utf8');
console.log('Updated:', prmIndexPath);

console.log('ALL 4 TARGET FILES SYNCHRONIZED SUCCESSFULLY!');
