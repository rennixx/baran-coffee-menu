"use client";

import { useEffect, useState } from "react";

const languages = [
  { key: "en", label: "English", icon: GlobeIcon, wide: true },
  { key: "ar", label: "العربية", icon: TranslateIcon },
  { key: "ku", label: "کوردی", icon: SparkleLanguageIcon },
];

const categories = [
  {
    name: "Hot Drinks",
    images: [
      "/menu/hot-espresso.jpg",
      "/menu/hot-latte.jpg",
      "/menu/hot-drinks.jpg",
    ],
    items: [
      ["Espresso", "3,000"], ["Double Espresso", "4,000"], ["Latte", "4,000"],
      ["Caramel Latte", "4,500"], ["Vanilla Latte", "4,500"], ["Mocha", "4,500"],
      ["Spanish Latte", "4,500"], ["Cappuccino", "4,000"], ["Americano", "3,500"],
      ["Hot Chocolate", "4,000"], ["Turkish Coffee", "2,000"],
      ["Arabic Coffee", "2,000"], ["Chocolate Coffee", "2,000"], ["Qazwan", "2,000"],
      ["Hazelnut Coffee", "2,000"], ["Cappuccino Powder", "2,000"], ["Nescafe", "1,000"],
      ["Tea", "500"], ["Double Tea", "1,000"],
    ],
  },
  {
    name: "Cold Drinks",
    images: [
      "/menu/cold-iced-latte.jpg",
      "/menu/cold-iced-coffee.jpg",
      "/menu/cold-iced-coffee-alt.jpg",
    ],
    items: [
      ["Iced Latte", "4,500"], ["Iced Caramel Latte", "5,000"], ["Iced Vanilla Latte", "5,000"],
      ["Iced Coffee", "4,000"], ["Iced Coffee Caramel", "4,500"], ["Iced Coffee Vanilla", "4,500"],
      ["Iced Spanish Latte", "4,500"], ["Iced Mocha", "4,500"], ["Iced Americano", "5,000"],
    ],
  },
  {
    name: "Shakes",
    images: [
      "/menu/shake-chocolate.jpg",
      "/menu/shake-strawberry.jpg",
      "/menu/shake-vanilla.jpg",
      "/menu/shakes.jpg",
    ],
    items: [
      ["Nutella Shake", "4,000"], ["Chocolate Shake", "3,500"], ["Kinder Shake", "5,000"],
      ["Oreo Shake", "4,000"], ["Strawberry Shake", "4,000"],
      ["Nutella Banana Milkshake", "5,000"], ["Strawberry Banana Milkshake", "5,000"],
    ],
  },
  {
    name: "Mojito",
    images: ["/menu/mojito.jpg", "/menu/mojito-alt.jpg"],
    items: [
      ["Classic Mojito", "4,000"], ["Strawberry Mojito", "4,000"],
      ["Blueberry Mojito", "4,000"], ["Lemon and Mint", "3,500"],
    ],
  },
  {
    name: "Crep",
    images: [
      "/menu/crepes-chocolate.jpg",
      "/menu/crepes-berries.jpg",
      "/menu/crepes.jpg",
    ],
    items: [
      ["Crep Nutella", "5,000"], ["Crep Fruits", "6,000"],
      ["Crep Pistachio", "6,000"], ["Crep Kinder", "6,000"],
    ],
  },
  {
    name: "Juice",
    images: [
      "/menu/juice-orange.jpg",
      "/menu/juice-fruit.jpg",
      "/menu/juice-citrus.jpg",
      "/menu/juice.jpg",
    ],
    items: [
      ["Orange Juice", "—"], ["Pomegranate Juice", "—"], ["Milk and Banana", "—"],
      ["Melon Juice", "—"], ["Cocktail", "—"],
    ],
  },
];

