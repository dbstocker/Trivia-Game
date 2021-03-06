// Push the questions into the dom

function tQuestions() { $("#trivia").html(
  `
  <ol>
  <li class="question">
    Javascript is a ____.
    <form name="q1">
      <!-- move the position of the correct response around for variety -->
      <input type="radio" class="incorrect" name="q1"> JQuery Library.<br>
      <input type="radio" class="incorrect" name="q1"> CSS Framework.<br>
      <input type="radio" class="correct" name="q1"> Scripting Language for web browsers and servers.<br>
      <!-- correct -->
      <input type="radio" class="incorrect" name="q1"> Newer variant on the Java programming language.<br>
    </form>
  </li>
  <br>
  <li class="question">
    How do you declare a function <em>with parameters</em> in Javascript?
    <form name="q2">
      <input type="radio" class="incorrect" name="q2"> <code>$(function) {parameter1, parameter2}</code><br>
      <input type="radio" class="incorrect" name="q2"> <code>function  functionName() {parameter1, parameter2}</code><br>
      <input type="radio" class="incorrect" name="q2"> <code>functionName function(parameter1, parameter2) {...}</code><br>
      <!-- correct answer -->
      <input type="radio" class="correct" name="q2"> <code>function functionName(parameter1, parameter2) {...}</code><br>
    </form>
  </li>
  <br>
  <li class="question">
    How do you declare a variable in Javascript?
    <form name="q3">
      <!-- correct answer -->
      <input type="radio" class="correct" name="q3"> <code>var variableName = value;</code><br>
      <input type="radio" class="incorrect" name="q3"> <code>$variableName value;</code><br>
      <input type="radio" class="incorrect" name="q3"> <code>var variableName value;</code><br>
      <input type="radio" class="incorrect" name="q3"> <code>$var variableName = value;</code><br>
    </form>
  </li>
  <br>
  <li class="question">
    <code>pets = ["cat", "dog", "ferret"];</code> is an example of ____.
    <form name="q4">
      <input type="radio" class="incorrect" name="q4"> a variable.<br>
      <input type="radio" class="incorrect" name="q4"> an object.<br>
      <input type="radio" class="incorrect" name="q4"> JSON.<br>
      <!-- correct answer -->
      <input type="radio" class="correct" name="q4"> an array.<br>
    </form>
  </li>
  <br>
  <li class="question">
    <code>employee = { firstName: "Jack", lastName: "Skellington", occupation: "HR Manager" }</code> is an example of
    ____.
    <form name="q5">
      <input type="radio" class="incorrect" name="q5"> a variable.<br>
      <!-- correct answer -->
      <input type="radio" class="correct" name="q5"> an object.<br>
      <input type="radio" class="incorrect" name="q5"> JSON.<br>
      <input type="radio" class="incorrect" name="q5"> an array.<br>
    </form>
  </li>
  <br>
  <li class="question">
    JSON stands for ____.
    <form name="q6">
      <input type="radio" class="incorrect" name="q6"> Jack Skellington Over Nantucket.<br>
      <input type="radio" class="incorrect" name="q6"> Join Solution On Number.<br>
      <!-- correct answer -->
      <input type="radio" class="correct" name="q6"> Javascript Object Notation<br>
      <input type="radio" class="incorrect" name="q6"> Javascript Sequence Ordinal Numeration<br>
    </form>
  </li>
  <br>
  <li class="question">
    JQuery is ____.
    <form name="q7">
      <input type="radio" class="incorrect" name="q7"> a CSS framework.<br>
      <input type="radio" class="incorrect" name="q7"> a way to query Javascript objects.<br>
      <input type="radio" class="incorrect" name="q7"> a way to query JSON objects.<br>
      <!-- correct answer -->
      <input type="radio" class="correct" name="q7"> a Javascript Library.<br>
    </form>
  </li>
  <br>
  <li class="question">
    In JQuery syntax, <code>$("#name").text("Jack Skellington");</code> writes "Jack Skellington" ____.
    <form name="q8">
      <input type="radio" class="incorrect" name="q8"> to an element with the <em>name</em> class.<br>
      <!-- correct answer -->
      <input type="radio" class="correct" name="q8"> to an element with the <em>name</em> id.<br>
      <input type="radio" class="incorrect" name="q8"> to the window.<br>
      <input type="radio" class="incorrect" name="q8"> to the console.<br>
    </form>
  </li>
  <br>
  <li class="question">
    Use the <code>parseInt()</code> method to attempt to ____.
    <form name="q9">
      <input type="radio" class="incorrect" name="q9"> convert a float to an integer.<br>
      <!-- correct answer -->
      <input type="radio" class="correct" name="q9"> convert a string to an integer.<br>
      <input type="radio" class="incorrect" name="q9"> check a string to see if it contains an integer.<br>
      <input type="radio" class="incorrect" name="q9"> convert an integer to a string.<br>
    </form>
  </li>
  <br>
  <li class="question">
    With Javascript, you can ____.
    <form name="q10">
      <!-- correct answer -->
      <input type="radio" class="correct" name="q2"> make dynamic and interactive web pages.<br>
      <input type="radio" class="incorrect" name="q2"> style your web page with Cascading Style Sheets.<br>
      <input type="radio" class="incorrect" name="q2"> create robust databases.<br>
      <input type="radio" class="incorrect" name="q2"> rule the known universe.<br>
    </form>
  </li>
  <br>
</ol>
  `
)};