# Public Assets

Organized asset structure for the RideNote website.

## Directory Structure

```
public/
└── images/
    ├── heroes/          # Full-width hero background images
    ├── logos/           # Brand logos in various formats
    └── mockups/         # Device mockups (iPhone renders, etc.)
```

## Usage

### Heroes
- `hero.png` - Primary hero background
- `hero-3.png` - Secondary hero background

### Logos
- `ridenote-logo-primary-light.png` - Main logo (light theme)
- `ridenote-logo-primary-dark.png` - Main logo (dark theme)
- `ridenote-logo-b.png` - Brand mark B
- `ridenote-logo-w.png` - White logo variant
- `ridenote-lockup.png` - Logo with wordmark

### Mockups
- `iphone_17_pro_silver-*.png` - iPhone 17 Pro mockups (silver finish)

## Path Usage in Components

Reference assets with absolute paths from project root:

```astro
<img src="/images/logos/ridenote-logo-primary-light.png" alt="RideNote" />
<img src="/images/heroes/hero-3.png" alt="Hero background" />
```
