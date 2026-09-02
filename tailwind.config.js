import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                display: ['Georgia', 'serif'],
            },

            colors: {
                // Warm & Earthy palette
                primary: '#2D4A3E',      // deep forest green
                secondary: '#7C9885',    // sage
                accent: '#C67B4E',       // terracotta
                amber: '#E4A853',        // warm highlight
                cream: '#FAF7F2',        // warm background
                sand: '#F5EFE6',         // alt warm background
                dark: '#232D27',         // deep text
                muted: '#6B6458',        // secondary text
            },
        },
    },

    plugins: [forms],
};
