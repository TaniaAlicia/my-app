import ExploreTabs from '@/app/components/explore/ExploreTabs';
import  exploreApi  from '@/services/explore/explore.service';

const ExplorePage = async ({searchParams}: { searchParams: { type?: string } }) => {
  const hashesPromise =  exploreApi.getTrendingHashtag(0, 5);
  const usersPromise = exploreApi.getFollowRecomendations(0, 4);

  const [hashes, users] = await Promise.all([hashesPromise, usersPromise]);

  return (
    <>
      <main className="flex flex-col bg-gray-100 p-8">
        <section className="flex flex-col mb-8"></section>
        <ExploreTabs hashtags={hashes} users={users} initialTab={searchParams?.type} />
      </main>
    </>
  );
};

export default ExplorePage;
