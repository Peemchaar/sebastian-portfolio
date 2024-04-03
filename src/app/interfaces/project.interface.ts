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
            }
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
            }
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
            }
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
            }
        }
    }
}






