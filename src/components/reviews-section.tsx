import { AISummaryPlaceholder } from "@/components/ai-summary";
import { AverageRatingPlaceholder } from "@/components/rating";
import { ReviewItemPlaceholder } from "@/components/review";

export const ReviewsWrapper = (props: { children: React.ReactNode }) => {
	return (
		<section className="space-y-6 py-4 md:pb-16" data-generated={new Date().toISOString()}>
			<h2 className="font-semibold text-2xl md:text-3xl">Reviews</h2>
			{props.children}
		</section>
	);
};

export const ReviewsSectionPlaceholder = () => {
	return (
		<ReviewsWrapper>
			<AverageRatingPlaceholder />
			<AISummaryPlaceholder />
			<div>
				<ReviewItemPlaceholder />
				<ReviewItemPlaceholder />
			</div>
		</ReviewsWrapper>
	);
};
