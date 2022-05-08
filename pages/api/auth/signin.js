import { getProviders, signIn } from "next-auth/react";

export default function signin({ providers }) {
  return <div>signin</div>;
}

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
