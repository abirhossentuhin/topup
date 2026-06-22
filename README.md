# BD TopUp – Complete Setup Guide

## 📁 ফাইল তালিকা
```
index.html          → Home Page
service.html        → Package List
payment.html        → Payment Page
success.html        → Order Success
orders.html         → My Orders
admin.html          → Admin Panel ← সব control এখানে
firebase-config.js  → Firebase Config ← এটা আপনাকে পূরণ করতে হবে
vercel.json         → Vercel Hosting Config
```

---

## ✅ STEP 1: Firebase Setup (৫ মিনিট)

1. **https://console.firebase.google.com** → "Add project" → নাম দিন
2. **Realtime Database** → "Create database" → "Start in test mode"
3. Rules tab → নিচের rules দিন → Publish:
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
4. **Project Settings** (⚙️ icon) → "Your apps" → Web (</>)  
   → App দিন → config copy করুন

---

## ✅ STEP 2: firebase-config.js আপডেট করুন

`firebase-config.js` খুলুন, Firebase console থেকে পাওয়া values দিন:

```js
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSy...",
  authDomain:        "your-project.firebaseapp.com",
  databaseURL:       "https://your-project-default-rtdb.firebaseio.com",
  projectId:         "your-project",
  storageBucket:     "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123:web:abc"
};
```

এছাড়া `SITE` object-এ default values দিন।

---

## ✅ STEP 3: GitHub এ Upload করুন

### GitHub এ নতুন Repository তৈরি:
1. **https://github.com** → "New repository"
2. Repository name: `bdtopup` (বা যেকোনো নাম)
3. Public রাখুন → "Create repository"

### ফাইল Upload করুন:
1. "uploading an existing file" click করুন
2. **এই সব ফাইল** drag করে দিন:
   - `index.html`
   - `service.html`
   - `payment.html`
   - `success.html`
   - `orders.html`
   - `admin.html`
   - `firebase-config.js`
   - `vercel.json`
3. "Commit changes" click করুন

---

## ✅ STEP 4: Vercel এ Free Host করুন

1. **https://vercel.com** → "Sign up" (GitHub দিয়ে Login করুন)
2. "New Project" → আপনার `bdtopup` repository select করুন
3. "Deploy" click করুন
4. ৩০ সেকেন্ডে live! URL পাবেন: `bdtopup.vercel.app`

---

## 🔐 Admin Panel

- URL: `yourdomain.vercel.app/admin.html`
- Default password: `admin1234`
- **প্রথম login এর পরই Settings → Password change করুন!**

---

## 🎛️ Admin Panel এ যা যা করা যায়

| Feature | কি করা যায় |
|---------|------------|
| **Dashboard** | মোট order, revenue, pending দেখুন |
| **Orders** | Approve / Reject করুন |
| **Packages** | দাম, নাম, HOT badge, Stock Out control |
| **Banners** | Homepage slider এ banner যোগ/edit/মুছুন |
| **Posts** | Notice, offer, announcement post করুন |
| **Settings** | bKash/Nagad নম্বর, Telegram link, Notice bar, Password |

---

## 🖼️ ছবি কিভাবে দেবেন (Free)

Banner বা Post এ ছবি দিতে:
1. **https://imgbb.com** তে ছবি upload করুন (Free)
2. "Direct link" copy করুন
3. Admin Panel → Banners/Posts → Image URL তে paste করুন

---

## 🔄 Customer Flow
```
Home → Service click → Package select → Payment → TrxID submit → Success
```

## 👨‍💼 Admin Flow
```
Order আসলে → admin.html → Orders tab → TrxID verify → Approve
```
