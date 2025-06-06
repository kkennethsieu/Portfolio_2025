import { RiNextjsFill, RiReactjsLine, RiSupabaseFill } from "react-icons/ri";
import { SiTailwindcss, SiMui } from "react-icons/si";
import { FaChartBar, FaNodeJs } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { BsStripe } from "react-icons/bs";

import ProjectItem from "./ProjectItem";
import SectionTitle from "../../components/SectionTitle";

function Projects() {
  return (
    <div id="projects" className="pt-16">
      <SectionTitle title="Recent Projects" />
      <div className="py-8 space-y-6">
        <ProjectItem
          logoImg="/portfolioBlack.png"
          projectTitle="Kenny Sieu | Portfolio Website"
          description="This is my personal portfolio website where I highlight the projects I've built and the skills I've developed as a Full-Stack Developer. The site is built using React for the UI, styled with Tailwind CSS, and icons from React-Icons."
          webLink="https://kenny-sieu-portfolio.vercel.app/"
          gitLink="https://github.com/kkennethsieu/Kenny-Sieu-Portfolio"
          tags={[
            { icon: <RiReactjsLine />, name: "React" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
          ]}
        />

        <ProjectItem
          logoImg="/cedarGlideLogo.svg"
          projectTitle="CedarGlide Wax | E-Commerce Store"
          description="CedarGlide Wax is an e-commerce web store dedicated to snowboarding wax products. It features a clean UI for browsing products, adding items to cart, and a smooth checkout experience. Built with modern React tools, it provides responsive design and efficient state management."
          webLink="https://cedar-glide-wax.vercel.app/"
          gitLink="https://github.com/kkennethsieu/CedarGlideWax_Front"
          figmaLink="https://www.figma.com/design/GdllyQknqxn2aK5Fs1cCue/CedarWax-Co.?node-id=25-1340&t=7Uk68eaEZ3JYBhgA-1"
          tags={[
            { icon: <RiReactjsLine />, name: "React" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <RiSupabaseFill />, name: "Supabase" },
            {
              icon: <BsStripe />,
              name: "Stripe",
            },
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiMui />, name: "Material UI" },
            { icon: <IoLogoFigma />, name: "Figma" },
          ]}
        />

        <ProjectItem
          logoImg="/jobquestLogo.png"
          projectTitle="JobQuest | Job Application Tracker"
          description="JobQuest is a web app that helps users track job applications and interviews. It allows users to add, edit, and view job statuses, while also providing data and stats to track progress. The app includes authentication for secure access to personal job application data."
          webLink="https://jobquestnow.vercel.app/"
          gitLink="https://github.com/kkennethsieu/JobQuest"
          tags={[
            { icon: <RiReactjsLine />, name: "React" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <RiSupabaseFill />, name: "Supabase" },
            { icon: <FaChartBar />, name: "Recharts" },
          ]}
        />

        <ProjectItem
          logoImg="/swirlLogo.png"
          projectTitle="SmoothieSwirl | Smoothie Ordering App"
          description="SmoothieSwirl is a smoothie ordering app that lets users browse and order smoothies. Users can add items to their cart, view previous orders, and take advantage of geolocation to easily set their delivery address."
          webLink="https://smoothie-swirl.vercel.app/"
          gitLink="https://github.com/kkennethsieu/SmoothieSwirl"
          tags={[
            { icon: <RiReactjsLine />, name: "React" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <RiSupabaseFill />, name: "Supabase" },
          ]}
        />

        <ProjectItem
          logoImg="/raveWalletTrans.png"
          projectTitle="RaveWallet | Festival Expense Tracker"
          description="RaveWallet is an app that allows users to sign up and log in to track their expenses at festivals. It helps you manage and monitor your spending while enjoying your events."
          webLink="https://rave-wallet.vercel.app/"
          gitLink="https://github.com/kkennethsieu/rave_wallet"
          tags={[
            { icon: <RiNextjsFill />, name: "Next.js" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <RiSupabaseFill />, name: "Supabase" },
            { icon: <IoLogoFigma />, name: "Figma" },
          ]}
        />
      </div>
    </div>
  );
}

export default Projects;
