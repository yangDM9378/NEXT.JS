"use client";
import { ClientSafeProvider, signIn } from "next-auth/react";
import ColorButton from "./ui/ColorButton";

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

const Signin = ({ providers, callbackUrl }: Props) => {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <ColorButton
          key={id}
          text={`sign in`}
          onClick={() => signIn(id, { callbackUrl })}
          size="big"
        />
      ))}
    </>
  );
};

export default Signin;
