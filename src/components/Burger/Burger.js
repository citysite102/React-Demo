import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {

	let transformedIngredient = Object.keys(props.ingredients).map(igKey => {
		return [...Array(props.ingredients[igKey])].map((_, i) => {
			return <BurgerIngredient key={igKey+i} type={igKey} />
		});
	}).reduce((arr, el) => {
		return arr.concat(el)
	}, []);

	// reduce 後面的參數是預設值空陣列[]

	console.log(transformedIngredient);

	if (transformedIngredient.length === 0) {
		transformedIngredient = (<p>Please start adding ingredient! </p>);
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{transformedIngredient}
			<BurgerIngredient type="bread-bottom" />
		</div>

	);
};

export default burger;