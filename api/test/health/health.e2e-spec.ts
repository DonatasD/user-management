import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('Health check (e2e)', () => {
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

  it('/health (GET)', (done) => {
    const expected = {
      "status": "ok",
      "info": {},
      "error": {},
      "details": {},
    };
    request(app.getHttpServer())
      .get('/health')
      .expect(expected)
      .expect(200);
    done();
  });
});
