import { PropsWithChildren } from "react";

type headerProps = PropsWithChildren<{ image: { src: string; alt: string } }>;

export default function Header({ image, children }: headerProps) {
    return (
        <header>
            <img src={image.src} alt={image.alt} />
            {children}
        </header>
    );
}
