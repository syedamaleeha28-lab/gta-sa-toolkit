# Amazon Appstore & store listing assets

Use these files when uploading **SA Toolkit Pro** to the Amazon Appstore (or other stores).

| Asset | File | Requirement |
| --- | --- | --- |
| App icon | `app-icon-512.png` | 512 × 512 PNG |
| Hi-res icon | `hi-res-icon.png` | Same as app icon (512 × 512) |
| Feature graphic | Export from `../public/og-image.svg` at 1024 × 500 | Feature graphic slot |

**Listing copy guidelines**

- Position the app as an independent **gaming companion utility** — guides, tutorials, installation help, compatibility, troubleshooting, tips, and reference materials.
- Do **not** use trademarked game names, publisher names, or copyrighted artwork in title, description, screenshots, or icons.
- Include the disclaimer from the app About page and footer in the full description.

Regenerate Android launcher and splash densities after changing the master icon:

```bash
npm run cap:assets
```
