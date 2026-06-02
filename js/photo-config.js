/**
 * ============================================
 *   BEN'S ORTHODONTIE — PHOTO CONFIGURATION
 * ============================================
 *
 *   HOW TO CHANGE A PHOTO:
 *   1. Put your new photo in the "images" folder
 *   2. Find the photo you want to replace below
 *   3. Change the filename to your new photo's name
 *   4. Save this file and refresh the website
 *
 *   Example: To change the home page hero image,
 *   find "home-hero" below and change the filename.
 *
 *   All photos are in the "images/" folder.
 * ============================================
 */

const PHOTO_CONFIG = {

  // ==========================================
  //   HOME PAGE  (index.html)
  // ==========================================
  'home-hero':              'hero-mother-child.jpg',      // Main hero background image
  'home-service-1':         'clinic-detail-2.jpg',        // Clear Aligners service card
  'home-service-2':         'treatment-room-1.jpg',       // Traditional Braces service card
  'home-service-3':         'clinic-detail-1.jpg',        // Lingual Braces service card
  'home-service-4':         'clinic-detail-3.jpg',        // Retainers service card
  'home-service-5':         'doctor-consulting.jpg',      // 3D Scanning service card
  'home-service-6':         'equipment-lab.jpg',          // 3D Printing service card
  'home-about':             'dr-hesami-chin.jpg',         // About section - doctor photo
  'home-tech':              'doctor-consulting.jpg',      // Technology preview
  'home-team-1':            'doctor-portrait-studio.jpg', // Team card - Dr. Hesami
  'home-team-2':            'doctors-duo.jpg',            // Team card - Dr. Kassem
  'home-team-3':            'team-member-1.jpg',          // Team card - Naual
  'home-team-4':            'team-member-2.jpg',          // Team card - Evy
  'home-cta':               'clinic-wide.jpg',            // Call-to-action background

  // ==========================================
  //   ABOUT PAGE  (about.html)
  // ==========================================
  'about-hero':             'clinic-interior-1.jpg',      // Page hero background
  'about-story':            'dr-hesami-about.jpg',        // Our story section image
  'about-philosophy':       'about-philosophy-new.png',   // Philosophy section image
  'about-gallery-1':        'clinic-interior-1.jpg',      // Clinic gallery photo 1
  'about-gallery-2':        'treatment-room-1.jpg',       // Clinic gallery photo 2
  'about-gallery-3':        'clinic-interior-2.jpg',      // Clinic gallery photo 3
  'about-gallery-4':        'equipment-lab.jpg',           // Clinic gallery photo 4
  'about-cta':              'clinic-wide.jpg',            // CTA background

  // ==========================================
  //   TEAM PAGE  (team.html)
  // ==========================================
  'team-hero':              'team-hero-new.jpg',          // Page hero - team group photo
  'team-dr-hesami':         'doctor-portrait-studio.jpg', // Dr. Hesami featured photo
  'team-dr-kassem':         'dr-kassem-portrait.jpg',     // Dr. Kassem featured photo
  'team-naual':             'naual-portrait.jpg',         // Naual Abbou card photo
  'team-evy':               'evy-portrait.jpg',           // Evy Moller card photo
  'team-shreya':            'shreya-portrait.jpg',        // Shreya Kansara card photo
  'team-group':             'team-group-new.jpg',         // Full team photo section
  'team-cta':               'clinic-wide.jpg',            // CTA background

  // ==========================================
  //   TREATMENTS PAGE  (treatments.html)
  // ==========================================
  'treatments-hero':        'treatment-procedure.jpg',    // Page hero background
  'treatments-aligners':    'doctor-scrubs.jpg',          // Clear aligners section image
  'treatments-braces':      'treatment-room-1.jpg',       // Braces section image
  'treatments-lingual':     'clinic-detail-1.jpg',        // Lingual braces section image
  'treatments-retainers':   'clinic-detail-3.jpg',        // Retainers section image
  'treatments-cta':         'clinic-wide.jpg',            // CTA background

  // ==========================================
  //   CLEAR ALIGNERS PAGE  (clear-aligners.html)
  // ==========================================
  'aligners-hero':          'clear-aligner-hero.png',     // Page hero background
  'aligners-intro':         'clear-aligner-intro.png',    // Intro section image
  'aligners-candidate':     'doctor-consulting.jpg',      // "Is it right for you" image
  'aligners-cta':           'clinic-wide.jpg',            // CTA background

  // ==========================================
  //   BRACES PAGE  (braces.html)
  // ==========================================
  'braces-hero':            'braces-hero-new.png',        // Page hero background
  'braces-intro':           'braces-intro-new.png',       // Intro section image
  'braces-types':           'braces-types-new.png',       // Types of braces image
  'braces-expect':          'braces-expect-new.png',      // What to expect image
  'braces-cta':             'clinic-wide.jpg',            // CTA background

  // ==========================================
  //   TECHNOLOGY PAGE  (technology.html)
  // ==========================================
  'tech-hero':              'doctor-consulting.jpg',      // Page hero background
  'tech-scanning':          'doctor-consulting.jpg',      // 3D Scanning card image
  'tech-planning':          'clinic-detail-1.jpg',        // Digital Planning card image
  'tech-printing':          'equipment-lab.jpg',          // 3D Printing card image
  'tech-benefits':          'treatment-room-1.jpg',       // Benefits section image
  'tech-cta':               'clinic-wide.jpg',            // CTA background

  // ==========================================
  //   GALLERY PAGE  (gallery.html)
  // ==========================================
  'gallery-hero':           'clinic-interior-1.jpg',      // Page hero background
  'gallery-1':              'clinic-interior-1.jpg',      // Gallery item 1
  'gallery-2':              'doctor-portrait-studio.jpg', // Gallery item 2
  'gallery-3':              'treatment-room-1.jpg',       // Gallery item 3
  'gallery-4':              'clinic-detail-1.jpg',        // Gallery item 4
  'gallery-5':              'doctors-duo.jpg',            // Gallery item 5
  'gallery-6':              'clinic-interior-2.jpg',      // Gallery item 6
  'gallery-7':              'equipment-lab.jpg',          // Gallery item 7
  'gallery-8':              'team-member-1.jpg',          // Gallery item 8
  'gallery-9':              'doctor-consulting.jpg',      // Gallery item 9
  'gallery-10':             'doctor-portrait-clinic.jpg', // Gallery item 10
  'gallery-11':             'clinic-detail-2.jpg',        // Gallery item 11
  'gallery-12':             'team-member-2.jpg',          // Gallery item 12
  'gallery-13':             'treatment-procedure.jpg',    // Gallery item 13
  'gallery-14':             'clinic-detail-3.jpg',        // Gallery item 14
  'gallery-15':             'doctors-seated.jpg',         // Gallery item 15
  'gallery-16':             'team-meeting.jpg',           // Gallery item 16
  'gallery-17':             'hero-reception.jpg',         // Gallery item 17
  'gallery-18':             'clinic-wide.jpg',            // Gallery item 18
  'gallery-19':             'team-photo.jpg',             // Gallery item 19
  'gallery-20':             'doctor-consulting-2.jpg',    // Gallery item 20
  'gallery-cta':            'clinic-wide.jpg',            // CTA background

  // ==========================================
  //   FAQ PAGE  (faq.html)
  // ==========================================
  'faq-hero':               'doctor-portrait-clinic.jpg', // Page hero background
  'faq-cta':                'clinic-wide.jpg',            // CTA background

  // ==========================================
  //   BLOG PAGE  (blog.html)
  // ==========================================
  'blog-hero':              'blog-hero-new.jpg',          // Page hero background
  'blog-article-1':         'blog-article-1.jpg',         // Clear Aligners vs Braces (AI minimalist)
  'blog-article-2':         'blog-article-2.jpg',         // Child's First Visit (AI minimalist)
  'blog-article-3':         'blog-article-3.jpg',         // 3D Scanning Technology (AI minimalist)
  'blog-article-4':         'blog-article-4.jpg',         // Why Retainers Matter (AI minimalist)
  'blog-article-5':         'blog-article-5.jpg',         // Adult Orthodontics (AI minimalist)
  'blog-article-6':         'blog-article-6.jpg',         // Oral Hygiene with Braces (AI minimalist)
  'blog-cta':               'clinic-wide.jpg',            // CTA background

  // ==========================================
  //   CONTACT PAGE  (contact.html)
  // ==========================================
  'contact-hero':           'clinic-interior-1.jpg',      // Page hero background
  'contact-cta':            'clinic-wide.jpg',            // CTA background
};


