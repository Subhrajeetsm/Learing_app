import React, { useState } from "react";

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
import Feedback from "./Feedback";

/* =====================================================
   INHERITANCE DATA
===================================================== */

const inheritanceData = {
  Single: {
    description:
      "One derived class inherits from one base class.",

    diagram: [
      {
        id: "A",
        label: "Base Class A",
        x: 50,
        y: 10,
      },
      {
        id: "B",
        label: "Derived Class B",
        x: 50,
        y: 70,
      },
    ],

    arrows: [["A", "B"]],

    code: `#include <iostream>
using namespace std;

class Animal {
public:
    void eat() {
        cout << "Animal eats";
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "Dog barks";
    }
};

int main() {
    Dog d;

    d.eat();
    d.bark();

    return 0;
}`,

    output: [
      "Animal eats",
      "Dog barks",
    ],
  },

  Multilevel: {
    description:
      "A derived class becomes the base class for another class.",

    diagram: [
      {
        id: "A",
        label: "Class A",
        x: 50,
        y: 5,
      },
      {
        id: "B",
        label: "Class B",
        x: 50,
        y: 45,
      },
      {
        id: "C",
        label: "Class C",
        x: 50,
        y: 85,
      },
    ],

    arrows: [
      ["A", "B"],
      ["B", "C"],
    ],

    code: `#include <iostream>
using namespace std;

class A {
public:
    void showA() {
        cout << "Class A";
    }
};

class B : public A {
public:
    void showB() {
        cout << "Class B";
    }
};

class C : public B {
public:
    void showC() {
        cout << "Class C";
    }
};

int main() {
    C obj;

    obj.showA();
    obj.showB();
    obj.showC();

    return 0;
}`,

    output: [
      "Class A",
      "Class B",
      "Class C",
    ],
  },

  Multiple: {
    description:
      "One derived class inherits from two or more base classes.",

    diagram: [
      {
        id: "A",
        label: "Base A",
        x: 25,
        y: 10,
      },
      {
        id: "B",
        label: "Base B",
        x: 75,
        y: 10,
      },
      {
        id: "C",
        label: "Derived C",
        x: 50,
        y: 75,
      },
    ],

    arrows: [
      ["A", "C"],
      ["B", "C"],
    ],

    code: `#include <iostream>
using namespace std;

class A {
public:
    void showA() {
        cout << "A";
    }
};

class B {
public:
    void showB() {
        cout << "B";
    }
};

class C : public A, public B {
public:
    void showC() {
        cout << "C";
    }
};

int main() {
    C obj;

    obj.showA();
    obj.showB();
    obj.showC();

    return 0;
}`,

    output: [
      "A",
      "B",
      "C",
    ],
  },

  Hierarchical: {
    description:
      "Multiple derived classes inherit from the same base class.",

    diagram: [
      {
        id: "A",
        label: "Base A",
        x: 50,
        y: 10,
      },
      {
        id: "B",
        label: "Derived B",
        x: 25,
        y: 75,
      },
      {
        id: "C",
        label: "Derived C",
        x: 75,
        y: 75,
      },
    ],

    arrows: [
      ["A", "B"],
      ["A", "C"],
    ],

    code: `#include <iostream>
using namespace std;

class Animal {
public:
    void eat() {
        cout << "Animal eats";
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "Dog barks";
    }
};

class Cat : public Animal {
public:
    void meow() {
        cout << "Cat meows";
    }
};

int main() {

    Dog d;
    Cat c;

    d.eat();
    d.bark();

    c.eat();
    c.meow();

    return 0;
}`,

    output: [
      "Animal eats",
      "Dog barks",
      "Animal eats",
      "Cat meows",
    ],
  },

  Hybrid: {
    description:
      "Hybrid inheritance is a combination of two or more types of inheritance.",

    diagram: [
      {
        id: "A",
        label: "Base Class A",
        x: 50,
        y: 5,
      },
      {
        id: "B",
        label: "Class B",
        x: 25,
        y: 42,
      },
      {
        id: "C",
        label: "Class C",
        x: 75,
        y: 42,
      },
      {
        id: "D",
        label: "Derived Class D",
        x: 50,
        y: 82,
      },
    ],

    arrows: [
      ["A", "B"],
      ["A", "C"],
      ["B", "D"],
      ["C", "D"],
    ],

    code: `#include <iostream>
using namespace std;

class A {
public:
    void showA() {
        cout << "Class A";
    }
};

class B : virtual public A {
public:
    void showB() {
        cout << "Class B";
    }
};

class C : virtual public A {
public:
    void showC() {
        cout << "Class C";
    }
};

class D : public B, public C {
public:
    void showD() {
        cout << "Class D";
    }
};

int main() {

    D obj;

    obj.showA();
    obj.showB();
    obj.showC();
    obj.showD();

    return 0;
}`,

    output: [
      "Class A",
      "Class B",
      "Class C",
      "Class D",
    ],
  },
};

