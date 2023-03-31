# Random Hooper

A service with a single job... respond with a former or current NBA player name.

## Use Cases

*Random Name Generoator:*
Visit <https://random-hooper.vercel.app/api/hooper> in your browser

*Commit Messages:*
Set these lines below as your alias

```bash
alias ga="git add -A"
alias gpso='git push origin'
function getCommitMessage() { 
  response=$(curl -s https://random-hooper.vercel.app/api/hooper)
  echo $response
}
alias git-push-with-message='ga && git commit -m "$(getCommitMessage)" && gpso'
```


## How to use this code to make your own version

Install stuff, connect your resources, start fiddling

Install stuff:

```bash
nvm use
npm install
npm run dev
# or
change npm to be yarn or pnpm
```

Connect your resources


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
