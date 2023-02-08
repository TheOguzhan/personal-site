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
            <Link {...props} ref={ref} className={'text-lg hover:underline mx-2 px-2' + roboto_flex.className}>
                {props.children}
            </Link>
        );
    }),
    { forwardMotionProps: true },
);

export default function Navbar() {
    const { scrollYProgress } = useScroll();
    const translateYH2Me = useTransform(scrollYProgress, [0, 0.5], [-50, 0]);
    const translateYH2Contact = useTransform(scrollYProgress, [0.5, 1], [-50, 0]);
    const translateX = useTransform(scrollYProgress, [0, 0.5, 1], [0, -25, -60]);
    const opacityHome = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const opacityAbout = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

    return (
        <header className={' bg-gradient-to-b from-gray-900 to-gray-800 px-4 py-4 fixed top-0 md:w-full lg:w-4/6 h-16 flex flex-row'}>
            <motion.nav
                className={'grid grid-cols-3 flex-1 grid-rows-1'}
            >
                <motion.div
                    className="self-center justify-self-start"
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
                </motion.div>
                <motion.div className="flex flex-row self-center justify-self-center">
                    <motion.h2 onClick={() => {
                        const home_element = document.getElementById('home');
                        home_element?.scrollIntoView();
                    }}>
                        ~
                    </motion.h2>
                    <motion.h2 style={{ translateY: translateYH2Me }} onClick={() => {
                        const home_element = document.getElementById('about-me');
                        home_element?.scrollIntoView();
                    }}>
                        /me
                    </motion.h2>
                    <motion.h2 style={{ translateY: translateYH2Contact }} onClick={() => {
                        const home_element = document.getElementById('contact-me');
                        home_element?.scrollIntoView();
                    }}  >/contact</motion.h2>
                </motion.div>
                <motion.div className="self-center  justify-self-end">
                    <Link href='/blogs' className={'text-lg hover:underline mx-2 inline-block ' + roboto_flex.className}>Blogs</Link>
                </motion.div>
            </motion.nav>
        </header>
    );
}
