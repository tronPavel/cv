import React from "react";
import Card from "./components/card";

const App = () => {
  return (
    <div className="container">
      <aside className="max-md:relative">
        <img
          className="rounded-full max-md:mr-32 max-md:w-48  max-md:h-48 max-sm:mt-24"
          src="/assets/photo.jpg"
          alt="Profile"
        />
        <section className="max-md:w-5/12">
          <h3 className="title">Contact</h3>
          <ul>
            <li>
              <a
                href="mailto:tronpavel184@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://t.me/tronpavel"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                href="https://github.com/tronPavel"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </section>
        <section className="max-md:w-5/12">
          <h3 className="title">Skills</h3>
          <ul className="list-disc ml-5 font-semibold">
            <li>HTML, CSS, SCSS</li>
            <li>JavaScript, TypeScript</li>
            <li>React, Redux</li>
            <li>TailwindCSS</li>
            <li>Git</li>
            <li>Rest API</li>
          </ul>
        </section>
        <section className="max-md:w-5/12">
          <h3 className="title">Education</h3>
          <ul>
            <li>
              <b>Belarusian State University - </b>
              Faculty of Mechanics and Mathematics
            </li>
          </ul>
        </section>
        <section className="max-md:w-5/12">
          <h3 className="title">Languages</h3>
          <dl>
            <ul>
              <li>
                <b>English:</b> B2
              </li>
              <li>
                <b>Russian:</b> native
              </li>
            </ul>
          </dl>
        </section>
      </aside>
      <main className="max-md:pt-0">
        <section className="max-md:absolute max-md:top-32 max-sm:top-16 max-sm:left-28 max-sm:right-0 max-md:right-28 max-md:text-white">
          <h1 className="text-5xl font-semibold">Tron Pavel</h1>
          <h2 className="font-semibold">Frontend Developer</h2>
        </section>
        <section>
          <h3 className="title">About me</h3>
          <p>
            Aspiring Frontend Developer and second-year Computer Science student
            with a passion for building interactive and user-centric web
            applications. I have developed a solid foundation in HTML, CSS, and
            JavaScript through self-directed learning and practical projects.
            Eager to seek an internship opportunity where I can apply my skills,
            contribute to real-world projects, and collaborate with experienced
            professionals to further enhance my knowledge in frontend
            development. I am committed to creating clean, responsive designs
            that prioritize user experience and performance.
          </p>
        </section>

        <section>
          <h3 className="title">Strengths</h3>
          <ul>
            <li>
              <strong>Self-Learning and Initiative:</strong> I actively seek out
              resources to master web technologies, showcasing my determination
              and ability to learn independently.
            </li>
            <li>
              <strong>Analytical Thinking: </strong> My studies in mathematics
              and programming have sharpened my analytical skills, enabling me
              to solve problems and optimize code effectively.
            </li>
            <li>
              <strong>Teamwork and Communication:</strong> I enjoy collaborating
              on group projects, where I develop my teamwork and communication
              skills, essential for effective interaction in a development
              environment.
            </li>
            <li>
              <strong>Commitment to Improvement:</strong> I stay updated on the
              latest trends in web development and strive to continuously
              enhance my skills through online courses and hackathons.
            </li>
            <li>
              <strong>Technical Skills:</strong> I have solid knowledge of HTML,
              CSS, and JavaScript, allowing me to create functional and
              attractive web pages. I am also eager to learn modern frameworks.
            </li>
          </ul>
        </section>
        <section>
          <h3 className="title">Portfolio</h3>
          <Card
            imgUrl={"assets//todolist.gif"}
            title={"Todolist"}
            keyWords={["React", "CSS"]}
            link={"https://github.com/tronPavel/todolist.git"}
          >
            todoist with the ability to add, edit, and filter multiple todos.
            Created in react using class components
          </Card>
          <Card
            imgUrl={"/assets/lamoda.gif"}
            title={"Lamoda"}
            keyWords={["React", "CSS"]}
            link={"https://github.com/tronPavel/lamoda.git"}
          >
            React is a project with multiple filtering of elements on a page.
          </Card>
          <Card
            imgUrl={"/assets/filterablelist.gif"}
            title={"Filterable list"}
            keyWords={["TypeScript", "CSS"]}
            link={"https://github.com/tronPavel/filterable-list.git"}
          >
            implementing a filtered list in pure typescript
          </Card>
          <Card
            imgUrl={"/assets/notion.gif"}
            title={"Notion"}
            keyWords={[
              "React",
              "Redux",
              "React-router-dom",
              "JSON-server",
              "TailwindCSS",
            ]}
            link={"https://github.com/tronPavel/notion.git"}
          >
            A small SPA project with user authentication and authorization logic
            written using react, react-router-dom, redux, JSON-server
          </Card>
        </section>
      </main>
    </div>
  );
};
export default App;
