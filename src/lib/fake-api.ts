import { SAMPLE_PRODUCTS, SAMPLE_REVIEWS } from "./sample-data";

export const getProducts = async () => {
	return SAMPLE_PRODUCTS;
};

export const getProductById = async (slug: string) => {
	const product = SAMPLE_PRODUCTS.find((p) => p.id === slug);
	if (!product) {
		return null;
	}
	return product;
};

export const getReviewsByProductId = async (productId: string) => {
	return SAMPLE_REVIEWS.filter((r) => r.productId === productId);
};

export const convertProductsToAstroStaticPaths = async () => {
	const products = await getProducts();
	return products.map((product) => ({
		params: { productId: product.id },
	}));
};
