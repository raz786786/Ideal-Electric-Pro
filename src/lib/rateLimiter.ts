import { RateLimiterMemory } from 'rate-limiter-flexible';
import { type NextRequest } from 'next/server';

// Configuration from environment variables
const contactMax = Number(process.env.RATE_LIMIT_CONTACT_MAX) || 5;
// Default 15 minutes window (900000 ms) converted to seconds (900)
const contactWindowSec = Math.floor((Number(process.env.RATE_LIMIT_CONTACT_WINDOW_MS) || 900000) / 1000);

const contactLimiter = new RateLimiterMemory({
  points: contactMax,
  duration: contactWindowSec,
});

export async function checkRateLimit(req: NextRequest): Promise<{
  success: boolean;
  limit: number;
  remaining: number;
  resetTime: number;
}> {
  // Retrieve client IP
  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : (req as any).ip || '127.0.0.1';

  try {
    const res = await contactLimiter.consume(ip);
    return {
      success: true,
      limit: contactMax,
      remaining: res.remainingPoints,
      resetTime: Date.now() + res.msBeforeNext,
    };
  } catch (rej: any) {
    // Rejected (limit exceeded)
    return {
      success: false,
      limit: contactMax,
      remaining: 0,
      resetTime: Date.now() + (rej.msBeforeNext || 0),
    };
  }
}
