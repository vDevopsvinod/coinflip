t express = require('express');
const redis = require('redis');
const app = express();
const client = redis.createClient({ url: 'redis://redis-service:6379' });

client.connect().catch(console.error);

app.get('/flip', async (req, res) => {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    await client.incr(result); // Increment score in Redis
    const count = await client.get(result);
    res.send({ result, total: count });
});

app.listen(3000, () => console.log('Backend running on port 3000'));
