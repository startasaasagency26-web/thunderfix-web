# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: performance.spec.ts >> Mobile Navigation Performance >> should open mobile menu and navigate smoothly
- Location: tests\performance.spec.ts:6:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: /services/i })
Expected: visible
Error: strict mode violation: getByRole('link', { name: /services/i }) resolved to 2 elements:
    1) <a href="/#services" class="group flex items-center justify-between rounded-2xl px-5 py-5 text-[13px] font-black tracking-[0.18em] uppercase text-black/50 transition-all duration-300 hover:bg-black/4 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20">…</a> aka getByRole('link', { name: 'Services', exact: true })
    2) <a href="#services" class="btn-premium btn-outline w-full sm:w-auto">View Services</a> aka getByRole('link', { name: 'View Services' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: /services/i })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e4]:
      - link "Go to Thunderfix homepage" [ref=e5] [cursor=pointer]:
        - /url: /
      - link "Go to Thunderfix homepage" [ref=e7] [cursor=pointer]:
        - /url: /
        - img "Thunderfix" [ref=e8]
      - button "Toggle menu" [expanded] [ref=e10]
  - dialog "Navigation menu" [ref=e16]:
    - generic [ref=e17]:
      - link "Go to Thunderfix homepage" [ref=e18] [cursor=pointer]:
        - /url: /
        - img "Thunderfix" [ref=e21]
      - button "Close navigation menu" [active] [ref=e22]:
        - img [ref=e23]
    - navigation "Menu" [ref=e26]:
      - link "Services" [ref=e28] [cursor=pointer]:
        - /url: /#services
        - text: Services
        - img [ref=e29]
      - link "Why Us" [ref=e32] [cursor=pointer]:
        - /url: /#why-us
        - text: Why Us
        - img [ref=e33]
      - link "Testimonials" [ref=e36] [cursor=pointer]:
        - /url: /#testimonials
        - text: Testimonials
        - img [ref=e37]
      - link "FAQ" [ref=e40] [cursor=pointer]:
        - /url: /#faq
        - text: FAQ
        - img [ref=e41]
      - link "Locations" [ref=e44] [cursor=pointer]:
        - /url: /locations
        - text: Locations
        - img [ref=e45]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - button "Switch language to English" [pressed] [ref=e49]: EN
        - button "Tukar bahasa ke Bahasa Melayu" [ref=e50]: BM
      - link "Select Branch" [ref=e51] [cursor=pointer]:
        - /url: /locations
        - text: Start Repair
        - img [ref=e52]
  - main [ref=e54]:
    - generic [ref=e55]:
      - generic [ref=e57]:
        - generic [ref=e59]:
          - img [ref=e60]
          - text: One of the best repair labs in the region
        - heading "Surgical Precision For Your Premium Tech" [level=1] [ref=e63]:
          - text: Surgical Precision
          - text: For Your Premium Tech
        - paragraph [ref=e65]: We don't just fix devices; we restore them to factory standards. Experience the gold standard in laboratory-grade hardware restoration.
        - generic [ref=e67]:
          - link "Start Your Repair" [ref=e68] [cursor=pointer]:
            - /url: /locations
            - text: Start Your Repair
            - img [ref=e69]
          - link "View Services" [ref=e71] [cursor=pointer]:
            - /url: "#services"
      - region "Proof that your device is in the right hands" [ref=e76]:
        - generic [ref=e77]:
          - generic [ref=e79]:
            - paragraph [ref=e80]: Trusted by Thousands
            - heading "Proof that your device is in the right hands" [level=2] [ref=e81]
            - paragraph [ref=e82]: "We combine repair volume, customer satisfaction, and operational consistency to give customers one thing that matters most: confidence before they even book."
          - generic [ref=e83]:
            - article [ref=e85]:
              - img [ref=e87]
              - generic [ref=e89]:
                - generic [ref=e90]: 5,000+
                - heading "Devices Repaired" [level=3] [ref=e91]
                - paragraph [ref=e92]: Across phones, tablets, and essential repairs
            - article [ref=e94]:
              - img [ref=e96]
              - generic [ref=e101]:
                - generic [ref=e102]: 98%
                - heading "Customer Satisfaction" [level=3] [ref=e103]
                - paragraph [ref=e104]: Built through trust, speed, and consistency
            - article [ref=e106]:
              - img [ref=e108]
              - generic [ref=e111]:
                - generic [ref=e112]: "2"
                - heading "Outlets" [level=3] [ref=e113]
                - paragraph [ref=e114]: Convenient support across both Thunderfix outlets
            - article [ref=e116]:
              - img [ref=e118]
              - generic [ref=e121]:
                - generic [ref=e122]: 99.9%
                - heading "Repair Success Rate" [level=3] [ref=e123]
                - paragraph [ref=e124]: Reliable results with a transparent process
          - generic [ref=e126]:
            - generic [ref=e127]:
              - paragraph [ref=e128]: Supported Brands
              - generic "Supported device brands" [ref=e129]:
                - generic [ref=e130]: Apple
                - generic [ref=e131]: Samsung
                - generic [ref=e132]: Google
                - generic [ref=e133]: Huawei
                - generic [ref=e134]: Xiaomi
                - generic [ref=e135]: Oppo
            - paragraph [ref=e137]: Fast diagnostics. Genuine care. Transparent repair process.
      - generic [ref=e139]:
        - generic [ref=e141]:
          - generic [ref=e142]: Our Core Expertise
          - heading "Engineering Excellence In Every Restore." [level=2] [ref=e143]:
            - text: Engineering Excellence
            - text: In Every Restore.
        - generic [ref=e144]:
          - generic [ref=e146]:
            - img "Smartphone display calibration on a clean repair bench with color bars and precision tools" [ref=e148]
            - generic [ref=e149]:
              - heading "Display Calibration" [level=3] [ref=e150]
              - paragraph [ref=e151]: Surgical precision screen replacement with authentic color-accurate calibration for premium display fidelity.
          - generic [ref=e153]:
            - img "Open smartphone battery and charging system diagnostics with precision tools on a clean bench" [ref=e155]
            - generic [ref=e156]:
              - heading "Power Systems" [level=3] [ref=e157]
              - paragraph [ref=e158]: Advanced battery diagnostics, OEM replacement, and charging systems.
          - generic [ref=e160]:
            - img "Smartphone logic board liquid recovery process with tweezers and ultrasonic cleaning setup" [ref=e162]
            - generic [ref=e163]:
              - heading "Liquid Recovery" [level=3] [ref=e164]
              - paragraph [ref=e165]: Chemical ultrasonic cleaning to resolve water damage at micro-board levels.
          - generic [ref=e167]:
            - img "Board-level smartphone repair under a microscope with precision soldering tools" [ref=e169]
            - generic [ref=e170]:
              - generic [ref=e171]:
                - heading "Custom Works" [level=3] [ref=e172]
                - paragraph [ref=e173]: Specialized device engineering for complex hardware failures others can't resolve.
              - link "Get Custom Quote" [ref=e174] [cursor=pointer]:
                - /url: /locations
                - img [ref=e175]
      - generic [ref=e179]:
        - generic [ref=e181]:
          - generic [ref=e182]: Precision Restoration
          - heading "Unleash the Future of Sound Restoration" [level=2] [ref=e183]
          - paragraph [ref=e184]: Upgrade your audio experience. We specialize in micro-soldering and acoustic diagnostics to ensure your premium headphones deliver the magic they were designed for.
          - list [ref=e185]:
            - listitem [ref=e186]:
              - img [ref=e187]
              - text: Acoustic fidelity testing
            - listitem [ref=e190]:
              - img [ref=e191]
              - text: OEM internal components
            - listitem [ref=e194]:
              - img [ref=e195]
              - text: Surgical-grade soldering
          - generic [ref=e198]:
            - button "Book Restoration" [ref=e199]:
              - text: Book Restoration
              - img [ref=e200]
            - button "View Lab Process" [ref=e202]
        - img "Premium headphones and earbuds prepared for sound restoration service" [ref=e208]
      - generic [ref=e210]:
        - generic [ref=e212]:
          - generic [ref=e213]: The Difference
          - heading "The Standard" [level=2] [ref=e214]
        - generic [ref=e215]:
          - generic [ref=e217]:
            - img [ref=e219]
            - heading "Surgical Precision" [level=3] [ref=e223]
            - paragraph [ref=e224]: Our technicians operate with micro-level accuracy, ensuring every internal component is seated perfectly to OEM standards.
          - generic [ref=e226]:
            - img [ref=e228]
            - heading "Original Components" [level=3] [ref=e231]
            - paragraph [ref=e232]: We prioritize authentic parts that maintain the structural integrity and performance fidelity of your premium device.
          - generic [ref=e234]:
            - img [ref=e236]
            - heading "Rapid Restoration" [level=3] [ref=e238]
            - paragraph [ref=e239]: Most repairs are completed within the same day, minimizing downtime without compromising on our strict protocols.
          - generic [ref=e241]:
            - img [ref=e243]
            - heading "Elite Certification" [level=3] [ref=e246]
            - paragraph [ref=e247]: Thunderfix engineers are among the most highly trained in the region, specializing in complex diagnostics.
        - generic [ref=e249]:
          - heading "\"We handle what others can't. That is our promise.\"" [level=3] [ref=e250]:
            - text: "\"We handle what others can't."
            - text: That is our promise."
          - paragraph [ref=e251]: — The Thunderfix Guarantee
          - link "Start Your Repair" [ref=e252] [cursor=pointer]:
            - /url: /locations
      - generic [ref=e255]:
        - generic [ref=e257]:
          - generic [ref=e258]: Display Science
          - heading "Visual Fidelity Without Compromise" [level=2] [ref=e259]
          - paragraph [ref=e260]: Our engineers handle the world's most delicate display repairs. We maintain TrueTone functionality and color accuracy using laboratory calibration tools.
          - list [ref=e261]:
            - listitem [ref=e262]:
              - img [ref=e263]
              - text: TrueTone preservation
            - listitem [ref=e266]:
              - img [ref=e267]
              - text: Haptic Touch calibration
            - listitem [ref=e270]:
              - img [ref=e271]
              - text: Dust-free cleanroom assembly
          - generic [ref=e274]:
            - button "Get a Quote" [ref=e275]:
              - text: Get a Quote
              - img [ref=e276]
            - button "See Repair Gallery" [ref=e278]
        - img "Premium smartphone display repair tools and components" [ref=e284]
      - generic [ref=e286]:
        - generic [ref=e288]:
          - generic [ref=e289]: Real Repair Results
          - heading "See the repair quality before you trust us with your device." [level=2] [ref=e290]
          - paragraph [ref=e291]: Real customer devices. Real repair outcomes. Backed by verified Google reviews.
        - generic [ref=e292]:
          - article [ref=e294]:
            - generic [ref=e295]: Before & After Repair
            - generic "Before and after repair video showing a real customer device restored by Thunderfix" [ref=e297]
            - paragraph [ref=e299]: Samsung Galaxy Fold 6 • Display Assembly Restoration
          - generic [ref=e300]:
            - link "Read verified Google reviews for Thunderfix Seri Kembangan in a new tab" [ref=e302] [cursor=pointer]:
              - /url: https://www.google.com/search?sca_esv=aad7451a74ba4d56&hl=en-MY&sxsrf=ANbL-n6_lNTR-HJXyHzsUQONB9Wz6J9Pjw:1777027133245&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOTqBMD2YG_e157yreaVG7raYb529EhZppMtIEOp_KANvhuybhT9GAdwyIj1DwAzYb9jmbimBClYtabpVe4cj4w1XSpW6Z_AM1TFaWVerthCD9KqamQ%3D%3D&q=Thunderfix+Seri+Kembangan+Reviews&sa=X&ved=2ahUKEwjq26H4pYaUAxUNzjgGHQLGPVkQ0bkNegQIIhAF&cshid=1777027234899225&biw=1536&bih=695&dpr=1.25
              - generic [ref=e303]:
                - generic [ref=e304]:
                  - generic [ref=e305]:
                    - generic [ref=e306]: "5.0"
                    - generic [ref=e307]:
                      - generic [ref=e308]:
                        - img [ref=e309]
                        - img [ref=e311]
                        - img [ref=e313]
                        - img [ref=e315]
                        - img [ref=e317]
                        - generic [ref=e319]: 5.0 out of 5 on Google
                      - generic [ref=e320]: 218 reviews
                  - paragraph [ref=e321]: Verified Google feedback from customers who trusted the Thunderfix Seri Kembangan team with their device repairs.
                - img [ref=e323]
              - list [ref=e327]:
                - listitem [ref=e328]:
                  - img [ref=e330]
                  - text: 5.0 Google Rating
                - listitem [ref=e332]:
                  - img [ref=e334]
                  - text: 218 verified reviews
                - listitem [ref=e337]:
                  - img [ref=e339]
                  - text: Trusted local repair team in Seri Kembangan
                - listitem [ref=e342]:
                  - img [ref=e344]
                  - text: iPhone, iPad, Android & accessory repairs
              - generic [ref=e346]: Read Verified Google Reviews
            - link "View Zara LuvTV's Google review source in a new tab" [ref=e348] [cursor=pointer]:
              - /url: https://www.google.com/search?sca_esv=aad7451a74ba4d56&hl=en-MY&sxsrf=ANbL-n6_lNTR-HJXyHzsUQONB9Wz6J9Pjw:1777027133245&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOTqBMD2YG_e157yreaVG7raYb529EhZppMtIEOp_KANvhuybhT9GAdwyIj1DwAzYb9jmbimBClYtabpVe4cj4w1XSpW6Z_AM1TFaWVerthCD9KqamQ%3D%3D&q=Thunderfix+Seri+Kembangan+Reviews&sa=X&ved=2ahUKEwjq26H4pYaUAxUNzjgGHQLGPVkQ0bkNegQIIhAF&cshid=1777027234899225&biw=1536&bih=695&dpr=1.25
              - generic [ref=e350]:
                - img [ref=e351]
                - img [ref=e353]
                - img [ref=e355]
                - img [ref=e357]
                - img [ref=e359]
                - generic [ref=e361]: 5.0 out of 5 on Google
              - blockquote [ref=e362]:
                - paragraph [ref=e363]: "\"I sent my iPad for repair and they did an amazing job. The technician explained everything clearly, and made the whole process stress-free. The repair was quick, and the price was very reasonable.\""
              - generic [ref=e364]:
                - generic [ref=e365]: Z
                - generic [ref=e366]:
                  - generic [ref=e367]: Zara LuvTV
                  - generic [ref=e368]: Verified Customer
              - generic [ref=e369]:
                - text: Read Verified Google Reviews
                - img [ref=e370]
      - generic [ref=e376]:
        - generic [ref=e377]:
          - heading "Frequently Asked Questions" [level=2] [ref=e379]:
            - text: Frequently Asked
            - text: Questions
          - generic [ref=e380]:
            - generic [ref=e382]:
              - button "How long does a typical iPhone repair take?" [ref=e383]:
                - generic [ref=e384]: How long does a typical iPhone repair take?
                - img [ref=e386]
              - paragraph [ref=e388]: Most standard restorations, such as screen or battery replacements, are completed within 45 to 60 minutes in our laboratory while you wait.
            - button "Do you use original Apple components?" [ref=e391]:
              - generic [ref=e392]: Do you use original Apple components?
              - img [ref=e394]
            - button "Is there a warranty on the restoration?" [ref=e397]:
              - generic [ref=e398]: Is there a warranty on the restoration?
              - img [ref=e400]
            - button "Can you fix logic board issues others have rejected?" [ref=e403]:
              - generic [ref=e404]: Can you fix logic board issues others have rejected?
              - img [ref=e406]
        - img "Thunderfix repair tools and brand visual" [ref=e412]
      - generic [ref=e414]:
        - generic [ref=e416]:
          - generic [ref=e417]: Stay Connected
          - heading "Follow Us On Facebook" [level=2] [ref=e418]
        - generic [ref=e419]:
          - link "View on Facebook" [ref=e421] [cursor=pointer]:
            - /url: https://www.facebook.com/share/18Q78Fk8vS/?mibextid=wwXIfr
            - img "Thunderfix repair work from Facebook showing a device diagnostic result" [ref=e422]
            - img [ref=e425]
            - generic [ref=e427]: View on Facebook
            - generic [ref=e428]: View Thunderfix repair post on Facebook
          - link "View on Facebook" [ref=e431] [cursor=pointer]:
            - /url: https://www.facebook.com/share/18Q78Fk8vS/?mibextid=wwXIfr
            - img "Thunderfix repaired device showcase from Facebook" [ref=e432]
            - img [ref=e435]
            - generic [ref=e437]: View on Facebook
            - generic [ref=e438]: View Thunderfix repair post on Facebook
          - link "View on Facebook" [ref=e441] [cursor=pointer]:
            - /url: https://www.facebook.com/share/18Q78Fk8vS/?mibextid=wwXIfr
            - img "Thunderfix device repair post showing a phone charging test" [ref=e442]
            - img [ref=e445]
            - generic [ref=e447]: View on Facebook
            - generic [ref=e448]: View Thunderfix repair post on Facebook
          - link "View on Facebook" [ref=e451] [cursor=pointer]:
            - /url: https://www.facebook.com/share/18Q78Fk8vS/?mibextid=wwXIfr
            - img "Thunderfix repair work from Facebook showing a phone motherboard check" [ref=e452]
            - img [ref=e455]
            - generic [ref=e457]: View on Facebook
            - generic [ref=e458]: View Thunderfix repair post on Facebook
          - link "View on Facebook" [ref=e461] [cursor=pointer]:
            - /url: https://www.facebook.com/share/18Q78Fk8vS/?mibextid=wwXIfr
            - img "Thunderfix device repair post showing a battery replacement" [ref=e462]
            - img [ref=e465]
            - generic [ref=e467]: View on Facebook
            - generic [ref=e468]: View Thunderfix repair post on Facebook
          - link "Visit Thunderfix on Facebook" [ref=e471] [cursor=pointer]:
            - /url: https://www.facebook.com/share/18Q78Fk8vS/?mibextid=wwXIfr
            - generic [ref=e472]:
              - img [ref=e473]
              - generic [ref=e475]: View on Facebook
      - generic [ref=e477]:
        - generic [ref=e478]:
          - heading "Subscribe to Our Newsletter" [level=2] [ref=e480]
          - generic [ref=e482]:
            - textbox "Full Name*" [ref=e484]
            - textbox "Email Here*" [ref=e486]
            - button "Subscribe Now" [ref=e487]
        - generic [ref=e488]:
          - generic [ref=e489]:
            - generic [ref=e490]: Thunderfix
            - generic [ref=e491]:
              - link "Home" [ref=e492] [cursor=pointer]:
                - /url: "#"
              - link "Products" [ref=e493] [cursor=pointer]:
                - /url: "#"
              - link "Blog" [ref=e494] [cursor=pointer]:
                - /url: "#"
              - link "About Us" [ref=e495] [cursor=pointer]:
                - /url: "#"
          - generic [ref=e496]:
            - paragraph [ref=e497]: © 2026 Thunderfix. All Rights Reserved.
            - paragraph [ref=e498]: Designed by Infinita Tech Solutions
  - alert [ref=e499]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("Mobile Navigation Performance", () => {
  4  |   test.use({ viewport: { width: 390, height: 844 } });
  5  | 
  6  |   test("should open mobile menu and navigate smoothly", async ({ page }) => {
  7  |     // 1. Load homepage
  8  |     await page.goto("/");
  9  |     
  10 |     // 2. Check for horizontal overflow
  11 |     const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  12 |     const innerWidth = await page.evaluate(() => window.innerWidth);
  13 |     expect(scrollWidth).toBeLessThanOrEqual(innerWidth);
  14 | 
  15 |     // 3. Open hamburger menu
  16 |     const menuButton = page.getByRole("button", { name: /toggle menu/i });
  17 |     await menuButton.click();
  18 |     
  19 |     // 4. Verify menu items are visible
  20 |     const servicesLink = page.getByRole("link", { name: /services/i });
> 21 |     await expect(servicesLink).toBeVisible();
     |                                ^ Error: expect(locator).toBeVisible() failed
  22 | 
  23 |     // 5. Click Services (should close menu and scroll)
  24 |     await servicesLink.click();
  25 |     
  26 |     // 6. Verify menu closed immediately
  27 |     await expect(servicesLink).not.toBeVisible();
  28 | 
  29 |     // 7. Check Locations navigation
  30 |     await menuButton.click();
  31 |     const locationsLink = page.getByRole("link", { name: /locations/i }).first();
  32 |     await locationsLink.click();
  33 |     
  34 |     // 8. Verify /locations route
  35 |     await expect(page).toHaveURL(/\/locations/);
  36 |     
  37 |     // 9. Check for console errors
  38 |     page.on("pageerror", (err) => {
  39 |       throw new Error(`Page error: ${err.message}`);
  40 |     });
  41 |   });
  42 | });
  43 | 
```