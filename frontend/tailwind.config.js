/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                white: '#fff',
                black: '#000',
                gray: {
                    DEFAULT: '#8e8e8e',
                    5: '#f8f8f8',
                    10: '#f0f0f0',
                    20: '#e4e4e4',
                    30: '#d8d8d8',
                    40: '#c6c6c6',
                    50: '#8e8e8e',
                    60: '#717171',
                    70: '#555555',
                    80: '#2d2d2d',
                    90: '#1d1d1d',
                    100: '#000',
                },
                primary: {
                    DEFAULT: '#246beb',
                    5: '#eff5ff',
                    10: '#d3e1fb',
                    20: '#a7c4f7',
                    30: '#7ca6f3',
                    40: '#5089ef',
                    60: '#1d56bc',
                    70: '#16408d',
                    80: '#0e2b5e',
                    90: '#07152f',
                    100: '#000000',
                },
                secondary: {
                    DEFAULT: '#003675',
                    5: '#edf1f5',
                    10: '#cdd7e4',
                    20: '#b4c4d6',
                    30: '#99b0cb',
                    40: '#2a5c96',
                    60: '#002b5e',
                    70: '#002046',
                    80: '#00162f',
                    90: '#000b17',
                    100: '#000000',
                },
                point: {
                    DEFAULT: '#e71825',
                    5: '#fdf2f3',
                    10: '#fad1d3',
                    20: '#f5a3a8',
                    30: '#f1747c',
                    40: '#ec4651',
                    60: '#b9131e',
                    70: '#8b0e16',
                    80: '#5c0a0f',
                    90: '#2e0507',
                    100: '#000000',
                },
                danger: '#eb003b',
                warning: '#ffb724',
                success: '#008a1e',
                information: '#2768ff',
            },
            fontFamily: {
                base: ['Pretendard GOV', 'sans-serif'],
            },
            fontSize: {
                root: '62.5%',
                'body-md': '1.7rem',
                display: {
                    sm: '4rem',
                    md: '5rem',
                    lg: '6.6rem',
                },
                heading: {
                    sm: '3.2rem',
                    md: '4rem',
                    lg: '5rem',
                },
                title: {
                    xsm: '1.5rem',
                    sm: '1.7rem',
                    md: '1.9rem',
                    lg: '2.1rem',
                    xlg: '2.5rem',
                    xxlg: '3.2rem',
                },
                body: {
                    sm: '1.5rem',
                    md: '1.7rem',
                    lg: '1.9rem',
                },
                link: {
                    sm: '1.5rem',
                    md: '1.7rem',
                    lg: '1.9rem',
                },
                detail: {
                    sm: '1.3rem',
                    md: '1.5rem',
                    lg: '1.7rem',
                },
                label: {
                    xsm: '1.3rem',
                    sm: '1.5rem',
                    md: '1.7rem',
                    lg: '1.9rem',
                },
            },
            fontWeight: {
                light: 300,
                normal: 400,
                medium: 500,
                bold: 700,
                bolder: 800,
            },
            lineHeight: {
                none: 1,
                base: 1.5,
            },
            borderRadius: {
                1: '.1rem',
                2: '.2rem',
                4: '.4rem',
                6: '.6rem',
                8: '.8rem',
                10: '1rem',
                12: '1.2rem',
                full: '100%',
            },
            spacing: {
                0: '0',
                default: '.1rem',
                default2: '.2rem',
                full: '100%',
            },
            screens: {
                sm: '600px',
                md: '1024px',
                lg: '1920px',
                mobile: { max: '599px' },
                mobileMore: { min: '600px' },
                tablet: { min: '600px', max: '1023px' },
                tabletLess: { max: '1023px' },
                tabletMore: { min: '1024px' },
                desktop: { min: '1920px' },
            },
            boxShadow: {
                base: '2px 2px 2px 0px rgba(0, 0, 0, 0.15)',
            },
            transitionProperty: {
                base: 'all 0.4s ease-in-out',
                fade: 'opacity 0.4s linear',
                collapse: 'max-height 0.4s ease',
                collapseWidth: 'width 0.4s ease',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                // focus mixin
                '.focus-primary': {
                    outlineOffset: '-0.4rem',
                    outline: '2px solid rgba(36, 107, 235, 0.8)', // 예시: primary 색상
                },
                // flex-size mixin
                '.flex-grow-0': {
                    flexGrow: '0',
                },
                '.flex-grow-1': {
                    flexGrow: '1',
                },
                '.flex-shrink-0': {
                    flexShrink: '0',
                },
                '.flex-shrink-1': {
                    flexShrink: '1',
                },
                // btn-reset mixin
                '.btn-reset': {
                    color: 'inherit',
                    border: '0',
                    backgroundColor: 'inherit',
                    '&:hover, &:active': {
                        backgroundColor: 'inherit',
                    },
                },
                // ellipsis mixin
                '.ellipsis-1': {
                    display: '-webkit-box',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: '1',
                },
                '.ellipsis-2': {
                    display: '-webkit-box',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: '2',
                },
                // sr-only mixin
                '.sr-only': {
                    position: 'absolute !important',
                    width: '1px !important',
                    height: '1px !important',
                    padding: '0 !important',
                    margin: '-1px !important',
                    overflow: 'hidden !important',
                    clip: 'rect(0, 0, 0, 0) !important',
                    whiteSpace: 'nowrap !important',
                    border: '0 !important',
                },
            };
            addUtilities(newUtilities, ['responsive', 'hover', 'focus']);
        },
    ],
};
