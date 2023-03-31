import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
	token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

export const revalidate = 0

export async function GET() {
  const member = await redis.srandmember<string>("hoopers")
  return new Response(member);
}