/* =====================================================
   ACCESS DATA
===================================================== */

const accessData = {
  public: {
    title: "Public Inheritance",

    description:
      "Public inheritance keeps public members of the base class public in the derived class.",

    example:
      "class Dog : public Animal",

    visibility: [
      ["Base public", "Public"],
      ["Base protected", "Protected"],
      ["Base private", "Not directly accessible"],
    ],
  },

  protected: {
    title: "Protected Inheritance",

    description:
      "Protected inheritance makes public and protected members of the base class protected in the derived class.",

    example:
      "class Dog : protected Animal",

    visibility: [
      ["Base public", "Protected"],
      ["Base protected", "Protected"],
      ["Base private", "Not directly accessible"],
    ],
  },

  private: {
    title: "Private Inheritance",

    description:
      "Private inheritance makes public and protected members of the base class private in the derived class.",

    example:
      "class Dog : private Animal",

    visibility: [
      ["Base public", "Private"],
      ["Base protected", "Private"],
      ["Base private", "Not directly accessible"],
    ],
  },
};

/* =====================================================
   CONSTRUCTOR DATA
===================================================== */

const constructorData = {
  rules: [
    {
      number: "01",
      title: "Same Name as Class",
      text: "The constructor has the same name as the class.",
    },
    {
      number: "02",
      title: "No Return Type",
      text: "A constructor has no return type, not even void.",
    },
    {
      number: "03",
      title: "Usually Public",
      text: "Constructors are usually declared in the public section.",
    },
    {
      number: "04",
      title: "Automatically Called",
      text: "The constructor is automatically called when an object is created.",
    },
  ],

  basicCode: `#include <iostream>
using namespace std;

class Student {
public:

    Student() {
        cout << "Constructor called";
    }
};

int main() {

    Student s;

    return 0;
}`,

  parameterCode: `#include <iostream>
using namespace std;

class Student {
public:

    Student(string n, int a) {
        cout << "Name: " << n << endl;
        cout << "Age: " << a << endl;
    }
};

int main() {

    Student s("Rahul", 20);

    return 0;
}`,

  overloadCode: `#include <iostream>
using namespace std;

class Student {
public:

    Student() {
        cout << "Default Constructor" << endl;
    }

    Student(string name) {
        cout << "Name: " << name << endl;
    }
};

int main() {

    Student s1;
    Student s2("Rahul");

    return 0;
}`,

  outsideCode: `#include <iostream>
using namespace std;

class Student {
public:

    Student();
};

Student::Student() {
    cout << "Constructor called";
}

int main() {

    Student s;

    return 0;
}`,
};

/* =====================================================
   PROTECTED ROUTE
===================================================== */

function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <div className="loading-screen">
        <div className="loading-box">
          Loading...
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
}

/* =====================================================
   SIGN IN
===================================================== */

function SignInPage() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <div className="loading-screen">Loading...</div>;
  }

  if (isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="auth-page">
      <SignIn
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
        fallbackRedirectUrl="/"
      />
    </div>
  );
}

/* =====================================================
   SIGN UP
===================================================== */

function SignUpPage() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <div className="loading-screen">Loading...</div>;
  }

  if (isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="auth-page">
      <SignUp
        routing="path"
        path="/sign-up"
        signInUrl="/sign-in"
        fallbackRedirectUrl="/"
      />
    </div>
  );
}

/* =====================================================
   VISUALIZER
===================================================== */

