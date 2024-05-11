import NavBar from "@/components/NavBar";

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="lemonade" >
			<body className="bg-primary bg-opacity-45">
                <NavBar/>
                <div className="flex items-center justify-center px-8 w-full">
                    {children}
                </div>
            </body>
		</html>
	);
}