const translations = {
  en: {
    brandType: "C O F F E E  ·  C A F E",
    tagline: "A SIMPLE MENU FOR YOUR DAILY RITUAL",
    allMenu: "ALL MENU",
    drinks: "DRINKS",
    bakery: "FOOD",
    search: "Search menu",
    feedback: "Feedback",
    feedbackTitle: "How was your visit?",
    feedbackDescription: "Tell us what would make your next coffee better.",
    feedbackPlaceholder: "Your feedback",
    sendFeedback: "Send feedback",
    noItems: "No menu items found.",
    back: "Go back",
    openSearch: "Open search",
    menu: {
      "Hot Drinks": "Hot Drinks", "Cold Drinks": "Cold Drinks", Shakes: "Shakes",
      Mojito: "Mojito", Crep: "Crepes", Juice: "Juice",
    },
  },
  ar: {
    brandType: "قهوة  ·  مقهى",
    tagline: "قائمة بسيطة لطقوسك اليومية",
    allMenu: "كل القائمة",
    drinks: "المشروبات",
    bakery: "المأكولات",
    search: "ابحث في القائمة",
    feedback: "ملاحظات",
    feedbackTitle: "كيف كانت زيارتك؟",
    feedbackDescription: "أخبرنا بما يجعل قهوتك القادمة أفضل.",
    feedbackPlaceholder: "اكتب ملاحظاتك",
    sendFeedback: "إرسال الملاحظات",
    noItems: "لم يتم العثور على أصناف.",
    back: "رجوع",
    openSearch: "فتح البحث",
    menu: {
      "Hot Drinks": "مشروبات ساخنة", "Cold Drinks": "مشروبات باردة", Shakes: "شيك",
      Mojito: "موهيتو", Crep: "كريب", Juice: "عصائر",
    },
  },
  ku: {
    brandType: "قاوە  ·  کافێ",
    tagline: "لیستێکی سادە بۆ ڕۆژانەکەت",
    allMenu: "هەموو لیستەکە",
    drinks: "خواردنەوەکان",
    bakery: "خواردن",
    search: "گەڕان لە لیستەکە",
    feedback: "تێبینی",
    feedbackTitle: "سەردانەکەت چۆن بوو؟",
    feedbackDescription: "پێمان بڵێ چ شتێک قاوەی داهاتووت باشتر دەکات.",
    feedbackPlaceholder: "تێبینیت بنووسە",
    sendFeedback: "ناردنی تێبینی",
    noItems: "هیچ دانەیەک نەدۆزرایەوە.",
    back: "گەڕانەوە",
    openSearch: "کردنەوەی گەڕان",
    menu: {
      "Hot Drinks": "خواردنەوە گەرمەکان", "Cold Drinks": "خواردنەوە ساردەکان",
      Shakes: "شەیک", Mojito: "مۆجیتۆ", Crep: "کرێپ", Juice: "شەربەت",
    },
  },
};

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" />
      <path d="M2.5 12h19M12 2.5c2.2 2.5 3.3 5.7 3.3 9.5s-1.1 7-3.3 9.5c-2.2-2.5-3.3-5.7-3.3-9.5S9.8 5 12 2.5Z" />
    </svg>
  );
}

function TranslateIcon() {
  return (
    <svg viewBox="0 0 32 26" aria-hidden="true">
      <path d="M2 5h10M7 2v3m-4 0c1 3.4 3.1 5.9 6.2 7.3M4.5 9.2c1.6-.7 2.9-2.1 3.8-4.2" />
      <path d="m15 20 4.2-11 4.2 11m-6.8-3.2h5.2" />
      <text x="22.5" y="9.5" className="arabic-icon-letter">ع</text>
    </svg>
  );
}

function SparkleLanguageIcon() {
  return (
    <svg viewBox="0 0 28 24" aria-hidden="true">
      <path d="m20 2 .9 3.1L24 6l-3.1.9L20 10l-.9-3.1L16 6l3.1-.9L20 2Z" />
      <path d="m9 8 1.4 4.6L15 14l-4.6 1.4L9 20l-1.4-4.6L3 14l4.6-1.4L9 8Z" />
      <path d="M23 15v6m-3-3h6" />
    </svg>
  );
}

