const SummaryWrapper = ({ children, ...props }: React.ComponentPropsWithoutRef<"article">) => {
	return (
		<article
			className="min-h-[8rem] w-full rounded-lg border-none bg-card p-6 text-card-foreground lg:max-w-prose lg:py-8"
			{...props}
		>
			{children || null}
		</article>
	);
};

export const AISummary = async ({ text, top = null }: { text: string; top?: React.ReactNode }) => {
	return text ? (
		<SummaryWrapper aria-labelledby="summary-label">
			{top}
			<strong className="mb-1 block" id="summary-label">
				AI Summary
			</strong>
			<p className="leading-relaxed">{text}</p>
		</SummaryWrapper>
	) : null;
};

export const AISummaryPlaceholder = () => {
	return (
		<div className="animate-pulse space-y-6" aria-busy="true">
			<SummaryWrapper />
		</div>
	);
};
