# 🌱 **Growth Engineer Internship** Interview at **Filum.ai**

Hi, my fullname is Le Minh Quang. This is the source code for my interview test. There are two websites:

- **Frontend web:** [filum-fe-interview](https://filum-fe-interview.vercel.app)
- **Backend web:** [filum-be-interview](https://filum-be-interview.vercel.app)

## 🛠️ **Setup and Run Frontend Source**

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Quindarts/filum-fe-interview
    ```
2. **Navigate to the source folder**:
    ```bash
    cd filum-fe-interview
    ```
3. **Install dependencies**:
    ```bash
    npm i
    ```
4. **Run the source**:
    ```bash
    npm run dev
    ```
   The app will run on: [http://localhost:5173](http://localhost:5173)

> **Note**: You also need to run the [Backend source](https://github.com/Quindarts/filum-be-interview) for full functionality.

---

## ✨ **Key Features & UI Overview**

1. **Survey Level Display**: The UI mimics the test design, showcasing survey levels using a **gauge chart**.
2. **Facebook Sharing**: Automatically shares the survey result link on Facebook.
3. **Gmail Integration**: Automatically sends survey results to your Gmail (please check the spam folder).
4. **Link Copying**: The survey result link is automatically copied to the clipboard.

---

## 📋 **Test Requirements**

- **Response Calculation**: The assessment responses should be correctly calculated using the score of the question options and the level ranges provided in `assessment.json`.
- **UI Design**: The layout is the main requirement. Other styles (colors, images, font sizes) can be omitted to save time.
- **Gauge Chart**: This is a nice-to-have feature.
- **Facebook Sharing**: The Facebook post must include the correct image based on the maturity level.

---

## 🧠 **What I Learned**

- Gained a deep understanding of how to integrate **Gmail API** and **Facebook API** to share links.
- Improved my knowledge of **CSR (Client-Side Rendering)** and **SSR (Server-Side Rendering)**.

---

## 🚀 **Deployment & Tech Stack**

- **Deployment**: Deployed on **Vercel**.
- **Build Tool**: **Vite**.
- **Tech Stack**:
  - **Frontend**: TypeScript, MUI, ReactJS, Zustand, Axios.
  - **Backend**: Node.js version 22.x.