export default function HomePage() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [activeCategory, setActiveCategory] = useState("Hot Drinks");
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeSection, setActiveSection] = useState("Drinks");
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const language = translations[selectedLanguage] ?? translations.en;
  const isRtl = selectedLanguage === "ar" || selectedLanguage === "ku";

  useEffect(() => {
    document.documentElement.lang = selectedLanguage || "en";
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
  }, [selectedLanguage, isRtl]);

  useEffect(() => {
    if (!selectedLanguage) return undefined;

    const sections = document.querySelectorAll("[data-menu-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const category = visible.target.getAttribute("data-menu-section");
          setActiveCategory(category);
          setActiveSection(category === "Crep" || category === "Juice" ? "Food" : "Drinks");
        }
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0.1, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [selectedLanguage]);

  if (selectedLanguage) {
    const scrollToCategory = (category) => {
      setActiveCategory(category);
      setActiveSection(category === "Crep" || category === "Juice" ? "Food" : "Drinks");
      document.getElementById(categoryId(category))?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
      <main className="menu-page">
        <div className="menu-chrome">
          <header className="menu-header">
            <button className="icon-button" type="button" onClick={() => setSelectedLanguage("")} aria-label={language.back}>
              <BackIcon />
            </button>
            <button className="menu-brand" type="button" onClick={() => scrollToCategory("Hot Drinks")}>
              <img className="menu-brand-logo" src="/baran-coffee-logo.jpg" alt="" aria-hidden="true" />
              <span>BARAN COFFEE</span>
            </button>
            <button className="icon-button" type="button" onClick={() => setSearchOpen((open) => !open)} aria-label={language.openSearch}>
              <SearchIcon />
            </button>
          </header>

          {searchOpen && (
            <div className="search-row">
              <SearchIcon />
              <input
                autoFocus
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={language.search}
                aria-label={language.search}
              />
            </div>
          )}

          <nav className="menu-navigation" aria-label="Menu navigation">
            <div className="section-tabs">
              <button className="menu-tab menu-tab-brand" type="button" onClick={() => {
                setActiveSection("Drinks");
                scrollToCategory("Hot Drinks");
              }}>
                {language.allMenu}
              </button>
              <button
                className={`menu-tab menu-tab-section${activeSection === "Drinks" ? " selected" : ""}`}
                type="button"
                onClick={() => {
                  setActiveSection("Drinks");
                  scrollToCategory("Hot Drinks");
                }}
              >
                {language.drinks}
              </button>
              <button
                className={`menu-tab menu-tab-section${activeSection === "Food" ? " selected" : ""}`}
                type="button"
                onClick={() => {
                  setActiveSection("Food");
                  scrollToCategory("Crep");
                }}
              >
                {language.bakery}
              </button>
            </div>
            <div className="category-tabs">
              {categories.map(({ name: category }) => (
                <button
                  className={`category-tab${activeCategory === category ? " active" : ""}`}
                  key={category}
                  type="button"
                  onClick={() => scrollToCategory(category)}
                >
                  {language.menu[category]}
                </button>
              ))}
            </div>
          </nav>
        </div>

        <div className="menu-content">
          {categories.map(({ name, images, items }) => {
            const visibleItems = items.filter(([itemName]) =>
              itemName.toLowerCase().includes(search.toLowerCase()),
            );

            return (
              <section
                className="menu-section"
                data-menu-section={name}
                id={categoryId(name)}
                key={name}
                aria-labelledby={`${categoryId(name)}-title`}
              >
                <h1 id={`${categoryId(name)}-title`}>{language.menu[name]}</h1>
                <div className="menu-grid">
                  {visibleItems.map(([itemName, price], index) => (
                    <article className="menu-card" key={itemName}>
                      <img
                        className="menu-image"
                        src={images[index % images.length]}
                        alt={`${itemName} - ${name}`}
                      />
                      <h2>{itemName}</h2>
                      <p>{price} <span>IQD</span></p>
                    </article>
                  ))}
                </div>
                {visibleItems.length === 0 && <p className="empty-state">{language.noItems}</p>}
              </section>
            );
          })}
        </div>
        <button className="feedback-button" type="button" onClick={() => setFeedbackOpen(true)}>
          <span aria-hidden="true">▢</span> {language.feedback}
        </button>
        {feedbackOpen && (
          <div className="feedback-backdrop" role="presentation" onClick={() => setFeedbackOpen(false)}>
            <form className="feedback-panel" onSubmit={(event) => { event.preventDefault(); setFeedbackOpen(false); }} onClick={(event) => event.stopPropagation()}>
              <button className="feedback-close" type="button" onClick={() => setFeedbackOpen(false)} aria-label="Close feedback">×</button>
              <h2>{language.feedbackTitle}</h2>
              <p>{language.feedbackDescription}</p>
              <textarea placeholder={language.feedbackPlaceholder} aria-label={language.feedbackPlaceholder} />
              <button className="feedback-submit" type="submit">{language.sendFeedback}</button>
            </form>
          </div>
        )}
      </main>
    );
  }

  function categoryId(name) {
    return `menu-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  }

  return (
    <>
      <main className="page-shell">
        <video
          className="landing-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/landing-background.mp4" type="video/mp4" />
        </video>
        <div className="landing-video-wash" aria-hidden="true" />
        <section className="language-screen" aria-labelledby="page-title">
          <div className="brand-lockup" aria-label="Baran Coffee">
            <img className="brand-mark" src="/baran-coffee-logo.jpg" alt="" aria-hidden="true" />
            <div>
              <h1 id="page-title">Baran Coffee</h1>
              <p>{language.brandType}</p>
            </div>
          </div>

          <div
            className="language-panel"
            role="navigation"
            aria-label="Choose a language"
          >
            {languages.map(({ key, label, icon: Icon, wide }) => (
              <button
                className={`language-button${wide ? " language-button-wide" : ""}`}
                key={key}
                type="button"
                onClick={() => {
                  setSelectedLanguage(key);
                  setActiveCategory("Hot Drinks");
                  setSearch("");
                }}
              >
                <span>{label}</span>
                <span className="button-icon">
                  <Icon />
                </span>
              </button>
            ))}
          </div>

          <p className="credit">{language.tagline}</p>
        </section>
      </main>

      {selectedLanguage && (
        <div className="toast visible" role="status" aria-live="polite">
          {selectedLanguage} menu coming soon
        </div>
      )}
    </>
  );
}

function BackIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>;
}

function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7.5" /><path d="m17 17 5 5" /></svg>;
}
