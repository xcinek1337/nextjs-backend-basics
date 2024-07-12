[![My Skills](https://skillicons.dev/icons?i=next,mongo,react)](https://skillicons.dev)
## Promptopia - a place to expand your horizons

### About The Project
Promptopia - an application for sharing creative prompts to artificial intelligence, where users can share their ideas and pass them on as inspiration.The list of queries has the ability to filter by tags as well as keywords, I think everyone will find something for themselves. For logging in, there is a next/auth connection with google provider.The project has several pages like user profile, prompt creation. The application also has a backend, which connects the application to the database. Data is stored in mongoDB
### What I've learned from this
Another project where I'm practicing writing queries to the api (CRUD actions) that connect applications to the "backened" and learning how to compose nested routes in nextJS, including creating dynamic routes and extracting state from "params" + the trick of feeding state via url


## Getting Started
### Prerequisites
To get a local copy of this project up and running, follow these steps:
1. Create a free database [MongoDB](<https://www.mongodb.com/>)
2. Get a free API key from [Google](<https://console.cloud.google.com/>)


we place the sercrets in the .env file under the name 
 - MONGODB_URI= mongodbKEY
 - GOOGLE_CLIENT_SECRET= googleKEY 
 - GOOGLE_ID = googleID 
AND PASS THIS ALSO
- NEXTAUTH_URL=http://localhost:3000
- NEXTAUTH_URL_INTERNAL=http://localhost:3000
- NEXTAUTH_SECRET=mfr1NhRoD7sDIKCEbuspkJjyFZgHgH+pkJIBbET+WT8=

3. Clone repository, step by step
```bash
git clone https://github.com/xcinek1337/promptopia
cd promptopia
npm install
npm run dev
```

## Acknowledgements
This project was created as part of a [YouTube Tutorial](<https://www.youtube.com/watch?v=wm5gMKuwSYk&t=899s>). I would like to thanks the autor, and invite you to invite you  to struggle with nextJS crash course. huge powerful framework
