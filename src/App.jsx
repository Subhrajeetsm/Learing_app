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
      available: true,
    },

    {
      name: "Java",
      description: "Java OOP & Programming",
      icon: "☕",
      path: "/java",
      className: "java-option",
      available: true,
    },

    {
      name: "PHP",
      description: "Backend Web Development",
      icon: "🐘",
      path: "/php",
      className: "php-option",
      available: true,
    },

    {
      name: "Python",
      description: "Python Programming",
      icon: "🐍",
      path: "/python",
      className: "python-option",
      available: true,
    },

    {
      name: "SQL",
      description: "Database & SQL Queries",
      icon: "🗄️",
      path: "/sql",
      className: "sql-option",
      available: true,
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
   TOP NAVIGATION
===================================================== */

function TopNavigation() {
  return (
    <nav className="top-navigation">

      {/* LANGUAGES */}

      <Link
        to="/"
        className="top-nav-link languages-link"
      >
        <span className="nav-icon">
          ⌘
        </span>

        <span>
          Languages
        </span>
      </Link>


      {/* ABOUT */}

      <Link
        to="/about"
        className="top-nav-link"
      >
        <span className="nav-icon">
          ◎
        </span>

        <span>
          About
        </span>
      </Link>


      {/* FEEDBACK */}

      <Link
        to="/feedback"
        className="top-nav-link"
      >
        <span className="nav-icon">
          ✦
        </span>

        <span>
          Feedback
        </span>
      </Link>


      {/* USER */}

      <div className="top-nav-user">
        <UserButton />
      </div>

    </nav>
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
            TOP RIGHT LINKS
        ================================================= */}

        <TopNavigation />

      </header>


      {/* =================================================
          MAIN
      ================================================= */}

      <main className="language-main">

        {/* INTRO */}

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
              NOW C++ & PYTHON CONCEPTS ARE AVAILABLE
            </strong>
          </p>

        </div>


        {/* =================================================
            LANGUAGE CARDS
        ================================================= */}

        <LanguageSelector />


        {/* NOTE */}

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
          element={
            <SignInPage />
          }
        />

        <Route
          path="/sign-up/*"
          element={
            <SignUpPage />
          }
        />


        {/* =================================================
            HOME / LANGUAGES
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
            PYTHON MAIN PAGE
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
            PYTHON BASICS
        ================================================= */}

        <Route
          path="/python/basics"
          element={
            <ProtectedRoute>
              <PythonBasics />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            PYTHON VARIABLES
        ================================================= */}

        <Route
          path="/python/variables"
          element={
            <ProtectedRoute>
              <VariablesDataTypes />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            PYTHON OPERATORS
        ================================================= */}

        <Route
          path="/python/operators"
          element={
            <ProtectedRoute>
              <Operators />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            PYTHON CONDITIONS
        ================================================= */}

        <Route
          path="/python/conditions"
          element={
            <ProtectedRoute>
              <Conditions />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            PYTHON LOOPS
        ================================================= */}

        <Route
          path="/python/loops"
          element={
            <ProtectedRoute>
              <Loops />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            PYTHON FUNCTIONS
        ================================================= */}

        <Route
          path="/python/functions"
          element={
            <ProtectedRoute>
              <Functions />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            PYTHON LISTS & TUPLES
        ================================================= */}

        <Route
          path="/python/lists-tuples"
          element={
            <ProtectedRoute>
              <ListsTuples />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            PYTHON DICTIONARIES & SETS
        ================================================= */}

        <Route
          path="/python/dictionaries-sets"
          element={
            <ProtectedRoute>
              <DictionariesSets />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            PYTHON OOP
        ================================================= */}

        <Route
          path="/python/oop"
          element={
            <ProtectedRoute>
              <OOP />
            </ProtectedRoute>
          }
        />


        {/* =================================================
            PYTHON FILE HANDLING
        ================================================= */}

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
