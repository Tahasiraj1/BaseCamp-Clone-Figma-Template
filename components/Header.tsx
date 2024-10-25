import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='w-full h-auto flex justify-center items-center p-4 bg-black'>
        <p className='text-md mr-4'>
            We&apos;re thrilled to announce the launch of our first sweepstakes and brand campaign
        </p>
        <p className='text-lg font-semibold'>JUST LET ME DO MY JOB.</p>
      </div>
      <div className='w-full h-[192.59px] bg-white p-6 lg:p-10'>
        <div className='flex text-center items-center'>
        <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.9916 5.54646C15.937 5.54646 9.12383 11.8784 4.72949 24.2889C4.28578 25.3368 3.1032 25.8583 2.0302 25.4795C0.957201 25.1006 0.364384 23.952 0.677063 22.858C5.74259 8.52245 13.9235 1.25342 24.9916 1.25342C25.9918 1.25342 25.9918 5.54646 24.9916 5.54646Z" fill="#1D2D35"/>
            <path d="M24.9915 41.6384C17.4405 41.738 10.2183 38.5542 5.19797 32.913C4.66176 32.3174 4.50074 31.4733 4.78006 30.7222C6.13509 27.075 9.8456 18.5902 14.4805 18.5649C16.836 18.5649 18.5963 20.4392 20.0147 21.9335C20.485 22.4549 20.9883 22.9456 21.5216 23.4025C23.5118 20.8847 25.1716 18.1228 26.4606 15.1837C26.9949 14.1684 28.2315 13.7506 29.2722 14.2338C30.3128 14.7169 30.7917 15.9311 30.361 16.9945C25.2955 27.8475 22.5854 27.8475 21.6989 27.8475C19.7234 27.8475 18.2923 26.3278 16.912 24.8715C16.2915 24.2129 14.9998 22.8452 14.5058 22.8452C13.4041 23.0353 11.0106 26.8217 9.28838 30.9754C13.4382 35.1422 19.112 37.4301 24.9915 37.3073C33.4889 37.3073 39.8336 34.9899 42.5689 30.9754C41.6318 20.2491 35.6798 5.54646 24.9915 5.54646C23.9914 5.54646 23.9914 1.25342 24.9915 1.25342C39.4409 1.25342 46.1401 19.7172 46.9127 31.368C46.9451 31.8083 46.8482 32.2484 46.634 32.6344C43.2655 38.4218 35.5785 41.6384 24.9915 41.6384Z" fill="#1D2D35"/>
        </svg>
        <h1 className='text-black font-semibold ml-2 mt-1'>Base Camp</h1>
        </div>
        <div className='flex justify-between relative'>
            <span className='-rotate-[4.3deg] w-[226.44px] h-[29.85px] bg-gradient-to-b from-[#FF7D0F] to-[#FFCD05] -translate-x-4 translate-y-2'>
                <svg width="78" height="24" viewBox="-3 -3 78 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_4533)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.67991 3.69251L9.994 7.93179L14.8081 8.43575L11.4799 11.9373L12.4878 16.6445L8.11719 14.5797L3.92627 16.9883L4.5534 12.2155L0.9551 8.99215L5.71326 8.10372L7.67991 3.69251ZM22.9911 3.07754L25.3052 7.31683L30.1193 7.82079L26.7911 11.3223L27.7989 16.0295L23.4284 13.9647L19.2375 16.3734L19.8646 11.6005L16.2663 8.37719L21.0245 7.48876L22.9911 3.07754ZM40.6164 6.70187L38.3023 2.46258L36.3357 6.8738L31.5775 7.76222L35.1758 10.9856L34.5487 15.7584L38.7396 13.3498L43.1101 15.4145L42.1023 10.7074L45.4305 7.20583L40.6164 6.70187ZM53.6135 1.84762L55.9276 6.08691L60.7417 6.59087L57.4135 10.0924L58.4213 14.7996L54.0508 12.7348L49.8599 15.1434L50.487 10.3706L46.8887 7.14726L51.6469 6.25884L53.6135 1.84762ZM71.2388 5.47195L68.9247 1.23266L66.9581 5.64388L62.1999 6.5323L65.7982 9.75564L65.1711 14.5285L69.362 12.1199L73.7325 14.1846L72.7247 9.47745L76.0529 5.97591L71.2388 5.47195Z" fill="#FFE200"/>
                </g>
                <defs>
                <clipPath id="clip0_1_4533">
                <rect width="75.888" height="13.1345" fill="white" transform="translate(0.753418 3.9707) rotate(-2.3)"/>
                </clipPath>
                </defs>
                </svg>
            </span>
            <h1 className='absolute font-bold pl-2 drop-shadow-lg text-white top-2 translate-x-16 -rotate-[4.3deg]'>
                “Truly amazing!”
            </h1>
            <div className='flex flex-col space-y-3 lg:space-y-0 lg:flex-row items-center -translate-y-10'>
                <h2 className='text-[#1E64E6] font-semibold underline cursor-pointer'>
                    What&apos;s New?
                </h2>
                <h3 className='text-[#1E64E6] font-semibold underline lg:ml-6 cursor-pointer'>
                    Customer log in
                </h3>
                <button className='rounded-full lg:ml-6 w-auto px-2 tex-center h-12 bg-[#2DA530] font-semibold active:scale-95 transition-transform transform duration-300'>
                    Pricing + Sign up
                </button>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
