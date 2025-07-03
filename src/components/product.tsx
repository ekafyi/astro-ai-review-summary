import { ArrowLeft, ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/sample-data";

type ProductCardProps = { product: Product; imageNode?: React.ReactNode };

export function ProductCard({ product, imageNode }: ProductCardProps) {
	return (
		<article className="group relative cursor-pointer overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 focus-within:outline-solid hover:shadow-lg">
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
					<a href={`/products/${product.id}`} className="after:absolute after:inset-0">
						{product.name}
					</a>
				</h2>
				<div>
					<span className="text-lg text-muted-foreground tracking-tight">
						{`§ ${product.price}`}
					</span>
				</div>
			</div>
		</article>
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
				<p className="text-xl md:text-2xl">{`§ ${product.price}`}</p>
				<p>{product.description}</p>
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
