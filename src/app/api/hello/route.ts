import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
	token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

export async function GET(request: Request) {
  const member = await redis.srandmember<string>("nextjs13")
  return new Response(member);
}
