var Product = require('../models/terms');

var mongoose = require('mongoose');
  mongoose.connect('mongodb://TienM:rain01@ds143608.mlab.com:43608/bootd');

var terms = [
new Term({ "term": "ACID",
    "definition": [
        "Atomicity, Consistency, Isolation, Durability",
        "Each transaction must be all or nothing. Any program errors can't result in the violation of any defined rules. Ensure that concurrent transactions end in the same state as if each transaction had been handled separately. Once a transaction is committed, it remains so."
    ],
    "level": "3",
    "language": "General"
}),
new Term({
  "term": "Activecode",
    "definition": "A unique interpreter environment that allows Python to be executed in a web browser.",
    "level": "1",
    "language": "Python"
}),
new Term({
  "term": "Algorithm",
    "definition": "A general step-by-step process for solving a problem.",
    "level": "1",
    "language": "General"
}),
new Term({
  "term": "Byte Code",
   "definition": "Intermediate code between the source and object codes. Many high-level languages compile into byte code, which is interpreted by a virtual machine.",
   "level": "2",
   "language": "General"
}),
new Term({
  "term": "Codelens",
    "definition": "Interactive environment that allows you to control step-by-step execution of Python.",
    "level": "2",
    "language": "Python"
}),
new Term({
  "term": "Compile",
    "defintion": "Translating high code into machine code all at once, in preparation for execution.",
    "level": "1",
    "language": "General"
}),
new Term({
  "term": "Exception",
   "definition": "Runtime error. Does not appear until the program is running, but can't let the program progress.",
   "level": "1",
   "language": "General"
}),
new Term({
  "term": "Semantic Error",
    "definition": "When the program works, but not in the way you want.",
    "level": "1",
    "language": "General"
}),
new Term({
  "term": "Semantic Error",
   "definition": "When the program works, but not in the way you want.",
   "level": "1",
   "language": "General"
}),
new Term({
  "term": "Syntax Error",
 "definiton": "When you forget to type something dumb like the semicolon. It's always a semicolon. Just check your semicolons.",
 "level": "1",
 "language": "General"
}),
new Term({
  "term": "Token",
  "definition": "A 'word' in the statement your code is trying to make.",
  "level": "1",
  "language": "General"
}),
new Term({
  "term": "DRY",
   "definition": [
       "Don't Repeat Yourself",
       "Principle of development, aimed at reducing repetition in everything, especially useful in multitier architecture."
   ],
   "level": "3",
   "language": "General"
}),
new Term({
  "term": "Abstract Data Type",
   "definition": "A logical description of how we view and allow operations without regard to implementing them.",
   "level": "3",
   "language": "General"
}),
new Term({
  "term": "Data Structure",
  "definition": "Implementation of an abstract data type.",
  "level": "3",
  "language": "General"
}),
new Term({
  "term": "Tuple",
   "definition": "A finite, ordered list of elements.",
   "level": "2",
   "language": "General"
}),
new Term({
  "term": "Sharding",
"definition": "A method for distributing data across servers by partitioning data into chunks with the shard key.",
"level": "3",
"language": "Database-speek"
}),
new Term({
  "term": "REST",
   "definition": [
       "Representational State Transfer",
       "Something you probably need more of. Take a nap."
   ],
   "level": "2",
   "language": "General"
}),
new Term({
  "term": "V8",
   "definition": "Open-source Javascript engine developed by Chrome's Chromium Project. Compiles Javascript to native machine code before executing and optimizing dynamically at runtime based on execution profile.",
   "level": "3",
   "language": "Javascript"
}),
new Term({
  "term": "dotenv",
   "definition": "Environment variable file. Has confidential information like passwords and API keys, be very careful about keeping all of that in the dotenv.",
   "level": "4",
   "language": "General"

}),
new Term({
  "term": "KISS",
  "definition": [
      "Keep It Simple Stupid",
      "Most systems work best if they are kept simple rather than made complicated; therefore simplicity should be a key goal in design."
  ],
  "level": "1",
  "language": "General"
})
];

/** Loops through array */
var done = 0;
for (var i = 0; i < terms.length; i++) {
  /** Creates products collection in database */
    terms[i].save(function(err, result) {
        done++;
        if (done === terms.length) {
            exit();
        }
    });
}


/** Function to disconnect from database */
function exit() {
    mongoose.disconnect();
}
