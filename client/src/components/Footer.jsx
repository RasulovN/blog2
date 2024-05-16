import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble, BsTelegram, BsLinkedin } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

export default function FooterCom() {
  const [t, i18n] = useTranslation("global");

  let deltasoft = (
    <a href='https://deltaoft.uz' target='blank'>DELTASOFT</a>
  )
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Rasulov
              </span>
              Blog
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='/'
                  // target='_blank'
                  rel='noopener noreferrer'
                >{t("footer.home")} </Footer.Link>
                  <Footer.Link
                    href='/about'
                    // target='_blank'
                    rel='noopener noreferrer'
                  >{t("footer.about")} </Footer.Link>
                <Footer.Link
                  href='/services'
                  // target='_blank'
                  rel='noopener noreferrer'
                >{t("footer.services")} </Footer.Link>
                <Footer.Link
                  href='/project'
                  // target='_blank'
                  rel='noopener noreferrer'
                >{t("footer.project")} </Footer.Link>
                <Footer.Link
                  href='/contact'
                  // target='_blank'
                  rel='noopener noreferrer'
                >{t("footer.contact")} </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title={t("footer.follow")} />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.github.com/RasulovN'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='https://instagram.com/rasulovdev'>Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title={t("footer.legal")} />
              <Footer.LinkGroup col>
                <Footer.Link  target='_blank'
                 href='https://firebasestorage.googleapis.com/v0/b/rasulovdev-blog.appspot.com/o/base%2Fraasulovdev.uz-provice.html?alt=media&token=2324bc02-4cbe-46ee-84cc-8953df97e934'>{t("footer.privacy")}</Footer.Link>
                <Footer.Link
                target='_blank' href='https://firebasestorage.googleapis.com/v0/b/rasulovdev-blog.appspot.com/o/base%2Ftermis.html?alt=media&token=eae49b33-b03a-4687-a177-c2e2c3273393'>{t("footer.terms")}</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='https://deltasoft.uz'
            target='blank'
            by="Rasulovdev & DELTASOFT"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://facebook.com/rasulovdev' target='blank' icon={BsFacebook}/>
            <Footer.Icon href='https://instagram.com/rasulovdev' target='blank' icon={BsInstagram}/>
            <Footer.Icon href='https://t.me/rasulovdev' target='blank' icon={BsTelegram}/>
            <Footer.Icon href='https://twetter.com' target='blank' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/RasulovN' target='blank' icon={BsGithub}/>
            <Footer.Icon href='https://linkdin.com/rasulovdev' target='blank' icon={BsLinkedin}/>

          </div>
        </div>
      </div>
    </Footer>
  );
}
