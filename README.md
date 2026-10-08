# in Wardrobe

A responsive, editorial brand website for the women's boutique in Virugambakkam, Chennai. No ecommerce or data collection. Built with semantic HTML, CSS and a small amount of JavaScript.

- Website: https://sritharoon05.github.io/inwardrobe_boutique/
- WhatsApp: +91 73583 31164
- Email: inwardrobeofficial@gmail.com

## Development

Edit the website directly in `dist/`. No production build or runtime dependencies are needed.

```sh
npm run preview
npm run check
```

## Publish updates

GitHub Pages serves the root of the `gh-pages` branch. After committing changes on `main`, publish the website directory:

```sh
git push origin main
npm run publish:github
```

The publishing script updates `gh-pages` without requiring build tools or additional packages. GitHub Pages must be configured to deploy from the root of that branch.

## Design and content

The peach background and original logo come from the supplied in Wardrobe brand reference. The genuine boutique photos are displayed using CSS crop windows; the original image files are preserved. Layout references: [Sézane](https://www.sezane.com/en-en), [DÔEN](https://www.shopdoen.com/), and [LoveShackFancy](https://www.loveshackfancy.com/). The composition and copy are original; no third-party brand assets or code are used.

The site uses the provided phone, email, neighbourhood and displayed hours. The three customer quotes are transcribed from the supplied Google review screenshots. No unverified street address, Instagram handle, inventory availability, aggregate rating or opening-day schedule is asserted. The directions link searches Google Maps for the boutique, and a WhatsApp link lets visitors request the exact location.

## SEO

Includes a descriptive title and meta description, one primary heading, canonical URL, social text metadata, ClothingStore structured data, descriptive image alternatives, sitemap, robots file and locally served fonts. For ongoing local search visibility, keep the Google Business Profile accurate, add the site link there, and verify the website in Google Search Console. Ranking positions cannot be guaranteed.

Font families: Cormorant Garamond and Manrope, distributed under the SIL Open Font License. License files are in `dist/assets/`.