// ============================================
//   AUTO-APPLY (do not edit below this line)
// ============================================
document.addEventListener('DOMContentLoaded', function() {

  // Try loading CMS-managed photos first, then fall back to PHOTO_CONFIG
  function applyPhotos(cmsPhotos) {
    document.querySelectorAll('[data-photo]').forEach(function(el) {
      const key = el.getAttribute('data-photo');

      // Check CMS data first (flattened from nested JSON)
      if (cmsPhotos && cmsPhotos[key]) {
        el.src = cmsPhotos[key];
        return;
      }

      // Fall back to hardcoded config
      if (PHOTO_CONFIG[key]) {
        el.src = 'images/' + PHOTO_CONFIG[key];
      }
    });
  }

  // Try to load CMS photo config
  fetch('/_data/photos.json')
    .then(function(res) { return res.ok ? res.json() : null; })
    .then(function(data) {
      if (data) {
        // Flatten nested structure: { home: { "home-hero": "..." } } → { "home-hero": "..." }
        var flat = {};
        Object.keys(data).forEach(function(section) {
          if (typeof data[section] === 'object') {
            Object.keys(data[section]).forEach(function(key) {
              flat[key] = data[section][key];
            });
          }
        });
        applyPhotos(flat);
      } else {
        applyPhotos(null);
      }
    })
    .catch(function() {
      applyPhotos(null);
    });
});
