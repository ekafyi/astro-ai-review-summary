/** biome-ignore-all lint/suspicious/noArrayIndexKey: Rating index is known integer value */
import { getAverageRating } from "@/lib/ai-summarizer";
import type { Review } from "@/lib/sample-data";

export const Rating = ({ rating }: { rating: number }) => {
	return (
		<div className="flex items-center gap-1">
			{[...Array(5)].map((_, i) =>
				i < rating ? (
					<StarIcon key={i} className="h-5 w-5 fill-yellow-500 stroke-yellow-500" />
				) : (
					<StarIcon key={i} className="h-5 w-5 fill-muted stroke-muted-foreground" />
				),
			)}
		</div>
	);
};

export const AverageRating = ({ reviews }: { reviews: Review[] }) => {
	const averageRating = getAverageRating(reviews);
	const reviewsCount = reviews.length;
	return (
		<div className="flex min-h-7 flex-wrap items-center gap-x-3 gap-y-2">
			<Rating rating={Math.round(averageRating)} />
			<div>
				<span className="sr-only">Rating:&nbsp;</span>
				<span className="font-medium text-lg">{`${numberWithOneDecimal(averageRating)} out of 5 stars`}</span>
			</div>
			<span className="text-muted-foreground text-sm">{`Based on ${reviewsCount} customer ratings`}</span>
		</div>
	);
};

export const AverageRatingPlaceholder = () => {
	return (
		<div aria-hidden className="flex min-h-7 animate-pulse items-center opacity-30">
			<Rating rating={0} />
		</div>
	);
};

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			{...props}
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
		</svg>
	);
};

const numberWithOneDecimal = (num: number) => {
	if (num === Math.round(num)) return num;
	return Math.round(num * 10) / 10;
};
