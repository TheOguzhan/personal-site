'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import Link, { LinkProps } from "next/link";
import React, { Ref } from "react";
import { Roboto_Flex } from '@next/font/google';

const roboto_flex = Roboto_Flex({ weight: '700', subsets: ['latin'] });

interface CustomLinkProps extends LinkProps {
    children: React.ReactNode;
}

const MotionLink = motion(
    React.forwardRef((props: CustomLinkProps, ref: Ref<HTMLAnchorElement>) => {
        return (
            <Link {...props} ref={ref} className={'text-lg hover:underline mx-2 ' + roboto_flex.className}>
                {props.children}
            </Link>
        );
    }),
    { forwardMotionProps: true },
);

export default function Navbar() {
    const { scrollYProgress } = useScroll();
    const translateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, -25, -60]);
    const opacityHome = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const opacityAbout = useTransform(scrollYProgress, [0.5, 1], [1, 0]);


    return (
        <header className={' bg-gradient-to-b from-gray-900 to-gray-800 px-4 py-4 fixed top-0 md:w-full lg:w-4/6 h-16 flex flex-row'}>
            <motion.nav
                className={'flex justify-start items-center flex-1'}
                style={{ translateX }}
            >
                <MotionLink href={{ hash: 'home' }} style={{ opacity: opacityHome }} onClick={() => {
                    const home_element = document.getElementById('home');
                    home_element?.scrollIntoView();
                }}>
                    ~
                </MotionLink>
                <MotionLink href={{ hash: 'about-me' }} style={{ opacity: opacityAbout }} onClick={() => {
                    const home_element = document.getElementById('about-me');
                    home_element?.scrollIntoView();
                }}>
                    /me
                </MotionLink>
                <MotionLink href={{ hash: 'contact-me' }} onClick={() => {
                    const home_element = document.getElementById('contact-me');
                    home_element?.scrollIntoView();
                }}  >/contact</MotionLink>
            </motion.nav>
            <Link href='/blogs' className={'text-lg hover:underline mx-2 inline-block ' + roboto_flex.className}>Blogs</Link>
        </header>
    );
}
