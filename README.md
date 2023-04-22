## Yome - Listen your fantastic audio

### TO-DO-LIST
- [x] Fetch Spotify API
- [ ] Generate refresh token in backend
- [ ] etc.

### How to start ?
Install dependencies
```pnpm install```

Start development
```pnpm dev```

Build to production
```pnpm build```

### Tech Stack ?
- Frontend library `React`
- Programming language `TypeScript`
- CSS framework `Tailwind`
- Build tool `Astro.build`
- Icons library `Iconsax`
- Package manager `pnpm`

### API Spec
- Login, Register
- Use Oauth for login with Google/Facebook
- Upload Song, must be logged in first
- Delete song
- Music Playlist
- Genre, sort by Genre
- Spotify API

```yaml
title: Yome - Listen your fantastic audio
description: API Speficifaction for Yome project
version: "1.0"
baseUri: https://yome.vercel.app/
mediaType:
   - application/json
   - text/html
   - image/png
protocols:
   - HTTPS
frontend:
   -  /:
      get:
         200:
            Content-Type: text/html
            data: src/pages/index.astro
            properties:
               spotify-api:
                  daily-recommendation: https://path/to/url/spotify-api
         404:
            data: src/pages/404.astro
   -  /login:
      get:
         200:
            Content-Type: text/html
            data: src/pages/login/index.astro
            message: "login successful"
         404:
            Content-Type: text/html
            data: src/404.astro
      post:
         200:
            Content-Type: application/json
            target: localhost:8080/auth/login
            redirect-to: @baseUri/account
         500:
            message: "server error"
   -  /register:
      get:
         200:
            Content-Type: text/html
            data: src/pages/register/index.astro
            message: "register successful"
         404:
            Content-Type: text/html
            data: src/404.astro
      post:
            200:
               Content-Type: application/json
               target: localhost:8080/auth/register
               redirect-to: @baseUri/login
            500:
               message: "server error"
   -  /top-charts:
      get:
         200:
            Content-Type: text/html
            data: src/pages/top-charts/index.astro
            properties:
               spotify-api:
                  top-charts: https://path/to/url/spotify-api
backend:
   -  hostname: localhost:8080/
   -  endpoints:
         -  /login:
            post:
               type: Authentication
               data: ["username", "password"]
               responses:
                  200:
                     Set-Cookie: "user_session"
                  400:
                     message: "invalid username or password !"
                  500:
                     message: "server error"
         -  /register:
            post:
               type: Authorization
               data: ["username", "password"]
               responses:
                  200:
                     message: "user created"
                     properties:
                        database: insert @data to table users
                        bcrypt: hash password
                     redirect-to: @hostname/login
                  400:
                     message: "username already taken, choose another one !"
                  500:
                     message: "server error"
ci/cd:
   github-action:
      branch: main
      runs-on: ubuntu-latest
      steps:
         name: [
            Checkout Code,
            Install SSH,
            Add known_hosts,
            Upload with rsync,
            Execute command: [
               go build cmd/main.go,
               add main file to systemd,
               setup file permission,
            ]

         ]
         uses: [
            actions/checkout@v3,
            shimataro/ssh-key-action@v2,
            appleboy/ssh-action@master
         ]
```

### TODO List
- Delete Handler in Backend
- Update Handler in Backend

### Spotify API
- API Documentation : `https://developer.spotify.com/`
- Client ID `78a4f4ce43c5466e8c26cb6c73f0cfb4`
- Client Secret `c42c0521910d45c1bc1a094467a4614c`
- Get Access Token :
```bash
curl -X POST "https://accounts.spotify.com/api/token" \
      >  -H "Content-Type: application/x-www-form-urlencoded" \
      >  -d "grant_type=client_credentials&client_id=78a4f4ce43c5466e8c26cb6c73f0cfb4&client_secret=c42c0521910d45c1bc1a094467a4614c"

```
