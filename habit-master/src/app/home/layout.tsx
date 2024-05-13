import NavBar from "@/components/NavBar";

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="lemonade" className="bg-primary bg-opacity-45" >
			<body>
                <NavBar/>
                <div className="flex items-center justify-center p-8 w-full h-auto bg-primary bg-opacity-45">
                    {children}
                </div>
            </body>
		</html>
	);
}
