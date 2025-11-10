import { Heart } from "lucide-react";
import { motion } from "motion/react"
import { useState } from "react";

export default function Like({ liked, setLiked, onLike }) {
    return(
        <motion.button 
            className="LikeButton" 
            onClick={() => {
                setLiked(!liked);
                onLike(liked);
            }}
            whileTap={{ scale: 0.9 }}
        >
            <Heart fill={liked ? "red" : undefined} color="red" />
        </motion.button>
    );
}