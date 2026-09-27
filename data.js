const chapter1Vocab = [
    // Greetings & Goodbyes
    { pl: "Cześć", en: "Hello / Bye" }, //
    { pl: "Dzień dobry", en: "Good morning / Good day" }, //
    { pl: "Dobry wieczór", en: "Good evening" }, //[cite: 1]
    { pl: "Dobranoc", en: "Good night" }, //[cite: 1]
    { pl: "Do widzenia", en: "Goodbye" }, //[cite: 1]
    { pl: "Do jutra", en: "See you tomorrow" }, //[cite: 1]
    { pl: "Do zobaczenia", en: "See you" }, //[cite: 1]
    { pl: "Na razie", en: "See you later / Bye for now" }, //[cite: 1]

    // Introductions & Personal Info
    { pl: "Jestem...", en: "I am..." }, //[cite: 1]
    { pl: "Nazywam się...", en: "My name is (first and last name)..." }, //[cite: 1]
    { pl: "Mam na imię...", en: "My name is (first name)..." }, //[cite: 1]
    { pl: "Miło mi", en: "Nice to meet you" }, //[cite: 1]
    { pl: "Bardzo mi miło", en: "Very nice to meet you" }, //[cite: 1]
    { pl: "Mnie również", en: "Me too / Likewise" }, //[cite: 1]
    { pl: "Miło mi cię poznać", en: "Nice to meet you (informal)" }, //[cite: 1]
    { pl: "Miło mi pana poznać", en: "Nice to meet you (formal, to a man)" }, //[cite: 1]
    { pl: "Miło mi panią poznać", en: "Nice to meet you (formal, to a woman)" }, //[cite: 1]
    { pl: "Jak masz na imię?", en: "What is your name? (informal)" }, //[cite: 1]
    { pl: "Jak się nazywasz?", en: "What is your name/surname? (informal)" }, //[cite: 1]
    { pl: "Jak pani/pan ma na imię?", en: "What is your name? (formal)" }, //[cite: 1]
    { pl: "Jak się pani/pan nazywa?", en: "What is your name/surname? (formal)" }, //[cite: 1]
    { pl: "Imię", en: "First name" }, //[cite: 1]
    { pl: "Nazwisko", en: "Last name" }, //[cite: 1]
    { pl: "Narodowość", en: "Nationality" }, //[cite: 1]
    { pl: "Adres", en: "Address" }, //[cite: 1]
    { pl: "Numer telefonu", en: "Phone number" }, //[cite: 1]

    // Classroom & Useful Phrases
    { pl: "Przepraszam", en: "Excuse me / I'm sorry" }, //[cite: 1]
    { pl: "Dziękuję / Dziękuję bardzo", en: "Thank you / Thank you very much" }, //[cite: 1]
    { pl: "Proszę", en: "Please / Here you go / You're welcome" }, //[cite: 1]
    { pl: "Tak", en: "Yes" }, //[cite: 1]
    { pl: "Nie", en: "No" }, //[cite: 1]
    { pl: "Nie rozumiem", en: "I don't understand" }, //[cite: 1]
    { pl: "Nie wiem", en: "I don't know" }, //[cite: 1]
    { pl: "Mam pytanie", en: "I have a question" }, //[cite: 1]
    { pl: "Proszę powtórzyć", en: "Please repeat" }, //[cite: 1]
    { pl: "Proszę przeliterować", en: "Please spell" }, //[cite: 1]
    { pl: "Proszę przeczytać", en: "Please read" }, //[cite: 1]
    { pl: "Proszę napisać", en: "Please write" }, //[cite: 1]
    { pl: "Co to znaczy?", en: "What does it mean?" }, //[cite: 1]
    { pl: "Co to jest?", en: "What is this?" }, //[cite: 1]
    { pl: "Jak się mówi po polsku...?", en: "How do you say ... in Polish?" }, //[cite: 1]
    { pl: "Gdzie jest...?", en: "Where is...?" }, //[cite: 1]
    { pl: "Czy tu można palić?", en: "Is smoking allowed here?" }, //[cite: 1]

    // Directions & Locations
    { pl: "na lewo", en: "to the left" }, //[cite: 1]
    { pl: "na prawo", en: "to the right" }, //[cite: 1]
    { pl: "tu / tutaj", en: "here" }, //[cite: 1]
    { pl: "tam", en: "there" }, //[cite: 1]

    // Nouns & Entities
    { pl: "szkoła", en: "school" }, //[cite: 1]
    { pl: "sekretariat", en: "secretariat / office" }, //[cite: 1]
    { pl: "prezentacja", en: "presentation" }, //[cite: 1]
    { pl: "ulica", en: "street" }, //[cite: 1]
    { pl: "toaleta", en: "toilet" }, //[cite: 1]
    { pl: "woda", en: "water" }, //[cite: 1]
    { pl: "kawa", en: "coffee" }, //[cite: 1]
    { pl: "herbata", en: "tea" }, //[cite: 1]
    { pl: "cukier", en: "sugar" }, //[cite: 1]
    { pl: "program kulturalny", en: "cultural program" }, //[cite: 1]
    { pl: "film", en: "film / movie" }, //[cite: 1]
    { pl: "spotkanie", en: "meeting" }, //[cite: 1]
    { pl: "lekcja", en: "lesson" }, //[cite: 1]
    { pl: "student / studentka", en: "student (male/female)" }, //[cite: 1]
    { pl: "nauczycielka", en: "teacher (female)" }, //[cite: 1]
    { pl: "pan", en: "sir / Mr." }, //[cite: 1]
    { pl: "pani", en: "madam / Mrs." }, //[cite: 1]
    { pl: "alfabet", en: "alphabet" }, //[cite: 1]
    { pl: "liczebniki", en: "numbers" }, //[cite: 1]

    // Numbers (0-10)
    { pl: "zero", en: "0" }, //[cite: 1]
    { pl: "jeden", en: "1" }, //[cite: 1]
    { pl: "dwa", en: "2" }, //[cite: 1]
    { pl: "trzy", en: "3" }, //[cite: 1]
    { pl: "cztery", en: "4" }, //[cite: 1]
    { pl: "pięć", en: "5" }, //[cite: 1]
    { pl: "sześć", en: "6" }, //[cite: 1]
    { pl: "siedem", en: "7" }, //[cite: 1]
    { pl: "osiem", en: "8" }, //[cite: 1]
    { pl: "dziewięć", en: "9" }, //[cite: 1]
    { pl: "dziesięć", en: "10" } //[cite: 1]
];

