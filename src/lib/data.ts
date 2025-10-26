import type { Lesson, VocabularyItem, ProgressChartData } from '@/lib/types';

export const lessonsData: Lesson[] = [
  {
    id: 'present-simple',
    title: 'Present Simple Tense',
    description: 'Learn how to use the present simple tense for habits, routines, and general truths.',
    imageUrl: '1',
    content: `
The **Present Simple** tense is one of the most fundamental tenses in English. We use it to talk about things that are generally true, habits, and routines.

### Structure

- **Positive:** Subject + Verb (add -s for he/she/it) + ...
  - *Example:* I **play** tennis every Saturday.
  - *Example:* She **plays** tennis every Saturday.

- **Negative:** Subject + do/does + not + Verb + ...
  - *Example:* We **do not watch** TV in the morning.
  - *Example:* He **does not watch** TV in the morning.

- **Question:** Do/Does + Subject + Verb + ...?
  - *Example:* **Do** you **like** coffee?
  - *Example:* **Does** she **like** coffee?

### When to Use It

1.  **Habits and Routines:**
    - I **get up** at 7 AM every day.
    - They often **go** to the cinema.

2.  **General Facts or Truths:**
    - The Earth **revolves** around the Sun.
    - Water **boils** at 100 degrees Celsius.

3.  **Scheduled Events (in the near future):**
    - The train **leaves** at 5 PM.
    - Our class **starts** next week.
    `,
    quiz: [
      {
        question: 'Which sentence is correct?',
        options: ['She play the piano.', 'She plays the piano.', 'She is plays the piano.', 'She playes the piano.'],
        correctAnswer: 'She plays the piano.',
      },
      {
        question: 'What is the negative form of "He works here"?',
        options: ['He not works here.', 'He dont work here.', 'He doesnt work here.', 'He does not work here.'],
        correctAnswer: 'He does not work here.',
      },
      {
        question: 'Choose the correct question form.',
        options: ['Do you likes ice cream?', 'Does you like ice cream?', 'Do you like ice cream?', 'Does you likes ice cream?'],
        correctAnswer: 'Do you like ice cream?',
      },
    ],
  },
  {
    id: 'articles',
    title: 'Articles: A, An, The',
    description: 'Master the use of definite and indefinite articles.',
    imageUrl: '2',
    content: `
Articles are words that define a noun as specific or unspecific. English has two types of articles: **the** and **a/an**.

### Indefinite Articles: A and An

We use **a** or **an** when we are talking about something in a general way, or when we mention something for the first time.

- Use **a** before words that start with a consonant sound.
  - *Example:* **a** book, **a** car, **a** university

- Use **an** before words that start with a vowel sound.
  - *Example:* **an** apple, **an** hour, **an** umbrella

### Definite Article: The

We use **the** when we are talking about something specific, something that has already been mentioned, or something unique.

1.  **Specific Nouns:**
    - I saw a cat. **The** cat was black. (The specific cat I just mentioned)

2.  **Unique Things:**
    - **The** sun, **the** moon, **the** internet

3.  **Superlatives:**
    - **The** tallest building, **the** best student

### No Article

We don't use an article when talking about general ideas, concepts, or plural nouns in a general sense.

- *Example:* I like **music**.
- *Example:* **Cats** are independent animals.
    `,
    quiz: [
      {
        question: 'I need to buy ___ new phone.',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 'a',
      },
      {
        question: 'Can you pass me ___ salt, please?',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 'the',
      },
      {
        question: 'She is ___ honest person.',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 'an',
      },
    ],
  },
  {
    id: 'prepositions-of-time',
    title: 'Prepositions of Time',
    description: 'Learn when to use "in", "on", and "at" for time.',
    imageUrl: '3',
    content: `
Prepositions of time like **in**, **on**, and **at** help us talk about when something happens.

### At

Use **at** for precise times.
- **at** 3 o'clock
- **at** 10:30 AM
- **at** noon
- **at** dinnertime
- **at** bedtime
- **at** sunrise
- **at** the moment

### On

Use **on** for days and dates.
- **on** Sunday
- **on** Tuesdays
- **on** 6 March
- **on** 25 Dec. 2010
- **on** Christmas Day
- **on** my birthday
- **on** New Year's Eve

### In

Use **in** for months, years, centuries and long periods.
- **in** May
- **in** summer
- **in** the summer
- **in** 1990
- **in** the 1990s
- **in** the next century
- **in** the Ice Age
- **in** the past/future
    `,
    quiz: [
      {
        question: 'My birthday is ___ October.',
        options: ['in', 'on', 'at'],
        correctAnswer: 'in',
      },
      {
        question: 'The meeting is ___ Friday.',
        options: ['in', 'on', 'at'],
        correctAnswer: 'on',
      },
      {
        question: 'I will see you ___ 10 AM.',
        options: ['in', 'on', 'at'],
        correctAnswer: 'at',
      },
    ],
  },
  {
    id: 'conditionals',
    title: 'Conditionals (If Clauses)',
    description: 'Understand and use conditional sentences.',
    imageUrl: '4',
    content: `
Conditional sentences are used to express that the action in the main clause (without if) can only take place if a certain condition (in the clause with if) is fulfilled. There are four main types of conditionals.

### The Zero Conditional

Used for general truths and scientific facts.
- **Structure:** If + Present Simple, ... Present Simple
- *Example:* If you **heat** water, it **boils**.

### The First Conditional

Used for a possible situation in the future.
- **Structure:** If + Present Simple, ... will + Base Verb
- *Example:* If it **rains** tomorrow, we **will stay** home.

### The Second Conditional

Used for hypothetical or unlikely situations in the present or future.
- **Structure:** If + Past Simple, ... would + Base Verb
- *Example:* If I **had** a million dollars, I **would travel** the world.

### The Third Conditional

Used for a hypothetical situation in the past that did not happen.
- **Structure:** If + Past Perfect, ... would have + Past Participle
- *Example:* If I **had studied** harder, I **would have passed** the exam.
`,
    quiz: [
      {
        question: 'If you heat ice, it ___',
        options: ['melts', 'melted', 'will melt', 'would melt'],
        correctAnswer: 'melts',
      },
      {
        question: 'If I ___ you, I would apologize.',
        options: ['am', 'was', 'were', 'be'],
        correctAnswer: 'were',
      },
      {
        question: 'She would have come if she ___ invited.',
        options: ['was', 'had been', 'has been', 'would be'],
        correctAnswer: 'had been',
      },
    ],
  },
];

