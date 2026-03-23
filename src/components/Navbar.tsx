import { Flex, Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex gap="md" align="center" sx={{marginTop:"32px"}}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',          
          textTransform: 'lowercase',
          color: isActive ? '#5F2939' : 'inherit'
        })}
      >
        <Text
          fz="lg"
          fw={400}
          sx={{
            textDecoration: 'none',
            '&:hover': {
              color: '#5F2939', 
            },
            '&:active': {
              textDecoration: 'underline', 
              color: '#5F2939',
            },
          }}
        >
          HOME
        </Text>
      </NavLink>
      <Text fz="lg" fw={400}>
        /
      </Text>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',   
          textTransform: 'lowercase',
          color: 'inherit',
        })}
      >
        <Text
          fz="lg"
          fw={400}
          sx={{
            textDecoration: 'none',
            '&:hover': {
              color: '#5F2939', 
            },
            '&:active': {
              textDecoration: 'underline', 
              color: '#5F2939',
            },
          }}
        >
          ME, ME, ME
        </Text>
      </NavLink>
      <Text fz="lg" fw={400}>
        /
      </Text>
      <NavLink
        to="/work"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',   
          textTransform: 'lowercase',
          color: 'inherit',
        })}
      >
        <Text
          fz="lg"
          fw={400}
          sx={{
            textDecoration: 'none',
            '&:hover': {
              color: '#5F2939', 
            },
            '&:active': {
              textDecoration: 'underline', 
              color: '#5F2939',
            },
          }}
        >
          work
        </Text>
      </NavLink>
      <Text fz="lg" fw={400}>
        /
      </Text>
      <NavLink
        to="/design"
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',   
          textTransform: 'lowercase',
          color: 'inherit',
        })}
      >
        <Text
          fz="lg"
          fw={400}
          sx={{
            textDecoration: 'none',
            '&:hover': {
              color: '#5F2939', 
            },
            '&:active': {
              textDecoration: 'underline', 
              color: '#5F2939',
            },
          }}
        >
          design
        </Text>
      </NavLink>
    </Flex>
  );
};

export default Navbar;
