export const responseData = [
    {
        id: "js_basics",
        name: "JavaScript Basics",
        questions: [
            {
                id: "1",
                question: "What is the correct syntax for referring to an external script called 'script.js'?",
                options: [
                    "<script name='script.js'>",
                    "<script href='script.js'>",
                    "<script src='script.js'>",
                    "<script file='script.js'>"
                ],
                correctAnswer: "<script src='script.js'>",
                timeLimit: 10
            },
            {
                id: "2",
                question: "Which company developed JavaScript?",
                options: [
                    "Microsoft",
                    "Netscape",
                    "Google",
                    "Mozilla"
                ],
                correctAnswer: "Netscape",
                timeLimit: 10
            },
            {
                id: "3",
                question: "What is the use of the '===' operator in JavaScript?",
                options: [
                    "Assignment",
                    "Comparison without type coercion",
                    "Comparison with type coercion",
                    "Logical AND operation"
                ],
                correctAnswer: "Comparison without type coercion",
                timeLimit: 10
            },
            {
                id: "4",
                question: "Which keyword is used to declare a variable in JavaScript?",
                options: [
                    "var",
                    "let",
                    "const",
                    "All of the above"
                ],
                correctAnswer: "All of the above",
                timeLimit: 10
            },
            {
                id: "5",
                question: "What does 'NaN' stand for in JavaScript?",
                options: [
                    "Not a Name",
                    "Not a Number",
                    "Not Applicable",
                    "Not a Null"
                ],
                correctAnswer: "Not a Number",
                timeLimit: 10
            },
            {
                id: "6",
                question: "Which function is used to parse a string to an integer in JavaScript?",
                options: [
                    "parseInt()",
                    "parseString()",
                    "int()",
                    "String()"
                ],
                correctAnswer: "parseInt()",
                timeLimit: 10
            },
            {
                id: "7",
                question: "What will be the output of 'typeof NaN'?",
                options: [
                    "null",
                    "undefined",
                    "object",
                    "number"
                ],
                correctAnswer: "number",
                timeLimit: 10
            },
            {
                id: "8",
                question: "How do you write a comment in JavaScript?",
                options: [
                    "<!-- This is a comment -->",
                    "// This is a comment",
                    "/* This is a comment */",
                    "Both B and C"
                ],
                correctAnswer: "Both B and C",
                timeLimit: 10
            },
            {
                id: "9",
                question: "What is the purpose of the 'this' keyword in JavaScript?",
                options: [
                    "Refers to the current HTML document",
                    "Refers to the current object",
                    "Refers to the previous function",
                    "Refers to the global window object"
                ],
                correctAnswer: "Refers to the current object",
                timeLimit: 10
            },
            {
                id: "10",
                question: "What is the output of 'console.log(0.1 + 0.2 === 0.3)'?",
                options: [
                    "true",
                    "false",
                    "undefined",
                    "NaN"
                ],
                correctAnswer: "false",
                timeLimit: 10
            }
        ]
    },
    {
        id: "angular_basics",
        name: "Angular Basics",
        questions: [
            {
                id: "1",
                question: "Which directive is used for two-way data binding in Angular?",
                options: [
                    "ng-bind",
                    "ng-model",
                    "ng-repeat",
                    "ng-app"
                ],
                correctAnswer: "ng-model",
                timeLimit: 10
            },
            {
                id: "2",
                question: "What is Angular mainly used for?",
                options: [
                    "Server-side programming",
                    "Machine learning",
                    "Building web applications",
                    "Database management"
                ],
                correctAnswer: "Building web applications",
                timeLimit: 10
            },
            {
                id: "3",
                question: "What does Angular's CLI stand for?",
                options: [
                    "Command Language Interface",
                    "Component Language Interface",
                    "Command Line Interface",
                    "Component Line Interface"
                ],
                correctAnswer: "Command Line Interface",
                timeLimit: 10
            },
            {
                id: "4",
                question: "What is a decorator in Angular?",
                options: [
                    "A special variable",
                    "A function that enhances classes and methods",
                    "A type of template",
                    "A CSS styling technique"
                ],
                correctAnswer: "A function that enhances classes and methods",
                timeLimit: 10
            },
            {
                id: "5",
                question: "Which operator is used to subscribe to Observables in Angular?",
                options: [
                    "subscribe",
                    "listen",
                    "observe",
                    "fetch"
                ],
                correctAnswer: "subscribe",
                timeLimit: 10
            },
            {
                id: "6",
                question: "Which module is necessary for using forms in Angular?",
                options: [
                    "FormsModule",
                    "InputModule",
                    "ControlModule",
                    "UserModule"
                ],
                correctAnswer: "FormsModule",
                timeLimit: 10
            },
            {
                id: "7",
                question: "What is Angular's dependency injection used for?",
                options: [
                    "Injecting components",
                    "Managing class dependencies",
                    "Creating a single page application",
                    "Handling HTTP requests"
                ],
                correctAnswer: "Managing class dependencies",
                timeLimit: 10
            },
            {
                id: "8",
                question: "Which Angular feature provides 'lazy loading'?",
                options: [
                    "Routing",
                    "Forms",
                    "Pipes",
                    "Services"
                ],
                correctAnswer: "Routing",
                timeLimit: 10
            },
            {
                id: "9",
                question: "What is the purpose of Angular's NgModule?",
                options: [
                    "To configure routes",
                    "To organize code into cohesive blocks",
                    "To manage dependencies",
                    "To handle form submissions"
                ],
                correctAnswer: "To organize code into cohesive blocks",
                timeLimit: 10
            },
            {
                id: "10",
                question: "What is an Angular component?",
                options: [
                    "A UI element with logic",
                    "A CSS file",
                    "A template without logic",
                    "A data model"
                ],
                correctAnswer: "A UI element with logic",
                timeLimit: 10
            }
        ]
    },
    {
        id: "react_advanced",
        name: "React.js Advance",
        questions: [
            {
                id: "1",
                question: "What is the purpose of React.memo?",
                options: [
                    "To create a component",
                    "To memoize expensive functions",
                    "To prevent unnecessary re-renders",
                    "To manage state"
                ],
                correctAnswer: "To prevent unnecessary re-renders",
                timeLimit: 10
            },
            {
                id: "2",
                question: "Which hook would you use to manage lifecycle events?",
                options: [
                    "useState",
                    "useEffect",
                    "useReducer",
                    "useRef"
                ],
                correctAnswer: "useEffect",
                timeLimit: 10
            },
            {
                id: "3",
                question: "What is the primary purpose of useCallback in React?",
                options: [
                    "To memoize component props",
                    "To memoize a function",
                    "To create a callback",
                    "To manage component state"
                ],
                correctAnswer: "To memoize a function",
                timeLimit: 10
            },
            {
                id: "4",
                question: "Which hook allows for managing a form's local state?",
                options: [
                    "useEffect",
                    "useReducer",
                    "useRef",
                    "useForm"
                ],
                correctAnswer: "useReducer",
                timeLimit: 10
            },
            {
                id: "5",
                question: "What is React's Context API used for?",
                options: [
                    "Managing component lifecycle",
                    "Sharing data across components",
                    "Replacing Redux",
                    "Creating custom hooks"
                ],
                correctAnswer: "Sharing data across components",
                timeLimit: 10
            },
            {
                id: "6",
                question: "Which of the following is true about the useRef hook?",
                options: [
                    "It triggers a re-render",
                    "It creates a mutable object",
                    "It replaces useState",
                    "It is used for event handling"
                ],
                correctAnswer: "It creates a mutable object",
                timeLimit: 10
            },
            {
                id: "7",
                question: "What does Strict Mode in React do?",
                options: [
                    "Disables all warnings",
                    "Highlights potential issues",
                    "Forces synchronous rendering",
                    "Only works in production"
                ],
                correctAnswer: "Highlights potential issues",
                timeLimit: 10
            },
            {
                id: "8",
                question: "How can you optimize large lists in React?",
                options: [
                    "Using Context API",
                    "Using componentDidMount",
                    "Using React.memo",
                    "Using React.lazy"
                ],
                correctAnswer: "Using React.memo",
                timeLimit: 10
            },
            {
                id: "9",
                question: "What does React.lazy do?",
                options: [
                    "Loads a component conditionally",
                    "Defers rendering until user scrolls",
                    "Allows code splitting and lazy loading",
                    "Caches component state"
                ],
                correctAnswer: "Allows code splitting and lazy loading",
                timeLimit: 10
            },
            {
                id: "10",
                question: "What is the default behavior of React's reconciliation process?",
                options: [
                    "Optimizes component re-renders",
                    "Maintains previous state",
                    "Deletes unused variables",
                    "Ignores state changes"
                ],
                correctAnswer: "Optimizes component re-renders",
                timeLimit: 10
            }
        ]
    },
    {
        id: "flutter",
        name: "Flutter",
        questions: [
            {
                id: "1",
                question: "Which programming language is used in Flutter?",
                options: [
                    "Java",
                    "Swift",
                    "Dart",
                    "Kotlin"
                ],
                correctAnswer: "Dart",
                timeLimit: 10
            },
            {
                id: "2",
                question: "What is a widget in Flutter?",
                options: [
                    "A database model",
                    "A layout component",
                    "A compiled binary",
                    "An HTTP client"
                ],
                correctAnswer: "A layout component",
                timeLimit: 10
            },
            {
                id: "3",
                question: "Which widget is used to create an immutable layout?",
                options: [
                    "Container",
                    "StatelessWidget",
                    "StatefulWidget",
                    "ListView"
                ],
                correctAnswer: "StatelessWidget",
                timeLimit: 10
            },
            {
                id: "4",
                question: "How can you update the state of a widget in Flutter?",
                options: [
                    "Using setState",
                    "Using setWidget",
                    "Using changeState",
                    "Using StatelessWidget"
                ],
                correctAnswer: "Using setState",
                timeLimit: 10
            },
            {
                id: "5",
                question: "What does the build() method in Flutter do?",
                options: [
                    "Initializes state",
                    "Renders UI elements",
                    "Sets up event listeners",
                    "Manages HTTP requests"
                ],
                correctAnswer: "Renders UI elements",
                timeLimit: 10
            },
            {
                id: "6",
                question: "What is Flutter's hot reload feature used for?",
                options: [
                    "Restarting the app",
                    "Compiling code",
                    "Updating UI without restarting",
                    "Debugging errors"
                ],
                correctAnswer: "Updating UI without restarting",
                timeLimit: 10
            },
            {
                id: "7",
                question: "Which Flutter widget is used to arrange widgets vertically?",
                options: [
                    "Row",
                    "Column",
                    "ListTile",
                    "Stack"
                ],
                correctAnswer: "Column",
                timeLimit: 10
            },
            {
                id: "8",
                question: "How do you define routes in Flutter?",
                options: [
                    "Using Navigator.push",
                    "Using MaterialApp routes",
                    "Using StatelessWidget",
                    "Using setState"
                ],
                correctAnswer: "Using MaterialApp routes",
                timeLimit: 10
            },
            {
                id: "9",
                question: "What is Flutter's main() function responsible for?",
                options: [
                    "Defining app's theme",
                    "Starting the application",
                    "Managing routes",
                    "Configuring dependencies"
                ],
                correctAnswer: "Starting the application",
                timeLimit: 10
            },
            {
                id: "10",
                question: "What is a Scaffold in Flutter?",
                options: [
                    "A layout for the basic material design structure",
                    "A database in Flutter",
                    "A CSS styling tool",
                    "A widget for API calls"
                ],
                correctAnswer: "A layout for the basic material design structure",
                timeLimit: 10
            }
        ]
    }
];
