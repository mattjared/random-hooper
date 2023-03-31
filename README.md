# Random Hooper

A service with a single job... respond with a former or current NBA player name.

## Use Cases

**Random Name Generator:**
Visit <https://random-hooper.vercel.app/api/hooper> in your browser

**Commit Messages:**
Set these lines below as your alias

```bash
alias ga="git add -A"
alias gpso='git push origin'
function getCommitMessage() { 
  response=$(curl -s https://random-hooper.vercel.app/api/hooper)
  echo $response
}
alias ggo='ga && git commit -m "$(getCommitMessage)" && gpso'
```

## How this was made and how it works

- I found a list of every NBA player ever on <https://www.basketball-reference.com/players/>
- I used [Puppeteer](https://pptr.dev/) to go and scrape and store all of those players in a huge array (5101 items so far!)
- I took that array and uploaded it to [Upstash](https://upstash.com/)
- I bootstrapped a new [Next.js](https://nextjs.org/) project with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and created a route that hits my Upstash set containing my giant array. Upstash randomly selects an entry for me
- Profit

## How to make your own

**Installation:**

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Your api endpoint can be changed in `src/app/api/hooper/route.ts`. 

**Scrape**
Find any resource you want to store / scrape and change the site and fields in `lib/scraper.js` to be specific to your project.

**Upload**
Copy 
Add your upstash keys in `env.local`

**Deploy on Vercel**
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new). Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

a change again