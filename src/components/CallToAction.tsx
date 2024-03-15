import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex justify-center">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
            Elevate Your Workflow Today
          </h2>
          <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400 text-center">
            Ready to streamline your projects and boost productivity? Try FlowBoard today to experience the power of seamless
            project management. Join thousands of satisfied users who have transformed their workflow with ease. Start your
            journey towards efficient project management now!
          </p>
          <div className="self-center mx-auto flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="mx-auto inline-flex items-center text-lg font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              Get Started
              <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
