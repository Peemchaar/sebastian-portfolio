export interface IProject {
    route: string
    name: string
    cardImage: string
    mainImage: string
    mainPNG: string
    country: string
    title: string
    location: string
    motto: string
    intro: string
    tags: string[]
    displaceItems: string[]
    design_process: {
        steps: string []
        role: {
            name: string
            tasks: string
        }
        client: {
            type: string
            name: string[]
        }
        overview: {
            primary: string
            secondary: string[]
        }
    }
    detailed_steps: IDetailedStep[]
    animated_gifs: string[] | null
    aditional_content: string[]
    analysis: {
        name: string
        title: string
        primary_text: string
        secondary_text: string
        list: {
            title: string
            list_items: string[] 
        }
    }
}

export interface IDetailedStep {
    name: string
    title: string
    primary_image: string | null
    secondary_image: string | null
    primary_text: string
    secondary_text: string
    list: {
        title: string
        list_items: string[] 
    }
}




export class ProjectsList extends Array<IProject> {
    constructor(){
        super();
        this[0] = {
            route: '/carbon-journey',
            name: 'CarbonJourney',
            cardImage: '../../assets/img/carbon_journey/carbon_card.svg',
            mainImage: '../../assets/img/carbon_journey/carbon_large.svg',
            mainPNG: '../../assets/img/carbon_journey/graphic.png',
            country: 'Mexico',
            title: 'CarbonJourney: Decarbonization software',
            location: 'CBPI c.a & Ithaca Environmental, 2023 - ',
            motto: 'Allowing enterprises reduce their GHG emissions efficiently.',
            intro: 'Project your enterprise’s consumption and GHG emissions to create an structured and adaptable action plan that will reduce your emissions progressively based on your business growth and reality.',
            tags: [
                'Modern',
                'Organic',
                'Friendly'
            ],
            displaceItems: [
                'DECARBONIZATION* CLIMATE CHANGE',
                'INNOVATING SOLUTIONS',
                'CREATING EXCELLENT RESULTS'
            ],
            design_process: {
                steps: [
                    'Research',
                    'Visual identity',
                    'Architecture',
                    'Wireframing',
                    'Design system',
                    'Results'
                ],
                role: {
                    name: 'Lead Designer',
                    tasks: 'Research, Visual Identity and Product Architecture, Wireframing, Interaction design, Design System and software construction.'
                },
                client: {
                    type: 'Organization',
                    name: [
                        'CBPI c.a IT Consulting, Mexico',
                        'Ithaca Environmental, Mexico'
                    ]
                },
                overview: {
                    primary: 'CarbonJourney is a decarbonization tool software designed and developed by CBPI c.a IT Consulting and Ithaca c.a Environmental in America, Mexico. Focused on macro-enterprise resolutions for GHG mitigations within operational and financial organization’s activity, CarbonJourney place its goal on becoming the most reliable and friendly guidance for companies that wants to achieve a significant and structured GHG Emission decrease over time.',
                    secondary: [
                        'With information technology aid, artificial intelligence and automatic learning, the GHG mitigation process will be achievable within the most of enterprise types, realities and growths. Stablishing an structured action plan with several mitigation measures CarbonJourney will be able to provide detailed roadmaps for GHG mitigation goals in a wide-adaptable playground methodology based on real, historic and projected data depending on the enterprise size, personnel and other well-known business variables.',
                        'CarbonJourney’s goal is to provide an efficient decarbonization software for enterprises predict, mitigate and create environmental measures in order to reduce GHG emissions optimally and efficiently. In this way, CarbonJourney presents itself as an optimal, organic, modern and user-friendly software for decreasing emissions preoccupation within enterprises no matter business organization, size or reality.'
                    ],
                }
            },
            detailed_steps: [
                {
                    name: 'Research',
                    title: 'From scratch',
                    primary_image:  null,
                    secondary_image: null,
                    primary_text: 'CarbonJourney Decarbonization software was built from scratch to MVP and evolving iterations through users feedback once released.  Therefore, this product was designed for an organic growth through time making easier to add, adapt and iterate components and functionalities applying atomic design methodology all over the design process and product architecture.',
                    secondary_text: 'Before creating CarbonJourney’s Design System, Visual Identity and Final Art, we needed to stablish our product goal and style in order to align our design and development process in one unique product axis. To do so, we implement several research methodologies that allow us visualize our core functionalities and value that we want to project through our image applied to all our graphic resources such as our User Interface approach. Through this research we could identify which was our current market niche, how bring value to the clients of the marketplace where we are at and how visually communicate our identity to those target clients. From this, we also could recognize which design system interaction was the best for our customers target related to their realities and necessities. In this way, the research process give us significant insights such as:',
                    list: {
                        title: 'Research Discoveries:',
                        list_items: [
                            '-This must be a SaaS software highly accessible and functional with several analytics comparative dashboards for the user.',
                            '-With a high probability of growth, the product design must be prepared to scale over time without any difficulty.',
                            '-Our clients need to trust on our product and the way it does its results, in this way, we help our client to perceive a trustful tool in CarbonJourney through visual aid based on psychology of perception and more graphic techniques.',
                            '-The image of CarbonJourney has to be unique to cast distinctiveness around the market. If there are few decarbonization tools nowadays, CarbonJourney wants to differ from these with unique and advanced functionalities that must be approved internationally',
                            '-This product must be designed with constant insight of environmental analytics through the process, because advanced features that have to comply with nowadays report processes and emission analysis within enterprises.',
                            '-Taking in consideration the wide range of realities that our costumers could have, the product architecture of CarbonJourney must be as adaptable as its design, in this way, we need to stablish an user flow that adapts to the user reality in almost all cases.',
                            '-There are few decarbonization tools to compare with our Product, nevertheless, the UX design of these products were highly deficient, taking only the most valuable insights that our competition could give us at this moment.'
                        ]
                    }
                },
                {
                    name: 'Visual identity',
                    title: 'Product manual',
                    primary_image:  '../../assets/img/carbon_journey/step2_primary.svg',
                    secondary_image: null,
                    primary_text: 'Once identifying the core points that will serve us as image construction criteria, we proceed to consolidate a product manual that functions as a well-based document that englobes our design-style rules across all our graphic resources. In this way, we avoid inconsistent discourses referring our brand in all its assets. Adapting this manual to the principal digital needs of the product.',
                    secondary_text: 'Creating the visual identity´s manual for CarbonJourney we could define our style and brand basis, with this, we also could manage how to project  to the most convenient interaction design to our customer target aligned with profound technical research and professional image development. With this in mind, our Product Manual stablished several points of our future design system that we would build in the next steps:',
                    list: {
                        title: 'Product Manual results:',
                        list_items: [
                            '-Brand attributes that would be interrelated to UX and UI purposes. (Modernity, Friendly, Secure, Trustful, Ecologist).',
                            '-Brand representative imagotype and its several correct uses.',
                            '-Colour Palette construction and expansion to grant usability in digital platforms and design systems. Always aligned with the selected core values of the brand.',
                            '-Typography selection to grant usability in digital platforms and design systems with the best UX practices.',
                            '-Interaction Design establishment referred to Material Design Style and practices.',
                            '-Digital mockups of several components constructed by the specified product manual’s rules. ',
                        ]
                    }
                },
                {
                    name: 'Architecture',
                    title: 'Product architecture',
                    primary_image:  '../../assets/img/carbon_journey/step3_primary.svg',
                    secondary_image: null,
                    primary_text: 'The definition of the architecture of our product would let us organize our ideas around it to visualize how we can make them reality. Knowing which are our brand core points and intentions, we would be capable to concrete a highly effective Product Architecture that could satisfy all our brand and product needs always thinking in scaling, adaptability and growth. And from here, start building our decarbonization software.',
                    secondary_text: 'Our product architecture was thought to grow and adapt satisfying our several product needs regarding our goal. As a decarbonization tool, the user flow that our customers has to accomplish to identify the value of our product was, before CarbonJourney, really complex and long. Reorganizing and adapting this process within a digital software proposal and with significant design insights, this process of data recollection reduces its difficulty considerably and make more effective the user usage of our tool. For this, we re-structure the architecture of CarbonJourney registration basis and how this flow could satisfy our data needs in order to cast several validated environmental analytics and, also, making sure that at least almost every enterprise, no matter its reality and growth, could find his customizable space within our tool.',
                    list: {
                        title: 'Product architecture results:',
                        list_items: [
                            '-A product architecture prepared for growth and scaling through time',
                            '-Powerful insights through simple data collection processes',
                            '-Satisfy direct and indirect needs from a decarbonization system within a digital solution.',
                            '-A less difficult decarbonization system establishment to enhance and augment through easy systems decarbonization processes around the globe',
                            '-Basis for next user flows and wireframes that will make us convey our product architecture digitally and functionally',
                        ]
                    }
                },
                {
                    name: 'Wireframing',
                    title: 'User flows and Wireframes',
                    primary_image:  '../../assets/img/carbon_journey/step4_primary.svg',
                    secondary_image: null,
                    primary_text: 'With the product architecture and visual identity defined, we started proposing user flows sketches in order to find the best path that guarantee the success of the user within the features of our product, meanwhile conveying an enriched perception through visual sense of our brand construction visual identity criteria giving to our users an unique and well-cared distinctive experience.',
                    secondary_text: 'Once the user flows are approved and created through the 3 steps design cycle (identify, design, iterate), we proceeded creating base wireframes that will stablish what we expect to happen within our application when some user is trying to do certain action. In this way, defined all the actions that are we are going to construct through several user flows that are within our product functionalities, we will be able to approved the final design plan to translate such simpler UX wireframes into final UI/UX prototypes ready for implementation. ',
                    list: {
                        title: 'User flows and Wireframes results:',
                        list_items: [
                            '-An structured and responsive design plan and layout for our product',
                            '-Stablish selected design patterns suited for the needs of our product and the preferences of our costumer, aligned with the implementation capacities in the team',
                            '-Base wireframes for final art prototypes ready to implement',
                            '-Enriched debate between development team and design, quantification of needed components and screens for development',
                        ]
                    }
                },
                {
                    name: 'Design system',
                    title: 'Design system Results',
                    primary_image:  '../../assets/img/carbon_journey/step5_primary.svg',
                    secondary_image: null,
                    primary_text: 'With Atomic Design methodology we built a collection of repeatable components and a set of standardized guidelines for the use of these. As a big box of UI and UX Lego pieces, through CarbonJourney Design system we will be able to discover new possibilities to implement in our digital product successfully. All this aligned with our brand visual identity criteria and UX Wireframes defined strategy.  ',
                    secondary_text: 'Our design system concretes the colour palette for digital purposes and extended typography system aligned with interaction design and patterns. In this way, we translate our UX Wireframes paths and flows in a stylish outcome that convey our brand visual identity guide lines. Also, we adjust the tone of our brand through its graphic resource: the UI platform where the UX magic happens and where we collect the most valuable feedback of our users. Now we are ready to scale an make better our product through time and testing.',
                    list: {
                        title: 'Design system results:',
                        list_items: [
                            '-Colour Palette for digital product building',
                            '-Typography system for digital product building',
                            '-Reusable components created with atomic design methodology',
                            '-UX/UI resources to elaborate final art screens and UX flows aligned with brand´s visual identity',
                        ]
                    }
                },
                {
                    name: 'Results',
                    title: 'Final art',
                    primary_image:  null,
                    secondary_image: null,
                    primary_text: 'The Final Art and layout is the refinement of all the previous work resulting in a well-cared design system that englobes and accomplish all the pointed needs of our product regarding of what we want to create and how we can do it for. In this way, the Final Art is the product of all the previous steps that guaranteed the success of our product design achievement.',
                    secondary_text: 'Once the user flows are approved and created through the 3 steps design cycle (Build, Measure, Learn), we proceeded creating base final wireframes that will establish what we expect to happen within our application when some user is trying to do certain action. In this way, defined all the actions that are we are going to construct through several user flows that are within our product functionalities, we will be able to approve the final design plan to translate such simpler UX wireframes into final UI/UX prototypes ready for implementation. ',
                    list: {
                        title: 'Final Art results:',
                        list_items: [
                            '-Layout and component’s assemble to define our final design structure all over our digital product',
                            '-Bulk of digital resources such as videos, images, loaders, microinteractions and microanimations to enhance the user experience',
                            '-Final Design prototype ready for development implementation based on Wireframes prototype logics',
                        ]
                    }
                }
            ],
            animated_gifs: [
                '../../assets/img/carbon_journey/carbon_1_gif.gif',
                '../../assets/img/carbon_journey/carbon_2_gif.gif',
            ],
            aditional_content: [
                '../../assets/img/carbon_journey/aditional_1.svg',
            ],
            analysis: {
                name: 'Analysis',
                title: 'I would improve',
                primary_text: 'CarbonJourney was an excellent project that I develop with an excellent team. Nevertheless, all projects could be made differently, and this analysis would help me to understand what I would do in my next project if the opportunity is presented for me to improve as well.',
                secondary_text: 'At the beginning of CarbonJourney project there was certain discrepancies between Lead Design and Front-end development regarding design abilities and implementation capacity. Therefore, was necessary a development onboarding through several logistics and architecture presentations for ideas communication that somehow delayed the project results and limited the opportunities of product improvements and iterations.',
                list: {
                    title: 'Learnings:',
                    list_items: [
                        '-Having an profound understanding of the product will communicate the design needs and define the implementation processes',
                        '-Communicating clearly the used methodology for software construction can diminish significantly the time margin of learning',
                        '-Teams that can improve between members have the advantage of a profound understanding of the product, but lacks efficiency in terms of wasted time on communication strategies for professional levelling that would result on the desired outcome'
                    ]
                }
            }
        } 

        this[1] = {
            route: '/cbpi-etl',
            name: 'CB- ETL Tool',
            cardImage: '../../assets/img/cbpi/cbpi_card.svg',
            mainImage: '../../assets/img/cbpi/cbpi_large.svg',
            mainPNG: '../../assets/img/cbpi/graphic.png',
            country: 'Mexico',
            title: 'CB- ETL Tool',
            location: 'CBPI c.a, 2020 - ',
            motto: 'Enhancing data interpretation through enterprises with reliable data structures and processes.',
            intro: 'An ETL tool developed in one simple and adaptable platform, designed for all the data-reliability needs your enterprise could have.',
            tags: [
                'Data integration',
                'ETL processes',
                'User friendly'
            ],
            displaceItems: [
                'ETL TOOL* DATA RELIABILITY*',
                'CREATING EXCELLENT RESULTS',
            ],
            design_process: {
                steps: [
                    'Research',
                    'Architecture',
                    'Wireframing',
                    'Design system',
                    'Results'
                ],
                role: {
                    name: 'Lead Designer',
                    tasks: 'Research, Redesign and Product Architecture, Wireframing, Interaction design, Design System and software construction.'
                },
                client: {
                    type: 'Organization',
                    name: [
                        'CBPI c.a IT Consulting, Mexico'
                    ]
                },
                overview: {
                    primary: 'Developed from time and learning, CB CBPI is an ETL Tool made by a hole team that compromises with excellence, transparency and quality. Based on the customer’s perspective, CB CBPI is a software created with the objectives of efficacy, adaptability and optimization for all types of business around the globe. Through a previous ETL Software, CB CBPI guarantee a bunch of new features that will allow to provide value to customers in the most reliable and efficient manner, this product not only allows an important enhancement for the business economy, it also would be able to easily adapt to your business needs regarding data ETL Processes.',
                    secondary: [
                        'This product was built as an ETL Solution that aims efficiency while affordability stills on the sight, without hampering best security practices or concerns about data ETL management journey, with clear values of integrity, communication and reliability that leads the work path. ',
                    ],
                }
            },
            detailed_steps: [
                {
                    name: 'Research',
                    title: 'Redesign research',
                    primary_image:  null,
                    secondary_image: null,
                    primary_text: 'CB ETL Tool was a redesign project build from a previous non-user friendly UX and UI  platform design. The core points was to create a new user flow system with enhanced UX practices that simplifies the tool usability and accessibility.  As many re-design projects this needed a bunch of previous reunions and User research to identify where the platform design lacked of intuitive approaches to recreate those weaknesses and replace them with strengths.',
                    secondary_text: 'Redesign an already built product needs several work techniques that allow us how to understand the previous design architecture and, from there, rebuild the product structure aiming to found a better suitable design for the software purposes. Nevertheless, CB CBPI needed not only a UX/UI redesign, but also a complete rebranding in order to stablish, through our senses, some well-established values that were aligned with the brand philosophy and projections. For this, we lay on user research and design techniques to found that exactly graphic and experience resources we need to start re-shaping our product.',
                    list: {
                        title: 'Research Discoveries:',
                        list_items: [
                            '-There was not any documentation of our product regarding design matters.',
                            '-There was no clarity in which were the main actions that the user takes in CB ETL Tool platform.',
                            '-There was no an established brand philosophy aligned with the visual perception of the product.',
                            '-The user flows used so far were based on developers insights and there was not thought to a more wide types of users. ',
                            '-We recognized a lack of defined structure to star building our product. ',
                            '-The objective of this product was to be a SaaS for enterprise around the globe, nevertheless, it was built as a one-organization product.',
                        ]
                    }
                },
                {
                    name: 'Architecture',
                    title: 'Navigation structure map',
                    primary_image:  '../../assets/img/cbpi/step2_primary.svg',
                    secondary_image: null,
                    primary_text: 'Our first approximation to this project was to build a navigations structure of the old design to identify which were the needs and flows that we needed to re-design, in this way, we would not miss any interaction of the previous design meanwhile we recognize the old-version design structure, that has not any documentation in that moment. ',
                    secondary_text: 'We also needed to create a new logo, select new brand colours and typographies, but after studying the structure and infrastructure of our old-version product. Once identified the interaction possibilities, flows and actions that an user should take in a tool such like this, we proceeded to create user flows, re-thinking which were the best UX practices possibilities to let the user accomplish its objective in a simplified and intuitive interaction. There was a lot to think about how we could achieve this, once we built the Navigation Structure of this application.',
                    list: {
                        title: 'Navigation structure results:',
                        list_items: [
                            '-There were several user actions that needs to be better resolved in terms of user experience.',
                            '-There was unknown interactions that could be dismissed or repositioned.',
                            '-Some actions appears not to be organic to the most type of enterprises, because the first specialized one-organization built of the product.',
                            '-There were usability and accessibility problems in typography and colour harmonies. ',
                        ]
                    }
                },
                {
                    name: 'Wireframing',
                    title: 'User flows and wireframing',
                    primary_image:  '../../assets/img/cbpi/step3_primary.svg',
                    secondary_image: '../../assets/img/cbpi/step3_secondary.svg',
                    primary_text: 'Once identified the main actions that the user takes with the Navigation Structure Map definition, we started building several user flows to better understand these actions and how the user could accomplish them without difficulties, recreating the old user flows for renewed paths that were enhanced by UX better practices and patterns.',
                    secondary_text: 'There were a high quantity of user interactions to represent in our user flows, creating both mobile and desktop design, there were little modifications on the number of steps that a user need to take to accomplish its objective within the most complex actions. By the nature of this tool, there were also several functionalities that were not contemplated in the previous design, taking in consideration the available launching time and development forces, we could add some of these functionalities to our redesign.',
                    list: {
                        title: 'User flows & wireframes discoveries:',
                        list_items: [
                            '-A complete rethinking of the old version design.',
                            '-Better, simplified and shorted user flows paths in several user actions.',
                            '-New design patterns added to enhance user experience.',
                            '-A concrete plan to start building the final design in mobile and desktop solutions.',
                            '-Better responsiveness between screens. ',
                            '-A more visual data dashboards to better represent the data integration processes. ',
                        ]
                    }
                },
                {
                    name: 'Design system',
                    title: 'Design system Results',
                    primary_image:  '../../assets/img/cbpi/step4_primary.svg',
                    secondary_image: null,
                    primary_text: 'With Atomic Design methodology we built a collection of repeatable components and a set of standardized guidelines for the use of these. With CB Design system we want to enhance the organic scaling of this product, once built as one-organization tool aiming to be a general SaaS in the market. All this aligned with a new brand visual identity and UX Wireframes defined strategy.',
                    secondary_text: 'Our design system establish the colour palette and a extended typography system aligned with some added interaction designs and patterns. We translate our built UX Wireframes paths and flows in a stylish outcome that enhances the previous design version from where we are working on. We elaborate a detailed user resources to correct the previous brand usage taking in consideration our main brand values and philosophy, represented in our new brand logo, hoping that, with this, the UX and UI design will highly improve.',
                    list: {
                        title: 'Design system results:',
                        list_items: [
                            '-Colour Palette for digital product building.',
                            '-Typography system for digital product building.',
                            '-Reusable components created with atomic design methodology.',
                            '-UX/UI resources to elaborate final art screens and UX flows aligned with brand´s visual identity.',
                            '-A bunch of components that will enhance our user experience and UI visuals.',
                            '-An established behaviour expectation from the platform.',
                            '-A better understanding of our product capabilities and functiontalities.',
                        ]
                    }
                },
                {
                    name: 'Results',
                    title: 'Final art',
                    primary_image:  null,
                    secondary_image: null,
                    primary_text: 'The Final Art is the product of all the previous steps that guaranteed the success of our redesign. At this point CB was basically built and beyond the old-design capabilities and functionalities. Adding new design patterns, better UX practices and UI visualization, CB was ready to accomplish it tasks with a rebranded platforms that suits better to the software objectives.',
                    secondary_text: 'With the final art wireframes, we could establish a detailed execution plan for developers and designers, scalable at the future and organically enough to support all sort of changes and iterations without affecting our visual identity. With a more intuitive and simple version of our product, CB was ready to deploy it data integration functionalities with better aesthetics, accessibility and usability. ',
                    list: {
                        title: 'Final art results:',
                        list_items: [
                            '-Layout and component´s assemble to define our final design structure all over our digital product.',
                            '-Bulk of digital resources such as videos, images, loaders, microinteractions and microanimations to enhance the user experience.',
                            '-Final Design prototype ready for development implementation based on Wireframes prototype logics.',
                            '-A complete redesign of previous user flows and visuals. ',
                            '-A better user experience with better design patterns and UI visuals.',
                        ]
                    }
                },
            ],
            animated_gifs: [
                '../../assets/img/cbpi/cbpi_1_gif.gif',
                '../../assets/img/cbpi/logo_cloud_bridge.svg',
            ],
            aditional_content: [
                '../../assets/img/cbpi/aditional_1.svg',
            ],
            analysis: {
                name: 'Analysis',
                title: 'I would improve',
                primary_text: 'CB ETL tool was a nurtured project that I redesigned with a pro team. Every project, although, can be improved. The redesign project of CB was really challenging, between the incongruence of the SaaS projection of the product and the already built one-organization platform, there was several functionalities that could not be added in the redesign project. In this way, a better establishment of the product would ease the product development.',
                secondary_text: 'A redesign project always needs to reach a point were you have to built your product without somehow alter to much the previous design and at the same time rebuilt it from almost zero in this case. There were several UX design weaknesses, and UI design discrepancies. It was challenging to find a way were the old users would be satisfied altering the tool that they were already using meanwhile giving new users a better platform experience without any further perceptions prejudges. ',
                list: {
                    title: 'Learnings:',
                    list_items: [
                        '-An established product plan will ease in the future the needs and functionalities that our product would have, and will make the objective of it constant through time.',
                        '-Communicating clearly the used methodology for software construction can diminish significantly the time margin of learning.',
                        '-A redesign product is somehow difficult between old user expectations and new users engaging. A profound understanding of the old version product will reduce the design thinking process.'
                    ]
                }
            }
        }

        this[2] = {
            route: '/swappinc',
            name: 'Swappinc',
            cardImage: '../../assets/img/swappinc/swappinc_card.svg',
            mainImage: '../../assets/img/swappinc/swappinc_large.svg',
            mainPNG: '../../assets/img/swappinc/graphic.png',
            country: 'Spain',
            title: 'Swappinc: The bartering experience',
            location: 'Swappinc c.a, 2023 - ',
            motto: 'Creating innovative, fun and adventurous experiencies.',
            intro: 'Swappinc is the place where objects find the right value determined by the user through barter. In a fun, dynamic and organic way, Swappinc seeks to provide the user with a versatile and modern bartering platform.',
            tags: [
                'Bartering',
                'Mobile app',
                'Visual identity'
            ],
            displaceItems: [
                'SWAPPINC*NO LO TIRES, CÁMBIALO*TRUEQUE',
            ],
            design_process: {
                steps: [
                    'Research',
                    'Logo Construction',
                    'Visual identity',
                    'Results'
                ],
                role: {
                    name: 'Lead Designer',
                    tasks: 'Research, Logo Construction, Visual Identity, Product Manual and Brand visual management.'
                },
                client: {
                    type: 'Organization',
                    name: [
                        'Swappinc c.a, Spain'
                    ]
                },
                overview: {
                    primary: 'Swappinc c.a was a graphic design project oriented to the establishment of brand visual guidelines through the most recommended design practices. With no logo, non-user experience design systems or UI design expertise, the goal of this project was to provide a refreshed understanding on how to manage a visual identity correctly with research, creativity and results. We started defining which were the construction criteria of the logo, and how we can use them in a digital product such as Swappinc. ',
                    secondary: [
                        'The outcome of this experience was a product manual oriented to digital product construction with UX and UI recommendations all over the process. The established style was thought in this way to create efficient and optimal design systems free enough to let the creativity flow to find the best user experience solutions projected in beautiful interfaces. ',
                    ],
                }
            },
            detailed_steps: [
                {
                    name: 'Research',
                    title: 'Research',
                    primary_image:  null,
                    secondary_image: null,
                    primary_text: 'Understanding a brand could be somehow difficult for some designers, nevertheless, with the appropriate design methodologies this could be our primal starting point from where, if done successfully, we build all the derivative graphic products and resources intertwined by one brand concept and identity. In this way, researching this core points, and main conceptual requirements of our client to be represented in our design is a must every designer should take before starting to create solutions. ',
                    secondary_text: 'To achieve a profound understanding of our client needs and preferences we use several guidance methods that allows our client to even get a better understanding of the abstraction of what he wants to be perceived in the brand image. In this way, we approach our first approximation with abstract language definitions that will give us graphic insights to build derivative moodboards and logo proposals. With these methodologies we identified several central points in which focus our graphic products, including digital approaches: Experience, Fun, Impact, Modernity, Organicity and Youth, this construct criteria was used in all the product manual construction process. ',
                    list: {
                        title: 'Research Discoveries:',
                        list_items: [
                            '-Our client was highly interested on the values of Experience, Fun, Impact, Modernity, Organicity and Youth.',
                            '-Our brand should be modern, fun, impactful, youthful and organic. ',
                            '-New brand values to consider within our image management.',
                            '-A thoughtful moodboard of references linked with the main discovered brand values.',
                            '-Profound understanding of the brand image guidelines to take in consideration in every graphic resource. ',
                        ]
                    }
                },
                {
                    name: 'Logo construction',
                    title: 'Construction reticule',
                    primary_image:  '../../assets/img/swappinc/step2_primary.svg',
                    secondary_image: null,
                    primary_text: 'Reticules are everywhere in design world, they are structured layouts that let us organize formal assets such as logos, screens and webpages, they are useful for many purposes, for that they are a must to know to every designer no matter in which specialty they are developed. We use this technique for Swappinc logo construction to achieve a fun, dynamic and unique representative Isotype.',
                    secondary_text: 'The Swappinc isotype is built through a primary grid on an odd total of modules on the X axis and the Y axis, guaranteeing a central module between both axes as a balance point for a body whose shape seeks to transmit movement and exchange. Our client was specially attracted to unique isotypes as graphical representations of branches and movements, preserving a minimalist but also striking approach through organic forms that lend us dynamism and interest.',
                    list: {
                        title: 'Construction reticule results:',
                        list_items: [
                            '-Structured Isotype with a sense of symmetry and proportion that ease the graphic perception of the symbol.',
                            '-Icon that formally conveys dynamism, nature, uniqueness, and bartering.',
                            '-A convenient Isotype from where start building our branch architecture and visual identity.',
                            '-Minimum image of our branch. ',
                        ]
                    }
                },
                {
                    name: 'Visual identity',
                    title: 'Visual identity establishment',
                    primary_image:  '../../assets/img/swappinc/step3_primary.svg',
                    secondary_image: null,
                    primary_text: 'The visual identity of a branch is a compound of several graphic resources that resembles our branch concept visually. There are several resources that a designer can use for this purpose, such as typography, colour, values, nuisances and much more. The construct of a visual identity is going to depend into the brand needs as product, therefore, visual identities are often grown diversely by product.',
                    secondary_text: 'For Swappinc our visual identity must convey what research data give to us as designers, with striking and unique colours that also will create transitioning effects easily in an harmonic relation, a dynamic and versatile typographies that serve us depending on functionality and purpose and much more other graphical assets that can be built with those product’s rules.',
                    list: {
                        title: 'Visual Identity discoveries:',
                        list_items: [
                            '-An harmonic colour relation through complementary nuisances would fit perfectly on our brand concept perception.',
                            '-Transitioning states between colours and typographies must be developed in order to convey functionality and movement.',
                            '-Typographies must be versatile in every moment to allow us convey hierarchies and more between texts and components.',
                            '-Neutral colours must fit harmonically with our primary and secondary colours. ',
                            '-Values and temperatures must be considered within our brand visual representation at all times.'
                        ]
                    }
                },
                {
                    name: 'Results',
                    title: 'Product manual',
                    primary_image:  null,
                    secondary_image: '../../assets/img/swappinc/step4_secondary.png',
                    primary_text: 'A product manual is a compendium of graphical rules that must be applied if we want to convey through visuals a brand’s concepts, these can be played in a limited way, but always must serve as floor for creativity and innovation through unique solutions. They are not stretched parcels that cannot be  surpassed, they are the base of creativity and growth. ',
                    secondary_text: 'Swappinc Product’s Manual is just the beginning of the brand’s visual assets construction, it was built as a fertile base for creativity and uniqueness, as it brand’s concept stablish: it is a creativity core that must be always in movement providing a fulfilling experience through change. The delicate relations through concepts were always our main core from where all other derivatives came from, this will guarantee a profound connection networking over stablished concepts discovered on research and insight.',
                    list: {
                        title: 'Product manual results:',
                        list_items: [
                            '-Colour Palette Establishment.',
                            '-Corporate Typography Establishment.',
                            '-Logo Versions Establishment.',
                            '-Logo Construction Explanation.',
                            '-Safe Zone Establishment.',
                            '-Fertile Base for future innovations and creative solutions through expected Digital Products. ',
                            '-A better understanding of our product visual identity and identity itself.',
                        ]
                    }
                },
            ],
            animated_gifs: [
                '../../assets/img/swappinc/swappinc_1.svg',
            ],
            aditional_content: [
                '../../assets/img/swappinc/aditional_1.svg',
            ],
            analysis: {
                name: 'Analysis',
                title: 'I would improve',
                primary_text: 'Swappinc was an extraordinary experience regarding design and client collaboration. There was always a gentle touch that let us advance progressively through a satisfying outcome, the result was excellent and fulfilling not only for the client, but for the designer. Nevertheless, an improvement can always be made.',
                secondary_text: 'Any project needs for a detailed and structured workpath to be accomplished in order to achieve the goal in determined time lapses and so on. In this case, the project organization was affected by team incongruences and lack of time by some of the associates. Nevertheless, with high valuable work strategies the project was finished within the stipulated timeframe, but it was needed an extra-design work that, we will never know, could affect the final product.',
                list: {
                    title: 'Learnings:',
                    list_items: [
                        '-An established product plan will ease in the future the needs and functionalities that our product would have, and will make the objective of it constant through time.',
                        '-A constant communication between designer and associates will ease the project goals.',
                        '-Structured workpaths would always allow us to complete our projects systematically with profound organization and work awareness.'
                    ]
                }
            }
        }

        this[3] = {
            route: '/karko',
            name: 'Karko Corp',
            cardImage: '../../assets/img/karko/karko_card.svg',
            mainImage: '../../assets/img/karko/karko_large.png',
            mainPNG: '../../assets/img/karko/graphic.png',
            country: 'Venezuela',
            title: 'Karko Corp: The digital art supply shopping true experience',
            location: 'Study Case, 2019 - ',
            motto: 'Creating well-cared digital solutions for shopping experiences.',
            intro: 'Innovating the shopping experience through design pattern solutions. A new experience for art supply shopping.',
            tags: [
                'Art supplies',
                'Mobile app',
                'UX design'
            ],
            displaceItems: [
                'WHERE TO BUY ART SUPPLIES - NEVER MISS AN OFFERT-AART FOR EVERYONE!',
            ],
            design_process: {
                steps: [
                    'Research',
                    'Architecture',
                    'Wireframing',
                    'Design system',
                    'Results'
                ],
                role: {
                    name: 'UX/UI Designer',
                    tasks: 'Research, Logo Construction, Visual Identity, Product Manual and Brand visual management.'
                },
                client: {
                    type: 'Study',
                    name: [
                        'Karko Corp - Art Supplies'
                    ]
                },
                overview: {
                    primary: 'Karko Corp was a design project for Zero Mastery Academy. It was oriented with the goal of creating a mobile design for a fictitious enterprise, which must have all the minimum branches that fulfils the product purpose in an intuitive design experience and a coherent visual design interface. It was my first complete project as UX/UI designer, presenting several obstacles that I would with time surpass excellently, here I was able to learn the most important UX design principles and theories to be applied afterward in a future work environments which I indeed had. ',
                    secondary: [
                        'The result of this project was a complete mobile design experience prototype for a digital art supply merchandise. With already established design patterns for these types of services as software. Also this project englobes profound learnings about UX/UI Design specialty that I would apply in all my future projects as well if the reality of the project match with the solutions applied here. It wan a rich experience that allow me to understand better how user experience is modelled in digital products and more.',
                    ],
                }
            },
            detailed_steps: [
                {
                    name: 'Research',
                    title: 'From scratch',
                    primary_image:  null,
                    secondary_image: null,
                    primary_text: 'Online stores are knew to have numerous challenges when translating its physical experience into digital experience. This problem has already well-studied solutions and success examples such as Shopify,  Amazon, eBay, etc, pioneers on this subject. Nevertheless, the diachrony of digital product development has already sum various innovative solutions that allow user to buy and sell comfortably within amicable UI and UX experiences through established and studied design patterns.',
                    secondary_text: 'The research developed for Karko Corp was oriented to identify which design patterns our product needs and how we would implement them within our digital approach. Also, was to discover several goals our user must have in our digital shopping experience, to after illustrate what would be the steps to follow in order to achieve those goals in the most simple way. ',
                    list: {
                        title: 'Research Discoveries:',
                        list_items: [
                            '-Karko Corp main and more complex user flow was the steps needed for make a purchase successfully.',
                            '-There were several applicable design patterns to our product, but we distilled the most important.',
                            '-There were several improvements for the first sketches made for this project.',
                            '-A turquoise palette was ideal for our brand concept, searching for an organic and sustainable approach.',
                        ]
                    }
                },
                {
                    name: 'Architecture',
                    title: 'Navigation structure map',
                    primary_image:  '../../assets/img/karko/step2_primary.svg',
                    secondary_image: null,
                    primary_text: 'A navigation structure function as a first visualization of our possible user paths and actions, with a hierarchy system from top to bottom that tell us which parts are more important than others. It must not be followed exactly as it was constructed on the first time, because when developing a product design this hierarchy could change or be refined through experience. ',
                    secondary_text: 'Karko Corp Navigation Map was built in two profound levels, it is a simple navigation map that does not imply excessively profound paths possibilities, making the user experience less complicated in a less massive digital product, something that examples as Amazon lacks. Karko Corp was meant to be built as an optimal space for shopping, without adding unnecessary features that only complicates the user experience. ',
                    list: {
                        title: 'Navigation structure map results:',
                        list_items: [
                            '-General visualization of our product through hierarchical syntax.',
                            '-Identify possible user paths to access several branches of our product.',
                            '-First approximation to where we can build user experience solutions and interfaces.',
                            '-Discovery of several branches within our digital product structure.',
                        ]
                    }
                },
                {
                    name: 'Wireframing',
                    title: 'User flows and Wireframing',
                    primary_image:  '../../assets/img/karko/step3_primary.svg',
                    secondary_image: '../../assets/img/karko/step3_secondary.svg',
                    primary_text: 'Once identified the main actions that the user takes with the Navigation Structure Map definition, we started building several user flows to better understand these actions and how the user could accomplish them without difficulties, establishing design patterns that best fits to our product development and purpose, a seamlessly experience to shopping art supplies.',
                    secondary_text: 'With Navigation Map Structure discoveries we could find various user flows to fulfil in our product, for that purpose we needed a process visualization of these steps represented in User Flows and translated into prototyped UX Wireframes. These wireframes allow us to better understand our product experience reality and also discover new possible solutions through on-road resolutions. Here we applied our three steps process: Identify - Design - Iterate, until encounter the most convenient match for our product.',
                    list: {
                        title: 'User flows and Wireframes results:',
                        list_items: [
                            '-An structured and responsive design plan and layout for our product.',
                            '-Identified design patterns to use in our product.',
                            '-Visualization of the user path that we proposed within prototyped Wireframes.',
                            '-Base wireframes for final art prototypes ready to implement',
                            '-Insightful debate to discover new creative solutions to our experience design problems.',
                        ]
                    }
                },
                {
                    name: 'Design system',
                    title: 'Design system Results',
                    primary_image:  '../../assets/img/karko/step4_primary.svg',
                    secondary_image: null,
                    primary_text: 'Karko Corp component’s building was thought as a iconic identifier of the branch in every aspect. These components were built by specific Design System rules such as typography and colour hierarchy. With from scratch icons implemented in our design as fast concept communication through minimum denotations. ',
                    secondary_text: 'This design system concretes a colour palette for digital purposes and extended typography system aligned with original interaction design and patterns. Translating the built UX Wireframes paths and flows in a stylish outcome that convey Karko Corp’s brand visual identity. We applied several shopping most-used design patterns found in Amazon, Shopify, and others as example of success.',
                    list: {
                        title: 'Design system results:',
                        list_items: [
                            '-Colour Palette for digital product building',
                            '-Typography system for digital product building',
                            '-Components created through brand guidelines with original outcomes',
                            '-UX/UI resources to elaborate final art screens and UX flows aligned with brand´s visual identity',
                        ]
                    }
                },
                {
                    name: 'Results',
                    title: 'Final art',
                    primary_image:  null,
                    secondary_image: null,
                    primary_text: 'The Final Art and layout is the refinement of all the previous work resulting in a well-cared design system that englobes and accomplish all the pointed needs of our product regarding of what we want to create and how we can do it for. In this way, the Final Art is the product of all the previous steps that guaranteed the success of our product design achievement. ',
                    secondary_text: 'Karko Corp’s Final Art outcome is constituted in numerous final art layouts and wireframes ready to be implemented by a web development team or IT programmers. Some of them were dynamic approaches from previous complicated proposes, enhancing the user experience significantly. The outcome was specially meaningful regarding personal learning and experience. ',
                    list: {
                        title: 'Final art results:',
                        list_items: [
                            '-Layout and component’s assemble to define our final design structure all over our digital product',
                            '-Bulk of digital resources such as videos, images, loaders, microinteractions and microanimations to enhance the user experience',
                            '-Final Design prototype ready for development implementation based on Wireframes prototype logics',
                        ]
                    }
                },
            ],
            animated_gifs: [
                '../../assets/img/carbon_journey/carbon_1_gif.gif',
                '../../assets/img/carbon_journey/carbon_2_gif.gif',
            ],
            aditional_content: [
                '../../assets/img/karko/aditional_1.png',
            ],
            analysis: {
                name: 'Analysis',
                title: 'I would improve',
                primary_text: 'Karko Corp was one of my first experiences of creating digital product designs from scratch, It involved a lot of acquired knowledge to apply in future projects regarding Design Patterns and best approaches for user experience success. It was also a personal project, created from mind and composition liberty, without the constraints of programming limitations or client schedules. ',
                secondary_text: 'As one of my first projects, it implied lack for several design principles that in the present I have always on my mind, this was a project of learning an growth in the UX/UI design path, for what I’m eternally grateful, nevertheless. the lack of a defined structure and component’s building would improve this project to even higher design standards.',
                list: {
                    title: 'Learnings:',
                    list_items: [
                        '-Identify needed design patterns for a product will ease the understanding of what we need to build in our design',
                        '-Structured work paths will make the design process faster and more efficient',
                        '-Awareness of our product reality will enhance our product outcome significantly through a profound understanding of our core digital concept'
                    ]
                }
            }
        }
    }
}






