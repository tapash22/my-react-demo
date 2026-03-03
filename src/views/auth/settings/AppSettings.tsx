import { useState } from "react";
import { PageHeaderCard } from "../../../components/cards/PageHeaderCard";
import type { Errors } from "../../../components/validation/validators";
interface PasswordFields {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
export function AppSettings() {
  const [errors, setErrors] = useState<Errors<PasswordFields>>({});
  const [form, setForm] = useState<PasswordFields>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  //   const handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement & { name: keyof PasswordFields }>,
  //   ) => {
  //     const { name, value } = e.target;

  //     setForm((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //   };

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
    <div className="p-3 w-full h-auto bg-(--background) flex gap-3">
      <div className="w-1/2 h-auto shadow-(--shadow-card) rounded-xl">
        <PageHeaderCard
          title="Profile Information"
          subtitle="Update your personal information"
          visibleDate={false}
        />
      </div>
      <div className="w-1/2 h-auto shadow-(--shadow-card) rounded-xl p-3">
        <PageHeaderCard
          title="Password"
          subtitle="Update your password"
          visibleDate={false}
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
        </form>
      </div>
    </div>
  );
}
