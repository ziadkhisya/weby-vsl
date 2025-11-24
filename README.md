# RoofFlow VSL – Webyagency Roofing Acquisition System

RoofFlow is a dark-mode-first VSL experience engineered to lock in premium roofing consults for Webyagency partners. The site delivers an “unskippable” video gate, animated storytelling, and conversion-focused testimonials across every breakpoint from 320px to ultrawide monitors.

- **Stack**: Next.js (App Router, TypeScript) · Tailwind CSS · shadcn/ui · Framer Motion · lucide-react  
- **Player modes**: YouTube, Vimeo, adaptive HLS, or direct MP4 (dev-only)  
- **Deploy targets**: Vercel (primary) or Netlify (alternate) without paid add-ons

---

## Local Development

```bash
npm install
npm run dev
# visit http://localhost:3000
```

The dev server runs with Turbopack (`--turbopack`) for fast refresh. ESLint is available via `npm run lint`.

---

## Environment Configuration

Create `.env.local` (already scaffolded) and set one of the following blocks depending on your delivery strategy.

### YouTube (recommended free option)
```
VIDEO_PROVIDER=youtube
EMBED_URL=https://www.youtube-nocookie.com/embed/XXXXXXXX?rel=0&controls=0&modestbranding=1&fs=0&disablekb=1&iv_load_policy=3
DIRECT_MP4_URL=
HLS_MANIFEST_URL=
```

### Vimeo
```
VIDEO_PROVIDER=vimeo
EMBED_URL=https://player.vimeo.com/video/XXXXXXXX?autopause=0&controls=0&pip=0&dnt=1
DIRECT_MP4_URL=
HLS_MANIFEST_URL=
```

### Self-hosted HLS
```
VIDEO_PROVIDER=hls
EMBED_URL=
DIRECT_MP4_URL=
HLS_MANIFEST_URL=https://your-static-host.com/path/master.m3u8
```

### Direct MP4 (development only)
```
VIDEO_PROVIDER=direct
EMBED_URL=
DIRECT_MP4_URL=http://localhost:3000/video/vsl.mp4
HLS_MANIFEST_URL=
```

> **Note**: Direct MP4 is intended for local testing only. Production should use YouTube, Vimeo, or HLS to avoid buffering limits and browser autoplay restrictions.

---

## Video Hosting Recipes

Avoid checking large VSL binaries into git. Host assets on YouTube (unlisted, privacy-enhanced), Vimeo, or an object store with HLS.

### Generate HLS renditions with ffmpeg
```bash
# Create HLS with 3 renditions + poster
ffmpeg -i vsl-source.mp4 -filter:v fps=30 \
  -map 0:v -map 0:a -c:v h264 -c:a aac -ar 48000 -b:a 128k \
  -var_stream_map "v:0,a:0 v:0,a:0 v:0,a:0" \
  -b:v:0 3000k -maxrate:v:0 3300k -bufsize:v:0 6000k -s:v:0 1920x1080 \
  -b:v:1 1500k -maxrate:v:1 1650k -bufsize:v:1 3000k -s:v:1 1280x720 \
  -b:v:2 800k  -maxrate:v:2 880k  -bufsize:v:2 1600k -s:v:2 854x480 \
  -hls_time 6 -hls_playlist_type vod -master_pl_name master.m3u8 \
  -f hls -hls_segment_filename "hls_%v/seg_%03d.ts" hls_%v/index.m3u8
# Generate a poster frame
ffmpeg -i vsl-source.mp4 -ss 00:00:05 -vframes 1 poster.jpg
```

Upload the resulting folder (`master.m3u8` + `hls_*`) to a CDN-friendly host (Vercel static, Cloudflare R2, Supabase Storage, etc.) and point `HLS_MANIFEST_URL` at the public manifest.

---

## Project Structure & Customisation

- **Brand colors**: `tailwind.config.ts` (`ink`, `ink-2`, `grid`, `accent`, `accent-2`, radius, container padding)  
- **Fonts**: `src/app/layout.tsx` (Inter for UI, Playfair Display for headlines via `next/font`)  
- **Global styling**: `src/app/globals.css` defines dark gradients, dot grid, vignette utilities, and focus states  
- **Components**: key sections live in `src/components/` (`section`, `header-hero`, `vsl-player`, `benefits`, `social-proof`, `case-studies`, `testimonials`, `cta`, `footer`)  
- **Assets**: place brand images in `public/images/`, dev-only videos in `public/video/`

Accessibility is handled with semantic headings, focus-visible rings, keyboard-protected carousel controls, and a “Skip to text summary” dialog for the VSL. Performance perks include font preloading, provider preconnects, lazy iframes, and motion fallbacks for users who prefer reduced motion.

---

## API Routes (Edge Runtime)

- `POST /api/subscribe` – accepts `{ email }`, validates via Zod, and includes an in-memory token bucket limiter (add webhook/ESP in the TODO).  
- `POST /api/contact` – accepts `{ name, email, company?, message }`, validates, rate-limits, and is ready to forward to your CRM of choice.

---

## Deployment

### Vercel (primary – free tier friendly)
```bash
npm install -g vercel
vercel link --yes          # choose or create a project
vercel --prod --yes        # deploy with environment variables configured via dashboard or --env
```

1. Add `.env.local` keys inside the Vercel dashboard → Project Settings → Environment Variables.  
2. Re-deploy (`vercel --prod --yes`).  
3. Map a custom domain under Settings → Domains (CNAME or ANAME as required).

### Netlify (alternate)

1. `netlify init` (or connect via UI)  
2. Build command: `next build`  
3. Publish directory: `.next`  
4. Ensure “Next.js Runtime” build plugin is enabled (Netlify auto-detects).  
5. Add environment variables in Site Settings → Build & deploy → Environment.  
6. Deploy via `netlify deploy --build --prod` or through the UI.

---

## Operational Notes

- **Autoplay realities**: browsers block autoplay with audio unless the visitor clicks. The custom play gate handles this and replays if they attempt to pause mid-stream.  
- **Analytics stubs**: `components/vsl-player.tsx` fires milestone logs at 25/50/75/100% and includes TODO markers for hooking into your analytics or CRM.  
- **Testing**: `npm run lint` keeps the repo aligned with the Next.js ESLint ruleset. Add Playwright or Jest as needed.  
- **Do not commit large videos**: keep the repo lean and stream heavy media from an external CDN.

Enjoy shipping a premium, anti-skip VSL experience for your roofing acquisition pipeline. 💡

