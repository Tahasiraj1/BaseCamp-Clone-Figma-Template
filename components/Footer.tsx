import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='bg-white h-auto flex flex-col pt-28'>
      <div className='flex items-center justify-center'>
        {/* Use flex to arrange images in a row */}
        <div className='lg:flex-row flex flex-col space-y-6 lg:space-y-0 lg:space-x-12 space-x-4'>
          <Image
            src="/image2.png"
            alt='App Store'
            width={300}
            height={100}
            className='drop-shadow-2xl'
          />
          <Image
            src="/image3.png"
            alt='Award1'
            width={200}
            height={100}
            className='translate-x-8 lg:translate-x-0 drop-shadow-2xl'
          />
          <Image
            src="/image4.png"
            alt='Award2'
            width={200}
            height={100}
            className='translate-x-8 lg:translate-x-0 drop-shadow-2xl'
          />
          <Image
            src="/image5.png"
            alt='Google Play Store'
            width={300}
            height={100}
            className='-translate-x-3 lg:-translate-x-0 drop-shadow-2xl'
          />
        </div>
      </div>
      <div className='flex justify-between'>
      <div className='lg:pl-10 px-1 pt-20 w-full max-w-xl'>
        <h1 className='font-bold text-[#1D2D35] text-3xl pb-8'>
        We&apos;re here to help.
        </h1>
        <p className='text-[#1D2D35] text-lg'>
        Always humans, never bots. For pre-sales questions, existing customers who need a hand, or other inquiries, <span className='text-[#1E64E6] underline'><strong>contact us</strong></span> and <strong>we&apos;ll get back to you within an hour.</strong>
        </p>
        <div className='border rounded-lg w-full max-w-3xl mt-6 p-4 flex'>
        <p className='font-semibold text-[#1D2D35] text-lg flex'>
        If you love Basecamp, you&apos;ll love
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_3961)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3498 16.9354C15.2767 17.0418 15.2118 17.0827 15.1551 17.0988C14.7381 16.6038 14.7359 13.6499 15.1954 11.2307C16.064 15.4058 15.5583 16.6326 15.3498 16.9354ZM17.8552 6.52791C17.0392 6.7181 16.2089 7.23319 15.5502 7.89671C14.8244 5.31908 13.2474 1.42257 11.713 0.786273C11.2572 0.5968 10.8992 0.706456 10.6806 0.831776C9.71945 1.37893 9.09171 3.19422 9.6404 6.60959C7.5185 2.73247 6.77851 2.73732 6.43762 2.73508C6.10866 2.73583 5.82409 2.93052 5.67748 3.25576C5.44625 3.76674 5.00464 5.35638 6.10568 8.77547C4.75698 6.92959 4.34298 6.69497 3.86258 6.71364C3.6899 6.72148 3.36653 6.79492 3.14311 7.20186C2.73246 7.95157 2.78766 9.88207 4.04385 12.7399C3.47432 12.3176 2.94692 12.0692 2.49823 12.1013C2.17561 12.1278 1.90408 12.3005 1.7534 12.5757C1.24391 13.5089 2.33524 16.1395 3.63432 17.916C4.70327 19.3781 6.85387 21.6283 9.96784 21.6283C10.383 21.6283 10.8153 21.588 11.2636 21.5011C11.5728 21.4414 11.7745 21.1423 11.7145 20.8335C11.6541 20.5246 11.3546 20.3232 11.0469 20.3833C8.45992 20.8856 6.50776 19.465 5.3254 18.1849C3.56234 16.2756 2.79065 13.9818 2.74514 13.2814C3.11588 13.4295 4.17701 14.0583 6.25451 16.7169C6.44172 16.9571 6.78636 17.0071 7.0355 16.8284C7.28353 16.6501 7.34659 16.3074 7.17837 16.0523C4.2613 11.6325 3.97858 8.95857 4.07444 8.05263C4.92967 8.92653 7.06946 12.1349 8.68148 14.5514C8.85041 14.805 9.18908 14.8807 9.44941 14.7233C9.70974 14.5655 9.80113 14.2314 9.65568 13.964C6.30634 7.8001 6.41337 4.98414 6.61181 4.06214C7.11273 4.5705 8.4543 6.34922 11.2692 12.4788C11.3979 12.757 11.722 12.8845 12.0036 12.7674C12.2867 12.651 12.4265 12.3318 12.321 12.045C9.5904 4.60295 10.7769 2.08722 11.2292 1.82389C11.8178 1.84217 13.4876 4.66188 14.5007 8.37187C14.563 8.60203 14.6234 8.82654 14.6801 9.04475C14.5339 9.30918 14.4201 9.57998 14.3455 9.85038C13.7759 11.907 13.246 16.5957 14.306 17.8545C14.5454 18.139 14.865 18.2767 15.2149 18.242C15.6487 18.1991 16.0194 17.9705 16.2876 17.5811C17.2913 16.122 16.7061 12.4504 15.9045 9.24091C16.4472 8.48791 17.3234 7.821 18.1141 7.63714C18.6083 7.5215 18.9913 7.61138 19.2528 7.90344C19.7104 8.41666 20.5131 10.3446 18.0839 17.1395C17.9775 17.4356 18.132 17.7612 18.4285 17.8675C18.7216 17.972 19.0499 17.819 19.1561 17.5229C21.0934 12.1047 21.4116 8.61357 20.102 7.14553C19.559 6.53646 18.7627 6.31789 17.8552 6.52791Z" fill="#5522FA"/>
            </g>
            <defs>
            <clipPath id="clip0_1_3961">
            <rect width="20.944" height="20.944" fill="white" transform="translate(0.734375 0.684265)"/>
            </clipPath>
            </defs>
            </svg>
            <span className='text-[#5522FA]'>HEY</span>
            — our take on email
        </p>
        </div>
      </div>
      </div>
      <div className='flex lg:flex-row flex-col justify-center items-center text-center lg:pl-[500px] lg:-translate-y-64 text-2xl'>
      <ul className='mr-6'>
      <h2 className='text-[#1D2D35] font-bold'>Products</h2>
        <li className='text-[#1E64E6] underline mt-4'>Pricing</li>
        <li className='text-[#1E64E6] underline mt-2'>Features</li>
        <li className='text-[#1E64E6] underline mt-2'>Apps + Desktop</li>
        <li className='text-[#1E64E6] underline mt-2'>Integrations</li>
        <li className='text-[#1E64E6] underline mt-2'>Updates</li>
        <li className='text-[#1E64E6] underline mt-2'>Status</li>
      </ul>
      <ul className='mr-6'>
      <h2 className='text-[#1D2D35] font-bold'>Company</h2>
        <li className='text-[#1E64E6] underline mt-4'>About</li>
        <li className='text-[#1E64E6] underline mt-2'>Customers</li>
        <li className='text-[#1E64E6] underline mt-2'>Newsletter</li>
        <li className='text-[#1E64E6] underline mt-2'>Handbook</li>
        <li className='text-[#1E64E6] underline mt-2'>Podcast</li>
        <li className='text-[#1E64E6] underline mt-2'>Jobs</li>
      </ul>
      <ul className='mr-6'>
      <h2 className='text-[#1D2D35] font-bold translate-y-6'>Resources</h2>
        <li className='text-[#1E64E6] underline mt-8'>Support</li>
        <li className='text-[#1E64E6] underline mt-2'>Learn</li>
        <li className='text-[#1E64E6] underline mt-2'>Articles</li>
        <li className='text-[#1E64E6] underline mt-2'>Remote Resources</li>
        <li className='text-[#1E64E6] underline mt-2'>Customer Rights</li>
        <li className='text-[#1E64E6] underline mt-2'>Policies</li>
        <li className='text-[#1E64E6] underline mt-2'>Books</li>
      </ul>
      <ul>
      <h2 className='text-[#1D2D35] font-bold'>And more...</h2>
        <li className='text-[#1E64E6] underline mt-4'>We love small business</li>
        <li className='text-[#1E64E6] underline mt-2'>New Features</li>
        <li className='text-[#1E64E6] underline mt-2'>Before & After</li>
        <li className='text-[#1E64E6] underline mt-2'>Yes, Yes, and Yes</li>
        <li className='text-[#1E64E6] underline mt-2'>Dazzle your clients</li>
        <li className='text-[#1E64E6] underline mt-2'>Long Thoughts</li>
      </ul>
      </div>
      <div className='flex justify-between bg-black text-white lg:px-12 py-4 h-auto'>
        <h3 className='flex text-center items-center'>
            <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_3903)">
            <path d="M16.3484 28.8871C11.4725 28.9514 6.80874 26.8956 3.56693 23.2527C3.22068 22.8681 3.1167 22.3231 3.29707 21.8381C4.17207 19.4829 6.56809 14.004 9.56106 13.9876C11.0821 13.9876 12.2188 15.1979 13.1346 16.1628C13.4383 16.4995 13.7634 16.8164 14.1078 17.1114C15.3929 15.4857 16.4647 13.7021 17.297 11.8042C17.6421 11.1486 18.4407 10.8788 19.1126 11.1908C19.7846 11.5028 20.0938 12.2869 19.8157 12.9736C16.5447 19.9817 14.7947 19.9817 14.2223 19.9817C12.9466 19.9817 12.0225 19.0004 11.1311 18.06C10.7304 17.6348 9.89633 16.7516 9.5774 16.7516C8.86599 16.8743 7.3204 19.3194 6.20827 22.0016C8.88802 24.6923 12.5518 26.1696 16.3484 26.0904C21.8355 26.0904 25.9325 24.5939 27.6988 22.0016C27.0937 15.0752 23.2503 5.58108 16.3484 5.58108C10.5015 5.58108 6.10197 9.66988 3.26436 17.6839C2.97783 18.3605 2.21421 18.6973 1.52133 18.4526C0.828444 18.208 0.445639 17.4663 0.647549 16.7598C3.91856 7.50278 9.20126 2.8089 16.3484 2.8089C25.679 2.8089 30.0049 14.7318 30.5038 22.2551C30.5247 22.5394 30.4622 22.8236 30.3238 23.0729C28.1486 26.81 23.1849 28.8871 16.3484 28.8871Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_1_3903">
            <rect width="30.3552" height="30.3552" fill="white" transform="translate(0.59375 0.871338)"/>
            </clipPath>
            </defs>
            </svg>
            <span className='ml-3'><strong>Basecamp</strong></span>
            <span className='ml-1.5'>
                is designed, built, and backed by 37signals. Enjoy the rest of your sunday !
            </span>
        </h3>
        <h4>
            <svg width="109" height="31" viewBox="0 0 109 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90.232 29.3368C88.5912 27.6997 88.6237 25.0019 90.232 23.3443C91.5961 21.9792 91.5963 19.7708 90.232 18.408C88.8775 17.055 86.6672 17.082 85.2951 18.408C83.6438 20.0596 80.9554 20.0597 79.3017 18.408C77.6608 16.7689 77.6936 14.058 79.3018 12.3998C80.6524 11.0489 80.6256 8.82912 79.3018 7.46154C77.6444 5.80578 77.6443 3.12589 79.3018 1.47C80.955 -0.18671 83.6441 -0.18671 85.2959 1.47057C86.9371 3.10929 86.9044 5.80308 85.295 7.46154C83.9328 8.82564 83.9328 11.0349 85.2956 12.3998C86.6506 13.7514 88.8609 13.7248 90.232 12.3998C91.8853 10.746 94.5843 10.7456 96.2359 12.3998C97.8795 14.0372 97.8473 16.7487 96.2359 18.408C94.8738 19.7704 94.8731 21.9794 96.2359 23.345C97.8961 24.9981 97.8969 27.6834 96.2359 29.3374C94.585 30.9905 91.8856 30.9905 90.232 29.3368ZM96.2352 1.47367C97.8962 3.13394 97.8962 5.82128 96.2354 7.48138C94.5782 9.14003 91.8865 9.14003 90.2322 7.4819C88.5677 5.82259 88.5686 3.13375 90.2322 1.47428C91.8873 -0.18794 94.5784 -0.187939 96.2352 1.47367ZM107.161 12.3996C108.821 14.0598 108.821 16.7477 107.161 18.4078C105.504 20.0664 102.812 20.0659 101.157 18.4078C99.4928 16.7485 99.4937 14.0596 101.157 12.4002C102.812 10.7379 105.504 10.7379 107.161 12.3996ZM9.61878 9.33204V11.2128L6.26781 14.1195C8.43911 14.1708 10.0633 15.5044 10.0633 17.7271C10.0633 19.6935 8.54168 21.7623 5.56683 21.7623C3.95973 21.7623 2.64327 21.352 0.950684 20.1893L2.06198 18.565C3.42973 19.4199 4.37006 19.7961 5.49845 19.7961C6.91748 19.7961 7.75523 18.9753 7.75523 17.7442C7.75523 16.4962 6.7978 15.7951 5.37877 15.7951C4.6265 15.7951 4.18199 15.9319 3.94263 16.0173L2.93392 14.6324L6.8491 11.247H1.58327V9.33204H9.61878ZM10.9448 11.247H17.1509C15.0993 13.9827 13.1503 17.8298 12.6544 21.4717H15.2361C15.8002 17.5562 17.7151 13.6237 19.8009 11.0589V9.33204H10.9448V11.247ZM19.5835 15.1796C19.5835 13.6921 20.8829 12.4439 23.2252 12.4439C24.6956 12.4439 25.7555 12.7858 26.9865 13.8117L25.7897 15.2651C24.7298 14.4443 24.0629 14.2392 23.1739 14.2392C22.2849 14.2392 21.7036 14.5982 21.7036 15.1112C21.7036 15.6545 22.2267 15.7698 23.5782 16.0676C23.6303 16.0791 23.6836 16.0908 23.7381 16.1028C26.1317 16.6329 27.1233 17.2655 27.1233 18.8898C27.1233 20.5654 25.7555 21.7452 23.3791 21.7452C21.772 21.7452 20.5752 21.352 19.1561 20.0867L20.4384 18.6505C21.7207 19.6935 22.4045 19.9499 23.4304 19.9499C24.3023 19.9499 24.952 19.6251 24.952 19.0266C24.952 18.3626 24.177 18.1956 23.0733 17.9579C22.9836 17.9386 22.8916 17.9187 22.7978 17.8982C20.3358 17.351 19.5835 16.7355 19.5835 15.1796ZM30.877 10.3921C30.877 11.1102 30.2957 11.6916 29.5606 11.6916C28.8254 11.6916 28.2441 11.1102 28.2441 10.3921C28.2441 9.674 28.8254 9.09267 29.5606 9.09267C30.2957 9.09267 30.877 9.674 30.877 10.3921ZM28.4492 21.4717V12.7345H30.6718V21.4717H28.4492ZM38.58 13.7091C38.0501 12.9226 37.1953 12.4439 35.913 12.4439C33.7075 12.4439 32.0662 14.2392 32.0662 16.8552C32.0662 19.4883 33.7075 21.2665 35.913 21.2665C37.0926 21.2665 37.9133 20.839 38.4604 20.1551V20.8561C38.4604 22.3949 37.5201 22.9763 36.3233 22.9763C35.3146 22.9763 34.5111 22.6686 33.2801 21.9333L32.2029 23.5405C33.622 24.4638 34.9726 24.8229 36.3575 24.8229C38.7682 24.8229 40.6317 23.5405 40.6317 21.0443V12.7345H38.58V13.7091ZM36.4088 19.3857C35.1436 19.3857 34.3059 18.3598 34.3059 16.8552C34.3059 15.3506 35.1436 14.3417 36.4088 14.3417C37.6398 14.3417 38.5288 15.3506 38.5288 16.8552C38.5288 18.3598 37.6398 19.3857 36.4088 19.3857ZM47.1551 12.4439C45.9583 12.4439 45.0694 12.9397 44.5222 13.7262V12.7345H42.4535V21.4717H44.676V16.2054C44.676 15.1112 45.4113 14.3588 46.437 14.3588C47.497 14.3588 48.0612 15.0086 48.0612 16.1541V21.4717H50.2839V15.4873C50.2839 13.7091 49.1896 12.4439 47.1551 12.4439ZM55.9353 12.4439C54.2085 12.4439 52.9433 13.1108 51.8492 14.4101L53.2511 15.6925C54.1572 14.8206 54.7728 14.2733 55.9695 14.2733C56.9782 14.2733 57.6108 14.7522 57.6108 15.607V15.8122L55.5592 16.1883C53.576 16.5474 51.7808 17.2484 51.7808 19.266C51.7808 21.0443 53.2511 21.7623 54.9095 21.7623C56.2602 21.7623 57.2005 21.3007 57.7305 20.5654V21.4717H59.7308V15.5728C59.7308 13.7262 58.4485 12.4439 55.9353 12.4439ZM55.2856 19.9841C54.4478 19.9841 53.9521 19.6593 53.9521 19.1121C53.9521 18.2914 54.824 17.9837 56.1404 17.71L57.6108 17.4023V17.9153C57.6108 19.437 56.4141 19.9841 55.2856 19.9841ZM61.5868 9.33204V21.4717H63.8093V9.33204H61.5868ZM65.3746 15.1796C65.3746 13.6921 66.674 12.4439 69.0163 12.4439C70.4867 12.4439 71.5466 12.7858 72.7776 13.8117L71.5808 15.2651C70.5209 14.4443 69.854 14.2392 68.9651 14.2392C68.076 14.2392 67.4947 14.5982 67.4947 15.1112C67.4947 15.6545 68.0178 15.7698 69.3693 16.0676C69.4214 16.0791 69.4747 16.0908 69.5292 16.1028C71.9228 16.6329 72.9144 17.2655 72.9144 18.8898C72.9144 20.5654 71.5466 21.7452 69.1702 21.7452C67.5631 21.7452 66.3663 21.352 64.9473 20.0867L66.2295 18.6505C67.5118 19.6935 68.1956 19.9499 69.2215 19.9499C70.0934 19.9499 70.7431 19.6251 70.7431 19.0266C70.7431 18.3626 69.9681 18.1956 68.8644 17.9579C68.7747 17.9386 68.6827 17.9187 68.589 17.8982C66.127 17.351 65.3746 16.7355 65.3746 15.1796Z" fill="white"/>
            </svg>
        </h4>
      </div>
    </div>
  )
}

export default Footer;

