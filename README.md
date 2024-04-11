This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Intro and Goals

First time working in Next.js. I worked on a python twitter clone during a bootcamp, but the majority of that project was pre-done and it wasn't very fufillling just adding and fixing functionality of that project. Remaking it would be a good way for me to prove I can, and give me an opportunity to work in Next.js since I was told by my mentor that having a backend would be more organized if done in Next.js rather splitting it in a React folder and an express folder.

## First time Next.js impressions

Wow I did not expect dynamic routing to be this much of a hassle to figure out. Working with new tech (is that the right term for next.js?) is difficult because changes come fast. I ran into two different Next.js tutorials from the same website and from the same year on how to set up dynamic routes. After digging more from a failure to implement dynamic routing (tutorials not the most comprehensive) I found out Next.js had a big change to how routing works. The default is now you make page.js and folders with page.js for routing but it very recently used to be you had a pages folder and the js file in the folder would I guess be interpreted as a react component and folders would be routes like in the new way. Whateveer, I got it working with the app directory method.

## Notes

Forgot to take additional notes. Will need to make a pretty major overhault of data and pivot it back into an api like  it was when I worked on it in express/react.
So far I added back in mostly everything that database calls could handle as well as bcrypt and webtoken functions. Next step will be setting up the api. If I don't get distracted hopefully I can have the form to sign in/sign up working and posting messages shouldn't be that far behind.