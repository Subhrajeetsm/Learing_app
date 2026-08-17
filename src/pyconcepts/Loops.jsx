import React from "react";
import { Link } from "react-router-dom";
import "./PythonConcept.css";

function Loops() {
  return (
    <div className="python-concept-page">

      {/* Header */}
      <header className="python-concept-header">

        <Link to="/python" className="python-concept-back">
          ← Back to Python
        </Link>

        <div className="python-concept-brand">
          <div className="python-concept-icon">🐍</div>

          <div className="python-concept-brand-text">
            <strong>Python Learning</strong>
            <span>Loops</span>
          </div>
        </div>

      </header>

      <main className="python-concept-main">

        {/* Hero */}
        <section className="python-concept-hero">

          <span className="python-concept-number">
            LESSON 05
          </span>

          <h1>Loops</h1>

          <p>
            Loops allow you to execute a block of code multiple
            times and are useful for solving repetitive problems.
          </p>

        </section>


        {/* =====================================
            FOR LOOP
        ====================================== */}

        <section className="python-concept-card">

          <h2>🔁 for Loop</h2>

          <p>
            A <code>for</code> loop is used when you want to repeat
            a block of code for each item in a sequence.
          </p>

          <pre className="python-code">
            <code>{`for i in range(1, 6):
    print(i)`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            1<br />
            2<br />
            3<br />
            4<br />
            5
          </div>

        </section>


        {/* =====================================
            WHILE LOOP
        ====================================== */}

        <section className="python-concept-card">

          <h2>🔄 while Loop</h2>

          <p>
            A <code>while</code> loop executes as long as its
            condition is true.
          </p>

          <pre className="python-code">
            <code>{`count = 1

while count <= 5:
    print(count)
    count += 1`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            1<br />
            2<br />
            3<br />
            4<br />
            5
          </div>

        </section>


        {/* =====================================
            RANGE
        ====================================== */}

        <section className="python-concept-card">

          <h2>🔢 Using range()</h2>

          <p>
            The <code>range()</code> function generates a sequence
            of numbers commonly used with loops.
          </p>

          <pre className="python-code">
            <code>{`for i in range(1, 6):
    print(i)`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            1 2 3 4 5
          </div>

          <p>
            <strong>Syntax:</strong>{" "}
            <code>range(start, stop, step)</code>
          </p>

        </section>


        {/* =====================================
            SUM OF NUMBERS
        ====================================== */}

        <section className="python-concept-card">

          <h2>➕ Sum of Numbers</h2>

          <p>
            We can use a loop to calculate the sum of numbers from
            1 to n.
          </p>

          <pre className="python-code">
            <code>{`n = 5
total = 0

for i in range(1, n + 1):
    total += i

print("Sum =", total)`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            Sum = 15
          </div>

        </section>


        {/* =====================================
            EVEN NUMBERS
        ====================================== */}

        <section className="python-concept-card">

          <h2>🔢 Print Even Numbers</h2>

          <p>
            A loop and the modulus operator can be used to find
            even numbers.
          </p>

          <pre className="python-code">
            <code>{`for i in range(1, 11):
    if i % 2 == 0:
        print(i)`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            2<br />
            4<br />
            6<br />
            8<br />
            10
          </div>

        </section>


        {/* =====================================
            SUM OF DIGITS
        ====================================== */}

        <section className="python-concept-card">

          <h2>🔢 Sum of Digits</h2>

          <p>
            We can use a <code>while</code> loop to extract each
            digit of a number and calculate its sum.
          </p>

          <pre className="python-code">
            <code>{`num = 12345
total = 0

while num > 0:
    digit = num % 10
    total += digit
    num //= 10

print("Sum of digits =", total)`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            Sum of digits = 15
          </div>

        </section>


        {/* =====================================
            PRIME NUMBER
        ====================================== */}

        <section className="python-concept-card">

          <h2>⭐ Check Prime Number</h2>

          <p>
            A prime number is a number greater than 1 that has
            only two factors: 1 and itself.
          </p>

          <pre className="python-code">
            <code>{`num = 17
is_prime = True

if num < 2:
    is_prime = False
else:
    for i in range(2, num):
        if num % i == 0:
            is_prime = False
            break

if is_prime:
    print("Prime number")
else:
    print("Not a prime number")`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            Prime number
          </div>

        </section>


        {/* =====================================
            MULTIPLICATION TABLE
        ====================================== */}

        <section className="python-concept-card">

          <h2>✖️ Multiplication Table</h2>

          <p>
            Loops make it easy to generate multiplication tables.
          </p>

          <pre className="python-code">
            <code>{`num = 5

for i in range(1, 11):
    print(num, "x", i, "=", num * i)`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            5 x 1 = 5<br />
            5 x 2 = 10<br />
            5 x 3 = 15<br />
            5 x 4 = 20<br />
            5 x 5 = 25<br />
            5 x 6 = 30<br />
            5 x 7 = 35<br />
            5 x 8 = 40<br />
            5 x 9 = 45<br />
            5 x 10 = 50
          </div>

        </section>


        {/* =====================================
            NESTED LOOP
        ====================================== */}

        <section className="python-concept-card">

          <h2>🔁 Nested Loop</h2>

          <p>
            A nested loop is a loop inside another loop. It is
            commonly used for patterns and 2D data.
          </p>

          <pre className="python-code">
            <code>{`for i in range(1, 4):
    for j in range(1, 4):
        print(i, j)`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            1 1<br />
            1 2<br />
            1 3<br />
            2 1<br />
            2 2<br />
            2 3<br />
            3 1<br />
            3 2<br />
            3 3
          </div>

        </section>


        {/* =====================================
            STAR PATTERN
        ====================================== */}

        <section className="python-concept-card">

          <h2>⭐ Star Pattern</h2>

          <p>
            Nested loops can be used to create simple patterns.
          </p>

          <pre className="python-code">
            <code>{`for i in range(1, 6):
    for j in range(i):
        print("*", end=" ")
    print()`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            *<br />
            * *<br />
            * * *<br />
            * * * *<br />
            * * * * *
          </div>

        </section>


        {/* =====================================
            DO WHILE
        ====================================== */}

        <section className="python-concept-card">

          <h2>🔄 do-while Equivalent in Python</h2>

          <p>
            Python does not have a built-in <code>do-while</code>
            loop. We can achieve the same behavior using
            <code>while True</code> and <code>break</code>.
          </p>

          <pre className="python-code">
            <code>{`while True:
    num = int(input("Enter a number: "))

    print("You entered:", num)

    if num == 0:
        break`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Example
            </span>

            Enter a number: 5<br />
            You entered: 5<br />
            Enter a number: 10<br />
            You entered: 10<br />
            Enter a number: 0<br />
            You entered: 0
          </div>

        </section>


        {/* =====================================
            BREAK
        ====================================== */}

        <section className="python-concept-card">

          <h2>🛑 break Statement</h2>

          <p>
            The <code>break</code> statement immediately stops a
            loop.
          </p>

          <pre className="python-code">
            <code>{`for i in range(1, 10):

    if i == 5:
        break

    print(i)`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            1<br />
            2<br />
            3<br />
            4
          </div>

        </section>


        {/* =====================================
            CONTINUE
        ====================================== */}

        <section className="python-concept-card">

          <h2>⏭️ continue Statement</h2>

          <p>
            The <code>continue</code> statement skips the current
            iteration and continues with the next iteration.
          </p>

          <pre className="python-code">
            <code>{`for i in range(1, 6):

    if i == 3:
        continue

    print(i)`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            1<br />
            2<br />
            4<br />
            5
          </div>

        </section>


        {/* =====================================
            SECONDS CONVERSION
        ====================================== */}

        <section className="python-concept-card">

          <h2>⏱️ Convert Seconds to Hours, Minutes & Seconds</h2>

          <p>
            Loops are not required for this calculation, but this
            is a useful beginner programming problem for practicing
            integer division and modulus.
          </p>

          <pre className="python-code">
            <code>{`total_seconds = 7384

hours = total_seconds // 3600
remaining = total_seconds % 3600

minutes = remaining // 60
seconds = remaining % 60

print("Hours:", hours)
print("Minutes:", minutes)
print("Seconds:", seconds)`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            Hours: 2<br />
            Minutes: 3<br />
            Seconds: 4
          </div>

        </section>


        {/* =====================================
            COUNTDOWN
        ====================================== */}

        <section className="python-concept-card">

          <h2>⏳ Countdown</h2>

          <p>
            A loop can also be used to create a simple countdown.
          </p>

          <pre className="python-code">
            <code>{`for i in range(5, 0, -1):
    print(i)

print("Start!")`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            5<br />
            4<br />
            3<br />
            2<br />
            1<br />
            Start!
          </div>

        </section>


        {/* =====================================
            LOOP ELSE
        ====================================== */}

        <section className="python-concept-card">

          <h2>🔎 Loop with else</h2>

          <p>
            Python also allows an <code>else</code> block with
            loops. It executes when the loop finishes normally.
          </p>

          <pre className="python-code">
            <code>{`for i in range(1, 6):
    print(i)
else:
    print("Loop completed")`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            1<br />
            2<br />
            3<br />
            4<br />
            5<br />
            Loop completed
          </div>

        </section>


        {/* =====================================
            NAVIGATION
        ====================================== */}

        <div className="python-concept-navigation">

          <Link
            to="/python/conditions"
            className="python-nav-button"
          >
            ← Previous
          </Link>

          <Link
            to="/python/functions"
            className="python-nav-button primary"
          >
            Next: Functions →
          </Link>

        </div>

      </main>

    </div>
  );
}

export default Loops;
