# Technical Test - PT EIGEN TRI MATHEMA

This repository contains the submission by **Mochamad Nurul Adzan** for the Frontend Engineer technical test at **PT EIGEN TRI MATHEMA**.

The repository is divided into two main parts:
1.  **News Portal App**: A complete React application.
2.  **Algorithm Test**: A folder containing solutions to algorithm challenges.

Please see the sections below for details on each part.

---
---

## 1. News Portal App

This is a news app built with React, TypeScript, and Ant Design. It shows how to use modern frontend tools to build a real application, including features like getting data from an API and managing the app's state.

### Key Features

* **Dynamic News Feed:** Shows top headlines from the NewsAPI.
* **Infinite Scroll:** Loads more articles automatically when you scroll down.
* **Article Details:** You can click any article to see a full detail page.
* **Secure Content:** Safely cleans HTML content from the API to prevent security problems.
* **Responsive Design:** Looks good on both desktop and mobile.

### Tech Stack & Tools

* **React & TypeScript:** Used to build the user interface with safe and predictable code.
* **Vite:** A very fast tool for running the development server and building the project.
* **Ant Design:** A library of high-quality components that makes building the UI much faster.
* **Axios & Repository Pattern:** API calls are managed in a special `repositories` folder. This keeps the code clean and separates the data logic from the UI components.
* **React Router:** Used for all page navigation.
* **DOMPurify:** Used to clean HTML from the API, which protects against XSS attacks.
* **`react-infinite-scroll-component`:** A simple library used to create the infinite scroll feature.

### How to Run the News App

1.  **Navigate to the app folder:**
    ```bash
    cd news
    ```

2.  **Install all packages:**
    ```bash
    npm install
    ```

3.  **Set up the `.env` file:**

    Create a new file named `.env` inside the news app folder. Add the following lines. You need to get a free API key from [newsapi.org](https://newsapi.org).

    ```env
    VITE_NEWS_API_KEY=your_personal_news_api_key_here
    VITE_NEWS_API_URL=[https://newsapi.org/v2](https://newsapi.org/v2)
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser to see the app.

---

## 2. Algorithm Test

This folder contains the solutions for the algorithm portion of the technical test.

### How to Run the Typescript File
1. **Install nodejs on your machine**


2. **Install ts-node globally through terminal**
    ```bash
    npm install -g ts-node
    ```


3. **Navigate to the algorithm folder**
    ```bash
    cd Algoritma
    ```
4. **Create tsconfig.json on the folder and add this line**
   ```json
   {
    "compilerOptions": {
      "target": "ES2022",
      "module": "NodeNext",
      "moduleResolution": "NodeNext",
      "esModuleInterop": true,
      "forceConsistentCasingInFileNames": true,
      "strict": true,
      "skipLibCheck": true
    }
   }
   ```

6. **Open the terminal on the folder and run the file**
   ```bash
    ts-node filename.ts
    ```
---
