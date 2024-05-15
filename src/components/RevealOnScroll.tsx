import React, {useEffect, useRef, useState, ReactNode} from 'react'

interface RevealOnScrollProps {
    children: ReactNode;
} 
const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
 
    useEffect(() => {
        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                scrollObserver.unobserve(entry.target);
            }
        });
        if(ref.current){
            scrollObserver.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                scrollObserver.unobserve(ref.current);
            }
        };
    }, []);
 
    const classes: string = `transition-opacity duration-2000 
        ${isVisible ? "opacity-100" : "opacity-0"
        }`;
 
    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};

export default RevealOnScroll;