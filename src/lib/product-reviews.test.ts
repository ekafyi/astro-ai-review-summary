import { getAverageRating } from "./product-reviews";

describe("getAverageRating", () => {
	it("should calculate the average rating correctly", () => {
		const reviews = [
			{ productId: "1", review: "", authorName: "", date: "", stars: 4 },
			{ productId: "1", review: "", authorName: "", date: "", stars: 5 },
			{ productId: "1", review: "", authorName: "", date: "", stars: 3 },
		];
		expect(getAverageRating(reviews)).toBe(4);
	});

	it("should return NaN for empty array", () => {
		expect(getAverageRating([])).toBeNaN();
	});

	it("should handle single review", () => {
		const reviews = [{ productId: "1", review: "", authorName: "", date: "", stars: 5 }];
		expect(getAverageRating(reviews)).toBe(5);
	});

	it("should handle decimal averages", () => {
		const reviews = [
			{ productId: "1", review: "", authorName: "", date: "", stars: 4 },
			{ productId: "1", review: "", authorName: "", date: "", stars: 5 },
		];
		expect(getAverageRating(reviews)).toBe(4.5);
	});
});
