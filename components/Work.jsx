import React from 'react'

const companies = [
  {
    position: "Software Engineering Intern",
    companyName: "Wonder Learn Games",
    companyWebsite: "",
    companyWebsiteLink: "",
    workedOn: ["Developed engaging user interfaces and interactive components using React for a teen learning application, ensuring seamless navigation and user experience.",
  "Learned about tools and technologies such as ReactNative and Native Features."],
    startingMonth: "February, 2024",
    endingMonth: "present",
  },
  {
    position: "Frontend Web Developer Intern",
    companyName: "Altruism Labs",
    companyWebsite: "altruismlabs.com",
    companyWebsiteLink: "http://www.altruismlabs.com/",
    workedOn: ["Designed and developed sophisticated interactive React components for seamless web and mobile experiences.", "Successfully integrated the Chart.js library to enhance data visualization capabilities."],
    startingMonth: "December, 2023",
    endingMonth: "present",
  },

]

const Work = () => {
  return (
    <div className='flex flex-col gap-8'>
      {companies.map((company) => (
        <div className='border-l-2 pl-6 hover:border-orange-300 cursor-default transition-all flex flex-col gap-5' >
          <div className='flex flex-col gap-2'>
            <div>
              <div className='capitalize text-lg'>{company.position} , {company.companyName}</div>
              {company.companyName==="Wonder Learn Games"?'':
              <div className={`text-sm `}>at, <a href={company.companyWebsiteLink}>{company.companyWebsite}</a></div>
              }
            </div>
            <div className='text-sd text-sm'>{company.startingMonth}-{company.endingMonth}</div>
          </div>
          <div>
            <ul className='list-disc flex flex-col gap-3 list-inside'>
              {
                company.workedOn.map((thingWorkedOn) => (
                  <li className='text-sd text-sm'>{thingWorkedOn}</li>
                ))
              }
            </ul>

          </div>
        </div >
      ))}
    </div>
  )
}

export default Work


