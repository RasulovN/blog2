import { Modal, Table, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
// import { set } from 'mongoose';
import { useTranslation } from 'react-i18next';

export default function DashProjects() {
  const { currentUser } = useSelector((state) => state.user);
  const [userProjects, setUserProjects] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [projectIdToDelete, setProjectIdToDelete] = useState('');
  const [t, i18n] = useTranslation("global");
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`/api/project/getprojects?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserProjects(data.projects);
          if (data.projects.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchProjects();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userProjects.length;
    try {
      const res = await fetch(
        `/api/project/getprojects?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserProjects((prev) => [...prev, ...data.projects]);
        if (data.projects.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteProject = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/project/deleteproject/${projectIdToDelete}/${currentUser._id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserProjects((prev) =>
          prev.filter((project) => project._id !== projectIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      <div className='md:mx-auto p-3'>
          {currentUser.isAdmin && (
              <Link to={'/create-project'}>
                <Button
                  type='button'
                  gradientDuoTone='purpleToPink'
                  className='w-full'
                >
                  {t("dash.add_project")}
                </Button>
              </Link>
            )}
          </div>
      <div className='md:mx-auto p-3'>
          {currentUser.isAdmin && userProjects.length > 0 ? (
            <>
              <Table hoverable className='shadow-md'>
                <Table.Head>
                  <Table.HeadCell>{t("dash.dash_project.date")}</Table.HeadCell>
                  <Table.HeadCell>{t("dash.dash_project.image")}</Table.HeadCell>
                  <Table.HeadCell>{t("dash.dash_project.title")}</Table.HeadCell>
                  <Table.HeadCell>{t("dash.dash_project.catrgory")}</Table.HeadCell>
                  <Table.HeadCell>{t("dash.del")}</Table.HeadCell>
                  <Table.HeadCell>
                    <span>{t("dash.edit")}</span>
                  </Table.HeadCell>
                </Table.Head>
                {userProjects.map((project) => (
                  <Table.Body className='divide-y'  key={project._id}>
                    <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                      <Table.Cell>
                        {new Date(project.updatedAt).toLocaleDateString()}
                      </Table.Cell>
                      <Table.Cell>
                        <Link to={`/project`}>
                          <img
                            src={project.image}
                            alt={project.title}
                            className='w-20 h-10 object-cover bg-gray-500'
                          />
                        </Link>
                      </Table.Cell>
                      <Table.Cell>
                        <Link
                          className='font-medium text-gray-900 dark:text-white'
                          to={`/project`}
                          // to={`/project/${project.slug}`}
                        >
                          {project.title}
                        </Link>
                      </Table.Cell>
                      <Table.Cell>{project.category}</Table.Cell>
                      <Table.Cell>
                        <span
                          onClick={() => {
                            setShowModal(true);
                            setProjectIdToDelete(project._id);
                          }}
                          className='font-medium text-red-500 hover:underline cursor-pointer'
                        >{t("admin.delete")}</span>
                      </Table.Cell>
                      <Table.Cell>
                        <Link
                          className='text-teal-500 hover:underline'
                          to={`/update-project/${project._id}`}
                        >
                          <span>{t("admin.edit")}</span>
                        </Link>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                ))}
              </Table>
              {showMore && (
                <button
                  onClick={handleShowMore}
                  className='w-full text-teal-500 self-center text-sm py-7'
                >
                  Show more
                </button>
              )}
            </>
          ) : (
            <p>You have no projects yet!</p>
          )}
          <Modal
            show={showModal}
            onClose={() => setShowModal(false)}
            popup
            size='md'
          >
            <Modal.Header />
            <Modal.Body>
              <div className='text-center'>
                <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
                <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
                {t("admin.del_alert")} project?
                </h3>
                <div className='flex justify-center gap-4'>
                  <Button color='failure' onClick={handleDeleteProject}>
                  {t("admin.del_yes")}
                  </Button>
                  <Button color='gray' onClick={() => setShowModal(false)}>
                  {t("admin.del_no")}
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          </div>
      </div>
  );
}
