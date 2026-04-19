import { PaperUploadSubject, AnalyticsObserver } from '../domain/events/ObserverPattern';

console.log("Observer Pattern Test");
const subject = new PaperUploadSubject();
const observer = new AnalyticsObserver();

let observerNotified = false;
observer.update = (data: any) => { observerNotified = true; };

subject.subscribe(observer);
subject.notifyAll({ paperId: "123" });

if (observerNotified) {
    console.log("Observer Test Passed: Analytics accurately notified on paper upload event without tight coupling.");
} else {
    console.error("Observer Test Failed.");
}
