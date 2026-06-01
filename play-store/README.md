# Google Play Store assets

Use these files when uploading **GTA SA Toolkit** to Google Play Console.

| Asset | File | Play Console requirement |
| --- | --- | --- |
| App icon | `app-icon-512.png` | 512 × 512 PNG |
| Hi-res icon | `hi-res-icon.png` | Same as app icon (512 × 512) |
| Feature graphic | Create from `../public/og-image.svg` or export at 1024 × 500 | Feature graphic slot |

**Listing copy guidelines**

- Position the app as an independent **companion**, **guide**, **reference**, and **toolkit** for GTA SA on Android.
- Do not imply ownership of the game or official partnership with Rockstar Games or Take-Two Interactive.
- Include the trademark disclaimer from the app About page and footer in the full description.

Regenerate Android launcher and splash densities after changing the master icon:

```bash
npm run cap:assets
```
