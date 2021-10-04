import http from 'k6/http';
import { check, sleep } from 'k6';
import { Counter } from 'k6/metrics';

export const requests = new Counter('http_reqs');

export let options = {
  thresholds: {
    http_req_failed: ['rate<0.01'],   // http errors should be less than 1%
    http_req_duration: ['p(99)<2000'], // 100% of requests should be below 2000ms
  },
  stages: [
    { duration: '30s', target: 10 },
    { duration: '1m30s', target: 20 },
    { duration: '20s', target: 0 },
  ]
};

http.setResponseCallback(http.expectedStatuses(200, 404));

export default function () {
  let randomProductId = Math.floor(Math.random() * (1000012 - 1) + 1);
  let res = http.get(`http://localhost:3000/qa/questions?product_id=${randomProductId}`);
  check(res, {
    'is status 200 or 404': (r) => {
      return [200, 404].includes(r.status);
    }
  });
  sleep(1)
}

// k6 run script.js

//k6 run --vus 10 --duration 30s script.js