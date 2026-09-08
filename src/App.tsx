const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

type Certificate = {
  id: string;
  title: string;
  imagePath: string;
  issuingOrg: string;
  issuingYear: number;
  url: string;
};

const certificates: Certificate[] = [
  {
    id: "1",
    title: "NestJS The Complete Developers Guide",
    imagePath: asset("certificates/nestjs_the_complete_developers_guide.jpg"),
    issuingOrg: "Udemy",
    issuingYear: 2026,
    url: "https://www.udemy.com/certificate/UC-2f69755d-5e76-416d-906e-e1c29c0f2c67",
  },
  {
    id: "2",
    title: "Claude Code",
    imagePath: asset("certificates/claude-code.png"),
    issuingOrg: "Frontend Masteras",
    issuingYear: 2026,
    url: "https://static.frontendmasters.com/ud/c/9dfe4c7c43/ONCeVpyzkJ/claude-code-masterdev.pdf",
  },
  {
    id: "3",
    title: "Fullstack App Next V6",
    imagePath: asset("certificates/fullstack-app-next-v4.pdf.png"),
    issuingOrg: "Frontend Masteras",
    issuingYear: 2026,
    url: "https://static.frontendmasters.com/ud/c/9dfe4c7c43/JbnMcTcHST/fullstack-app-next-v4-masterdev.pdf",
  },
  {
    id: "4",
    title: "TailwindCSS",
    imagePath: asset("certificates/tailwind-css-v2.pdf.png"),
    issuingOrg: "Frontend Masteras",
    issuingYear: 2026,
    url: "https://static.frontendmasters.com/ud/c/9dfe4c7c43/XQKnWntAkM/tailwind-css-v2-masterdev.pdf",
  },
  {
    id: "5",
    title: "Complete React V9",
    imagePath: asset("certificates/complete-react-v9.pdf.png"),
    issuingOrg: "Frontend Masteras",
    issuingYear: 2026,
    url: "https://static.frontendmasters.com/ud/c/9dfe4c7c43/hixpadIGiV/complete-react-v9-masterdev.pdf",
  },
  {
    id: "6",
    title: "Intermediate React V6",
    imagePath: asset("certificates/intermediate-react-v6.pdf.png"),
    issuingOrg: "Frontend Masteras",
    issuingYear: 2026,
    url: "https://static.frontendmasters.com/ud/c/9dfe4c7c43/dVjsrZPBjd/intermediate-react-v6-masterdev.pdf",
  },
  {
    id: "7",
    title: "React Typescript V3",
    imagePath: asset("certificates/react-typescript-v3.png"),
    issuingOrg: "Frontend Masteras",
    issuingYear: 2026,
    url: "https://static.frontendmasters.com/ud/c/9dfe4c7c43/hUofbjHgZn/react-typescript-v3-masterdev.pdf",
  },
  {
    id: "8",
    title: "Javascript Hard Parts V3",
    imagePath: asset("certificates/javascript-hard-parts-v3.pdf.png"),
    issuingOrg: "Frontend Masteras",
    issuingYear: 2026,
    url: "https://static.frontendmasters.com/ud/c/9dfe4c7c43/KmOjonKKum/javascript-hard-parts-v3-masterdev.pdf",
  },
  {
    id: "9",
    title: "Mastering Typescript",
    imagePath: asset("certificates/mastering_typescript.png"),
    issuingOrg: "Udemy",
    issuingYear: 2026,
    url: "https://www.udemy.com/certificate/UC-c4106ebd-9ab1-4bdf-be71-b5560a101979",
  },
  {
    id: "10",
    title: "SQL",
    imagePath: asset("certificates/mastering_typescript.png"),
    issuingOrg: "Frontend Masteras",
    issuingYear: 2026,
    url: "https://static.frontendmasters.com/ud/c/9dfe4c7c43/KVDvpbMgzq/sql-masterdev.pdf",
  },
  {
    id: "11",
    title: "Pro Python",
    imagePath: asset("certificates/pro-python.pdf.png"),
    issuingOrg: "Frontend Masteras",
    issuingYear: 2026,
    url: "https://static.frontendmasters.com/ud/c/9dfe4c7c43/rMqhOQLwOe/pro-python-masterdev.pdf",
  },
];

function App() {
  return (
    <>
      <main className="p-8 space-y-8 min-h-screen bg-gruber-bg text-gruber-fg">
        <section>
          <h1 className="text-5xl font-bold text-gruber-yellow">
            Raven Paragas
          </h1>
          <p className="text-2xl font-semibold">Software Developer</p>
          <p className="text-xl">
            <small>ravenp.dev@gmail.com</small> | <small>0907-747-0241</small>
          </p>
        </section>

        <section>
          <p>
            After some time away from coding, I've been grinding to get back
            into coding, building projects, learning new technologies, and
            sharpening my skills along the way. I'm currently looking for an
            opportunity where I can put those skills to work, keep growing, and
            contribute to a great team.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-gruber-yellow font-semibold">Skills</h2>

          <ul className="my-8 font-bold flex gap-4">
            <li className="hover:text-gruber-green">React</li>
            <li className="hover:text-gruber-green">Tanstack Start</li>
            <li className="hover:text-gruber-green">NextJS</li>
            <li className="hover:text-gruber-green">TypeScript</li>
            <li className="hover:text-gruber-green">JavaScript</li>
            <li className="hover:text-gruber-green">Tailwind</li>
            <li className="hover:text-gruber-green">NestJS</li>
            <li className="hover:text-gruber-green">Laravel</li>
            <li className="hover:text-gruber-green">SQL</li>
            <li className="hover:text-gruber-green">GIT</li>
            <li className="hover:text-gruber-green">Docker</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl text-gruber-yellow font-semibold">
            Certificates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  my-8">
            {certificates.map((cert) => (
              <article key={cert.id}>
                <img className="h-64" src={cert.imagePath} alt={cert.title} />

                <div className="mt-2 font-bold">
                  <h3 className="text-gruber-green hover:text-gruber-purple">
                    <a href={cert.url} target="_blank">
                      {cert.title}
                    </a>
                  </h3>
                  <p className="text-sm text-gruber-blue">
                    {cert.issuingOrg} - {cert.issuingYear}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
