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
    items: [
      ["Espresso", "3,000", "/menu/hot-espresso.jpg"],
      ["Double Espresso", "4,000", "/menu/hot-double-espresso.jpg"],
      ["Latte", "4,000", "/menu/hot-latte.jpg"],
      ["Caramel Latte", "4,500", "/menu/hot-caramel-latte.jpg"],
      ["Vanilla Latte", "4,500", "/menu/hot-vanilla-latte.jpg"],
      ["Mocha", "4,500", "/menu/hot-mocha.jpg"],
      ["Spanish Latte", "4,500", "/menu/hot-spanish-latte.jpg"],
      ["Cappuccino", "4,000", "/menu/hot-cappuccino.jpg"],
      ["Americano", "3,500", "/menu/hot-americano.jpg"],
      ["Hot Chocolate", "4,000", "/menu/hot-chocolate.jpg"],
      ["Turkish Coffee", "2,000", "/menu/hot-turkish-coffee.jpg"],
      ["Arabic Coffee", "2,000", "/menu/hot-arabic-coffee.jpg"],
      ["Chocolate Coffee", "2,000", "/menu/hot-chocolate-coffee.jpg"],
      ["Qazwan", "2,000", "/menu/hot-qazwan-coffee.jpg"],
      ["Hazelnut Coffee", "2,000", "/menu/hot-hazelnut-coffee.jpg"],
      ["Cappuccino Powder", "2,000", "/menu/hot-cappuccino-powder.jpg"],
      ["Nescafe", "1,000", "/menu/hot-nescafe.jpg"],
      ["Tea", "500", "/menu/hot-tea.jpg"],
      ["Double Tea", "1,000", "/menu/hot-tea.jpg"],
    ],
  },
  {
    name: "Cold Drinks",
    items: [
      ["Iced Latte", "4,500", "/menu/cold-iced-latte.jpg"],
      ["Iced Caramel Latte", "5,000", "/menu/cold-iced-caramel-latte.jpg"],
      ["Iced Vanilla Latte", "5,000", "/menu/cold-iced-vanilla-latte.jpg"],
      ["Iced Coffee", "4,000", "/menu/cold-iced-coffee.jpg"],
      ["Iced Coffee Caramel", "4,500", "/menu/cold-iced-coffee-caramel.jpg"],
      ["Iced Coffee Vanilla", "4,500", "/menu/cold-iced-coffee-vanilla.jpg"],
      ["Iced Spanish Latte", "4,500", "/menu/cold-iced-spanish-latte.jpg"],
      ["Iced Mocha", "4,500", "/menu/cold-iced-mocha.jpg"],
      ["Iced Americano", "5,000", "/menu/cold-iced-americano.jpg"],
    ],
  },
  {
    name: "Shakes",
    items: [
      ["Nutella Shake", "4,000", "/menu/shake-nutella.jpg"],
      ["Chocolate Shake", "3,500", "/menu/shake-chocolate.jpg"],
      ["Kinder Shake", "5,000", "/menu/shake-kinder.jpg"],
      ["Oreo Shake", "4,000", "/menu/shake-oreo.jpg"],
      ["Strawberry Shake", "4,000", "/menu/shake-strawberry.jpg"],
      ["Nutella Banana Milkshake", "5,000", "/menu/shake-nutella-banana.jpg"],
      ["Strawberry Banana Milkshake", "5,000", "/menu/shake-strawberry-banana.jpg"],
    ],
  },
  {
    name: "Mojito",
    items: [
      ["Classic Mojito", "4,000", "/menu/mojito-classic.jpg"],
      ["Strawberry Mojito", "4,000", "/menu/mojito-strawberry.jpg"],
      ["Blueberry Mojito", "4,000", "/menu/mojito-blueberry.jpg"],
      ["Lemon and Mint", "3,500", "/menu/mojito-lemon-mint.jpg"],
    ],
  },
  {
    name: "Crep",
    items: [
      ["Crep Nutella", "5,000", "/menu/crep-nutella.jpg"],
      ["Crep Fruits", "6,000", "/menu/crep-fruits.jpg"],
      ["Crep Pistachio", "6,000", "/menu/crep-pistachio.jpg"],
      ["Crep Kinder", "6,000", "/menu/crep-kinder.jpg"],
    ],
  },
  {
    name: "Juice",
    items: [
      ["Orange Juice", "—", "/menu/juice-orange.jpg"],
      ["Pomegranate Juice", "—", "/menu/juice-pomegranate.jpg"],
      ["Milk and Banana", "—", "/menu/juice-banana.jpg"],
      ["Melon Juice", "—", "/menu/juice-melon.jpg"],
      ["Cocktail", "—", "/menu/juice-cocktail.jpg"],
    ],
  },
];

