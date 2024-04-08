import { MdOutlineArrowOutward } from "react-icons/md";


const companies = [
  {
    position: "Frontend Software Engineering Intern",
    companyName: "ClientFlowX",
    companyWebsite: "clientflowx.com",
    companyWebsiteLink: "https://www.clientflowx.com/",
    workedOn: ["Developed an admin dashboard and multiple pages using Next.js and TypeScript, seamlessly integrating third-party applications and backend APIs.","Developing a no-code AI website builder with custom components utilizing the Grapejs library."],
    startingMonth: "March, 2024",
    endingMonth: "present",
  },
  {
    position: "Software Engineering Intern",
    companyName: "Wonder Learn Games",
    companyWebsite: "",
    companyWebsiteLink: "",
    workedOn: ["Developed engaging user interfaces and interactive components using React for a teen learning application, ensuring seamless navigation and user experience.",
      "Learned about tools and technologies such as ReactNative and Native Features."],
    startingMonth: "February, 2024",
    endingMonth: "",
  },
  {
    position: "Frontend Web Developer Intern",
    companyName: "Altruism Labs",
    companyWebsite: "altruismlabs.com",
    companyWebsiteLink: "http://www.altruismlabs.com/",
    workedOn: ["Designed and developed sophisticated interactive React components for seamless web and mobile experiences.", "Successfully integrated the Chart.js library to enhance data visualization capabilities."],
    startingMonth: "December, 2023",
    endingMonth: "February, 2024",
  },

]

const Work = () => {
  return (
    <div className='flex flex-col gap-8'>
      {companies.map((company, index) => ( // Added index parameter for unique key
        <div className='border-l-2 pl-6 hover:border-orange-300 cursor-default transition-all flex flex-col gap-5' key={index}> {/* Added key prop */}
          <div className='flex sm:flex-row flex-col items-start justify-between gap-2'>
            <div>
              <div className='capitalize text-lg'>{company.position}, {company.companyName}</div>
              {company.companyName === "Wonder Learn Games" ? '' :
                <div className="flex items-center gap-[2px]">
                  <div className="text-sm">
                    at, <a href={company.companyWebsiteLink}>{company.companyWebsite}</a>
                  </div>
                  <div>
                    <MdOutlineArrowOutward />
                  </div>
                </div>
              }
            </div>
            <div className='text-sd text-sm'>{company.startingMonth} <span className={`${company.endingMonth === "" ? 'hidden' : ''}`}>-</span>  {company.endingMonth}</div>
          </div>
          <div>
            <ul className='list-disc flex flex-col gap-3 list-inside'>
              {
                company.workedOn.map((thingWorkedOn, idx) => (
                  <li className='text-sd text-sm' key={idx}>{thingWorkedOn}</li>
                ))
              }
            </ul>
          </div>
        </div >
      ))}
    </div>
  )
}

export default Work;


