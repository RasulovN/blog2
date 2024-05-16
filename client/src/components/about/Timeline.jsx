import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import { useTranslation } from 'react-i18next';


export default function TimeLine() {
  const [t, i18n] = useTranslation("global");
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>May 2021</Timeline.Time>
          <Timeline.Title>{t("aboutPage.learn_calendar")}</Timeline.Title>
          <Timeline.Body>
           HTML,CSS, JavaScript, React, Vue.js, SASS, Bootstra, Responsive desig, React-bootstrap, API
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>July 2021</Timeline.Time>
          <Timeline.Title>{t("aboutPage.learn_calendar1")}</Timeline.Title>
          <Timeline.Body>
          Node.js, JavaScript, Express.js, MongoDB, RESTful API, PostgressSQL, Git, JSON, NPM, Asynchronous programming
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>October 2021</Timeline.Time>
          <Timeline.Title>{t("aboutPage.learn_calendar2")}</Timeline.Title>
          <Timeline.Body>
          Karshi and Qamashi IT Center
          </Timeline.Body> 
          <Button color="gray">
          <a href="https://t.me/IT_Park_Qashqadaryo">
              View More
            </a>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>{t("aboutPage.learn_calendar3")}</Timeline.Title>
          <Timeline.Body>
            Youtube, Coursera, Udemy, Cybrary and Others 
            <p>NextJS, Redux, Matrial UI/UX, ElectronJS, Firebase, TelegramBOT, Linux command and Script, MongoDB Cloud, Android Studio, SDK, NDK, C++,  <br /> 
              </p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>In later years</Timeline.Time>
          <Timeline.Title>{t("aboutPage.learn_calendar4")}</Timeline.Title>
          <Timeline.Body>
            Heroku, Vercel, Netlify, @hostuz and others
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>{t("aboutPage.learn_calendar5")}</Timeline.Time>
          <Timeline.Title> </Timeline.Title>
          <Timeline.Body>
            Docker, NuxtJS, NestJS, ThreeJS, AR, VR, AI, Google API, GraphQL, Linux Sytems, Web testing, Penetration testing, React Native, Mobil apps, Google Play conosle and others  
          </Timeline.Body>
          <Button color="gray">
            <a href="https://t.me/rasulovdev">
              View More
            </a>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}


