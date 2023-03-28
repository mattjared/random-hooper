import { Redis } from '@upstash/redis'
import styles from './page.module.css'

export const revalidate = 0 // disable cache

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
	token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

export default async function Home() {
  const member = await redis.srandmember<string>("nextjs13 3")
  const members = await redis.smembers("nextjs13")
  console.log(members);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome {member}
        </h1>
        <p className={styles.description}>
          You have been randomly chosen by the redis algorithm.
        </p>
      </main>
    </div>
  )
}
