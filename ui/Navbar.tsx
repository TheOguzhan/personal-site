'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { Ref } from "react";
import Link, { LinkProps } from 'next/link';

interface CustomLinkProps extends LinkProps {
    children: React.ReactNode
}

const MotionLink = motion(React.forwardRef((props: CustomLinkProps, ref: Ref<HTMLAnchorElement>) => {
    return <Link {...props} ref={ref} className='hover:underline mx-2' >{props.children}</Link>
}), { forwardMotionProps: true })

export default function Navbar() {
    const { scrollYProgress } = useScroll()
    const translateX = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const opacityHome = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const opacityAbout = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
    return (
        <header className='bg-cyan-100 dark:bg-cyan-900 px-4 py-4 fixed top-0 w-4/6'>
            <motion.nav className='flex justify-start items-center flex-1' style={{ translateX }}>
                <MotionLink href="#home" style={{ opacity: opacityHome }} >Home</MotionLink>
                <MotionLink
                    href="#about-me"
                    style={{opacity: opacityAbout}}
                >About me</MotionLink>
                <MotionLink
                    href="#contact-me"
                >Contact me</MotionLink>
            </motion.nav>
        </header>
    )
}
