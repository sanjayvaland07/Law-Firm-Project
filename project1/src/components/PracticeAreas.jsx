import React from 'react'

const PracticeAreas = () => {
  return (
    <div className='bg-white w-full h-fit m-4 p-8'>
      <h1 className='text-center  text-4xl font-normal text-black'>Our Practice Areas </h1>
      <p className='text-center text-sm text-gray-500 '>Comprehensive legal expertise in personal injury,family law <br/>,corporate law, criminal defense and real estate </p>
      <div className='flex flex-col justify-between m-8'>
        <div className='flex flex-wrap md:m-12 sm:m-4 bg-white'>
          <div className='p-4 w-full sm:w-1/2 lg:w-1/3'>
            <div className='bg-white border rounded-sm shadow-lg overflow-hidden aspect-w-1 aspect-h-1'>
              <div className='p-6 bg-gray-100 h-full flex flex-col'>
                <h2 className='text-xl text-center font-medium text-gray-700 mb-1'>01</h2>
                <h1 className='text-2xl font-semibold mb-3'>Unlawful Termination</h1>
                <p className='leading-relaxed text-sm font-normal text-gray-700 mb-3'>"Advocating for your rights and seeking justice in wrongful termination cases."</p>
              </div>
            </div>
          </div>
          <div className='p-4 w-full sm:w-1/2 lg:w-1/3'>
            <div className='bg-white border rounded-sm shadow-lg overflow-hidden aspect-w-1 aspect-h-1'>
              <div className='p-6 bg-gray-100 h-full flex flex-col'>
                <h2 className='text-xl text-center font-medium text-gray-700 mb-1'>02</h2>
                <h1 className='text-2xl font-semibold mb-3'>Sexual Harassment</h1>
                <p className='leading-relaxed text-sm text-gray-700 mb-3'>"Standing up for victims and fighting against sexual harassment in the workplace."</p>
              </div>
            </div>
          </div>
          <div className='p-4 w-full sm:w-1/2 lg:w-1/3'>
            <div className='bg-white border rounded-sm shadow-lg overflow-hidden aspect-w-1 aspect-h-1'>
              <div className='p-6 bg-gray-100 h-full flex flex-col'>
                <h2 className='text-xl text-center font-medium text-gray-700 mb-1'>03</h2>
                <h1 className='text-2xl font-semibold mb-3'>Unpaid Wages</h1>
                <p className='leading-relaxed text-sm text-gray-700 mb-3'>"Ensuring you receive the compensation you rightfully deserve for unpaid wages."</p>
              </div>
            </div>
          </div>
          <div className='p-4 w-full sm:w-1/2 lg:w-1/3'>
            <div className='bg-white border rounded-sm shadow-lg overflow-hidden aspect-w-1 aspect-h-1'>
              <div className='p-6 bg-gray-100 h-full flex flex-col'>
                <h2 className='text-xl text-center font-medium text-gray-700 mb-1'>04</h2>
                <h1 className='text-2xl font-semibold mb-3'>Race Discrimination</h1>
                <p className='leading-relaxed text-sm text-gray-700 mb-3'>"Championing equality and justice in cases of race discrimination."</p>
              </div>
            </div>
          </div>
          <div className='p-4 w-full sm:w-1/2 lg:w-1/3'>
            <div className='bg-white border rounded-sm shadow-lg overflow-hidden aspect-w-1 aspect-h-1'>
              <div className='p-6 bg-gray-100 h-full flex flex-col'>
                <h2 className='text-xl text-center font-medium text-gray-700 mb-1'>05</h2>
                <h1 className='text-2xl font-semibold mb-3'>Sex Discrimination</h1>
                <p className='leading-relaxed text-sm text-gray-700 mb-3'>"Fighting for fairness and equality <br /> in sex discrimination."</p>
              </div>
            </div>
          </div>
          <div className='p-4 w-full sm:w-1/2 lg:w-1/3'>
            <div className='bg-white border rounded-sm shadow-lg overflow-hidden aspect-w-1 aspect-h-1'>
              <div className='p-6 bg-gray-100 h-full flex flex-col'>
                <h2 className='text-xl text-center font-medium text-gray-700 mb-1'>06</h2>
                <h1 className='text-2xl font-semibold mb-3'>Workplace Disputes</h1>
                <p className='leading-relaxed text-sm text-gray-700 mb-3'>"Resolving conflicts and protecting your rights in workplace disputes with expertise and commitment."</p>
              </div>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default PracticeAreas