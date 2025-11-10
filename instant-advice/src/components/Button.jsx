import { motion } from "motion/react"

export default function Button({ onChangeAdvice, resetLiked }) {
    return(
        <motion.button 
            className="Btn" 
            onClick={() => {
                onChangeAdvice();
                resetLiked(false);
            }}
            whileTap={{ scale: 0.9 }}
        >
            Get Advice
        </motion.button>
    );
}