export interface IProject {
    name: string
    cardImage: string
    mainImage: string
    country: string
}


export class ProjectsList extends Array<IProject> {
    constructor(){
        super();
        this[0] = {
            name: 'CarbonJourney',
            cardImage: '../../assets/img/carbon_card.svg',
            mainImage: '',
            country: 'Mexico'
        }
        this[1] = {
            name: 'CB- ETL Tool',
            cardImage: '../../assets/img/cbpi_card.svg',
            mainImage: '',
            country: 'Mexico'
        }
        this[2] = {
            name: 'Swappinc',
            cardImage: '../../assets/img/swappinc_card.svg',
            mainImage: '',
            country: 'Spain'
        }
        this[3] = {
            name: 'Karko Corp',
            cardImage: '../../assets/img/karko_card.svg',
            mainImage: '',
            country: 'Venezuela'
        }
    }
}

