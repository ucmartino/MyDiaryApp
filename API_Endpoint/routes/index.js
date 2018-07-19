const Diaries = require('../controller/diary');
const diaries = require('../model/diary');

module.exports = (app) => {
  app.get('/api/v1/diaries', Diaries.getDiary);
  app.get('/api/v1/diaries/:diaryId', Diaries.retrieveDiaries);
  app.post('/api/v1/diaries', Diaries.createDiaries);
  app.put('/api/v1/diaries/:diaryId', Diaries.updateDiaries);
  app.delete('/api/v1/diaries/:diaryId', Diaries.removeDiaries);
};