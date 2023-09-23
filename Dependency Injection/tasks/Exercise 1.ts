// class EmailNotifier {
//     sendEmail(receiver: string, subject: string, content: string) {
//         console.log(`Email sent to ${receiver} with subject "${subject}": ${content}`);
//     }
// }

// class MusicStore {
//     notifier: EmailNotifier;

//     constructor() {
//         this.notifier = new EmailNotifier();
//     }

//     newAlbumRelease(email: string, artist: string, album: string) {
//         this.notifier.sendEmail(email, "New Album Release", `The new album ${album} by ${artist} is now available!`);
//     }
// }


interface INotifier {
    sendNotification(receiver: string, message: string): void;
}

class EmailNotifier implements INotifier {
    sendNotification(receiver: string, message: string) {
        console.log(`Email sent to ${receiver}: ${message}`);
    }
}

class MusicStore {
    notifier: INotifier;

    constructor(notifier: INotifier) {
        this.notifier = notifier;
    }

    newAlbumRelease(email: string, artist: string, album: string) {
        const message = `The new album ${album} by ${artist} is now available!`;
        this.notifier.sendNotification(email, message);
    }
}