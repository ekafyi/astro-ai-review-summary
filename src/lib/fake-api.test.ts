import {
	convertProductsToAstroStaticPaths,
	getProductById,
	getProducts,
	getReviewsByProductId,
} from "./fake-api";
import { SAMPLE_PRODUCTS } from "./sample-data";

describe("fake-api", () => {
	describe("getProducts", () => {
		it("should return all sample products", async () => {
			const products = await getProducts();
			expect(products).toEqual(SAMPLE_PRODUCTS);
		});

		it("should return an array with the correct length", async () => {
			const products = await getProducts();
			expect(products).toHaveLength(SAMPLE_PRODUCTS.length);
		});

		it("should return products with required properties", async () => {
			const products = await getProducts();
			products.forEach((product) => {
				expect(product).toHaveProperty("id");
				expect(product).toHaveProperty("name");
				expect(product).toHaveProperty("description");
				expect(product).toHaveProperty("price");
				expect(typeof product.price).toBe("number");
			});
		});
	});

	describe("getProductById", () => {
		it("should return the correct product for a valid ID", async () => {
			const product = await getProductById("mower");
			expect(product).toBeDefined();
			expect(product?.id).toBe("mower");
			expect(product?.name).toBe("Mower3000");
		});

		it("should return null for a non-existent ID", async () => {
			const product = await getProductById("non-existent-id");
			expect(product).toBeNull();
		});

		it("should handle empty string ID", async () => {
			const product = await getProductById("");
			expect(product).toBeNull();
		});
	});

	describe("getReviewsByProductId", () => {
		it("should return all reviews for a product with reviews", async () => {
			const reviews = await getReviewsByProductId("mower");
			expect(reviews.length).toBeGreaterThan(0);
			reviews.forEach((review) => {
				expect(review.productId).toBe("mower");
			});
		});

		it("should return an empty array for a product with no reviews or non-existent product ID", async () => {
			const reviews = await getReviewsByProductId("no-reviews");
			expect(reviews).toEqual([]);
		});

		it("should include all review properties", async () => {
			const [review] = await getReviewsByProductId("mower");
			expect(review).toHaveProperty("productId");
			expect(review).toHaveProperty("review");
			expect(review).toHaveProperty("authorName");
			expect(review).toHaveProperty("date");
			expect(review).toHaveProperty("stars");
			expect(typeof review.stars).toBe("number");
		});
	});

	describe("convertProductsToAstroStaticPaths", () => {
		it("should return array for Astro getStaticPaths()", async () => {
			const paths = await convertProductsToAstroStaticPaths();
			expect(paths.length).toBeGreaterThan(0);
			paths.forEach((path) => {
				expect(path).toHaveProperty("params");
				expect(path.params).toHaveProperty("productId");
			});
		});
	});
});
