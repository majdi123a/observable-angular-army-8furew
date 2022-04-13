import { Component, OnInit } from "@angular/core";
import { Observable, interval, Subscription } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  subscription: Subscription;
  person = {
    fullName() {
      return this.fName + " in fullName";
      // return 'some data';
    }
  };
  person1 = { fName: "User 1" };
  person2 = { fName: "User 2" };
  ngOnInit() {
    /* console.log('before first fn');
    console.log(this.person.fullName.call(this.person1));
    console.log('after first fn');
    console.log('before second fn');
    console.log(this.person.fullName.call(this.person2));
    console.log('after second fn'); */
    /* console.log('before obs');
    const obs$ = new Observable(subscriber => {
      subscriber.next(' in Observable');
      subscriber.next(' in Observable second next');
      setTimeout(() => {
        subscriber.next(' in Observable Async');
      }, 2000);
    }); */
    /* console.log('after obs');
    console.log('before first trigger');
    obs$.subscribe(message => {
      console.log(this.person1.fName + message);
    });
    console.log('after first trigger');
    obs$.subscribe(message => {
      console.log(this.person2.fName + message);
    }); */

    /* const obs2$ = new Observable(function subscribe(observer) {
      observer.next('some stream');
      observer.error('error');
      observer.complete();
      observer.next('some stream 2');
    });
    obs2$.subscribe(
      next => {
        console.log('success ', next);
      },
      err => {
        console.log('error is ', err);
      },
      () => {
        console.log('complete');
      }
    ); */
    this.subscription = interval(1000).subscribe(console.log);
    setTimeout(() => {
      this.subscription.unsubscribe();
    }, 5000);
  }
}
