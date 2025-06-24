# Artistly – Talent Onboarding Platform 🎤🎨

Artistly is a Next.js 14 (App Router) application that allows managers to onboard and manage artists. It supports artist registration with validated forms, listing with filters, and a simple dashboard for submissions.


## 🧠 Features

- 🎯 Artist Onboarding form with:
  - Full Name, Bio, Category (multi-select)
  - Languages Spoken (multi-select)
  - Fee Range (select)
  - Location, optional image
- ✅ Form validation using **React Hook Form + Yup**
- 🔍 Filterable artist listing
- 📊 Manager Dashboard with static submission data
- 🍃 Fully mobile responsive
- 🌐 SEO-ready with metadata
- ⚛️ Built using Next.js App Router + Tailwind CSS
- ☑️ Reusable components across pages

---

## 🗂️ Folder Structure

```bash
my-app/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── artists/page.jsx
│   ├── dashboard/page.jsx
│   └── onboard/page.jsx
│
├── components/
│   ├── Header, Footer, ArtistCard, FormDropDown
│   └── ui/
│
├── data/
│   └── artists.json
│
├── lib/
│   ├── utils.js
│   └── validations/
│       └── artistSchema.jsx
│
├── public/
│   └── favicon.ico
├── styles/
│   └── globals.css
├── README.md
```

## ✅ Tech Stack

- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- Forms: React Hook Form
- Validation: Yup
- UI/UX: Accessible components (Select, Table, etc.)
- Hosting: Vercel

---

## 📌 Notes
- No backend – form data is printed to console / mock API.
- SEO metadata added in app/layout.js.
- Basic responsiveness tested across major breakpoints.
- Codebase includes comments and function headers where relevant.

## 👨‍💻Author
Made with ❤️ by Vikhyat Gupta