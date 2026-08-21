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
      { id: "A", label: "Base Class", sub: "Animal", x: 50, y: 18 },
      { id: "B", label: "Derived Class", sub: "Dog", x: 50, y: 78 },
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

    output: ["Animal eats", "Dog barks"],
  },

  Multilevel: {
    description:
      "A derived class becomes the base class for another derived class.",

    diagram: [
      { id: "A", label: "Base Class", sub: "A", x: 50, y: 10 },
      { id: "B", label: "Intermediate", sub: "B", x: 50, y: 50 },
      { id: "C", label: "Derived Class", sub: "C", x: 50, y: 90 },
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

    output: ["Class A", "Class B", "Class C"],
  },

  Multiple: {
    description:
      "One derived class inherits from two or more base classes.",

    diagram: [
      { id: "A", label: "Base Class", sub: "A", x: 25, y: 15 },
      { id: "B", label: "Base Class", sub: "B", x: 75, y: 15 },
      { id: "C", label: "Derived Class", sub: "C", x: 50, y: 80 },
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

    output: ["A", "B", "C"],
  },

  Hierarchical: {
    description:
      "Multiple derived classes inherit from the same base class.",

    diagram: [
      { id: "A", label: "Base Class", sub: "Animal", x: 50, y: 15 },
      { id: "B", label: "Derived Class", sub: "Dog", x: 25, y: 80 },
      { id: "C", label: "Derived Class", sub: "Cat", x: 75, y: 80 },
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
      { id: "A", label: "Base Class", sub: "A", x: 50, y: 8 },
      { id: "B", label: "Derived Class", sub: "B", x: 25, y: 45 },
      { id: "C", label: "Derived Class", sub: "C", x: 75, y: 45 },
      { id: "D", label: "Final Class", sub: "D", x: 50, y: 88 },
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

    output: ["Class A", "Class B", "Class C", "Class D"],
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
      "Protected inheritance makes public and protected members protected in the derived class.",
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
      "Private inheritance makes public and protected members private in the derived class.",
    example: "class Dog : private Animal",
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
    Student s("Rahul",20);
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
   SIDEBAR ITEM COMPONENT
===================================================== */

function SidebarItem({
  active,
  icon,
  title,
  subtitle,
  onClick,
}) {
  return (
    <button
      className={`sidebar-item ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <span className="sidebar-item-icon">{icon}</span>

      <span className="sidebar-item-content">
        <strong>{title}</strong>
        {subtitle && <small>{subtitle}</small>}
      </span>

      <span className="sidebar-item-arrow">›</span>
    </button>
  );
}

/* =====================================================
   CPP PAGE COMPONENT
===================================================== */

function CppPage() {
  const types = Object.keys(inheritanceData);

  const [selectedType, setSelectedType] = useState("Single");
  const [showCode, setShowCode] = useState(true);
  const [running, setRunning] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [output, setOutput] = useState([]);
  const [accessType, setAccessType] = useState("public");
  const [selectedNode, setSelectedNode] = useState(null);

  const current = inheritanceData[selectedType];
  const access = accessData[accessType];
  const currentIndex = types.indexOf(selectedType);

  /* =====================================================
     SCROLL TO SECTION
  ===================================================== */

  const scrollToSection = (id) => {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

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
     NEXT / PREVIOUS
  ===================================================== */

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % types.length;

    selectType(types[nextIndex]);
    scrollToSection("inheritance-section");
  };

  const handlePrevious = () => {
    const prevIndex =
      (currentIndex - 1 + types.length) % types.length;

    selectType(types[prevIndex]);
    scrollToSection("inheritance-section");
  };

  /* =====================================================
     RUN OUTPUT
  ===================================================== */

  const handleRun = () => {
    if (running) return;

    setRunning(true);
    setOutput([]);

    let index = 0;

    const timer = setInterval(() => {
      setOutput((prev) => [...prev, current.output[index]]);
      index++;

      if (index >= current.output.length) {
        clearInterval(timer);
        setRunning(false);
      }
    }, 650);
  };

  /* =====================================================
     RESET PLAYGROUND
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
     RETURN JSX STARTS HERE
  ===================================================== */

  return (
    <div className="app">
      {/* ================= HEADER ================= */}

      <header className="top-header">
        <Link to="/" className="brand">
          <div className="brand-mark">C++</div>

          <div className="brand-text">
            <strong>C++ Learning Lab</strong>
            <span>Interactive OOP Playground</span>
          </div>
        </Link>

        <div className="header-center">
          <span className="header-status-dot"></span>
          Interactive Learning Environment
        </div>

        <div className="header-actions">
          <Link to="/feedback" className="header-feedback">
            <span>💬</span>
            Feedback
          </Link>
        </div>
      </header>

      {/* ================= WORKSPACE ================= */}

      <div className="workspace">
        {/* ================= SIDEBAR ================= */}

        <aside className="learning-sidebar">
          <div className="sidebar-heading">
            <div>
              <span className="eyebrow">LEARNING PATH</span>
              <h2>C++ OOP</h2>
            </div>
          </div>

          {/* Fundamentals */}

          <div className="sidebar-group">
            <div className="sidebar-group-title">
              Fundamentals
            </div>

            <SidebarItem
              icon="▣"
              title="Class & Object"
              subtitle="C++ fundamentals"
              onClick={() =>
                scrollToSection("class-object-section")
              }
            />

            <SidebarItem
              icon="◇"
              title="Constructors"
              subtitle="Object initialization"
              onClick={() =>
                scrollToSection("constructor-section")
              }
            />
          </div>

          {/* Inheritance */}

          <div className="sidebar-group">
            <div className="sidebar-group-title">
              Inheritance
            </div>

            {types.map((type, index) => (
              <SidebarItem
                key={type}
                active={selectedType === type}
                icon={
                  index === 0
                    ? "↳"
                    : index === 1
                    ? "⇣"
                    : index === 2
                    ? "⊕"
                    : index === 3
                    ? "⑂"
                    : "◇"
                }
                title={type}
                subtitle={
                  type === "Single"
                    ? "One base → one derived"
                    : type === "Multilevel"
                    ? "Chain inheritance"
                    : type === "Multiple"
                    ? "Multiple base classes"
                    : type === "Hierarchical"
                    ? "One base → many"
                    : "Combined inheritance"
                }
                onClick={() => {
                  selectType(type);
                  scrollToSection("inheritance-section");
                }}
              />
            ))}
          </div>

          {/* Access Specifiers */}

          <div className="sidebar-group">
            <div className="sidebar-group-title">
              Access Specifiers
            </div>

            {Object.keys(accessData).map((type) => (
              <SidebarItem
                key={type}
                active={accessType === type}
                icon={
                  type === "public"
                    ? "🌐"
                    : type === "protected"
                    ? "◈"
                    : "🔒"
                }
                title={
                  type.charAt(0).toUpperCase() +
                  type.slice(1)
                }
                subtitle={
                  type === "public"
                    ? "Accessible interface"
                    : type === "protected"
                    ? "Family access"
                    : "Restricted access"
                }
                onClick={() => {
                  setAccessType(type);
                  scrollToSection("access-section");
                }}
              />
            ))}
          </div>

          {/* Bottom Sidebar */}

          <div className="sidebar-bottom">
            <div className="sidebar-tip">
              <span className="tip-icon">💡</span>

              <div>
                <strong>Learning Tip</strong>

                <p>
                  Click a class in the diagram to inspect
                  it.
                </p>
              </div>
            </div>

            <Link
              to="/feedback"
              className="sidebar-feedback"
            >
              💬 Send Feedback
            </Link>

            <Link to="/about" className="about-btn">
              About Us
            </Link>
          </div>
        </aside>

        {/* CONTENT STARTS IN PART 3 */}
        <main className="learning-content">


                     {/* =================================================
              PAGE INTRO
          ================================================= */}

          <section className="page-intro">
            <div>
              <span className="intro-label">
                C++ OBJECT ORIENTED PROGRAMMING
              </span>

              <h1>
                Understand OOP
                <span> visually.</span>
              </h1>

              <p>
                Explore classes, objects, constructors,
                inheritance and access specifiers through
                interactive examples.
              </p>
            </div>

            <div className="intro-decoration">
              <div className="code-symbol">{"{ }"}</div>

              <div className="floating-dot dot-one"></div>
              <div className="floating-dot dot-two"></div>
              <div className="floating-dot dot-three"></div>
            </div>
          </section>

          {/* =================================================
              CLASS & OBJECT
          ================================================= */}

          <section
            id="class-object-section"
            className="learning-section"
          >
            <div className="section-heading">
              <div className="section-number">01</div>

              <div>
                <span className="section-kicker">
                  FUNDAMENTALS
                </span>

                <h2>Class & Object</h2>

                <p>
                  A class is a blueprint for objects,
                  while an object is an instance of a
                  class.
                </p>
              </div>
            </div>

            <div className="fundamental-grid">
              {/* CLASS */}

              <article className="learning-card concept-card">
                <div className="concept-top">
                  <span className="concept-icon">
                    ◫
                  </span>

                  <span className="concept-tag">
                    BLUEPRINT
                  </span>
                </div>

                <h3>Class</h3>

                <p>
                  A class defines the data members and
                  functions that every object created
                  from it will contain.
                </p>

                <pre>{`class Student {
public:
    string name;

    void display() {
        cout << name;
    }
};`}</pre>
              </article>

              {/* OBJECT */}

              <article className="learning-card concept-card">
                <div className="concept-top">
                  <span className="concept-icon">
                    ●
                  </span>

                  <span className="concept-tag">
                    INSTANCE
                  </span>
                </div>

                <h3>Object</h3>

                <p>
                  An object is an instance of a class
                  that can access its public members.
                </p>

                <pre>{`int main() {

    Student s;

    s.name = "Rahul";

    s.display();

    return 0;
}`}</pre>
              </article>
            </div>
          </section>

          {/* =================================================
              CONSTRUCTORS
          ================================================= */}

          <section
            id="constructor-section"
            className="learning-section"
          >
            <div className="section-heading">
              <div className="section-number">02</div>

              <div>
                <span className="section-kicker">
                  FUNDAMENTALS
                </span>

                <h2>Constructors</h2>

                <p>
                  Special member functions that are
                  automatically called when an object is
                  created.
                </p>
              </div>
            </div>

            {/* RULES */}

            <div className="learning-card constructor-main">
              <div className="subsection-heading">
                <div>
                  <span className="mini-label">
                    CORE CONCEPT
                  </span>

                  <h3>Constructor Rules</h3>
                </div>
              </div>

              <div className="rules-grid">
                {constructorData.rules.map((rule) => (
                  <div
                    className="rule-card"
                    key={rule.number}
                  >
                    <div className="rule-number">
                      {rule.number}
                    </div>

                    <div>
                      <h4>{rule.title}</h4>

                      <p>{rule.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="info-banner">
                <div className="info-icon">
                  💡
                </div>

                <div>
                  <strong>
                    Why are constructors useful?
                  </strong>

                  <p>
                    Constructors initialize objects at
                    creation time and assign default or
                    custom values to data members.
                  </p>
                </div>
              </div>
            </div>

            {/* CODE EXAMPLES */}

            <div className="example-stack">

              {/* BASIC */}

              <div className="learning-card code-example-card">
                <div className="code-example-header">
                  <div>
                    <span>EXAMPLE 01</span>

                    <h3>Basic Constructor</h3>
                  </div>

                  <div className="code-language">
                    C++
                  </div>
                </div>

                <pre>
                  <code>
                    {constructorData.basicCode}
                  </code>
                </pre>
              </div>

              {/* PARAMETERIZED */}

              <div className="learning-card code-example-card">
                <div className="code-example-header">
                  <div>
                    <span>EXAMPLE 02</span>

                    <h3>
                      Parameterized Constructor
                    </h3>
                  </div>

                  <div className="code-language">
                    C++
                  </div>
                </div>

                <pre>
                  <code>
                    {constructorData.parameterCode}
                  </code>
                </pre>
              </div>

              {/* OVERLOADING */}

              <div className="learning-card code-example-card">
                <div className="code-example-header">
                  <div>
                    <span>EXAMPLE 03</span>

                    <h3>
                      Constructor Overloading
                    </h3>
                  </div>

                  <div className="code-language">
                    C++
                  </div>
                </div>

                <pre>
                  <code>
                    {constructorData.overloadCode}
                  </code>
                </pre>
              </div>

              {/* OUTSIDE CLASS */}

              <div className="learning-card code-example-card">
                <div className="code-example-header">
                  <div>
                    <span>EXAMPLE 04</span>

                    <h3>
                      Constructor Outside Class
                    </h3>
                  </div>

                  <div className="code-language">
                    C++
                  </div>
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
              PART 4 STARTS WITH INHERITANCE PLAYGROUND
          ================================================= */}

                     {/* =================================================
              INHERITANCE PLAYGROUND
          ================================================= */}

          <section
            id="inheritance-section"
            className="inheritance-section"
          >
            <div className="inheritance-heading">
              <div>
                <span className="section-kicker">
                  INTERACTIVE PLAYGROUND
                </span>

                <h2>{selectedType} Inheritance</h2>

                <p>{current.description}</p>
              </div>

              <div className="inheritance-badge">
                <span></span>
                Interactive
              </div>
            </div>

            {/* CONTROLS */}

            <div className="playground-controls">
              <button
                className="control-button secondary"
                onClick={handlePrevious}
              >
                <span>←</span>
                Previous
              </button>

              <button
                className="control-button secondary"
                onClick={handleNext}
              >
                Next
                <span>→</span>
              </button>

              <button
                className="control-button animate-button"
                onClick={handleAnimation}
              >
                <span>▶</span>
                Animate
              </button>

              <button
                className="control-button reset-button"
                onClick={handleReset}
              >
                <span>↻</span>
                Reset
              </button>
            </div>

            {/* PLAYGROUND GRID */}

            <div className="playground-grid">

              {/* DIAGRAM CARD */}

              <div className="playground-card">
                <div className="playground-card-header">
                  <div>
                    <span className="card-kicker">
                      VISUALIZATION
                    </span>

                    <h3>Inheritance Diagram</h3>
                  </div>

                  <span className="class-count">
                    {current.diagram.length} Classes
                  </span>
                </div>

                <div
                  className={
                    animation
                      ? "inheritance-diagram animated"
                      : "inheritance-diagram"
                  }
                >
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="diagram-lines"
                  >
                    <defs>
                      <marker
                        id="arrow-head"
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

                    {current.arrows.map(([from, to], index) => {
                      const start = current.diagram.find(
                        (node) => node.id === from
                      );

                      const end = current.diagram.find(
                        (node) => node.id === to
                      );

                      return (
                        <line
                          key={index}
                          x1={start.x}
                          y1={start.y + 9}
                          x2={end.x}
                          y2={end.y - 9}
                          stroke="currentColor"
                          strokeWidth="0.65"
                          markerEnd="url(#arrow-head)"
                        />
                      );
                    })}
                  </svg>

                  {current.diagram.map((node) => (
                    <button
                      key={node.id}
                      className={
                        selectedNode === node.id
                          ? "diagram-node selected"
                          : "diagram-node"
                      }
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                      }}
                      onClick={() =>
                        setSelectedNode(node.id)
                      }
                    >
                      <span className="node-letter">
                        {node.id}
                      </span>

                      <span className="node-label">
                        {node.label}
                      </span>

                      <span className="node-sub">
                        {node.sub}
                      </span>
                    </button>
                  ))}
                </div>

                {selectedNode && (
                  <div className="selected-node-info">
                    <div className="selected-node-icon">
                      {selectedNode}
                    </div>

                    <div>
                      <span>SELECTED CLASS</span>

                      <strong>Class {selectedNode}</strong>
                    </div>

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

              {/* CODE PLAYGROUND */}

              <div className="playground-card code-playground">
                <div className="playground-card-header">
                  <div>
                    <span className="card-kicker">
                      CODE EDITOR
                    </span>

                    <h3>C++ Example</h3>
                  </div>

                  <button
                    className="code-toggle"
                    onClick={() =>
                      setShowCode(!showCode)
                    }
                  >
                    {showCode ? "Hide" : "Show"}
                  </button>
                </div>

                {showCode && (
                  <>
                    <div className="code-window">
                      <div className="code-window-bar">
                        <div className="window-dots">
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>

                        <span>main.cpp</span>

                        <span className="cpp-label">
                          C++
                        </span>
                      </div>

                      <pre>
                        <code>{current.code}</code>
                      </pre>
                    </div>

                    <button
                      className="run-example"
                      onClick={handleRun}
                      disabled={running}
                    >
                      {running ? (
                        <>
                          <span className="run-spinner"></span>
                          Running...
                        </>
                      ) : (
                        <>
                          <span>▶</span>
                          Run Example
                        </>
                      )}
                    </button>
                  </>
                )}

                {/* TERMINAL */}

                <div className="terminal">
                  <div className="terminal-header">
                    <span>OUTPUT</span>

                    <span className="terminal-status">
                      ● Ready
                    </span>
                  </div>

                  <div className="terminal-body">
                    {output.length === 0 ? (
                      <span className="terminal-placeholder">
                        Run the example to see the output...
                      </span>
                    ) : (
                      output.map((line, index) => (
                        <div
                          key={index}
                          className="terminal-line"
                        >
                          <span>$</span>
                          {line}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* HOW IT WORKS */}

            <div className="how-it-works">
              <div className="how-heading">
                <div>
                  <span className="card-kicker">
                    CONCEPT
                  </span>

                  <h3>How Inheritance Works</h3>
                </div>
              </div>

              <div className="how-grid">
                <div className="how-card">
                  <span className="how-number">
                    01
                  </span>

                  <div>
                    <h4>Base Class</h4>

                    <p>
                      The parent class contains common
                      properties and functions.
                    </p>
                  </div>
                </div>

                <div className="how-card">
                  <span className="how-number">
                    02
                  </span>

                  <div>
                    <h4>Inheritance</h4>

                    <p>
                      The derived class receives
                      accessible members from the base
                      class.
                    </p>
                  </div>
                </div>

                <div className="how-card">
                  <span className="how-number">
                    03
                  </span>

                  <div>
                    <h4>Derived Class</h4>

                    <p>
                      The child class can add its own
                      functions and data members.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </section>

                     {/* =================================================
              ACCESS SPECIFIERS
          ================================================= */}

          <section
            id="access-section"
            className="learning-section"
          >
            <div className="section-heading">
              <div className="section-number">03</div>

              <div>
                <span className="section-kicker">
                  ACCESS CONTROL
                </span>

                <h2>Access Specifiers</h2>

                <p>
                  Control how inherited members are exposed
                  inside a derived class.
                </p>
              </div>
            </div>

            <div className="learning-card access-main">

              <div className="access-top">
                <div>
                  <span className="access-pill">
                    {accessType.toUpperCase()}
                  </span>

                  <h3>{access.title}</h3>

                  <p>{access.description}</p>
                </div>

                <code>{access.example}</code>
              </div>

              {/* ACCESS BUTTONS */}

              <div className="access-options">
                {Object.keys(accessData).map((type) => (
                  <button
                    key={type}
                    className={
                      accessType === type
                        ? "access-option active"
                        : "access-option"
                    }
                    onClick={() => setAccessType(type)}
                  >
                    <span>
                      {type === "public"
                        ? "🌐"
                        : type === "protected"
                        ? "◈"
                        : "🔒"}
                    </span>

                    <strong>
                      {type.charAt(0).toUpperCase() +
                        type.slice(1)}
                    </strong>
                  </button>
                ))}
              </div>

              {/* VISIBILITY TABLE */}

              <div className="visibility-table">
                <div className="visibility-header">
                  <span>Base Member</span>
                  <span>Derived Class</span>
                </div>

                {access.visibility.map(([from, to]) => (
                  <div
                    className="visibility-row"
                    key={from}
                  >
                    <span>{from}</span>

                    <span
                      className={`visibility-value ${to
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                    >
                      {to}
                    </span>
                  </div>
                ))}
              </div>

              <div className="access-note">
                <span>💡</span>

                <p>{access.description}</p>
              </div>

            </div>
          </section>

          {/* =================================================
              C++ INHERITANCE SYNTAX
          ================================================= */}

          <section className="learning-section">

            <div className="section-heading">
              <div className="section-number">04</div>

              <div>
                <span className="section-kicker">
                  QUICK REFERENCE
                </span>

                <h2>Inheritance Syntax</h2>

                <p>
                  The basic syntax used to create a derived
                  class in C++.
                </p>
              </div>
            </div>

            <div className="learning-card syntax-main">

              <div className="syntax-code">
                <div className="syntax-code-header">
                  <span>C++</span>
                  <span>Basic Syntax</span>
                </div>

                <pre>{`class DerivedClass : access_specifier BaseClass {

    // Members of derived class

};`}</pre>
              </div>

              <div className="syntax-examples">

                <div>
                  <span>PUBLIC</span>

                  <code>
                    class Dog : public Animal {};
                  </code>
                </div>

                <div>
                  <span>PROTECTED</span>

                  <code>
                    class Dog : protected Animal {};
                  </code>
                </div>

                <div>
                  <span>PRIVATE</span>

                  <code>
                    class Dog : private Animal {};
                  </code>
                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              QUICK SUMMARY
          ================================================= */}

          <section className="learning-section">

            <div className="section-heading">
              <div className="section-number">05</div>

              <div>
                <span className="section-kicker">
                  QUICK REVISION
                </span>

                <h2>C++ OOP Summary</h2>

                <p>
                  Revise all important concepts at a glance.
                </p>
              </div>
            </div>

            <div className="learning-card">

              <div className="how-grid">

                <div className="how-card">
                  <span className="how-number">📦</span>

                  <div>
                    <h4>Class</h4>

                    <p>
                      Blueprint for creating objects and
                      defining data members and methods.
                    </p>
                  </div>
                </div>

                <div className="how-card">
                  <span className="how-number">⚫</span>

                  <div>
                    <h4>Object</h4>

                    <p>
                      Instance of a class that can access
                      public members.
                    </p>
                  </div>
                </div>

                <div className="how-card">
                  <span className="how-number">⚙️</span>

                  <div>
                    <h4>Constructor</h4>

                    <p>
                      Automatically initializes an object
                      when it is created.
                    </p>
                  </div>
                </div>

                <div className="how-card">
                  <span className="how-number">↳</span>

                  <div>
                    <h4>Inheritance</h4>

                    <p>
                      Allows one class to acquire the
                      properties and behaviors of another
                      class.
                    </p>
                  </div>
                </div>

                <div className="how-card">
                  <span className="how-number">🌐</span>

                  <div>
                    <h4>Public</h4>

                    <p>
                      Public members remain public after
                      inheritance.
                    </p>
                  </div>
                </div>

                <div className="how-card">
                  <span className="how-number">🔒</span>

                  <div>
                    <h4>Protected / Private</h4>

                    <p>
                      Control the accessibility of inherited
                      members inside derived classes.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              FOOTER
          ================================================= */}

          <footer className="learning-footer">

            <div>
              <strong>C++ Learning Lab</strong>

              <span>
                Interactive OOP Visualizer
              </span>
            </div>

            <Link to="/feedback">
              Send Feedback →
            </Link>

          </footer>

        </main>

      </div>

    </div>
  );
}

export default CppPage;
