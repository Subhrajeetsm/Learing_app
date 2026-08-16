import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import {
  SignIn,
  SignUp,
  UserButton,
  useAuth,
} from "@clerk/react";

import "./App.css";

/* =====================================================
   MAIN PAGES
===================================================== */

import CppPage from "./CppPage";
import JavaPage from "./JavaPage";
import SqlPage from "./SqlPage";
import PhpPage from "./PhpPage";
import PythonPage from "./PythonPage";

import Feedback from "./Feedback";
import About from "./About";

/* =====================================================
   PYTHON CONCEPT PAGES
===================================================== */

import PythonBasics from "./pyconcepts/PythonBasics";
import VariablesDataTypes from "./pyconcepts/VariablesDataTypes";
import Operators from "./pyconcepts/Operators";
import Conditions from "./pyconcepts/Conditions";
import Loops from "./pyconcepts/Loops";
import Functions from "./pyconcepts/Functions";
import ListsTuples from "./pyconcepts/ListsTuples";
import DictionariesSets from "./pyconcepts/DictionariesSets";
import OOP from "./pyconcepts/OOP";
import FileHandling from "./pyconcepts/FileHandling";

/* =====================================================
   PROTECTED ROUTE
===================================================== */

function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <div className="auth-loading">
        <div className="loading-spinner"></div>
        <span>Loading...</span>
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
}

/* =====================================================
   SIGN IN PAGE
===================================================== */

function SignInPage() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <div className="auth-loading">
        Loading...
      </div>
    );
  }

  if (isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="auth-page">

      <div className="auth-background"></div>

      <div className="auth-wrapper">

        <div className="auth-brand">

          <div className="auth-logo">
            <img
              src="/favicon.png"
              alt="Programming Learning Lab"
            />
          </div>

          <div>
            <strong>
              Programming Learning Lab
            </strong>

            <span>
              Interactive programming playground
            </span>
          </div>

        </div>

        <SignIn
          routing="path"
          path="/sign-in"
          signUpUrl="/sign-up"
          fallbackRedirectUrl="/"
        />

      </div>

    </div>
  );
}

/* =====================================================
   SIGN UP PAGE
===================================================== */

function SignUpPage() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <div className="auth-loading">
        Loading...
      </div>
    );
  }

  if (isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="auth-page">

      <div className="auth-background"></div>

      <div className="auth-wrapper">

        <div className="auth-brand">

          <div className="auth-logo">
            <img
              src="/favicon.png"
              alt="Programming Learning Lab"
            />
          </div>

          <div>
            <strong>
              Programming Learning Lab
            </strong>

            <span>
              Interactive programming playground
            </span>
          </div>

        </div>

        <SignUp
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
          fallbackRedirectUrl="/"
        />

      </div>

    </div>
  );
}

/* =====================================================
   LANGUAGE SELECTOR
===================================================== */

function LanguageSelector() {

  const languages = [

    {
      name: "C++",
      description: "C++ OOP & Inheritance",
      icon: "C++",
      path: "/cpp",
      className: "cpp-option",
    },

    {
      name: "Java",
      description: "Java OOP & Programming",
      icon: "☕",
      path: "/java",
      className: "java-option",
    },

    {
      name: "PHP",
      description: "Backend Web Development",
      icon: "🐘",
      path: "/php",
      className: "php-option",
    },

    {
      name: "Python",
      description: "Python Programming",
      icon: "🐍",
      path: "/python",
      className: "python-option",
    },

    {
      name: "SQL",
      description: "Database & SQL Queries",
      icon: "🗄️",
      path: "/sql",
      className: "sql-option",
    },

  ];

  return (
    <div className="language-selector">

      {languages.map((language) => (

        <Link
          key={language.name}
          to={language.path}
          className={`language-option ${language.className}`}
        >

          <span className="language-logo">
            {language.icon}
          </span>

          <span className="language-info">

            <strong>
              {language.name}
            </strong>

            <small>
              {language.description}
            </small>

          </span>

          <span className="language-arrow">
            →
          </span>

        </Link>

      ))}

    </div>
  );
}

/* =====================================================
   HOME PAGE
===================================================== */

