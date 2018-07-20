import chai from 'chai';
import chaiHttp from 'chai-http';
import diaries from "../model/diary";
import server from "../starter";

const should = chai.should();
chai.use(chaiHttp);

describe('/GET diaries', () => {
  it('it should GET all the diaries', (done) => {
    chai.request(server)
      .get('/api/v1/diaries')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});