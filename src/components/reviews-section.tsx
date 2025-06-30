import { AISummary, AISummaryPlaceholder } from "@/components/ai-summary";
import { ReviewItem, ReviewItemPlaceholder } from "@/components/review";
import type { Review } from "@/lib/sample-data";

const ReviewsWrapper = (props: { children: React.ReactNode }) => {
	return (
		<section className="space-y-6 py-4 md:pb-16" data-generated={new Date().toISOString()}>
			<h2 className="font-semibold text-2xl md:text-3xl">Reviews</h2>
			{props.children}
		</section>
	);
};

type ReviewsSectionProps = { productName: string; reviews: Review[] };

export const ReviewsSection = async ({ productName, reviews }: ReviewsSectionProps) => {
	return (
		<ReviewsWrapper>
			<AISummary productName={productName} reviews={reviews} />
			<div>
				{reviews.map((review) => (
					<ReviewItem key={review.review} review={review} />
				))}
			</div>
		</ReviewsWrapper>
	);
};

export const ReviewsSectionPlaceholder = () => {
	return (
		<ReviewsWrapper>
			<AISummaryPlaceholder />
			<div>
				<ReviewItemPlaceholder />
				<ReviewItemPlaceholder />
			</div>
		</ReviewsWrapper>
	);
};
