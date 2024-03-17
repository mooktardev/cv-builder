import { Textarea } from "@nextui-org/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { InputForm } from "../index";

export default function PersonnalForm() {
    return (
        <>
            <h2 className="flex items-center gap-2 text-3xl font-semibold mb-4">
                <UserCircleIcon className="w-5 h-5" />
                <span>Personnal Information</span>
            </h2>
            <div className="w-full flex flex-col sm:flex-row flex-nowrap gap-2">
                <div className="w-full flex gap-2">
                    <InputForm
                        label="Firstname"
                        placeholder="John..."
                        isRequired
                    />
                    <InputForm
                        label="Lastname"
                        placeholder="Doe..."
                        isRequired
                    />
                    <InputForm
                        label="Job title"
                        placeholder="CEO, Manager..."
                    />
                </div>
                <Textarea
                    isRequired
                    label="About"
                    placeholder="Says somethings about you..."
                    size="none"
                    variant="flat"
                    labelPlacement="outside"
                    radius="none"
                />
            </div>
        </>
    );
}
