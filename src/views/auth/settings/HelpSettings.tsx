import { useState } from "react";
import { DemoButton } from "../../../components/button/DemoButton";
import { DemoDropdownSelect } from "../../../components/dropdown/DemoDropdownSelect";
import { faqs } from "../../../store/settings-data";
import { DemoCardExpansion } from "../../../components/cards/DemoCardExpansion";
import { PageHeaderCard } from "../../../components/cards/PageHeaderCard";

interface ContactFields {
  subject: string;
  message: string;
  file: File | null;
}

type SubjectType =
  | "Select a Subject"
  | "General Inquiry"
  | "Technical Issue"
  | "Billing Question";

const SUBJECT_OPTIONS: SubjectType[] = [
  "Select a Subject",
  "General Inquiry",
  "Technical Issue",
  "Billing Question",
];

export function HelpSettings() {
  const [contact, setContact] = useState<ContactFields>({
    subject: "Select A Subject",
    message: "",
    file: null,
  });

  // Handle textarea change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input change
  // file input handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setContact((prev) => ({
      ...prev,
      file,
    }));
  };

  // form submit
  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();

    // optional validation before submit
    if (contact.subject === "Select a Subject") {
      alert("Please select a subject");
      return;
    }

    if (!contact.message.trim()) {
      alert("Please enter a message");
      return;
    }

    // Create FormData to send file
    const formData = new FormData();
    formData.append("subject", contact.subject);
    formData.append("message", contact.message);
    if (contact.file) formData.append("file", contact.file);

    // TODO: send to API
    console.log("Submitting form:", contact);

    // reset form
    setContact({ subject: "Select a Subject", message: "", file: null });
  };

  // disable submit button if any required field empty
  const isSubmitDisabled =
    contact.subject === "Select a Subject" ||
    !contact.message.trim() ||
    !contact.file; // disable if no file selected

  return (
    <div className="p-2 w-full h-auto bg-(--background) flex flex-col space-y-3">
      <div className="w-full h-auto flex flex-col">
        <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl p-3">
          <PageHeaderCard
            title="Contact Support"
            subtitle="Reach out for help or submit a request"
            titleClass="text-lg font-normal -ml-2"
            subtitleClass="text-sm font-normal -ml-2"
            visibleDate={false}
          />
          <form
            onSubmit={handleContact}
            className="flex flex-col  gap-5 w-full p-3"
          >
            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg font-medium tracking-wide text-(--foreground)">
                Subject
              </label>
              <DemoDropdownSelect
                value={contact.subject}
                options={SUBJECT_OPTIONS}
                onChange={(value) =>
                  setContact((prev) => ({
                    ...prev,
                    subject: value,
                  }))
                }
              />
            </div>
            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg font-medium tracking-wide text-(--foreground)">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Message"
                value={contact.message}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="flex flex-col w-full space-y-2">
              <label className="text-lg font-medium tracking-wide text-(--foreground)">
                Attach Options
              </label>
              <input
                type="file"
                name="file"
                placeholder="Attach File"
                onChange={handleFileChange}
                className="input-field"
              />
            </div>
            <div className="w-full h-auto flex justify-end items-center">
              <DemoButton
                isDisabled={isSubmitDisabled}
                title="Submit Request"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="w-full h-auto flex flex-col">
        <div className="w-full h-auto ring-1 ring-(--input-border) rounded-xl p-3 space-y-2 ">
          <PageHeaderCard
            title="Frequently Asked Questions"
            subtitle="Find quick answers to common questions"
            titleClass="text-lg font-normal -ml-2"
            subtitleClass="text-sm font-normal -ml-2"
            visibleDate={false}
          />
          <div className="w-full h-auto flex flex-col space-y-2 ">
            {faqs &&
              faqs.map((faq) => (
                <DemoCardExpansion
                  key={faq.id}
                  data={faq}
                  expandIconDirection={true}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
