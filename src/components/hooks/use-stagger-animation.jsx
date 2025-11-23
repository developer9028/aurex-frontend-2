import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useStaggerAnimation = (animationType = 'fadeUp', options = {}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const children = container.children;
        if (!children || children.length === 0) return;

        const defaultOptions = {
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
                trigger: container,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none none',
                ...options.scrollTrigger,
            },
        };

        let animation;

        switch (animationType) {
            case 'fadeUp':
                gsap.set(children, { opacity: 0, y: 30 });
                animation = gsap.to(children, {
                    opacity: 1,
                    y: 0,
                    ...defaultOptions,
                });
                break;
            case 'fadeLeft':
                gsap.set(children, { opacity: 0, x: -30 });
                animation = gsap.to(children, {
                    opacity: 1,
                    x: 0,
                    ...defaultOptions,
                });
                break;
            case 'fadeRight':
                gsap.set(children, { opacity: 0, x: 30 });
                animation = gsap.to(children, {
                    opacity: 1,
                    x: 0,
                    ...defaultOptions,
                });
                break;
            case 'scale':
                gsap.set(children, { opacity: 0, scale: 0.8 });
                animation = gsap.to(children, {
                    opacity: 1,
                    scale: 1,
                    ...defaultOptions,
                });
                break;
            default:
                gsap.set(children, { opacity: 0, y: 30 });
                animation = gsap.to(children, {
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

    return containerRef;
};
