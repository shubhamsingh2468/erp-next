import React from 'react'
import Head from 'next/Head'
import   Table1  from '../components/Table1';

function Table() {
  return (
    <>
    <Head>
        <title> E
            rp software tool</title>

    </Head>
    <main className='py-5'>
    <div>
        <h1 className='text-xl md:text-5xl text-center font-bold py-10'>Erp Management</h1>
        <div className='contaciner mx-auto flex justify-between py-5 border-b'>
            <div className='left flex gap-3'>
                <button className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-500 hover:border-indigo-500 hover:text-gray-800 '>
                    Add Erp 

                </button>

            </div>

        </div>
    </div>
    <Table1 />
    </main>
    </>
    
  )
}

export default Table