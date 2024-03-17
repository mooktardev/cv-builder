import { Input } from "@nextui-org/react";

export default function InputForm({isRequired, type="text", label, placeholder, defaultValue, size="sm", ...props}) {
    return (
        <Input
            isRequired={isRequired ? true : false}
            type={type}
            label={label}
            placeholder={placeholder}
            defaultValue={defaultValue ? defaultValue : ""}
            size={size}
            variant="flat"
            labelPlacement="outside"
            radius="none"
            {...props}
        />
    );
}
