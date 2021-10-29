module.exports = {
    purge: ["./src/**/*.{ts,tsx}"],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                gray: {
                    'rich-black': '#050505',
                    'space-gray': '#060709'
                },
                ctt: {
                    'ctt-pink': '#FF53FF',
                    'ctt-purple': '#8400D5'
                },
                socials: {
                    'discord': '#7289da',
                    'github': '#f0f6fc',
                    'youtube': '#ff1a1a',
                    'twitter': '#1d9bf0'
                }
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    mode: "jit",
};
