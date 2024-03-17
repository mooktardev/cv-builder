import { v4 as uid } from "uuid"

export const DATA = {
    'personnal': {
        firstname: 'John',
        lastname: 'Doe',
        job: 'Products Manager at Amazon',
        about: 'A that bosoms so nodded of faster.'
    },
    'contact': {
        phone: '+237 699 00 88 99',
        email: 'johndoe@gmail.com',
        website: 'johndoe.com'
    },
    'skills': ['Data Analysis', 'Excel', 'Tableau', 'Python', 'SQL'],
    'experiences': [
        {
            id: uid(),
            title: "Experience 1",
            company: "Company 1",
            dateFrom: "2024-01-29",
            dateTo: "2021-06-05",
            description: "Bust sitting scarcely soul tapping then. Each what or napping censer, fiend floor had my.",
        },
        {
            id: uid(),
            title: "Experience 2",
            company: "Company 2",
            dateFrom: "2021-06-01",
            dateTo: "2016-09-30",
            description: "The was to wretch one cushioned on some door, to word and the leave ghastly.",
        },
    ],
    'formations': [
        {
            id: uid(),
            degree: "Master in Data Science",
            institution: "University XYZ",
            dateFrom: "2009-06-01",
            dateTo: "2013-06-12"
        },
        {
            id: uid(),
            degree: "PhD in Data Science",
            institution: "University XYZ",
            dateFrom: "2013-06-01",
            dateTo: "2016-04-12"
        }
    ]
}