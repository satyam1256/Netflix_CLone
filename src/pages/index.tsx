import { useRouter } from 'next/router'
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
// import { signOut } from 'next-auth/react'

import Navbar from '../../Components/Navbar';


export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}


export default function Home() {
  return (
    <>
      {/* <h1 className="text-3xl text-red-500">Netflix Clone App</h1> */}
      {/* <button onClick={() => signOut()} className="text-red-500 text-3xl hover:text-red-700 hover:underline bg-white ">Sign Out</button> */}

      <Navbar />
    </>
  )
}
