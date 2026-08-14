import React, { useState } from "react";
import "./App.css";

const inheritanceData = {
  Single: {
    description:
      "One derived class inherits from one base class.",
    diagram: [
      { id: "A", label: "Base Class A", x: 50, y: 10 },
      { id: "B", label: "Derived Class B", x: 50, y: 70 },
    ],
    arrows: [["A", "B"]],
    code: `class Animal {
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
};`,
    output: ["Animal eats", "Dog barks"],
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
    code: `class A {
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
};`,
    output: ["Class A", "Class B", "Class C"],
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
    code: `class A {
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
};`,
    output: ["A", "B", "C"],
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
    code: `class Animal {
public:
    void eat() {
        cout << "Eating";
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "Barking";
    }
};

class Cat : public Animal {
public:
    void meow() {
        cout << "Meowing";
    }
};`,
    output: ["Animal eats", "Dog barks", "Cat meows"],
  },

  Hybrid: {
    description:
      "A combination of two or more types of inheritance.",
    diagram: [
      { id: "A", label: "Class A", x: 50, y: 5 },
      { id: "B", label: "Class B", x: 25, y: 40 },
      { id: "C", label: "Class C", x: 75, y: 40 },
      { id: "D", label: "Class D", x: 50, y: 85 },
    ],
    arrows: [
      ["A", "B"],
      ["A", "C"],
      ["B", "D"],
      ["C", "D"],
    ],
    code: `class A {
public:
    void showA() {
        cout << "A";
    }
};

class B : public A {
};

class C : public A {
};

class D : public B, public C {
};`,
    output: ["A", "B", "C", "D"],
  },
};

const accessData = {
  public: {
    title: "Public Inheritance",
    description:
      "Public members of the base class remain public in the derived class.",
    example: "class Dog : public Animal {}",
    visibility: [
      ["Base public", "Public"],
      ["Base protected", "Protected"],
      ["Base private", "Not directly accessible"],
    ],
  },

  protected: {
    title: "Protected Inheritance",
    description:
      "Public and protected members of the base class become protected in the derived class.",
    example: "class Dog : protected Animal {}",
    visibility: [
      ["Base public", "Protected"],
      ["Base protected", "Protected"],
      ["Base private", "Not directly accessible"],
    ],
  },

  private: {
    title: "Private Inheritance",
    description:
      "Public and protected members of the base class become private in the derived class.",
    example: "class Dog : private Animal {}",
    visibility: [
      ["Base public", "Private"],
      ["Base protected", "Private"],
      ["Base private", "Not directly accessible"],
    ],
  },
};

function App() {
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

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % types.length;
    setSelectedType(types[nextIndex]);
    setOutput([]);
    setSelectedNode(null);
  };

  const handlePrevious = () => {
    const prevIndex =
      (currentIndex - 1 + types.length) % types.length;

    setSelectedType(types[prevIndex]);
    setOutput([]);
    setSelectedNode(null);
  };

  const handleRun = () => {
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
      <header className="header">
        <div className="logo">C++</div>

        <div>
          <h1>C++ Inheritance Visualizer</h1>
          <p>
            Learn how classes inherit properties and functions from
            other classes.
          </p>
        </div>
      </header>

      <div className="main-container">

        {/* LEFT PANEL */}
        <aside className="sidebar">
          <h2>Inheritance Types</h2>

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
              }}
            >
              {type}
            </button>
          ))}

          <div className="sidebar-divider"></div>

          <h2>Access Specifier</h2>

          {Object.keys(accessData).map((type) => (
            <button
              key={type}
              className={
                accessType === type
                  ? "access-btn active"
                  : "access-btn"
              }
              onClick={() => setAccessType(type)}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </aside>

        {/* MAIN */}
        <main className="content">

          {/* TOP INFO */}
          <section className="hero">
            <div>
              <span className="badge">{selectedType} Inheritance</span>

              <h2>{selectedType} Inheritance</h2>

              <p>{current.description}</p>
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
                <h3>Inheritance Diagram</h3>

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
                  {current.arrows.map(([from, to], index) => {
                    const start = current.diagram.find(
                      (node) => node.id === from
                    );

                    const end = current.diagram.find(
                      (node) => node.id === to
                    );

                    if (!start || !end) return null;

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
                  })}

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

                {current.diagram.map((node) => (
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
                    onClick={() => setSelectedNode(node.id)}
                  >
                    <strong>{node.id}</strong>

                    <span>{node.label}</span>
                  </button>
                ))}
              </div>

              {selectedNode && (
                <div className="node-info">
                  <strong>Selected Class:</strong> {selectedNode}
                  <br />
                  Click another class to inspect it.
                </div>
              )}
            </div>

            {/* CODE */}
            <div className="card code-card">

              <div className="card-header">
                <h3>C++ Example</h3>

                <button
                  className="small-btn"
                  onClick={() => setShowCode(!showCode)}
                >
                  {showCode ? "Hide Code" : "Show Code"}
                </button>
              </div>

              {showCode && (
                <>
                  <pre>
                    <code>{current.code}</code>
                  </pre>

                  <button
                    className="run-btn"
                    onClick={handleRun}
                    disabled={running}
                  >
                    {running ? "Running..." : "▶ Run Example"}
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
                  output.map((line, index) => (
                    <div key={index}>
                      {">"} {line}
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>

          {/* EXPLANATION */}
          <section className="card explanation">

            <div className="card-header">
              <h3>How It Works</h3>
            </div>

            <div className="explanation-grid">

              <div>
                <div className="step">01</div>
                <h4>Base Class</h4>

                <p>
                  The parent class contains common properties
                  and functions.
                </p>
              </div>

              <div>
                <div className="step">02</div>
                <h4>Inheritance</h4>

                <p>
                  The derived class receives accessible members
                  from the base class.
                </p>
              </div>

              <div>
                <div className="step">03</div>
                <h4>Derived Class</h4>

                <p>
                  The child class can add its own functions
                  and data members.
                </p>
              </div>

            </div>
          </section>

          {/* ACCESS SPECIFIER */}
          <section className="card access-card">

            <div className="card-header">
              <div>
                <h3>{access.title}</h3>
                <p>{access.description}</p>
              </div>

              <span className="syntax">
                {access.example}
              </span>
            </div>

            <div className="visibility-grid">
              {access.visibility.map(([from, to]) => (
                <div className="visibility-box" key={from}>
                  <span>{from}</span>
                  <strong>→</strong>
                  <span className={`visibility ${to.toLowerCase()}`}>
                    {to}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* SYNTAX */}
          <section className="card syntax-card">

            <h3>Basic C++ Inheritance Syntax</h3>

            <pre>
              <code>
{`class DerivedClass : access_specifier BaseClass {
    
    // members of derived class

};`}
              </code>
            </pre>

          </section>

        </main>
      </div>

      <footer>
        C++ Inheritance Visualizer • React
      </footer>
    </div>
  );
}

export default App;