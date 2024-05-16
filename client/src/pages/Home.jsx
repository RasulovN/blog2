import { Link } from 'react-router-dom';
// import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { useTranslation } from 'react-i18next';
// import RoutAnim from '../components/animation/RoutAnim';
// import CookieConsent from '../components/privacyPolicy/CookieConsent';
// import CookieComponent from '../components/CookieCom';



export default function Home(props) {
  const [posts, setPosts] = useState([]);
  // const [recentProjects, setRecentProjects] = useState(null);
     // Tranlate
 const [t, i18n] = useTranslation("global");
 // Tranlate end



  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts?limit=4');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  
  return (

    <div>
      
      {/* <RoutAnim /> */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>{t("homePage.body.welcome_message2")}</h1>
        <p>{t("homePage.body.welcome_message2")}</p>
        <p className='text-gray-500 text-xs sm:text-sm'>{t("homePage.body.infoP")}</p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          {t("homePage.body.view_all_posts")}
        </Link>
      </div>
      {/* <div className='p-3 bg-amber-100 dark:bg-slate-700'>
      <CallToAction project={recentProjects} />
      </div> */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>{t("homePage.body.post_resent")}</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              {t("homePage.body.view_all_posts")}
            </Link>
          </div>
        )}
      </div>
      <div className='flex p-20'>
    <div>

    </div>
        {/* <CookieComponent /> */}
        {/* <CookieConsent /> */}
      </div>
    </div>
  );
}
