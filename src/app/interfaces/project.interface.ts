export interface IProject {
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
                    'Visual Identity',
                    'Architecture',
                    'Wireframing',
                    'Design System',
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
                }
            ]
        } 

        this[1] = {
            name: 'CB- ETL Tool',
            cardImage: '../../assets/img/cbpi/cbpi_card.svg',
            mainImage: '../../assets/img/cbpi/cbpi_large.svg',
            mainPNG: '../../assets/img/carbon_journey/graphic.png',
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
                    'Design System',
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
                }
            ]
        }
        this[2] = {
            name: 'Swappinc',
            cardImage: '../../assets/img/swappinc/swappinc_card.svg',
            mainImage: '../../assets/img/swappinc/swappinc_large.svg',
            mainPNG: '../../assets/img/carbon_journey/graphic.png',
            country: 'Spain',
            title: 'Swappinc: Where the bartering experience succeeds',
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
                    'Visual Identity',
                    'Product Manual',
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
                }
            ]
        }
        this[3] = {
            name: 'Karko Corp',
            cardImage: '../../assets/img/karko/karko_card.svg',
            mainImage: '../../assets/img/karko/karko_large.svg',
            mainPNG: '../../assets/img/carbon_journey/graphic.png',
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
                    'Design System',
                    'Final Art'
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
                }
            ]
        }
    }
}






