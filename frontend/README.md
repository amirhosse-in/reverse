# My React Frontend Project

Welcome to my React frontend
This project is a copy of crackmes website to react.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Installation

1. Clone the repository:

    ```bash
   git clone https://github.com/amirhosse-in/reverse.git
   cd frontend
   npm i
    ```

### Running the Application

```bash
    npm start

```

## structure

We used React for the frontend section of the project, which helps us use components and avoid loading many sections repetitively.

We have a folder named "components" where we place all our components.


## index.js


 ```
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Header from "./components/header";
import Footer from "./components/footer";
import reportWebVitals from './reportWebVitals';
<script src="https://cdn.tailwindcss.com"></script>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

 ``` 
 Yes, in that case, the main frame of your project will be placed in a section of code inside the app. App usually serves as the main frame for displaying the content of your website or application. Inside App, you display your main and dynamic content, and use header and footer to display static and repetitive components.

Therefore, App is essentially a main component that loads all other components and pages within it and applies the main settings of the program.

## app.js

 ```
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/home";
import NotFound from "./components/NotFound";
import Faq from "./components/faq";
import Login from "./components/login";
import Rank from "./components/newRank";
import NewSerach from "./components/newSearch";
import Register from "./components/register";
import Profile from "./components/profile";
import Upload from "./components/upload";
import RankItem from "./components/rankItem";
import Chats from "./components/chats";
import Chat from "./components/chat";

function App() {
    return(
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/search" element={<NewSerach/>} />
            <Route path="/rank" element={<Rank />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/crack/*" element={<RankItem />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/chat/*" element={<Chat />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </Router>
        );
}
export default App;
  ```

  Yes, in React, you can specify the content of each page using the URL and connect each page to a component. This is typically done using React Router, which allows you to manage routing and display different content based on the URL.

Each URL in React Router can contain different parameters that are used to determine the exact content of the desired page. For example, if your URL includes /:pageName, pageName can be the name of the specific page that will be passed to the corresponding component.

Additionally, using * at the end of a URL means anything and serves as a wildcard. This allows you to apply a specific strategy for displaying the appropriate page for URLs that do not match a specific pattern.
