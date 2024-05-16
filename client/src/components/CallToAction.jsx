import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import translateText from 'free-google-translator-api';
import { useTranslation } from 'react-i18next';

export default function CallToAction(props) {
    const [loading, setLoading] = useState(true);
    const [t, i18n] = useTranslation("global");
    const project = props.project;
    const recentProjects = props.recentProjects;
    const uz = i18n.language
    const ru = i18n.language
    const en = i18n.language
    // console.log(
    //     //  recentProjects.map((recentProject) => {
    //     //     <>
    //     //         key={recentProject._id}
    //     //     </>
    //     //     const datatitle = () => {
    //     //         if(uz){
    //     //             recentProject.title
    //     //         }else
    //     //         if(ru){
    //     //             recentProject.title
    //     //         }else {
    //     //              recentProject.title
    //     //         }
    //     //       }
    //     //       {datatitle}
    //     //     })
    
    //     );
        const renderRecentProjects = () => {
            return recentProjects.map((recentProject) => 
            {
                if(uz){recentProject.title}else
                if(ru){recentProject.title}else
                if(en){recentProject.title}  
            }
            // (
            //     <div key={recentProject._id}>
            //         {/* <h2>{t(recentProject.title)}</h2> */}
            //         {/* {
            //             if(uz){recentProject.title}else
            //             if(ru){recentProject.title}else
            //             if(en){recentProject.title}  
            //         } */}
            //     </div>
            // )
        );
        };

//   function datatitle(uztitle, rutitle, entitle){
//     if(uz){
//         const uztitle = props.recentProjects.title
//     }else
//     if(ru){
//         const rutitle = props.recentProjects.title
//     }else {
//         const entitle = props.recentProjects.title
//     }
//   }
//   console.log(datatitle());

    // {recentProjects &&
    //     recentProjects.map((recentProject) => {
    //         if(uz){console.log(recentProject.title)}else
    //         if(ru){console.log(recentProject.title)}else
    //         {console.log(recentProject.title)}
    //     }
    //         // console.log(recentProject.title)
    // )}
    // const sourceText = "Hello, world!";
    // const sourceLang = "auto"; // Auto Detect
    // const targetLang = "zh"; // Chinese
    
    // translateText(sourceText, sourceLang, targetLang)
    //   .then(translatedText => {
    //     console.log(`Translated text (${targetLang}):`, translatedText);
    //   })
    //   .catch(error => {
    //     console.error("Translation failed:", error);
    //   });
    // console.log(project)

    // if (loading)
    // return (
  // <div className='flex justify-center items-center min-h-screen'>
  //         <Spinner size='xl' />
  //       </div>
  //     );
  //     setLoading(false);

    return (
      <>
       <div>
       {recentProjects &&
              recentProjects.map((recentProject) => 
            //   {
            //     if(uz){console.log(recentProject.title)}
            //     if(ru){console.log(recentProject.title)}
            //     if(en){console.log(recentProject.title)}
            //   }
          <div className='flex flex-col sm:flex-row m-5 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'
          key={recentProject._id}
          >
              <div className="flex-1 justify-center flex flex-col" >
                  <h2 className='text-2xl'  >
                  {renderRecentProjects()}
                    {/* {recentProjects &&
                        recentProjects.map((recentProject) => 
                        {
                            if(uz){recentProject.title}else
                            if(ru){recentProject.title}else
                            {recentProject.title}
                        }
                     ) } */}
                  </h2>
                  <p className='text-gray-500 my-2' 
                      dangerouslySetInnerHTML={{ __html: recentProject.content }}>
                  </p>
              <div className='flex flex-col sm:flex-row '>
                  <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none m-2'>
                          <a href={recentProjects && recentProject.projecturl} target='_blank' rel='noopener noreferrer'>
                              Demo
                          </a>
                      </Button>
                      <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none m-2'>
                          <a href={recentProjects && recentProject.source} target='_blank' rel='noopener noreferrer'>
                              Source Code
                          </a>
                      </Button>
              </div>
              </div>
              <div className="p-7 flex-1"   >
                  <img
                      src={recentProjects && recentProject.image}
                      alt={recentProjects && recentProject.title}
                      className='mt-10 p-3 max-h-[600px] w-full object-cover'
                    />
              </div>
          </div>
              )}
       </div>
      </>
    )
}
