import Providers from "@/providers/ApolloProvider";
interface ImainLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({
    children,
}: ImainLayoutProps) {

    return (
        <Providers>
            {children}
        </Providers>
    );
}
