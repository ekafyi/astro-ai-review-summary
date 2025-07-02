import { Rating } from "@/components/rating";
import { getAverageRating, summarizeReviews } from "@/lib/ai-summarizer";
import type { Review } from "@/lib/sample-data";

export const SummaryWrapper = (props: { children?: React.ReactNode }) => {
	return (
		<div className="min-h-[8rem] w-full rounded-lg border-none bg-card p-6 text-card-foreground lg:max-w-prose lg:py-8">
			{props.children || null}
		</div>
	);
};

type AISummaryProps = { productName: string; reviews: Review[] };

export const AISummary = async ({ productName, reviews }: AISummaryProps) => {
	try {
		const summary = await summarizeReviews(productName, reviews);
		const averageRating = getAverageRating(reviews);
		const reviewsCount = reviews.length;
		return (
			<>
				<div className="flex flex-wrap items-center gap-x-3 gap-y-2">
					<Rating rating={Math.round(averageRating)} />
					<span className="font-medium text-lg">
						{numberWithOneDecimal(averageRating)} out of 5
					</span>
					<p className="text-muted-foreground text-sm">Based on {reviewsCount} customer ratings</p>
				</div>
				<SummaryWrapper>
					<strong className="mb-1 block">AI Summary</strong>
					<p className="leading-relaxed">{summary?.text}</p>
				</SummaryWrapper>
			</>
		);
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const AISummaryPlaceholder = () => {
	return (
		<div className="animate-pulse space-y-6" aria-hidden>
			<div className="opacity-30">
				<Rating rating={0} />
			</div>
			<SummaryWrapper />
		</div>
	);
};

const numberWithOneDecimal = (num: number) => {
	if (num === Math.round(num)) return num;
	return Math.round(num * 10) / 10;
};
