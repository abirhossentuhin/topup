// ══════════════════════════════════════════════
//  firebase-config.js  –  BD TopUp
//  Firebase Console থেকে config copy করে এখানে দিন
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



// Default fallback (Admin panel থেকে override হবে)

const SITE = {
  name:            "BDTopUp",            // ← আপনার site এর নাম
  telegramSupport: "https://t.me/YourUsername",   // ← আপনার Telegram
  telegramGroup:   "https://t.me/YourGroupLink",
  bkashNumber:     "01890183516",         // ← আপনার bKash নম্বর
  nagadNumber:     "01890183516",         // ← আপনার Nagad নম্বর
  adminPassword:   "admin1234"    // ← Admin password (পরে change করুন!)
};


const FIREBASE_CONFIG = firebaseConfig;


