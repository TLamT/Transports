import Link from "next/link";

export default function Home() {
 
  return (
    <div className="}">
    <div className="flex justify-center gap-2 text-xl space-x-20">
      <Link className="hover:underline hover:text-red-600" href="/MTR">MTR</Link>
      <Link className="mb-4 hover:underline hover:text-red-600" href="./KMB">KMB</Link>
      </div>
    </div>
  );
}
