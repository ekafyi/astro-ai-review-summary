const SummaryWrapper = (props: { children?: React.ReactNode }) => {
	return (
		<div className="min-h-[8rem] w-full rounded-lg border-none bg-card p-6 text-card-foreground lg:max-w-prose lg:py-8">
			{props.children || null}
		</div>
	);
};

export const AISummary = async ({ text }: { text: string }) => {
	return text ? (
		<SummaryWrapper>
			<strong className="mb-1 block">AI Summary</strong>
			<p className="leading-relaxed">{text}</p>
		</SummaryWrapper>
	) : null;
};

export const AISummaryPlaceholder = () => {
	return (
		<div className="animate-pulse space-y-6" aria-hidden>
			<SummaryWrapper />
		</div>
	);
};
