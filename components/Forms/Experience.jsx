import {
    Button,
    Card,
    CardHeader,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Textarea,
    useDisclosure,
} from "@nextui-org/react";
import {
    PencilIcon,
    PlusIcon,
    TrashIcon,
    BriefcaseIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import InputForm from "../InputForm";
import { DATA } from "../../src/data";


export function ExperienceItem({ item, onOpen, handleModalMode, handleActiveItemId }) {
    const handleEditButtonClick = () => {
        handleModalMode("edit")
        handleActiveItemId(item.id)
        onOpen();
    };
    return (
        <Card className="shadow-none border-2 border-purple-400" radius="sm">
            <CardHeader className="py-3 px-4 mb-0 flex items-center justify-between">
                <div className="">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-tiny">
                        <span className="font-semibold">{item.company}</span>
                        &nbsp;&middot;&nbsp;
                        <span className="">
                            ({item.dateFrom} &middot; {item.dateTo})
                        </span>
                    </p>
                </div>
                <div className="flex items-center justify-end">
                    <Button
                        isIconOnly
                        aria-label="Delete"
                        size="sm"
                        variant="default"
                    >
                        <TrashIcon className="h-4 w-4 text-red-500" />
                    </Button>
                    <Button
                        isIconOnly
                        aria-label="Edit"
                        size="sm"
                        onPress={handleEditButtonClick}
                        dataMode="edit"
                        variant="default"
                    >
                        <PencilIcon className="h-4 w-4 text-purple-500" />
                    </Button>
                </div>
            </CardHeader>
        </Card>
    );
}

export function ExperienceModal({ mode, item, isOpen, onOpenChange }) {
    const {title, company, dateFrom, dateTo, description} = item

    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                backdrop="blur"
                isDismissable={false}
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
                                        defaultValue={title}
                                        isRequired
                                    />
                                    <InputForm
                                        label="Company"
                                        placeholder="Company..."
                                        defaultValue={company}
                                        isRequired
                                    />
                                </div>
                                <div className="w-full flex gap-3">
                                    <InputForm
                                        type="date"
                                        label="Date From"
                                        placeholder="Date From"
                                        defaultValue={dateFrom}
                                        isRequired
                                    />
                                    <InputForm
                                        type="date"
                                        label="Date To"
                                        placeholder="Date To"
                                        defaultValue={dateTo}
                                        isRequired
                                    />
                                </div>
                                <Textarea
                                    isRequired
                                    label="Desription"
                                    placeholder="Description..."
                                    defaultValue={description}
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

export default function ExperienceForm() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalMode, setModalMode] = useState("create");
    const [activeItemId, setActiveItemId] = useState(null)
    const [activeItem, setactiveItem] = useState({})

    const handleModalMode = (mode) => {
        setModalMode(mode)
    };
    const handleActiveItemId = (id) => {
        setActiveItemId(id)
    };

    const handleButtonNew = () => {
        setModalMode("create");
        onOpen();
    };

    useEffect(() => {
        if (activeItemId !== null) {
            console.log(activeItemId)
            const item = DATA.experiences.filter(exp => exp.id === activeItemId)[0]
            setactiveItem(item)
            console.log(activeItem.id)
        }
    }, [activeItemId, activeItem.id])
    

    return (
        <>
            <div className="flex items-center">
                <h2 className="flex items-center gap-2 text-3xl font-semibold mb-4">
                    <BriefcaseIcon className="h-5 w-5" />
                    <span>Experiences</span>
                </h2>
                <hr />
            </div>
            <div className="listing flex flex-col gap-1">
                {DATA.experiences.map((item) => (
                    <ExperienceItem
                        key={item.id}
                        item={item}
                        onOpen={onOpen}
                        handleModalMode={handleModalMode}
                        handleActiveItemId={handleActiveItemId}
                    />
                ))}
            </div>
            <div className="form">
                <Button
                    onPress={handleButtonNew}
                    size="sm"
                    color="secondary"
                    radius="sm"
                    startContent={<PlusIcon className="h-4 w-4" />}
                >
                    New
                </Button>
            </div>
            <ExperienceModal
                mode={modalMode}
                item={activeItem}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            />
        </>
    );
}
