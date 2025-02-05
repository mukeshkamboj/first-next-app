"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  companyName: string;
  location: string;
  website: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  tiktok: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    location: "",
    website: "",
    instagram: "",
    facebook: "",
    linkedin: "",
    tiktok: "",
  });
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/user-details", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    router.push(`/you-entered?data=${encodeURIComponent(JSON.stringify(data))}`);
  };

  return (
    <div className="container">
      <h1 className="my-4">Enter Your Details</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="companyName" className="form-control mb-2" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required />
        <input type="text" name="location" className="form-control mb-2" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <input type="url" name="website" className="form-control mb-2" placeholder="Website" value={formData.website} onChange={handleChange} required />
        <input type="url" name="instagram" className="form-control mb-2" placeholder="Instagram" value={formData.instagram} onChange={handleChange} />
        <input type="url" name="facebook" className="form-control mb-2" placeholder="Facebook" value={formData.facebook} onChange={handleChange} />
        <input type="url" name="linkedin" className="form-control mb-2" placeholder="LinkedIn" value={formData.linkedin} onChange={handleChange} />
        <input type="url" name="tiktok" className="form-control mb-2" placeholder="TikTok" value={formData.tiktok} onChange={handleChange} />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}