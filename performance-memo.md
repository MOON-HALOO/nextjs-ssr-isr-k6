# Performance Analysis Memo: Next.js SSR vs. ISR

### Setup Process

The application was configured using Next.js Pages Router with two distinct rendering strategies: an SSR route (`server-side.js`) connecting to a local MySQL database via `mysql2/promise` to retrieve live timestamps from `timesample`, and an ISR route (`isr.js`) utilizing `getStaticProps` with a 10-second revalidation window to deliver cached pre-rendered markup.

### Load Test Results

A k6 load test was executed against the SSR endpoint with 10 concurrent Virtual Users over 10 seconds. The test completed 100 total requests (9.74 req/s) with zero HTTP failures and 100% check success. Response duration averaged 20.08 ms, with a median of 13.75 ms, a minimum of 6.34 ms, a 95th percentile (p95) latency of 66.87 ms, and a maximum of 79.1 ms.

### Observed Performance Differences and Personal Take

Although local latencies remained brisk, the SSR route exhibited noticeable variance caused by opening MySQL connections and compiling pages dynamically on every hit. In contrast, ISR serves pre-rendered HTML straight from cache, avoiding database transactions entirely on cache hits. In my view, while SSR is essential for transactional views requiring guaranteed data freshness, ISR offers a superior engineering balance for general web applications, preventing database saturation during traffic spikes.