function HomePage() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <div className="language-home">

      {/* =================================================
          TOP HEADER
      ================================================= */}

      <header className="language-header">

        {/* BRAND */}

        <Link
          to="/"
          className="language-brand"
        >

          <div className="language-brand-logo">

            <img
              src="/favicon.png"
              alt="Programming Learning Lab"
            />

          </div>

          <div>

            <strong>
              Programming Learning Lab
            </strong>

            <span>
              Learn. Practice. Build.
            </span>

          </div>

        </Link>


        {/* =================================================
            TOP RIGHT NAVIGATION
        ================================================= */}

        <nav className="top-navigation">

          <Link
            to="/"
            className="top-nav-link"
          >
            Languages
          </Link>

          <Link
            to="/about"
            className="top-nav-link"
          >
            About
          </Link>

          <Link
            to="/feedback"
            className="top-nav-link"
          >
            Feedback
          </Link>

        </nav>


        {/* =================================================
            CLERK USER BUTTON
        ================================================= */}

        <div className="language-user">

          <UserButton />

        </div>

      </header>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <main className="language-main">

        <div className="language-intro">

          <span className="language-label">
            LEARNING PLATFORM
          </span>

          <h1>
            What do you want to learn?
          </h1>

          <p>
            Choose a programming language and start your
            interactive learning experience.
          </p>

          <p>
            <strong>
              NOW C++ & PY concepts Available
            </strong>
          </p>

        </div>


        {/* =================================================
            LANGUAGE OPTIONS
        ================================================= */}

        <LanguageSelector />


        {/* =================================================
            NOTE
        ================================================= */}

        <div className="language-note">

          💡 Learn concepts, explore examples, and practice
          programming step by step.

        </div>

      </main>

    </div>
  );
}

/* =====================================================
   APP
===================================================== */

function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* =================================================
            AUTH
        ================================================= */}

        <Route
          path="/sign-in/*"
          element={<SignInPage />}
        />

        <Route
          path="/sign-up/*"
          element={<SignUpPage />}
        />


        {/* =================================================
            LANGUAGES HOME
        ================================================= */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            C++
        ================================================= */}

        <Route
          path="/cpp"
          element={
            <ProtectedRoute>
              <CppPage />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            JAVA
        ================================================= */}

        <Route
          path="/java"
          element={
            <ProtectedRoute>
              <JavaPage />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            PHP
        ================================================= */}

        <Route
          path="/php"
          element={
            <ProtectedRoute>
              <PhpPage />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            PYTHON
        ================================================= */}

        <Route
          path="/python"
          element={
            <ProtectedRoute>
              <PythonPage />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            PYTHON CONCEPTS
        ================================================= */}

        <Route
          path="/python/basics"
          element={
            <ProtectedRoute>
              <PythonBasics />
            </ProtectedRoute>
          }
        />

        <Route
          path="/python/variables"
          element={
            <ProtectedRoute>
              <VariablesDataTypes />
            </ProtectedRoute>
          }
        />

        <Route
          path="/python/operators"
          element={
            <ProtectedRoute>
              <Operators />
            </ProtectedRoute>
          }
        />

        <Route
          path="/python/conditions"
          element={
            <ProtectedRoute>
              <Conditions />
            </ProtectedRoute>
          }
        />

        <Route
          path="/python/loops"
          element={
            <ProtectedRoute>
              <Loops />
            </ProtectedRoute>
          }
        />

        <Route
          path="/python/functions"
          element={
            <ProtectedRoute>
              <Functions />
            </ProtectedRoute>
          }
        />

        <Route
          path="/python/lists-tuples"
          element={
            <ProtectedRoute>
              <ListsTuples />
            </ProtectedRoute>
          }
        />

        <Route
          path="/python/dictionaries-sets"
          element={
            <ProtectedRoute>
              <DictionariesSets />
            </ProtectedRoute>
          }
        />

        <Route
          path="/python/oop"
          element={
            <ProtectedRoute>
              <OOP />
            </ProtectedRoute>
          }
        />

        <Route
          path="/python/file-handling"
          element={
            <ProtectedRoute>
              <FileHandling />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            SQL
        ================================================= */}

        <Route
          path="/sql"
          element={
            <ProtectedRoute>
              <SqlPage />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            ABOUT
        ================================================= */}

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            FEEDBACK
        ================================================= */}

        <Route
          path="/feedback"
          element={
            <ProtectedRoute>
              <Feedback />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            FALLBACK
        ================================================= */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
