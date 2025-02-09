import React from 'react'
import { FaRocketchat, FaUserFriends, FaVideo } from 'react-icons/fa';
import Image from 'next/image';
import FeatureCard from '@/components/FeatureCard';

const featureCard = [
  {
    icon: <FaVideo size={40} />,
    title: 'Live Video Calls',
    description: 'Connect with developers instantly through high-quality video sessions. Share ideas, discuss projects, and collaborate effectively in real-time.'
  },
  {
    icon: <FaRocketchat size={40} />,
    title: 'Fast & Secure',
    description: 'Experience seamless, secure, and lag-free discussions with advanced tech. We ensure high-speed connectivity, end-to-end encryption, and optimized performance for all meetings.'
  },
  {
    icon: <FaUserFriends size={40} />,
    title: 'Community Focused',
    description: 'Engage with a like-minded developer community for better networking. Participate in discussions, join groups, and contribute to open-source projects.'
  }
]

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex min-h-screen">
      <section className="hidden w-1/2 my-auto items-center justify-center bg-brand p-10 lg:flex text-white lg:flex-col xl:w-4/6 ">
        <div className='flex space-x-16 mx-auto items-center justify-center'>
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={96}
            height={96}
            className="h-auto"
          />
          <h1 className="text-5xl font-bold text-center" >
            Welcome to <br /><span className='text-primary'>DevnTalk</span>
          </h1>
        </div>
        <p className="text-lg text-gray-400 w-3/5 mt-4 text-center max-w-2xl">
            A modern platform for seamless developer discussions, video conferencing, and collaboration.
        </p>
        <div className="flex-initial flex mt-12 max-w-4xl">
          {featureCard.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
      </div>
      </section>

      <section className="flex flex-1 flex-col items-center backdrop-blur-md bg-[url(/images/background.jpg)] bg-fixed px-4 lg:justify-center lg:p-10">
        <div className="flex flex-start bg-white/30 backdrop-blur-sm lg:hidden">
          <h1 className="text-5xl p-0 text-primary font-bold">
            DevnTalk
          </h1>
        </div>
        {children}
      </section>
    </div>
  );
}

export default AuthLayout