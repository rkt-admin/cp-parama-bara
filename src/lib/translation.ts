type En = {
  "homepage.title": string;
  "homepage.welcome": string;
  "homepage.time": string;
  "menu.home": string;
  "menu.services": string;
  "menu.contact-us": string;
  "menu.blog": string;
  "menu.login": string;
  "login.title.sub": string;
  "login.form.button.login": string;
  "login.link.forgot-password": string;
  "hero.title": string;
  "hero.title2": string;
  "section.what-we-do": string;
  "hero.sub-title": string;
  "hero.button-action": string;
  "cta.button-action": string;
}

type Id = {
  "homepage.title": string;
  "homepage.welcome": string;
  "homepage.time": string;
  "menu.home": string;
  "menu.services": string;
  "menu.contact-us": string;
  "menu.blog": string;
  "menu.login": string;
  "login.title.sub": string;
  "login.form.button.login": string;
  "login.link.forgot-password": string;
  "hero.title": string;
  "hero.title2": string;
  "section.what-we-do": string;
  "hero.sub-title": string;
  "hero.button-action": string;
  "cta.button-action": string;
}

type Translation = {
  en: En;
  id: Id;
}

const translation: Translation = {
  "id": {
    "homepage.title": "Rakit.id",
    "homepage.welcome": "Hola, <strong>{{name}}</strong>",
    "homepage.time": "La hora actual es: {{time}}",
    "menu.home": "Beranda",
    "menu.services": "Layanan",
    "menu.contact-us": "Kontak",
    "menu.blog": "Blog",
    "menu.login": "Masuk",
    "login.title.sub": "Masukkan email dan password Anda untuk Masuk atau Daftar.",
    "login.form.button.login": "Masuk",
    "login.link.forgot-password": "Lupa Password?",
    "hero.title": "WEB . MOBILE . SOLUTION",
    "hero.title2": "CRAFTING",
    "section.what-we-do": "WHAT WE DO",
    "hero.sub-title": "Kami adalah digital creator dari nusantara, yang mempunyai passion pada teknologi dan inovasi digital. Kami siap membantu Anda berevolusi melalui teknologi digital terkini",
    // "hero.sub-title": "Pelajari Lebih Lanjut untuk mengetahui lebih detail mengapa kami berbeda dari yang lainnya.",
    "hero.button-action": "Lebih Lanjut",
    "cta.button-action": "Hubungi kami di WA"
  },
  "en": {
    "homepage.title": "Hello, World!",
    "homepage.welcome": "Hi <strong>{{name}}</strong>, how are you?",
    "homepage.time": "The current time is: {{time}}",
    "menu.home": "Home",
    "menu.services": "Services",
    "menu.contact-us": "Contact us",
    "menu.blog": "Blog",
    "menu.login": "Login",
    "login.title.sub": "Enter your account to sign In or sign Up.",
    "login.form.button.login": "Sign in",
    "login.link.forgot-password": "Forgot Password?",
    "hero.title": "WEB . MOBILE . SOLUTION",
    "hero.title2": "CRAFTING",
    "section.what-we-do": "APA YANG KAMI LAKUKAN",
    "hero.sub-title": "We are digital creators from the nusantara (Indonesia), who have a passion for technology and digital innovation. We are ready to assist your evolution journey through the latest and proven digital technology",
    // "hero.sub-title": "Please \"Get Started\" to find out in more detail why our solutions are different from the others.",
    "hero.button-action": "HOW WE DO IT",
    "cta.button-action": "WHATSAPP"
  }
};

export default translation
