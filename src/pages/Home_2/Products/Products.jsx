import React from 'react'
import SelectVariants from './SelectVariants'

const Products = () => {
    return (
        <>
            <div className='flex justify-center'>
                <div className='w-[1024px] bg-white p-0 m-0'>
                    <div className='flex'>
                        <div className='w-2/6 border'>
                        <SelectVariants></SelectVariants>
                        </div>
                        <div className='w-4/5 border'>2</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
