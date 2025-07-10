import { AISummaryPlaceholder } from "@/components/ai-summary";
import { AverageRatingPlaceholder } from "@/components/rating";
import { ReviewItemPlaceholder } from "@/components/review";

export const ReviewsWrapper = ({
	children,
	...props
}: React.ComponentPropsWithoutRef<"section">) => {
	return (
		<section
			className="space-y-6 py-4 md:pb-16"
			data-generated={new Date().toISOString()}
			aria-labelledby="h-reviews"
			{...props}
		>
			<h2 id="h-reviews" className="font-semibold text-2xl md:text-3xl">
				Reviews
			</h2>
			{children}
		</section>
	);
};

export const ReviewsSectionPlaceholder = () => {
	return (
		<ReviewsWrapper aria-busy="true">
			<AverageRatingPlaceholder />
			<AISummaryPlaceholder />
			<div>
				<ReviewItemPlaceholder />
				<ReviewItemPlaceholder />
			</div>
		</ReviewsWrapper>
	);
};
