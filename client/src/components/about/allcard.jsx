import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'flowbite-react';
import { useTranslation } from 'react-i18next';


function allcard() {
    const [t, i18n] = useTranslation("global");
    const [wins, setWins] = useState(null);
  const [recentWins, setRecentWins] = useState(null);
  console.log(i18n.language)
  const uz = i18n.language
  const ru = i18n.language
  const en = i18n.language


  const disEn = () =>{
    return (
        <div>
        {recentWins &&
                recentWins.map((recentWin) => 
            <div className='flex flex-col sm:flex-row m-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'
            key={recentWin._id}>
                <div className="flex-1 justify-center flex flex-col" >
                    <h2 className='text-2xl'  >
                        {recentWins && recentWin.title}
                    </h2>
                    <p className='text-gray-500 my-2' 
                        dangerouslySetInnerHTML={{ __html: recentWin.content }}>
                    </p>
                <div className='flex flex-col sm:flex-col '>
                    <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none m-2'>
                            <a href={recentWins && recentWin.winurl} target='_blank' rel='noopener noreferrer'>
                            Certificate Url
                            </a>
                        </Button>
                </div>
                </div>
                <div className="p-7 flex-1"   >
                    <img
                        src={recentWins && recentWin.image}
                        alt={recentWins && recentWin.title}
                        className='mt-10 p-3 max-h-[600px] w-full object-cover'
                    />
                </div>
            </div>
                )}
</div>
      )
    }
  const disUz = () =>{
    return (
        <div>
        {recentWins &&
                recentWins.map((recentWin) => 
            <div className='flex flex-col sm:flex-row m-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'
            key={recentWin._id}>
                <div className="flex-1 justify-center flex flex-col" >
                    <h2 className='text-2xl'  >
                        {recentWins && recentWin.title}
                    </h2>
                    <p className='text-gray-500 my-2' 
                        dangerouslySetInnerHTML={{ __html: recentWin.content }}>
                    </p>
                <div className='flex flex-col sm:flex-col '>
                    <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none m-2'>
                            <a href={recentWins && recentWin.winurl} target='_blank' rel='noopener noreferrer'>
                            Certificate Url
                            </a>
                        </Button>
                </div>
                </div>
                <div className="p-7 flex-1"   >
                    <img
                        src={recentWins && recentWin.image}
                        alt={recentWins && recentWin.title}
                        className='mt-10 p-3 max-h-[600px] w-full object-cover'
                    />
                </div>
            </div>
                )}
</div>
      )
    }
  const disRu = () =>{
    return (
        <div>
        {recentWins &&
                recentWins.map((recentWin) => 
            <div className='flex flex-col sm:flex-row m-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'
            key={recentWin._id}>
                <div className="flex-1 justify-center flex flex-col" >
                    <h2 className='text-2xl'  >
                        {recentWins && recentWin.title}
                    </h2>
                    <p className='text-gray-500 my-2' 
                        dangerouslySetInnerHTML={{ __html: recentWin.content }}>
                    </p>
                <div className='flex flex-col sm:flex-col '>
                    <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none m-2'>
                            <a href={recentWins && recentWin.winurl} target='_blank' rel='noopener noreferrer'>
                            Certificate Url
                            </a>
                        </Button>
                </div>
                </div>
                <div className="p-7 flex-1"   >
                    <img
                        src={recentWins && recentWin.image}
                        alt={recentWins && recentWin.title}
                        className='mt-10 p-3 max-h-[600px] w-full object-cover'
                    />
                </div>
            </div>
                )}
</div>
      )
    }

   function dis(){
    if(en){
        disEn()
       }else
      if(uz){
        disUz()
       }else
       if(ru){
         disRu()
      }
   }
    console.log(dis());
    return (
        <div>
    {dis()}
    </div>
  )
}  

export default allcard
