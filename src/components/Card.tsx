import cn from "classnames";

export default function Card({title, description, href, color}: {
    title: string;
    description: string;
    href?: string;
    color: string;
}) {

    const content = (
        <div
            className="p-5 flex items-center justify-center bg-gray-200 dark:bg-gray-space-gray rounded-md flex-1 ring-gray-300 dark:ring-gray-900 hover:bg-gray-100 hover:ring-2 transition-all">
            <div
                style={{height: 20, width: 20}}
                className={cn("rounded-full animate-pulse", color)}
            />
            <div className="ml-5 flex flex-col flex-1">
                <p className="font-bold leading-none text-lg text-gray-800 dark:text-gray-200">
                    {title}
                </p>
                <p className="text-gray-400">{description}</p>
            </div>
        </div>
    );

    if (href) {
        return (
            <a className="flex items-center justify-center" href={href}>
                {content}
            </a>
        );
    }

    return content;
}