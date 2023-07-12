import BlogComponent from "./BlogComponent";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import { motion, useScroll, useSpring } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Successfully Host an Event in Metaverse in 5 Steps",
      para: "Companies may collaborate globally with creatives, clients, and coworkers through the Metaverse. The purpose of this page is to provide users with information on the idea of collaboration in the Metaverse so they may determine whether or not to switch to virtual collaboration.",
      time: "05.06.2023",
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-88-how-to-successfully-host-an-event-in-metaverse-in-x-steps.webp?v=1685530886",
    },
    {
      id: 2,
      title: "Collaboration in the Metaverse: A Game-Changer For Businesses",
      para: "Virtual events have several advantages, including affordable travel and adaptable alternatives. Organizations should follow these guidelines and take the following actions to ensure the success of a metaverse event. We'll also look at the metaverse's potential for event organizing in the",
      time: "20.05.2023",
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-89-a-game-changer-for-businesses.webp?v=1688974401",
    },
    {
      id: 3,
      title: "Innovative Marketing in the Metaverse: Reach a Wider Audience",
      para: "The Metaverse is a digital environment that combines virtual reality, augmented reality, social media, and 3D visuals to allow users to interact with one another in a 3D world. This could revolutionize the way we teach and learn, making it more engaging, interactive, and relevant to the modern digital age.",
      time: "08.05.2023",
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-87-411.webp?v=1682510306",
    },

    {
      id: 4,
      title: "The Future of Recruiting: Finding Talent In The Metaverse",
      para: "Companies have shifted virtualized platforms including team-building exercises, meetings, product launches, and job fairs to Metaverse, a virtual environment where people can interact, work, play, and communicate with one other. To draw inventive talent and early adopters, recruitment drives and training activities are undertaken.",
      time: "27.04.2023",
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-86-421-16817177277409.webp?v=1681718852",
    },

    {
      id: 5,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-85-451.webp?v=1682496216",
      title: "How to Host a Victorious Product Launch In the Metaverse",
      para: "The Metaverse offers the ideal environment for businesses to introduce something novel and ground-breaking. It makes it simpler for businesses to start events because it is far less expensive than reserving a physical location. But how to go about a Metaverse launch party, what must be done, and why it should be held in the first place.",
      time: "16.04.2023",
    },

    {
      id: 6,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-84-431.webp?v=1681827009",
      title: "What is Metaverse as a Service? The Ultimate Guide",
      para: "Through the use of the Metaverse service, businesses may cooperate, make investments, and sell goods in decentralized 3D environments. This manual outlines the advantages and disadvantages of the Metaverse and makes suggestions for prospective new projects.",
      time: "07.04.2023",
    },

    {
      id: 7,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-83-441.webp?v=1681820399",
      title: "7 Ways Metaverse Virtual Environments Are Impacting Business",
      para: "Virtual environments are transforming the way we live, learn, and work. In this article, we will explore seven ways that metaverse virtual environments are transforming the business landscape.",
      time: "21.03.2023",
    },

    {
      id: 8,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-82-reading-series-2.webp?v=1677586393",
      title: "What B2B Companies Will Benefit The Most In The Metaverse",
      para: "B2B enterprises are investigating cutting-edge technologies to work together and profit from the growth of virtual worlds like the metaverse. Learn how in the upcoming years businesses can profit from this new technology.",
      time: " 28.02.2023",
    },

    {
      id: 9,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-80-reding-1horizintal-1.webp?v=1676638554",
      title: "Metaverse Enterprise Solutions: Industries and New Opportunities",
      para: "Many businesses wonder how the metaverse can work for them. Here are five Metaverse enterprise solutions to generate revenue and improve processes.",
      time: "17.02.2023",
    },

    {
      id: 10,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-78-38-1.webp?v=1677570513",
      title: "Virtual Meetings In Metaverse: The Future of Work and Events",
      para: "Although virtual reality has been around for a while, we didn't see holding meetings in the metaverse as an alternative until lately. So, are the metaverse meetings worth it? In this article, we'll go over everything you need to know.",
      time: "18.01.2023",
    },
    {
      id: 11,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-76-36-1.webp?v=1676639029",
      title: "5 Metaverse Business Opportunities You Should Consider",
      para: "This article will discuss a few attractive metaverse opportunities and how your company can take advantage of them. These opportunities allow many virtual spaces to have new experiences and strengthen social ties. As a result, brands and producers have numerous business opportunities to consider.",
      time: "05.01.2023",
    },
    {
      id: 12,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-74-34-1.webp?v=1676639076",
      title: "How to Invest in the Metaverse: The Available Opportunities",
      para: "People use avatars to communicate with each other in the shared virtual world of Metaverse. Microsoft, Facebook, and other companies have already begun to make investments in this new sector. Learn how to invest in the metaverse to benefit from the boom and a profit.",
      time: "14.12.2022",
    },
    {
      id: 13,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-71-26-1-16753383074524.webp?v=1675339332",
      title: "How to Access Metaverse: Check out These Popular Platforms",
      para: "Take the first step towards understanding how to access the metaverse, whether your goal is to participate in the action or simply to explore a wonderful environment. Although it may still take years for the projected virtual reality platform to be completely completed, millions of people already believe it to be the Internet of the future.",
      time: "07.12.2022",
    },
    {
      id: 14,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-75-3-10-16753381668959.webp?v=1675339192",
      title: "How to Enter the Metaverse as a Business",
      para: "The metaverse is a blend between our physical world and one or more virtual ones. Every day, new people are embracing these 3D digital environments. This, in turn, is changing how we lay, work, and communicate with each other. ",
      time: "02.12.2022",
    },
    {
      id: 15,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-72-as-72-3191102055339749954115901886998653940086267n.webp?v=1675338950",
      title: 'How to Access Metaverse: Check out These Popular Platforms',
      para:
        "It makes sense that many companies have started to see virtual offices as a viable option for conducting business. We feel more at ease working from home, and there is a growing desire for coming up with innovative solutions to enhance the workplace. In this article, we'll look at some amazing examples of people using the metaverse for work and discuss what that job might look like in the future.",
      time: "11.12.2022",
    },
    {
      id: 16,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-63-27-1.webp?v=1675338795",
      title: "How Will the Metaverse Look Like in 2032?",
      para: "In the digital world, there are already realistic possibilities for working, playing, even getting therapy and taking vacations. Virtual environments are likely to grow and become more immersive than ever in the next ten years. The metaverse is more than just a location for many people; it's an inevitable improvement to reality. In the not too distant future, many of our regular activities might move to virtual worlds.",
      time: "23.11.2022",
    },
    {
      id: 17,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-60-25-1.webp?v=1675338743",
      title: "How the Metaverse Could Change Work",
      para: "A digital simulation environment has been a concept for a while. Many directors and writers of science fiction have explored the concept. The metaverse can be compared to a more comprehensive and immersive kind of social networking. An entirely new industry is emerging as we go towards the era of immersive 3D reality.",
      time: "5.11.2022",
    },
    {
      id: 18,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-68-24-1.webp?v=1675338668",
      title: 'How Will the Metaverse Look Like in 2032?',
      para:
        "It has become clear that the Metaverse is a strong and fascinating natural force. We'll go in-depth on the Metaverse, crypto currencies, and NFTs in this article, along with the best metaverse cryptos and how to buy them. The token was initially offered for $0.15, but a year later, it was trading for $165.",
      time: "28.10.2022",
    },
    {
      id: 19,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-65-17-1.webp?v=1675338592",
      title: "How to Create a Metaverse Art Gallery",
      para: "The building of the metaverse is opening the door to new ways of exhibiting art, including NFT galleries and countless new immersive experiences",
      time: "27.10.2022",
    },
    {
      id: 20,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-23-19-1.webp?v=1675338465",
      title: "What Is a Virtual Networking Event? Everything You Need to Know",
      para: "A virtual network event focuses on helping people join conferences for professional development or to take advantage of business opportunities. Networking has numerous benefits ...",
      time: "27.09.2022",
    },
    {
      id: 21,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-20-21-1.webp?v=1675338423",
      title: "10 Creative Ideas for Monetizing Your Virtual Expo",
      para: "In-person expos are organized not only for networking and product showcases, but also for the financial benefit. The virtual expos, on the other hand, have more subtle and ...",
      time: "27.09.2022",
    },
    {
      id: 22,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-34-22-1.webp?v=1675337769",
      title: "An Introduction to NFT Digital Art",
      para: "As we get closer to the dawn of the metaverse, the global use of non-fungible tokens (NFTs) is increasing. Official decentralized and unduplicated ownership of digital assets is ...",
      time: "02.06.2022",
    },
    {
      id: 23,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-36-20-1.webp?v=1675338345",
      title: "The Metaverse: A New Layer of Social Platform?",
      para: "The metaverse is a fully realized digital universe apart from our physical and analog worlds. Could we be witnessing a shift in how we network and engage with one another? Many people are questioning if the metaverse can determine the future of social media, given the hype around investments and breakthroughs in the field.",
      time: "24.05.2022",
    },
    {
      id: 24,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-33-23-1.webp?v=1675337697",
      title: "All about metaverse: How does it work? The definitive guide",
      para: "The term 'metaverse' is used to describe a shift in our relationship with technology. Instead of going to a real office, you may accomplish everything from the comfort of your own home. You won't need a VR headset to participate in metaverse; your computer, gaming console, or even your phone should be enough!",
      time: "03.05.2022",
    },
    {
      id: 25,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-32-18-1.webp?v=1675337614",
      title: "Can a Virtual Art Exhibition Software Help Artists?",
      para: "The virtual venue industry is booming all over the world. Virtual art exhibition software has been used by many artists to construct art galleries, launch parties, and hybrid events. Virtual gatherings and conferencing have been steadily increasing even before COVID-19 altered the way we operate.",
      time: "15.04.2022",
    },
    {
      id: 26,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-19-16-1.webp?v=1675337577",
      title: "Virtual Career Fairs: 12 Ways to Promote Your Company",
      para: "Virtual career fairs open new opportunities for recruiting new employees in a more efficient way. Here are some suggestions on how to attract and impress the fresh workforce",
      time: "05.04.2022",
    },
    {
      id: 27,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-27-14-1.webp?v=1675337515",
      title:
        "Innovative Virtual Business Ideas That Showcase Entrepreneurial Spirit",
      para: "Read a compiled list of our top virtual business ideas, along with real-world examples, to encourage you to keep the dream alive. Take advantage of work-from-home trends to become your own boss for a while, or use events to discover a new method of conducting business.",
      time: "28.12.2021",
    },
    {
      id: 28,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-24-15-1.webp?v=1675337328",
      title: "The Essential Guide to Virtual Conferences in 2022",
      para: "As the number of people working from home increases, more emphasis is being placed on virtual connections than ever before. For company owners and marketers, finding the perfect virtual event platform isn't an easy task. Add to that the degree of planning required to conduct a virtual conference. Thus, here’s the ultimate guide for navigation in the virtual event environment.",
      time: "10.05.2021",
    },
    {
      id: 29,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-28-5-6.webp?v=1675337441",
      title: "How to Make Virtual Events Feel Real",
      para: "Virtual events bring people together in a digital environment that closely resembles how we communicate and interact in real life. The software is becoming increasingly popular as a means of bringing our workplaces, organizations, and businesses into the future. Virtual environments bring the element of 'reality' that they, and here’s how.",
      time: "19.04.2021",
    },
    {
      id: 30,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-25-13-1.webp?v=1675337226",
      title: "Building Career: Pro Tips for Hosting a Virtual Job Fair",
      para: "Job searching on the internet has become the new standard. Employers may reach out to a larger pool of candidates by hosting virtual job fairs. Job seekers are increasingly using the internet to look for jobs and get referrals from friends and relatives. This article will assist you in comprehending the importance of a virtual job and provide helpful hints for arranging a successful event.",
      time: "18.03.2021",
    },
    {
      id: 31,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-21-12-1.webp?v=1675337038",
      title: "How to Host a Virtual Event Like a Pro",
      para: "The goal of virtual networking is to bring people together. As a result, virtual events must emphasize communication, participation, and involvement. You'll be able to monetize, follow up with prospects, and increase your business if you offer these things successfully.",
      time: "01.02.2021",
    },
    {
      id: 32,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-1-7-1.webp?v=1675336762",
      title: "PROMOTING VIRTUAL EVENTS: IMPORTANT TIPS",
      para: "To ensure your online program won’t get lost in the digital overrun, your pre-event marketing and promotion game needs to be efficient and result-oriented.",
      time: "19.11.2020",
    },
    {
      id: 33,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-4-6-5.webp?v=1675336706",
      title: "A COMPLETE LIST OF VIRTUAL EVENT IDEAS",
      para: "When a co-working space needs to turn virtual and be something different than just a video broadcasting, virtual event ideas are becoming a hot topic",
      time: "06.10.2020",
    },
    {
      id: 34,
      img: "https://static.pandamr.com/fs/userFiles/pandamrv2/images/a-5-8-1.webp?v=1675336623",
      title: "170 YEARS OF EXPO EXPERIENCE: NEXT INCARNATION",
      para: "The history of expos goes back to the 19th century, which aimed at social development and progress showcase in a fast-changing world.",
      time: "17.06.2020",
    },
  ];
  const splitArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const splitData = splitArray(blogs, 12);

  // const renderBullet = (index, className) => {
  //   return '<span class="' + className + '">' + (index + 1) + "</span>";
  // };

  const nav = useNavigate();
  const { id } = useParams();

  const BlogDataForPage = splitData[id - 1];

  const handleLeftClick = () => {
    if (id != 1) nav(`/blog/page/${id - 1}`);
  };
  const handleRightClick = () => {
    if (id < splitData.length) nav(`/blog/page/${Number(id) + 1}`);
  };

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative">
      {/* <motion.div className="progress-bar" style={{scaleX}}></motion.div> */}
      <div className="relative  md:w-full  md:h-screen h-[35vh] z-[5]">
        <img
          src="https://static.pandamr.com/fs/userFiles/pandamrv2/images/4246-reding-1horizintal-1.webp?v=1676640370"
          alt=""
          className="absolute object-cover md:object-cover top-0 left-0 w-full h-full"
        />
        <div className=" flex items-center md:h-[75vh] h-[26vh]">
          <h2 className="   uppercase font-bold text-white text-6xl ml-6  z-[10]">
            METAVERSE BLOG
          </h2>
        </div>
      </div>

      <div
        className={`grid md:grid-cols-2  lg:grid-cols-3  grid-cols-1  md:px-5 px-3 mb-14  gap-10 mt-14 container mx-auto`}
      >
        {BlogDataForPage?.map((blog) => (
          <BlogComponent key={blog?.id} blog={blog} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-5 my-8">
        <span
          onClick={handleLeftClick}
          className="go-prev bg-btn p-2 cursor-pointer w-[2rem] h-[2.35rem] bg-[#f5f5f5] text-gray-500  active:scale-75 duration-200 rounded-md shadow-lg text-xl z-10"
        >
          <FaAngleLeft />
        </span>
        {splitData?.map((data, index) => (
          <span
            key={index}
            onClick={() => nav(`/blog/page/${index + 1}`)}
            className={` px-4 py-2 rounded-sm cursor-pointer inline-block pagination-button  ${
              id == index + 1 ? "pagination-button-active  bg-black text-white" : "bg-gray-200 text-black"
            }`}
          >
            {index + 1}
          </span>
        ))}
        <span
          onClick={handleRightClick}
          className="go-prev bg-btn p-2 cursor-pointer w-[2rem] h-[2.35rem] bg-[#f5f5f5] text-gray-500  active:scale-75 duration-200 rounded-md shadow-lg text-xl z-10"
        >
          <FaAngleRight />
        </span>
      </div>

      <Footer/>
    </div>
  );
};

export default Blog;
