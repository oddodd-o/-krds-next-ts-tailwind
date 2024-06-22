import { css } from '@emotion/react';
import tw, { theme, globalStyles as baseStyles } from 'twin.macro';

export const globalStyles = css([
    baseStyles,
    {
        body: {
            ...tw`antialiased`,
            ...tw`font-sans`,
        },
    },
    css`
        .container {
            ${tw`w-full max-w-screen-xl px-8 mx-auto`}
        }
    `,
]);