export const vocabularyData: VocabularyItem[] = [
  {
    word: 'Ubiquitous',
    definition: 'Present, appearing, or found everywhere.',
    example: 'Mobile phones are ubiquitous these days.',
  },
  {
    word: 'Ephemeral',
    definition: 'Lasting for a very short time.',
    example: 'Fashion is ephemeral, but style is eternal.',
  },
  {
    word: 'Mellifluous',
    definition: '(of a voice or words) Sweet or musical; pleasant to hear.',
    example: 'She had a mellifluous voice that soothed everyone.',
  },
  {
    word: 'Pulchritudinous',
    definition: 'Having great physical beauty.',
    example: 'The model was praised for her pulchritudinous features.',
  },
  {
    word: 'Serendipity',
    definition: 'The occurrence and development of events by chance in a happy or beneficial way.',
    example: 'Discovering the old bookshop was a moment of pure serendipity.',
  },
];

export const progressChartData: ProgressChartData[] = [
  { name: 'Mon', 'Time Spent (min)': 30, 'Quizzes Taken': 2 },
  { name: 'Tue', 'Time Spent (min)': 45, 'Quizzes Taken': 3 },
  { name: 'Wed', 'Time Spent (min)': 20, 'Quizzes Taken': 1 },
  { name: 'Thu', 'Time Spent (min)': 60, 'Quizzes Taken': 4 },
  { name: 'Fri', 'Time Spent (min)': 35, 'Quizzes Taken': 2 },
  { name: 'Sat', 'Time Spent (min)': 75, 'Quizzes Taken': 5 },
  { name: 'Sun', 'Time Spent (min)': 15, 'Quizzes Taken': 1 },
];
