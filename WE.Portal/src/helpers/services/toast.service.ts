import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    constructor(private messagerService:MessageService){

    }

    success(message:string){
        this.messagerService.add({severity:'success',detail:message})
    }
    error(messageError:string){
        this.messagerService.add({severity:'error',detail:messageError})
    }

    info(summary:string,messageInfo:string){
        this.messagerService.add({severity:'info',summary:summary,detail:messageInfo,closable:false})
    }
}