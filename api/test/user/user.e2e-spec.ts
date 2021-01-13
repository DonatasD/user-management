import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import * as faker from 'faker';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async (done) => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    done();
  });

  afterAll(async (done) => {
    await app.close();
    done();
  });

  describe('/users (GET)', () => {
    it('successfully retrieves no users', (done) => {
      request(app.getHttpServer())
        .get('/users')
        .expect(200)
        .expect([]);
      done();
    });
  });

  describe('/users:id (GET)', () => {
    it('fails to find a user', (done) => {
      request(app.getHttpServer())
        .get(`/users/${faker.random.uuid()}`)
        .expect(404);
      done();
    });
  });
});
