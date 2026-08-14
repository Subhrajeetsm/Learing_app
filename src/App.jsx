import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Feedback from "./Feedback";

/* =====================================================
   INHERITANCE DATA
===================================================== */

const inheritanceData = {
  Single: {
    description:
      "One derived class inherits from one base class.",

    diagram: [
      { id: "A", label: "Base Class A", x: 50, y: 10 },
      { id: "B", label: "Derived Class B", x: 50, y: 70 },
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
      { id: "A", label: "Class A", x: 50, y: 5 },
      { id: "B", label: "Class B", x: 50, y: 45 },
      { id: "C", label: "Class C", x: 50, y: 85 },
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
      { id: "A", label: "Base A", x: 25, y: 10 },
      { id: "B", label: "Base B", x: 75, y: 10 },
      { id: "C", label: "Derived C", x: 50, y: 75 },
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
      { id: "A", label: "Base A", x: 50, y: 10 },
      { id: "B", label: "Derived B", x: 25, y: 75 },
      { id: "C", label: "Derived C", x: 75, y: 75 },
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
      { id: "A", label: "Base Class A", x: 50, y: 5 },
      { id: "B", label: "Class B", x: 25, y: 42 },
      { id: "C", label: "Class C", x: 75, y: 42 },
      { id: "D", label: "Derived Class D", x: 50, y: 82 },
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

  /* NEXT */

  const handleNext = () => {
    const nextIndex =
      (currentIndex + 1) % types.length;

    setSelectedType(types[nextIndex]);
    setOutput([]);
    setSelectedNode(null);
    setAnimation(false);
  };

  /* PREVIOUS */

  const handlePrevious = () => {
    const prevIndex =
      (currentIndex - 1 + types.length) %
      types.length;

    setSelectedType(types[prevIndex]);
    setOutput([]);
    setSelectedNode(null);
    setAnimation(false);
  };

  /* RUN */

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

      if (
        index >= current.output.length
      ) {
        clearInterval(timer);
        setRunning(false);
      }

    }, 600);
  };

  /* RESET */

  const handleReset = () => {
    setOutput([]);
    setRunning(false);
    setAnimation(false);
    setSelectedNode(null);
    setShowCode(true);
  };

  /* ANIMATION */

  const handleAnimation = () => {
    setAnimation(false);

    setTimeout(() => {
      setAnimation(true);
    }, 50);
  };

  return (
    <div className="app">

      {/* =================================================
          HEADER / NAVBAR
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
            Learn classes, objects, inheritance
            and access specifiers visually.
          </p>

        </div>

        {/* FEEDBACK BUTTON */}

        <Link
          to="/feedback"
          className="feedback-nav-btn"
        >
          💬 Feedback
        </Link>

      </header>

      <div className="main-container">

        {/* =================================================
            SIDEBAR
        ================================================= */}

        <aside className="sidebar">

          <h2>
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

                setSelectedType(type);
                setOutput([]);
                setSelectedNode(null);
                setAnimation(false);

              }}
            >
              {type}
            </button>

          ))}

          <div className="sidebar-divider"></div>

          <h2>
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
                onClick={() =>
                  setAccessType(type)
                }
              >
                {type.toUpperCase()}
              </button>

            )
          )}

          <div className="sidebar-divider"></div>

          <Link
            to="/feedback"
            className="sidebar-feedback"
          >
            💬 Send Feedback
          </Link>

        </aside>

        {/* =================================================
            MAIN
        ================================================= */}

        <main className="content">

          {/* CLASS AND OBJECT */}

          <section className="card class-object-card">

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

              {/* CLASS */}

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

              {/* OBJECT */}

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

          {/* HERO */}

          <section className="hero">

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

              <button onClick={handlePrevious}>
                ← Previous
              </button>

              <button onClick={handleNext}>
                Next →
              </button>

              <button onClick={handleAnimation}>
                ▶ Animate
              </button>

              <button onClick={handleReset}>
                ↻ Reset
              </button>

            </div>

          </section>

          {/* DIAGRAM + CODE */}

          <section className="grid">

            {/* DIAGRAM */}

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

                      if (!start || !end)
                        return null;

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

            {/* CODE */}

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

          {/* ACCESS SPECIFIER */}

          <section className="card access-card">

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
                      className={`visibility ${
                        to
                          .toLowerCase()
                          .replaceAll(" ", "-")
                      }`}
                    >
                      {to}
                    </span>

                  </div>

                )
              )}

            </div>

            {/* PUBLIC */}

            {accessType === "public" && (

              <div className="access-detail">

                <h4>
                  Where can it be accessed?
                </h4>

                <p>
                  Public inheritance keeps public
                  members of the base class public
                  in the derived class.
                </p>

                <div className="access-example">

                  <strong>
                    Example:
                  </strong>

                  <pre>
{`class Animal {
public:
    void eat() {
        cout << "Eating";
    }
};

class Dog : public Animal {
};

int main() {

    Dog d;

    d.eat();   // Accessible

    return 0;
}`}
                  </pre>

                </div>

                <div className="access-result public-result">
                  ✓ Public member can be accessed
                  through the derived object.
                </div>

              </div>

            )}

            {/* PROTECTED */}

            {accessType === "protected" && (

              <div className="access-detail">

                <h4>
                  Where can it be accessed?
                </h4>

                <p>
                  Public and protected members of
                  the base class become protected
                  inside the derived class.
                </p>

                <div className="access-example">

                  <strong>
                    Example:
                  </strong>

                  <pre>
{`class Animal {
public:
    void eat() {
        cout << "Eating";
    }
};

class Dog : protected Animal {

public:

    void show() {

        eat();   // Accessible here

    }
};

int main() {

    Dog d;

    // d.eat();
    // Not accessible here

    d.show();

    return 0;
}`}
                  </pre>

                </div>

                <div className="access-result protected-result">

                  ✓ Accessible inside the
                  derived class.

                  <br />

                  ✕ Not accessible directly
                  through the derived object.

                </div>

              </div>

            )}

            {/* PRIVATE */}

            {accessType === "private" && (

              <div className="access-detail">

                <h4>
                  Where can it be accessed?
                </h4>

                <p>
                  Public and protected members of
                  the base class become private
                  inside the derived class.
                </p>

                <div className="access-example">

                  <strong>
                    Example:
                  </strong>

                  <pre>
{`class Animal {
public:
    void eat() {
        cout << "Eating";
    }
};

class Dog : private Animal {

public:

    void show() {

        eat();   // Accessible here

    }
};

int main() {

    Dog d;

    // d.eat();
    // Not accessible here

    d.show();

    return 0;
}`}
                  </pre>

                </div>

                <div className="access-result private-result">

                  ✓ Accessible inside the
                  derived class.

                  <br />

                  ✕ Not accessible directly
                  through the derived object.

                </div>

              </div>

            )}

          </section>

          {/* BASIC SYNTAX */}

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
   ROUTER APP
===================================================== */

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Visualizer />}
        />

        <Route
          path="/feedback"
          element={<Feedback />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;