import MainTextComponent from "@/components/MainTextComponent";
import Image from "next/image";

export default function page() {
  	return (
		<main className="w-full h-screen p-8 bg-base-100 flex justify-center items-center"> 
			<Image src={"/curveBackground.png"} alt={""} quality={100} fill sizes="100vw" style={{objectFit: 'cover'}}/>
			<div className="absolute">
				<MainTextComponent/>
			</div>
		</main>
  	);
}
