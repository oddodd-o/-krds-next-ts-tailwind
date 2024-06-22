import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Layout from '@/components/layout/Layout';
import '@/styles/globals.scss';
import { Global, css } from '@emotion/react';
import { globalStyles } from '@/styles/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <RecoilRoot>
                <Global styles={globalStyles} />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </RecoilRoot>
        </>
    );
}

export default MyApp;
