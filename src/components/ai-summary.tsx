import { Rating } from "./rating";

export const SummaryWrapper = (props: { children?: React.ReactNode }) => {
	return (
		<div className="min-h-[8rem] w-full rounded-lg border-none bg-card p-6 text-card-foreground lg:max-w-prose lg:py-8">
			{props.children || null}
		</div>
	);
};

export const AISummary = async () => {
	const summary =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
	const averageRating = 3;
	const reviewsCount = 10;
	return (
		<>
			<div className="flex flex-wrap items-center gap-x-3 gap-y-2">
				<Rating rating={Math.round(averageRating)} />
				<span className="font-medium text-lg">{numberWithOneDecimal(averageRating)} out of 5</span>
				<p className="text-muted-foreground text-sm">Based on {reviewsCount} customer ratings</p>
			</div>
			<SummaryWrapper>
				<strong className="mb-1 block">AI Summary</strong>
				<p className="leading-relaxed">{summary}</p>
			</SummaryWrapper>
		</>
	);
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
