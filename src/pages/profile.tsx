import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <Image
          src={user.picture as string}
          alt={user.name as string}
          width={50}
          height={50}
        />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
