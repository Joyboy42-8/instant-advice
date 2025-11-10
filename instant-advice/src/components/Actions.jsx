import { motion } from "motion/react"

export default function Actions({ children }) {
    return(
        <motion.div 
            className="Actions"
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
        >
            {children}
        </motion.div>
    );
}