/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import tw from 'twin.macro';
import { commonStyle } from '@/styles/commonStyle';

const Footer = () => {
    return (
        <footer css={footerContainer}>
            <div className="foot-quick">
                <div className="inner">
                    <button
                        type="button"
                        className="link"
                        title="소속기관(지청 및 위원회) 레이어"
                    >
                        소속기관(지청 및 위원회)
                    </button>
                    <button
                        type="button"
                        className="link"
                        title="업무별 누리집 레이어"
                    >
                        업무별 누리집
                    </button>
                    <button
                        type="button"
                        className="link"
                        title="산하기관 및 관련단체 레이어"
                    >
                        산하기관 및 관련단체
                    </button>
                    <button
                        type="button"
                        className="link"
                        title="정부기관 레이어"
                    >
                        정부기관
                    </button>
                </div>
            </div>
            <div className="inner">
                <div className="f-logo">대한민국정부</div>
                <div className="f-cnt">
                    <div className="f-info">
                        <p className="info-addr">(26464) 강원특별자치도 원주시 건강로 32(반곡동) 국민건강보험공단</p>
                        <ul className="info-cs">
                            <li>
                                <strong className="strong">대표전화 1577-1000</strong>
                                <span className="span">(유료, 평일 09시~18시)</span>
                            </li>
                            <li>
                                <strong className="strong">해외이용 82-33-811-2001</strong>
                                <span className="span">(유료, 평일 09시~18시)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="f-link">
                        <div className="link-go">
                            <a
                                href="#"
                                className="btn btn-txt sm ico-arr"
                            >
                                찾아오시는 길
                            </a>
                            <a
                                href="#"
                                className="btn btn-txt sm ico-arr"
                            >
                                이용안내
                            </a>
                            <a
                                href="#"
                                className="btn btn-txt sm ico-arr"
                            >
                                직원검색
                            </a>
                        </div>
                        <div className="link-sns">
                            <a
                                href="#"
                                className="instagram"
                                target="_blank"
                            >
                                <span className="sr-only">인스타그램</span>
                            </a>
                            <a
                                href="#"
                                className="youtube"
                                target="_blank"
                            >
                                <span className="sr-only">유튜브</span>
                            </a>
                            <a
                                href="#"
                                className="twitter"
                                target="_blank"
                            >
                                <span className="sr-only">트위터</span>
                            </a>
                            <a
                                href="#"
                                className="facebook"
                                target="_blank"
                            >
                                <span className="sr-only">페이스북</span>
                            </a>
                            <a
                                href="#"
                                className="blog"
                                target="_blank"
                            >
                                <span className="sr-only">블로그</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="f-btm">
                    <div className="f-btm-text">
                        <div className="f-menu">
                            <a
                                href="#"
                                className="point"
                            >
                                개인정보처리방침
                            </a>
                            <a href="#">저작권 정책</a>
                            <a href="#">웹 접근성 품질인증 마크 획득</a>
                        </div>
                        <p className="f-copy">© Ministry of Education. All rights reserved.</p>
                    </div>
                    <div className="f-btm-ban">
                        <span className="ban-txt">이 누리집은 보건복지부 산하기관 누리집입니다.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const footerContainer = css`
    ${tw`relative z-50 bg-gray-5`}
    .foot-quick {
        ${tw`bg-white border-t border-b border-gray-300`}
        .inner {
            ${tw`flex flex-col`}
            .link {
                ${tw`flex items-center justify-between flex-1 gap-2 px-6 border-r border-gray-300 h-14`}
                &:first-child {
                    ${tw`border-l`}
                }
                &::after {
                    ${tw`inline-flex flex-shrink-0 w-8 h-8 bg-center bg-no-repeat bg-contain`}
                    content: '';
                    background-image: url('/pattern/layout/foot_ico_plus.svg');
                }
                &:hover {
                    ${tw`bg-secondary transition-base`}
                }
                &:active {
                    ${tw`bg-secondary-100 transition-base`}
                }
            }
        }
    }
    > .inner {
        ${tw`flex flex-col items-start`}
        ${commonStyle}
    }
    .f-logo {
        ${tw`h-12`}
        img {
            ${tw`h-full`}
        }
    }
    .f-cnt {
        .f-info {
            ${tw`flex flex-col items-start gap-6`}
            flex: 1;
            .info-cs {
                ${tw`flex flex-col items-start gap-4`}
                li {
                    ${tw`flex items-center gap-2`}
                }
            }
        }
        .f-link {
            ${tw`flex flex-col flex-shrink-0 gap-6 w-80`}
            .link-go {
                ${tw`flex flex-col items-start gap-2`}
                .btn-txt {
                    ${tw`font-bold`}
                }
            }
            .link-sns {
                ${tw`flex gap-2`}
                a {
                    ${tw`inline-flex w-10 h-10 bg-center bg-no-repeat bg-contain`}
                    &.instagram {
                        background-image: url('/pattern/layout/foot_ico_sns_Instagram.svg');
                    }
                    &.youtube {
                        background-image: url('/pattern/layout/foot_ico_sns_youtube.svg');
                    }
                    &.twitter {
                        background-image: url('/pattern/layout/foot_ico_sns_twitter.svg');
                    }
                    &.facebook {
                        background-image: url('/pattern/layout/foot_ico_sns_facebook.svg');
                    }
                    &.blog {
                        background-image: url('/pattern/layout/foot_ico_sns_blog.svg');
                    }
                }
            }
        }
    }
    .f-btm {
        ${tw`flex flex-col gap-6 pt-2 border-t border-gray-300`}
        .f-btm-text {
            ${tw`flex items-center justify-between gap-4`}
            .f-menu {
                ${tw`flex flex-wrap`}
                a {
                    ${tw`inline-flex items-center h-10 px-4`}
                    &.point {
                        ${tw`font-bold text-secondary`}
                    }
                    &:hover {
                        ${tw`rounded-md bg-secondary`}
                    }
                    &:active {
                        ${tw`bg-secondary-100`}
                    }
                }
            }
            .f-copy {
                ${tw`text-sm text-gray-700`}
            }
        }
        .f-btm-ban {
            ${tw`flex items-center px-4 bg-white rounded-md min-h-10`}
            &::before {
                ${tw`inline-flex flex-shrink-0 w-1 h-6 mr-2 bg-center bg-no-repeat bg-contain`}
                content: '';
                background-image: url('/pattern/content/btm_ban_ico_flag.svg');
            }
        }
    }
`;

export default Footer;