function Visualizer() {
  const types = Object.keys(inheritanceData);

  const [selectedType, setSelectedType] =
    useState("Single");

  const [showCode, setShowCode] =
    useState(true);

  const [running, setRunning] =
    useState(false);

  const [animation, setAnimation] =
    useState(false);

  const [output, setOutput] =
    useState([]);

  const [accessType, setAccessType] =
    useState("public");

  const [selectedNode, setSelectedNode] =
    useState(null);

  const current =
    inheritanceData[selectedType];

  const access =
    accessData[accessType];

  const currentIndex =
    types.indexOf(selectedType);

  const scrollToSection = (id) => {
    setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  const selectType = (type) => {
    setSelectedType(type);
    setOutput([]);
    setSelectedNode(null);
    setAnimation(false);
    setRunning(false);
  };

  const handleNext = () => {
    const nextIndex =
      (currentIndex + 1) % types.length;

    selectType(types[nextIndex]);
    scrollToSection("inheritance-section");
  };

  const handlePrevious = () => {
    const prevIndex =
      (currentIndex - 1 + types.length) %
      types.length;

    selectType(types[prevIndex]);
    scrollToSection("inheritance-section");
  };

  const handleRun = () => {
    if (running) return;

    setRunning(true);
    setOutput([]);

    let index = 0;

    const timer = setInterval(() => {
      setOutput((prev) => [
        ...prev,
        current.output[index],
      ]);

      index++;

      if (index >= current.output.length) {
        clearInterval(timer);
        setRunning(false);
      }
    }, 600);
  };

  const handleReset = () => {
    setOutput([]);
    setRunning(false);
    setAnimation(false);
    setSelectedNode(null);
    setShowCode(true);
  };

  const handleAnimation = () => {
    setAnimation(false);

    setTimeout(() => {
      setAnimation(true);
    }, 50);
  };

  return (
    <div className="app">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="header">

        <div className="logo">
          C++
        </div>

        <div className="header-content">

          <h1>
            C++ Inheritance Visualizer
          </h1>

          <p>
            Interactive C++ learning playground
          </p>

        </div>

        <div className="header-actions">

          <Link
            to="/feedback"
            target="_blank"
            rel="noopener noreferrer"
            className="feedback-nav-btn"
          >
            💬 Feedback
          </Link>

          <UserButton />

        </div>

      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <div className="main-container">

        {/* =================================================
            SIDEBAR
        ================================================= */}

        <aside className="sidebar">

          <div className="sidebar-brand">
            <span className="sidebar-brand-icon">
              C++
            </span>

            <div>
              <strong>
                Learning Path
              </strong>

              <span>
                C++ OOP Fundamentals
              </span>
            </div>
          </div>

          <div className="sidebar-section">

            <h2 className="sidebar-title">
              C++ Concepts
            </h2>

            <button
              className="concept-nav-btn"
              onClick={() =>
                scrollToSection(
                  "class-object-section"
                )
              }
            >
              <span>📘</span>
              <span>Class and Object</span>
            </button>

            <button
              className="concept-nav-btn"
              onClick={() =>
                scrollToSection(
                  "constructor-section"
                )
              }
            >
              <span>🏗️</span>
              <span>Constructors</span>
            </button>

          </div>

          <div className="sidebar-section">

            <h2 className="sidebar-title">
              Inheritance Types
            </h2>

            {types.map((type) => (

              <button
                key={type}
                className={
                  selectedType === type
                    ? "type-btn active"
                    : "type-btn"
                }
                onClick={() => {

                  selectType(type);

                  scrollToSection(
                    "inheritance-section"
                  );

                }}
              >
                <span className="type-icon">
                  ◆
                </span>

                <span>
                  {type} Inheritance
                </span>

              </button>

            ))}

          </div>

          <div className="sidebar-section">

            <h2 className="sidebar-title">
              Access Specifier
            </h2>

            {Object.keys(accessData).map(
              (type) => (

                <button
                  key={type}
                  className={
                    accessType === type
                      ? "access-btn active"
                      : "access-btn"
                  }
                  onClick={() => {

                    setAccessType(type);

                    scrollToSection(
                      "access-section"
                    );

                  }}
                >
                  <span>🔐</span>

                  <span>
                    {type.toUpperCase()}
                  </span>

                </button>

              )
            )}

          </div>

          <div className="sidebar-divider"></div>

          <Link
            to="/feedback"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-feedback"
          >
            💬 Send Feedback
          </Link>

        </aside>

        {/* =================================================
            CONTENT
        ================================================= */}

        <main className="content">

          {/* CLASS OBJECT */}

          <section
            id="class-object-section"
            className="card class-object-card"
          >

            <div className="class-object-header">

              <span className="badge">
                C++ FUNDAMENTALS
              </span>

              <h2>
                Class and Object
              </h2>

              <p>
                A class is a blueprint for creating
                objects. An object is an instance of
                a class.
              </p>

            </div>

            <div className="class-object-grid">

              <div className="concept-box">

                <div className="concept-number">
                  01
                </div>

                <h3>
                  Class
                </h3>

                <p>
                  A class defines the data members
                  and functions that an object will have.
                </p>

                <pre>
{`class Student {
public:
    string name;

    void display() {
        cout << name;
    }
};`}
                </pre>

              </div>

              <div className="concept-box">

                <div className="concept-number">
                  02
                </div>

                <h3>
                  Object
                </h3>

                <p>
                  An object is created from a class
                  and can access its public members.
                </p>

                <pre>
{`int main() {

    Student s;

    s.name = "Rahul";

    s.display();

    return 0;
}`}
                </pre>

              </div>

            </div>

          </section>

          {/* CONSTRUCTORS */}

          <section
            id="constructor-section"
            className="card constructor-card"
          >

            <div className="section-heading">

              <span className="badge">
                C++ FUNDAMENTALS
              </span>

              <h2>
                Constructors
              </h2>

              <p>
                A constructor is a special member
                function that is automatically called
                when an object is created.
              </p>

            </div>

            <div className="constructor-rules">

              <h4>
                Constructor Rules
              </h4>

              <div className="rules-grid">

                {constructorData.rules.map(
                  (rule) => (

                    <div
                      className="rule-box"
                      key={rule.number}
                    >

                      <div className="concept-number">
                        {rule.number}
                      </div>

                      <div>

                        <strong>
                          {rule.title}
                        </strong>

                        <p>
                          {rule.text}
                        </p>

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

            <div className="constructor-info">

              <h4>
                Why Constructors Are Useful
              </h4>

              <p>
                Constructors initialize objects when
                they are created. They help assign
                initial values to data members and
                make object creation easier and safer.
              </p>

            </div>

            <div className="constructor-example">

              <div className="constructor-example-header">

                <h4>
                  Basic Constructor
                </h4>

                <span>
                  Automatically called
                </span>

              </div>

              <pre>
                <code>
                  {constructorData.basicCode}
                </code>
              </pre>

            </div>

            <div className="constructor-example">

              <div className="constructor-example-header">

                <h4>
                  Constructor with Parameters
                </h4>

                <span>
                  Pass values during object creation
                </span>

              </div>

              <pre>
                <code>
                  {constructorData.parameterCode}
                </code>
              </pre>

            </div>

            <div className="constructor-info">

              <h4>
                Constructor Overloading
              </h4>

              <p>
                Constructor overloading means defining
                multiple constructors in the same class
                with different parameter lists.
              </p>

            </div>

            <div className="constructor-example">

              <div className="constructor-example-header">

                <h4>
                  Example with Two Constructors
                </h4>

                <span>
                  Default + Parameterized
                </span>

              </div>

              <pre>
                <code>
                  {constructorData.overloadCode}
                </code>
              </pre>

            </div>

            <div className="constructor-example">

              <div className="constructor-example-header">

                <h4>
                  Constructor Defined Outside the Class
                </h4>

                <span>
                  Using ::
                </span>

              </div>

              <pre>
                <code>
                  {constructorData.outsideCode}
                </code>
              </pre>

            </div>

          </section>

          {/* INHERITANCE HERO */}

          <section
            id="inheritance-section"
            className="hero"
          >

            <div>

              <span className="badge">
                {selectedType} Inheritance
              </span>

              <h2>
                {selectedType} Inheritance
              </h2>

              <p>
                {current.description}
              </p>

            </div>

            <div className="controls">

              <button
                onClick={handlePrevious}
              >
                ← Previous
              </button>

              <button
                onClick={handleNext}
              >
                Next →
              </button>

              <button
                onClick={handleAnimation}
              >
                ▶ Animate
              </button>

              <button
                onClick={handleReset}
              >
                ↻ Reset
              </button>

            </div>

          </section>

          {/* DIAGRAM + CODE */}

          <section className="grid">

            <div className="card diagram-card">

              <div className="card-header">

                <h3>
                  Inheritance Diagram
                </h3>

                <span className="small-label">
                  {current.diagram.length} Classes
                </span>

              </div>

              <div
                className={
                  animation
                    ? "diagram animated"
                    : "diagram"
                }
              >

                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="arrows"
                >

                  <defs>

                    <marker
                      id="arrow"
                      markerWidth="6"
                      markerHeight="6"
                      refX="4"
                      refY="3"
                      orient="auto"
                    >

                      <path
                        d="M0,0 L6,3 L0,6 Z"
                        fill="currentColor"
                      />

                    </marker>

                  </defs>

                  {current.arrows.map(
                    ([from, to], index) => {

                      const start =
                        current.diagram.find(
                          (node) =>
                            node.id === from
                        );

                      const end =
                        current.diagram.find(
                          (node) =>
                            node.id === to
                        );

                      if (!start || !end) {
                        return null;
                      }

                      return (
                        <line
                          key={index}
                          x1={start.x}
                          y1={start.y + 9}
                          x2={end.x}
                          y2={end.y - 6}
                          stroke="currentColor"
                          strokeWidth="0.8"
                          markerEnd="url(#arrow)"
                        />
                      );
                    }
                  )}

                </svg>

                {current.diagram.map(
                  (node) => (

                    <button
                      key={node.id}
                      className={
                        selectedNode === node.id
                          ? "class-node selected"
                          : "class-node"
                      }
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                      }}
                      onClick={() =>
                        setSelectedNode(node.id)
                      }
                    >

                      <strong>
                        {node.id}
                      </strong>

                      <span>
                        {node.label}
                      </span>

                    </button>

                  )
                )}

              </div>

              {selectedNode && (

                <div className="node-info">

                  <strong>
                    Selected Class:
                  </strong>{" "}

                  {selectedNode}

                  <br />

                  Click another class
                  to inspect it.

                </div>

              )}

            </div>

            <div className="card code-card">

              <div className="card-header">

                <h3>
                  C++ Example
                </h3>

                <button
                  className="small-btn"
                  onClick={() =>
                    setShowCode(!showCode)
                  }
                >
                  {showCode
                    ? "Hide Code"
                    : "Show Code"}
                </button>

              </div>

              {showCode && (
                <>

                  <pre>
                    <code>
                      {current.code}
                    </code>
                  </pre>

                  <button
                    className="run-btn"
                    onClick={handleRun}
                    disabled={running}
                  >
                    {running
                      ? "Running..."
                      : "▶ Run Example"}
                  </button>

                </>
              )}

              <div className="output">

                <div className="output-title">
                  Output
                </div>

                {output.length === 0 ? (

                  <span className="placeholder">
                    Click "Run Example"
                  </span>

                ) : (

                  output.map(
                    (line, index) => (

                      <div key={index}>
                        {">"} {line}
                      </div>

                    )
                  )

                )}

              </div>

            </div>

          </section>

          {/* HOW IT WORKS */}

          <section className="card explanation">

            <div className="card-header">

              <h3>
                How It Works
              </h3>

            </div>

            <div className="explanation-grid">

              <div>

                <div className="step">
                  01
                </div>

                <h4>
                  Base Class
                </h4>

                <p>
                  The parent class contains
                  common properties and functions.
                </p>

              </div>

              <div>

                <div className="step">
                  02
                </div>

                <h4>
                  Inheritance
                </h4>

                <p>
                  The derived class receives
                  accessible members from the
                  base class.
                </p>

              </div>

              <div>

                <div className="step">
                  03
                </div>

                <h4>
                  Derived Class
                </h4>

                <p>
                  The child class can add its own
                  functions and data members.
                </p>

              </div>

            </div>

          </section>

          {/* ACCESS */}

          <section
            id="access-section"
            className="card access-card"
          >

            <div className="card-header">

              <div>

                <span className="badge">
                  {accessType.toUpperCase()} ACCESS
                </span>

                <h3>
                  {access.title}
                </h3>

                <p>
                  {access.description}
                </p>

              </div>

              <span className="syntax">
                {access.example}
              </span>

            </div>

            <div className="visibility-grid">

              {access.visibility.map(
                ([from, to]) => (

                  <div
                    className="visibility-box"
                    key={from}
                  >

                    <span>
                      {from}
                    </span>

                    <strong>
                      →
                    </strong>

                    <span
                      className={`visibility ${to
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                    >
                      {to}
                    </span>

                  </div>

                )
              )}

            </div>

            <div className="access-detail">

              <h4>
                Where can it be accessed?
              </h4>

              <p>
                {access.description}
              </p>

            </div>

          </section>

          {/* SYNTAX */}

          <section className="card syntax-card">

            <h3>
              Basic C++ Inheritance Syntax
            </h3>

            <pre>
              <code>
{`class DerivedClass : access_specifier BaseClass {

    // members of derived class

};`}
              </code>
            </pre>

            <div className="syntax-examples">

              <div>

                <strong>
                  Public
                </strong>

                <code>
                  class Dog : public Animal {};
                </code>

              </div>

              <div>

                <strong>
                  Protected
                </strong>

                <code>
                  class Dog : protected Animal {};
                </code>

              </div>

              <div>

                <strong>
                  Private
                </strong>

                <code>
                  class Dog : private Animal {};
                </code>

              </div>

            </div>

          </section>

        </main>

      </div>

      <footer>
        C++ Inheritance Visualizer • React
      </footer>

    </div>
  );
}

/* =====================================================
   APP ROUTER
===================================================== */

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/sign-in/*"
          element={<SignInPage />}
        />

        <Route
          path="/sign-up/*"
          element={<SignUpPage />}
        />

        <Route
          path="/feedback"
          element={
            <ProtectedRoute>
              <Feedback />
            </ProtectedRoute>
          }
        />

        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Visualizer />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
