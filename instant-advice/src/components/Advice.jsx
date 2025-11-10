import { motion } from "motion/react"

export default function Advice({ advice }) {
    return(
        <motion.p 
            // initial={{ scale: 0 }} 
            animate={{ scale: 1, transition: { duration: 1 } }}
            whileHover={{ scale: 1.05 }}
            className="Advice"
        >
            {advice}
        </motion.p>
    );
}