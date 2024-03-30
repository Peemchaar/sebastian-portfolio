export interface IProject {
    name: string
    cardImage: string
    mainImage: string
    country: string
    title: string
    location: string
    motto: string
    intro: string
}


export class ProjectsList extends Array<IProject> {
    constructor(){
        super();
        this[0] = {
            name: 'CarbonJourney',
            cardImage: '../../assets/img/carbon_journey/carbon_card.svg',
            mainImage: '../../assets/img/carbon_journey/carbon_large.svg',
            country: 'Mexico',
            title: 'CarbonJourney: Decarbonization software',
            location: 'CBPI c.a & Ithaca Environmental, 2023 - ',
            motto: 'Allowing enterprises reduce their GHG emissions efficiently.',
            intro: 'Project your enterprise’s consumption and GHG emissions to create an structured and adaptable action plan that will reduce your emissions progressively based on your business growth and reality.'
        }
        this[1] = {
            name: 'CB- ETL Tool',
            cardImage: '../../assets/img/cbpi/cbpi_card.svg',
            mainImage: '../../assets/img/cbpi/cbpi_large.svg',
            country: 'Mexico',
            title: 'CB- ETL Tool',
            location: 'CBPI c.a, 2020 - ',
            motto: 'Enhancing data interpretation through enterprises with reliable data structures and processes.',
            intro: 'An ETL tool developed in one simple and adaptable platform, designed for all the data-reliability needs your enterprise could have.'
        }
        this[2] = {
            name: 'Swappinc',
            cardImage: '../../assets/img/swappinc/swappinc_card.svg',
            mainImage: '../../assets/img/swappinc/swappinc_large.svg',
            country: 'Spain',
            title: 'Swappinc: Where the bartering experience succeeds',
            location: 'Swappinc c.a, 2023 - ',
            motto: 'Creating innovative, fun and adventurous experiencies.',
            intro: 'Swappinc is the place where objects find the right value determined by the user through barter. In a fun, dynamic and organic way, Swappinc seeks to provide the user with a versatile and modern bartering platform.'
        }
        this[3] = {
            name: 'Karko Corp',
            cardImage: '../../assets/img/karko/karko_card.svg',
            mainImage: '../../assets/img/karko/karko_large.svg',
            country: 'Venezuela',
            title: 'Karko Corp: The digital art supply shopping true experience',
            location: 'Study Case, 2019 - ',
            motto: 'Creating well-cared digital solutions for shopping experiences.',
            intro: 'Innovating the shopping experience through design pattern solutions. A new experience for art supply shopping.'
        }
    }
}

