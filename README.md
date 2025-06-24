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
