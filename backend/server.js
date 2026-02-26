const express = require('express');
const redis = require('redis');
const client = require('prom-client'); // V2: Prometheus metrics library

const app = express();
const port = 3000;

// Prometheus Setup
// const register = new client.Registry();
// client.collectDefaultMetrics({ register });
//
// // Custom Metric: Tracks Heads vs Tails
// const flipCounter = new client.Counter({
//   name: 'coinflip_results_total',
//     help: 'Total count of coin flip results',
//       labelNames: ['side']
//       });
//       register.registerMetric(flipCounter);
//
//       // Redis Connection
//       const redisClient = redis.createClient({ url: 'redis://redis-service:6379' });
//       redisClient.connect();
//
//       app.get('/flip', async (req, res) => {
//           const result = Math.random() < 0.5 ? 'heads' : 'tails';
//               
//                   // Increment the Prometheus metric
//                       flipCounter.inc({ side: result });
//
//                           // Save to Redis (Existing logic)
//                               await redisClient.hIncrBy('flips', result, 1);
//                                   const stats = await redisClient.hGetAll('flips');
//                                       
//                                           res.json({ result, stats });
//                                           });
//
//                                           // V2: New endpoint for Prometheus to scrape
//                                           app.get('/metrics', async (req, res) => {
//                                               res.set('Content-Type', register.contentType);
//                                                   res.end(await register.metrics());
//                                                   });
//
//                                                   app.listen(port, () => console.log(`V2 Backend live on ${port}`));
