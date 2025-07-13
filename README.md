# 💱 CurrencyApp

## 📖 Overview
**CurrencyApp** — простий мобільний застосунок для перегляду актуальних курсів валют. Дозволяє зберігати улюблені валюти, переглядати їх поточний курс, а також працює в офлайн-режимі завдяки кешуванню даних.

---

## ⚙️ Technical Description

### 🛠 How to build and run
1. Встановити залежності:
```bash
yarn install
# або
npm install
```

2. Запустити Metro сервер:
```bash
yarn start
```

3. Запустити застосунок:
```bash
yarn android
# або
yarn ios
```

> ⚠️ Не забуть створити `.env` файл з API ключем:
```
FIXER_API_URL=https://api.apilayer.com/fixer/latest
FIXER_API_KEY=твій_ключ
FIXER_BASE_CURRENCY=EUR
```

---

## 🏛 App architecture and design choices

### Основні рішення:
- **Hooks-based architecture** — вся бізнес-логіка в custom hooks (наприклад, `useExchangeRates`).
- **Separation of concerns** — чіткий поділ на api, screens, components, utils тощо.
- **AsyncStorage** — для кешу курсів та збереження улюблених валют.
- **React Navigation** — для навігації між екранами.
- **TypeScript** — для чіткої типізації.

---

## 🗂 App structure and major components

```
/src
 ├── api/            // API запити (axios, fetchExchangeRates)
 ├── components/     // Компоненти (CurrencyItem, Header, інші)
 ├── models/         // TypeScript інтерфейси для типізації
 ├── navigation/     // Stack навігація
 ├── screens/        // Екрани (CurrencyScreen, FavoritesScreen)
 ├── storage/        // AsyncStorage утиліти (getData, storeData)
 ├── styles/         // Глобальні стилі, кольори
 └── utils/          // Робота з улюбленими валютами
```

### Основні компоненти:
- **CurrencyItem** — універсальний елемент валюти з відображенням курсу.
- **Header** — заголовок з кнопкою Назад / правою кнопкою.
- **useExchangeRates** — custom hook для отримання та кешування курсів валют.
- **AsyncStorage wrapper (storage)** — утиліти для збереження масиву улюблених валют та кешу курсів.

---

## 📴 Offline mode
Офлайн-режим реалізовано через:
- Збереження актуальних курсів та дати останнього оновлення в `AsyncStorage`.
- При відсутності мережі застосунок показує кешовані дані та дату їх отримання.
- Окреме повідомлення про те, що показані кешовані дані.

---

## 🧰 Additional features / libraries
- **Axios** — для API запитів.
- **React Navigation** — для навігації між екранами.
- **AsyncStorage** — для кешу даних.
- **TypeScript** — для безпечної типізації.
- **Prettier, ESLint** — для підтримки єдиного стилю коду.
- **Flash Messages** — Локальні нотифікації.

