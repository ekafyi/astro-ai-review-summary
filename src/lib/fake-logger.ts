type Logger = {
	debug: (message: string) => void;
	info: (message: string) => void;
	warn: (message: string) => void;
	error: (message: string) => void;
	child: (props: Record<string, string>) => Logger;
};

const createLogger = (parentProps: Record<string, string> = {}): Logger => {
	const prefix = Object.values(parentProps).join(" ").trim();

	const log = (level: "debug" | "info" | "warn" | "error", message: string) => {
		const fullMessage = prefix ? `${prefix} ${message}` : message;
		console[level](fullMessage);
	};

	return {
		debug: (message: string) => log("debug", message),
		info: (message: string) => log("info", message),
		warn: (message: string) => log("warn", message),
		error: (message: string) => log("error", message),
		child: (childProps: Record<string, string>) => {
			return createLogger({ ...parentProps, ...childProps });
		},
	};
};

export const fakeLogger: Logger = createLogger();
