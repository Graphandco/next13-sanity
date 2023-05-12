import { motion } from "framer-motion";
import { useState } from "react";

const ExpandableCard = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.div
                transition={{ layout: { duration: 1, type: "spring" } }}
                layout
                className="py-5 px-8 shadow-xl max-w-xs rounded-md"
                onClick={() => setIsOpen(!isOpen)}
            >
                <motion.h2 layout="position">Framer Motion</motion.h2>
                {isOpen && (
                    <motion.div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Minima nemo dicta, sapiente excepturi aliquam
                            ullam.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </motion.div>
                )}
            </motion.div>
        </>
    );
};
export default ExpandableCard;
