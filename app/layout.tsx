import Link from "next/link";
import "./globals.css"; // Tailwind CSS가 적용된 스타일

export const metadata = {
	title: "나의 CMS",
	description: "Spring Boot + Next.js 풀스택 CMS",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ko">
			<body className="bg-gray-50 text-gray-900">
				<header className="bg-white shadow-md py-4 px-6 mb-6">
					<nav className="flex gap-4">
						<Link href="/" className="font-bold text-blue-600 hover:underline">
							홈
						</Link>
						<Link href="/login" className="hover:underline">
							로그인
						</Link>
						<Link href="/register" className="hover:underline">
							회원가입
						</Link>
						<Link href="/mypage" className="hover:underline">
							마이페이지
						</Link>
						<Link href="/admin" className="hover:underline">
							관리자
						</Link>
					</nav>
				</header>
				<main className="px-6">{children}</main>
			</body>
		</html>
	);
}
