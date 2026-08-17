import React from "react";
import { Link } from "react-router-dom";
import "./PythonConcept.css";

function ListsTuples() {
  return (
    <div className="python-concept-page">

      {/* =====================================
          HEADER
      ====================================== */}

      <header className="python-concept-header">

        <Link to="/python" className="python-concept-back">
          ← Back to Python
        </Link>

        <div className="python-concept-brand">

          <div className="python-concept-icon">
            🐍
          </div>

          <div className="python-concept-brand-text">
            <strong>Python Learning</strong>
            <span>Lists, Tuples, Dictionaries & Sets</span>
          </div>

        </div>

      </header>


      <main className="python-concept-main">

        {/* =====================================
            HERO
        ====================================== */}

        <section className="python-concept-hero">

          <span className="python-concept-number">
            LESSON 07
          </span>

          <h1>Lists, Tuples & Collections</h1>

          <p>
            Learn how Python stores and manages multiple values
            using Lists, Tuples, Dictionaries, and Sets.
          </p>

        </section>


        {/* =====================================
            1. LIST
        ====================================== */}

        <section className="python-concept-card">

          <h2>📋 1. Lists</h2>

          <p>
            A <strong>list</strong> is an ordered and mutable
            collection of items. Lists are one of the most commonly
            used data structures in Python.
          </p>

          <h3 className="python-subheading">
            Creating a List
          </h3>

          <pre className="python-code">
            <code>{`fruits = ["Apple", "Mango", "Banana", "Orange"]

print(fruits)`}</code>
          </pre>

          <div className="python-output">

            <span className="python-output-title">
              Output
            </span>

            ['Apple', 'Mango', 'Banana', 'Orange']

          </div>


          <h3 className="python-subheading">
            Accessing List Elements
          </h3>

          <pre className="python-code">
            <code>{`fruits = ["Apple", "Mango", "Banana"]

print(fruits[0])
print(fruits[1])
print(fruits[2])`}</code>
          </pre>

          <div className="python-output">

            <span className="python-output-title">
              Output
            </span>

            Apple<br />
            Mango<br />
            Banana

          </div>


          <h3 className="python-subheading">
            Changing List Elements
          </h3>

          <pre className="python-code">
            <code>{`fruits = ["Apple", "Mango", "Banana"]

fruits[1] = "Orange"

print(fruits)`}</code>
          </pre>

          <div className="python-output">

            <span className="python-output-title">
              Output
            </span>

            ['Apple', 'Orange', 'Banana']

          </div>


          <h3 className="python-subheading">
            Adding Elements
          </h3>

          <pre className="python-code">
            <code>{`fruits = ["Apple", "Mango"]

fruits.append("Banana")
fruits.append("Orange")

print(fruits)`}</code>
          </pre>

          <div className="python-output">

            <span className="python-output-title">
              Output
            </span>

            ['Apple', 'Mango', 'Banana', 'Orange']

          </div>


          <h3 className="python-subheading">
            Removing Elements
          </h3>

          <pre className="python-code">
            <code>{`fruits = ["Apple", "Mango", "Banana"]

fruits.remove("Mango")

print(fruits)`}</code>
          </pre>

          <div className="python-output">

            <span className="python-output-title">
              Output
            </span>

            ['Apple', 'Banana']

          </div>


          <div className="python-key-points">

            <div className="python-key-point">
              ✓ Ordered
            </div>

            <div className="python-key-point">
              ✓ Mutable
            </div>

            <div className="python-key-point">
              ✓ Allows duplicates
            </div>

            <div className="python-key-point">
              ✓ Supports indexing
            </div>

          </div>

        </section>


        {/* =====================================
            2. TUPLE
        ====================================== */}

        <section className="python-concept-card">

          <h2>🔒 2. Tuples</h2>

          <p>
            A <strong>tuple</strong> is an ordered collection of
            values that cannot be changed after creation.
          </p>

          <h3 className="python-subheading">
            Creating a Tuple
          </h3>

          <pre className="python-code">
            <code>{`numbers = (10, 20, 30, 40)

print(numbers)`}</code>
          </pre>

          <div className="python-output">

            <span className="python-output-title">
              Output
            </span>

            (10, 20, 30, 40)

          </div>


          <h3 className="python-subheading">
            Accessing Tuple Elements
          </h3>

          <pre className="python-code">
            <code>{`numbers = (10, 20, 30)

print(numbers[0])
print(numbers[2])`}</code>
          </pre>

          <div className="python-output">

            <span className="python-output-title">
              Output
            </span>

            10<br />
            30

          </div>


          <h3 className="python-subheading">
            Tuple Cannot Be Changed
          </h3>

          <pre className="python-code">
            <code>{`numbers = (10, 20, 30)

# This will cause an error

numbers[0] = 100`}</code>
          </pre>

          <div className="python-warning">

            <strong>⚠️ Error:</strong>

            <br />

            TypeError: 'tuple' object does not support item assignment

          </div>


          <h3 className="python-subheading">
            Real-World Example
          </h3>

          <pre className="python-code">
            <code>{`# Coordinates of a location

location = (20.2961, 85.8245)

latitude = location[0]
longitude = location[1]

print(latitude)
print(longitude)`}</code>
          </pre>

          <div className="python-output">

            <span className="python-output-title">
              Output
            </span>

            20.2961<br />
            85.8245

          </div>


          <div className="python-key-points">

            <div className="python-key-point">
              ✓ Ordered
            </div>

            <div className="python-key-point">
              ✓ Immutable
            </div>

            <div className="python-key-point">
              ✓ Allows duplicates
            </div>

            <div className="python-key-point">
              ✓ Supports indexing
            </div>

          </div>

        </section>


        {/* =====================================
            3. DICTIONARY
        ====================================== */}

        <section className="python-concept-card">

          <h2>📖 3. Dictionaries</h2>

          <p>
            A <strong>dictionary</strong> stores information in
            <strong> key-value pairs</strong>.
            Instead of accessing data using an index, we access
            it using a key.
          </p>


          <h3 className="python-subheading">
            Creating a Dictionary
          </h3>

          <pre className="python-code">
            <code>{`student = {
    "name": "Subhrajeet",
    "age": 20,
    "branch": "CSE",
    "college": "Silicon University"
}

print(student)`}</code>
          </pre>


          <h3 className="python-subheading">
            Accessing Dictionary Values
          </h3>

          <pre className="python-code">
            <code>{`student = {
    "name": "Subhrajeet",
    "age": 20,
    "branch": "CSE"
}

print(student["name"])
print(student["age"])
print(student["branch"])`}</code>
          </pre>

          <div className="python-output">

            <span className="python-output-title">
              Output
            </span>

            Subhrajeet<br />
            20<br />
            CSE

          </div>


          <h3 className="python-subheading">
            Adding a New Key
          </h3>

          <pre className="python-code">
            <code>{`student = {
    "name": "Subhrajeet",
    "age": 20
}

student["city"] = "Bhubaneswar"

print(student)`}</code>
          </pre>


          <h3 className="python-subheading">
            Updating a Value
          </h3>

          <pre className="python-code">
            <code>{`student = {
    "name": "Subhrajeet",
    "age": 20
}

student["age"] = 21

print(student["age"])`}</code>
          </pre>

          <div className="python-output">

            <span className="python-output-title">
              Output
            </span>

            21

          </div>


          <h3 className="python-subheading">
            Real-World Example
          </h3>

          <pre className="python-code">
            <code>{`employee = {
    "id": 101,
    "name": "Rahul",
    "salary": 45000,
    "department": "IT"
}

print(employee["name"])
print(employee["salary"])`}</code>
          </pre>

          <div className="python-output">

            <span className="python-output-title">
              Output
            </span>

            Rahul<br />
            45000

          </div>


          <div className="python-key-points">

            <div className="python-key-point">
              ✓ Stores key-value pairs
            </div>

            <div className="python-key-point">
              ✓ Mutable
            </div>

            <div className="python-key-point">
              ✓ Keys must be unique
            </div>

            <div className="python-key-point">
              ✓ Accessed using keys
            </div>

          </div>

        </section>


        {/* =====================================
            4. SET
        ====================================== */}

        <section className="python-concept-card">

          <h2>🔵 4. Sets</h2>

          <p>
            A <strong>set</strong> is an unordered collection
            containing only unique values.
          </p>


          <h3 className="python-subheading">
            Creating a Set
          </h3>

          <pre className="python-code">
            <code>{`numbers = {10, 20, 30, 40}

print(numbers)`}</code>
          </pre>


          <h3 className="python-subheading">
            Duplicate Values Are Removed
          </h3>

          <pre className="python-code">
            <code>{`numbers = {10, 20, 20, 30, 30, 40}

print(numbers)`}</code>
          </pre>

          <div className="python-output">

            <span className="python-output-title">
              Output
            </span>

            {'{10, 20, 30, 40}'}

          </div>


          <h3 className="python-subheading">
            Adding Values
          </h3>

          <pre className="python-code">
            <code>{`numbers = {10, 20, 30}

numbers.add(40)

print(numbers)`}</code>
          </pre>


          <h3 className="python-subheading">
            Real-World Example
          </h3>

          <pre className="python-code">
            <code>{`# Remove duplicate marks

marks = [80, 90, 80, 70, 90]

unique_marks = set(marks)

print(unique_marks)`}</code>
          </pre>

          <div className="python-output">

            <span className="python-output-title">
              Output
            </span>

            {'{80, 90, 70}'}

          </div>


          <div className="python-key-points">

            <div className="python-key-point">
              ✓ Unique values
            </div>

            <div className="python-key-point">
              ✓ Mutable
            </div>

            <div className="python-key-point">
              ✓ Duplicate values removed
            </div>

            <div className="python-key-point">
              ✓ No indexing
            </div>

          </div>

        </section>


        {/* =====================================
            LIST VS TUPLE
        ====================================== */}

        <section className="python-concept-card">

          <h2>⚔️ List vs Tuple</h2>

          <div className="python-comparison-table">

            <div className="python-comparison-row python-comparison-header">

              <span>Feature</span>
              <span>List</span>
              <span>Tuple</span>

            </div>

            <div className="python-comparison-row">

              <span>Syntax</span>
              <span>[]</span>
              <span>()</span>

            </div>

            <div className="python-comparison-row">

              <span>Ordered</span>
              <span>Yes</span>
              <span>Yes</span>

            </div>

            <div className="python-comparison-row">

              <span>Mutable</span>
              <span>Yes</span>
              <span>No</span>

            </div>

            <div className="python-comparison-row">

              <span>Duplicates</span>
              <span>Allowed</span>
              <span>Allowed</span>

            </div>

            <div className="python-comparison-row">

              <span>Indexing</span>
              <span>Yes</span>
              <span>Yes</span>

            </div>

            <div className="python-comparison-row">

              <span>Use</span>
              <span>Changing data</span>
              <span>Fixed data</span>

            </div>

          </div>

        </section>


        {/* =====================================
            LIST VS DICTIONARY
        ====================================== */}

        <section className="python-concept-card">

          <h2>⚔️ List vs Dictionary</h2>

          <div className="python-comparison-table">

            <div className="python-comparison-row python-comparison-header">

              <span>Feature</span>
              <span>List</span>
              <span>Dictionary</span>

            </div>

            <div className="python-comparison-row">

              <span>Stores</span>
              <span>Values</span>
              <span>Key + Value</span>

            </div>

            <div className="python-comparison-row">

              <span>Access</span>
              <span>Index</span>
              <span>Key</span>

            </div>

            <div className="python-comparison-row">

              <span>Mutable</span>
              <span>Yes</span>
              <span>Yes</span>

            </div>

            <div className="python-comparison-row">

              <span>Duplicates</span>
              <span>Allowed</span>
              <span>Keys must be unique</span>

            </div>

            <div className="python-comparison-row">

              <span>Example</span>
              <span>students[0]</span>
              <span>student["name"]</span>

            </div>

          </div>

        </section>


        {/* =====================================
            ALL FOUR COMPARISON
        ====================================== */}

        <section className="python-concept-card">

          <h2>📊 List vs Tuple vs Dictionary vs Set</h2>

          <p>
            This table summarizes the major differences between
            Python's collection types.
          </p>

          <div className="python-comparison-table">

            <div className="python-comparison-row python-comparison-header">

              <span>Feature</span>
              <span>List</span>
              <span>Tuple</span>
              <span>Dictionary</span>
              <span>Set</span>

            </div>

            <div className="python-comparison-row">

              <span>Syntax</span>
              <span>[]</span>
              <span>()</span>
              <span>{'{key:value}'}</span>
              <span>{'{1,2,3}'}</span>

            </div>

            <div className="python-comparison-row">

              <span>Ordered</span>
              <span>Yes</span>
              <span>Yes</span>
              <span>Yes*</span>
              <span>No</span>

            </div>

            <div className="python-comparison-row">

              <span>Mutable</span>
              <span>Yes</span>
              <span>No</span>
              <span>Yes</span>
              <span>Yes</span>

            </div>

            <div className="python-comparison-row">

              <span>Duplicates</span>
              <span>Yes</span>
              <span>Yes</span>
              <span>Values: Yes</span>
              <span>No</span>

            </div>

            <div className="python-comparison-row">

              <span>Access</span>
              <span>Index</span>
              <span>Index</span>
              <span>Key</span>
              <span>No Index</span>

            </div>

            <div className="python-comparison-row">

              <span>Best For</span>
              <span>Changing data</span>
              <span>Fixed data</span>
              <span>Key-value data</span>
              <span>Unique data</span>

            </div>

          </div>

          <p className="python-table-note">
            * Python dictionaries preserve insertion order in modern
            Python versions.
          </p>

        </section>


        {/* =====================================
            REAL WORLD EXAMPLES
        ====================================== */}

        <section className="python-concept-card">

          <h2>🌎 Real-World Examples</h2>

          <div className="python-use-case">


            {/* LIST */}

            <div className="python-use-item">

              <h3>📋 List → Shopping Cart</h3>

              <p>
                A shopping cart can change as products are added
                or removed.
              </p>

              <pre className="python-code">
                <code>{`cart = [
    "Laptop",
    "Mouse",
    "Keyboard"
]

cart.append("Headphones")

print(cart)`}</code>
              </pre>

            </div>


            {/* TUPLE */}

            <div className="python-use-item">

              <h3>🔒 Tuple → Coordinates</h3>

              <p>
                Coordinates usually represent fixed values.
              </p>

              <pre className="python-code">
                <code>{`location = (
    20.2961,
    85.8245
)

print(location)`}</code>
              </pre>

            </div>


            {/* DICTIONARY */}

            <div className="python-use-item">

              <h3>📖 Dictionary → Student</h3>

              <p>
                A student has different properties identified
                using meaningful keys.
              </p>

              <pre className="python-code">
                <code>{`student = {
    "name": "Rahul",
    "age": 20,
    "branch": "CSE"
}

print(student["name"])`}</code>
              </pre>

            </div>


            {/* SET */}

            <div className="python-use-item">

              <h3>🔵 Set → Unique IDs</h3>

              <p>
                Sets are useful when duplicate values should
                automatically be removed.
              </p>

              <pre className="python-code">
                <code>{`ids = {
    101,
    102,
    101,
    103
}

print(ids)`}</code>
              </pre>

            </div>

          </div>

        </section>


        {/* =====================================
            QUICK MEMORY
        ====================================== */}

        <section className="python-concept-card">

          <h2>🧠 Easy Way to Remember</h2>

          <div className="python-memory-grid">

            <div className="python-memory-card">

              <span>📋</span>

              <strong>LIST</strong>

              <p>
                "I have many values and they can change."
              </p>

              <code>["A", "B", "C"]</code>

            </div>


            <div className="python-memory-card">

              <span>🔒</span>

              <strong>TUPLE</strong>

              <p>
                "I have many values but they should not change."
              </p>

              <code>("A", "B", "C")</code>

            </div>


            <div className="python-memory-card">

              <span>📖</span>

              <strong>DICTIONARY</strong>

              <p>
                "I need a key to find my value."
              </p>

              <code>{'{"name": "Rahul"}'}</code>

            </div>


            <div className="python-memory-card">

              <span>🔵</span>

              <strong>SET</strong>

              <p>
                "I only want unique values."
              </p>

              <code>{'{1, 2, 3}'}</code>

            </div>

          </div>

        </section>


        {/* =====================================
            SUMMARY
        ====================================== */}

        <section className="python-summary-box">

          <h2>🎯 What You Learned</h2>

          <ul>

            <li>
              Lists store ordered and changeable collections.
            </li>

            <li>
              Tuples store ordered but unchangeable collections.
            </li>

            <li>
              Dictionaries store data using key-value pairs.
            </li>

            <li>
              Sets store only unique values.
            </li>

            <li>
              Lists and tuples use indexes.
            </li>

            <li>
              Dictionaries use keys.
            </li>

            <li>
              Sets do not support normal indexing.
            </li>

          </ul>

        </section>


        {/* =====================================
            NAVIGATION
        ====================================== */}

        <div className="python-concept-navigation">

          <Link
            to="/python/functions"
            className="python-nav-button"
          >
            ← Previous
          </Link>

          <Link
            to="/python/dictionaries-sets"
            className="python-nav-button primary"
          >
            Next: Dictionaries & Sets →
          </Link>

        </div>

      </main>

    </div>
  );
}

export default ListsTuples;
