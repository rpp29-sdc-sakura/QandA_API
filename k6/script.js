import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  thresholds: {
    http_req_failed: ['rate<0.01'],   // http errors should be less than 1%
    http_req_duration: ['p(100)<2000'], // 100% of requests should be below 2000ms
  },
  scenarios: {
  //   one_request_per_second: {
  //     executor: 'constant-arrival-rate',
  //     rate: 1,
  //     timeUnit: '1s', // 1 iterations per second, i.e. 1 RPS
  //     duration: '30s',
  //     preAllocatedVUs: 1, // how large the initial pool of VUs would be
  //     maxVUs: 10, // if the preAllocatedVUs are not enough, we can initialize more,
  //     gracefulStop: '5s'
  //   },
    // ten_requests_per_second: {
    //   executor: 'constant-arrival-rate',
    //   rate: 10,
    //   timeUnit: '1s', // 10 iterations per second, i.e. 10 RPS
    //   duration: '30s',
    //   preAllocatedVUs: 10, // how large the initial pool of VUs would be
    //   maxVUs: 100, // if the preAllocatedVUs are not enough, we can initialize more
    //   gracefulStop: '5s'
    // },

    fourthirtyfive_requests_per_second: {
      executor: 'constant-arrival-rate',
      rate: 435,
      timeUnit: '1s', // 100 iterations per second, i.e. 100 RPS
      duration: '45s',
      preAllocatedVUs: 435, // how large the initial pool of VUs would be
      maxVUs: 10000, // if the preAllocatedVUs are not enough, we can initialize more
      gracefulStop: '5s'
    },

    // one_hundred_requests_per_second: {
    //   executor: 'constant-arrival-rate',
    //   rate: 100,
    //   timeUnit: '1s', // 100 iterations per second, i.e. 100 RPS
    //   duration: '30s',
    //   preAllocatedVUs: 100, // how large the initial pool of VUs would be
    //   maxVUs: 1000, // if the preAllocatedVUs are not enough, we can initialize more
    //   gracefulStop: '5s'
    // },
    // one_thousand_requests_per_second: {
    //   executor: 'constant-arrival-rate',
    //   rate: 1000,
    //   timeUnit: '1s', // 1000 iterations per second, i.e. 1000 RPS
    //   duration: '30s',
    //   preAllocatedVUs: 1000, // how large the initial pool of VUs would be
    //   maxVUs: 10000, // if the preAllocatedVUs are not enough, we can initialize more
    //   gracefulStop: '5s'
    // }
  }
};

http.setResponseCallback(http.expectedStatuses(200, 404));

export default function () {
  let randomProductId = Math.floor(Math.random() * (1000012 - 1) + 1);
  let req = http.get(`http://localhost:5000/qa/questions?product_id=${randomProductId}`);
  // check(req, {
  //   'is status 200 or 404': (res) => {
  //     return res.status === 200 || res.status === 404
  //   }
  // })
  sleep(1)
}


//k6 run --out influxdb=http://localhost:8086/myk6db /Users/pbandjaimie/Desktop/RPP29/SDC/QandA_API/k6/script.js