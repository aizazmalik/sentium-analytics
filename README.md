Go to root directory and run 'npm install' to quick start this app

_IMPORTANT:_ You need to specify DB IP, Username and Password in order for project to work. I have removed these for security purposes.

Following things have been covered in this project,

1. API End Points for: [POST localhost:3001/auth/signup]
   a. User Registration
   Request:
   Headers=[Authorization: Bearer <JWT Token received from sign in API>]
   Body=[{"email": "email@goes.here", "password_goes_here"}]
   Response:
   A user object in case of successful insertion otherwise error code

   b. User Sign in (Token Generation) [POST localhost:3001/auth/token]
   Request:
   Body=[{"email": "email@goes.here", "password_goes_here"}]
   Response:
   A jwt token in variable "access_token" in case of successful validation otherwise error code

   c. Listing all users [GET localhost:3001/auth/users]
   Request:
   Headers=[Authorization: Bearer <JWT Token received from sign in API>]
   Response:
   A list of users in case of successful insertion otherwise error code

2. Unit tests
3. TypeORM used for all DB related operations
4. JWT Based authentication
5. All End points are secured by JWT Auth Guard which is being used in auth.service.ts as "@Guard(...)"
6. Dockerfile is present in the same folder which can be used to build the image and run it as container
7. Typescript has been used throughout the project

This project can be used as base for kicking off nest js rest apis quickly as all authentication, token, middleware guards related working has been done. Now we can just add on more APIs and entities and keep using the same guard for securing endpoints.
