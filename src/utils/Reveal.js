import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export const Reveal = ({ children, width = "fit-content", duration = 0.8,  initialOpacity = 0, initialY = 50 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: initialOpacity, y: initialY },
                    visible: { opacity: 1, y: 0, transition: { duration,  ease: "easeInOut" } },
                }}
                initial="hidden"
                animate={mainControls}
                style={{ width: '100%' }} 
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
