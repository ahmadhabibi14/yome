## Yome - Listen your fantastic audio

### TO-DO-LIST
- [ ] UI Design from Figma
- [ ] Fetch Spotify API
- [ ] Generate refresh token in backend
- [ ] Music Video, embed from Youtube
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
- Programming language `JavaScript`
- JavaScript Framework `Next.js`
- CSS framework `Tailwind`
- Icons library `Iconsax`
- Package manager `pnpm`

### API Spec
- Login, Register
- Use Oauth for login with Google/Facebook
- Music Playlist
- Genre, sort by Genre
- Spotify API

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
