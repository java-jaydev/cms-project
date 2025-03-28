"use client";

import { useState } from "react";

export default function RegisterPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("회원가입 정보:", { name, email, password });
		// TODO: API 연동 예정
	};

	return (
		<div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-4">회원가입</h1>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label htmlFor="name" className="block text-sm font-medium mb-1">
						이름
					</label>
					<input
						type="text"
						id="name"
						className="w-full border rounded px-3 py-2"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						aria-required="true"
					/>
				</div>
				<div>
					<label htmlFor="email" className="block text-sm font-medium mb-1">
						이메일
					</label>
					<input
						type="email"
						id="email"
						className="w-full border rounded px-3 py-2"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						aria-required="true"
					/>
				</div>
				<div>
					<label htmlFor="password" className="block text-sm font-medium mb-1">
						비밀번호
					</label>
					<input
						type="password"
						id="password"
						className="w-full border rounded px-3 py-2"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						aria-required="true"
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
				>
					등록
				</button>
			</form>
		</div>
	);
}
