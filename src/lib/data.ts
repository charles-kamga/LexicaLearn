import type { Lesson, VocabularyItem, ProgressChartData } from '@/lib/types';

export const lessonsData: Lesson[] = [
  {
    id: 'personal-pronouns-and-to-be',
    title: 'Personal Pronouns & "to be"',
    description: 'Learn about subject pronouns and the verb "to be".',
    imageUrl: '5',
    content: `
<h3>Personal Pronouns</h3>
<p>Personal pronouns replace nouns. The most common are subject pronouns:</p>
<ul>
  <li><b>I</b> - (First person singular)</li>
  <li><b>You</b> - (Second person singular/plural)</li>
  <li><b>He</b> - (Third person singular, masculine)</li>
  <li><b>She</b> - (Third person singular, feminine)</li>
  <li><b>It</b> - (Third person singular, neuter/object)</li>
  <li><b>We</b> - (First person plural)</li>
  <li><b>They</b> - (Third person plural)</li>
</ul>

<h3>The Verb "to be"</h3>
<p>The verb "to be" is one of the most important verbs. Its form changes with the pronoun.</p>
<p><b>Present Simple of "to be"</b></p>
<ul>
  <li>I <b>am</b></li>
  <li>You <b>are</b></li>
  <li>He/She/It <b>is</b></li>
  <li>We <b>are</b></li>
  <li>They <b>are</b></li>
</ul>
<p><b>Example:</b> She <b>is</b> a doctor. They <b>are</b> happy.</p>
    `,
    quiz: [
      {
        question: '___ are students.',
        options: ['We', 'He', 'She'],
        correctAnswer: 'We',
      },
      {
        question: 'Mark is an engineer. ___ is very smart.',
        options: ['She', 'It', 'He'],
        correctAnswer: 'He',
      },
       {
        question: 'The cat is sleeping. ___ is on the sofa.',
        options: ['He', 'She', 'It'],
        correctAnswer: 'It',
      },
    ],
  },
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
    id: 'present-continuous',
    title: 'Present Continuous',
    description: 'For actions happening right now.',
    imageUrl: '6',
    content: `
<h3>Present Continuous</h3>
<p>We use the Present Continuous for actions happening at the moment of speaking.</p>
<p><b>Structure:</b> Subject + am/is/are + Verb-ing</p>
<ul>
  <li><b>Positive:</b> I <b>am reading</b> a book.</li>
  <li><b>Negative:</b> She <b>is not (isn't) sleeping</b>.</li>
  <li><b>Question:</b> <b>Are</b> you <b>working</b>?</li>
</ul>
<p><b>Use cases:</b></p>
<ul>
    <li>Actions happening now: <i>Look! The baby <b>is smiling</b>.</i></li>
    <li>Temporary situations: <i>He <b>is staying</b> with his friend for a week.</i></li>
    <li>Future plans (informal): <i>We <b>are meeting</b> at 6 PM.</i></li>
</ul>
    `,
    quiz: [
      {
        question: 'What ___ you doing?',
        options: ['are', 'is', 'am'],
        correctAnswer: 'are',
      },
      {
        question: 'She ___ to music right now.',
        options: ['listens', 'is listening', 'listen'],
        correctAnswer: 'is listening',
      },
    ],
  },
  {
    id: 'past-simple',
    title: 'Past Simple',
    description: 'For finished actions in the past.',
    imageUrl: '7',
    content: `
<h3>Past Simple</h3>
<p>The Past Simple tense is used for actions that started and finished at a specific time in the past.</p>
<p><b>Structure (Regular Verbs):</b> Subject + Verb-ed</p>
<p><b>Structure (Irregular Verbs):</b> Subject + 2nd form of verb</p>
<ul>
  <li><b>Positive:</b> I <b>visited</b> Paris last year. / She <b>went</b> to the cinema.</li>
  <li><b>Negative:</b> They <b>did not (didn't) finish</b> the project.</li>
  <li><b>Question:</b> <b>Did</b> you <b>see</b> that movie?</li>
</ul>
    `,
    quiz: [
      {
        question: 'I ___ to the store yesterday.',
        options: ['go', 'goed', 'went'],
        correctAnswer: 'went',
      },
      {
        question: '___ you finish your homework?',
        options: ['Did', 'Do', 'Have'],
        correctAnswer: 'Did',
      },
    ],
  },
  {
    id: 'future-tenses',
    title: 'Future: Will vs. Going to',
    description: 'Learn the difference between "will" and "going to".',
    imageUrl: '8',
    content: `
<h3>Future Tenses</h3>
<p>Both "will" and "be going to" are used to talk about the future, but in different contexts.</p>
<p><b>Using "will"</b></p>
<ul>
  <li>For spontaneous decisions: <i>I think I <b>will have</b> the salad.</i></li>
  <li>For promises or offers: <i>I <b>will help</b> you with your bags.</i></li>
  <li>For predictions based on opinion: <i>I think it <b>will rain</b> tomorrow.</i></li>
</ul>
<p><b>Using "be going to"</b></p>
<ul>
  <li>For future plans and intentions: <i>I <b>am going to visit</b> my grandparents next week.</i></li>
  <li>For predictions based on present evidence: <i>Look at those clouds! It's <b>going to rain</b>.</i></li>
</ul>
    `,
    quiz: [
      {
        question: 'A: The phone is ringing! B: I ___ get it!',
        options: ['am going to', 'will'],
        correctAnswer: 'will',
      },
      {
        question: 'We have tickets for the concert. We ___ see Taylor Swift next month!',
        options: ['will', 'are going to'],
        correctAnswer: 'are going to',
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
    id: 'prepositions-of-place',
    title: 'Prepositions of Place',
    description: 'Learn "in", "on", and "at" for locations.',
    imageUrl: '9',
    content: `
<h3>Prepositions of Place</h3>
<p>"In", "on", and "at" are also used for locations.</p>
<p><b>In:</b> Used for enclosed spaces or larger areas.</p>
<ul>
  <li>in a box</li>
  <li>in a room</li>
  <li>in a country (e.g., in France)</li>
  <li>in a city (e.g., in London)</li>
</ul>
<p><b>On:</b> Used for surfaces.</p>
<ul>
  <li>on the table</li>
  <li>on the wall</li>
  <li>on the floor</li>
  <li>on a page</li>
</ul>
<p><b>At:</b> Used for specific points or locations.</p>
<ul>
  <li>at the bus stop</li>
  <li>at the door</li>
  <li>at the top of the page</li>
  <li>at the end of the street</li>
</ul>
    `,
    quiz: [
      {
        question: 'The book is ___ the table.',
        options: ['in', 'on', 'at'],
        correctAnswer: 'on',
      },
      {
        question: 'I live ___ Paris.',
        options: ['in', 'on', 'at'],
        correctAnswer: 'in',
      },
       {
        question: 'Wait for me ___ the bus stop.',
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
  {
    id: 'modal-verbs',
    title: 'Modal Verbs',
    description: 'Learn to use can, could, must, should, etc.',
    imageUrl: '10',
    content: `
<h3>Modal Verbs</h3>
<p>Modal verbs are auxiliary verbs that express necessity, possibility, permission, or ability.</p>
<ul>
  <li><b>Can:</b> Ability / Permission (informal) - <i>I <b>can</b> swim. <b>Can</b> I go?</i></li>
  <li><b>Could:</b> Past ability / Polite request - <i>I <b>could</b> run fast. <b>Could</b> you help me?</i></li>
  <li><b>Must:</b> Obligation / Certainty - <i>You <b>must</b> stop. He <b>must</b> be tired.</i></li>
  <li><b>Should:</b> Advice / Recommendation - <i>You <b>should</b> see a doctor.</i></li>
  <li><b>May:</b> Permission (formal) / Possibility - <i><b>May</b> I enter? It <b>may</b> rain.</i></li>
  <li><b>Might:</b> Possibility (less certain than may) - <i>He <b>might</b> come later.</i></li>
</ul>
    `,
    quiz: [
      {
        question: 'You ___ finish your homework before you go out.',
        options: ['can', 'must', 'might'],
        correctAnswer: 'must',
      },
      {
        question: '___ I borrow your pen, please?',
        options: ['Must', 'Could', 'Should'],
        correctAnswer: 'Could',
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
