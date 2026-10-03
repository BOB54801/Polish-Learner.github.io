const vocabulaire = [
    // Salutations et adieux
    { fr: "Bonjour", pl: "Dzień dobry", niveau: "Chapitre 1", categorie: "Salutations et adieux" },
    { fr: "Bonsoir", pl: "Dobry wieczór", niveau: "Chapitre 1", categorie: "Salutations et adieux" },
    { fr: "Bonne nuit", pl: "Dobranoc", niveau: "Chapitre 1", categorie: "Salutations et adieux" },
    { fr: "Salut", pl: "Cześć", niveau: "Chapitre 1", categorie: "Salutations et adieux" },
    { fr: "Au revoir", pl: "Do widzenia", niveau: "Chapitre 1", categorie: "Salutations et adieux" },
    { fr: "À bientôt", pl: "Do zobaczenia", niveau: "Chapitre 1", categorie: "Salutations et adieux" },
    { fr: "À demain", pl: "Do jutra", niveau: "Chapitre 1", categorie: "Salutations et adieux" },
    { fr: "À plus tard", pl: "Na razie", niveau: "Chapitre 1", categorie: "Salutations et adieux" },

    // Présentations (Przedstawianie się)
    { fr: "Je suis...", pl: "Jestem...", niveau: "Chapitre 1", categorie: "Présentations" },
    { fr: "Je m'appelle (Nom de famille)", pl: "Nazywam się...", niveau: "Chapitre 1", categorie: "Présentations" },
    { fr: "Mon prénom est...", pl: "Mam na imię...", niveau: "Chapitre 1", categorie: "Présentations" },
    { fr: "Comment t'appelles-tu ? (Informel)", pl: "Jak masz na imię?", niveau: "Chapitre 1", categorie: "Présentations" },
    { fr: "Comment t'appelles-tu ? (Nom, Informel)", pl: "Jak się nazywasz?", niveau: "Chapitre 1", categorie: "Présentations" },
    { fr: "Enchanté(e)", pl: "Miło mi", niveau: "Chapitre 1", categorie: "Présentations" },
    { fr: "Moi de même", pl: "Mnie również", niveau: "Chapitre 1", categorie: "Présentations" },
    { fr: "Ravi de te rencontrer", pl: "Miło mi cię poznać", niveau: "Chapitre 1", categorie: "Présentations" },

    // Mots de base (Podstawowe zwroty)
    { fr: "Oui", pl: "Tak", niveau: "Chapitre 1", categorie: "Mots de base" },
    { fr: "Non", pl: "Nie", niveau: "Chapitre 1", categorie: "Mots de base" },
    { fr: "S'il vous plaît / Je vous en prie", pl: "Proszę", niveau: "Chapitre 1", categorie: "Mots de base" },
    { fr: "Merci", pl: "Dziękuję", niveau: "Chapitre 1", categorie: "Mots de base" },
    { fr: "Merci beaucoup", pl: "Dziękuję bardzo", niveau: "Chapitre 1", categorie: "Mots de base" },
    { fr: "Pardon / Excusez-moi", pl: "Przepraszam", niveau: "Chapitre 1", categorie: "Mots de base" },
    { fr: "Je ne comprends pas", pl: "Nie rozumiem", niveau: "Chapitre 1", categorie: "Mots de base" },
    { fr: "Je ne sais pas", pl: "Nie wiem", niveau: "Chapitre 1", categorie: "Mots de base" },
    { fr: "J'ai une question", pl: "Mam pytanie", niveau: "Chapitre 1", categorie: "Mots de base" },
    { fr: "Qu'est-ce que ça veut dire ?", pl: "Co to znaczy?", niveau: "Chapitre 1", categorie: "Mots de base" },
    { fr: "Comment dit-on en polonais... ?", pl: "Jak się mówi po polsku...?", niveau: "Chapitre 1", categorie: "Mots de base" },

    // En classe (W klasie)
    { fr: "Répétez, s'il vous plaît", pl: "Proszę powtórzyć", niveau: "Chapitre 1", categorie: "En classe" },
    { fr: "Épelez, s'il vous plaît", pl: "Proszę przeliterować", niveau: "Chapitre 1", categorie: "En classe" },
    { fr: "Lisez, s'il vous plaît", pl: "Proszę przeczytać", niveau: "Chapitre 1", categorie: "En classe" },
    { fr: "Écrivez, s'il vous plaît", pl: "Proszę napisać", niveau: "Chapitre 1", categorie: "En classe" },
    { fr: "Professeur (femme)", pl: "Nauczycielka", niveau: "Chapitre 1", categorie: "En classe" },
    { fr: "Étudiant", pl: "Student", niveau: "Chapitre 1", categorie: "En classe" },
    { fr: "Étudiante", pl: "Studentka", niveau: "Chapitre 1", categorie: "En classe" },
    { fr: "Secrétaire (femme)", pl: "Sekretarka", niveau: "Chapitre 1", categorie: "En classe" },
    { fr: "École", pl: "Szkoła", niveau: "Chapitre 1", categorie: "En classe" },

    // Lieux et Directions
    { fr: "Où est... ?", pl: "Gdzie jest...?", niveau: "Chapitre 1", categorie: "Lieux et directions" },
    { fr: "À gauche", pl: "Na lewo", niveau: "Chapitre 1", categorie: "Lieux et directions" },
    { fr: "À droite", pl: "Na prawo", niveau: "Chapitre 1", categorie: "Lieux et directions" },
    { fr: "Ici", pl: "Tu / Tutaj", niveau: "Chapitre 1", categorie: "Lieux et directions" },
    { fr: "Là-bas", pl: "Tam", niveau: "Chapitre 1", categorie: "Lieux et directions" },
    { fr: "Toilettes", pl: "Toaleta", niveau: "Chapitre 1", categorie: "Lieux et directions" },
    { fr: "Secrétariat", pl: "Sekretariat", niveau: "Chapitre 1", categorie: "Lieux et directions" },

    // Nombres 0-10 (Liczebniki)
    { fr: "Zéro", pl: "Zero", niveau: "Chapitre 1", categorie: "Nombres 0-10" },
    { fr: "Un", pl: "Jeden", niveau: "Chapitre 1", categorie: "Nombres 0-10" },
    { fr: "Deux", pl: "Dwa", niveau: "Chapitre 1", categorie: "Nombres 0-10" },
    { fr: "Trois", pl: "Trzy", niveau: "Chapitre 1", categorie: "Nombres 0-10" },
    { fr: "Quatre", pl: "Cztery", niveau: "Chapitre 1", categorie: "Nombres 0-10" },
    { fr: "Cinq", pl: "Pięć", niveau: "Chapitre 1", categorie: "Nombres 0-10" },
    { fr: "Six", pl: "Sześć", niveau: "Chapitre 1", categorie: "Nombres 0-10" },
    { fr: "Sept", pl: "Siedem", niveau: "Chapitre 1", categorie: "Nombres 0-10" },
    { fr: "Huit", pl: "Osiem", niveau: "Chapitre 1", categorie: "Nombres 0-10" },
    { fr: "Neuf", pl: "Dziewięć", niveau: "Chapitre 1", categorie: "Nombres 0-10" },
    { fr: "Dix", pl: "Dziesięć", niveau: "Chapitre 1", categorie: "Nombres 0-10" },

    // Informations personnelles (Dane personalne)
    { fr: "Prénom", pl: "Imię", niveau: "Chapitre 1", categorie: "Informations personnelles" },
    { fr: "Nom de famille", pl: "Nazwisko", niveau: "Chapitre 1", categorie: "Informations personnelles" },
    { fr: "Nationalité", pl: "Narodowość", niveau: "Chapitre 1", categorie: "Informations personnelles" },
    { fr: "Adresse", pl: "Adres", niveau: "Chapitre 1", categorie: "Informations personnelles" },
    { fr: "Numéro de téléphone", pl: "Numer telefonu", niveau: "Chapitre 1", categorie: "Informations personnelles" },

    // Vocabulaire divers
    { fr: "Eau", pl: "Woda", niveau: "Chapitre 1", categorie: "Vocabulaire divers" },
    { fr: "Café", pl: "Kawa", niveau: "Chapitre 1", categorie: "Vocabulaire divers" },
    { fr: "Thé", pl: "Herbata", niveau: "Chapitre 1", categorie: "Vocabulaire divers" },
    { fr: "Sucre", pl: "Cukier", niveau: "Chapitre 1", categorie: "Vocabulaire divers" },
    { fr: "Internet", pl: "Internet", niveau: "Chapitre 1", categorie: "Vocabulaire divers" },
    { fr: "Ordinateurs", pl: "Komputery", niveau: "Chapitre 1", categorie: "Vocabulaire divers" },
    { fr: "Gratuit", pl: "Gratis", niveau: "Chapitre 1", categorie: "Vocabulaire divers" },
    { fr: "Fatigué", pl: "Zmęczony", niveau: "Chapitre 1", categorie: "Vocabulaire divers" },
    { fr: "Programme culturel", pl: "Program kulturalny", niveau: "Chapitre 1", categorie: "Vocabulaire divers" }
    
    // État et conversation
    { fr: "Comment ça va ?", pl: "Co słychać?", niveau: "Chapitre 2", categorie: "État et conversation" },
    { fr: "Quoi de neuf pour toi ?", pl: "Co u ciebie?", niveau: "Chapitre 2", categorie: "État et conversation" },
    { fr: "Et toi ?", pl: "A u ciebie?", niveau: "Chapitre 2", categorie: "État et conversation" },
    { fr: "Merci, tout va bien", pl: "Dziękuję, wszystko dobrze", niveau: "Chapitre 2", categorie: "État et conversation" },
    { fr: "Tout est en ordre", pl: "Wszystko w porządku", niveau: "Chapitre 2", categorie: "État et conversation" },
    { fr: "Quoi de neuf ?", pl: "Co nowego?", niveau: "Chapitre 2", categorie: "État et conversation" },
    { fr: "Rien de nouveau", pl: "Nic nowego", niveau: "Chapitre 2", categorie: "État et conversation" },
    { fr: "Comme d'habitude / Rien de spécial", pl: "Po staremu", niveau: "Chapitre 2", categorie: "État et conversation" },

    // Origines et Habitation
    { fr: "D'où viens-tu ?", pl: "Skąd jesteś?", niveau: "Chapitre 2", categorie: "Origines et Habitation" },
    { fr: "Je viens de...", pl: "Jestem z...", niveau: "Chapitre 2", categorie: "Origines et Habitation" },
    { fr: "Où habites-tu ?", pl: "Gdzie mieszkasz?", niveau: "Chapitre 2", categorie: "Origines et Habitation" },
    { fr: "J'habite à...", pl: "Mieszkam w...", niveau: "Chapitre 2", categorie: "Origines et Habitation" },

    // Pays
    { fr: "Pologne", pl: "Polska", niveau: "Chapitre 2", categorie: "Pays" },
    { fr: "Angleterre", pl: "Anglia", niveau: "Chapitre 2", categorie: "Pays" },
    { fr: "Allemagne", pl: "Niemcy", niveau: "Chapitre 2", categorie: "Pays" },
    { fr: "France", pl: "Francja", niveau: "Chapitre 2", categorie: "Pays" },
    { fr: "Espagne", pl: "Hiszpania", niveau: "Chapitre 2", categorie: "Pays" },
    { fr: "Italie", pl: "Włochy", niveau: "Chapitre 2", categorie: "Pays" },
    { fr: "Autriche", pl: "Austria", niveau: "Chapitre 2", categorie: "Pays" },
    { fr: "Russie", pl: "Rosja", niveau: "Chapitre 2", categorie: "Pays" },

    // Questions et Raisons
    { fr: "Pourquoi ?", pl: "Dlaczego?", niveau: "Chapitre 2", categorie: "Questions et Raisons" },
    { fr: "Parce que", pl: "Bo", niveau: "Chapitre 2", categorie: "Questions et Raisons" },
    { fr: "Pour (afin de)", pl: "Żeby", niveau: "Chapitre 2", categorie: "Questions et Raisons" },

    // Pronoms personnels
    { fr: "Je", pl: "Ja", niveau: "Chapitre 2", categorie: "Pronoms personnels" },
    { fr: "Tu", pl: "Ty", niveau: "Chapitre 2", categorie: "Pronoms personnels" },
    { fr: "Il", pl: "On", niveau: "Chapitre 2", categorie: "Pronoms personnels" },
    { fr: "Elle", pl: "Ona", niveau: "Chapitre 2", categorie: "Pronoms personnels" },
    { fr: "Il/Elle (neutre)", pl: "Ono", niveau: "Chapitre 2", categorie: "Pronoms personnels" },
    { fr: "Nous", pl: "My", niveau: "Chapitre 2", categorie: "Pronoms personnels" },
    { fr: "Vous (pluriel)", pl: "Wy", niveau: "Chapitre 2", categorie: "Pronoms personnels" },
    { fr: "Ils", pl: "Oni", niveau: "Chapitre 2", categorie: "Pronoms personnels" },
    { fr: "Elles", pl: "One", niveau: "Chapitre 2", categorie: "Pronoms personnels" },
    { fr: "Messieurs-Dames", pl: "Państwo", niveau: "Chapitre 2", categorie: "Pronoms personnels" },
    { fr: "Messieurs", pl: "Panowie", niveau: "Chapitre 2", categorie: "Pronoms personnels" },
    { fr: "Mesdames", pl: "Panie", niveau: "Chapitre 2", categorie: "Pronoms personnels" },

    // Détails personnels
    { fr: "Mon petit ami", pl: "Mój chłopak", niveau: "Chapitre 2", categorie: "Détails personnels" },
    { fr: "Ma petite amie", pl: "Moja dziewczyna", niveau: "Chapitre 2", categorie: "Détails personnels" },
    { fr: "Mon hobby", pl: "Moje hobby", niveau: "Chapitre 2", categorie: "Détails personnels" },
    { fr: "Données personnelles", pl: "Dane osobowe", niveau: "Chapitre 2", categorie: "Détails personnels" },

    // Nombres 11-29
    { fr: "Onze", pl: "Jedenaście", niveau: "Chapitre 2", categorie: "Nombres 11-29" },
    { fr: "Douze", pl: "Dwanaście", niveau: "Chapitre 2", categorie: "Nombres 11-29" },
    { fr: "Treize", pl: "Trzynaście", niveau: "Chapitre 2", categorie: "Nombres 11-29" },
    { fr: "Quatorze", pl: "Czternaście", niveau: "Chapitre 2", categorie: "Nombres 11-29" },
    { fr: "Quinze", pl: "Piętnaście", niveau: "Chapitre 2", categorie: "Nombres 11-29" },
    { fr: "Seize", pl: "Szesnaście", niveau: "Chapitre 2", categorie: "Nombres 11-29" },
    { fr: "Dix-sept", pl: "Siedemnaście", niveau: "Chapitre 2", categorie: "Nombres 11-29" },
    { fr: "Dix-huit", pl: "Osiemnaście", niveau: "Chapitre 2", categorie: "Nombres 11-29" },
    { fr: "Dix-neuf", pl: "Dziewiętnaście", niveau: "Chapitre 2", categorie: "Nombres 11-29" },
    { fr: "Vingt", pl: "Dwadzieścia", niveau: "Chapitre 2", categorie: "Nombres 11-29" },
    { fr: "Vingt et un", pl: "Dwadzieścia jeden", niveau: "Chapitre 2", categorie: "Nombres 11-29" },
    { fr: "Vingt-neuf", pl: "Dwadzieścia dziewięć", niveau: "Chapitre 2", categorie: "Nombres 11-29" }
];