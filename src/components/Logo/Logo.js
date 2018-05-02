import React from 'react';

// 只是用來確保 Webpack 會打包這張圖片和修改路徑
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => {
	return (
		<div className={classes.Logo} style={{height: props.height}}>
			<img src={burgerLogo} alt="MyBurger"/>
		</div>
	);
};

export default logo;