import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/users (GET)', () => {
    it('successfully retrieves no users', () => {
      const expected = [{}];
      return request(app.getHttpServer())
        .get('/users')
        .expect(200)
        .expect(expected);
    });
  });

  describe('/users:id (GET)', () => {
    it('fails to find a user', () => {
      const expected = [{}];
      return request(app.getHttpServer())
        .get('/users/0')
        .expect(404);
    });
    it('fails to find a user', () => {
      const expected = [{}];
      return request(app.getHttpServer())
        .get('/users/0')
        .expect(404);
    });
  });
});
