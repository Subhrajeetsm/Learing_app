import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CppPage.css";

/* =====================================================
   INHERITANCE DATA
===================================================== */

const inheritanceData = {
  Single: {
    description:
      "One derived class inherits properties and behaviors from one base class.",

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
        cout << "Animal eats" << endl;
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "Dog barks" << endl;
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
      "A derived class becomes the base class for another derived class.",

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
        cout << "Class A" << endl;
    }
};

class B : public A {
public:
    void showB() {
        cout << "Class B" << endl;
    }
};

class C : public B {
public:
    void showC() {
        cout << "Class C" << endl;
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
      { id: "A", label: "Base Class A", x: 25, y: 10 },
      { id: "B", label: "Base Class B", x: 75, y: 10 },
      { id: "C", label: "Derived Class C", x: 50, y: 75 },
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
        cout << "A" << endl;
    }
};

class B {
public:
    void showB() {
        cout << "B" << endl;
    }
};

class C : public A, public B {
public:
    void showC() {
        cout << "C" << endl;
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
      { id: "A", label: "Base Class", x: 50, y: 10 },
      { id: "B", label: "Derived Class B", x: 25, y: 75 },
      { id: "C", label: "Derived Class C", x: 75, y: 75 },
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
        cout << "Animal eats" << endl;
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "Dog barks" << endl;
    }
};

class Cat : public Animal {
public:
    void meow() {
        cout << "Cat meows" << endl;
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
      "Hybrid inheritance combines two or more types of inheritance.",

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
        cout << "Class A" << endl;
    }
};

class B : virtual public A {
public:
    void showB() {
        cout << "Class B" << endl;
    }
};

class C : virtual public A {
public:
    void showC() {
        cout << "Class C" << endl;
    }
};

class D : public B, public C {
public:
    void showD() {
        cout << "Class D" << endl;
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
      "Public inheritance keeps public members public and protected members protected in the derived class.",

    example: "class Dog : public Animal",

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

    example: "class Dog : protected Animal",

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

    example: "class Dog : private Animal",

    visibility: [
      ["Base public", "Private"],
      ["Base protected", "Private"],
      ["Base private", "Not directly accessible"],
    ],
  },
};

/* =====================================================
   CLASS & OBJECT DATA
===================================================== */

const classCode = `class Student {
public:
    string name;

    void display() {
        cout << name;
    }
};`;

const objectCode = `int main() {

    Student s;

    s.name = "Rahul";
    s.display();

    return 0;
}`;

/* =====================================================
   COMPONENT
===================================================== */

