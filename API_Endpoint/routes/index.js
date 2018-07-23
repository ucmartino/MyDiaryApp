import Diaries from '../controller/diary';
import diaries from '../model/diary';

export default (app) => {
  app.get('/api/v1/diaries', Diaries.getDiaries);
  app.get('/api/v1/diaries/:diaryId', Diaries.retrieveDiary);
  app.post('/api/v1/diaries', Diaries.createDiary);
  app.put('/api/v1/diaries/:diaryId', Diaries.updateDiary);
  app.delete('/api/v1/diaries/:diaryId', Diaries.removeDiary);
};