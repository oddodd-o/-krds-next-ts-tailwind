/** @jsxImportSource @emotion/react */
import Header from './header';
import Footer from './Footer';
import { css } from '@emotion/react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            id="wrap"
            css={wrap}
        >
            {/* <Header /> */}
            <div id="container">
                <div className="inner">{children}</div>
            </div>
            <Footer />
        </div>
    );
};

const wrap = css`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    #container {
        flex: 1;
    }
`;

export default Layout;
