import { useState } from "react";
import { DemoButton } from "../../../components/button/DemoButton";
import { FaUser } from "react-icons/fa";
import { DemoAvatar } from "../../../components/avatar/DemoAvatar";
import type { Errors } from "../../../components/validation/validators";
import { PageHeaderCard } from "../../../components/cards/PageHeaderCard";

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
    <div className="w-full h-full flex flex-col md:flex-row items-start gap-5">
      <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-2 h-full ">
        <div className="flex flex-col w-full h-full bg-(--background) ring-2 ring-(--input-border) rounded-xl p-3 space-y-5">
          <PageHeaderCard
            title="Profile Information"
            titleClass="text-lg font-normal"
            subtitle="Update your personal information"
            subtitleClass="text-sm font-normal"
            visibleDate={false}
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
      </div>
      <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-2 ">
        <div className="flex flex-col w-full h-full bg-(--background) ring-2 ring-(--input-border) rounded-xl p-3 space-y-1">
          <PageHeaderCard
            title="Password"
            subtitle="Update your password"
            titleClass="text-lg font-normal"
            subtitleClass="text-sm font-normal"
            visibleDate={false}
          />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-5 w-full p-3 "
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
    </div>
  );
}
