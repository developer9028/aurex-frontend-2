import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (animationType = 'fadeUp', options = {}) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const defaultOptions = {
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none none',
                ...options.scrollTrigger,
            },
        };

        let animation;

        switch (animationType) {
            case 'fadeUp':
                gsap.set(element, { opacity: 0, y: 50 });
                animation = gsap.to(element, {
                    opacity: 1,
                    y: 0,
                    ...defaultOptions,
                });
                break;
            case 'fadeDown':
                gsap.set(element, { opacity: 0, y: -50 });
                animation = gsap.to(element, {
                    opacity: 1,
                    y: 0,
                    ...defaultOptions,
                });
                break;
            case 'fadeLeft':
                gsap.set(element, { opacity: 0, x: -50 });
                animation = gsap.to(element, {
                    opacity: 1,
                    x: 0,
                    ...defaultOptions,
                });
                break;
            case 'fadeRight':
                gsap.set(element, { opacity: 0, x: 50 });
                animation = gsap.to(element, {
                    opacity: 1,
                    x: 0,
                    ...defaultOptions,
                });
                break;
            case 'scale':
                gsap.set(element, { opacity: 0, scale: 0.8 });
                animation = gsap.to(element, {
                    opacity: 1,
                    scale: 1,
                    ...defaultOptions,
                });
                break;
            case 'fade':
                gsap.set(element, { opacity: 0 });
                animation = gsap.to(element, {
                    opacity: 1,
                    ...defaultOptions,
                });
                break;
            default:
                gsap.set(element, { opacity: 0, y: 50 });
                animation = gsap.to(element, {
                    opacity: 1,
                    y: 0,
                    ...defaultOptions,
                });
        }

        return () => {
            if (animation) {
                animation.kill();
            }
        };
    }, [animationType, options]);

    return elementRef;
};
