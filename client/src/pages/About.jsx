import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WinCard from '../components/about/WinCard';
import TimeLine from '../components/about/Timeline';
import { Button, Spinner } from 'flowbite-react';
import allcard from '../components/about/allcard';
import { useTranslation } from 'react-i18next';
import AboutCard from '../components/about/AboutCard';

export default function About() {
  const { individualWins } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [wins, setWins] = useState(null);
  const [recentWins, setRecentWins] = useState(null);
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    const fetchWin = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/win/getwins?${individualWins}`);
        const data = await res.json();
    
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setWins(data.wins);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchWin();
  }, [individualWins]);

  useEffect(() => {
    try {
      const fetchRecentWins = async () => {
        const res = await fetch(`/api/win/getwins`);
        const data = await res.json();
        if (res.ok) {
          setRecentWins(data.wins);
        }
      };
      fetchRecentWins();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  if (loading)
  return (
<div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    );
  return (
    <div className='min-h-screen items-center justify-center '>
      <div className='max-w-4xl h-96 mx-auto p-3 text-center '  style={{height: '800px', width: '100%'}}>
          <h1 className='text-3xl font font-semibold text-center my-7' >{t("aboutPage.about_me1")}  </h1>
              <div className='h-full text-md text-gray-500 flex flex-col gap-6'   style={{height: '800px', width: '100%'}}>
                <AboutCard />
              </div>
        </div>
      <div className='max-w-4xl mx-auto p-3'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>{t("aboutPage.about_me")} </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>{t("aboutPage.me")}</p>

            <p>{t("aboutPage.me2")}</p>
          </div>
        </div>
        <div>
          <h1 className='text-3xl text-center font font-semibold my-7'>
          {t("aboutPage.about_learn")} 
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>{t("aboutPage.about_learnAb")}  </p>

            <TimeLine />
          </div>
        </div>
        </div>
        
        {/* Certificate */}
        <div className='max-w-4xl mx-auto p-3 text-center '>
          <h1 className='text-3xl font font-semibold text-center my-7' >{t("aboutPage.win_info")}  </h1>
              <div className='text-md text-gray-500 flex flex-col gap-6'>
                 <WinCard key={wins._id} wins={wins}     recentWins={recentWins}/>
              </div>
        </div>
      
     
    </div>  
  );
}
