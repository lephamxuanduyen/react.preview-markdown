import { Link, LinkProps } from "@chakra-ui/react";

interface Props extends LinkProps { }
export const LinkBtn = (props: Props) => <Link
    px={'16px'}
    display={'flex'}
    alignItems={'center'}
    borderRadius={'0.375rem'}
    {...props} />