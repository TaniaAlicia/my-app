
import Link from "next/link";

import { TrendingHashtag } from "@/types/hash.types";
import MessageHashtags from "../messages/MessageHashtags";

type ExploreTrendingProps = {
  hashes: TrendingHashtag[];
};

const ExploreTrending = ({ hashes }: ExploreTrendingProps) => {
  if (!hashes || hashes.length === 0) return null; // Cambiado a null para no renderizar nada si no hay hashes

  return (
    <div className="bg-gray-200 rounded-lg px-8 py-4 w-full">
      <h2 className="mb-4 font-semibold text-lg">Trending</h2>
      {hashes.slice(0, 2).map((hash, index) => (
        <div key={`trending-hash-${index}`} className="mb-4">
          <MessageHashtags hash={hash} />
        </div>
      ))}
      {hashes.length > 2 && (
        <Link href="/explore?type=HASHTAGS">
          <div className="link-primary">Ver más</div>
        </Link>
      )}
    </div>
  );
};

export default ExploreTrending;