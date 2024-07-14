[![My Skills](https://skillicons.dev/icons?i=next,mongo,react)](https://skillicons.dev)
## Promptopia - a place to expand your horizons
![promptopia-readmeGif](https://github.com/user-attachments/assets/72254f96-0164-425d-b14c-026a1cfcaeee)
[Live preview](<https://promptopia-neon-three.vercel.app/>)
### About The Project
Promptopia is an application designed for sharing creative prompts for artificial intelligence. Users can share their ideas and use them as inspiration. The application allows you to:
- **Create Prompts**: Users can create and share their own AI prompts.
- **Filter and Sort Prompts**: Prompts can be sorted by tags or keywords, making it easy to find relevant content.
- **User Authentication**: Secure login through NextAuth, with Google as the authentication provider.
- **Manage Prompts**: Users can edit or delete prompts from their profiles.

The project consists of several pages, such as user profiles and prompt creation. It also includes a backend that connects the application to a MongoDB database for storing data.
### What I've learned from this
This project has enhanced my skills in writing API queries (CRUD actions) to connect applications to a backend. I have also learned how to create nested routes in Next.js, including dynamic routes and extracting state from URL parameters.
## Getting Started
  - live page https://promptopia-neon-three.vercel.app
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
