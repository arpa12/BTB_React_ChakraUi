import React from 'react';
import { AspectRatio, Box } from '@chakra-ui/react';

export default function Video() {
  return (
    <Box 
      backgroundColor='white' 
      p="30px" 
      boxShadow='lg' // Add a large shadow
      borderRadius="10px" // Optional: rounded corners for the box
    >
      <AspectRatio 
       maxW="100%"
       ratio={16 / 9} // Maintain the 16:9 aspect ratio
       height={{ base: "200px", sm: "300px", md: "450px" }} // Responsive height for different screen sizes
       m={{ base: "0", sm: "50px", md: "40px" }} // Adjust margin for different screen sizes
        borderRadius="20px"
        overflow="hidden"
      >
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/mNzenfB3OuY?si=kk9zdjaYGtn69vKR" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
        ></iframe>
      </AspectRatio>
    </Box>
  );
}
