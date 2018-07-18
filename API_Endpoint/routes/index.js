import Diaries from '../controller/diary';
import diaries from '../model/diary';

export default (app) => {
  app.get('/api/v1/diaries', Diaries.getDiary);
  app.post('/api/v1/diaries', Diaries.createDiaries);
  app.put('/api/diaries/:diaryId', Diaries.updateDcreateDiaries);
  app.delete('/api/diaries/:diaryId', Diaries.removeDcreateDiaries);
  app.get('/api/diaries/:diaryId', Diaries.retrieveDcreateDiaries);
};