import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElementsStyled';
import Logo from '../../assets/logo.png'

const Navbar = () => {
return (
	<>
	<Nav>
	<img src={Logo} alt="logo" />
		<Bars />
		<NavMenu>
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/services' activeStyle>
			Services
		</NavLink>
		<NavLink to='/classes' activeStyle>
			Classes
		</NavLink>
		<NavLink to='/restaurant' activeStyle>
			Restaurant
		</NavLink>
		<NavLink to='/blog' activeStyle>
			Blog
		</NavLink>
		<NavLink to='/shop' activeStyle>
			Shop
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
