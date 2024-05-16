import React from 'react'
import { Label, TextInput, Textarea,  Button, Card, Tooltip} from 'flowbite-react';
import { useTranslation } from 'react-i18next';

function AboutCard() {
  const [t, i18n] = useTranslation("global");
  const currentYear = new Date().getFullYear();
  const age = currentYear - 2000;


  return (
    <div>
        <div className='flex flex-col w-full sm:flex-row rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800'>
              <div className="w-full flex-col md:max-w-xl md:flex-row">
                  <img
                      src='https://firebasestorage.googleapis.com/v0/b/rasulovdev-blog.appspot.com/o/photo_2024-04-26_13-39-50.jpg?alt=media&token=908f8a2c-b335-4357-8edb-020613345fe0'
                      alt='image'
                      className=' flex-1  rounded-t-lg object-cover  md:rounded-none md:rounded-l-lg'
                    />
              </div>
              <div className="w-full flex-col md:max-w-xl md:flex-row text-center" >
                  <h2 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-3'  >Rasulov Nurbek</h2>
                  {/* <p className="font-normal text-gray-700 dark:text-gray-400 p-3">
                    I am Nurbek Rasulov, {age} years old. I am from Karshi, Uzbekistan and currently live in Karshi, Kashkadarya Province.
                  </p> */}
                  <p className="font-normal text-gray-700 dark:text-gray-400 p-3">{t("aboutPage.about_me2")}</p>
                  <p className='bottom-1 p-3'>
                    <a href="/contact" className='text-blue-700'>{t("aboutPage.about_meContact")} &#x27A1;</a>
                  </p>
              </div>
          </div>
    </div>
  )
}

export default AboutCard
