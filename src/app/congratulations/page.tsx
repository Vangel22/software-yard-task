import Image from "next/image";
import Link from "next/link";

export default function Congratulations() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <Image
        width={120}
        height={120}
        src="/success.svg"
        alt="success indicator"
      />
      <p>Welcome to your very own 25</p>
      <Link className="font-bold text-blue-500" href="/">
        Back to start
      </Link>
    </div>
  );
}
