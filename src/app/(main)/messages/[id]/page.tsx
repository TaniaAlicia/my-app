import Link from "next/link";
import Image from "next/image";

const MessagesPage = () => {
  const messages = [
    {
      name: "Han Solo",
      username: "hansolo",
      message: "Primer Mensaje",
      repliesCount: 13,
    },
    {
      name: "Peter Brown",
      username: "peterbrown",
      message: "Segundo Mensaje",
      repliesCount: 2,
    },
    {
      name: "John Doe",
      username: "johndoe",
      message: "Tercer mensaje",
      repliesCount: 0,
    },
  ];

  return (
    <main className="flex flex-col bg-gray-200 p-4">
      <h1 className="text-xl font-semibold mb-4">Mensajes Recientes</h1>
      <section className="flex flex-col">
        {messages.map((message, index) => (
          <div key={index} className="flex items-start mt-4 bg-white p-4 rounded-lg shadow">
            <div className="rounded-full p-5 bg-gray-300 w-16 text-center">
              <span className="font-semiboldtext-sm">{message.name[0]}</span>
            </div>
            <div className="flex flex-col ml-4">
              <div className="flex items-center">
                <h3 >{message.name}</h3>
                <div className="text-md ml-2 text-gray-600 cursor-pointer">
                  @<Link href={`/users/${message.username}`}>{message.username}</Link>
                </div>
              </div>
              <p className="mt-2">{message.message}</p>
            </div>
            <div className="relative w-16 h-16 ml-auto">
            <Image
              src="https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg" // Direct path from the public folder
              alt="Picture of the author"
              /* width={100}
              height={100} */
              fill
              priority
              className="object-cover"
            />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default MessagesPage;
