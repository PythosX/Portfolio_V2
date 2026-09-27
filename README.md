# Karan — Cinematic Creative Developer Portfolio

A responsive React + Vite portfolio with a cinematic dark visual system, editorial typography, motion reveals, and an interactive two-image hero character.

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```
The production output is generated in `dist/`.

## Customize content
Edit `src/data/portfolio.js`:
- Hero and About copy
- Projects, categories, summaries, and technology labels
- Skills and process steps
- Contact email and social URLs

Project cards intentionally do not show fake demo/source links. Add real URLs to a project's `liveUrl` or `sourceUrl` field when available. Add a real email to `contact.email` to enable the email action. LinkedIn and GitHub links remain hidden until configured.

## Character artwork
The supplied files are in:
- `public/images/hero-default.png`
- `public/images/hero-hover.png`

The two layers share one fixed-size stage. Desktop pointer hover crossfades between them; keyboard and touch users can toggle the image with the button. The alternate image is preloaded.

## Deploy with GitHub + Vercel
1. Create a new empty repository on GitHub.
2. Extract this project ZIP and upload its files/folders to the repository (or use Git locally).
3. Commit the files to the repository's main branch.
4. Sign in to Vercel and choose **Add New → Project**.
5. Import the GitHub repository and approve access if asked.
6. Vercel should detect **Vite**. Use:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
7. Select **Deploy**. No environment variables are required for this static portfolio.
8. For future updates, commit and push changes to GitHub. Vercel automatically creates a new deployment for the connected branch.

## Notes
- About text is editable starter copy, not a verified biography.
- Project descriptions are concise summaries based on the project names and supplied brief; replace or expand them with confirmed details and screenshots.
- No contact form is presented because no submission backend is configured.
