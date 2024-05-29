import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
selector:"[view-container]"
})

export class ViewContianer{
constructor(public viewContainer:ViewContainerRef){

}
}
