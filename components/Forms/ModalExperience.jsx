import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Textarea,
} from "@nextui-org/react";
import InputForm from "../InputForm";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function ModalExperience({ mode, lauch }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button
                onPress={lauch}
                size="sm"
                color="secondary"
                radius="sm"
                startContent={<PlusIcon className="h-4 w-4" />}
            >
                New experience
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {mode == "edit"
                                    ? "Edit Experience"
                                    : "New Experience"}
                            </ModalHeader>
                            <ModalBody>
                                <div className="w-full flex gap-3">
                                    <InputForm
                                        label="Title"
                                        placeholder="Title..."
                                        isRequired
                                    />
                                    <InputForm
                                        label="Company"
                                        placeholder="Company..."
                                        isRequired
                                    />
                                </div>
                                <div className="w-full flex gap-3">
                                    <InputForm
                                        type="date"
                                        label="Date From"
                                        placeholder="Date From"
                                        isRequired
                                    />
                                    <InputForm
                                        type="date"
                                        label="Date To"
                                        placeholder="Date To"
                                        isRequired
                                    />
                                </div>
                                <Textarea
                                    isRequired
                                    label="Desription"
                                    placeholder="Description..."
                                    size="sm"
                                    variant="flat"
                                    labelPlacement="outside"
                                    radius="none"
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="flat"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button color="secondary" onPress={onClose}>
                                    Save
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
