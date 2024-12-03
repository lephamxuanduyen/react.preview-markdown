import { Button, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {
    text: String
    onClickFunc?: () => void
}
export const Btn = ({
    text,
    onClickFunc,
    ...rest
}: Props) => <Button onClick={onClickFunc} {...rest} variant={"plain"} >{text}</Button>