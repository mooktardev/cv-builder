import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import InputForm from "../InputForm";

export default function SkillsForm() {
    return (
        <>
            <h2 className="flex items-center gap-2 text-3xl font-semibold mb-0">
                <WrenchScrewdriverIcon className="w-5 h-5" />
                <span>Skills</span>
            </h2>
            <div className="w-full flex gap-2">
                <InputForm
                    type="tel"
                    placeholder="Python, English, Writting, ..."
                    size="md"
                    description="Separete skills with commas ','"
                />
            </div>
        </>
    );
}
