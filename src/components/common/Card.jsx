import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  hover = true, 
  className = '',
  onClick,
  ...props 
}) => {
  const baseClasses = 'card';
  const hoverClasses = hover ? 'card-hover' : '';
  const classes = `${baseClasses} ${hoverClasses} ${className}`;
  
  const cardProps = onClick ? { whileHover: { y: -8 }, whileTap: { scale: 0.98 } } : { whileHover: { y: -8 } };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...(hover ? cardProps : {})}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
