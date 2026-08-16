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
      {
        id: "A",
        label: "Base Class",
        sub: "Animal",
        x: 50,
        y: 18,
      },
      {
        id: "B",
        label: "Derived Class",
        sub: "Dog",
        x: 50,
        y: 78,
      },
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
      {
        id: "A",
        label: "Base Class",
        sub: "A",
        x: 50,
        y: 10,
      },
      {
        id: "B",
        label: "Intermediate",
        sub: "B",
        x: 50,
        y: 50,
      },
      {
        id: "C",
        label: "Derived Class",
        sub: "C",
        x: 50,
        y: 90,
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
      {
        id: "A",
        label: "Base Class",
        sub: "A",
        x: 25,
        y: 15,
      },
      {
        id: "B",
        label: "Base Class",
        sub: "B",
        x: 75,
        y: 15,
      },
      {
        id: "C",
        label: "Derived Class",
        sub: "C",
        x: 50,
        y: 80,
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
      {
        id: "A",
        label: "Base Class",
        sub: "Animal",
        x: 50,
        y: 15,
      },
      {
        id: "B",
        label: "Derived Class",
        sub: "Dog",
        x: 25,
        y: 80,
      },
      {
        id: "C",
        label: "Derived Class",
        sub: "Cat",
        x: 75,
        y: 80,
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
      {
        id: "A",
        label: "Base Class",
        sub: "A",
        x: 50,
        y: 8,
      },
      {
        id: "B",
        label: "Derived Class",
        sub: "B",
        x: 25,
        y: 45,
      },
      {
        id: "C",
        label: "Derived Class",
        sub: "C",
        x: 75,
        y: 45,
      },
      {
        id: "D",
        label: "Final Class",
        sub: "D",
        x: 50,
        y: 88,
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
   ACCESS SPECIFIER DATA
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

const classCode = `#include <iostream>
using namespace std;

class Student {
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
      text:
        "The constructor is automatically called when an object is created.",
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
   ACCESS EXAMPLE CODE
===================================================== */

const accessExampleCode = {
  public: `class Animal {
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
}`,

  protected: `class Animal {
protected:

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
}`,

  private: `class Animal {
private:

    void eat() {
        cout << "Eating";
    }

public:

    void show() {
        cout << "Animal";
    }
};

class Dog : private Animal {

public:

    void display() {
        show();
    }
};

int main() {

    Dog d;

    d.display();

    return 0;
}`,
};

/* =====================================================
   C++ PAGE
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
     SCROLL
  ===================================================== */

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

  /* =====================================================
     SELECT TYPE
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

    scrollToSection("inheritance-playground");
  };

  /* =====================================================
     PREVIOUS
  ===================================================== */

  const handlePrevious = () => {
    const previousIndex =
      (currentIndex - 1 + types.length) %
      types.length;

    selectType(types[previousIndex]);

    scrollToSection("inheritance-playground");
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
    }, 650);
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

  /* =====================================================
     RENDER
  ===================================================== */

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
            Learn classes, objects, constructors,
            inheritance and access specifiers through
            interactive examples and visual programming.
          </p>

        </section>

        {/* =================================================
            CLASS & OBJECT
        ================================================= */}

        <section
          id="class-object-section"
          className="cpp-card cpp-class-object"
        >

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
            CONSTRUCTORS
        ================================================= */}

        <section
          id="constructor-section"
          className="cpp-card cpp-constructor-section"
        >

          <div className="cpp-section-heading">

            <span className="cpp-section-icon">
              ⚙️
            </span>

            <div>

              <span className="cpp-mini-label">
                C++ FUNDAMENTALS
              </span>

              <h2>
                Constructors
              </h2>

              <p>
                Special member functions that are
                automatically called when objects are
                created.
              </p>

            </div>

          </div>

          {/* =================================================
              CONSTRUCTOR RULES
          ================================================= */}

          <div className="cpp-constructor-rules">

            <div className="cpp-card-title">

              <div>

                <span className="cpp-mini-label">
                  CORE CONCEPT
                </span>

                <h3>
                  Constructor Rules
                </h3>

              </div>

            </div>

            <div className="cpp-rules-grid">

              {constructorData.rules.map(
                (rule) => (

                  <div
                    className="cpp-rule-card"
                    key={rule.number}
                  >

                    <div className="cpp-rule-number">
                      {rule.number}
                    </div>

                    <div>

                      <h4>
                        {rule.title}
                      </h4>

                      <p>
                        {rule.text}
                      </p>

                    </div>

                  </div>

                )
              )}

            </div>

            <div className="cpp-info-banner">

              <span>
                💡
              </span>

              <div>

                <strong>
                  Why are constructors useful?
                </strong>

                <p>
                  Constructors initialize objects at
                  creation time and make it easier to
                  assign initial values to data members.
                </p>

              </div>

            </div>

          </div>

          {/* =================================================
              CONSTRUCTOR EXAMPLES
          ================================================= */}

          <div className="cpp-constructor-examples">

            {/* BASIC */}

            <div className="cpp-constructor-example">

              <div className="cpp-example-heading">

                <div>

                  <span>
                    EXAMPLE 01
                  </span>

                  <h3>
                    Basic Constructor
                  </h3>

                </div>

                <strong>
                  C++
                </strong>

              </div>

              <pre>
                <code>
                  {constructorData.basicCode}
                </code>
              </pre>

            </div>

            {/* PARAMETERIZED */}

            <div className="cpp-constructor-example">

              <div className="cpp-example-heading">

                <div>

                  <span>
                    EXAMPLE 02
                  </span>

                  <h3>
                    Parameterized Constructor
                  </h3>

                </div>

                <strong>
                  C++
                </strong>

              </div>

              <pre>
                <code>
                  {constructorData.parameterCode}
                </code>
              </pre>

            </div>

            {/* OVERLOADING */}

            <div className="cpp-constructor-example">

              <div className="cpp-example-heading">

                <div>

                  <span>
                    EXAMPLE 03
                  </span>

                  <h3>
                    Constructor Overloading
                  </h3>

                </div>

                <strong>
                  C++
                </strong>

              </div>

              <pre>
                <code>
                  {constructorData.overloadCode}
                </code>
              </pre>

            </div>

            {/* OUTSIDE CLASS */}

            <div className="cpp-constructor-example">

              <div className="cpp-example-heading">

                <div>

                  <span>
                    EXAMPLE 04
                  </span>

                  <h3>
                    Constructor Outside Class
                  </h3>

                </div>

                <strong>
                  C++
                </strong>

              </div>

              <pre>
                <code>
                  {constructorData.outsideCode}
                </code>
              </pre>

            </div>

          </div>

        </section>

        {/* =================================================
            INHERITANCE TYPES
        ================================================= */}

        <section
          id="inheritance-section"
          className="cpp-types"
        >

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
                onClick={() => {
                  selectType(type);
                  scrollToSection(
                    "inheritance-playground"
                  );
                }}
              >
                {type}
              </button>

            ))}

          </div>

        </section>

        {/* =================================================
            INHERITANCE PLAYGROUND
        ================================================= */}

        <section
          id="inheritance-playground"
          className="cpp-playground"
        >

          {/* DESCRIPTION */}

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

                <defs>

                  <marker
                    id="cpp-arrow"
                    markerWidth="7"
                    markerHeight="7"
                    refX="5"
                    refY="3.5"
                    orient="auto"
                  >

                    <path
                      d="M0,0 L7,3.5 L0,7 Z"
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
                        y2={end.y - 9}
                        stroke="currentColor"
                        strokeWidth="0.65"
                        markerEnd="url(#cpp-arrow)"
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

                    {node.sub && (
                      <small>
                        {node.sub}
                      </small>
                    )}

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

                <button
                  onClick={() =>
                    setSelectedNode(null)
                  }
                >
                  ×
                </button>

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
            HOW INHERITANCE WORKS
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
            ACCESS SPECIFIERS
        ================================================= */}

        <section
          id="access-section"
          className="cpp-card cpp-access-card"
        >

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

          {/* ACCESS TABS */}

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

          {/* VISIBILITY */}

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

          {/* ACCESS DETAIL */}

          <div className="cpp-access-detail">

            <h3>
              Where can it be accessed?
            </h3>

            <p>
              {access.description}
            </p>

            <pre>
              <code>
                {accessExampleCode[accessType]}
              </code>
            </pre>

          </div>

        </section>

        {/* =================================================
            INHERITANCE SYNTAX
        ================================================= */}

        <section className="cpp-card cpp-syntax-card">

          <span className="cpp-mini-label">
            C++ SYNTAX
          </span>

          <h2>
            Basic C++ Inheritance Syntax
          </h2>

          <p>
            The following syntax is used to create a
            derived class from a base class.
          </p>

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

        {/* =================================================
            QUICK CONCEPT SUMMARY
        ================================================= */}

        <section className="cpp-card cpp-summary-card">

          <div className="cpp-card-title">

            <span>
              📚
            </span>

            <div>

              <h2>
                C++ OOP Quick Summary
              </h2>

              <p>
                Important concepts covered in this
                learning page.
              </p>

            </div>

          </div>

          <div className="cpp-summary-grid">

            <div>
              <strong>
                Class
              </strong>

              <span>
                Blueprint for creating objects.
              </span>
            </div>

            <div>
              <strong>
                Object
              </strong>

              <span>
                Instance of a class.
              </span>
            </div>

            <div>
              <strong>
                Constructor
              </strong>

              <span>
                Initializes an object automatically.
              </span>
            </div>

            <div>
              <strong>
                Inheritance
              </strong>

              <span>
                Allows a class to acquire members from
                another class.
              </span>
            </div>

            <div>
              <strong>
                Public
              </strong>

              <span>
                Public members remain public.
              </span>
            </div>

            <div>
              <strong>
                Protected
              </strong>

              <span>
                Members become protected.
              </span>
            </div>

            <div>
              <strong>
                Private
              </strong>

              <span>
                Members become private.
              </span>
            </div>

            <div>
              <strong>
                Virtual Inheritance
              </strong>

              <span>
                Helps solve the diamond problem.
              </span>
            </div>

          </div>

        </section>

      </main>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="cpp-footer">

        <div>
          <strong>
            C++ Learning Lab
          </strong>

          <span>
            Interactive OOP Visualizer
          </span>
        </div>

        <Link to="/feedback">
          Send Feedback →
        </Link>

      </footer>

    </div>
  );
}

export default CppPage;
