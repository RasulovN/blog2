
"use client";
import { useEffect, useState } from 'react';
import { Button, Modal, TextInput } from "flowbite-react";
import { AiFillCloseCircle, AiOutlineSearch } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { Input } from 'antd';
//
import { AudioOutlined } from '@ant-design/icons';
import { Space } from 'antd';

export default function NavSearch() {
  const location = useLocation();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // ad
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  // das
  
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
    setOpenModal(false)
  };

  // useEffect(() => {
    const handleWindowClick = () => {
      setOpenModal(false);
    };
    
    const onChange = (e) => {
      console.log(e);
    };
    const searchClear = (e) => {
      (e) => setSearchTerm(e.target.value = "");
    };
    const handleIconClick = () => {
      console.log("Icon clicked!");
    };
  return (
    <>
      <form onSubmit={handleSubmit}>
      {/* <div className='bg-gray-700 text-teal-500 hover:underline focus-blue-700'>
          <Search
          type='text'
            placeholder="Search..."
            className='hidden lg:inline newSearch focus-blue-700'
            allowClear
            onSearch={onSearch}
            value={searchTerm}
            style={{
              width: 200,
              color: "green-7",
            }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
    </div> */}
                  <TextInput
                  onAbort={AiOutlineSearch}
                    type='text'
                    placeholder='Search...'
                    rightIcon={AiOutlineSearch}
                    // icon={<AiFillCloseCircle icon="yourIconName" onClick={handleIconClick} />}
                    className='hidden lg:inline'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
          </form>

      <Button onClick={() => setOpenModal(true)} className='w-12 h-10 lg:hidden ' color='gray' pill>
         <AiOutlineSearch />
      </Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}
      className='bg-gray-700'
      style={{background: "dark"}}>
        
        <Modal.Header className=''>
          </Modal.Header>
        <Modal.Body className=''>  
        <form onSubmit={handleSubmit} className='searchform'>
                  <TextInput
                    type='text'
                    placeholder='Search...'
                    // rightIcon={IoMdClose}
                    className='w-full'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
            <IoMdClose onClick={(e) => { e.preventDefault(); setSearchTerm(''); }} className='searchclear'/>
          </form>
        </Modal.Body>
        <Modal.Body className=''>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              No recent searches
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