const chapter1Verbs = [
    {
        infinitive: "być",
        meaning: "to be",
        conjugations: [
            { pronoun: "ja", form: "jestem", meaning: "I am" },
            { pronoun: "ty", form: "jesteś", meaning: "you are" },
            { pronoun: "on / ona / ono", form: "jest", meaning: "he / she / it is" },
            { pronoun: "my", form: "jesteśmy", meaning: "we are" },
            { pronoun: "wy", form: "jesteście", meaning: "you (plural) are" },
            { pronoun: "oni / one", form: "są", meaning: "they are" }
        ]
    },
    {
        infinitive: "mieć",
        meaning: "to have",
        conjugations: [
            { pronoun: "ja", form: "mam", meaning: "I have" },
            { pronoun: "ty", form: "masz", meaning: "you have" },
            { pronoun: "on / ona / ono", form: "ma", meaning: "he / she / it has" },
            { pronoun: "my", form: "mamy", meaning: "we have" },
            { pronoun: "wy", form: "macie", meaning: "you (plural) have" },
            { pronoun: "oni / one", form: "mają", meaning: "they have" }
        ]
    },
    {
        infinitive: "nazywać się",
        meaning: "to be called",
        conjugations: [
            { pronoun: "ja", form: "nazywam się", meaning: "I am called" },
            { pronoun: "ty", form: "nazywasz się", meaning: "you are called" },
            { pronoun: "on / ona / ono", form: "nazywa się", meaning: "he / she / it is called" },
            { pronoun: "my", form: "nazywamy się", meaning: "we are called" },
            { pronoun: "wy", form: "nazywacie się", meaning: "you (plural) are called" },
            { pronoun: "oni / one", form: "nazywają się", meaning: "they are called" }
        ]
    },
    {
        infinitive: "rozumieć",
        meaning: "to understand",
        conjugations: [
            { pronoun: "ja", form: "rozumiem", meaning: "I understand" },
            { pronoun: "ty", form: "rozumiesz", meaning: "you understand" },
            { pronoun: "on / ona / ono", form: "rozumie", meaning: "he / she / it understands" },
            { pronoun: "my", form: "rozumiemy", meaning: "we understand" },
            { pronoun: "wy", form: "rozumiecie", meaning: "you (plural) understand" },
            { pronoun: "oni / one", form: "rozumieją", meaning: "they understand" }
        ]
    },
    {
        infinitive: "wiedzieć",
        meaning: "to know (facts)",
        conjugations: [
            { pronoun: "ja", form: "wiem", meaning: "I know" },
            { pronoun: "ty", form: "wiesz", meaning: "you know" },
            { pronoun: "on / ona / ono", form: "wie", meaning: "he / she / it knows" },
            { pronoun: "my", form: "wiemy", meaning: "we know" },
            { pronoun: "wy", form: "wiecie", meaning: "you (plural) know" },
            { pronoun: "oni / one", form: "wiedzą", meaning: "they know" }
        ]
    },
    {
        infinitive: "mówić",
        meaning: "to speak",
        conjugations: [
            { pronoun: "ja", form: "mówię", meaning: "I speak" },
            { pronoun: "ty", form: "mówisz", meaning: "you speak" },
            { pronoun: "on / ona / ono", form: "mówi", meaning: "he / she / it speaks" },
            { pronoun: "my", form: "mówimy", meaning: "we speak" },
            { pronoun: "wy", form: "mówicie", meaning: "you (plural) speak" },
            { pronoun: "oni / one", form: "mówią", meaning: "they speak" }
        ]
    }
];