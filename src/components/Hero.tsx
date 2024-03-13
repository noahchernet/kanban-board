import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 xl:col-span-8">
          <div className="text-sm text-left text-gray-500 dark:text-gray-300 mb-3">
            Instant signup. No credit card required.
          </div>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Welcome to FlowBoard, Streamline Your Workflows!
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Effortlessly organize tasks, collaborate with your team, and boost productivity with our intuitive Kanban board
            software. Say goodbye to chaotic spreadsheets and disjointed communication - and hello to seamless project
            management!
          </p>
          <div className="flex items-center mb-5">
            <input
              type="submit"
              value="Try for free"
              className="px-5 py-3 text-sm font-medium text-center sm:w-1/2 md:w-2/5 text-white rounded-lg cursor-pointer bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              name="member_submit"
              id="member_submit"
            />
          </div>
          <div className="text-sm text-left text-gray-500 dark:text-gray-300">
            <a href="#" className="text-primary-600 hover:underline dark:text-primary-500">
              Terms of Service{" "}
            </a>
            and{" "}
            <a className="text-primary-600 hover:underline dark:text-primary-500" href="#">
              Privacy Policy
            </a>
            .
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 xl:col-span-4 lg:flex">
          <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mobile-app.svg" alt="phone illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
