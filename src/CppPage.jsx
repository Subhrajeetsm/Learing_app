import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CppPage.css";

const inheritanceData = {
  Single: {
    description:
      "One derived class inherits properties and behaviors from one base class.",

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

function CppPage() {
  const types = Object.keys(inheritanceData);

  const [selectedType, setSelectedType] =
    useState("Single");

  const [output, setOutput] = useState([]);

  const [running, setRunning] =
    useState(false);

  const current =
    inheritanceData[selectedType];

  const runCode = () => {
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

  const reset = () => {
    setOutput([]);
    setRunning(false);
  };

  return (
    <div className="cpp-page">

      {/* HEADER */}

      <header className="cpp-header">

        <Link to="/" className="cpp-brand">

          <div className="cpp-logo">
            C++
          </div>

          <div>
            <strong>C++ Learning Lab</strong>
            <span>Interactive OOP Visualizer</span>
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

      {/* MAIN */}

      <main className="cpp-container">

        <section className="cpp-hero">

          <span>
            C++ OBJECT ORIENTED PROGRAMMING
          </span>

          <h1>
            C++ Inheritance Visualizer
          </h1>

          <p>
            Learn inheritance through interactive
            examples and visual programming.
          </p>

        </section>

        {/* INHERITANCE TYPES */}

        <section className="cpp-types">

          <h2>
            Inheritance Types
          </h2>

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
                  setSelectedType(type);
                  setOutput([]);
                }}
              >
                {type}
              </button>

            ))}

          </div>

        </section>

        {/* PLAYGROUND */}

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

          </div>

          <div className="cpp-code-card">

            <div className="cpp-code-header">

              <strong>
                main.cpp
              </strong>

              <span>
                C++
              </span>

            </div>

            <pre>
              <code>
                {current.code}
              </code>
            </pre>

            <button
              className="cpp-run"
              onClick={runCode}
              disabled={running}
            >
              {running
                ? "Running..."
                : "▶ Run Example"}
            </button>

          </div>

          {/* OUTPUT */}

          <div className="cpp-output">

            <div className="cpp-output-header">
              <strong>OUTPUT</strong>

              <button onClick={reset}>
                Reset
              </button>
            </div>

            <div className="cpp-terminal">

              {output.length === 0 ? (

                <span>
                  Run the example to see output...
                </span>

              ) : (

                output.map((line, index) => (
                  <div key={index}>
                    $ {line}
                  </div>
                ))

              )}

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default CppPage;