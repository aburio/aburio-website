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
    projects: [
      {
        title: "Quick-commerce as a service",
        image: "../../assets/media/ultra-fast-delivery-as-a-service.jpg",
        description:
          '<p class="card-text">As Lead Product Manager at Gorillas, a German quick-commerce leader and acquirer of Frichti, I spearheaded the launch and development of an API-based service within a challenging two-month timeframe. <span class="fw-medium">This service enabled retailers to rapidly deploy ultra-fast delivery services through the Gorillas store network.</span> </p> <p class="card-text"> Leading discussions with partners, marketing, operations, product, and tech teams, I ensured that the API blended advanced features with operational efficiency. This collaborative approach resulted in a product that not only met our partners\' needs to enter the ultra-fast delivery market but also upheld Gorillas\' high service standards. </p> <p class="card-text"> The API provided a holistic quick-commerce solution, leveraging the Frichti tech stack with dynamic warehouse allocation, precise delivery ETA projections, and real-time synchronization of available product assortments and stock levels. </p> <p class="card-text"> <span class="fw-medium">It played a pivotal role in forging partnerships with major retailers such as Jumbo (Netherlands) and Monoprix (France), extending our product offerings, and reinforcing our status as a leader in the ultra-fast delivery sector.</span> </p>',
        modal: {
          toggle: {
            label: "Project Details",
            icon: "fas fa-list-check",
          },
          title: "Quick-commerce as a service",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ligula in nunc fringilla tristique.",
        },
        tags: ["Quick-commerce", "Scale up", "UX", "API", "Management"],
      },
      {
        title: "Automated store replenishment",
        image: "../../assets/media/frichti-replenishment.gif",
        description:
          '<p class="card-text">As Lead PM at Frichti, a prominent French food and grocery delivery startup, I spearheaded a major revamp of our automated replenishment algorithm. <span class="fw-medium">This initiative not only enhanced its stability and predictability but also dramatically reduced technical on-call support requests from three times a week to once a quarter—a reduction of over 90%.</span> </p> <p class="card-text"> Beyond technical improvements, I led a UX-centric project to demystify the complexities of the algorithm. This critical move transformed the algorithm from a \'black box\' into a transparent and insightful tool, empowering our supply and ops team with actionable insights and significantly boosting trust in our system. </p> <p class="card-text"> <span class="fw-medium">This strategic shift profoundly optimized our operations, evidenced by a 98% automation rate in replenishment orders and a tenfold decrease in support inquiries about order content.</span> My collaborative approach with tech, supply, and ops teams not only tackled immediate challenges but also established a strong foundation for scalable, sustainable operations, securing long-term success. </p>',
        modal: {
          toggle: {
            label: "Project Details",
            icon: "fas fa-list-check",
          },
          title: "Automated store replenishment",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ligula in nunc fringilla tristique.",
        },
        tags: [
          "Food & Grocery delivery",
          "Supply-chain",
          "Scale up",
          "Technical debts",
          "UX & UI",
          "Management",
        ],
      },
      {
        title: "Sesame",
        image: "../../assets/media/sesame.jpg",
        video: "../../assets/media/sesame.mp4",
        description:
          '<p class="card-text">As the co-founder of Luseed, a startup specializing in innovative event marketing solutions, <span class="fw-medium">I conceptualized and developed \'Sesame\', a connected, interactive terminal designed to amplify engagement between brands and their audiences during events.</span></p> <p class="card-text">Leading a diverse team that included a designer, two developers, and a sheet metal partner, I spearheaded Sesame\'s journey from hardware design and industrialization to software development and deployment.</p> <p class="card-text"> We created an integrated ecosystem featuring a desktop application for displaying interactive content like predictions, surveys, and quizzes, coupled with a management dashboard for remote terminal configuration and event data analysis. This setup empowered brands to launch targeted, automated marketing campaigns, both during and after events. </p> <p class="card-text"> <span class="fw-medium">Sesame\'s success has been significant, adopted by leading brands such as TOTAL, PMU, and Orange in over 300 events, engaging more than 750,000 users across France.</span> </p>',
        modal: {
          toggle: {
            label: "User Experience",
            icon: "fas fa-book",
          },
          title: "Automated store replenishment",
          asset: "../../assets/media/sesame-user-experience.pdf",
        },
        tags: [
          "Martech",
          "Startup",
          "Co-founder",
          "UX",
          "Hardware & Software",
          "Management",
        ],
      },
      {
        title: "Abur.io website",
        image: "../../assets/media/abur-website.jpg",
        description:
          '<p class="card-text"> Building a portfolio with Notion, Webflow, or any other no-code solution would probably have been quicker, but as I\'m hands-on and enjoy discovering new things, I decided to build mine using Webpack and Bootstrap. It was also a great opportunity to showcase my UX/UI design skills. </p>',
        externalLinks: [
          {
            icon: "fab fa-github",
            label: "Github",
            url: "https://github.com/aburio/abur-website",
          },
        ],
        tags: ["Side-project", "Website", "HTML/CSS", "UX", "UI"],
      },
    ],
  },
};
