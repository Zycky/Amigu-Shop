import React, {
	useState,
	useEffect,
} from "react";
import "./assets/style/main.css";
import { GiShoppingBag } from "react-icons/gi";
import RatingStars from "./components/RatingStars";
import ShoppingCart from "./components/ShoppingCart";
import DarkModeToggle from "./components/DarkMode";

// Ingreso de productos//
const products = [
	{
		id: 1,
		name: "Amigurumi Mario",
		rating: 4.3, //Funcion de puntuacion//
		description:
			"Peluche de famoso personaje de los videojuegos.",
		price: 20000,
		image: require("./assets/images/product-01.png"),
	},
	{
		id: 2,
		name: "Amigurumi Psyduck",
		rating: 4.2,
		description:
			"Graciosa figura de pokemon con forma de pato.",
		price: 13000,
		image: require("./assets/images/product-02.png"),
	},
	{
		id: 3,
		name: "Amigurumi Furia",
		rating: 3.2,
		description:
			"Figura de una de las emociones de intensamente",
		price: 12000,
		image: require("./assets/images/product-03.png"),
	},
	{
		id: 4,
		name: "Amigurumi Jason Vorghes",
		rating: 4.8,
		description:
			"Figura de protagonista de las peliculas de Viernes 13.",
		price: 14500,
		image: require("./assets/images/product-04.png"),
	},
	{
		id: 5,
		name: "Amigurumi Dinosaurio",
		rating: 4.5,
		description:
			"Figura de dinosaurio proviene en distintos colores.",
		price: 24000,
		image: require("./assets/images/product-05.png"),
	},
	{
		id: 6,
		name: "Amigurumi Teemo",
		rating: 0.5,
		description:
			"Peluche maldito",
		price: 66600,
		image: require("./assets/images/product-06.png"),
	},
];

function App() {
	const [cartsVisibilty, setCartVisible] =
		useState(false);
	const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);
	const addProductToCart = (product) => {
		const newProduct = {
			...product,
			count: 1,
		};
		setProducts([
			...productsInCart,
			newProduct,
		]);
	};

	const onQuantityChange = (
		productId,
		count
	) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === productId
				);
			if (productsIndex !== -1) {
				oldState[productsIndex].count =
					count;
			}
			return [...oldState];
		});
	};

	const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === product.id
				);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};

	return (
		<div className="App">
			<ShoppingCart
				visibilty={cartsVisibilty}
				products={productsInCart}
				onClose={() =>
					setCartVisible(false)
				}
				onQuantityChange={
					onQuantityChange
				}
				onProductRemove={onProductRemove}
			/>
			<div className="navbar ">
				<h3 className="logo">Amigu Shop</h3>
				<DarkModeToggle />
				<button
					className="btn shopping-cart-btn"
					onClick={() =>
						setCartVisible(true)
					}>
					<GiShoppingBag size={24} />
					{productsInCart.length >
						0 && (
						<span className="product-count">
							{
								productsInCart.length
							}
						</span>
					)}
				</button>
			</div>
			<main>
				<h2 className="title">
					Products
				</h2>
				<div className="products">
					{products.map((product) => (
						<div
							className="product"
							key={product.id}>
							<img
								className="product-image"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							<h4 className="product-name">
								{product.name}
							</h4>
							<RatingStars
								rating={
									product.rating
								}
							/>
							<p>
								{
									product.description
								}
							</p>
							<span className="product-price">
								{product.price}$
							</span>
							<div className="buttons">
								<button
									className="btn"
									onClick={() =>
										addProductToCart(
											product
										)
									}>
									Comprar
								</button>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

export default App;
