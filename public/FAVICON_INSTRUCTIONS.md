# Favicon Generation Instructions

## Required Favicon Files

Generate these favicon files from the main Uluwatu Surf School logo:

### Standard Favicons
1. **favicon.ico** (multi-size ICO file)
   - Location: `/public/favicon.ico`
   - Sizes: 16x16, 32x32, 48x48
   - Format: ICO

2. **favicon-16x16.png**
   - Location: `/public/favicon-16x16.png`
   - Size: 16x16px
   - Format: PNG

3. **favicon-32x32.png**
   - Location: `/public/favicon-32x32.png`
   - Size: 32x32px
   - Format: PNG

### Apple Touch Icon
4. **apple-touch-icon.png**
   - Location: `/public/apple-touch-icon.png`
   - Size: 180x180px
   - Format: PNG

### Android/PWA Icons
5. **android-chrome-192x192.png**
   - Location: `/public/android-chrome-192x192.png`
   - Size: 192x192px
   - Format: PNG

6. **android-chrome-512x512.png**
   - Location: `/public/android-chrome-512x512.png`
   - Size: 512x512px
   - Format: PNG

## Generation Process
1. Use the main logo (logo.png) as source
2. Crop to square if needed (circular logo should work well)
3. Resize to each required size
4. Ensure good contrast at small sizes
5. For ICO file, combine multiple sizes

## Recommended Tools
- Online: favicon.io, realfavicongenerator.net
- Desktop: GIMP, Photoshop, Sketch
- CLI: ImageMagick, sharp

Once generated, place these files in the `/public/` directory root.