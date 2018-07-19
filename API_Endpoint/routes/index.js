const Diaries = require('../controller/diary');
const diaries = require('../model/diary');

module.exports = (app) => {
  app.get('/api/v1/diaries', Diaries.getDiaries);
  app.get('/api/v1/diaries/:diaryId', Diaries.retrieveDiary);
  app.post('/api/v1/diaries', Diaries.createDiary);
  app.put('/api/v1/diaries/:diaryId', Diaries.updateDiary);
  app.delete('/api/v1/diaries/:diaryId', Diaries.removeDiary);
};