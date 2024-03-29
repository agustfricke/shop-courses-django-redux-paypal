import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions'
import Search from './Search';
import eth from '../../media/placeholder.jpg'


const user = [
  { name: 'TECH CON AGUST', href: '/', current: false },

]



const noUser = [
  { name: 'TECH CON AGUST', href: '/', current: false },
  { name: 'LOGIN', href: '/login', current: false },
  { name: 'REGISTER', href: '/register', current: false },
]

const admin = [
  { name: 'CURSOS', href: '/cursos/admin', current: false },
  { name: 'USUARIOS', href: '/users/admin', current: false },

]





function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header(history) {

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin


  const logoutHandler = (e) => {
    dispatch(logout())
}





  return (
    <Disclosure as="nav" className="bg-gray-700">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">

                </div>
                {userInfo ? (
                  <>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {user.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? 'bg-gray-700 text-gray-300' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 mx-8 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                            style={{ textDecoration: 'none' }}
                          >

                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>


                    <Menu as="div" className="relative ml-3  mx-8 mt-1.5">
                    <div>
                      <Menu.Button className="bg-gray-700 text-gray-300">
                        <a >CATEGORIAS</a>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              style={{ textDecoration: 'none' }}
                              href="/hacking"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              HACKING
                            </a>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <a
                              style={{ textDecoration: 'none' }}
                              href="/backend"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              BACKEND
                            </a>
                          )}
                        </Menu.Item>



                        <Menu.Item>
                          {({ active }) => (
                            <a
                              style={{ textDecoration: 'none' }}
                              href="/frontend"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              FRONTEND
                            </a>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <a
                              style={{ textDecoration: 'none' }}
                              href="/blockchain"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              BLOCKCHAIN
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                    <div className='ml-5'>
                      <Search />


                    </div>
                  </>
                ) : (
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {noUser.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                          style={{ textDecoration: 'none' }}
                        >

                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                )}
                {userInfo && userInfo.is_admin && (
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {admin.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                          style={{ textDecoration: 'none' }}
                        >

                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>



              {userInfo && (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none ">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={eth}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              style={{ textDecoration: 'none' }}
                              href="/profile"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Tu Perfil
                            </a>
                          )}
                        </Menu.Item>



                        <Menu.Item>
                          {({ active }) => (
                            <a
                              style={{ textDecoration: 'none' }}
                              onClick={logoutHandler}
                              href="/"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Cerrar Session
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>




                </div>
              )}

            </div>
          </div>



          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {user.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
