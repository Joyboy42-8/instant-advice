import { motion } from "motion/react"

export default function Advice({ advice }) {
    return(
        <motion.p 
            initial={{ opacity: 0, y: -1000 }} 
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            whileHover={{ scale: 1.05 }}
            className="Advice"
        >
            {advice}
        </motion.p>
    );
}

// One of the top five regrets people have is that they didn't stay in contact with friends.