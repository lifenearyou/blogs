import { Center, GridItem, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';

const gradients = [
  'linear(102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3%)',
  'radial(circle farthest-corner at 0.8% 3.1%,  rgba(255,188,224,1) 0%, rgba(170,165,255,1) 46%, rgba(165,255,205,1) 100.2%)',
  'radial(circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2%)',
  'linear(109.6deg,  rgba(218,185,252,1) 11.2%, rgba(125,89,252,1) 91.1%)'
];

const CategoryCard = ({ children, m, category }) => {
  return (
    <NextLink href={`/articles?c=${category.slug}`} passHref>
      <Link>
        <Center
          m={m || 5}
          p={4}
          bgGradient={
            gradients[Math.floor(Math.random() * (gradients.length - 1) + 1)]
          }
          borderRadius={'md'}
          shadow={'md'}
          as={motion.div}
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
        >
          {category.name}
        </Center>
      </Link>
    </NextLink>
  );
};

export default CategoryCard;