const translations = {
  en: {
    pageTitle: "Baran Coffee | Menu",
    brandType: "C O F F E E  ·  C A F E",
    tagline: "A SIMPLE MENU FOR YOUR DAILY RITUAL",
    allMenu: "ALL MENU",
    drinks: "DRINKS",
    bakery: "FOOD",
    search: "Search menu...",
    feedback: "Feedback",
    feedbackTitle: "How was your visit?",
    feedbackDescription: "Tell us what would make your next coffee better.",
    feedbackPlaceholder: "Your feedback or suggestions...",
    sendFeedback: "Send feedback",
    closeFeedback: "Close feedback",
    feedbackSuccess: "Thank you! Your feedback has been received.",
    feedbackSending: "Sending...",
    noItems: "No menu items found.",
    back: "Go back",
    openSearch: "Open search",
    currency: "IQD",
    photoComingSoon: "Photo coming soon",
    menu: {
      "Hot Drinks": "Hot Drinks",
      "Cold Drinks": "Cold Drinks",
      Shakes: "Shakes",
      Mojito: "Mojito",
      Crep: "Crepes",
      Juice: "Fresh Juices",
    },
  },
  ar: {
    pageTitle: "باران كافيه | القائمة",
    brandType: "قـهـوة  ·  كـافـيـه",
    tagline: "قائمة مميزة لطقوس قهوتك اليومية",
    allMenu: "القائمة الكاملة",
    drinks: "المشروبات",
    bakery: "الحلويات والمأكولات",
    search: "ابحث في القائمة...",
    feedback: "رأيك يهمنا",
    feedbackTitle: "كيف كانت تجربتك اليوم؟",
    feedbackDescription: "شاركنا ملاحظاتك أو اقتراحاتك لنقدم لك أفضل تجربة قهوة دائماً.",
    feedbackPlaceholder: "اكتب رأيك أو مقترحاتك هنا...",
    sendFeedback: "إرسال الملاحظات",
    closeFeedback: "إغلاق",
    feedbackSuccess: "شكراً لك! تم استلام ملاحظاتك بنجاح.",
    feedbackSending: "جارٍ الإرسال...",
    noItems: "لم يتم العثور على أي صنف مطابق للبحث.",
    back: "رجوع",
    openSearch: "فتح البحث",
    currency: "د.ع",
    photoComingSoon: "الصورة قريباً",
    menu: {
      "Hot Drinks": "مشروبات ساخنة",
      "Cold Drinks": "مشروبات باردة",
      Shakes: "ميلك شيك",
      Mojito: "موهيتو",
      Crep: "كريب",
      Juice: "عصائر طبيعية",
    },
  },
  ku: {
    pageTitle: "باران کافێ | مێنوو",
    brandType: "قـاوە  ·  کـافـێ",
    tagline: "مێنویەکی تایبەت بۆ ساتەکانی قاوەی ڕۆژانەت",
    allMenu: "تەواوی مێنوو",
    drinks: "خواردنەوەکان",
    bakery: "شیرینی و خواردن",
    search: "گەڕان لە مێنوودا...",
    feedback: "ڕاو سەرنج",
    feedbackTitle: "سەردانەکەت چۆن بوو؟",
    feedbackDescription: "بۆچوون و پێشنیارەکانت گرنگن بۆ ئەوەی خزمەتگوزارییەکانمان باشتر بکەین.",
    feedbackPlaceholder: "ڕا و سەرنجەکانت لێرە بنووسە...",
    sendFeedback: "ناردنی بۆچوون",
    closeFeedback: "داخستن",
    feedbackSuccess: "زۆر سوپاس! سەرنج و بۆچوونەکەت بە سەرکەوتوویی گەیشت.",
    feedbackSending: "لە ناردندایە...",
    noItems: "هیچ بڕگەیەک لە مێنوودا نەدۆزرایەوە.",
    back: "گەڕانەوە",
    openSearch: "کردنەوەی گەڕان",
    currency: "د.ع",
    photoComingSoon: "وێنە بەم زووانە",
    menu: {
      "Hot Drinks": "خواردنەوە گەرمەکان",
      "Cold Drinks": "خواردنەوە ساردەکان",
      Shakes: "شەیکەکان",
      Mojito: "مۆهیتۆ",
      Crep: "کرێپ",
      Juice: "شەربەتی سروشتی",
    },
  },
};

