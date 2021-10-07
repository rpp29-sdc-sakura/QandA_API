import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(100)<2000'],
  },
  scenarios: {
    one_hundred_requests_per_second: {
      executor: 'constant-arrival-rate',
      rate: 435,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 435,
      maxVUs: 3000,
      gracefulStop: '5s'
    }
  }
};

http.setResponseCallback(http.expectedStatuses(200, 404));

export default function () {
  let randomProductId = Math.floor(Math.random() * (1000012 - 1) + 1);
  let req = http.get(`http://localhost:5000/qa/questions?product_id=${randomProductId}`);
}