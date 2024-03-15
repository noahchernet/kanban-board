import React from "react";

const MoreFeatures: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="text-center text-gray-900">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 lg:text-5xl dark:text-white">
            Turn collaboration into innovation
          </h2>
          <a
            href="#"
            className="inline-flex items-center text-lg font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
          >
            Try for free today
            <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="grid gap-6 mt-12 lg:mt-14 lg:gap-12 md:grid-cols-3">
          <div className="flex mb-2 md:flex-col md:mb-0">
            <img className="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg" src="content-1.jpg" alt="office image" />
            <div>
              <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">Build as one team</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Collaboration is key to success with our Kanban board app. Our platform empowers teams to work together
                seamlessly, ensuring alignment and focus on common goals.
              </p>
            </div>
          </div>
          <div className="flex mb-2 md:flex-col md:mb-0">
            <img className="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg" src="content-2.jpg" alt="office image 2" />
            <div>
              <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">Transform your culture</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our Kanban board app catalyzes change within your organization. Embrace transparency, accountability, and
                continuous improvement to foster a culture of growth and success.
              </p>
            </div>
          </div>
          <div className="flex md:flex-col">
            <img className="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg" src="content-3.jpg" alt="office image 3" />
            <div>
              <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">Learn as you build</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Gain valuable insights into your processes with our platform. Identify areas for improvement and foster a
                culture of learning and growth within your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreFeatures;
