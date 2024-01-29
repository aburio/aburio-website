module.exports = {
  head: {
    title: "Arthur Burnichon - Product Maker",
    meta: {
      description:
        "I'm a product maker based in France. I help companies to create digital products that people love to use.",
    },
  },
  body: {
    heading: "Arthur Burnichon",
    sub_heading: "Product Maker",
    about: `<p>
      I'm Arthur Burnichon, a French Product Maker with more than 7 years of experience, spanning from co-founding a startup to spearheading product innovation as a Lead Product Manager in dynamic scale-ups. My product philosophy is rooted in a hands-on, pragmatic approach, with a steadfast focus on refining user experiences.
    </p>
    <p>
      I thrive on transforming complex challenges into intuitive solutions, leading teams with a spirit of collaboration and innovation. My expertise lies in marrying market insights with user needs, delivering products that resonate and exceed expectations.
    </p>
    <p>
      As you explore my portfolio, you'll find a reflection of my journey, with professional and personal projects, from crafting MVPs to revamping existing products.
    </p>
    <p>
      Welcome to my world of product innovation!
    </p>`,
    projects: [
      {
        title: "Quick-commerce as a service API",
        image: "../../assets/media/gorillas-quick-commerce-api.jpg",
        description: `<p class="card-text">
          As Lead Product Manager at Gorillas, a German quick-commerce leader and acquirer of Frichti, I spearheaded the launch and development of an API-based service within a challenging two-month timeframe. <span class="fw-medium">This service enabled retailers to rapidly deploy ultra-fast delivery services through the Gorillas store network.</span>
        </p>
        <p class="card-text">
          Leading discussions with partners, marketing, operations, product, and tech teams, I ensured that the API blended advanced features with operational efficiency. This collaborative approach resulted in a product that not only met our partners\' needs to enter the ultra-fast delivery market but also upheld Gorillas\' high service standards.
        </p>
        <p class="card-text">
          The API provided a holistic quick-commerce solution, leveraging the Frichti tech stack with dynamic warehouse allocation, precise delivery ETA projections, and real-time synchronization of available product assortments and stock levels.
        </p>
        <p class="card-text">
          <span class="fw-medium">It played a pivotal role in forging partnerships with major retailers such as Jumbo (Netherlands) and Monoprix (France), extending our product offerings, and reinforcing our status as a leader in the ultra-fast delivery sector.</span>
        </p>`,
        modal: {
          toggle: {
            label: "Project Details",
            icon: "fas fa-list-check",
          },
          title: "Quick-commerce as a service API",
          content: `<p>
            <strong>Main features</strong>
            <ul style="list-style-type: none">
              <li><span class="fw-medium">Eligibility:</span> Allow users to check address eligibility and real-time
                expected delivery time</li>
              <li><span class="fw-medium">Inventory:</span> Allow users to retreive product assortment and current
                stock levels</li>
              <li><span class="fw-medium">Order:</span> Allow users to get notification of order status & customer
                support updates</li>
              <li><span class="fw-medium">Delivery:</span> Allow users to get real-time notification of the
                delivery progress</li>
            </ul>
          </p>
          <p>
            <strong>Timeline</strong>
            <ul style="list-style-type: none">
              <li><span class="badge text-bg-primary">Jul. 2022</span> Kick-off</li>
              <li><span class="badge text-bg-primary">Sep. 2022</span> V1 release</li>
              <li><span class="badge text-bg-primary">Nov. 2022</span> First partner order</li>
            </ul>
          </p>
          <p>
            <strong>Tech stack</strong>
            <ul style="list-style-type: none">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Swagger</li>
              <li>PostgreSQL</li>
              <li>RabbitMQ</li>
              <li>AWS</li>
            </ul>
          </p>
          <p>
            <strong>Team</strong>
            <ul style="list-style-type: none">
              <li><a class="text-reset" href="https://www.linkedin.com/in/arnaudledilhuit/" target="_blank"
                  rel="noreferrer">Arnaud Le Dilhuit</a> - Engineering Manager</li>
              <li><a class="text-reset" href="https://www.linkedin.com/in/quentin-collin-916442144/" target="_blank"
                  rel="noreferrer">Quentin
                  Collin</a> - Back-end developer</li>
              <li><a class="text-reset" href="https://www.linkedin.com/in/pierre-martin-84a90aa3/" target="_blank"
                  rel="noreferrer">Pierre Martin</a> - Back-end developer</li>
            </ul>
          </p>
          <p>
            <strong>Users</strong>
            <ul style="list-style-type: none">
              <li>Jumbo - Netherlands</li>
              <li>Franprix - France</li>
            </ul>
          </p>`,
        },
        tags: ["Scale up", "API", "UX"],
      },
      {
        title: "Automated replenishment web app",
        image: "../../assets/media/frichti-replenishment-webapp.gif",
        description: `<p class="card-text">
          As Lead Product Manager at Frichti, a prominent French food and grocery delivery startup, I spearheaded a major revamp of our automated replenishment algorithm. <span class="fw-medium">This initiative not only enhanced its stability and predictability but also dramatically reduced technical on-call support requests from three times a week to less than once a quarter—a reduction of over 90%.</span>
        </p>
        <p class="card-text">
          Beyond technical improvements, I led a UX-centric project to demystify the complexities of the algorithm. This critical move transformed the algorithm from a 'black box' into a transparent and insightful tool, empowering our supply and ops team with actionable insights and significantly boosting trust in our system.
        </p>
        <p class="card-text">
          <span class="fw-medium">This strategic shift profoundly optimized our operations, evidenced by a 98% automation rate in replenishment orders and a tenfold decrease in support inquiries about order content.</span> My collaborative approach with tech, supply, and ops teams not only tackled immediate challenges but also established a strong foundation for scalable, sustainable operations, securing long-term success.
        </p>`,
        modal: {
          toggle: {
            label: "Project Details",
            icon: "fas fa-list-check",
          },
          title: "Automated replenishment web app",
          content: `<p>
            <strong>Main features</strong>
            <ul style="list-style-type: none">
              <li><span class="fw-medium">Scheduler:</span> Allow user to manage what, where and when an automated
                replenishment will be compute</li>
              <li><span class="fw-medium">Replenishment Details:</span> Allow user to analyse algorithm inputs and
                outputs, but also edit or cancel an automated replenishment order</li>
              <li><span class="fw-medium">Purchase Order Monitoring:</span> Allow user to check order status and what was
                delivered or not from an automated replenishment order</li>
            </ul>
          </p>
          <p>
            <strong>Timeline</strong>
            <ul style="list-style-type: none">
              <li><span class="badge text-bg-primary">Aug. 2021</span> Kick-off of technical rework</li>
              <li><span class="badge text-bg-primary">Oct. 2021</span> Release of stability improvements</li>
              <li><span class="badge text-bg-primary">Nov. 2021</span> Release of predictability improvements</li>
              <li><span class="badge text-bg-primary">Jan. 2022</span> Kick-off of UX project</li>
              <li><span class="badge text-bg-primary">Mar. 2022</span> Release of replenishment details feature</li>
              <li><span class="badge text-bg-primary">May. 2022</span> Release of purchase order monitoring feature</li>
            </ul>
          </p>
          <p>
            <strong>Tech stack</strong>
            <ul style="list-style-type: none">
              <li>Go</li>
              <li>Node.js</li>
              <li>React.js</li>
              <li>Big Query</li>
              <li>Apache Airflow</li>
              <li>PostgreSQL</li>
              <li>RabbitMQ</li>
              <li>AWS</li>
            </ul>
          </p>
          <p>
            <strong>Team</strong>
            <ul style="list-style-type: none">
              <li><a class="text-reset" href="https://www.linkedin.com/in/oscargarayv/" target="_blank"
                  rel="noreferrer">Oscar Garay Velasquez</a> - Engineering Manager</li>
              <li><a class="text-reset" href="https://www.linkedin.com/in/matthias-alif/" target="_blank"
                  rel="noreferrer">Matthias Alif</a> - Full-stack developer</li>
              <li><a class="text-reset" href="https://www.linkedin.com/in/quentin-collin-916442144/" target="_blank"
                  rel="noreferrer">Quentin Collin</a> - Back-end developer</li>
              <li><a class="text-reset" href="https://www.linkedin.com/in/saad-el-madafri-4ab208190/" target="_blank"
                  rel="noreferrer">Saad El Madafri</a> - Junior Back-end developer</li>
              <li><a class="text-reset" href="https://www.linkedin.com/in/timour-almazov-a768aa112/" target="_blank"
                  rel="noreferrer">Timour Almazov</a> - Freelance Full-stack developer</li>
              <li><a class="text-reset" href="https://www.linkedin.com/in/hicham-ghermani-167b81115/" target="_blank"
              rel="noreferrer">Hicham Ghermani</a> - Data Engineer/Data Analyst</li>
            </ul>
          </p>
          <p>
            <strong>Users</strong>
            <ul style="list-style-type: none">
              <li>Frichti supply team</li>
            </ul>
          </p>`,
        },
        tags: ["Scale up", "BI Algorithm", "Web App", "UX", "UI"],
      },
      {
        title: "Warehouse mobile app",
        image: "../../assets/media/frichti-warehouse-app.gif",
        description: `<p class="card-text">At Frichti, alongside my work on the automated replenishment web app, I was also responsible for enhancing the warehouse mobile app. <span class="fw-medium">I led a important revamp of the order picking feature—a task that initially seemed superfluous, as the mean picking velocity was meeting targets. However, a deeper dive into the data and on-field observations revealed a significant onboarding challenge: new warehouse employees were taking at least three weeks to achieve the expected picking times.</span>
        </p>
        <p class="card-text">
          The root of the issue was clear. The initial design of the picking feature, created during a period when Frichti primarily delivered ready-to-eat meals, lacked a Product Manager's touch. It was business-centric, not user-centric, missing crucial product information in the picking view and requiring employees to be familiar with the entire warehouse assortment to reach full efficiency.
        </p>
        <p class="card-text">
        <span class="fw-medium">Addressing this, the new user-centered UI I introduced not only improved the picking velocity by 10% for existing employees but also drastically shortened the learning curve for new hires, enabling them to meet picking velocity targets within their first week.</span> This enhancement significantly optimized warehouse operations and reinforced the importance of a user-focused approach in product development.
        </p>`,
        tags: ["Scale up", "Mobile App", "Android", "UX", "UI"],
      },
      {
        title: "Sesame hardware & software suite",
        image: "../../assets/media/luseed-sesame.jpg",
        video: "../../assets/media/luseed-sesame.mp4",
        description: `<p class="card-text">
          As co-founder and product leader of Luseed, a startup specializing in innovative event marketing solutions, <span class="fw-medium">I conceptualized and developed 'Sesame', a connected, interactive terminal designed to amplify engagement between brands and their audiences during events.</span>
        </p>
        <p class="card-text">
          Leading a diverse team that included a designer, two developers, and a sheet metal partner, I spearheaded Sesame\'s journey from hardware design and industrialization to software development and deployment.
        </p>
        <p class="card-text">
          We created an integrated ecosystem featuring a desktop application for displaying interactive content like predictions, surveys, and quizzes, coupled with a management dashboard for remote terminal configuration and event data analysis. This setup empowered brands to launch targeted, automated marketing campaigns, both during and after events.
        </p>
        <p class="card-text">
          <span class="fw-medium">Sesame's success has been significant, adopted by leading brands such as TOTAL, PMU, and Orange in over 300 events, engaging more than 750,000 users across France.</span>
        </p>`,
        modal: {
          toggle: {
            label: "User Experience Catalogue",
            icon: "fas fa-book",
          },
          title: "Sesame user experience catalogue",
          pdf: "../../assets/media/luseed-sesame-user-experience.pdf",
        },
        tags: ["Startup", "Hardware", "Web App", "UX"],
      },
      {
        title: "Abur.io website",
        image: "../../assets/media/aburio-website.jpg",
        description: `<p class="card-text">
          Building a portfolio with Notion, Webflow, or any other no-code solution would probably have been quicker, but as I'm hands-on and enjoy discovering new things, I decided to build mine using Webpack and Bootstrap. It was also a great opportunity to showcase my UX/UI design skills.
        </p>`,
        externalLinks: [
          {
            icon: "fab fa-github",
            label: "Github",
            url: "https://github.com/aburio/aburio-website",
          },
        ],
        tags: ["Side-project", "Website", "HTML/CSS", "UX", "UI"],
      },
      {
        title: "Lueur connected cubes",
        image: "../../assets/media/lueur.jpg",
        video: "../../assets/media/lueur.mp4",
        description: `<p class="card-text">
          Prior to starting Luseed, my friends Clément Aceituno, Loïc Badel, and I explored multiple business opportunities.
        </p>
        <p class="card-text">
          Lueur was one of the many ideas we had. It's a pair of connected cubes that can light up each other from a simple tap.
        </p>
        <p class="card-text">
          Originally conceived to help my nephew and niece stay connected with their grandparents who live far away, we finally decided to make the project open-source.
        </p>`,
        externalLinks: [
          {
            icon: "fab fa-github",
            label: "Github",
            url: "https://github.com/aburio/lueur",
          },
        ],
        tags: ["Side-project", "IoT", "Firmware", "C/C++"],
      },
      {
        title: "Day countdown box",
        image: "../../assets/media/day-countdown.jpg",
        video: "../../assets/media/day-countdown.mp4",
        description: `<p class="card-text">
          I designed and built a small device featuring an LED matrix to display a day countdown and answer questions such as, "How many days remain before our wedding?" 😃
        </p>`,
        externalLinks: [
          {
            icon: "fab fa-github",
            label: "Github",
            url: "https://github.com/aburio/day-countdown-box",
          },
        ],
        tags: ["Side-project", "Electronics", "Firmware", "C/C++"],
      },
    ],
  },
};
