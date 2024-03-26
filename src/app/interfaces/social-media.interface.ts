export interface ISocialMedia {
    name: string
    link: string
}


export class SocialMediaList extends Array<ISocialMedia> {
    constructor(){
        super();
        this[0] = {
            name: 'Instagram',
            link: 'https://www.instagram.com/painting_existence/'
        }
        this[1] = {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/sebastián-rodríguez-222834191'
        }
        this[2] = {
            name: 'Whatsapp',
            link: 'https://wa.me/+14073603170?text=Hello'
        }
        this[3] = {
            name: 'Behance',
            link: 'https://www.behance.net/sebastirodrigu78'
        }
    }
}