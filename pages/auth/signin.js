import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
          src="https://www.stormslike.net/Content/Templates/storm/img/follower.png"
          alt="instagram-image"
        />
        <div>
          {Object.values(providers).map((provider) => (
            <div className="flex flex-col items-center" key={provider.name}>
              <img
                className="w-32 object-cover "
                src="https://www.biscuitsandbath.com/wp-content/uploads/2018/05/instagram-logo-2.png"
                alt="isntagram-logo"
              />
              <p className="text-sm italic my-10 text-center">
                This app is created dor learning purposes.
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
              >
                Sigin in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
