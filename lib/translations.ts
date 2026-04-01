export type Language = "ru" | "en"

export const translations = {
  ru: {
    nav: {
      about: "О компании",
      products: "Продукция",
      partners: "Партнеры",
      contact: "Контакты",
      contactBtn: "Связаться",
    },
    hero: {
      title: "Поставки надежного",
      titleHighlight: "железнодорожного литья",
      description:
        "Комплектующие для грузовых вагонов напрямую от производителей. Гарантия качества и оперативная доставка по Казахстану и СНГ.",
      catalogBtn: "Смотреть каталог",
      learnMoreBtn: "Узнать больше",
    },

   about: {
  label: "О компании",
  title: "Ваш надежный партнер в сфере ЖД комплектующих",
  description: [
    "Мы обеспечиваем бесперебойную работу вагонного парка, поставляя сертифицированное литье и детали ходовых частей. Каждое изделие проходит строгий технический контроль.",
    "В наш опыт входит успешное выполнение работ по деповскому ремонту грузовых вагонов собственности АО «KTZ Express».",
    "Также обеспечиваем бесперебойную поставку запасных частей для ЖД вагонов в 2025 году на текущий отцепочный ремонт (ТОР) вагонов собственности АО «НК КТЖ»."
  ],

  feature1: "Сертифицированная продукция (РУ-1Ш, СОНК)",
  feature2: "Собственная логистика и склады в регионах",
  feature3: "Прямые контракты с заводами-изготовителями",
  stats: {
    years: "Лет опыта",
    clients: "Клиентов",
    parts: "Деталей отгружено",
    support: "Поддержка",
  },
},
    products: {
      title: "Каталог продукции",
      requestBtn: "Запросить КП",
      items: [
        {
          title: "Рама боковая",
          description: "Крупное литье для грузовых тележек модели 18-100 и аналогов.",
        },
        {
          title: "Балка надрессорная",
          description: "Несущий элемент тележки грузового вагона с высокой износостойкостью.",
        },
        {
          title: "Колесная пара РУ-1Ш",
          description: "Новое формирование, сертифицировано для эксплуатации на всех путях.",
        },
        {
          title: "Колесная пара СОНК",
          description: "Оптимальное решение цена/качество (Старая ось — новое колесо).",
        },
      ],
    },
    partners: {
      title: "Нам доверяют лидеры отрасли",
    },
    contact: {
      title: "Готовы к сотрудничеству?",
      description:
        "Оставьте ваши данные, и наш специалист свяжется с вами в течение рабочего часа для подготовки индивидуального предложения.",
      address: "Республика Казахстан, город Астана, пр. Республики, здание 42 ",
      form: {
        name: "Ваше имя",
        namePlaceholder: "Александр",
        phone: "Телефон",
        phonePlaceholder: "+7 (___) ___-__-__",
        interest: "Что вас интересует?",
        options: ["Комплектующие для тележек", "Колесные пары", "Литье по чертежам", "Другое"],
        message: "Сообщение",
        messagePlaceholder: "Укажите количество и модель...",
        submitBtn: "Отправить запрос",
        success: "Заявка успешно отправлена!",
        successDescription: "Мы свяжемся с вами в ближайшее время.",
      },
    },
    footer: {
      description: "Профессиональные решения в области поставок железнодорожного оборудования.",
      company: "Компания",
      catalog: "Каталог",
      contactLink: "Связь",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
    },
  },
  en: {
    nav: {
      about: "About",
      products: "Products",
      partners: "Partners",
      contact: "Contact",
      contactBtn: "Contact Us",
    },
    hero: {
      title: "Reliable supply of",
      titleHighlight: "railway castings",
      description:
        "Components for freight cars directly from manufacturers. Quality guarantee and prompt delivery across Kazakhstan and CIS.",
      catalogBtn: "View Catalog",
      learnMoreBtn: "Learn More",
    },
    about: {
      label: "About Us",
      title: "Your reliable partner in railway components",
      description:
        "We ensure uninterrupted operation of the rolling stock by supplying certified castings and running gear parts. Each product undergoes strict quality control.",
      feature1: "Certified products (RU-1Sh, SONK)",
      feature2: "Own logistics and regional warehouses",
      feature3: "Direct contracts with manufacturers",
      stats: {
        years: "Years of experience",
        clients: "Clients",
        parts: "Parts shipped",
        support: "Support",
      },
    },
    products: {
      title: "Product Catalog",
      requestBtn: "Request Quote",
      items: [
        {
          title: "Side Frame",
          description: "Large castings for freight bogies model 18-100 and analogues.",
        },
        {
          title: "Bolster",
          description: "Load-bearing element of the freight car bogie with high wear resistance.",
        },
        {
          title: "Wheelset RU-1Sh",
          description: "New formation, certified for operation on all tracks.",
        },
        {
          title: "Wheelset SONK",
          description: "Optimal price/quality solution (Old axle — new wheel).",
        },
      ],
    },
    partners: {
      title: "Trusted by industry leaders",
    },
    contact: {
      title: "Ready to cooperate?",
      description:
        "Leave your details and our specialist will contact you within a working hour to prepare an individual offer.",
      address: "42 Respublika Avenue, Astana, 010000, Kazakhstan.",
      form: {
        name: "Your name",
        namePlaceholder: "John",
        phone: "Phone",
        phonePlaceholder: "+7 (___) ___-__-__",
        interest: "What are you interested in?",
        options: ["Bogie components", "Wheelsets", "Custom castings", "Other"],
        message: "Message",
        messagePlaceholder: "Specify quantity and model...",
        submitBtn: "Submit Request",
        success: "Request sent successfully!",
        successDescription: "We will contact you shortly.",
      },
    },
    footer: {
      description: "Professional solutions in railway equipment supply.",
      company: "Company",
      catalog: "Catalog",
      contactLink: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
    },
  },
}