const itemTranslations = {
  "Espresso": { ar: "إسبريسو", ku: "ئێسپرێسۆ" },
  "Double Espresso": { ar: "دبل إسبريسو", ku: "دەبڵ ئێسپرێسۆ" },
  "Latte": { ar: "لاتيه", ku: "لاتێ" },
  "Caramel Latte": { ar: "كراميل لاتيه", ku: "کارامێل لاتێ" },
  "Vanilla Latte": { ar: "فانيلا لاتيه", ku: "ڤانیلا لاتێ" },
  "Mocha": { ar: "موكا", ku: "مۆکا" },
  "Spanish Latte": { ar: "سبانش لاتيه", ku: "سپانیش لاتێ" },
  "Cappuccino": { ar: "كابتشينو", ku: "کاپوچینۆ" },
  "Americano": { ar: "أمريكانو", ku: "ئەمریکانۆ" },
  "Hot Chocolate": { ar: "شوكولاتة ساخنة", ku: "چۆکڵێتی گەرم" },
  "Turkish Coffee": { ar: "قهوة تركية", ku: "قاوەی تورکی" },
  "Arabic Coffee": { ar: "قهوة عربية", ku: "قاوەی عەرەبی" },
  "Chocolate Coffee": { ar: "قهوة بالشوكولاتة", ku: "قاوە بە چۆکڵێت" },
  "Qazwan": { ar: "قهوة قزوان (بطم)", ku: "قاوەی قەزوان" },
  "Hazelnut Coffee": { ar: "قهوة بالبندق", ku: "قاوەی بوندق" },
  "Cappuccino Powder": { ar: "كابتشينو بودرة", ku: "کاپوچینۆ پاودەر" },
  "Nescafe": { ar: "نسكافيه", ku: "نێسکافێ" },
  "Tea": { ar: "شاي", ku: "چای" },
  "Double Tea": { ar: "دبل شاي", ku: "دەبڵ چای" },
  "Iced Latte": { ar: "آيس لاتيه", ku: "ئایس لاتێ" },
  "Iced Caramel Latte": { ar: "آيس كراميل لاتيه", ku: "ئایس کارامێل لاتێ" },
  "Iced Vanilla Latte": { ar: "آيس فانيلا لاتيه", ku: "ئایس ڤانیلا لاتێ" },
  "Iced Coffee": { ar: "آيس كوفي", ku: "ئایس کۆفی" },
  "Iced Coffee Caramel": { ar: "آيس كوفي كراميل", ku: "ئایس کۆفی کارامێل" },
  "Iced Coffee Vanilla": { ar: "آيس كوفي فانيلا", ku: "ئایس کۆفی ڤانیلا" },
  "Iced Spanish Latte": { ar: "آيس سبانش لاتيه", ku: "ئایس سپانیش لاتێ" },
  "Iced Mocha": { ar: "آيس موكا", ku: "ئایس مۆکا" },
  "Iced Americano": { ar: "آيس أمريكانو", ku: "ئایس ئەمریکانۆ" },
  "Nutella Shake": { ar: "ميلك شيك نوتيلا", ku: "شەیکی نۆتێلا" },
  "Chocolate Shake": { ar: "ميلك شيك شوكولاتة", ku: "شەیکی چۆکڵێت" },
  "Kinder Shake": { ar: "ميلك شيك كيندر", ku: "شەیکی کیندەر" },
  "Oreo Shake": { ar: "ميلك شيك أوريو", ku: "شەیکی ئۆریۆ" },
  "Strawberry Shake": { ar: "ميلك شيك فراولة", ku: "شەیکی شلیک" },
  "Nutella Banana Milkshake": { ar: "ميلك شيك نوتيلا وموز", ku: "شەیکی نۆتێلا و مۆز" },
  "Strawberry Banana Milkshake": { ar: "ميلك شيك فراولة وموز", ku: "شەیکی شلیک و مۆز" },
  "Classic Mojito": { ar: "موهيتو كلاسيك", ku: "مۆهیتۆی کلاسیک" },
  "Strawberry Mojito": { ar: "موهيتو فراولة", ku: "مۆهیتۆی شلیک" },
  "Blueberry Mojito": { ar: "موهيتو توت أزرق", ku: "مۆهیتۆی بلوبێری" },
  "Lemon and Mint": { ar: "ليمون ونعناع", ku: "لیمۆ و نەعنا" },
  "Crep Nutella": { ar: "كريب نوتيلا", ku: "کرێپی نۆتێلا" },
  "Crep Fruits": { ar: "كريب فواكه", ku: "کرێپی میوە" },
  "Crep Pistachio": { ar: "كريب فستق (بستاشيو)", ku: "کرێپی فستق" },
  "Crep Kinder": { ar: "كريب كيندر", ku: "کرێپی کیندەر" },
  "Orange Juice": { ar: "عصير برتقال طازج", ku: "شەربەتی پرتەقاڵ" },
  "Pomegranate Juice": { ar: "عصير رمان طازج", ku: "شەربەتی هەنار" },
  "Milk and Banana": { ar: "حليب بالموز", ku: "شیر و مۆز" },
  "Melon Juice": { ar: "عصير بطيخ أصفر", ku: "شەربەتی کاڵەک" },
  "Cocktail": { ar: "كوكتيل فواكه طازجة", ku: "شەربەتی کۆکتێل" },
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
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackStatus, setFeedbackStatus] = useState("idle");
  const language = translations[selectedLanguage] ?? translations.en;
  const isRtl = selectedLanguage === "ar" || selectedLanguage === "ku";

  const closeFeedbackModal = () => {
    setFeedbackOpen(false);
    setFeedbackStatus("idle");
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    if (!feedbackText.trim() || feedbackStatus === "submitting") return;
    setFeedbackStatus("submitting");

    const payload = {
      feedback: feedbackText.trim(),
      language: selectedLanguage || "en",
      timestamp: new Date().toISOString(),
    };

    const googleUrl = "https://script.google.com/macros/s/AKfycbwlwceWM7hWTHtqX_Y0R_sfGKvTxYyXGtugtP3LS1mLBKJBKXHZYYyrvJmOe0nxXwuYkw/exec";

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // Fallback directly to Google Apps Script only if API route failed
        await fetch(googleUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
        });
      }

      setFeedbackStatus("success");
      setFeedbackText("");
      setTimeout(() => {
        setFeedbackOpen(false);
        setFeedbackStatus("idle");
      }, 2200);
    } catch {
      // Network fallback directly to Google Apps Script
      try {
        await fetch(googleUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
        });
        setFeedbackStatus("success");
        setFeedbackText("");
        setTimeout(() => {
          setFeedbackOpen(false);
          setFeedbackStatus("idle");
        }, 2200);
      } catch {
        setFeedbackStatus("idle");
      }
    }
  };

  useEffect(() => {
    document.documentElement.lang = selectedLanguage || "en";
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.title = language.pageTitle || "Baran Coffee | Menu";
  }, [selectedLanguage, isRtl, language.pageTitle]);

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
              <img className="menu-brand-logo" src="/baran-coffee-logo.png" alt="" aria-hidden="true" />
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
          {categories.map(({ name, items }) => {
            const query = search.trim().toLowerCase();
            const visibleItems = items.filter(([itemName]) => {
              if (!query) return true;
              const enName = itemName.toLowerCase();
              const arName = itemTranslations[itemName]?.ar?.toLowerCase() || "";
              const kuName = itemTranslations[itemName]?.ku?.toLowerCase() || "";
              return enName.includes(query) || arName.includes(query) || kuName.includes(query);
            });

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
                  {visibleItems.map(([itemName, price, image]) => {
                    const localizedName =
                      selectedLanguage && selectedLanguage !== "en" && itemTranslations[itemName]?.[selectedLanguage]
                        ? itemTranslations[itemName][selectedLanguage]
                        : itemName;

                    return (
                      <article className="menu-card" key={itemName}>
                        {image ? (
                          <img className="menu-image" src={image} alt={`${localizedName} - ${language.menu[name]}`} />
                        ) : (
                          <div className="menu-image-missing" role="img" aria-label={`${localizedName} photo not available`}>
                            {language.photoComingSoon}
                          </div>
                        )}
                        <h2>{localizedName}</h2>
                        {selectedLanguage && selectedLanguage !== "en" && (
                          <p className="menu-card-en">{itemName}</p>
                        )}
                        <p className="menu-card-price">
                          {price} {price !== "—" && <span>{language.currency}</span>}
                        </p>
                      </article>
                    );
                  })}
                </div>
                {visibleItems.length === 0 && <p className="empty-state">{language.noItems}</p>}
              </section>
            );
          })}
        </div>
        <button className="feedback-button" type="button" onClick={() => setFeedbackOpen(true)}>
          <ChatIcon />
          <span>{language.feedback}</span>
        </button>
        {feedbackOpen && (
          <div className="feedback-backdrop" role="presentation" onClick={closeFeedbackModal}>
            <form className="feedback-panel" onSubmit={handleFeedbackSubmit} onClick={(event) => event.stopPropagation()}>
              <button className="feedback-close" type="button" onClick={closeFeedbackModal} aria-label={language.closeFeedback}>
                <CloseIcon />
              </button>
              {feedbackStatus === "success" ? (
                <div className="feedback-success">
                  <div className="feedback-success-icon">
                    <CheckIcon />
                  </div>
                  <h2>{language.feedbackSuccess}</h2>
                </div>
              ) : (
                <>
                  <div className="feedback-header">
                    <div className="feedback-badge">
                      <ChatIcon />
                    </div>
                    <div>
                      <h2>{language.feedbackTitle}</h2>
                      <p>{language.feedbackDescription}</p>
                    </div>
                  </div>
                  <textarea
                    autoFocus
                    required
                    rows={4}
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder={language.feedbackPlaceholder}
                    aria-label={language.feedbackPlaceholder}
                    disabled={feedbackStatus === "submitting"}
                  />
                  <button
                    className="feedback-submit"
                    type="submit"
                    disabled={feedbackStatus === "submitting" || !feedbackText.trim()}
                  >
                    {feedbackStatus === "submitting" ? language.feedbackSending : language.sendFeedback}
                  </button>
                </>
              )}
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
            <img className="brand-mark" src="/baran-coffee-logo.png" alt="" aria-hidden="true" />
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

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
