export default {
    name: "textBlock",
    title: "Bloc de Texte",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Titre",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "excerpt",
            title: "Extrait",
            type: "string",
        },
        {
            name: "localisation",
            title: "Localisation",
            type: "string",
            options: {
                list: [
                    { title: "Accueil", value: "home" },
                    { title: "Réalisations", value: "realisations" },
                    { title: "Prestations", value: "prestations" },
                    { title: "Blog", value: "blog" },
                    { title: "Contact", value: "contact" },
                ], // <-- predefined values
                layout: "radio", // <-- defaults to 'dropdown'
            },
        },
        {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
        },
        {
            name: "body",
            title: "Body",
            type: "blockContent",
        },
    ],
};
