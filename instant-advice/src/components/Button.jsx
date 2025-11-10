import { motion } from "motion/react"

export default function Button({ onChangeAdvice }) {
    return(
        <motion.button 
            className="Btn" 
            onClick={onChangeAdvice}
            whileTap={{ scale: 0.9 }}
        >
            Get Advice
        </motion.button>
    );
}