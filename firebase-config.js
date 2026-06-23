// ══════════════════════════════════════════════
//  firebase-config.js  –  BD TopUp
// ══════════════════════════════════════════════

const firebaseConfig = {
  apiKey: "AIzaSyDrexGeyuuBWt-xPEO6Z059mPsF86L6Lgs",
  authDomain: "bdtopup-709cf.firebaseapp.com",
  databaseURL: "https://bdtopup-709cf-default-rtdb.firebaseio.com",
  projectId: "bdtopup-709cf",
  storageBucket: "bdtopup-709cf.firebasestorage.app",
  messagingSenderId: "963714157658",
  appId: "1:963714157658:web:5b3f6b21eace651b385c63",
  measurementId: "G-WST96VXB53"
};

// Default fallback values (Admin panel থেকে override হবে)
const SITE = {
  name:            "BDTopUp",
  telegramSupport: "https://t.me/YourUsername",
  telegramGroup:   "https://t.me/YourGroupLink",
  facebookPage:    "https://facebook.com/YourPage",
  whatsappNumber:  "01890183516",
  phoneSupport:    "01890183516",
  bkashNumber:     "01890183516",
  nagadNumber:     "01890183516",
  rocketNumber:    "01890183516",
  upayNumber:      "01890183516",
  adminPassword:   "admin1234",
  supportType:     "telegram",
  supportValue:    "https://t.me/YourUsername"
};

const FIREBASE_CONFIG = firebaseConfig;
