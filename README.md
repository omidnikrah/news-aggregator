# 📰 News Aggregator

## 🚀 Overview
This project is a **news aggregator application** built with **React and TypeScript**, allowing users to fetch and filter news from multiple sources (e.g., NewsAPI, The Guardian, and The New York Times).

### ✅ Key Features
- Fetches news from multiple APIs.
- Users can **filter by category, source, date, and author**.
- Implements **React Query for data fetching**.
- **Uses adapters** to unify API responses.
- **Fully Dockerized** for easy deployment.

---

## 🛠 Tech Stack
| Technology             | Purpose                               |
|------------------------|---------------------------------------|
| **React + TypeScript** | Frontend framework with static typing |
| **Vite**               | Fast development and build tool       |
| **Zustand**            | Global state management               |
| **React Query**        | Efficient API caching and fetching    |
| **Axios**              | API requests                          |
| **Docker**             | Containerization                      |
| **Coolify**            | Deployments                           |


---

## 🔥 Why I Used Certain Patterns

This section explains some **design choices** in the project.

### **1️⃣ Adapters for News Sources**

Each news API **returns different response structures**, so we need a **consistent format** before displaying the data.

#### ✅ Problem

- `NewsAPI`, `The Guardian`, and `NYT` return **different JSON structures**.
- We need to **unify the data** into a **standard format** for the UI.

#### 🚀 Solution: Adapters

Each API has its own **adapter** that transforms the response.

**Example:** `**newsAdapter.ts**`

```
export const newsApiAdapter = (data: NewsApiResponse): Article[] =>
  data.articles.map(article =>
    formatArticle({
      title: article.title,
      description: article.description,
      url: article.url,
      imageUrl: article.urlToImage,
      publishedAt: article.publishedAt,
      source: article.source.name,
      author: article.author,
      category: article.category,
    }),
  );

```

✅ **Makes data consistent**.

✅ **Decouples UI from API response structure**.

✅ **Easier to swap APIs in the future**.

<br />

### **2️⃣ Category Mapper**

Each API uses **different category names**, so we need to **map them** to a common format.

#### 🚀 Solution: `categoryMapper.ts`

```
export const CATEGORY_MAPPING: Record<string, { newsapi?: string; guardian?: string; nyt?: string }> = {
  business: { newsapi: "business", guardian: "business", nyt: "Business" },
  sports: { newsapi: "sports", guardian: "sport", nyt: "Sports" },
  technology: { newsapi: "technology", guardian: "technology", nyt: "Technology" },
};
```

✅ **Abstracts API differences** so the UI stays clean.

✅ **Easier to expand** when adding more APIs.

<br />

### **3️⃣ Filters Store (Zustand)**

Users can **filter news** by:

- **Search query**
- **Categories**
- **Authors**
- **Date range**
- **News sources**

Instead of keeping state inside components, I **centralized it using Zustand**.

#### 🚀 Solution: `useFiltersStore.ts`

```
export const useFiltersStore = create<FiltersState>(set => ({
  filters: {
    query: "",
    categories: [],
    sources: [],
    authors: [],
    fromDate: undefined,
    toDate: undefined,
  },
  setFilter: (field, value) => set(state => ({
    filters: { ...state.filters, [field]: value },
  })),
}));
```

✅ **Global state management** (easy to share filters across components).

✅ **No prop drilling** needed.

✅ **Persists user preferences** (can restore last-used filters).


## 🐳 Docker Instructions

This project is **Dockerized** for easy deployment.

### **1️⃣ Build the Image**

```
docker build -t news-aggregator --target=dev .
```

### **2️⃣ Run the Container**

#### **Development Mode (Hot Reloading &** `**.env**`**)**

```
docker run -p 5173:5173 --env-file .env -v $(pwd):/app -v /app/node_modules --rm news-aggregator
```

#### **Production Mode**

```
docker run -p 80:80 --env-file .env.local --rm news-aggregator
```

### **3️⃣ Access the App**

- **Development:** http://localhost:5173
- **Production:** http://localhost
