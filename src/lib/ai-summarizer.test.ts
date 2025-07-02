import { getAverageRating } from "./ai-summarizer";

describe("getAverageRating", () => {
	it("should calculate the average rating correctly", () => {
		const reviews = [
			{ id: 1, productId: "1", review: "", authorName: "", date: "", stars: 4 },
			{ id: 2, productId: "1", review: "", authorName: "", date: "", stars: 5 },
			{ id: 3, productId: "1", review: "", authorName: "", date: "", stars: 3 },
		];
		expect(getAverageRating(reviews)).toBe(4);
	});

	it("should return NaN for empty array", () => {
		expect(getAverageRating([])).toBeNaN();
	});

	it("should handle single review", () => {
		const reviews = [{ id: 1, productId: "1", review: "", authorName: "", date: "", stars: 5 }];
		expect(getAverageRating(reviews)).toBe(5);
	});

	it("should handle decimal averages", () => {
		const reviews = [
			{ id: 1, productId: "1", review: "", authorName: "", date: "", stars: 4 },
			{ id: 2, productId: "1", review: "", authorName: "", date: "", stars: 5 },
		];
		expect(getAverageRating(reviews)).toBe(4.5);
	});
});
