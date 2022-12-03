import React from 'react'

function Table1() {
  return (
    <>
    <table className='min-w-full table-auto'>
        <thead>
            <tr className='bg-gray-800'>
                <th className='px-16 py-2'>
                    <span className='text-gray-200'>Erp name</span>
                </th>
                <th className='px-16 py-2'>
                    <span className='text-gray-200'>Erp Emails</span>
                </th>
                <th className='px-16 py-2'>
                    <span className='text-gray-200'>Erp sallery  </span>
                </th>
                <th className='px-16 py-2'>
                    <span className='text-gray-200'>Erp date  </span>
                </th>
                <th className='px-16 py-2'>
                    <span className='text-gray-200'>Erp status  </span>
                </th>
            </tr>
        </thead>
        <tbody className='bg-gray-200'>
            <tr>
                <td className='px-16 py-2 flex flex-row items-center'>
                <img src='#' alt=''/>
                <span className='text-center ml-2 font-semibold'> Daily erp name</span>

                </td>
                <td className='px-16 py-2'>
                    <span>Dzoneindiashubham@gmail.com</span>

                </td>
                <td className='px-16 py-2'>
                    <span>250000</span>

                </td>
                <td className='px-16 py-2'>
                    <span>25/10/2023</span>

                </td>
                <td className='px-16 py-2'>
                    <button className='cursor'><span className=''></span></button>
                </td>
                <td className='px-16 py-2'>
                    <span>text data</span>
</td>



                
            </tr>


        </tbody>

    </table>
    </>
  )
}

export default Table1