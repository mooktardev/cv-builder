import InputForm from "../InputForm";
import {
    EnvelopeIcon
} from "@heroicons/react/24/outline";

export default function ContactForm() {
    return (
        <>
            <h2 className="flex items-center gap-2 text-3xl font-semibold mb-0">
                <EnvelopeIcon className="w-5 h-5" />
                <span>Contact Details</span>
            </h2>
            <div className="w-full flex gap-2">
                <InputForm
                    type="tel"
                    label="Phone number"
                    placeholder="0123456789"
                />
                <InputForm
                    type="email"
                    label="Email"
                    placeholder="youremail@example.com"
                />
                <InputForm
                    type="url"
                    label="Website"
                    placeholder="yourwebsite.com"
                />
            </div>
        </>
    );
}
