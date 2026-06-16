# Lake Anna Lake For All

Website for Lake Anna Lake For All (LFA) — a public lake access advocacy organization based at Lake Anna, Virginia.

**Mission:** Lake Anna Lake for All Users. Preservation of all watersports on Lake Anna, a public lake, through education and respect with limitations that are equally applied to all watercraft.

**Live site:** [lakeanna4all.org](https://lakeanna4all.org)

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Contentful
- **AI News Feed:** Anthropic API (claude-haiku-4-5)
- **Deployment:** Vercel

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/lfa-website.git
cd lfa-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Description |
|---|---|
| `ANTHROPIC_API_KEY` | Anthropic API key for AI news curation |
| `CONTENTFUL_SPACE_ID` | Contentful space ID for CMS |
| `CONTENTFUL_ACCESS_TOKEN` | Contentful delivery API token |
| `CONTENTFUL_PREVIEW_TOKEN` | Contentful preview API token |
| `CRON_SECRET` | Secret to protect Vercel cron endpoints |
| `NEXT_PUBLIC_SITE_URL` | Public site URL |

---

## AI News Feed

The News & Updates page is powered by an AI agent (`claude-haiku-4-5`) that uses web search to find and curate the latest news about:

- Public lake access rights and legislation
- Wake surfing and watercraft regulations
- Waterway preservation and environmental policy
- Boating safety and education

The news feed refreshes weekly, Monday at 7:00 AM UTC, via a Vercel cron job that stores results in Vercel KV. The public-facing news route only reads from that cache — it never calls the Anthropic API directly.

---

## Contentful CMS

The site integrates with Contentful for non-technical content management. Content types include:

- **News Article** — for manual news entries
- **Page Content** — for editable page sections
- **Member Testimonial** — for member spotlight quotes

When Contentful credentials are not configured, the site falls back to placeholder content.

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy

The `vercel.json` configures a weekly cron job (Monday 7 AM UTC) to refresh the news feed.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home with hero, WAVE program, news preview |
| `/news` | AI-curated news feed (refreshed weekly) |
| `/lake-responsibly` | Boater safety rules and education |
| `/take-action` | Advocacy resources and links |
| `/membership` | Free membership signup |
| `/shop` | Print-on-demand merchandise |
| `/about` | Mission, creed, Lake Anna story |

---

## License

Copyright © Lake Anna Lake For All. All rights reserved.
