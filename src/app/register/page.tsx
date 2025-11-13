"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", gender: "" , role: "USER" });
  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("User created successfully!");
    router.push("/login");
  };


  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Register User</h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="border p-2"/>
        <input placeholder="Gender" value={form.gender} onChange={e => setForm({...form, gender: e.target.value})} className="border p-2"/>
        <input placeholder="Email" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="border p-2"/>
        <input placeholder="Password" type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} className="border p-2"/>
        <select value={form.role} onChange={e => setForm({...form, role: e.target.value})} className="border p-2">
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select>
        <button className="bg-blue-500 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}