function CppPage() {
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

  /* =====================================================
     SELECT INHERITANCE TYPE
  ===================================================== */

  const selectType = (type) => {
    setSelectedType(type);
    setOutput([]);
    setSelectedNode(null);
    setAnimation(false);
    setRunning(false);
  };

  /* =====================================================
     NEXT
  ===================================================== */

  const handleNext = () => {
    const nextIndex =
      (currentIndex + 1) % types.length;

    selectType(types[nextIndex]);
  };

  /* =====================================================
     PREVIOUS
  ===================================================== */

  const handlePrevious = () => {
    const previousIndex =
      (currentIndex - 1 + types.length) %
      types.length;

    selectType(types[previousIndex]);
  };

  /* =====================================================
     RUN
  ===================================================== */

  const handleRun = () => {
    if (running) return;

    setRunning(true);
    setOutput([]);

    let index = 0;

    const timer = setInterval(() => {
      setOutput((previous) => [
        ...previous,
        current.output[index],
      ]);

      index++;

      if (index >= current.output.length) {
        clearInterval(timer);
        setRunning(false);
      }
    }, 600);
  };

  /* =====================================================
     RESET
  ===================================================== */

  const handleReset = () => {
    setOutput([]);
    setRunning(false);
    setAnimation(false);
    setSelectedNode(null);
    setShowCode(true);
  };

  /* =====================================================
     ANIMATION
  ===================================================== */

  const handleAnimation = () => {
    setAnimation(false);

    setTimeout(() => {
      setAnimation(true);
    }, 50);
  };

  return (
    <div className="cpp-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="cpp-header">

        <Link
          to="/"
          className="cpp-brand"
        >

          <div className="cpp-logo">
            C++
          </div>

          <div>
            <strong>
              C++ Learning Lab
            </strong>

            <span>
              Interactive OOP Visualizer
            </span>
          </div>

        </Link>

        <nav className="cpp-nav">

          <Link to="/">
            Languages
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/feedback">
            Feedback
          </Link>

        </nav>

      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="cpp-container">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="cpp-hero">

          <span>
            C++ OBJECT ORIENTED PROGRAMMING
          </span>

          <h1>
            C++ Inheritance Visualizer
          </h1>

          <p>
            Learn classes, objects, inheritance and
            access specifiers through interactive
            examples and visual programming.
          </p>

        </section>

        {/* =================================================
            CLASS & OBJECT
        ================================================= */}

        <section className="cpp-card cpp-class-object">

          <div className="cpp-section-heading">

            <span className="cpp-section-icon">
              📦
            </span>

            <div>
              <span className="cpp-mini-label">
                C++ FUNDAMENTALS
              </span>

              <h2>
                Class & Object
              </h2>

              <p>
                A class is a blueprint for creating
                objects. An object is an instance of
                a class.
              </p>
            </div>

          </div>

          <div className="cpp-concept-grid">

            {/* CLASS */}

            <div className="cpp-concept-box">

              <div className="cpp-concept-number">
                01
              </div>

              <h3>
                Class
              </h3>

              <p>
                A class defines the data members and
                functions that an object will have.
              </p>

              <pre>
                <code>
                  {classCode}
                </code>
              </pre>

            </div>

            {/* OBJECT */}

            <div className="cpp-concept-box">

              <div className="cpp-concept-number">
                02
              </div>

              <h3>
                Object
              </h3>

              <p>
                An object is created from a class and
                can access its public members.
              </p>

              <pre>
                <code>
                  {objectCode}
                </code>
              </pre>

            </div>

          </div>

        </section>

        {/* =================================================
            INHERITANCE TYPES
        ================================================= */}

        <section className="cpp-types">

          <h2>
            Inheritance Types
          </h2>

          <p className="cpp-types-description">
            Explore the different inheritance structures
            available in C++.
          </p>

          <div className="cpp-type-list">

            {types.map((type) => (

              <button
                key={type}
                className={
                  selectedType === type
                    ? "cpp-type active"
                    : "cpp-type"
                }
                onClick={() =>
                  selectType(type)
                }
              >
                {type}
              </button>

            ))}

          </div>

        </section>

        {/* =================================================
            INHERITANCE HERO
        ================================================= */}

        <section className="cpp-playground">

          <div className="cpp-description">

            <span>
              CURRENT CONCEPT
            </span>

            <h2>
              {selectedType} Inheritance
            </h2>

            <p>
              {current.description}
            </p>

            <div className="cpp-navigation-buttons">

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

            </div>

            <div className="cpp-action-buttons">

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

          </div>

          {/* =================================================
              CODE
          ================================================= */}

          <div className="cpp-code-card">

            <div className="cpp-code-header">

              <strong>
                main.cpp
              </strong>

              <span>
                C++
              </span>

            </div>

            {showCode && (

              <pre>
                <code>
                  {current.code}
                </code>
              </pre>

            )}

            <div className="cpp-code-actions">

              <button
                className="cpp-show-code"
                onClick={() =>
                  setShowCode(!showCode)
                }
              >
                {showCode
                  ? "Hide Code"
                  : "Show Code"}
              </button>

              <button
                className="cpp-run"
                onClick={handleRun}
                disabled={running}
              >
                {running
                  ? "Running..."
                  : "▶ Run Example"}
              </button>

            </div>

          </div>

          {/* =================================================
              DIAGRAM
          ================================================= */}

          <div className="cpp-diagram-card">

            <div className="cpp-output-header">

              <strong>
                INHERITANCE DIAGRAM
              </strong>

              <span>
                {current.diagram.length} Classes
              </span>

            </div>

            <div
              className={
                animation
                  ? "cpp-diagram animated"
                  : "cpp-diagram"
              }
            >

              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="cpp-arrows"
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
                        markerEnd="url(#cpp-arrow)"
                      />
                    );
                  }
                )}

                <defs>

                  <marker
                    id="cpp-arrow"
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
                        ? "cpp-class-node selected"
                        : "cpp-class-node"
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

              <div className="cpp-node-info">

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

          {/* =================================================
              OUTPUT
          ================================================= */}

          <div className="cpp-output">

            <div className="cpp-output-header">

              <strong>
                OUTPUT
              </strong>

              <button
                onClick={() =>
                  setOutput([])
                }
              >
                Clear
              </button>

            </div>

            <div className="cpp-terminal">

              {output.length === 0 ? (

                <span>
                  Run the example to see output...
                </span>

              ) : (

                output.map(
                  (line, index) => (

                    <div key={index}>
                      $ {line}
                    </div>

                  )
                )

              )}

            </div>

          </div>

        </section>

        {/* =================================================
            HOW IT WORKS
        ================================================= */}

        <section className="cpp-card cpp-explanation">

          <div className="cpp-card-title">

            <span>
              🧠
            </span>

            <div>

              <h2>
                How Inheritance Works
              </h2>

              <p>
                Understand inheritance step by step.
              </p>

            </div>

          </div>

          <div className="cpp-explanation-grid">

            <div className="cpp-step">

              <div>
                01
              </div>

              <h3>
                Base Class
              </h3>

              <p>
                The parent class contains common
                properties and functions.
              </p>

            </div>

            <div className="cpp-step">

              <div>
                02
              </div>

              <h3>
                Inheritance
              </h3>

              <p>
                The derived class receives accessible
                members from the base class.
              </p>

            </div>

            <div className="cpp-step">

              <div>
                03
              </div>

              <h3>
                Derived Class
              </h3>

              <p>
                The child class can add its own
                functions and data members.
              </p>

            </div>

          </div>

        </section>

        {/* =================================================
            ACCESS SPECIFIER
        ================================================= */}

        <section className="cpp-card cpp-access-card">

          <div className="cpp-access-heading">

            <div>

              <span className="cpp-mini-label">
                {accessType.toUpperCase()} ACCESS
              </span>

              <h2>
                {access.title}
              </h2>

              <p>
                {access.description}
              </p>

            </div>

            <code>
              {access.example}
            </code>

          </div>

          <div className="cpp-access-tabs">

            {Object.keys(accessData).map(
              (type) => (

                <button
                  key={type}
                  className={
                    accessType === type
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setAccessType(type)
                  }
                >
                  {type.toUpperCase()}
                </button>

              )
            )}

          </div>

          <div className="cpp-visibility-grid">

            {access.visibility.map(
              ([from, to]) => (

                <div
                  className="cpp-visibility-box"
                  key={from}
                >

                  <span>
                    {from}
                  </span>

                  <strong>
                    →
                  </strong>

                  <span
                    className={`cpp-visibility ${to
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    {to}
                  </span>

                </div>

              )
            )}

          </div>

          <div className="cpp-access-detail">

            <h3>
              Where can it be accessed?
            </h3>

            <p>
              {access.description}
            </p>

            {accessType === "public" && (

              <pre>
                <code>{`class Animal {
public:
    void eat() {
        cout << "Eating";
    }
};

class Dog : public Animal {
};

int main() {
    Dog d;

    d.eat();

    return 0;
}`}</code>
              </pre>

            )}

            {accessType === "protected" && (

              <pre>
                <code>{`class Animal {
public:
    void eat() {
        cout << "Eating";
    }
};

class Dog : protected Animal {

public:

    void show() {
        eat();
    }
};

int main() {
    Dog d;

    d.show();

    return 0;
}`}</code>
              </pre>

            )}

            {accessType === "private" && (

              <pre>
                <code>{`class Animal {
public:
    void eat() {
        cout << "Eating";
    }
};

class Dog : private Animal {

public:

    void show() {
        eat();
    }
};

int main() {
    Dog d;

    d.show();

    return 0;
}`}</code>
              </pre>

            )}

          </div>

        </section>

        {/* =================================================
            BASIC SYNTAX
        ================================================= */}

        <section className="cpp-card cpp-syntax-card">

          <span className="cpp-mini-label">
            C++ SYNTAX
          </span>

          <h2>
            Basic C++ Inheritance Syntax
          </h2>

          <pre>
            <code>{`class DerivedClass : access_specifier BaseClass {

    // members of derived class

};`}</code>
          </pre>

          <div className="cpp-syntax-examples">

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

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="cpp-footer">
        C++ Learning Lab • Interactive OOP Visualizer
      </footer>

    </div>
  );
}

export default CppPage;
