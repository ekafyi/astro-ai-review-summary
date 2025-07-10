import { ArrowLeft, ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/sample-data";

type ProductCardProps = { product: Product; imageNode?: React.ReactNode };

export function ProductCard({ product, imageNode }: ProductCardProps) {
	return (
		<li
			className="group relative cursor-pointer overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 focus-within:outline-solid hover:shadow-lg"
			aria-labelledby={`link-${product.id}`}
		>
			<div className="aspect-square overflow-hidden bg-muted">
				{imageNode || (
					<img
						src={`/product-images/${product.id}.png`}
						alt=""
						className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				)}
			</div>
			<div className="space-y-2 p-4 md:p-6">
				<h2 className="font-semibold text-lg leading-tight transition-colors group-hover:text-primary md:text-xl">
					<a
						href={`/products/${product.id}`}
						className="after:absolute after:inset-0"
						id={`link-${product.id}`}
					>
						{product.name}
					</a>
				</h2>
				<div className="text-lg text-muted-foreground tracking-tight">
					<Price value={product.price} />
				</div>
			</div>
		</li>
	);
}

type ProductDetailProps = ProductCardProps;

export function ProductDetail({ product, imageNode }: ProductDetailProps) {
	return (
		<div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
			<div className="aspect-square">
				{imageNode || (
					<img
						src={`/product-images/${product.id}.png`}
						alt=""
						className="h-full w-full rounded-lg object-cover shadow-lg"
					/>
				)}
			</div>
			<div className="space-y-6">
				<a
					href="/"
					className="inline-flex items-center space-x-2 text-muted-foreground text-sm transition-colors hover:text-foreground"
				>
					<ArrowLeft className="h-5 w-5" />
					<span className="underline">All Products</span>
				</a>
				<h1 className="font-bold text-3xl md:text-4xl">{product.name}</h1>
				<div className="text-xl md:text-2xl">
					<Price value={product.price} />
				</div>
				<section aria-label="Product description">
					<p>{product.description}</p>
				</section>
				<div className="flex space-x-4">
					{/* Note: Replace this part with server islands for server-side operations */}
					<button
						type="button"
						className="flex flex-1 items-center justify-center space-x-2 rounded-lg bg-foreground px-6 py-3 font-semibold text-background transition-colors"
					>
						<ShoppingCart className="h-5 w-5" />
						<span>Add to Cart</span>
					</button>
					{/* /end replace */}
				</div>
			</div>
		</div>
	);
}

function Price({ value }: { value: number }) {
	const SAMPLE_CURRENCY = { text: "simoleons", symbol: "§" };
	return (
		<>
			<span className="sr-only">{`${value} ${SAMPLE_CURRENCY.text}`}</span>
			<span aria-hidden="true">{`${SAMPLE_CURRENCY.symbol} ${value}`}</span>
		</>
	);
}
