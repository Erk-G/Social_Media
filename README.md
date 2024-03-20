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

Figure I should start making weekly notes.

Week of 03/17:
Wanted to get the database done now since that was the appeal of next.js for me. When all is said and done, the integration is pretty rad with vercel and less pain than how I worked a db in react. As for my complaints the conflicting documentation between setting next.js with pages folder or app folder continues to hinder my progress especially since I'm going the app route. I have an idea but I'm not sure how I would even get elephantSQL connected on next.js, which is why I made a vercel account instead since all clear documentation and official tutorials I could find was on that. Vercel is pretty cool and since it is all in one for deployment. I am unclear on if I should makes api routes in my file or if I should just make static functions to call the database. Going to go with the second method as the api route means the end user can also use it. My minimum goal was to replace the temp database with the real one and have everything work the same and it worked so that's good. Hoping to get individual user pages working this week.