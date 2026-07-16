import type { Course } from "./types";

export const COURSES: Course[] = [
  {
    code: "MATH 135",
    slug: "math-135",
    title: "Algebra for Honours Mathematics",
    archivedTerm: "Fall 2025",
    outlineUrl: "https://outline.uwaterloo.ca/viewer/view/nyh5zp",
    summary:
      "A proof-focused introduction to mathematical language through number systems, modular arithmetic, complex numbers, and polynomials.",
    overview:
      "MATH 135 is less about routine algebra and more about learning how mathematicians read, build, and communicate proofs. The course uses familiar algebraic systems to develop precise reasoning, strong problem-solving habits, and the ability to connect ideas across topics.",
    highlights: [
      { label: "Focus", value: "Proof writing" },
      { label: "Final exam", value: "40%" },
      { label: "Materials", value: "No added cost" },
      { label: "Archived AI policy", value: "Not permitted" },
    ],
    topics: [
      "Mathematical language, definitions, and proof techniques",
      "Integers and modular arithmetic",
      "Rational and real number systems",
      "Complex numbers and polynomials",
      "Choosing and combining proof strategies",
    ],
    outcomes: [
      "Read proofs and explain how each step follows.",
      "Turn definitions, theorems, and known facts into a plan for a problem.",
      "Write clear, logically ordered proofs using precise notation and language.",
      "Combine techniques from different parts of the course to solve unfamiliar problems.",
    ],
    gradingSchemes: [
      {
        assessments: [
          {
            name: "Weekly assessments",
            weight: "35%",
            detail: "Three Crowdmark assignments followed by eight in-person quizzes.",
          },
          { name: "Midterm", weight: "25%", detail: "In-person, 110 minutes in the archived offering." },
          { name: "Final exam", weight: "40%", detail: "Scheduled during the final examination period." },
        ],
      },
    ],
    gradingNotes: [
      "The first three assignments could be completed in groups of one to three, but every member was expected to understand the submitted work.",
      "In-person quizzes and exams were closed-book, calculators were not allowed, and a theorem reference sheet was provided.",
      "The archived outline also offered academic-integrity bonus quizzes worth up to 3% in total.",
    ],
    materials: [
      "Required: Language and Proofs in Algebra: an Introduction, version 1.4.2 (free).",
      "The detailed weekly schedule, learning objectives, notes, and announcements were provided through LEARN.",
    ],
    workload: [
      "A graded assignment or quiz was scheduled most Mondays.",
      "The outline expected students to attempt problems independently before discussing strategies with classmates.",
      "Students were encouraged to use instructor open hours and to keep up with the 49 weekly learning-objective skills posted on LEARN.",
    ],
    policies: [
      "Late assignments lost 1% of the entire assignment mark per minute in the archived offering.",
      "Approved exemptions could move missed assessment weight to the final exam.",
      "Generative AI was not permitted for course materials or assessments because independent proof-writing practice was a core objective.",
    ],
  },
  {
    code: "MATH 117",
    slug: "math-117",
    title: "Calculus 1 for Engineering",
    archivedTerm: "Fall 2025",
    outlineUrl: "https://outline.uwaterloo.ca/viewer/view/nvm2q5",
    summary:
      "Engineering calculus covering functions, limits, differentiation, optimization, integration, and polar coordinates.",
    overview:
      "MATH 117 develops the calculus tools used throughout engineering. It begins with functions and algebraic preparation, builds through limits and derivatives, and finishes with integration techniques and geometric applications.",
    highlights: [
      { label: "Focus", value: "Engineering calculus" },
      { label: "Final exam", value: "50%" },
      { label: "Tutorials", value: "Weekly" },
      { label: "Materials", value: "No added cost" },
    ],
    topics: [
      "Functions, inverses, symmetry, conic sections, and partial fractions",
      "Sequences, limits, continuity, and the major value theorems",
      "Differentiation rules, related rates, approximation, and optimization",
      "Definite and indefinite integrals, substitution, and integration by parts",
      "Areas, volumes, arc length, improper integrals, and polar coordinates",
    ],
    outcomes: [
      "Manipulate functions and perform core algebraic calculations used in calculus.",
      "Evaluate and apply limits, derivatives, and integrals.",
      "Use derivatives to sketch curves and solve optimization problems.",
      "Use integration to calculate area, average value, arc length, and volume.",
    ],
    gradingSchemes: [
      {
        assessments: [
          { name: "Tutorial assignments", weight: "20%", detail: "Ten in-person assignments; the best eight counted." },
          { name: "Midterm exam", weight: "30%", detail: "In-person during first-year midterm week." },
          { name: "Final exam", weight: "50%", detail: "In-person during the final examination period." },
        ],
      },
    ],
    gradingNotes: [
      "Tutorial problems could be discussed in groups, but each student had to submit their own solution in their own words.",
      "Personal notes, MATH 117 LEARN resources, and a scientific non-graphing calculator were permitted for tutorial assignments in the archived offering.",
    ],
    materials: [
      "Required: Math 117 Calculus I for Engineering lecture notes by D. Harmsworth (free on LEARN).",
      "Required: Calculus — Early Transcendentals by D. Guichard (free on LEARN).",
    ],
    workload: [
      "A graded problem set was completed and submitted during each weekly tutorial.",
      "Preparation meant reviewing the previous week and attempting posted practice problems before tutorial.",
      "The course moved from pre-calculus review to integration and polar coordinates over a dense 13-week schedule.",
    ],
    policies: [
      "Tutorial submissions were due by the end of the tutorial, with no late extension in the archived offering.",
      "There was no make-up midterm; with approved documentation, its weight moved to the final exam.",
      "Generative AI was not permitted for course materials or assessments.",
    ],
  },
  {
    code: "MATH 115",
    slug: "math-115",
    title: "Linear Algebra for Engineering",
    archivedTerm: "Fall 2025",
    outlineUrl: "https://outline.uwaterloo.ca/viewer/view/nwc5g7",
    summary:
      "Vectors, systems of equations, matrices, subspaces, transformations, determinants, complex numbers, and eigenvalues.",
    overview:
      "MATH 115 introduces the algebraic and geometric language behind many engineering models. The course connects computational techniques such as row reduction with deeper ideas including vector spaces, transformations, and eigenvectors.",
    highlights: [
      { label: "Focus", value: "Linear algebra" },
      { label: "Final exam", value: "55–60%" },
      { label: "Grade calculation", value: "Best of 2 schemes" },
      { label: "Materials", value: "No added cost" },
    ],
    topics: [
      "Vector geometry, lines, planes, dot products, cross products, and projections",
      "Systems of linear equations, row reduction, rank, and matrix algebra",
      "Span, linear independence, subspaces, bases, and dimension",
      "Linear transformations, kernels, ranges, and inverses",
      "Determinants, complex numbers, eigenvalues, eigenvectors, and diagonalization",
    ],
    outcomes: [
      "Solve geometric and systems-of-equations problems using vectors and matrices.",
      "Explain span, independence, bases, and subspaces algebraically and geometrically.",
      "Connect matrices with common linear transformations such as rotations and projections.",
      "Compute determinants, complex roots, eigenvalues, eigenvectors, and diagonalizations.",
    ],
    gradingSchemes: [
      {
        name: "Scheme 1",
        assessments: [
          { name: "Weekly tutorial assignments", weight: "10%" },
          { name: "Python assignments", weight: "5%" },
          { name: "Midterm", weight: "30%" },
          { name: "Final exam", weight: "55%" },
        ],
      },
      {
        name: "Scheme 2",
        assessments: [
          { name: "Weekly tutorial assignments", weight: "10%" },
          { name: "Python assignments", weight: "5%" },
          { name: "Midterm", weight: "25%" },
          { name: "Final exam", weight: "60%" },
        ],
        note: "Both schemes were calculated, and the higher result became the final grade.",
      },
    ],
    gradingNotes: [
      "The lowest tutorial score and the lowest of five Python-assignment scores were dropped.",
      "Completing every tutorial with a genuine attempt earned a 1% bonus, subject to the archived outline's absence rules.",
    ],
    materials: [
      "Required: Linear Algebra for Engineering Fall 2025 Course Notes (free on LEARN).",
      "Optional: Linear Algebra with Applications by Keith Nicholson (free on LEARN).",
      "The Python assignments used prewritten code and did not assume prior Python experience.",
    ],
    workload: [
      "Approximately ten in-person tutorial assignments combined computation, connections to earlier material, and proof/disproof questions.",
      "Five week-long Python assignments explored larger-scale applications of linear algebra; the best four counted.",
      "Tutorial collaboration was allowed in groups of up to three, but every student submitted an individual solution.",
    ],
    policies: [
      "Tutorials allowed only lecture notes, MATH 115 LEARN resources, and a scientific non-graphing calculator.",
      "Students seeking an absence exemption had to use the approved process and notify their instructor immediately.",
      "Generative AI was not permitted for computations, problem solving, proof writing, course materials, or assessments.",
    ],
  },
  {
    code: "CS 137",
    slug: "cs-137",
    title: "Programming Principles",
    archivedTerm: "Fall 2025",
    outlineUrl: "https://outline.uwaterloo.ca/viewer/view/nr4xfc",
    summary:
      "An intensive introduction to C programming, memory, pointers, modular design, data structures, and algorithm analysis.",
    overview:
      "CS 137 moves from core programming constructs into the C memory model and low-level data structures. The emphasis is on writing, testing, and reasoning about medium-sized programs—not just producing code that passes a few examples.",
    highlights: [
      { label: "Language", value: "C" },
      { label: "Final exam", value: "50%" },
      { label: "Assignments", value: "30%" },
      { label: "Pass condition", value: "Assignments + exams" },
    ],
    topics: [
      "C fundamentals, decisions, loops, functions, modules, and compilation",
      "Recursion, arrays, pointers, floating-point computation, and structures",
      "Dynamic memory allocation, characters, strings, and Valgrind",
      "Big-O analysis, searching, and sorting algorithms",
      "Linked lists, modularization, abstraction, and testing",
    ],
    outcomes: [
      "Produce well-designed, documented, tested programs of moderate size.",
      "Use imperative programming patterns and the C memory model effectively.",
      "Allocate and free memory correctly and build abstractions using pointers.",
      "Implement common data structures and analyze algorithm efficiency.",
    ],
    gradingSchemes: [
      {
        assessments: [
          { name: "Assignments", weight: "30%", detail: "A0 was ungraded; the remaining assignments were equally weighted." },
          { name: "Midterm", weight: "20%", detail: "Covered the first six modules in the archived offering." },
          { name: "Final exam", weight: "50%", detail: "Scheduled during the final examination period." },
        ],
      },
    ],
    gradingNotes: [
      "Students had to pass both the assignment portion and the weighted exam portion to pass the course.",
      "Assignments were submitted through LEARN/Marmoset and were normally due Friday at 11:59 p.m.",
    ],
    materials: [
      "No additional course costs were listed.",
      "Optional: C Programming for Scientists and Engineers with Applications by Reddy and Ziegler.",
      "Course tools included Marmoset, the student Linux environment, compiler/debugging tools, and Valgrind.",
    ],
    workload: [
      "The archived schedule assigned A0 through A9 across the term, alongside weekly Friday tutorials.",
      "Programming topics accumulated quickly: later assignments depended on earlier modules and debugging skills.",
      "Students were expected to test, document, and reason about programs—not only implement the requested output.",
    ],
    policies: [
      "MOSS was used to compare assignments for potential similarity and academic-integrity concerns.",
      "Course materials and assessment content could not be shared publicly without permission.",
      "Generative AI was not permitted for course materials or assessments in the archived outline.",
    ],
  },
  {
    code: "CHE 102",
    slug: "che-102",
    title: "Chemistry for Engineers",
    archivedTerm: "Fall 2025",
    outlineUrl: "https://outline.uwaterloo.ca/viewer/view/nrnzsq",
    summary:
      "Engineering chemistry through stoichiometry, gases, kinetics, phase and chemical equilibrium, and electrochemistry.",
    overview:
      "CHE 102 applies foundational chemistry to engineering-style problems. The course connects molecular explanations with quantitative analysis and asks students to consider the safety and sustainability implications of chemical processes.",
    highlights: [
      { label: "Focus", value: "Engineering chemistry" },
      { label: "Final exam", value: "50%" },
      { label: "Tutorials", value: "2 hours weekly" },
      { label: "Archived AI policy", value: "Conditional use" },
    ],
    topics: [
      "Stoichiometry, chemical reactions, compounds, mixtures, and unit conversion",
      "Gas pressure, kinetic molecular theory, ideal and real gases, and states of matter",
      "Reaction rates, concentration effects, temperature effects, and collision theory",
      "Phase equilibrium, phase diagrams, solutions, and colligative properties",
      "Chemical equilibrium, redox reactions, galvanic cells, and the Nernst equation",
    ],
    outcomes: [
      "Explain ideal-system behavior using the molecular nature of matter.",
      "Balance reactions and perform stoichiometric and ideal-gas calculations.",
      "Select and apply appropriate laws for equilibrium and reaction-rate problems.",
      "Identify safety and sustainability concerns in chemical processes.",
    ],
    gradingSchemes: [
      {
        assessments: [
          { name: "Tutorial participation", weight: "10%", detail: "The best nine of ten tutorial grades counted." },
          { name: "Mobius assignments", weight: "10%", detail: "Six approximately biweekly online assignments." },
          { name: "Midterm exam", weight: "30%", detail: "In-person in the archived offering." },
          { name: "Final exam", weight: "50%", detail: "In-person during the final examination period." },
        ],
      },
    ],
    gradingNotes: [
      "If the weighted midterm-and-final average was below 50%, that exam average became the course grade.",
      "Archived exams allowed one double-sided letter-sized reference sheet and any calculator.",
    ],
    materials: [
      "No required paid material was listed.",
      "Optional: General Chemistry: Principles and Modern Applications by Petrucci et al.; previous editions were acceptable.",
      "A copy of the optional text was held on reserve at the Davis Centre Library.",
    ],
    workload: [
      "Weekly two-hour tutorials emphasized problem solving in groups of two or three.",
      "Mobius assignments were available for roughly two weeks and due approximately every other week.",
      "The course progressed through six large units, with reading week and first-year midterm week interrupting the sequence.",
    ],
    policies: [
      "No late tutorials or Mobius assignments were accepted in the archived offering.",
      "Generative AI could be used only where the instructor or assignment instructions explicitly permitted it, with documentation, citation, and acknowledgement.",
      "Students remained responsible for the accuracy and originality of any work supported by permitted AI tools.",
    ],
  },
  {
    code: "SE 101",
    slug: "se-101",
    title: "Introduction to Methods of Software Engineering",
    archivedTerm: "Fall 2025",
    outlineUrl: "https://outline.uwaterloo.ca/viewer/view/ngqdux",
    summary:
      "A project-driven introduction to software processes, teamwork, technical communication, professional practice, and development tools.",
    overview:
      "SE 101 introduces software engineering as both a technical process and a profession. Lectures cover lifecycle, management, communication, ethics, and risk, while labs build practical experience with tools ranging from Git and Python to databases and Android development.",
    highlights: [
      { label: "Largest component", value: "50% team project" },
      { label: "Final exam", value: "None listed" },
      { label: "Late-work buffer", value: "5 grace days" },
      { label: "Archived AI policy", value: "Required" },
    ],
    topics: [
      "Software requirements, architecture, design, implementation, testing, and maintenance",
      "Project planning, Agile methods, Scrum, and Kanban",
      "Professionalism, ethics, law, intellectual property, safety, and risk",
      "Technical communication and preparation for co-op",
      "Git/GitFlow, Python, PyTest, regular expressions, debugging, databases, and Android development",
    ],
    outcomes: [
      "Understand the major phases and supporting activities of the software lifecycle.",
      "Use foundational project-management and Agile concepts in team work.",
      "Recognize professional, ethical, legal, safety, and intellectual-property responsibilities.",
      "Build practical familiarity with common software-development tools and workflows.",
    ],
    gradingSchemes: [
      {
        assessments: [
          { name: "Team project", weight: "50%" },
          { name: "Labs", weight: "25%" },
          { name: "Quizzes", weight: "25%" },
          {
            name: "Co-op Fundamentals for Engineering",
            weight: "Listed as 5%*",
            detail: "The archived table lists this separately; confirm how it applies in the current offering.",
          },
        ],
      },
    ],
    gradingNotes: [
      "The Fall 2025 assessment table appears to total more than 100% when the separately listed co-op component is included, so students should verify the current grading scheme.",
      "Deliverables were normally due at 5:00 p.m., and the course provided five grace days across the term.",
    ],
    materials: [
      "Readings were provided free through Piazza and/or LEARN.",
      "Required tools included LEARN, Piazza, Waterloo GitLab, Python, and MySQL.",
      "A laptop was expected, and each project team needed access to an Android device or an approved alternative.",
    ],
    workload: [
      "Half of the listed grade came from a team project, making coordination and steady progress important.",
      "Labs covered the practical tools and methodologies listed in the course outcomes.",
      "The archived outline required students to activate their Waterloo GitLab account early in the term to avoid a course-grade penalty.",
    ],
    policies: [
      "Work submitted after 5:00 p.m. but before midnight lost 10%; later work lost 25% per day in the archived offering.",
      "Assignments could be automatically graded and checked for similarity using tools such as MOSS.",
      "The archived outline explicitly required generative AI for this course; current instructors and assignment instructions determine acceptable use.",
    ],
  },
];

export const getCourseBySlug = (slug: string) =>
  COURSES.find((course) => course.slug === slug);
