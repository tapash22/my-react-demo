import { useState } from "react";
import { DemoButton } from "../../../components/button/DemoButton";
import { FaUser } from "react-icons/fa";
import { DemoAvatar } from "../../../components/avatar/DemoAvatar";
import type { Errors } from "../../../components/validation/validators";
import { DemoPageSectionCard } from "../../../components/cards/DemoPageSectionCard";

interface PasswordFields {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface ProfileFields {
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export function ProfileSettings() {
  const [errors, setErrors] = useState<Errors<PasswordFields>>({});
  const [profile, setProfile] = useState<ProfileFields>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    image: "",
  });
  const [form, setForm] = useState<PasswordFields>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfile = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Optional: clear error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <div className="p-1 w-full h-auto bg-(--background) flex gap-3">
      <div className="w-1/2 h-auto shadow-(--shadow-card) rounded-xl p-3">
        <DemoPageSectionCard
          title="Profile Information"
          subtitle="Update your personal information"
          haveBorder={false}
        />
        <form
          onSubmit={handleProfile}
          className="flex flex-col  gap-5 w-full p-3"
        >
          <div className="flex flex-col justify-center items-center space-y-2">
            <DemoAvatar icon={FaUser} />
            <input
              type="file"
              name="image"
              value={profile.image}
              onChange={handleChange}
              className="p-1 ring-1 ring-(--input-border) text-center rounded-lg w-1/4"
            />
          </div>
          <div className="flex justify-between gap-3 ">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={profile.firstName}
              onChange={handleChange}
              className="input-field"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={profile.lastName}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="block w-full">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={profile.email}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="block w-full">
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              value={profile.phoneNumber}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="w-full p-2 h-auto flex justify-end items-center">
            <DemoButton title="Save Change" />
          </div>
        </form>
      </div>
      <div className="w-1/2 h-auto shadow-(--shadow-card) rounded-xl p-3">
        <DemoPageSectionCard
          title="Password"
          subtitle="Update your password"
          haveBorder={false}
        />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col  gap-5 w-full p-3"
        >
          <div className="block ">
            <input
              type="password"
              name="password"
              placeholder="Current Password"
              value={form.currentPassword}
              onChange={handleChange}
              className="input-field"
            />
            {errors.currentPassword && (
              <p className="text-red-500 text-sm w-100 flex justify-start p-2">
                {errors.currentPassword}
              </p>
            )}
          </div>
          <div className="block w-full">
            <input
              type="password"
              name="password"
              placeholder="New Password"
              value={form.newPassword}
              onChange={handleChange}
              className="input-field"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm w-100 flex justify-start p-2">
                {errors.newPassword}
              </p>
            )}
          </div>
          <div className="block w-full">
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="input-field"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm w-100 flex justify-start p-2">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <div className="w-full p-2 h-auto flex justify-end items-center">
            <DemoButton title="Update Password" />
          </div>
        </form>
      </div>
    </div>
  );
}
