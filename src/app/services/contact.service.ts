import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    TEMPLATE_ID = 'template_n4av414'
    SERVICE_ID = 'service_wvzw2tj'
    PUBLIC_KEY = '7oQmxvUWuF431RGLf'
    constructor() {
    }

    init(){
        emailjs.init({
            publicKey: this.PUBLIC_KEY,
            blockHeadless: true,
            limitRate: {
              id: 'app',
              throttle: 10000,
            },
        });
    }

    async sendEmail(body: any){
        await emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, body, {
            publicKey: this.PUBLIC_KEY,
        })
        .then(
            () => {
            return 'SUCCESS!';
            },
            (error) => {
            return (error as EmailJSResponseStatus).text;
            },
        );
    }
}