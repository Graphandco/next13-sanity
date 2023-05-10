/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                padding: "5rem",
                center: true,
            },
            spacing: {
                "gap-0.5": "0.175rem",
            },
            colors: {
                gris: "#222F3E",
            },
            backgroundImage: {
                "image-yellow": "url('../../../public/bg-grain-jaune.jpg')",
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                title: "var(--title-font)",
                fat: "var(--fat-font)",
            },
            fontSize: {
                "2xs": "0.6rem",
                bigtext: "clamp(22px, calc(7px + 3vw), 2.5rem)",
                herotext: "clamp(22px, calc(15px + 6vw), 4rem)",
                herosubtext: "clamp(22px, calc(15px + 6vw), 3rem)",
                // sm: '0.8rem',
                // base: '1rem',
                // xl: '1.25rem',
                // '2xl': '1.563rem',
                // '3xl': '1.953rem',
                // '4xl': '2.441rem',
                // '5xl': '3.052rem',
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        themes: [
            "dracula",
            {
                dracula: {
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=dracula]"
                    ],
                    primary: "hsl(231 15% 20%)",
                    secondary: "hsl(231 14% 57% / 1)",
                    accent: "hsl(41.92deg 89.8% 50%)",
                    // "primary-focus": "#232934",
                    // primary: "#60a5fa",
                    // "primary-focus": "#232934",
                },
            },
        ],
    },
};
