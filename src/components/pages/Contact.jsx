import React from 'react';
export default function Contact() {
  return (
    <>
      <div class="container mx-auto">
        <form class="w-full max-w-lg my-20">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                First Name
              </label>
              <input class="appearance-none block w-full  border border-gray-dark rounded py-3 px-4 mb-3 focus:outline-none focus:border-gray" id="grid-first-name" type="text" placeholder="Last Name" />

            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-dark rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray" id="grid-last-name" type="text" placeholder="Last Name" />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Password
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray" id="grid-password" type="password" placeholder="*********" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Contact 
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray" id="grid-password" type="tel
              " placeholder="*********" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Upload Image
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray" id="grid-password" type="file" placeholder="" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Address
              </label>
              <textarea class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray" id="grid-password" type="password"></textarea>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                City
              </label>
              <input class=" appearance-none block w-full  text-gray border border-gray-dark  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray" id="grid-city" type="text" placeholder="Albuquerque" />
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray text-xs font-bold mb-2" for="grid-state">
                State
              </label>
              <div class="relative">
                <select class="block appearance-none w-full  border border-gray-dark text-blue py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray" id="grid-state">
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray text-xs font-bold mb-2" for="grid-zip">
                Zip
              </label>
              <input class="appearance-none block w-full  text-gray border border-gray-dark rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray" id="grid-zip" type="text" placeholder="121212" />
            </div>

            <div class="flex items-center mb-4 mt-10">
              <label class="block uppercase tracking-wide text-gray-dark text-xs font-bold mb-2" for="technology">
                Technology
              </label>
              <input id="react" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mx-3" />
              <label for="react" class="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500 uppercase">React</label>
              <input id="java" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mx-3" />
              <label for="java" class="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500 uppercase">Java</label>
            </div>
            <div class="flex items-center mb-4 mt-12 mx-5">
              <label class="block uppercase tracking-wide text-gray-dark text-xs font-bold mb-2" for="technology">
                Gender
              </label>
              <div class="flex items-center mb-4">
                <input id="female" type="radio" value="female" name="female" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mx-3" />
                <label for="female" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray uppercase">Female</label>
                <input id="male" type="radio" value="male" name="female" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mx-3" />
                <label for="male" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray uppercase">Male</label>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mt-7 mb-6 md:mb-0 lg:w-full ">
              <input class="uppercase appearance-none block w-full text-gray border border-gray-dark rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray" type="submit" />
            </div>
          </div>

        </form>
      </div>
    </>
  )
}
