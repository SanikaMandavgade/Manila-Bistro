# Manila Bistro Website

Premium Filipino restaurant, entertainment, karaoke, music, events, and catering website.
**National City, California · 933 S Harbison Ave, National City, CA 91950**

---

## Quick Start

Open `index.html` directly in any modern browser — no build step required.

For local development with live reload:
```bash
npx serve .
# or
python3 -m http.server 8080
```

---

## File Structure

```
manila-bistro/
├── index.html          ← Main single-page website
├── css/
│   └── style.css       ← All styles (CSS variables, layout, components)
├── js/
│   └── main.js         ← All interactive behavior
└── assets/             ← Place all images here
    ├── logo.png                   ← Manila Bistro logo (primary)
    ├── logo-dark.png              ← Logo variant for dark backgrounds
    ├── logo-white.png             ← White/reversed logo for footer
    ├── hero-restaurant.jpg        ← Hero section background photo
    ├── buffet-promo.jpg           ← Weekend Buffet promotional graphic
    ├── restaurant-interior.jpg    ← Experience section photo
    ├── about-interior-main.jpg    ← About section main photo
    ├── about-stage.jpg            ← Karaoke/stage photo
    ├── about-food.jpg             ← Food spread photo
    └── food/                      ← Individual food/dish images
        ├── lumpia-shanghai.jpg
        ├── lechon-kawali.jpg
        ├── sinigang.jpg
        └── ... (etc.)
```

---

## Replacing Placeholder Content

Search for these comment markers in `index.html`:

### Logo
```html
<!-- LOGO SWAP: Replace the text logo below with your actual logo image. -->
<!-- Uncomment: <img src="assets/logo.png" alt="Manila Bistro Logo" class="nav-logo-img" /> -->
```

### Hero Background Photo
```html
<!-- HERO IMAGE: Replace hero-visual-placeholder with: -->
<!-- <img src="assets/hero-restaurant.jpg" ...> -->
```

### Buffet Promotional Image
```html
<!-- BUFFET IMAGE: Replace placeholder with: -->
<!-- <img src="assets/buffet-promo.jpg" ...> -->
```

### Phone Number
Search: `[Phone number — update when verified]`
Replace with: `<a href="tel:+16195550000">(619) 555-0000</a>`

### Email Address
Search: `[Email address — update when verified]`
Replace with: `<a href="mailto:hello@manilabistro.com">hello@manilabistro.com</a>`

### Operating Hours
Search: `[Hours — update]`
Replace with your verified operating hours.

### Google Maps Embed
Search: `<!-- GOOGLE MAP EMBED: Replace map-placeholder with an actual embed: -->`
Get embed code from Google Maps > Share > Embed a map.

### Google Reviews
The three review card placeholders are clearly marked:
`"Customer review will appear here. This placeholder will be replaced with a verified Google review..."`

Replace each review card's content with real text from Manila Bistro's Google Business Profile.
Review source URL to retrieve real reviews: `https://g.page/r/YOUR-BUSINESS-ID/review`

### Social Media Links
Search: `<!-- SOCIAL LINKS: Update href values -->`
Update each `href="#"` with actual social profile URLs.

### Google Reviews Leave a Review Link
Search: `<!-- GOOGLE REVIEWS LINK: -->`
Update the href with your actual Google Business Profile review link.

---

## Connecting Forms to a Backend

### Survey Form (`#survey-form`)
Currently shows a success message on submit (front-end only).

**Options to collect real data:**
- **Google Sheets via Google Apps Script**: Create a script endpoint that accepts POST data
- **Formspree**: Add `action="https://formspree.io/f/YOUR_ID"` to the form
- **Netlify Forms**: Add `netlify` attribute and deploy to Netlify
- **EmailJS**: Send form data to email directly from browser
- **Custom backend**: POST to your own API endpoint

### Reservation Form (`#reservation-form`)
Same options as above. For a true reservation system:
- **OpenTable**: Add their widget/embed
- **Resy**: Add their booking widget
- **Yelp Reservations**: Add their embed
- **Custom backend**: Connect to email or database

### Event Inquiry Form (`#event-inquiry-form`)
Recommended: Connect to email via Formspree or EmailJS so inquiries land in an inbox immediately.

---

## Updating Menu Prices and Items

Open `index.html` and find the menu cards section (`<!-- Menu Grid -->`).

Each card follows this pattern:
```html
<article class="menu-card" data-cat="CATEGORY">
  <div class="menu-card-img">
    <img src="assets/food/YOUR-DISH.jpg" alt="Dish description" />
    <span class="menu-card-cat">Category Label</span>
  </div>
  <div class="menu-card-body">
    <h3 class="menu-card-name">Dish Name</h3>
    <p class="menu-card-desc">Description text.</p>
    <div class="menu-card-footer">
      <span class="menu-card-price">$0.00</span>
      ...
    </div>
  </div>
</article>
```

Category values for `data-cat`: `appetizers`, `favorites`, `noodles`, `rice`, `seafood`, `meat`, `desserts`, `drinks`

---

## CSS Variables (Color/Brand Updates)

All brand colors are defined at the top of `css/style.css` under `:root {}`:
```css
--teal: #1a9e96;
--gold: #c9a84c;
--champagne: #f0e4c2;
--black: #0a0a0a;
```

To update brand colors, change the values there and they propagate everywhere.

---

## SEO / Production Checklist

- [ ] Replace `https://www.manilabistro.com` in canonical and OG tags with actual URL
- [ ] Add actual `og:image` meta tag with a real photo URL
- [ ] Add real Google Maps embed
- [ ] Add real phone number
- [ ] Add real email address
- [ ] Add real operating hours
- [ ] Add real social media URLs
- [ ] Replace review placeholders with verified Google reviews
- [ ] Upload Manila Bistro logo to `assets/logo.png`
- [ ] Upload restaurant photos to `assets/`
- [ ] Upload buffet promotional image to `assets/buffet-promo.jpg`
- [ ] Upload food photos to `assets/food/`
- [ ] Connect reservation form to booking system
- [ ] Connect survey form to data collection
- [ ] Connect event inquiry form to email
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile with website URL
- [ ] Claim/verify Google Business Profile for reviews integration
- [ ] Test on mobile devices (iOS + Android)
- [ ] Test all forms end-to-end

---

## Technology Stack

- **HTML5** — semantic, accessible
- **CSS3** — custom properties, grid, flexbox, no framework
- **Vanilla JavaScript** — no dependencies
- **Google Fonts** — Cinzel, Cormorant Garamond, Allura, Inter

---

## Browser Support

Modern browsers: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
Mobile: iOS Safari 14+, Chrome for Android 90+

---

## Production Deployment

The site is static — deploy to any host:
- **Netlify**: Drag and drop the folder
- **Vercel**: `vercel deploy`
- **GitHub Pages**: Push to repo, enable Pages
- **cPanel / shared hosting**: Upload files via FTP
- **AWS S3 + CloudFront**: For enterprise hosting

---

*Built for Manila Bistro · National City, California*
*Filipino Food. Music. Hospitality. Celebration.*
