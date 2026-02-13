# Website Improvement Recommendations

## 🎯 Priority: HIGH

### 1. **Fix Image Paths in Problem.astro** ⚠️
**Issue**: Using old paths for iPhone mockups
```astro
// Currently:
{ image: '/iphone_17_pro_silver-1.png', ... }

// Should be:
{ image: '/images/mockups/iphone_17_pro_silver-1.png', ... }
```
**Impact**: Images may not load correctly  
**Time**: 2 min

---

### 2. **Extract Accordion Logic to Utility** 🔧
**Issue**: FAQ and HowItWorks have identical accordion logic duplicated
**Current**: ~40 lines of inline scripts in 2 components
**Solution**: Create `src/utils/accordion.ts`
```typescript
export function initializeAccordion(buttonSelector: string, contentSelector: string): void
```
**Benefits**: Reusable, maintainable, testable  
**Time**: 15 min

---

### 3. **Fix Pricing Section Conflicts** 🚨
**Issue**: Pricing component shows plans that conflict with FAQ
- FAQ says: "Free. No ads, no subscriptions, no in-app purchases"
- Pricing shows: Pro ($4.99/mo), Lifetime ($99)
- Features in pricing don't match app description (photo uploads, analytics, etc.)

**Solution**: Either:
- Option A: Update pricing to match true feature set
- Option B: Keep pricing, update FAQ to reflect real pricing model
- Recommended: Align with FAQ (free forever) if that's the actual plan

**Impact**: Confuses users about monetization  
**Time**: 30 min

---

## 🎨 Priority: MEDIUM

### 4. **Accessibility Improvements**
- [ ] Add `aria-expanded` to accordion buttons (FAQ, HowItWorks)
- [ ] Add ARIA labels to phone carousel buttons
- [ ] Ensure color contrast meets WCAG AA (some white/60 text on black may be too light)
- [ ] Add `role="tab"` and `aria-controls` to FAQs

**Time**: 20 min

### 5. **Internationalization (i18n) Setup**
- [ ] Add language selector to Footer
- [ ] Create `src/i18n/` for translations
- [ ] Start with Spanish (obvious motorcycle audience)

**Time**: 1 hour

### 6. **SEO Enhancements**
- [ ] Add structured data (Schema.org) for FAQ
- [ ] Add OpenGraph meta tags (social sharing)
- [ ] Add Sitemap generation
- [ ] Improve meta descriptions for each page
- [ ] Add alt text to all feature images (already done ✓)

**Time**: 45 min

### 7. **Performance Optimization**
- [ ] Image optimization (consider WebP with fallbacks)
- [ ] Add `loading="lazy"` to below-fold images
- [ ] Implement image preloading for carousel
- [ ] Add responsive image sizes with `srcset`

**Time**: 1 hour

---

## ✨ Priority: MEDIUM-LOW

### 8. **Newsletter/Email Signup**
**Current**: No way to stay updated  
**Add**: Newsletter section before FinalCTA
- Captures leads
- Builds audience for launch

**Time**: 30 min

### 9. **Testimonials Section**
**Gap**: No social proof beyond features  
**Add**: Section with:
- Beta testers quotes
- YouTube review embeds
- Community mentions

**Time**: 1 hour (content-dependent)

### 10. **Mobile Menu - Screen Reader Support**
**Issue**: Mobile menu lacks ARIA labels
**Fix**:
```astro
<button aria-expanded={isOpen} aria-controls="mobile-menu-content">
  Toggle Menu
</button>
```

**Time**: 10 min

---

## 🐛 Priority: LOW (Polish)

### 11. **Social Links in Footer**
**Current**: All href="#" (dead links)  
**Add**: Actual URLs to:
- Instagram
- Twitter/X
- Discord/Community
- YouTube (if launch video exists)

**Time**: 5 min

### 12. **Favicon Optimization**
- [ ] Add `apple-touch-icon`
- [ ] Add favicon for dark/light mode
- [ ] Consider animated favicon for loader

**Time**: 15 min

### 13. **Loading State for Carousel**
**Current**: Phone carousel auto-plays but no loading feedback  
**Add**: Progress indicators or dots
```astro
<div class="flex gap-2 mt-4">
  {screens.map((_, i) => (
    <div class={`h-1 w-8 rounded transition-all ${i === currentIndex ? 'bg-lime-400' : 'bg-white/20'}`} />
  ))}
</div>
```

**Time**: 20 min

### 14. **Smooth Scroll Behavior**
**Add**: `scroll-behavior: smooth` in CSS
- Already implemented ✓ for anchor links, ensure it works everywhere

**Time**: 5 min

---

## 📊 Priority: STRATEGY

### 15. **Analytics Setup**
**Current**: None (app has zero tracking, which is good for privacy)  
**Consider**: Privacy-respecting analytics:
- Plausible Analytics (no cookies, GDPR compliant)
- Fathom Analytics
- Simple page view tracking without personal data

**Time**: 30 min

### 16. **App Store Links**
**Issue**: Hero/CTA buttons say "Download App" but don't link anywhere  
**Add**: Links to:
- Apple App Store
- TestFlight (beta) if available
- Direct download instructions

**Time**: 10 min

### 17. **Video Demo**
**Gap**: No embedded demo video  
**Add**: 30-60 second video showing:
- Quick setup (5 min claim)
- Logging a ride
- Searching history
- Comparing settings

**Impact**: High conversion boost  
**Time**: Content-dependent

---

## 📋 Quick Wins (Do First)

1. ✅ Fix image paths in Problem.astro (2 min)
2. ✅ Update social media links in Footer (5 min)
3. ✅ Add ARIA labels to accordions (10 min)
4. ✅ Fix Pricing/FAQ conflict (30 min)
5. ✅ Extract accordion logic (15 min)

**Total Quick Wins: ~1 hour**

---

## 📈 Big Impact Items

1. **Video Demo** - Could increase conversions 20-30%
2. **Fix Pricing/Free Conflict** - Clarifies monetization
3. **Accessibility** - Reaches wider audience, improves SEO
4. **Newsletter Signup** - Builds launch list
5. **Testimonials** - Builds credibility

---

## Code Health Summary

✅ **Already Great**:
- Clean component structure
- Organized assets
- Accessible design patterns
- Good semantic HTML
- Responsive layout

⚠️ **Needs Work**:
- Accordion logic duplication
- Image path inconsistencies
- Missing accessibility attributes
- Dead social links
- Pricing/messaging conflict

🚀 **Growth Opportunities**:
- Video content
- Email capture
- Analytics
- Social proof
- Mobile app links
