import { Rating } from "@/components/rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Review } from "@/lib/sample-data";

export const ReviewItem = ({ review }: { review: Review }) => {
	return (
		<li
			className="flex w-full gap-4 border-b py-6 last:border-none"
			aria-label={`Review by ${review.authorName}, ${review.stars} stars`}
		>
			<Avatar className="h-10 w-10 border" aria-hidden>
				<AvatarImage alt="" src="/placeholder-user.jpg" />
				<AvatarFallback>{review.authorName.slice(0, 1)}</AvatarFallback>
			</Avatar>
			<div className="grid flex-1 gap-3">
				<div className="flex items-start justify-between gap-x-2">
					<div className="flex flex-col gap-x-3 gap-y-1 text-sm md:flex-row">
						<p className="font-semibold">{review.authorName}</p>
						<time className="text-muted-foreground">{timeAgo(new Date(review.date))}</time>
					</div>
					<span className="sr-only">{`${review.stars} out of 5 stars`}</span>
					<Rating rating={review.stars} />
				</div>
				<p className="max-w-3xl text-muted-foreground text-sm leading-relaxed">{review.review}</p>
			</div>
		</li>
	);
};

export const ReviewItemPlaceholder = () => {
	return (
		<article className="flex w-full animate-pulse gap-4 border-b py-6 last:border-none" aria-hidden>
			<Avatar className="h-10 w-10 border">
				<AvatarFallback></AvatarFallback>
			</Avatar>
			<div className="grid flex-1 gap-3">
				<div className="flex items-start justify-between gap-x-2">
					<div className="h-4 w-40 rounded-full bg-muted"></div>
					<Rating rating={0} />
				</div>
				<div className="max-w-3xl space-y-2 pb-1">
					<div className="h-2.5 w-[90%] rounded-full bg-muted"></div>
					<div className="h-2.5 w-[75%] rounded-full bg-muted"></div>
				</div>
			</div>
		</article>
	);
};

const timeAgo = (date: Date) => {
	const now = new Date();
	const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

	if (diffInSeconds < 60) {
		return "Just now";
	}

	const diffInMinutes = Math.floor(diffInSeconds / 60);
	if (diffInMinutes < 60) {
		return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
	}

	const diffInHours = Math.floor(diffInMinutes / 60);
	if (diffInHours < 24) {
		return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
	}

	const diffInDays = Math.floor(diffInHours / 24);
	if (diffInDays < 7) {
		return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
	}

	const diffInWeeks = Math.floor(diffInDays / 7);
	if (diffInWeeks < 4) {
		return `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""} ago`;
	}

	const diffInMonths = Math.floor(diffInDays / 30);
	if (diffInMonths < 12) {
		return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
	}

	const diffInYears = Math.floor(diffInMonths / 12);
	return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
};
