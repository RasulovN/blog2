import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Button, Modal } from 'flowbite-react';
import { useTranslation } from 'react-i18next';

const CookieComponent = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['username']);
  const [openModal, setOpenModal] = useState(false);
  const [t, i18n] = useTranslation("global");

  const handleAccept = () => {
    setOpenModal(false)
    setCookie('accepted', true, { path: '/' });
    fetch('http://localhost:3000/acceptallcookies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accepted: true }),
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        if (data.success) {
          handleAccept(true);
          handleDecline(false);
        }
      })
      .catch(error => {
        console.error(error);
      });
      window.location.reload();
  };
  
  const handleDecline = () => {
    removeCookie('accepted');
    setOpenModal(false)
  };

  return (
    <>
    {!cookies.accepted && (
    <div  style={{ position: 'relative', zIndex: '1' }} className='flex items-start justify-center'>
      <div className='flex fixed bottom-1 justify-center border-gray-100 bg-gray-100 p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700'>
      <div className='text-sm text-gray-500 flex flex-col gap-3 m-2'>
        <p className="leading-relaxed text-gray-500 dark:text-gray">{t("cookie.set_text")}</p>
      </div>
       <div>
        <Button onClick={() => setOpenModal(true)}>{t("cookie.set_btn")}</Button>
        </div>
      </div>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{t("cookie.modal_head")}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">{t("cookie.modal_text")}</p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">{t("cookie.modal_text2")} 
            <a href="00"></a></p>
          </div>
            <a
              href="https://firebasestorage.googleapis.com/v0/b/rasulovdev-blog.appspot.com/o/base%2Fraasulovdev.uz-provice.html?alt=media&token=2324bc02-4cbe-46ee-84cc-8953df97e934"
              className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              target='bank'
            >
              Read more
            </a>
        </Modal.Body>
        <Modal.Footer>

          <Button onClick={handleAccept}>{t("cookie.asp_btn")}</Button>
          <Button color="gray" onClick={handleDecline}>{t("cookie.rej_btn")}</Button>
        </Modal.Footer>
      </Modal>
  </div>
    )}
    </>
  );
};

export default CookieComponent;
