import React, { useState } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from 'react-hook-form';
import { PageInfo } from '../typings';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

export default function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Hi, my name is ${formData.name}.\n\n${formData.message}\n\nContact Email: ${formData.email}`
    );

    setIsSubmitted(true);
    window.location.href = `mailto:${pageInfo?.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen w-full flex relative flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 lg:px-10 pt-20 pb-16 sm:py-24 max-w-7xl mx-auto overflow-y-auto">
      {/* Responsive header flow: natural flow on mobile/tablet, anchored on large screens */}
      <h3 className="relative lg:absolute lg:top-24 uppercase tracking-[10px] sm:tracking-[16px] md:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 lg:mb-0 select-none">
        Contact
      </h3>

      <div className="flex flex-col space-y-5 sm:space-y-7 md:space-y-9 w-full max-w-2xl mx-auto mt-2 lg:mt-12">
        {/* Responsive headline */}
        <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-white leading-tight px-2">
          Looking for the right fit for your team?{' '}
          <span className="underline decoration-[#F7AB0A]/50 decoration-2 sm:decoration-4 underline-offset-4 inline-block">
            Let's Talk.
          </span>
        </h4>

        {/* Scaled contact items */}
        <div className="space-y-3 sm:space-y-4 md:space-y-5 w-full">
          <div className="flex items-center space-x-3 sm:space-x-4 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 animate-pulse shrink-0" />
            <a
              href={`tel:${pageInfo?.phoneNumber?.replace(/\s+/g, '')}`}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 hover:text-[#F7AB0A] transition-colors"
            >
              {pageInfo?.phoneNumber}
            </a>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 animate-pulse shrink-0" />
            <a
              href={`mailto:${pageInfo?.email}`}
              className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-200 hover:text-[#F7AB0A] transition-colors break-all sm:break-normal"
            >
              {pageInfo?.email}
            </a>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 animate-pulse shrink-0" />
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-200">
              {pageInfo?.address}
            </p>
          </div>
        </div>

        {/* Responsive form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2.5 sm:space-y-3 w-full max-w-lg mx-auto px-2 sm:px-0"
        >
          {/* Stacked on mobile, side-by-side on sm+ */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full">
            <input
              {...register('name')}
              placeholder="Name"
              className="contactInput flex-1"
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className="contactInput flex-1"
              type="email"
            />
          </div>

          <input
            {...register('subject')}
            placeholder="Subject"
            className="contactInput w-full"
            type="text"
          />

          <textarea
            {...register('message')}
            placeholder="Message"
            rows={3}
            className="contactInput w-full resize-none min-h-[90px] sm:min-h-[110px]"
          />

          <button
            type="submit"
            className="bg-[#F7AB0A] hover:bg-[#ffb619] active:scale-[0.99] transition-all py-3 sm:py-4 px-8 rounded-md text-black font-bold text-sm sm:text-base md:text-lg shadow-md cursor-pointer w-full mt-1"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
